import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { feedbackSchema } from '../../../lib/validations';
import { checkRateLimit } from '../../../lib/rate-limit';

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY!;

export async function POST(request: Request) {
  const supabase = createClient(SUPABASE_URL || 'dummy', SUPABASE_KEY || 'dummy');
  try {
    // Basic IP Rate Limiting (Using x-forwarded-for if behind proxy)
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    // Max 5 feedback submissions per minute
    if (!checkRateLimit(`feedback_${ip}`, 5, 60000)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const body = await request.json();
    
    // Validate with Zod
    const validatedData = feedbackSchema.parse(body);
    
    const { error: dbError } = await supabase
      .from('feedback')
      .insert([validatedData]);

    if (dbError) {
      console.error('Supabase Error:', dbError);
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('API Error:', err);
    if (err.name === 'ZodError') {
      return NextResponse.json({ error: 'Validation failed', details: err.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
