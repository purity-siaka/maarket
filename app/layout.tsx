import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartContext";
import { ThemeProvider } from "@/components/ThemeContext";
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
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-black dark:text-white antialiased transition-colors">
        <ThemeProvider>
          <CartProvider>
            <Toaster theme="dark" position="bottom-right" />
            <CartDrawer />
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}