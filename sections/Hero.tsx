"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-start overflow-hidden">
      {/* Background image - APAC map */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-hive-bg/60" style={{ zIndex: 1 }} />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-hive-bg/90 via-hive-bg/50 to-transparent"
        style={{ zIndex: 2 }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col justify-start min-h-screen px-6 sm:px-10 lg:px-16 pt-24 sm:pt-28 lg:pt-32 max-w-5xl"
      >
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-left mb-10"
        >
          <span className="block font-serif text-6xl sm:text-7xl md:text-[78px] text-white font-medium tracking-tight leading-[1.05]">
            Your documents.
          </span>
          <span className="block font-serif text-6xl sm:text-7xl md:text-[78px] text-white font-medium tracking-tight leading-[1.05] mt-3">
            Anywhere in APAC.
          </span>
          <span
            className="block font-serif text-5xl sm:text-6xl md:text-[74px] font-medium tracking-tight leading-[1.05] mt-2"
            style={{
              background: "linear-gradient(135deg, #D8A15B 0%, #F0C27B 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Handled with intelligence.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-left text-lg sm:text-xl md:text-2xl text-white/80 font-sans font-medium max-w-[620px] leading-[1.45] mb-12"
        >
          Apostille, embassy legalisation and document services for individuals and businesses moving across borders.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="flex flex-col sm:flex-row items-start gap-4"
        >
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center gap-2 px-8 h-14 rounded-full bg-hive-accent hover:bg-hive-accent-hover text-hive-bg text-sm font-semibold tracking-wide transition-all hover:shadow-glow"
          >
            <MessageCircle className="w-4 h-4" />
            CONTACT US
          </Link>
          <Link
            href="/services/"
            className="inline-flex items-center justify-center gap-2 px-8 h-14 rounded-full border border-hive-border text-hive-muted hover:text-white hover:border-hive-accent hover:bg-hive-accent/10 text-sm font-semibold tracking-wide transition-all"
          >
            Explore Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
