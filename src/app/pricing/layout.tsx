import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Pricing - QBeeDesk | Empowering Global Operations with Real-Time ERP Tracking",
    description:
        "Integrated time tracking, productivity metrics, and HR for your distributed team.",
};

export default function PricingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className={`${inter.variable}`}>{children}</div>;
}
