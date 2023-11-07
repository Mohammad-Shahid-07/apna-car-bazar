import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import NextTopLoader from "nextjs-toploader";
const inter = Inter({ subsets: ["latin"] });
import "./globals.css";

export const metadata: Metadata = {
  title: "Apna Car Bazar",
  description:
    " Apna Car Bazar is your destination for discovering a wide range of old cars that tell unique stories. Whether you're looking to buy a classic beauty or part with a beloved vehicle, we provide a platform where enthusiasts and sellers come together.",
  other: {
    "theme-color": "#1e1e1e",
    "color-scheme": "dark light",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-dark-primary hero-height flex flex-col">
          <div className="flex flex-col   ">
            <NextTopLoader color="#D30427" />
            <Navbar />
            {children}
            <Toaster />
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
