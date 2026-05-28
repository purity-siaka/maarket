"use client";

import Link from "next/link";
import { useCart } from "@/components/CartContext";
import { useTheme } from "@/components/ThemeContext";
import { ShoppingBag, Moon, Sun } from "lucide-react";

export default function Header() {
  const { totalQuantity, openCart } = useCart();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="border-b border-neutral-800 dark:border-neutral-800 bg-white dark:bg-black text-black dark:text-white transition-colors">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-wide">
          MAARKET
        </Link>

        <div className="flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-yellow-400">
            Home
          </Link>

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

          <button
            onClick={toggleTheme}
            className="rounded-full bg-neutral-200 dark:bg-neutral-900 p-2 text-neutral-900 dark:text-yellow-400 hover:bg-neutral-300 dark:hover:bg-neutral-800 transition"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={openCart}
            className="flex items-center gap-2 rounded-full bg-neutral-200 dark:bg-neutral-900 px-3 py-1.5 text-neutral-900 dark:text-yellow-400 hover:bg-neutral-300 dark:hover:bg-neutral-800 transition"
          >
            <ShoppingBag size={16} />
            <span className="font-medium">Cart ({totalQuantity})</span>
          </button>
        </div>
      </nav>
    </header>
  );
}