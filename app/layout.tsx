import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartContext";

export const metadata: Metadata = {
  title: "MAARKET",
  description: "Authentic Maasai beadwork marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        <CartProvider>
          <Header />
          <div className="min-h-screen bg-black text-white">
            {children}
          </div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}