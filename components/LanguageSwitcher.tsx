"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";

const englishToChineseRoutes: Record<string, string> = {
  "/": "/zh/",
  "/services/": "/zh/services/",
  "/countries/": "/zh/countries/",
  "/insights/": "/zh/insights/",
  "/about/": "/zh/about/",
  "/contact/": "/zh/contact/",
  "/privacy/": "/zh/privacy/",
  "/fingerprinting/": "/zh/fingerprinting/",
  "/shanghai-fingerprinting/": "/zh/shanghai-fingerprinting/",
  "/insights/china-vietnam-document-legalization-2026/":
    "/zh/insights/china-vietnam-document-legalization-2026/",
  "/insights/fbi-background-check-optimization-2026/":
    "/zh/insights/fbi-background-check-optimization-2026/",
  "/insights/china-pcc-guide-2026/":
    "/zh/insights/china-pcc-guide-2026/",
};

const chineseToEnglishRoutes: Record<string, string> = Object.fromEntries(
  Object.entries(englishToChineseRoutes).map(([englishPath, chinesePath]) => [
    chinesePath,
    englishPath,
  ]),
);

const englishServiceLandingPages = new Set([
  "/vietnam-authentication/",
  "/korea-apostille/",
  "/thailand-authentication/",
  "/japan-apostille/",
]);

const englishFingerprintingLandingPages = new Set([
  "/japan-fingerprinting/",
]);

function normalizePathname(pathname: string) {
  if (pathname === "/") return pathname;
  return `${pathname.replace(/\/+$/, "")}/`;
}

export default function LanguageSwitcher() {
  const pathname = normalizePathname(usePathname());
  const isChinese = pathname === "/zh/" || pathname.startsWith("/zh/");

  const enPath = isChinese
    ? chineseToEnglishRoutes[pathname] ??
      (pathname.startsWith("/zh/insights/") ? "/insights/" : "/")
    : pathname;
  const zhPath = isChinese
    ? pathname
    : englishToChineseRoutes[pathname] ??
      (englishFingerprintingLandingPages.has(pathname)
        ? "/zh/fingerprinting/"
        : pathname.startsWith("/services/") ||
      englishServiceLandingPages.has(pathname)
        ? "/zh/services/"
        : pathname.startsWith("/insights/")
          ? "/zh/insights/"
          : "/zh/");

  return (
    <div className="flex items-center gap-1.5 text-xs font-medium">
      <Globe className="w-3.5 h-3.5 text-hive-muted" />
      <Link 
        href={enPath}
        className={`px-2 py-1 rounded transition-colors ${!isChinese ? "text-white bg-hive-surface" : "text-hive-muted hover:text-white"}`}
      >
        EN
      </Link>
      <span className="text-hive-dim">|</span>
      <Link 
        href={zhPath}
        className={`px-2 py-1 rounded transition-colors ${isChinese ? "text-white bg-hive-surface" : "text-hive-muted hover:text-white"}`}
      >
        中文
      </Link>
    </div>
  );
}
