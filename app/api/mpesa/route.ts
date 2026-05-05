import { NextResponse } from "next/server";

export const runtime = "nodejs";

function formatPhoneNumber(phone: string) {
  const cleaned = phone.replace(/\D/g, "");

  if (cleaned.startsWith("254") && cleaned.length === 12) {
    return cleaned;
  }

  if (cleaned.startsWith("07") && cleaned.length === 10) {
    return `254${cleaned.slice(1)}`;
  }

  if (cleaned.startsWith("7") && cleaned.length === 9) {
    return `254${cleaned}`;
  }

  return cleaned;
}

function getTimestamp() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  const second = String(now.getSeconds()).padStart(2, "0");

  return `${year}${month}${day}${hour}${minute}${second}`;
}

async function getAccessToken() {
  const consumerKey = process.env.MPESA_CONSUMER_KEY;
  const consumerSecret = process.env.MPESA_CONSUMER_SECRET;

  if (!consumerKey || !consumerSecret) {
    throw new Error("Missing M-Pesa consumer key or secret");
  }

  const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString(
    "base64"
  );

  const response = await fetch(
    "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${auth}`,
      },
      cache: "no-store",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.errorMessage || "Failed to get M-Pesa access token");
  }

  return data.access_token as string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const phone = formatPhoneNumber(String(body.phone || ""));
    const amount = Math.max(1, Math.round(Number(body.amount || 0)));

    if (!phone || phone.length !== 12 || !phone.startsWith("254")) {
      return NextResponse.json(
        { error: "Use a valid phone number like 07XXXXXXXX or 2547XXXXXXXX" },
        { status: 400 }
      );
    }

    if (!amount || amount < 1) {
      return NextResponse.json(
        { error: "Amount must be at least 1" },
        { status: 400 }
      );
    }

    const shortCode = process.env.MPESA_SHORTCODE || "174379";
    const passKey = process.env.MPESA_PASSKEY;
    const callbackUrl =
      process.env.MPESA_CALLBACK_URL || "https://example.com/api/mpesa/callback";

    if (!passKey) {
      return NextResponse.json(
        { error: "Missing M-Pesa passkey" },
        { status: 500 }
      );
    }

    const accessToken = await getAccessToken();
    const timestamp = getTimestamp();

    const password = Buffer.from(
      `${shortCode}${passKey}${timestamp}`
    ).toString("base64");

    const stkResponse = await fetch(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          BusinessShortCode: shortCode,
          Password: password,
          Timestamp: timestamp,
          TransactionType: "CustomerPayBillOnline",
          Amount: amount,
          PartyA: phone,
          PartyB: shortCode,
          PhoneNumber: phone,
          CallBackURL: callbackUrl,
          AccountReference: "MAARKET",
          TransactionDesc: "MAARKET cart payment",
        }),
      }
    );

    const stkData = await stkResponse.json();

    return NextResponse.json(stkData, { status: stkResponse.status });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong while starting M-Pesa payment",
      },
      { status: 500 }
    );
  }
}