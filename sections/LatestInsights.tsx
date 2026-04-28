"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { insights } from "@/lib/insights-data";

export default function LatestInsights() {
  const featured = insights.slice(0, 3);

  return (
    <section className="py-24 px-6 lg:px-12 bg-hive-bg relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">
              Latest Insights
            </h2>
            <p className="text-hive-muted max-w-xl">
              Regulatory intelligence and process guides for crossborder
              document compliance.
            </p>
          </div>
          <Link
            href="/insights/"
            className="hidden md:inline-flex items-center gap-2 text-hive-accent hover:text-hive-accent-hover text-sm font-medium transition-colors"
          >
            View All Insights
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-hive-surface border border-hive-border rounded-2xl p-6 hover:border-hive-accent/30 transition-all duration-300 flex flex-col"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                  {article.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-hive-accent transition-colors line-clamp-3">
                {article.title}
              </h3>
              <p className="text-hive-muted text-sm leading-relaxed mb-6 line-clamp-2 flex-1">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-hive-border">
                <span className="text-hive-dim text-xs">{article.date}</span>
                <Link
                  href={`/insights/${article.slug}/`}
                  className="inline-flex items-center gap-1.5 text-hive-accent hover:text-hive-accent-hover text-sm font-medium transition-colors"
                >
                  Read Guide
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <Link
            href="/insights/"
            className="inline-flex items-center gap-2 text-hive-accent hover:text-hive-accent-hover text-sm font-medium transition-colors"
          >
            View All Insights
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
