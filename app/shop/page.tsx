import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export default function ShopPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-10">Shop</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-neutral-900 rounded-2xl overflow-hidden shadow-lg"
          >
            {/* IMAGE */}
            <Link href={`/shop/${product.id}`}>
              <div className="relative h-48 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover hover:scale-105 transition"
                />
              </div>
            </Link>

            {/* TEXT */}
            <div className="p-4">
              <Link href={`/shop/${product.id}`}>
                <h2 className="text-lg font-semibold hover:text-yellow-400">
                  {product.name}
                </h2>
              </Link>

              <p className="text-sm text-neutral-400 mt-1">
                {product.category}
              </p>

              <p className="mt-3 font-semibold">
                ${product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}