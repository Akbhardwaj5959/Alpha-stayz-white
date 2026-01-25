import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, phone, email, location, checkIn, checkOut, message } = data;

    // Transporter Setup
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Email for Admin (You)
    const mailOptionsAdmin = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Booking Request: ${name}`,
      html: `
        <h3>New Booking Enquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Dates:</strong> ${checkIn} to ${checkOut}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // 2. Email for Customer (Confirmation)
    const mailOptionsUser = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Booking Received - Alpha Stayz',
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #E5B80B;">Thank You, ${name}!</h2>
          <p>We have received your booking request for <strong>${location}</strong>.</p>
          <p><strong>Check-in:</strong> ${checkIn}<br><strong>Check-out:</strong> ${checkOut}</p>
          <p>Our team will call you shortly to confirm availability.</p>
          <p>Warm Regards,<br><strong>Team Alpha Stayz</strong></p>
        </div>
      `,
    };

    // Send Both Emails
    await Promise.all([
        transporter.sendMail(mailOptionsAdmin),
        transporter.sendMail(mailOptionsUser)
    ]);

    return NextResponse.json({ message: "Emails sent successfully!" }, { status: 200 });

  } catch (error) {
    console.error("Email API Error:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}