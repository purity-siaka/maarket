import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact | MAARKET",
  description:
    "Learn how MAARKET supports fair artisan income, cultural preservation, and ethical Maasai beadwork commerce.",
};

export default function ImpactPage() {
  const impactPoints = [
    {
      title: "Fair artisan income",
      description:
        "MAARKET is designed to help Maasai artisans earn from their craft by presenting their beadwork directly to buyers who value authenticity.",
    },
    {
      title: "Cultural preservation",
      description:
        "Every product is presented with meaning, story, and context so Maasai beadwork is not treated as ordinary decoration.",
    },
    {
      title: "Ethical marketplace",
      description:
        "The goal is to build trust between artisans and buyers through transparency, respectful storytelling, and honest product representation.",
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
        Impact
      </p>

      <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
        Building a marketplace that protects culture while supporting livelihoods.
      </h1>

      <p className="mt-6 max-w-3xl leading-7 text-neutral-300">
        MAARKET is more than an online shop. It is a digital space created to
        celebrate Maasai beadwork, support artisans, and help buyers understand
        the cultural value behind each handmade piece.
      </p>

      <section className="mt-14 grid gap-6 md:grid-cols-3">
        {impactPoints.map((point) => (
          <div key={point.title} className="rounded-2xl bg-neutral-900 p-6">
            <h2 className="text-xl font-semibold">{point.title}</h2>
            <p className="mt-4 leading-7 text-neutral-300">
              {point.description}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-16 rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
        <h2 className="text-2xl font-bold">Our promise</h2>
        <p className="mt-4 max-w-3xl leading-7 text-neutral-300">
          As MAARKET grows, the platform should continue to prioritize artisan
          dignity, cultural respect, product quality, and fair value. The website
          must always honor the hands, history, and identity behind the craft.
        </p>
      </section>
    </main>
  );
}