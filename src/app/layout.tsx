import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
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
  title: "Create Next App",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${noto.variable}  h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex grow bg-[#ffffff] px-5 ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
