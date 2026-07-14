"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

const enNavLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/" },
  { label: "Countries", href: "/countries/" },
  { label: "Insights", href: "/insights/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

const zhNavLinks = [
  { label: "\u9996\u9875", href: "/zh/" },
  { label: "\u670d\u52a1", href: "/zh/services/" },
  { label: "\u56fd\u5bb6/\u76ee\u7684\u5730", href: "/zh/countries/" },
  { label: "\u8d44\u8baf", href: "/zh/insights/" },
  { label: "\u5173\u4e8e", href: "/zh/about/" },
  { label: "\u8054\u7cfb", href: "/zh/contact/" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isChinese = pathname?.startsWith("/zh") ?? false;
  const navLinks = isChinese ? zhNavLinks : enNavLinks;
  const contactLabel = isChinese ? "\u8054\u7cfb\u6211\u4eec" : "Contact";
  const tagline = isChinese ? "\u8de8\u5883\u6587\u4ef6\u4e13\u5bb6" : "Crossborder Document Specialists";
  const badgeText = isChinese ? "\u670d\u52a121+\u56fd\u5bb6" : "Documentation for 21+ Countries";
  const menuLabel = isChinese ? "\u83dc\u5355" : "Menu";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/80 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href={isChinese ? "/zh/" : "/"} className="flex flex-col flex-shrink-0 leading-none">
            <span className="text-lg lg:text-xl font-black tracking-tight text-white">
              Hive <span className="text-red-500">Digital</span>
            </span>
            <span className="text-[9px] lg:text-[10px] tracking-[0.12em] uppercase text-hive-dim mt-0.5">
              {tagline}
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-4">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-hive-border bg-hive-surface/50">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-hive-muted">
                {badgeText}
              </span>
            </div>
            <LanguageSwitcher />
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-medium tracking-wide uppercase transition-colors duration-300 ${
                    pathname === link.href
                      ? "text-red-500"
                      : "text-hive-muted hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Link
              href={isChinese ? "/zh/contact/" : "/contact/"}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide uppercase text-white bg-red-600 hover:bg-red-500 rounded-full transition-all duration-300"
            >
              {contactLabel}
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-4">
            <LanguageSwitcher />
            <button
              className="flex items-center gap-2 text-hive-muted hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span className="text-xs font-medium tracking-wide uppercase">
                {menuLabel}
              </span>
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/5 px-6 py-8">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors ${
                  pathname === link.href
                    ? "text-red-500"
                    : "text-hive-muted hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-white/10" />
            <Link
              href={isChinese ? "/zh/contact/" : "/contact/"}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold tracking-wide uppercase text-white bg-red-600 hover:bg-red-500 rounded-full transition-all"
            >
              {contactLabel}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
