import { CartProvider } from "@/lib/cart-context";
import { Header } from "@/components/header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AutoteileShop - Ihr Online-Shop für Autoersatzteile",
  description: "Hochwertige Autoteile: Motoröl, Filter, Bremsen, Zündkerzen und mehr. Schnelle Lieferung und beste Qualität.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <footer className="border-t py-6 mt-auto">
            <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
              © 2026 AutoteileShop. Alle Rechte vorbehalten.
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
