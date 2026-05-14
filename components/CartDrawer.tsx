"use client";

import { useCart } from "./CartContext";
import { motion, AnimatePresence } from "motion/react";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export default function CartDrawer() {
  const { items, isCartOpen, closeCart, increaseItem, decreaseItem, removeItem, totalPrice } = useCart();

  // Helper to get image since CartItem doesn't store the image URL directly
  const getProductImage = (id: string) => {
    return products.find(p => p.id === id)?.image || "/images/placeholder.jpg";
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-40 bg-black"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-neutral-900 shadow-2xl sm:w-96"
          >
            <div className="flex items-center justify-between border-b border-neutral-800 p-6">
              <h2 className="text-xl font-bold text-white">Your Cart</h2>
              <button
                onClick={closeCart}
                className="rounded-full p-2 text-neutral-400 transition hover:bg-neutral-800 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="mb-4 rounded-full bg-neutral-800 p-4">
                    <Trash2 size={32} className="text-neutral-500" />
                  </div>
                  <h3 className="mb-2 text-lg font-medium text-white">Your cart is empty</h3>
                  <p className="mb-6 text-neutral-400">Looks like you haven't added anything yet.</p>
                  <button
                    onClick={closeCart}
                    className="rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black hover:bg-yellow-300 transition"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li key={item.id} className="flex gap-4">
                      <div className="relative h-20 w-20 overflow-hidden rounded-lg bg-neutral-800 flex-shrink-0">
                        <Image
                          src={getProductImage(item.id)}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex flex-1 flex-col">
                        <div className="flex justify-between">
                          <h3 className="font-medium text-white">{item.name}</h3>
                          <p className="font-bold text-white">${item.price}</p>
                        </div>

                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center rounded-lg border border-neutral-700 bg-neutral-800">
                            <button
                              onClick={() => decreaseItem(item.id)}
                              className="px-2 py-1 text-neutral-400 hover:text-white"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-8 text-center text-sm text-white">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => increaseItem(item.id)}
                              className="px-2 py-1 text-neutral-400 hover:text-white"
                            >
                              <Plus size={14} />
                            </button>
                          </div>

                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-sm text-neutral-500 hover:text-red-400 transition"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-neutral-800 p-6">
                <div className="mb-4 flex justify-between text-lg font-bold text-white">
                  <span>Total</span>
                  <span>${totalPrice}</span>
                </div>
                <Link
                  href="/cart"
                  onClick={closeCart}
                  className="flex w-full justify-center rounded-full bg-yellow-400 py-4 font-bold text-black transition hover:bg-yellow-300"
                >
                  Checkout
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
