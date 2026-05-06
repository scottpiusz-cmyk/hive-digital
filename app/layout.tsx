import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Apostille & Document Authentication for China, Vietnam, Korea, Thailand & Japan | Hive Digital",
  description: "Fast apostille, background check, and visa document services for China, Vietnam, Thailand, Korea, Japan & 21+ countries. 15+ years experience. 4.9/5 Trustpilot.",
  keywords: ["apostille China","document authentication Vietnam","background check Thailand","work permit documents Korea","FBI background check apostille","China business registration","document legalization","notarization","visa documentation"],
  metadataBase: new URL("https://www.hiverelo.com"),
  alternates: { canonical: "/" },
  openGraph: { type: "website", title: "Hive Digital | Document Apostille & Authentication", description: "Fast apostille, background check, and visa document services. 15+ years, 21+ countries, 4.9/5 Trustpilot rating.", siteName: "Hive Digital", locale: "en_US", images: [{ url: "https://www.hiverelo.com/og-image.jpg", width: 1200, height: 630, alt: "Hive Digital" }] },
  twitter: { card: "summary_large_image", title: "Hive Digital | Document Apostille & Authentication", description: "Fast apostille, background check, and visa document services for 21+ countries.", images: ["https://www.hiverelo.com/og-image.jpg"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#0a0a0f" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":["Organization","LocalBusiness"],"name":"Hive Digital","url":"https://www.hiverelo.com","logo":"https://www.hiverelo.com/hive-logo.png","description":"Document apostille, authentication, fingerprinting, and compliance services for China, Vietnam, Thailand, Korea, Japan and 21+ countries.","address":{"@type":"PostalAddress","addressLocality":"Shanghai","addressCountry":"CN"},"contactPoint":{"@type":"ContactPoint","email":"sales@hiverelo.com","contactType":"sales","availableLanguage":["English","Chinese"]},"sameAs":["https://www.trustpilot.com/review/hiverelo.com"],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"300"}})}} />
      <body className="bg-hive-bg text-hive-text min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
