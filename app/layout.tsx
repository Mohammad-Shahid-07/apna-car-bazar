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
    "Used Cars in Ajmer - Check second hand cars in Ajmer. We have a lot of certified old cars in Ajmer for sale. Check price & buy the best 2nd hand car at Apna Car Bazar.",
  other: {
    "theme-color": "#1e1e1e",
    "color-scheme": "dark light",
    "author": "Your Name",
    "keywords": "used cars, second hand cars, certified old cars, sell cars, old cars in Ajmer, used cars in Ajmer, second hand cars in Ajmer, certified old cars in Ajmer",
    "og:title": "Apna Car Bazar - Used Cars in Ajmer",
    "og:description": "Explore a wide range of certified old cars for sale in Ajmer. Find the best deals on second-hand cars at Apna Car Bazar.",
    'twitter:image': 'https://utfs.io/f/ecff7ce2-7b98-4c79-a3e6-3972d0271a97-hhjpr3.jpg',
    'twitter:card': 'summary_large_image',
    'og:url': 'https://apnacarbazar.in',
    'og:type': 'website',

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
