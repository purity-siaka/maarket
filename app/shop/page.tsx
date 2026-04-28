import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Shop | MAARKET",
  description:
    "Explore authentic Maasai beadwork including necklaces, bracelets, earrings, and handmade cultural pieces.",
};

export default function ShopPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="mb-10 text-4xl font-bold">Shop</h1>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden rounded-2xl bg-neutral-900 shadow-lg"
          >
            <Link href={`/shop/${product.id}`}>
              <div className="relative h-48 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition hover:scale-105"
                />
              </div>
            </Link>

            <div className="p-4">
              <Link href={`/shop/${product.id}`}>
                <h2 className="text-lg font-semibold hover:text-yellow-400">
                  {product.name}
                </h2>
              </Link>

              <p className="mt-1 text-sm text-neutral-400">
                {product.category}
              </p>

              <p className="mt-3 font-semibold">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}