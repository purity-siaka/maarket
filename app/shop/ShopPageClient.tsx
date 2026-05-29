"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import ShopFilters from "@/components/ShopFilters";
import Tooltip from "@/components/Tooltip";
import { Info } from "lucide-react";

export default function ShopPageClient() {
  const categories = [
    "All",
    ...Array.from(new Set(products.map((p) => p.category))),
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "All" || product.category === activeCategory;

    const matchesSearch = `${product.name} ${product.category} ${product.meaning}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="mb-4 text-4xl font-bold text-black dark:text-white">Shop</h1>

      <p className="mb-8 max-w-2xl text-neutral-600 dark:text-neutral-400">
        Discover handcrafted Maasai beadwork made with tradition and meaning.
      </p>

      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search products..."
        className="mb-6 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-5 py-3 text-black dark:text-white outline-none focus:border-yellow-400 transition-colors"
      />

      <ShopFilters
        categories={categories}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product, index) => (
          <div
            key={product.id}
            className={`group overflow-hidden rounded-2xl theme-card transition hover:-translate-y-1 ${
              index % 2 === 0 ? "theme-card-glow" : ""
            }`}
          >
            <Link href={`/shop/${product.id}`}>
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
            </Link>

            <div className="p-4">
              <div className="flex items-center gap-2">
                <Link href={`/shop/${product.id}`}>
                  <h2 className="text-lg font-semibold text-black dark:text-white transition hover:text-(--accent) dark:hover:text-(--accent)">
                    {product.name}
                  </h2>
                </Link>
                {product.meaning && (
                  <Tooltip content={product.meaning}>
                    <button className="text-neutral-500 hover:text-(--accent) dark:hover:text-(--accent) transition">
                      <Info size={16} />
                    </button>
                  </Tooltip>
                )}
              </div>

              <p className="mt-1 text-xs uppercase tracking-wide text-neutral-600 dark:text-neutral-500">
                {product.category}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-lg font-bold text-black dark:text-white">${product.price}</p>

                <Link
                  href={`/shop/${product.id}`}
                  className="rounded-full bg-(--accent) px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-(--accent-strong) transition"
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="mt-10 text-neutral-400">
          No products found. Try another search or category.
        </p>
      )}
    </main>
  );
}
