import { NextResponse } from "next/server";
import * as XLSX from "xlsx";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // ✅ Save to Excel
    const filePath = path.join(process.cwd(), "bookings.xlsx");
    let workbook, worksheet;

    if (fs.existsSync(filePath)) {
      workbook = XLSX.readFile(filePath);
      worksheet = workbook.Sheets[workbook.SheetNames[0]];
    } else {
      workbook = XLSX.utils.book_new();
      worksheet = XLSX.utils.json_to_sheet([]);
      XLSX.utils.book_append_sheet(workbook, worksheet, "Bookings");
    }

    const existingData = XLSX.utils.sheet_to_json(worksheet);
    const newData = [...existingData, data];
    const newWorksheet = XLSX.utils.json_to_sheet(newData);
    workbook.Sheets[workbook.SheetNames[0]] = newWorksheet;
    XLSX.writeFile(workbook, filePath);

    // ✅ Send Email Notifications
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Admin notification
    await transporter.sendMail({
      from: `"Event Booking" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "📩 New Event Booking Received",
      text: `
New booking received:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Event Type: ${data.eventType}
Date: ${data.date}
Guests: ${data.guestCount}
Message: ${data.message}
      `,
    });

    // User confirmation
    await transporter.sendMail({
      from: `"Event Booking" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: "✅ Your Event Booking Confirmation",
      text: `Hi ${data.name},\n\nWe’ve received your booking for "${data.eventType}". We’ll get in touch with you shortly.\n\nThank you!`,
    });

    return NextResponse.json({
      success: true,
      message: "Booking saved and emails sent",
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Failed to process booking" },
      { status: 500 }
    );
  }
}
