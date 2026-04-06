import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("../components/layout/Footer").then(mod => mod.Footer));
import { getData } from "@/lib/data";

// Optimize font loading for better Performance score
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Define viewport to prevent layout shift and set theme color
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617",
};

export const metadata: Metadata = {
  title: {
    default: "Hidden Brains UK | Enterprise IT Solutions & Software Development",
    template: "%s | Hidden Brains UK",
  },
  description: "Leading IT solutions and software development company offering web, mobile app development, and digital transformation services in the UK.",
  keywords: ["IT Solutions", "Software Development", "Mobile App Development", "Web Development", "Digital Transformation"],
  authors: [{ name: "Hidden Brains UK" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.hiddenbrains.co.uk/",
    siteName: "Hidden Brains UK",
    title: "Hidden Brains UK | Enterprise IT Solutions",
    description: "Enterprise-grade IT services and solutions for digital transformation.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Hidden Brains UK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hidden Brains UK | Enterprise IT Solutions",
    description: "Enterprise-grade IT services and solutions for digital transformation.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getData();

  // Organization structured data for SEO Best Practices
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Hidden Brains UK",
    "url": "https://www.hiddenbrains.co.uk/",
    "logo": "https://www.hiddenbrains.co.uk/images/HB.logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44 207 993 2188",
      "contactType": "customer service",
      "areaServed": "GB",
      "availableLanguage": "en"
    }
  };

  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans overflow-x-hidden w-full">
        <Navbar data={data} />
        <main className="flex-1" id="main-content">{children}</main>
        <Footer data={data} />
      </body>
    </html>
  );
}
