"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/" },
  { label: "Insights", href: "/insights/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-hive-bg/80 backdrop-blur-xl border-b border-hive-border/50" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link href="/" className="flex flex-col flex-shrink-0 leading-none">
            <span className="text-lg lg:text-xl font-black tracking-tight text-white">Hive <span className="text-hive-accent">Digital</span></span>
            <span className="text-[9px] lg:text-[10px] tracking-[0.12em] uppercase text-hive-dim mt-0.5">Crossborder Document Specialists</span>
          </Link>
          <div className="hidden lg:flex items-center">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-hive-border bg-hive-surface/50">
              <span className="w-1.5 h-1.5 rounded-full bg-hive-accent animate-pulse" />
              <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-hive-muted">Documentation for 21+ Countries</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className={`text-xs font-medium tracking-wide uppercase transition-colors duration-300 ${pathname === link.href ? "text-hive-accent" : "text-hive-muted hover:text-white"}`}>{link.label}</Link>
              ))}
            </nav>
            <Link href="/contact/" className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide uppercase text-hive-bg bg-hive-accent hover:bg-hive-accent-hover rounded-full transition-all duration-300">Contact</Link>
          </div>
          <button className="lg:hidden flex items-center gap-2 text-hive-muted hover:text-white" onClick={() => setMobileOpen(!mobileOpen)}>
            <span className="text-xs font-medium tracking-wide uppercase">Menu</span>
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="lg:hidden bg-hive-bg border-t border-hive-border/50 px-6 py-8">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={`text-sm font-medium tracking-wide uppercase transition-colors ${pathname === link.href ? "text-hive-accent" : "text-hive-muted hover:text-white"}`}>{link.label}</Link>
            ))}
            <div className="h-px bg-hive-border/50" />
            <Link href="/contact/" className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold tracking-wide uppercase text-hive-bg bg-hive-accent hover:bg-hive-accent-hover rounded-full transition-all">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
