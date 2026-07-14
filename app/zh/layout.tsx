import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Hive Digital | 中国文件Apostille与认证服务",
  description: "快速apostille、背景调查、签证文件服务，覆盖中国、越南、泰国、韩国、日本等21+国家。15年经验，Trustpilot 4.9/5评分。",
  keywords: ["中国apostille","文件认证","签证文件","背景调查","FBI背景调查","指纹采集","中国公证","海牙认证","文件翻译","工作签证","公证服务","五星卡","永久居留","上海指纹采集"],
  metadataBase: new URL("https://www.hiverelo.com"),
  openGraph: {
    type: "website",
    title: "Hive Digital | 中国文件Apostille与认证服务",
    description: "快速apostille、背景调查、签证文件服务。15年经验，21+国家，Trustpilot 4.9/5评分。",
    siteName: "Hive Digital",
    locale: "zh_CN",
  },
  other: {
    "baidu-site-verification": "NS8rtSj4ev",
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
