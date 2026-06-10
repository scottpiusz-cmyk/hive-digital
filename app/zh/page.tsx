"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ChineseHomePage() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero-bg.jpg')" }} />
      <div className="absolute inset-0 bg-hive-bg/30" style={{ zIndex: 1 }} />
      <div className="absolute inset-0 bg-gradient-to-r from-hive-bg/70 via-hive-bg/30 to-transparent" style={{ zIndex: 2 }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-start min-h-screen px-6 sm:px-10 lg:px-16 pt-24 sm:pt-28 lg:pt-32 max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-left mb-10"
        >
          <span className="block font-serif text-6xl sm:text-7xl md:text-[78px] text-white font-medium tracking-tight leading-[1.05]">
            您的文件。
          </span>
          <span className="block font-serif text-6xl sm:text-7xl md:text-[78px] text-white font-medium tracking-tight leading-[1.05] mt-3">
            亚太任何地方。
          </span>
          <span
            className="block font-serif text-5xl sm:text-6xl md:text-[74px] font-medium tracking-tight leading-[1.05] mt-2"
            style={{
              background: "linear-gradient(135deg, #D8A15B 0%, #F0C27B 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            智能处理。
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-left text-lg sm:text-xl md:text-2xl text-white/80 font-sans font-medium max-w-[620px] leading-[1.45] mb-12"
        >
          为跨境个人和企业提供Apostille、使馆公证和文件服务。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="flex flex-col sm:flex-row items-start gap-4"
        >
          <Link
            href="/zh/contact/"
            className="inline-flex items-center justify-center gap-2 px-8 h-14 rounded-full bg-hive-accent hover:bg-hive-accent-hover text-hive-bg text-sm font-semibold tracking-wide transition-all hover:shadow-glow"
          >
            联系我们 <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/zh/services/"
            className="inline-flex items-center justify-center gap-2 px-8 h-14 rounded-full border border-hive-border text-hive-muted hover:text-white hover:border-hive-accent hover:bg-hive-accent/10 text-sm font-semibold tracking-wide transition-all"
          >
            探索服务 →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex items-center gap-3"
        >
          <div className="flex items-center gap-1.5">
            <span className="text-green-400 text-sm">★ 4.9</span>
            <span className="text-hive-muted text-xs">/ 5</span>
          </div>
          <span className="text-hive-dim text-xs">Trustpilot</span>
          <span className="text-hive-dim text-[10px]">— 300+ 真实评价</span>
        </motion.div>
      </div>
    </section>
  );
}
