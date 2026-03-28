import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    default: "One Stop Tyres Wakefield | Fast, Reliable Tyre Services",
    template: "%s | One Stop Tyres Wakefield",
  },
  description:
    "Professional tyre fitting, mobile tyre service, emergency repairs, and wheel balancing in Wakefield. Same-day service, no hidden fees. Call now!",
  keywords: [
    "tyre fitting wakefield",
    "mobile tyre fitting wakefield",
    "emergency tyre repair wakefield",
    "puncture repair wakefield",
    "wheel balancing wakefield",
    "tyre replacement wakefield",
    "tyres wakefield",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "One Stop Tyres Wakefield",
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCallBar />
        {/* Padding for sticky call bar on mobile */}
        <div className="h-14 lg:hidden" />
      </body>
    </html>
  );
}
