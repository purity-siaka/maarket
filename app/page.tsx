import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "MAARKET | Authentic Maasai Beadwork",
  description:
    "Shop authentic Maasai beadwork handcrafted by artisans and discover the culture, meaning, and stories behind every piece.",
};

export default function HomePage() {
  const featuredProducts = products.slice(0, 3);

  return (
    <main>
      {/* HERO */}
      <section className="mx-auto grid min-h-[80vh] max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
            Maasai beadwork marketplace
          </p>

          <h1 className="mt-4 text-5xl font-bold leading-tight md:text-6xl">
            Beads that carry culture, identity, and pride.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-neutral-300">
            MAARKET connects authentic Maasai beadwork with people who value
            culture, craftsmanship, and ethical trade.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black hover:bg-yellow-300"
            >
              Shop Beadwork
            </Link>

            <Link
              href="/culture"
              className="rounded-full border border-neutral-700 px-6 py-3 font-semibold hover:border-yellow-400"
            >
              Learn the Culture
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl bg-neutral-900">
          <div className="relative h-[420px]">
            <Image
              src={featuredProducts[0].image}
              alt={featuredProducts[0].name}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-wide text-yellow-400">
              Featured pieces
            </p>
            <h2 className="mt-2 text-3xl font-bold">Handmade beadwork</h2>
          </div>

          <Link href="/shop" className="text-sm text-yellow-400">
            View all →
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <Link key={product.id} href={`/shop/${product.id}`}>
              <div className="overflow-hidden rounded-2xl bg-neutral-900">
                <div className="relative h-56">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-semibold hover:text-yellow-400">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-400">
                    ${product.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}