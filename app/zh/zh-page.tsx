"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Star, Quote, ChevronDown, ChevronLeft, ChevronRight,
  ShieldCheck, Stamp, FileText, Fingerprint, Plane, Building2, MessageSquare,
  FileCheck, Files, FileSearch, Clock, Calendar,
} from "lucide-react";
import { zhInsights } from "@/lib/zh-insights-data";

/* ─────────────────────── HERO ─────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero-bg.jpg')" }} />
      <div className="absolute inset-0 bg-hive-bg/30" style={{ zIndex: 1 }} />
      <div className="absolute inset-0 bg-gradient-to-r from-hive-bg/70 via-hive-bg/30 to-transparent" style={{ zIndex: 2 }} />
      <div className="relative z-10 flex flex-col justify-start min-h-screen px-6 sm:px-10 lg:px-16 pt-24 sm:pt-28 lg:pt-32 max-w-5xl">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3 }} className="text-left mb-10">
          <span className="block font-serif text-6xl sm:text-7xl md:text-[78px] text-white font-medium tracking-tight leading-[1.05]">\u60a8\u7684\u6587\u4ef6\u3002</span>
          <span className="block font-serif text-6xl sm:text-7xl md:text-[78px] text-white font-medium tracking-tight leading-[1.05] mt-3">\u4e9a\u592a\u4efb\u4f55\u5730\u65b9\u3002</span>
          <span className="block font-serif text-5xl sm:text-6xl md:text-[74px] font-medium tracking-tight leading-[1.05] mt-2" style={{ background: "linear-gradient(135deg, #D8A15B 0%, #F0C27B 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>\u667a\u80fd\u5904\u7406\u3002</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.55 }} className="text-left text-lg sm:text-xl md:text-2xl text-white/80 font-sans font-medium max-w-[620px] leading-[1.45] mb-12">
          \u4e3a\u8de8\u5883\u4e2a\u4eba\u548c\u4f01\u4e1a\u63d0\u4f9bApostille\u3001\u4f7f\u9986\u516c\u8bc1\u548c\u6587\u4ef6\u670d\u52a1\u3002
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.75 }} className="flex flex-col sm:flex-row items-start gap-4">
          <Link href="/zh/contact/" className="inline-flex items-center justify-center gap-2 px-8 h-14 rounded-full bg-hive-accent hover:bg-hive-accent-hover text-hive-bg text-sm font-semibold tracking-wide transition-all hover:shadow-glow">\u8054\u7cfb\u6211\u4eec <ArrowRight className="w-4 h-4" /></Link>
          <Link href="/zh/services/" className="inline-flex items-center justify-center gap-2 px-8 h-14 rounded-full border border-hive-border text-hive-muted hover:text-white hover:border-hive-accent hover:bg-hive-accent/10 text-sm font-semibold tracking-wide transition-all">\u63a2\u7d22\u670d\u52a1 &rarr;</Link>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="mt-16 flex items-center gap-3">
          <div className="flex items-center gap-1.5"><span className="text-green-400 text-sm">&#9733; 4.9</span><span className="text-hive-muted text-xs">/ 5</span></div>
          <span className="text-hive-dim text-xs">Trustpilot</span>
          <span className="text-hive-dim text-[10px]">&mdash; 300+ \u771f\u5b9e\u8bc4\u4ef7</span>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────── TRUST BAR ─────────────────────── */
const featuredTestimonial = {
  name: "James Whitfield",
  title: "\u56fd\u9645\u5b66\u6821\u4eba\u529b\u8d44\u6e90\u603b\u76d1",
  text: "Hive Digital\u4e3a\u6211\u4eec\u4e2d\u56fd\u6821\u533a\u7684\u6559\u5e08\u80cc\u666f\u8c03\u67e5\u548c\u516c\u8bc1\u8ba4\u8bc1\u5168\u7a0b\u63d0\u4f9b\u670d\u52a1\u3002\u5468\u8f6c\u5feb\uff0c\u901a\u8fc7\u4f01\u4e1a\u5fae\u4fe1\u6c9f\u901a\u975e\u5e38\u987a\u7545\uff0c\u6bcf\u4e00\u4efd\u6587\u4ef6\u90fd\u5b8c\u7f8e\u5904\u7406\u3002",
};

