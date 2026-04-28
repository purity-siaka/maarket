import Link from "next/link";
import { artisans } from "@/data/artisans";

export default function ArtisansPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-10">Artisans</h1>

      <div className="grid gap-6 sm:grid-cols-2">
        {artisans.map((artisan) => (
          <Link
            key={artisan.id}
            href={`/artisans/${artisan.id}`}
            className="rounded-2xl bg-neutral-900 p-6 hover:ring-2 hover:ring-yellow-400 transition"
          >
            <h2 className="text-xl font-semibold">{artisan.name}</h2>
            <p className="mt-1 text-sm text-neutral-400">{artisan.village}</p>
            <p className="mt-4 text-neutral-300">{artisan.bio}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}