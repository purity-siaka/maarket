import Image from "next/image";
import Link from "next/link";
import { artisans } from "@/data/artisans";
import { products } from "@/data/products";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateStaticParams() {
  return artisans.map((artisan) => ({
    id: artisan.id,
  }));
}

export default async function ArtisanPage({ params }: PageProps) {
  const { id } = await params;

  const artisan = artisans.find((artisan) => artisan.id === id);

  if (!artisan) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-3xl font-bold">Artisan not found</h1>
        <Link href="/artisans" className="mt-4 inline-block text-yellow-400">
          Back to artisans
        </Link>
      </main>
    );
  }

  const artisanProducts = products.filter(
    (product) => product.artisanId === artisan.id
  );

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <Link
        href="/artisans"
        className="text-sm text-neutral-400 hover:text-yellow-400"
      >
        ← Back to artisans
      </Link>

      <section className="mt-8 rounded-2xl bg-neutral-900 p-8">
        <h1 className="text-4xl font-bold">{artisan.name}</h1>
        <p className="mt-2 text-neutral-400">{artisan.village}</p>
        <p className="mt-6 max-w-3xl leading-7 text-neutral-200">
          {artisan.bio}
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Creations</h2>

        {artisanProducts.length === 0 ? (
          <p className="text-neutral-400">No products yet.</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {artisanProducts.map((product) => (
              <Link key={product.id} href={`/shop/${product.id}`}>
                <div className="overflow-hidden rounded-2xl bg-neutral-900">
                  <div className="relative h-48">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover hover:scale-105 transition"
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
        )}
      </section>
    </main>
  );
}