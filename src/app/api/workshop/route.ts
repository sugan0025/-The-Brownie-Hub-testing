import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { workshopReservationSchema } from '../../../lib/validations';
import { checkRateLimit } from '../../../lib/rate-limit';
import { getWorkshopById } from '../../../lib/workshops';

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    if (!checkRateLimit(`workshop_${ip}`, 5, 60000)) {
      return NextResponse.json({ error: 'Too many reservation requests. Please try again in a minute.' }, { status: 429 });
    }

    const body = await request.json();
    const validatedData = workshopReservationSchema.parse(body);

    // Anti-bot honeypot
    if (validatedData.b_website && validatedData.b_website.trim().length > 0) {
      console.warn('Bot workshop reservation blocked:', ip);
      return NextResponse.json({ success: true, booking_id: 'TBH-WS-000000' });
    }

    // Verify workshop validity and calculate exact price
    const workshop = getWorkshopById(validatedData.workshop_id);
    const unitPrice = workshop ? workshop.price : 1499;
    const verifiedTotal = unitPrice * validatedData.seats;

    const bookingId = `TBH-WS-${Date.now().toString().slice(-6)}`;

    const utmData = validatedData.utm_source 
      ? `\n\n--- Attribution ---\nSource: ${validatedData.utm_source}\nMedium: ${validatedData.utm_medium || 'N/A'}\nCampaign: ${validatedData.utm_campaign || 'N/A'}`
      : '';

    const dbRow = {
      customer_name: validatedData.attendee_name,
      customer_email: validatedData.attendee_email,
      customer_phone: validatedData.attendee_phone,
      order_type: `Workshop: ${validatedData.workshop_name} (${validatedData.selected_date}, ${validatedData.selected_slot})`,
      special_instructions: `Seats: ${validatedData.seats} | Slot: ${validatedData.selected_slot} | Notes: ${validatedData.special_notes || 'None'}${utmData}`,
      items: [
        {
          name: `${validatedData.workshop_name} Pass`,
          date: validatedData.selected_date,
          slot: validatedData.selected_slot,
          qty: validatedData.seats,
          price: unitPrice,
        },
      ],
      total_amount: String(verifiedTotal),
    };

    // Insert into Supabase
    try {
      const supabaseUrl = process.env.SUPABASE_URL;
      const supabaseKey = process.env.SUPABASE_ANON_KEY;
      if (supabaseUrl && supabaseKey) {
        const supabase = createClient(supabaseUrl, supabaseKey);
        // Try inserting into workshop_bookings or fallback to orders table
        const { error: wsError } = await supabase.from('workshop_bookings').insert([
          {
            booking_id: bookingId,
            workshop_id: validatedData.workshop_id,
            workshop_name: validatedData.workshop_name,
            selected_date: validatedData.selected_date,
            selected_slot: validatedData.selected_slot,
            seats: validatedData.seats,
            attendee_name: validatedData.attendee_name,
            attendee_email: validatedData.attendee_email,
            attendee_phone: validatedData.attendee_phone,
            total_amount: verifiedTotal,
            payment_status: 'Pending UPI / Cash Confirmation',
            notes: validatedData.special_notes || '',
            utm_source: validatedData.utm_source || '',
          },
        ]);

        if (wsError) {
          console.warn('workshop_bookings table not found or error, saving to orders table:', wsError.message);
          await supabase.from('orders').insert([dbRow]);
        }
      }
    } catch (dbErr) {
      console.error('Supabase workshop booking error:', dbErr);
    }

    return NextResponse.json({
      success: true,
      booking_id: bookingId,
      workshop_name: validatedData.workshop_name,
      selected_date: validatedData.selected_date,
      selected_slot: validatedData.selected_slot,
      seats: validatedData.seats,
      total_amount: verifiedTotal,
    });
  } catch (err: any) {
    console.error('Workshop API Error:', err?.message || err);
    if (err.name === 'ZodError') {
      return NextResponse.json({ error: 'Validation failed', details: err.errors }, { status: 400 });
    }
    return NextResponse.json({ error: err?.message || 'Internal Server Error' }, { status: 500 });
  }
}
