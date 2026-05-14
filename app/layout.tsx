import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartContext";
import { Toaster } from "sonner";
import CartDrawer from "@/components/CartDrawer";
export const metadata: Metadata = {
  title: "MAARKET",
  description: "Authentic Maasai beadwork marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <CartProvider>
          <Toaster theme="dark" position="bottom-right" />
          <CartDrawer />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}