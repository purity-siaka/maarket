import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  console.log("M-Pesa Callback:", JSON.stringify(data, null, 2));

  return NextResponse.json({
    ResultCode: 0,
    ResultDesc: "Callback received successfully",
  });
}