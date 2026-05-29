"use client";

import Link from "next/link";
import { useCart } from "@/components/CartContext";
import { useTheme } from "@/components/ThemeContext";
import { ShoppingBag, Moon, Sun } from "lucide-react";

export default function Header() {
  const { totalQuantity, openCart } = useCart();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="border-b border-neutral-200/80 dark:border-neutral-800 bg-white/90 dark:bg-slate-950/95 text-black dark:text-white transition-colors backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 text-sm">
        <Link href="/" className="text-xl font-bold tracking-wide">
          MAARKET
        </Link>

        <div className="flex flex-wrap items-center gap-4">
          <Link href="/" className="hover:text-(--accent) transition">
            Home
          </Link>

          <Link href="/shop" className="hover:text-(--accent) transition">
            Shop
          </Link>

          <Link href="/artisans" className="hover:text-(--accent) transition">
            Artisans
          </Link>

          <Link href="/culture" className="hover:text-(--accent) transition">
            Culture
          </Link>

          <Link href="/impact" className="hover:text-(--accent) transition">
            Impact
          </Link>

          <Link href="/contact" className="hover:text-(--accent) transition">
            Contact
          </Link>

          <button
            onClick={toggleTheme}
            className="rounded-full bg-(--surface) p-2 text-(--text) dark:text-(--accent) shadow-sm transition hover:bg-(--surface-soft) dark:hover:bg-slate-900"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={openCart}
            className="flex items-center gap-2 rounded-full bg-(--surface) px-3 py-1.5 text-(--text) dark:text-(--accent) shadow-sm transition hover:bg-(--surface-soft) dark:hover:bg-slate-900"
          >
            <ShoppingBag size={16} />
            <span className="font-medium">Cart ({totalQuantity})</span>
          </button>
        </div>
      </nav>
    </header>
  );
}