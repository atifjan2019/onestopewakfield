import { NextResponse } from 'next/server';
import { initDb, openDb } from '@/lib/db';

let dbInitialized = false;

async function getDb() {
  if (!dbInitialized) {
    await initDb();
    dbInitialized = true;
  }
  return await openDb();
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');
    
    if (!date) {
      return NextResponse.json({ error: "Date parameter is required" }, { status: 400 });
    }

    const db = await getDb();
    const bookings = await db.all('SELECT booking_time FROM bookings WHERE booking_date = ? AND status != "cancelled"', [date]);
    
    const bookedSlots = bookings.map(b => b.booking_time);
    return NextResponse.json({ bookedSlots });
  } catch (error) {
    console.error("GET bookings error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, service, car_reg, booking_date, booking_time } = body;

    if (!name || !phone || !service || !booking_date || !booking_time) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const db = await getDb();
    
    // Ensure no double-booking
    const existing = await db.get(
      'SELECT id FROM bookings WHERE booking_date = ? AND booking_time = ? AND status != "cancelled"', 
      [booking_date, booking_time]
    );
    
    if (existing) {
      return NextResponse.json({ error: "This time slot is already booked. Please choose another." }, { status: 409 });
    }

    const result = await db.run(
      `INSERT INTO bookings (name, phone, service, car_reg, booking_date, booking_time) VALUES (?, ?, ?, ?, ?, ?)`,
      [name, phone, service, car_reg || '', booking_date, booking_time]
    );

    return NextResponse.json({ success: true, bookingId: result.lastID });
  } catch (error) {
    console.error("POST bookings error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
