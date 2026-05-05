"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const featuredTestimonial = {
  name: "James Whitfield",
  title: "International School HR Director",
  text: "Hive Digital handled our entire batch of teacher background checks and apostille authentications for our China campus. Turnaround was fast, communication was excellent via WeCom, and every document arrived perfectly processed.",
};

export default function TrustBar() {
  return (
    <section className="relative z-10 mt-8 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Trustpilot Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-green-500 text-green-500"
                  />
                ))}
              </div>
              <div>
                <div className="text-white font-bold text-sm">
                  4.9 / 5 on Trustpilot
                </div>
                <div className="text-hive-dim text-xs">
                  from 100+ verified reviews
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-12 bg-white/10" />

            {/* Featured Testimonial */}
            <div className="flex items-start gap-3 max-w-lg">
              <Quote className="w-5 h-5 text-red-500/40 shrink-0 mt-0.5" />
              <div>
                <p className="text-hive-muted text-sm leading-relaxed">
                  &ldquo;{featuredTestimonial.text}&rdquo;
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-white text-xs font-semibold">
                    {featuredTestimonial.name}
                  </span>
                  <span className="text-hive-dim text-xs">
                    {featuredTestimonial.title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
