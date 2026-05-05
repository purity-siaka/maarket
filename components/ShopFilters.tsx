"use client";

type ShopFiltersProps = {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
};

export default function ShopFilters({
  categories,
  activeCategory,
  onChange,
}: ShopFiltersProps) {
  return (
    <div className="mb-10 flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
            activeCategory === category
              ? "bg-yellow-400 text-black"
              : "bg-neutral-900 text-white hover:bg-neutral-800"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}