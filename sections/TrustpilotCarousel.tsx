"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "James Whitfield",
    title: "International School HR Director",
    text: "Hive Digital handled our entire batch of teacher background checks and apostille authentications for our China campus. Turnaround was fast, communication was excellent via WeCom, and every document arrived perfectly processed. Highly recommended.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    title: "Relocated from UK to Shanghai",
    text: "I needed my degree and teaching certificate authenticated for a Chinese work visa. Hive Digital managed everything from UK notarization to Chinese Consulate authentication. The whole process took under 3 weeks and I could track progress the entire time.",
    rating: 5,
  },
  {
    name: "Michael Torres",
    title: "Tech Company Operations Lead",
    text: "We have used Hive Digital for employee document processing across China, Vietnam, and Thailand. Their knowledge of each countrys specific requirements saves us countless hours. A true partner for crossborder hiring.",
    rating: 5,
  },
  {
    name: "Emily Park",
    title: "International Teacher",
    text: "Scott and the team at Hive Digital were incredibly responsive on WeChat. They walked me through every step of getting my documents ready for Korea. Professional, patient, and genuinely helpful. Five stars without hesitation.",
    rating: 5,
  },
];

export default function TrustpilotCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent((prev) => (prev + dir + reviews.length) % reviews.length);
    },
    []
  );

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, [paginate]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 300 : -300, opacity: 0 }),
  };

  return (
    <section className="py-24 px-6 lg:px-12 bg-hive-bg relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            Trusted Worldwide
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-hive-accent text-hive-accent"
                />
              ))}
            </div>
            <span className="text-white font-semibold ml-1">4.9 / 5</span>
            <span className="text-hive-dim text-sm ml-1">
              on Trustpilot
            </span>
          </div>
        </motion.div>

        <div className="relative min-h-[280px] flex items-center justify-center">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-hive-surface border border-hive-border rounded-2xl p-8 md:p-10 w-full"
            >
              <Quote className="w-8 h-8 text-hive-accent/40 mb-4" />
              <p className="text-white text-lg md:text-xl leading-relaxed mb-6">
                &ldquo;{reviews[current].text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-hive-accent/20 flex items-center justify-center text-hive-accent font-bold text-sm">
                  {reviews[current].name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">
                    {reviews[current].name}
                  </div>
                  <div className="text-hive-dim text-xs">
                    {reviews[current].title}
                  </div>
                </div>
                <div className="ml-auto flex">
                  {[...Array(reviews[current].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-hive-accent text-hive-accent"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-6 w-10 h-10 rounded-full bg-hive-surface border border-hive-border flex items-center justify-center hover:border-hive-accent/50 transition-colors z-10"
          >
            <ChevronLeft className="w-5 h-5 text-hive-muted" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-6 w-10 h-10 rounded-full bg-hive-surface border border-hive-border flex items-center justify-center hover:border-hive-accent/50 transition-colors z-10"
          >
            <ChevronRight className="w-5 h-5 text-hive-muted" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-hive-accent w-6" : "bg-hive-border hover:bg-hive-dim"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
