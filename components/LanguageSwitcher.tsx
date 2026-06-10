"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const isChinese = pathname.startsWith("/zh");
  
  // Get English equivalent path
  const enPath = isChinese ? pathname.replace("/zh", "") || "/" : pathname;
  const zhPath = pathname.startsWith("/zh") ? pathname : `/zh${pathname}`;

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
