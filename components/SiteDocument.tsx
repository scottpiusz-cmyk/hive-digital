import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

export default function SiteDocument({
  children,
  language,
}: Readonly<{ children: React.ReactNode; language: "en" | "zh-CN" }>) {
  return (
    <html lang={language} className={inter.variable}>
      <body className="bg-hive-bg text-hive-text min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <GoogleAnalytics gaId="G-YC91XVBNGV" />
      </body>
    </html>
  );
}
