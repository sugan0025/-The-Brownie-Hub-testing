import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { orderSchema } from '../../../lib/validations';
import { checkRateLimit } from '../../../lib/rate-limit';
import { getCatalogItemPrice } from '../../../lib/products';

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    if (!checkRateLimit(`order_${ip}`, 4, 60000)) {
      return NextResponse.json({ error: 'Too many requests. Please wait a moment.' }, { status: 429 });
    }

    const body = await request.json();
    const validatedData = orderSchema.parse(body);

    // Anti-spam honeypot detection
    if (validatedData.b_website && validatedData.b_website.trim().length > 0) {
      console.warn('Bot submission silently dropped via honeypot:', ip);
      return NextResponse.json({ success: true, verified_total: 0 });
    }

    // Server-side Price Verification & Recalculation
    let serverTotal = 0;
    const verifiedItems = validatedData.items.map((item: any) => {
      const catalogPrice = getCatalogItemPrice(item.name);
      const verifiedPrice = catalogPrice !== null ? catalogPrice : (Number(item.price) || 0);
      const qty = Math.max(1, Math.min(99, Number(item.qty) || 1));
      serverTotal += verifiedPrice * qty;
      return {
        name: String(item.name),
        qty: qty,
        price: verifiedPrice,
        breakdown: item.breakdown || [],
      };
    });

    const finalTotal = serverTotal > 0 ? serverTotal : validatedData.total_amount;

    const utmData = validatedData.utm_source 
      ? `\n\n--- Marketing Attribution ---\nSource: ${validatedData.utm_source}\nMedium: ${validatedData.utm_medium || 'N/A'}\nCampaign: ${validatedData.utm_campaign || 'N/A'}`
      : '';

    const addressBlock = `\n\n--- Delivery Details ---\nAddress: ${validatedData.delivery_address}\nPincode: ${validatedData.pincode}\nPayment: ${validatedData.payment_method}`;

    // Map to Supabase orders table
    const dbRow = {
      customer_name: validatedData.customer_name,
      customer_email: validatedData.customer_email,
      customer_phone: validatedData.customer_phone,
      special_instructions: (validatedData.special_instructions || 'None') + addressBlock + utmData,
      order_type: validatedData.order_type || 'The Brownie Hub Web Order',
      items: verifiedItems,
      total_amount: String(finalTotal),
    };

    const formattedOrderItems = verifiedItems
      .map((i: any) => {
        const bd = i.breakdown && i.breakdown.length > 0 ? ` (${i.breakdown.join(', ')})` : '';
        return `${i.name}${bd} (x${i.qty}) - ₹${i.price * i.qty}`;
      })
      .join(' | ');

    // Email params
    const emailParams = {
      customer_name: validatedData.customer_name || 'Brownie Lover',
      customer_email: validatedData.customer_email || 'None',
      customer_phone: validatedData.customer_phone || 'WhatsApp Direct',
      order_items: formattedOrderItems,
      total_amount: `₹${finalTotal}`,
      notes: (validatedData.special_instructions || 'None') + addressBlock + utmData,
      delivery_address: validatedData.delivery_address || 'Chennai Local Delivery',
      pincode: validatedData.pincode || '600001',
      utm_source: validatedData.utm_source || '',
      utm_medium: validatedData.utm_medium || '',
      utm_campaign: validatedData.utm_campaign || '',
    };

    const emailPromises: Promise<Response>[] = [];

    // Customer email receipt (if valid email provided)
    if (
      validatedData.customer_email &&
      validatedData.customer_email.includes('@') &&
      !validatedData.customer_email.includes('whatsapp')
    ) {
      if (process.env.EMAILJS_SERVICE_ID && process.env.EMAILJS_TEMPLATE_ID && process.env.EMAILJS_PUBLIC_KEY) {
        emailPromises.push(
          fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              service_id: process.env.EMAILJS_SERVICE_ID,
              template_id: process.env.EMAILJS_TEMPLATE_ID,
              user_id: process.env.EMAILJS_PUBLIC_KEY,
              accessToken: process.env.EMAILJS_PRIVATE_KEY,
              template_params: {
                to_email: validatedData.customer_email,
                ...emailParams,
              },
            }),
          })
        );
      }
    }

    // Owner notification email
    if (process.env.EMAILJS_SERVICE_ID && process.env.EMAILJS_PUBLIC_KEY) {
      emailPromises.push(
        fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service_id: process.env.EMAILJS_SERVICE_ID,
            template_id: process.env.EMAILJS_TEMPLATE_ID,
            user_id: process.env.EMAILJS_PUBLIC_KEY,
            accessToken: process.env.EMAILJS_PRIVATE_KEY,
            template_params: {
              to_email: process.env.OWNER_EMAIL || 'thebrowniehubb@gmail.com',
              ...emailParams,
            },
          }),
        })
      );
    }

    if (emailPromises.length > 0) {
      await Promise.allSettled(emailPromises);
    }

    // Persist to Supabase
    try {
      const supabaseUrl = process.env.SUPABASE_URL;
      const supabaseKey = process.env.SUPABASE_ANON_KEY;
      if (supabaseUrl && supabaseKey) {
        const supabase = createClient(supabaseUrl, supabaseKey);
        const { error: dbError } = await supabase.from('orders').insert([dbRow]);
        if (dbError) console.error('Supabase orders insert error:', dbError);
      }
    } catch (dbErr) {
      console.error('Supabase connection error:', dbErr);
    }

    const orderId = `TBH-${Date.now().toString().slice(-6)}`;
    return NextResponse.json({
      success: true,
      order_id: orderId,
      verified_total: finalTotal,
      items: verifiedItems,
    });
  } catch (err: any) {
    console.error('Order API Error:', err?.message || err);
    if (err.name === 'ZodError') {
      return NextResponse.json({ error: 'Validation failed', details: err.errors }, { status: 400 });
    }
    return NextResponse.json({ error: err?.message || 'Internal Server Error' }, { status: 500 });
  }
}
