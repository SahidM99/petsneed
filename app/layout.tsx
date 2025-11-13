import type { Metadata } from "next";
import { Fredoka, Quicksand, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";
import StructuredData from "@/components/StructuredData";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-fredoka",
  display: "swap",
  preload: true,
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-quicksand",
  display: "swap",
  preload: true,
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://petsneed.in'),
  title: {
    default: "Pet's Need | Complete Pet Care Center in Alipore, Kolkata | Grooming, Vet, Supplies",
    template: "%s | Pet's Need"
  },
  description: "Pet's Need is Alipore's trusted all-in-one pet care center offering professional grooming, veterinary services, and quality pet supplies for dogs, cats, and small pets. 5.0★ rated. Open daily 10 AM-10 PM. Call 7411576879.",
  keywords: [
    'pet care center Alipore',
    'pet grooming Kolkata',
    'vet clinic Alipore',
    'pet shop near me',
    'dog grooming Kolkata',
    'cat grooming Alipore',
    'pet supplies Kolkata',
    'veterinary doctor Kolkata',
    'pet store Diamond Harbour Road',
    'pet care center South Kolkata',
    'Behala pet store',
    'Tollygunge pet care',
  ],
  authors: [{ name: "Pet's Need" }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://petsneed.in',
    siteName: "Pet's Need",
    title: "Pet's Need | Complete Pet Care Center in Alipore, Kolkata",
    description: "Trusted all-in-one pet care center offering grooming, veterinary services, and quality supplies for dogs, cats, and small pets in Alipore, Kolkata.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Pet's Need - Complete Pet Care Center",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pet's Need | Complete Pet Care Center in Alipore, Kolkata",
    description: "Trusted all-in-one pet care center in Alipore, Kolkata. Grooming, vet care, and supplies.",
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Add actual code when available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${fredoka.variable} ${quicksand.variable} ${poppins.variable} font-quicksand antialiased bg-background text-text-dark`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  );
}
