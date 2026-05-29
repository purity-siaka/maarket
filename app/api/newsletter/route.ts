import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactEmail } from "@/data/site";

const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const smtpFrom = process.env.SMTP_FROM || smtpUser || "no-reply@maarket.local";
const destinationEmail = process.env.CONTACT_EMAIL || contactEmail;

function createTransporter() {
  if (!smtpHost || !smtpUser || !smtpPass) {
    throw new Error(
      "Email delivery is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS."
    );
  }

  return nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = String(body.email || "").trim().toLowerCase();

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 422 }
      );
    }

    const transporter = createTransporter();

    await transporter.sendMail({
      from: smtpFrom,
      to: destinationEmail,
      subject: `New newsletter sign-up: ${email}`,
      text: `New newsletter subscriber: ${email}`,
      html: `<p>New newsletter subscriber: <strong>${email}</strong></p>`,
    });

    await transporter.sendMail({
      from: smtpFrom,
      to: email,
      subject: "Welcome to MAARKET",
      text: `Thanks for subscribing to MAARKET. You’ll receive updates about new artisan drops, offers, and cultural stories.`,
      html: `
        <p>Thanks for subscribing to <strong>MAARKET</strong>.</p>
        <p>You’ll receive updates about new artisan drops, offers, and cultural stories.</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Newsletter API error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to process newsletter signup." },
      { status: 500 }
    );
  }
}
