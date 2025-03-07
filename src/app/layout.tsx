import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QBeeDesk | Empowering Global Operations with Real-Time ERP Tracking",
  description:
    "Integrated time tracking, productivity metrics, and HR for your distributed team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col overflow-x-hidden relative`}
      >
        <Navbar />
        <main className="flex-grow relative w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
