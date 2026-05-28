import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import FadeIn from "@/components/FadeIn";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "MAARKET | Authentic Maasai Beadwork",
  description:
    "Shop authentic Maasai beadwork handcrafted by artisans and discover the culture, meaning, and stories behind every piece.",
};

const heroImage = "/images/home/hero.jpg";

const benefits = [
  {
    title: "Authentic craftsmanship",
    description:
      "Every piece is made by Maasai artisans using traditional beadwork techniques passed down through generations.",
  },
  {
    title: "Ethical trade promise",
    description:
      "Your purchase supports fair pay, community growth, and sustainable sourcing in East Africa.",
  },
  {
    title: "Secure checkout",
    description:
      "A smooth shopping experience with a modern checkout flow designed for trust and convenience.",
  },
];

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <main>
      <section className="mx-auto grid min-h-[80vh] max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
            Maasai beadwork marketplace
          </p>

          <h1 className="mt-4 text-5xl font-bold leading-tight text-black dark:text-white md:text-6xl">
            Beads that carry culture, identity, and pride.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-neutral-700 dark:text-neutral-300">
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
              className="rounded-full border border-neutral-400 dark:border-neutral-700 px-6 py-3 font-semibold text-black dark:text-white hover:border-yellow-400 hover:text-yellow-600 dark:hover:text-yellow-400 transition"
            >
              Learn the Culture
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="overflow-hidden rounded-3xl bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800">
            <div className="relative h-105">
              <Image
                src={heroImage}
                alt="Maasai beadwork showcase"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <FadeIn>
          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-950 p-6 transition-colors"
              >
                <p className="text-sm uppercase tracking-[0.35em] text-yellow-600 dark:text-yellow-400">
                  {item.title}
                </p>
                <p className="mt-4 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <FadeIn>
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-wide text-yellow-400">
                Featured pieces
              </p>
              <h2 className="mt-2 text-3xl font-bold">Handmade beadwork</h2>
            </div>

            <Link
              href="/shop"
              className="rounded-full bg-yellow-400 px-5 py-2 text-sm font-semibold text-black hover:bg-yellow-300"
            >
              View all
            </Link>
          </div>
        </FadeIn>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {featuredProducts.map((product, index) => (
            <FadeIn key={product.id} delay={index * 0.08}>
              <div className="overflow-hidden rounded-2xl bg-neutral-900">
                <Link href={`/shop/${product.id}`}>
                  <div className="relative h-56">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                      className="object-cover transition hover:scale-105"
                    />
                  </div>
                </Link>

                <div className="p-4">
                  <Link href={`/shop/${product.id}`}>
                    <h3 className="font-semibold hover:text-yellow-400">
                      {product.name}
                    </h3>
                  </Link>

                  <p className="mt-1 text-sm text-neutral-400">
                    ${product.price}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <NewsletterSignup />
    </main>
  );
}