function TrustBar() {
  return (
    <section className="relative z-10 mt-8 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-green-500 text-green-500" />)}
              </div>
              <div>
                <div className="text-white font-bold text-sm">4.9 / 5 on Trustpilot</div>
                <div className="text-hive-dim text-xs">\u6765\u81ea100+\u9a8c\u8bc1\u8bc4\u4ef7</div>
              </div>
            </div>
            <div className="hidden lg:block w-px h-12 bg-white/10" />
            <div className="flex items-start gap-3 max-w-lg">
              <Quote className="w-5 h-5 text-red-500/40 shrink-0 mt-0.5" />
              <div>
                <p className="text-hive-muted text-sm leading-relaxed">&ldquo;{featuredTestimonial.text}&rdquo;</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-white text-xs font-semibold">{featuredTestimonial.name}</span>
                  <span className="text-hive-dim text-xs">{featuredTestimonial.title}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────── SERVICE PIPELINE ─────────────────────── */
const services = [
  { id: "background-checks", icon: ShieldCheck, title: "\u8054\u90a6\u4e0e\u5dde\u80cc\u666f\u8c03\u67e5", image: "/background-checks.jpg", summary: "\u6765\u81ea\u7f8e\u56fd\u3001\u52a0\u62ff\u5927\u3001\u82f1\u56fd\u3001\u6fb3\u5927\u5229\u4e9a\u7b49\u56fd\u5bb6\u7684\u72af\u7f6a\u8bb0\u5f55\u68c0\u67e5\u548c\u8eab\u4efd\u9a8c\u8bc1\u3002", details: ["FBI\u8eab\u4efd\u5386\u53f2\u6458\u8981\u68c0\u67e5\uff08\u7f8e\u56fd\uff09", "RCMP\u72af\u7f6a\u8bb0\u5f55\u68c0\u67e5\uff08\u52a0\u62ff\u5927\uff09", "ACRO\u8b66\u65b9\u8bc1\u660e\uff08\u82f1\u56fd\uff09", "\u5dde\u7ea7\u53f8\u6cd5\u90e8\u68c0\u67e5"] },
  { id: "apostille", icon: Stamp, title: "\u6587\u4ef6Apostille\u4e0e\u8ba4\u8bc1", image: "/apostille-auth-combined.jpg", summary: "\u6d77\u7259Apostille\u8ba4\u8bc1\u3001\u4f7f\u9986/\u9886\u4e8b\u9986\u516c\u8bc1\u3001\u5b66\u4f4d\u8bc1\u3001\u6559\u5e08\u8bc1\u4e66\u3001\u7ed3\u5a5a\u8bc1\u548c\u516c\u53f8\u6587\u4ef6\u7684\u516c\u8bc1\u3002", details: ["\u6d77\u7259Apostille\uff08\u516c\u7ea6\u6210\u5458\u56fd\uff09", "\u4e2d\u56fd\u4f7f\u9986/\u9886\u4e8b\u9986\u8ba4\u8bc1", "\u8d8a\u5357\u4f7f\u9986\u516c\u8bc1", "\u6cf0\u56fd\u5916\u4ea4\u90e8\u4e0e\u4f7f\u9986\u8ba4\u8bc1", "\u97e9\u56fd\u548c\u65e5\u672c\u9886\u4e8b\u9986\u8ba4\u8bc1", "\u516c\u8bc1\u4e0e\u7ffb\u8bd1\u534f\u8c03"] },
  { id: "china-pcc", icon: FileText, title: "\u4e2d\u56fd\u65e0\u72af\u7f6a\u8bb0\u5f55\u8bc1\u660e", image: "/china-pcc.jpg", summary: "\u4ece\u5317\u4eac\u3001\u4e0a\u6d77\u3001\u6df1\u5733\u7b49\u4e2d\u56fd\u57ce\u5e02\u7684\u516c\u5b89\u5c40\u83b7\u53d6\u65e0\u72af\u7f6a\u8bb0\u5f55\u8bc1\u660e\u3002", details: ["\u5317\u4eac\u516c\u5b89\u5c40\u65e0\u72af\u7f6a\u8bb0\u5f55\u8bc1\u660e", "\u4e0a\u6d77\u516c\u5b89\u5c40\u65e0\u72af\u7f6a\u8bb0\u5f55\u8bc1\u660e", "\u6df1\u5733\u516c\u5b89\u5c40\u72af\u7f6a\u8bb0\u5f55\u68c0\u67e5", "\u5176\u4ed6\u57ce\u5e02\u53ef\u7528 \u2014 \u54a8\u8be2\u786e\u8ba4", "\u516c\u8bc1\u4e0e\u82f1\u6587\u7ffb\u8bd1\u5305\u542b"] },
  { id: "fingerprinting", icon: Fingerprint, title: "\u6307\u7eb9\u91c7\u96c6\u670d\u52a1", image: "/fingerprinting.jpg", summary: "\u5728\u4e0a\u6d77\u3001\u5317\u4eac\u3001\u6210\u90fd\u7b49\u4e3b\u8981\u57ce\u5e02\u63d0\u4f9b\u5feb\u901f\u3001\u4fbf\u6377\u7684\u6307\u7eb9\u91c7\u96c6\u670d\u52a1\u3002", details: ["FBI\u5408\u89c4\u6307\u7eb9\u91c7\u96c6", "\u4f20\u7edf\u58a8\u6c34\u6307\u7eb9", "24\u5c0f\u65f6\u5185\u6570\u5b57\u4ea4\u4ed8", "\u5b89\u5168\u5feb\u9012\u7eb8\u8d28\u7248"], link: "/zh/shanghai-fingerprinting/" },
  { id: "visa", icon: Plane, title: "\u4e2d\u56fd\u7b7e\u8bc1\u4e0e\u5de5\u4f5c\u8bb8\u53ef", image: "/china-visa.jpg", summary: "\u4e2d\u56fdZ\u7b7e\u8bc1\u7533\u8bf7\u548c\u5c45\u7559\u8bb8\u53ef\u6587\u4ef6\u7684\u5168\u6d41\u7a0b\u51c6\u5907\u548c\u6307\u5bfc\u3002", details: ["Z\u7b7e\u8bc1\u6587\u4ef6\u51c6\u5907\u4e0e\u5ba1\u6838", "\u5c45\u7559\u8bb8\u53ef\u7533\u8bf7\u652f\u6301", "\u6587\u4ef6\u7ffb\u8bd1\u4e0e\u8ba4\u8bc1"] },
  { id: "business", icon: Building2, title: "\u4e2d\u56fd\u4f01\u4e1a\u6ce8\u518c", image: "/business-registration.jpg", summary: "\u4eceWFOE\u548c\u5408\u8d44\u516c\u53f8\u8bbe\u7acb\u5230\u6ce8\u518c\u540e\u5408\u89c4\uff0c\u5e2e\u52a9\u5916\u56fd\u4f01\u4e1a\u5728\u4e2d\u56fd\u5efa\u7acb\u6cd5\u5f8b\u5b9e\u4f53\u3002", details: ["WFOE\u6ce8\u518c", "\u5408\u8d44\u516c\u53f8\u8bbe\u7acb", "\u8425\u4e1a\u6267\u7167\u7533\u8bf7", "\u94f6\u884c\u8d26\u6237\u5f00\u7acb"] },
  { id: "ancillary", icon: MessageSquare, title: "\u8f85\u52a9\u670d\u52a1", image: "/ancillary.jpg", summary: "\u540e\u53f0\u8fd0\u8425\u652f\u6301\u2014\u2014\u4eba\u529b\u8d44\u6e90\u3001\u85aa\u8d44\u3001\u8d22\u52a1\u3001\u7a0e\u52a1\u5408\u89c4\u548c\u529e\u516c\u9009\u5740\u3002", details: ["\u4eba\u529b\u8d44\u6e90\u4e0e\u85aa\u8d44\u7ba1\u7406", "\u8d22\u52a1\u3001\u4f1a\u8ba1\u4e0e\u7a0e\u52a1\u5408\u89c4", "\u529e\u516c\u9009\u5740\u4e0e\u79df\u8d41\u534f\u8c03"] },
];

