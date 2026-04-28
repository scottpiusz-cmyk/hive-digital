"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const stats = [
  { label: "15+", desc: "Years helping individuals & businesses" },
  { label: "21+", desc: "Countries served across Asia & beyond" },
  { label: "4.9/5", desc: "Trustpilot rating from 100+ reviews" },
  { label: "2hr", desc: "Average response time on WeCom/WeChat" },
];

export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section ref={ref} className="py-24 lg:py-32 bg-hive-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-16">
          <Star className="w-4 h-4 fill-green-500 text-green-500" />
          <span className="text-xs text-hive-muted">Rated <span className="text-green-400 font-semibold">4.9/5</span> on Trustpilot &mdash; under 2hr response on WeCom/WeChat</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <div className="text-3xl lg:text-4xl font-black text-white tracking-tight">{s.label}</div>
              <div className="text-xs text-hive-dim mt-2 leading-relaxed max-w-[200px]">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
