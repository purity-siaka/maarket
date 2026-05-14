import type { Metadata } from "next";
import ShopPageClient from "./ShopPageClient";

export const metadata: Metadata = {
  title: "Shop | MAARKET",
};

export default function ShopPage() {
  return <ShopPageClient />;
}