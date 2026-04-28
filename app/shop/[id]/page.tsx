import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { artisans } from "@/data/artisans";
import AddToCartButton from "@/components/AddToCartButton";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;

  const product = products.find((product) => product.id === id);

  if (!product) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-3xl font-bold">Product not found</h1>

        <Link href="/shop" className="mt-4 inline-block text-yellow-400">
          Back to shop
        </Link>
      </main>
    );
  }

  const artisan = artisans.find((artisan) => artisan.id === product.artisanId);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <Link href="/shop" className="text-sm text-neutral-400 hover:text-yellow-400">
        ← Back to shop
      </Link>

      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <div className="relative h-[420px] overflow-hidden rounded-2xl bg-neutral-900">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            className="object-cover"
          />
        </div>

        <section>
          <p className="text-sm uppercase tracking-wide text-yellow-400">
            {product.category}
          </p>

          <h1 className="mt-2 text-4xl font-bold">{product.name}</h1>

          <p className="mt-4 text-neutral-300">{product.meaning}</p>

          <p className="mt-6 leading-7 text-neutral-200">{product.story}</p>

          <p className="mt-8 text-2xl font-bold">${product.price}</p>

          <AddToCartButton
            product={{
              id: product.id,
              name: product.name,
              price: product.price,
            }}
          />

          {artisan && (
            <div className="mt-8 border-t border-neutral-800 pt-6">
              <p className="text-sm text-neutral-400">Crafted by</p>

              <Link
                href={`/artisans/${artisan.id}`}
                className="text-lg font-semibold hover:text-yellow-400"
              >
                {artisan.name}
              </Link>

              <p className="text-sm text-neutral-400">{artisan.village}</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}