import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { contactSchema } from '../../../lib/validations';
import { checkRateLimit } from '../../../lib/rate-limit';

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    if (!checkRateLimit(`contact_${ip}`, 5, 60000)) {
      return NextResponse.json({ error: 'Too many requests. Please wait a moment.' }, { status: 429 });
    }

    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    if (validatedData.b_website && validatedData.b_website.trim().length > 0) {
      console.warn('Bot contact submission blocked:', ip);
      return NextResponse.json({ success: true });
    }

    // Persist inquiry to Supabase
    try {
      const supabaseUrl = process.env.SUPABASE_URL;
      const supabaseKey = process.env.SUPABASE_ANON_KEY;
      if (supabaseUrl && supabaseKey) {
        const supabase = createClient(supabaseUrl, supabaseKey);
        await supabase.from('contacts').insert([
          {
            name: validatedData.name,
            email: validatedData.email,
            phone: validatedData.phone,
            message: `[${validatedData.inquiry_type}] ${validatedData.message}`,
          },
        ]);
      }
    } catch (e) {
      console.error('Supabase contact insert error:', e);
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    if (err.name === 'ZodError') {
      return NextResponse.json({ error: 'Validation failed', details: err.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
