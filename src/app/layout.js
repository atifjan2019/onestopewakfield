import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppBubble from "@/components/WhatsAppBubble";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://www.onestoptyreswakefield.co.uk"),
  title: {
    default: "One Stop Tyres Wakefield | Fast, Reliable Tyre Services",
    template: "%s",
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
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "One Stop Tyres Wakefield",
    description: "Professional tyre fitting, mobile tyre service, and emergency repairs across West Yorkshire.",
    url: "https://www.onestoptyreswakefield.co.uk",
    siteName: "One Stop Tyres Wakefield",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "One Stop Tyres Wakefield",
      },
    ],
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <head>
        <Script id="gtm-head" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MX6CGZCN');`}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col font-sans" suppressHydrationWarning>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MX6CGZCN" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppBubble />
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18297584020"
        />
        <Script id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18297584020');
          `}
        </Script>
      </body>
    </html>
  );
}

