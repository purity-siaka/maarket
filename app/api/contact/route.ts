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
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const subject = String(body.subject || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All form fields are required." },
        { status: 422 }
      );
    }

    const transporter = createTransporter();

    await transporter.sendMail({
      from: smtpFrom,
      to: destinationEmail,
      replyTo: email,
      subject: `New MAARKET contact request: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form API error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to send contact message." },
      { status: 500 }
    );
  }
}
