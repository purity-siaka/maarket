"use client";

import { useCart } from "@/components/CartContext";

type AddToCartButtonProps = {
  product: {
    id: string;
    name: string;
    price: number;
  };
};

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCart();

  return (
    <button
      onClick={() =>
        addItem({
          id: product.id,
          name: product.name,
          price: product.price,
        })
      }
      className="mt-6 rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black hover:bg-yellow-300"
    >
      Add to cart
    </button>
  );
}