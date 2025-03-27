import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required!' },
        { status: 400 },
      );
    }

    // Configure Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // Use true for port 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email Options
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border-radius: 10px; background: #1a1a2e; color: white;">
          <h2 style="color: #a855f7;">New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #2a2a3e; padding: 10px; border-radius: 5px;">${message}</p>
          <br />
          <p style="font-size: 12px; color: #aaa;">This message was sent from your portfolio contact form.</p>
        </div>
      `,
    };

    // Send Email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully!',
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 },
    );
  }
}
