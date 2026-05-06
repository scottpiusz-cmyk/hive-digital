"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import ParticleNetwork from "@/components/ParticleNetwork";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero-bg.jpg')" }} />
      <div className="absolute inset-0 bg-black/50" style={{ zIndex: 1 }} />
      <div className="absolute inset-0 bg-gradient-to-t from-hive-bg via-transparent to-black/40" style={{ zIndex: 2 }} />
      <div className="absolute inset-0" style={{ zIndex: 3 }}><ParticleNetwork /></div>
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-24">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="inline-flex items-center gap-3 px-4 py-2 mb-8 rounded-full border border-hive-border/50 bg-hive-surface/40 backdrop-blur">
          <span className="w-1.5 h-1.5 rounded-full bg-hive-accent" />
          <span className="text-[10px] sm:text-xs font-medium tracking-widest uppercase text-hive-muted">Documentation Services for 21+ Countries</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3 }} className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-[-0.04em] uppercase leading-[0.88] mb-8">
          <span className="block">Apostille &amp;</span>
          <span className="block text-hive-accent">Document Authentication</span>
          <span className="block">for China, Vietnam, Korea, Thailand &amp; Japan</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.55 }} className="text-base sm:text-lg text-hive-muted max-w-xl mx-auto mb-12 leading-relaxed">
          <Link href="/services/apostille/" className="text-red-400 hover:text-white transition-colors underline decoration-red-400/30 hover:decoration-white">Vietnam Authentication</Link><span className="text-hive-dim mx-1.5">•</span><Link href="/services/apostille/" className="text-red-400 hover:text-white transition-colors underline decoration-red-400/30 hover:decoration-white">Korea Apostille</Link><span className="text-hive-dim mx-1.5">•</span><Link href="/services/apostille/" className="text-red-400 hover:text-white transition-colors underline decoration-red-400/30 hover:decoration-white">Thailand Authentication</Link><span className="text-hive-dim mx-1.5">•</span><Link href="/services/china-pcc/" className="text-red-400 hover:text-white transition-colors underline decoration-red-400/30 hover:decoration-white">China Apostille</Link><span className="text-hive-dim mx-1.5">•</span><Link href="/services/apostille/" className="text-red-400 hover:text-white transition-colors underline decoration-red-400/30 hover:decoration-white">Japan Apostille</Link><span className="text-hive-dim mx-2">— and 21+ countries. Trusted by thousands for document apostille, authentication, compliance, fingerprinting, and China PCC services.</span>
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.75 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact/" className="inline-flex items-center justify-center gap-2 px-8 h-14 rounded-full bg-hive-accent hover:bg-hive-accent-hover text-hive-bg text-sm font-semibold tracking-wide transition-all hover:shadow-glow">
            <MessageCircle className="w-4 h-4" />CONTACT US
          </Link>
          <Link href="/services/" className="inline-flex items-center justify-center gap-2 px-8 h-14 rounded-full border border-hive-border text-hive-muted hover:text-white hover:border-hive-accent hover:bg-hive-accent/10 text-sm font-semibold tracking-wide transition-all">Explore Services</Link>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }} className="flex flex-wrap items-center justify-center gap-8 mt-16">
          {[{ label: "15+", sub: "Years" },{ label: "21+", sub: "Countries" },{ label: "4.9/5", sub: "Trustpilot" },{ label: "2hr", sub: "Response" }].map((s) => (
            <div key={s.label} className="text-center"><div className="text-xl sm:text-2xl font-black text-white">{s.label}</div><div className="text-[10px] uppercase tracking-wider text-hive-dim mt-0.5">{s.sub}</div></div>
          ))}
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}><ChevronDown className="w-6 h-6 text-hive-dim" /></motion.div>
      </motion.div>
    </section>
  );
}
