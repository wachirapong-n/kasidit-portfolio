import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { cn } from "@/libs/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const noto = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: "Kasidit Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", noto.variable)}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="grow bg-primary px-5 flex flex-col items-stretch">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
