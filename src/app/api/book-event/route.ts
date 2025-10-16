import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/Booking";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    await connectDB();

    const booking = await Booking.create(data);

    // ✅ Setup email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Admin Email Template
    const adminHtml = `
      <div style="font-family:Arial,sans-serif;padding:20px;background:#f8f8f8">
        <div style="max-width:600px;margin:auto;background:white;padding:20px;border-radius:8px;box-shadow:0 0 10px rgba(0,0,0,0.05)">
          <h2 style="color:#4CAF50;">🎉 New Event Booking Received</h2>
          <p style="font-size:15px;color:#333;">A new booking has been submitted on <b>Celebration Village</b>:</p>

          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px;border-bottom:1px solid #eee;"><b>Name</b></td><td>${data.name}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;"><b>Email</b></td><td>${data.email}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;"><b>Phone</b></td><td>${data.phone}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;"><b>Event Type</b></td><td>${data.eventType}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;"><b>Date</b></td><td>${data.date}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;"><b>Guests</b></td><td>${data.guestCount}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;"><b>Message</b></td><td>${data.message}</td></tr>
          </table>

          <p style="margin-top:20px;color:#888;font-size:13px;">You received this email because a user submitted a new event booking form.</p>
        </div>
      </div>
    `;

    // ✅ User Confirmation Email Template
    const userHtml = `
      <div style="font-family:Arial,sans-serif;padding:20px;background:#f9fafb">
        <div style="max-width:600px;margin:auto;background:white;padding:25px;border-radius:8px;box-shadow:0 0 10px rgba(0,0,0,0.05)">
          <h2 style="color:#4CAF50;">✅ Booking Confirmation</h2>
          <p style="font-size:15px;color:#333;">Hi <b>${data.name}</b>,</p>
          <p style="font-size:15px;color:#333;">Your event booking has been received successfully! Our team will reach out shortly with more details.</p>

          <div style="margin-top:20px;background:#f2f2f2;padding:10px 15px;border-radius:6px;">
            <p style="margin:0;color:#555;font-size:14px;"><b>Booking Summary:</b></p>
            <ul style="margin-top:5px;color:#555;font-size:14px;">
              <li><b>Event Type:</b> ${data.eventType}</li>
              <li><b>Date:</b> ${data.date}</li>
              <li><b>Guests:</b> ${data.guestCount}</li>
            </ul>
          </div>

          <p style="margin-top:20px;color:#333;">Thank you for choosing <b>Celebration Village</b> 🎊</p>

          <p style="font-size:12px;color:#aaa;margin-top:30px;text-align:center;">
            © ${new Date().getFullYear()} Celebration Village. All rights reserved.
          </p>
        </div>
      </div>
    `;

    // ✅ Send admin notification email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: "🎉 New Event Booking Received",
      html: adminHtml,
    });

    // ✅ Send confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: "✅ Your Event Booking Confirmation",
      html: userHtml,
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
