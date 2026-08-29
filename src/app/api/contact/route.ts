import { NextResponse } from 'next/server';
import { checkRateLimit } from '../../../lib/rate-limit';
import { contactSchema } from '../../../lib/validations';

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    if (!checkRateLimit(`contact_${ip}`, 5, 60000)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const body = await request.json();
    const data = contactSchema.parse(body);

    // Anti-spam honeypot detection: silently drop bot submissions
    if (data.b_website && data.b_website.trim().length > 0) {
      console.warn('Bot inquiry blocked via honeypot:', ip);
      return NextResponse.json({ success: true });
    }

    // Send inquiry notification to owner via EmailJS
    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: 'template_p0g9s8k',
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        accessToken: process.env.EMAILJS_PRIVATE_KEY,
        template_params: {
          to_email: 'therollingoven26@gmail.com',
          customer_name: data.name,
          customer_email: data.email,
          customer_phone: data.phone,
          order_items: `Inquiry regarding: ${data.product}`,
          total_amount: 'N/A (Inquiry)',
          notes: data.message || 'No specific notes provided',
        },
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error('EmailJS contact error:', text);
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Contact API Error:', err);
    if (err.name === 'ZodError') {
      return NextResponse.json({ error: 'Validation failed', details: err.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
