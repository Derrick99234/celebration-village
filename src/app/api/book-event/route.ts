import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/Booking";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    await connectDB();

    const booking = await Booking.create(data);

    // Send notification email to admin
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: "🎉 New Event Booking Received",
      text: `New Booking:\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nEvent Type: ${data.eventType}\nDate: ${data.date}\nGuests: ${data.guestCount}\nMessage: ${data.message}`,
    });

    // Confirmation email to user
    await transporter.sendMail({
      from: process.env.ADMIN_EMAIL,
      to: data.email,
      subject: "✅ Event Booking Confirmation",
      text: `Hi ${data.name},\n\nYour event booking has been received successfully!\nWe'll get in touch soon.\n\nThank you for choosing Celebration Village!`,
    });

    return NextResponse.json({ success: true, booking });
  } catch (err) {
    console.error("Booking API Error:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
