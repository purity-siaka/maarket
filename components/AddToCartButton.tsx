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
  const { items, addItem, increaseItem, decreaseItem } = useCart();

  const cartItem = items.find((item) => item.id === product.id);

  if (cartItem) {
    return (
      <div className="mt-6 flex items-center gap-4">
        <div className="flex items-center rounded-full border border-neutral-700">
          <button
            onClick={() => decreaseItem(product.id)}
            className="px-4 py-3 text-xl hover:text-yellow-400"
          >
            −
          </button>

          <span className="min-w-10 text-center font-semibold">
            {cartItem.quantity}
          </span>

          <button
            onClick={() => increaseItem(product.id)}
            className="px-4 py-3 text-xl hover:text-yellow-400"
          >
            +
          </button>
        </div>

        <span className="text-sm text-neutral-400">
          In cart
        </span>
      </div>
    );
  }

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