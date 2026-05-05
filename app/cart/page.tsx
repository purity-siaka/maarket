"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/CartContext";

export default function CartPage() {
  const { items, increaseItem, decreaseItem, removeItem, totalPrice } =
    useCart();

  const [phone, setPhone] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [isPaying, setIsPaying] = useState(false);

  async function handleMpesaPayment() {
    setPaymentStatus("");

    if (!phone.trim()) {
      setPaymentStatus("Please enter your M-Pesa phone number.");
      return;
    }

    try {
      setIsPaying(true);

      const response = await fetch("/api/mpesa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone,
          amount: totalPrice,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setPaymentStatus(data.error || "Payment request failed.");
        return;
      }

      if (data.ResponseCode === "0") {
        setPaymentStatus(
          "STK Push sent. Check your phone and enter your M-Pesa PIN."
        );
      } else {
        setPaymentStatus(
          data.errorMessage ||
            data.ResponseDescription ||
            "M-Pesa did not accept the request."
        );
      }
    } catch {
      setPaymentStatus("Something went wrong. Please try again.");
    } finally {
      setIsPaying(false);
    }
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold">Your Cart</h1>

      {items.length === 0 ? (
        <div className="mt-10 rounded-2xl bg-neutral-900 p-8">
          <p className="text-neutral-300">Your cart is empty.</p>

          <Link
            href="/shop"
            className="mt-6 inline-block rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black hover:bg-yellow-300"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="mt-10 space-y-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 rounded-2xl bg-neutral-900 p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-neutral-400">${item.price} each</p>
                <p className="mt-1 text-sm text-neutral-300">
                  Subtotal: ${item.price * item.quantity}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center rounded-full border border-neutral-700">
                  <button
                    onClick={() => decreaseItem(item.id)}
                    className="px-4 py-2 text-lg hover:text-yellow-400"
                  >
                    −
                  </button>

                  <span className="min-w-8 text-center">{item.quantity}</span>

                  <button
                    onClick={() => increaseItem(item.id)}
                    className="px-4 py-2 text-lg hover:text-yellow-400"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-sm text-red-400 hover:text-red-300"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="border-t border-neutral-800 pt-6">
            <p className="text-2xl font-bold">Total: ${totalPrice}</p>

            <div className="mt-6 rounded-2xl bg-neutral-900 p-6">
              <label className="block text-sm font-medium text-neutral-300">
                M-Pesa phone number
              </label>

              <input
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="07XXXXXXXX"
                className="mt-2 w-full rounded-xl border border-neutral-700 bg-black px-4 py-3 text-white outline-none focus:border-yellow-400"
              />

              <button
                onClick={handleMpesaPayment}
                disabled={isPaying}
                className="mt-4 rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isPaying ? "Sending STK Push..." : "Pay with M-Pesa"}
              </button>

              {paymentStatus && (
                <p className="mt-4 text-sm text-neutral-300">{paymentStatus}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}