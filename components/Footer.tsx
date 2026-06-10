"use client";

import Link from "next/link";

interface FooterProps {
  isChinese?: boolean;
}

export default function Footer({ isChinese = false }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  const links = isChinese ? [
    { label: "首页", href: "/zh/" },
    { label: "服务", href: "/zh/services/" },
    { label: "资讯", href: "/zh/insights/" },
    { label: "关于", href: "/zh/about/" },
    { label: "联系", href: "/zh/contact/" },
    { label: "隐私政策", href: "#" },
  ] : [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
    { label: "Insights", href: "/insights/" },
    { label: "About", href: "/about/" },
    { label: "Contact", href: "/contact/" },
    { label: "Privacy", href: "#" },
  ];

  const rights = isChinese 
    ? `${currentYear} Hive Digital。保留所有权利。`
    : `${currentYear} Hive Digital. All rights reserved.`;

  const poweredBy = isChinese
    ? "跨境文件认证服务 | 上海"
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