function ServicePipeline() {
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <section className="py-24 px-6 lg:px-12 bg-hive-bg relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">\u6211\u4eec\u7684\u670d\u52a1</h2>
          <p className="text-hive-muted max-w-2xl mx-auto">\u8986\u76d6\u4e9a\u6d32\u53ca\u5168\u7403\u7684\u7aef\u5230\u7aef\u6587\u4ef6\u8ba4\u8bc1\u548c\u5408\u89c4\u652f\u6301\u3002</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            const isOpen = expanded === service.id;
            return (
              <motion.div key={service.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-hive-surface border border-hive-border rounded-2xl overflow-hidden hover:border-red-500/30 transition-all duration-300">
                {service.image && (
                  <div className="relative h-48 w-full">
                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-hive-surface via-hive-surface/40 to-transparent" />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0"><Icon className="w-5 h-5 text-red-500" /></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                        <button onClick={() => setExpanded(isOpen ? null : service.id)} className="ml-2 text-hive-dim hover:text-white transition-colors"><ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} /></button>
                      </div>
                      <p className="text-hive-muted text-sm mt-1">{service.summary}</p>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                            <ul className="mt-4 space-y-2">
                              {service.details.map((d, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-hive-muted"><span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />{d}</li>
                              ))}
                            </ul>
                            {service.link && <Link href={service.link} className="inline-flex items-center gap-1 text-red-400 text-sm mt-4 hover:text-white transition-colors">\u4e86\u89e3\u66f4\u591a &rarr;</Link>}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── TRUSTPILOT CAROUSEL ─────────────────────── */
const reviews = [
  { name: "James Whitfield", title: "\u56fd\u9645\u5b66\u6821\u4eba\u529b\u8d44\u6e90\u603b\u76d1", text: "Hive Digital\u4e3a\u6211\u4eec\u4e2d\u56fd\u6821\u533a\u7684\u6559\u5e08\u80cc\u666f\u8c03\u67e5\u548c\u516c\u8bc1\u8ba4\u8bc1\u5168\u7a0b\u63d0\u4f9b\u670d\u52a1\u3002\u5468\u8f6c\u5feb\uff0c\u901a\u8fc7\u4f01\u4e1a\u5fae\u4fe1\u6c9f\u901a\u975e\u5e38\u987a\u7545\uff0c\u6bcf\u4e00\u4efd\u6587\u4ef6\u90fd\u5b8c\u7f8e\u5904\u7406\u3002", rating: 5 },
  { name: "Sarah Chen", title: "\u4ece\u82f1\u56fd\u8fc1\u5c45\u81f3\u4e0a\u6d77", text: "\u6211\u9700\u8981\u8ba4\u8bc1\u5b66\u4f4d\u548c\u6559\u5e08\u8bc1\u4e66\u4ee5\u529e\u7406\u4e2d\u56fd\u5de5\u4f5c\u7b7e\u8bc1\u3002Hive Digital\u7ba1\u7406\u4e86\u4ece\u82f1\u56fd\u516c\u8bc1\u5230\u4e2d\u56fd\u9886\u4e8b\u9986\u8ba4\u8bc1\u7684\u5168\u90e8\u6d41\u7a0b\u3002\u6574\u4e2a\u8fc7\u7a0b\u4e0d\u52303\u5468\uff0c\u6211\u53ef\u4ee5\u59cb\u7ec8\u8ddf\u8e2a\u8fdb\u5ea6\u3002", rating: 5 },
  { name: "Michael Torres", title: "\u79d1\u6280\u516c\u53f8\u8fd0\u8425\u603b\u76d1", text: "\u6211\u4eec\u5728\u4e2d\u56fd\u3001\u8d8a\u5357\u548c\u6cf0\u56fd\u7684\u5458\u5de5\u6587\u4ef6\u5904\u7406\u4e00\u76f4\u4f7f\u7528Hive Digital\u3002\u4ed6\u4eec\u5bf9\u6bcf\u4e2a\u56fd\u5bb6\u5177\u4f53\u8981\u6c42\u7684\u4e86\u89e3\u4e3a\u6211\u4eec\u8282\u7701\u4e86\u65e0\u6570\u65f6\u95f4\u3002\u771f\u6b63\u7684\u8de8\u5883\u62db\u8058\u5408\u4f5c\u4f19\u4f34\u3002", rating: 5 },
  { name: "Emily Park", title: "\u56fd\u9645\u6559\u5e08", text: "Scott\u548cHive Digital\u56e2\u961f\u5728\u5fae\u4fe1\u4e0a\u7684\u54cd\u5e94\u975e\u5e38\u8fc5\u901f\u3002\u4ed6\u4eec\u6307\u5bfc\u6211\u5b8c\u6210\u4e86\u6bcf\u4e00\u6b65\u51c6\u5907\u97e9\u56fd\u6240\u9700\u6587\u4ef6\u3002\u4e13\u4e1a\u3001\u8010\u5fc3\u3001\u771f\u8bda\u5e2e\u52a9\u3002\u6beb\u4e0d\u72b9\u8c6b\u7ed9\u4e94\u661f\u597d\u8bc4\u3002", rating: 5 },
];

function TrustpilotCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const paginate = (dir: number) => { setDirection(dir); setCurrent((prev) => (prev + dir + reviews.length) % reviews.length); };
  const variants = { enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }), center: { x: 0, opacity: 1 }, exit: (dir: number) => ({ x: dir < 0 ? 300 : -300, opacity: 0 }) };
  return (
    <section className="py-24 px-6 lg:px-12 bg-hive-bg relative">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">\u5168\u7403\u5ba2\u6237\u4fe1\u4efb</h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-hive-accent text-hive-accent" />)}</div>
            <span className="text-white font-semibold ml-1">4.9 / 5</span>
            <span className="text-hive-dim text-sm ml-1">on Trustpilot</span>
          </div>
        </motion.div>
        <div className="relative min-h-[280px] flex items-center justify-center">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div key={current} custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4, ease: "easeInOut" }} className="bg-hive-surface border border-hive-border rounded-2xl p-8 md:p-10 w-full">
              <Quote className="w-8 h-8 text-hive-accent/40 mb-4" />
              <p className="text-white text-lg md:text-xl leading-relaxed mb-6">&ldquo;{reviews[current].text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-hive-accent/20 flex items-center justify-center text-hive-accent font-bold text-sm">{reviews[current].name.charAt(0)}</div>
                <div>
                  <div className="text-white font-semibold text-sm">{reviews[current].name}</div>
                  <div className="text-hive-dim text-xs">{reviews[current].title}</div>
                </div>
                <div className="ml-auto flex">{[...Array(reviews[current].rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-hive-accent text-hive-accent" />)}</div>
              </div>
            </motion.div>
          </AnimatePresence>
          <button onClick={() => paginate(-1)} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-6 w-10 h-10 rounded-full bg-hive-surface border border-hive-border flex items-center justify-center hover:border-hive-accent/50 transition-colors z-10"><ChevronLeft className="w-5 h-5 text-hive-muted" /></button>
          <button onClick={() => paginate(1)} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-6 w-10 h-10 rounded-full bg-hive-surface border border-hive-border flex items-center justify-center hover:border-hive-accent/50 transition-colors z-10"><ChevronRight className="w-5 h-5 text-hive-muted" /></button>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, i) => <button key={i} onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-hive-accent w-6" : "bg-hive-border hover:bg-hive-dim"}`} />)}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── PROCESS STEPS ─────────────────────── */
const steps = [
  { icon: FileCheck, title: "\u514d\u8d39\u54a8\u8be2", description: "\u544a\u8bc9\u6211\u4eec\u60a8\u7684\u76ee\u7684\u56fd\u3001\u6587\u4ef6\u7c7b\u578b\u548c\u65f6\u95f4\u8282\u70b9\u3002\u6211\u4eec\u5c06\u5236\u5b9a\u51c6\u786e\u7684\u8ba4\u8bc1\u8def\u5f84\u5e76\u63d0\u4f9b\u900f\u660e\u7684\u5168\u5305\u62a5\u4ef7\u3002" },
  { icon: Files, title: "\u6587\u4ef6\u6536\u96c6", description: "\u901a\u8fc7\u5b89\u5168\u5feb\u9012\u6216\u6570\u5b57\u4e0a\u4f20\u53d1\u9001\u6587\u4ef6\u3002\u6211\u4eec\u9a8c\u8bc1\u6bcf\u4efd\u6587\u4ef6\u7684\u5b8c\u6574\u6027\uff0c\u5e76\u5728\u63d0\u4ea4\u524d\u6807\u6ce8\u4efb\u4f55\u95ee\u9898\u3002" },
  { icon: FileSearch, title: "\u8ba4\u8bc1\u4e0e\u9a8c\u8bc1", description: "\u6211\u4eec\u5904\u7406\u516c\u8bc1\u3001Apostille\u548c\u4f7f\u9986\u6216\u9886\u4e8b\u9986\u8ba4\u8bc1 \u2014 \u7ba1\u7406\u6bcf\u4e2a\u6b65\u9aa4\uff0c\u63d0\u4f9b\u8ddf\u8e2a\u63d0\u4ea4\u548c\u5b9e\u65f6\u72b6\u6001\u66f4\u65b0\u3002" },
  { icon: Plane, title: "\u5168\u7403\u914d\u9001", description: "\u60a8\u7684\u5b8c\u5168\u8ba4\u8bc1\u6587\u4ef6\u5c06\u901a\u8fc7\u5b89\u5168\u8ddf\u8e2a\u5feb\u9012\u914d\u9001\u5230\u4e16\u754c\u4efb\u4f55\u5730\u65b9 \u2014 \u6216\u4ece\u6211\u4eec\u4e0a\u6d77\u529e\u516c\u5ba4\u4eb2\u81ea\u9886\u53d6\u3002" },
];

function ProcessSteps() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-hive-surface relative overflow-hidden">
      <div className="relative h-64 md:h-80 w-full max-w-7xl mx-auto mb-16 rounded-2xl overflow-hidden">
        <Image src="/bridge-compliance.jpg" alt="\u65e0\u7f1d\u6587\u4ef6\u5408\u89c4\u6d41\u7a0b" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-hive-surface/80 via-transparent to-hive-surface/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-2">\u56db\u6b65\u8fbe\u6210\u5408\u89c4</h2>
            <p className="text-hive-muted text-lg">\u4ece\u54a8\u8be2\u5230\u914d\u9001 \u2014 \u65e0\u7f1d\u6d41\u7a0b</p>
          </motion.div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-hive-accent/10 flex items-center justify-center mb-5 ring-1 ring-hive-accent/20"><Icon className="w-7 h-7 text-hive-accent" /></div>
                  <div className="text-xs font-bold uppercase tracking-widest text-hive-accent mb-3">\u7b2c {index + 1} \u6b65</div>
                  <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-hive-muted text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-hive-accent/30 to-transparent" />}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── LATEST INSIGHTS ─────────────────────── */
function LatestInsights() {
  const featured = zhInsights[0];
  const quickUpdates = zhInsights.slice(1);
  return (
    <section className="py-24 px-6 lg:px-12 bg-hive-bg relative">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">\u6700\u65b0\u8d44\u8baf</h2>
          <p className="text-hive-muted max-w-xl">\u8de8\u5883\u6587\u4ef6\u5408\u89c4\u7684\u76d1\u7ba1\u667a\u80fd\u548c\u5b9e\u7528\u6307\u5357\u3002</p>
        </motion.div>
        <div className="grid lg:grid-cols-5 gap-6">
          <motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="lg:col-span-3 group bg-hive-surface border border-hive-border rounded-2xl overflow-hidden hover:border-red-500/30 transition-all duration-300 flex flex-col">
            <div className="p-8 lg:p-10 flex-1 flex flex-col">
              <div className="mb-4"><span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-red-500/10 text-red-400 border border-red-500/20">{featured.category}</span></div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-red-400 transition-colors">{featured.title}</h3>
              <p className="text-hive-muted leading-relaxed mb-6 flex-1">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-hive-dim text-sm mb-6">
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{featured.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{featured.readTime}</span>
              </div>
              <Link href={`/zh/insights/${featured.slug}/`} className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 text-sm font-medium transition-colors">\u9605\u8bfb\u6307\u5357 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></Link>
            </div>
          </motion.article>
          <div className="lg:col-span-2 flex flex-col gap-6">
            {quickUpdates.map((article, index) => (
              <motion.article key={article.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group bg-hive-surface border border-hive-border rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300 flex-1 flex flex-col">
                <div className="mb-3"><span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-red-500/10 text-red-400 border border-red-500/20">{article.category}</span></div>
                <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-red-400 transition-colors line-clamp-3">{article.title}</h3>
                <p className="text-hive-muted text-sm leading-relaxed line-clamp-2 flex-1">{article.excerpt}</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-hive-border">
                  <span className="text-hive-dim text-xs">{article.date}</span>
                  <Link href={`/zh/insights/${article.slug}/`} className="inline-flex items-center gap-1.5 text-red-400 hover:text-red-300 text-sm font-medium transition-colors">\u9605\u8bfb <ArrowRight className="w-3.5 h-3.5" /></Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link href="/zh/insights/" className="inline-flex items-center gap-2 text-hive-muted hover:text-white text-sm font-medium transition-colors">\u67e5\u770b\u5168\u90e8\u8d44\u8baf <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── FAQ ─────────────────────── */
const faqs = [
  { question: "Apostille\u8fc7\u7a0b\u9700\u8981\u591a\u957f\u65f6\u95f4\uff1f", answer: "\u5927\u591a\u6570Apostille\u8bf7\u6c42\u57285\u201310\u4e2a\u5de5\u4f5c\u65e5\u5185\u5b8c\u6210\u3002\u4f7f\u9986\u548c\u9886\u4e8b\u9986\u516c\u8bc1\u901a\u5e38\u9700\u898110\u201320\u4e2a\u5de5\u4f5c\u65e5\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u76ee\u7684\u5730\u56fd\u5bb6\u548c\u5f53\u524d\u5904\u7406\u91cf\u3002\u6211\u4eec\u5728\u6bcf\u4e2a\u9636\u6bb5\u90fd\u63d0\u4f9b\u8ddf\u8e2a\u66f4\u65b0\u3002" },
  { question: "\u4f60\u4eec\u652f\u6301\u54ea\u4e9b\u56fd\u5bb6\uff1f", answer: "\u6211\u4eec\u4e3a21+\u56fd\u5bb6\u63d0\u4f9b\u6587\u4ef6\u8ba4\u8bc1\u548c\u5408\u89c4\u652f\u6301\uff0c\u5305\u62ec\u4e2d\u56fd\u3001\u8d8a\u5357\u3001\u6cf0\u56fd\u3001\u97e9\u56fd\u3001\u65e5\u672c\u3001\u53f0\u6e7e\u3001\u5370\u5ea6\u5c3c\u897f\u4e9a\u7b49\u3002\u5982\u679c\u60a8\u7684\u76ee\u7684\u5730\u4e0d\u5728\u5217\u8868\u4e2d\uff0c\u8bf7\u8054\u7cfb\u6211\u4eec \u2014 \u6211\u4eec\u5f88\u53ef\u80fd\u4e5f\u8986\u76d6\u3002" },
  { question: "\u5982\u679c\u6211\u5df2\u7ecf\u4e0d\u5728\u4e2d\u56fd\u5c45\u4f4f\uff0c\u8fd8\u80fd\u83b7\u53d6\u4e2d\u56fd\u65e0\u72af\u7f6a\u8bb0\u5f55\u8bc1\u660e\u5417\uff1f", answer: "\u53ef\u4ee5\u3002\u5bf9\u4e8e\u5317\u4eac\u3001\u4e0a\u6d77\u3001\u6df1\u5733\u7b49\u57ce\u5e02\uff0c\u6211\u4eec\u53ef\u4ee5\u4ee3\u60a8\u4ece\u5f53\u5730\u516c\u5b89\u5c40\uff08PSB\uff09\u83b7\u53d6\u65e0\u72af\u7f6a\u8bb0\u5f55\u8bc1\u660e\uff08PCC\uff09\u3002\u60a8\u5fc5\u987b\u63d0\u4f9b\u5728\u4e2d\u56fd\u5c45\u4f4f\u65f6\u95f4\u7684\u8bc1\u660e\uff0c\u5305\u62ec\u6709\u6548\u7b7e\u8bc1\u548c\u5c45\u7559\u8bb8\u53ef\u8bc1\u3002\u8bf7\u8054\u7cfb\u6211\u4eec\u786e\u8ba4\u60a8\u6240\u5728\u57ce\u5e02\u7684\u8d44\u683c\u3002" },
  { question: "\u5982\u4f55\u53d1\u9001\u6587\u4ef6\u7ed9\u4f60\u4eec\uff1f", answer: "\u6587\u4ef6\u53ef\u901a\u8fc7\u5b89\u5168\u56fd\u9645\u5feb\u9012\u53d1\u9001\u81f3\u6211\u4eec\u4e0a\u6d77\u529e\u516c\u5ba4\uff0c\u6216\u6570\u5b57\u4e0a\u4f20\u4ee5\u4f9b\u521d\u6b65\u5ba1\u6838\u3002\u5728\u60a8\u7684\u514d\u8d39\u54a8\u8be2\u4e2d\uff0c\u6211\u4eec\u5c06\u6839\u636e\u60a8\u7684\u6587\u4ef6\u7c7b\u578b\u548c\u76ee\u7684\u5730\u56fd\u5bb6\u786e\u8ba4\u6700\u4f73\u63d0\u4ea4\u65b9\u5f0f\u3002" },
  { question: "\u4f60\u4eec\u63d0\u4f9b\u6587\u4ef6\u7ffb\u8bd1\u670d\u52a1\u5417\uff1f", answer: "\u662f\u7684\u3002\u6211\u4eec\u534f\u8c03\u6240\u6709\u4e3b\u8981\u8bed\u8a00\u7684\u8ba4\u8bc1\u7ffb\u8bd1\uff0c\u5305\u62ec\u4e2d\u6587\u3001\u8d8a\u5357\u8bed\u3001\u6cf0\u8bed\u3001\u97e9\u8bed\u548c\u65e5\u8bed\u3002\u7ffb\u8bd1\u7531\u8ba4\u8bc1\u7ffb\u8bd1\u4eba\u5458\u5b8c\u6210\uff0c\u5e76\u53ef\u4e0e\u60a8\u7684\u539f\u59cb\u6587\u4ef6\u4e00\u8d77\u8fdb\u884c\u516c\u8bc1\u6216\u8ba4\u8bc1\u3002" },
  { question: "\u8054\u7cfb\u4f60\u4eec\u56e2\u961f\u7684\u6700\u5feb\u65b9\u5f0f\u662f\u4ec0\u4e48\uff1f", answer: "\u4f01\u4e1a\u5fae\u4fe1/\u5fae\u4fe1\u662f\u8054\u7cfb\u6211\u4eec\u83b7\u53d6\u5b9e\u65f6\u66f4\u65b0\u7684\u6700\u5feb\u65b9\u5f0f\u3002\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7WhatsApp Business\u3001\u90ae\u4ef6sales@hiverelo.com\u6216\u7535\u8bdd+86 13764322474\u8054\u7cfb\u6211\u4eec\u3002\u5de5\u4f5c\u65f6\u95f4\u5185\u6211\u4eec\u901a\u5e38\u57282\u5c0f\u65f6\u5185\u56de\u590d\u3002" },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section id="faq" className="py-24 px-6 lg:px-12 bg-hive-surface">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">\u5e38\u89c1\u95ee\u9898</h2>
          <p className="text-hive-muted">\u4e0eHive Digital\u5408\u4f5c\u60a8\u9700\u8981\u4e86\u89e3\u7684\u4e00\u5207</p>
        </motion.div>
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div key={index} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }} className="bg-hive-bg border border-hive-border rounded-xl overflow-hidden">
                <button onClick={() => setOpenIndex(isOpen ? null : index)} className="w-full px-6 py-5 text-left flex items-center justify-between gap-4">
                  <span className="text-white font-medium text-sm md:text-base">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-hive-dim shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="px-6 pb-5 pt-0 text-hive-muted text-sm leading-relaxed">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── MAIN PAGE ─────────────────────── */
export default function ChineseHomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicePipeline />
      <TrustpilotCarousel />
      <ProcessSteps />
      <LatestInsights />
      <FAQ />
    </>
  );
}
