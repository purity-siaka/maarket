"use client";

import Link from "next/link";
import { useCart } from "@/components/CartContext";

export default function Header() {
  const { items } = useCart();

  return (
    <header className="border-b border-neutral-800 bg-black text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-wide">
          MAARKET
        </Link>

        <div className="flex items-center gap-6 text-sm">
          <Link href="/shop" className="hover:text-yellow-400">
            Shop
          </Link>

          <Link href="/artisans" className="hover:text-yellow-400">
            Artisans
          </Link>

          <Link href="/culture" className="hover:text-yellow-400">
            Culture
          </Link>

          <Link href="/impact" className="hover:text-yellow-400">
            Impact
          </Link>

          <Link href="/contact" className="hover:text-yellow-400">
            Contact
          </Link>

          <Link
            href="/cart"
            className="rounded-full bg-neutral-900 px-3 py-1 text-yellow-400 hover:bg-neutral-800"
          >
            Cart ({items.length})
          </Link>
        </div>
      </nav>
    </header>
  );
}