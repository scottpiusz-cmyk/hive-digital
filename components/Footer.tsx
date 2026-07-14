"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isChinese = pathname?.startsWith("/zh") ?? false;
  const currentYear = new Date().getFullYear();

  const links = isChinese ? [
    { label: "\u9996\u9875", href: "/zh/" },
    { label: "\u670d\u52a1", href: "/zh/services/" },
    { label: "\u56fd\u5bb6/\u76ee\u7684\u5730", href: "/zh/countries/" },
    { label: "\u8d44\u8baf", href: "/zh/insights/" },
    { label: "\u5173\u4e8e", href: "/zh/about/" },
    { label: "\u8054\u7cfb", href: "/zh/contact/" },
    { label: "\u9690\u79c1\u653f\u7b56", href: "/zh/privacy/" },
  ] : [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
    { label: "Countries", href: "/countries/" },
    { label: "Insights", href: "/insights/" },
    { label: "About", href: "/about/" },
    { label: "Contact", href: "/contact/" },
    { label: "Privacy", href: "/privacy/" },
  ];

  const rights = isChinese
    ? `${currentYear} Hive Digital\u3002\u4fdd\u7559\u6240\u6709\u6743\u5229\u3002`
    : `${currentYear} Hive Digital. All rights reserved.`;

  const poweredBy = isChinese
    ? "\u8de8\u5883\u6587\u4ef6\u8ba4\u8bc1\u670d\u52a1 | \u4e0a\u6d77"
    : "Crossborder Document Authentication | Shanghai";

  return (
    <footer className="bg-hive-surface border-t border-hive-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center lg:items-start gap-2">
            <Link href={isChinese ? "/zh/" : "/"} className="flex items-center gap-2">
              <span className="text-lg font-black tracking-tight text-white">
                Hive <span className="text-red-500">Digital</span>
              </span>
            </Link>
            <p className="text-hive-dim text-xs">{poweredBy}</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-hive-muted hover:text-white transition-colors tracking-wide uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-hive-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-hive-dim text-xs">{rights}</p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:sales@hiverelo.com"
              className="text-xs text-hive-muted hover:text-white transition-colors"
            >
              sales@hiverelo.com
            </a>
            <a
              href="https://wa.me/8613764322474"
              className="text-xs text-hive-muted hover:text-white transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
