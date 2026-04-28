const beadColors = [
  {
    color: "Red",
    meaning: "Bravery, strength, and unity",
    className: "bg-red-600",
  },
  {
    color: "Blue",
    meaning: "Energy, sky, rain, and blessing",
    className: "bg-blue-600",
  },
  {
    color: "White",
    meaning: "Purity, peace, and health",
    className: "bg-white",
  },
  {
    color: "Black",
    meaning: "People, struggle, and resilience",
    className: "bg-black",
  },
];

export default function CulturePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
        Culture
      </p>

      <h1 className="mt-4 text-4xl font-bold md:text-5xl">
        Every bead carries meaning.
      </h1>

      <p className="mt-6 max-w-3xl leading-7 text-neutral-300">
        Maasai beadwork is more than decoration. Colors, patterns, and forms
        can communicate identity, beauty, strength, ceremony, age, community,
        and belonging. MAARKET presents beadwork with respect for the culture
        behind each handmade piece.
      </p>

      <section className="mt-14 grid gap-6 sm:grid-cols-2">
        {beadColors.map((item) => (
          <div
            key={item.color}
            className="rounded-2xl bg-neutral-900 p-6"
          >
            <div className="flex items-center gap-4">
              <span
                className={`h-10 w-10 rounded-full border border-neutral-700 ${item.className}`}
              />
              <h2 className="text-xl font-semibold">{item.color}</h2>
            </div>

            <p className="mt-4 text-neutral-300">{item.meaning}</p>
          </div>
        ))}
      </section>

      <section className="mt-16 rounded-3xl bg-neutral-900 p-8">
        <h2 className="text-2xl font-bold">Respectful storytelling</h2>
        <p className="mt-4 max-w-3xl leading-7 text-neutral-300">
          MAARKET is built to highlight the people, meaning, and craft behind
          Maasai beadwork. Each product should be presented with context, not as
          a generic fashion item.
        </p>
      </section>
    </main>
  );
}