import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Hive Digital | Document Apostille & Authentication for 21+ Countries",
  description: "Fast apostille, background check, and visa document services for China, Vietnam, Thailand, Korea, Japan & 21+ countries. 15+ years experience. 4.9/5 Trustpilot.",
  keywords: ["apostille China","document authentication Vietnam","background check Thailand","work permit documents Korea","FBI background check apostille","China business registration","document legalization","notarization","visa documentation"],
  metadataBase: new URL("https://www.hiverelo.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en": "/",
      "zh-CN": "/zh/",
    },
  },
  openGraph: { type: "website", title: "Hive Digital | Document Apostille & Authentication", description: "Fast apostille, background check, and visa document services. 15+ years, 21+ countries, 4.9/5 Trustpilot rating.", siteName: "Hive Digital", locale: "en_US" },
  twitter: { card: "summary_large_image", title: "Hive Digital | Document Apostille & Authentication", description: "Fast apostille, background check, and visa document services for 21+ countries." },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#0a0a0f" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-hive-bg text-hive-text min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
