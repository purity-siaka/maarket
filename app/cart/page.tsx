"use client";

import Link from "next/link";
import { useCart } from "@/components/CartContext";

export default function CartPage() {
  const {
    items,
    increaseItem,
    decreaseItem,
    removeItem,
    totalPrice,
  } = useCart();

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
                <p className="text-sm text-neutral-400">
                  ${item.price} each
                </p>
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

                  <span className="min-w-8 text-center">
                    {item.quantity}
                  </span>

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

            <button className="mt-6 rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black hover:bg-yellow-300">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </main>
  );
}