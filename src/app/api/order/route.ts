/**
 * // Dear programmer:
 * // When I wrote this dual-proxy EmailJS + Supabase price-integrity pipeline,
 * // only God and I knew how it worked.
 * // Now, only God knows it!
 * //
 * // Warning: If you touch the Promise.allSettled() or the server-side price recalculation,
 * // you will anger the EmailJS rate-limiter demons.
 * //
 * // total_hours_wasted_here = 32
 * // chocolate_lava_cakes_eaten_during_debugging = 14
 */
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { orderSchema } from '../../../lib/validations';
import { checkRateLimit } from '../../../lib/rate-limit';
import { CATEGORIES } from '../../../lib/products';

// Helper to find official catalog price server-side
function getCatalogPrice(itemName: string): number | null {
  for (const cat of Object.values(CATEGORIES)) {
    const item = cat.items.find(i => i.name.toLowerCase() === itemName.toLowerCase());
    if (item) return item.price;
  }
  return null;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    if (!checkRateLimit(`order_${ip}`, 3, 60000)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const body = await request.json();
    const validatedData = orderSchema.parse(body);

    // Anti-spam honeypot detection: silently drop bot submissions
    if (validatedData.b_website && validatedData.b_website.trim().length > 0) {
      console.warn('Bot submission blocked via honeypot:', ip);
      return NextResponse.json({ success: true });
    }

    // Server-side Price Verification & Recalculation
    let serverTotal = 0;
    const verifiedItems = validatedData.items.map((item: any) => {
      const catalogPrice = getCatalogPrice(item.name);
      const verifiedPrice = catalogPrice !== null ? catalogPrice : (Number(item.price) || 0);
      const qty = Math.max(1, Math.min(99, Number(item.qty) || 1));
      serverTotal += verifiedPrice * qty;
      return {
        name: String(item.name),
        qty: qty,
        price: verifiedPrice,
      };
    });

    const finalTotal = serverTotal > 0 ? serverTotal : validatedData.total_amount;

    const utmData = validatedData.utm_source 
      ? `\n\n--- Marketing Attribution ---\nSource: ${validatedData.utm_source}\nMedium: ${validatedData.utm_medium || 'N/A'}\nCampaign: ${validatedData.utm_campaign || 'N/A'}`
      : '';

    const addressBlock = `\n\n--- Delivery Details ---\nAddress: ${validatedData.delivery_address}\nPincode: ${validatedData.pincode}`;

    // Explicitly map to Supabase column structure
    const dbRow = {
      customer_name: validatedData.customer_name,
      customer_email: validatedData.customer_email,
      customer_phone: validatedData.customer_phone,
      special_instructions: (validatedData.special_instructions || 'None') + addressBlock + utmData,
      order_type: validatedData.order_type || 'Cart Checkout',
      items: verifiedItems,
      total_amount: String(finalTotal),
    };

    // Build email params (shared between customer receipt and owner notification)
    const emailParams = {
      customer_name: validatedData.customer_name || 'WhatsApp Shopper',
      customer_email: validatedData.customer_email || 'None',
      customer_phone: validatedData.customer_phone || 'WhatsApp Chat',
      order_items: verifiedItems
        .map((i: any) => `${i.name} (x${i.qty}) - ₹${i.price || 0}`)
        .join(' | '),
      total_amount: String(finalTotal),
      notes: (validatedData.special_instructions || 'None') + addressBlock + utmData,
      delivery_address: validatedData.delivery_address || 'Direct WhatsApp Checkout',
      pincode: validatedData.pincode || '638401',
      utm_source: validatedData.utm_source || '',
      utm_medium: validatedData.utm_medium || '',
      utm_campaign: validatedData.utm_campaign || '',
    };

    // Build email promises list
    const emailPromises: Promise<Response>[] = [];

    // Customer email receipt (only if valid email provided and not a WhatsApp placeholder)
    if (validatedData.customer_email && validatedData.customer_email.includes('@') && !validatedData.customer_email.includes('whatsapp')) {
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

    // Owner notification email (always sent to bakery)
    emailPromises.push(
      fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: process.env.EMAILJS_SERVICE_ID,
          template_id: 'template_p0g9s8k',
          user_id: process.env.EMAILJS_PUBLIC_KEY,
          accessToken: process.env.EMAILJS_PRIVATE_KEY,
          template_params: {
            to_email: 'therollingoven26@gmail.com',
            ...emailParams,
          },
        }),
      })
    );

    const emailResults = await Promise.allSettled(emailPromises);

    // Log email errors if any
    for (let i = 0; i < emailResults.length; i++) {
      const res = emailResults[i];
      const label = i === 0 ? 'Customer' : 'Owner';
      if (res.status === 'rejected') {
        console.error(`EmailJS ${label} rejected:`, res.reason);
      } else if (!res.value.ok) {
        const t = await res.value.text();
        console.error(`EmailJS ${label} error:`, t);
      }
    }

    // Insert into Supabase
    try {
      const supabaseUrl = process.env.SUPABASE_URL;
      const supabaseKey = process.env.SUPABASE_ANON_KEY;
      if (supabaseUrl && supabaseKey) {
        const supabase = createClient(supabaseUrl, supabaseKey);
        const { error: dbError } = await supabase.from('orders').insert([dbRow]);
        if (dbError) console.error('Supabase insert error:', dbError);
      }
    } catch (dbErr) {
      console.error('Supabase crash:', dbErr);
    }

    return NextResponse.json({ success: true, verified_total: finalTotal });
  } catch (err: any) {
    console.error('Order API Error:', err?.message || err);
    if (err.name === 'ZodError') {
      return NextResponse.json({ error: 'Validation failed', details: err.errors }, { status: 400 });
    }
    return NextResponse.json({ error: err?.message || 'Internal Server Error' }, { status: 500 });
  }
}
