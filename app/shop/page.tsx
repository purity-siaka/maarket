"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import ShopFilters from "@/components/ShopFilters";

export default function ShopPage() {
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
      <h1 className="mb-4 text-4xl font-bold">Shop</h1>

      <p className="mb-8 max-w-2xl text-neutral-400">
        Discover handcrafted Maasai beadwork made with tradition and meaning.
      </p>

      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search products..."
        className="mb-6 w-full rounded-xl border border-neutral-700 bg-neutral-900 px-5 py-3 text-white outline-none focus:border-yellow-400"
      />

      <ShopFilters
        categories={categories}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group overflow-hidden rounded-2xl bg-neutral-900 transition hover:shadow-xl"
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
              <Link href={`/shop/${product.id}`}>
                <h2 className="text-lg font-semibold transition hover:text-yellow-400">
                  {product.name}
                </h2>
              </Link>

              <p className="mt-1 text-xs uppercase tracking-wide text-neutral-500">
                {product.category}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-lg font-bold">${product.price}</p>

                <Link
                  href={`/shop/${product.id}`}
                  className="rounded-full bg-yellow-400 px-4 py-2 text-xs font-semibold text-black hover:bg-yellow-300"
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