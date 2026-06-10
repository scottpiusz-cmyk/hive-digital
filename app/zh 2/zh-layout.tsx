import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Hive Digital | \u4e2d\u56fd\u6587\u4ef6Apostille\u4e0e\u8ba4\u8bc1\u670d\u52a1",
  description: "\u5feb\u901fapostille\u3001\u80cc\u666f\u8c03\u67e5\u3001\u7b7e\u8bc1\u6587\u4ef6\u670d\u52a1\uff0c\u8986\u76d6\u4e2d\u56fd\u3001\u8d8a\u5357\u3001\u6cf0\u56fd\u3001\u97e9\u56fd\u3001\u65e5\u672c\u7b4921+\u56fd\u5bb6\u300215\u5e74\u7ecf\u9a8c\uff0cTrustpilot 4.9/5\u8bc4\u5206\u3002",
  keywords: ["\u4e2d\u56fdapostille","\u6587\u4ef6\u8ba4\u8bc1","\u7b7e\u8bc1\u6587\u4ef6","\u80cc\u666f\u8c03\u67e5","FBI\u80cc\u666f\u8c03\u67e5","\u4e2d\u56fd\u516c\u8bc1","\u6d77\u7259\u8ba4\u8bc1","\u6587\u4ef6\u7ffb\u8bd1","\u5de5\u4f5c\u7b7e\u8bc1","\u516c\u8bc1\u670d\u52a1"],
  metadataBase: new URL("https://www.hiverelo.com"),
  alternates: {
    canonical: "/zh/",
    languages: {
      "en": "/",
      "zh-CN": "/zh/",
    },
  },
  openGraph: {
    type: "website",
    title: "Hive Digital | \u4e2d\u56fd\u6587\u4ef6Apostille\u4e0e\u8ba4\u8bc1\u670d\u52a1",
    description: "\u5feb\u901fapostille\u3001\u80cc\u666f\u8c03\u67e5\u3001\u7b7e\u8bc1\u6587\u4ef6\u670d\u52a1\u300215\u5e74\u7ecf\u9a8c\uff0c21+\u56fd\u5bb6\uff0cTrustpilot 4.9/5\u8bc4\u5206\u3002",
    siteName: "Hive Digital",
    locale: "zh_CN",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#0a0a0f" };

export default function ChineseLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" className={`${inter.variable}`}>
      <body className="bg-hive-bg text-hive-text min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
