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
  metadataBase: new URL("https://slaagsnel.nl"),
  title: "Rijschool Slaagsnel | Betaalbare Rijlessen - Snel je Rijbewijs",
  description:
    "Rijschool Slaagsnel biedt betaalbare en kwalitatieve rijlessen van 80 minuten. Alle examenroutes, vaste prijs tot je rijbewijs. Examen actie: €180 i.p.v. €280!",
  keywords: [
    "rijschool",
    "rijlessen",
    "rijbewijs",
    "slaagsnel",
    "betaalbare rijlessen",
    "examen",
    "praktijkexamen",
    "CBR",
    "autorijlessen",
  ],
  authors: [{ name: "Rijschool Slaagsnel" }],
  openGraph: {
    title: "Rijschool Slaagsnel | Betaalbare Rijlessen",
    description:
      "Betaalbare en kwalitatieve rijlessen van 80 minuten. Alle examenroutes, vaste prijs tot je rijbewijs. Nu met examen actie!",
    url: "https://slaagsnel.nl",
    siteName: "Rijschool Slaagsnel",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Rijschool Slaagsnel Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rijschool Slaagsnel | Betaalbare Rijlessen",
    description:
      "Betaalbare en kwalitatieve rijlessen van 80 minuten. Alle examenroutes en vaste prijs.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  name: "Rijschool Slaagsnel",
  description:
    "Betaalbare en kwalitatieve rijlessen van 80 minuten. Alle examenroutes, vaste prijs tot je rijbewijs.",
  url: "https://slaagsnel.nl",
  telephone: "+31624657933",
  priceRange: "€75 - €280",
  image: "https://slaagsnel.nl/logo.png",
  sameAs: [],
  offers: [
    {
      "@type": "Offer",
      name: "Losse Rijles",
      price: "75",
      priceCurrency: "EUR",
      description: "Rijles van 80 minuten met ervaren instructeur",
    },
    {
      "@type": "Offer",
      name: "Examen Aanmelding Actie",
      price: "180",
      priceCurrency: "EUR",
      description: "CBR examenaanmelding inclusief examentraining",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
