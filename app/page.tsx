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
              className="rounded-full bg-(--accent) px-6 py-3 font-semibold text-slate-950 hover:bg-(--accent-strong) transition"
            >
              Shop Beadwork
            </Link>

            <Link
              href="/culture"
              className="rounded-full border border-neutral-400 dark:border-neutral-700 px-6 py-3 font-semibold text-black dark:text-white hover:border-(--accent) hover:text-(--accent) dark:hover:text-(--accent) transition"
            >
              Learn the Culture
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="overflow-hidden rounded-3xl theme-card theme-card-glow hero-panel border border-transparent">
            <div className="relative h-105">
              <Image
                src={heroImage}
                alt="Maasai beadwork showcase"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <FadeIn>
          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((item, index) => (
              <div
                key={item.title}
                className={`theme-card p-6 transition ${index % 2 === 0 ? "theme-card-glow" : ""}`}
              >
                <p className="text-sm uppercase tracking-[0.35em] text-(--accent) dark:text-(--accent)">
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
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-wide text-(--accent)">
                Featured pieces
              </p>
              <h2 className="mt-2 text-3xl font-bold">Handmade beadwork</h2>
            </div>

            <Link
              href="/shop"
              className="rounded-full bg-(--accent) px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-(--accent-strong) transition"
            >
              View all
            </Link>
          </div>
        </FadeIn>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {featuredProducts.map((product, index) => (
            <FadeIn key={product.id} delay={index * 0.08}>
              <div className={`group overflow-hidden rounded-2xl theme-card transition hover:-translate-y-1 ${index % 2 === 0 ? "theme-card-glow" : ""}`}>
                <Link href={`/shop/${product.id}`}>
                  <div className="relative h-56">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>

                <div className="p-4">
                  <Link href={`/shop/${product.id}`}>
                    <h3 className="font-semibold transition hover:text-(--accent) dark:hover:text-(--accent)">
                      {product.name}
                    </h3>
                  </Link>

                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
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