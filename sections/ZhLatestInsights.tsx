"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { zhInsights } from "@/lib/zh-insights-data";

export default function ZhLatestInsights() {
  const featured = zhInsights[0];
  const quickUpdates = zhInsights.slice(1);
  return (
    <section className="py-24 px-6 lg:px-12 bg-hive-bg relative">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">最新资讯</h2>
          <p className="text-hive-muted max-w-xl">跨境文件合规的监管智能和实用指南。</p>
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
              <Link href={`/zh/insights/${featured.slug}/`} className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 text-sm font-medium transition-colors">阅读指南 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></Link>
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
                  <Link href={`/zh/insights/${article.slug}/`} className="inline-flex items-center gap-1.5 text-red-400 hover:text-red-300 text-sm font-medium transition-colors">阅读 <ArrowRight className="w-3.5 h-3.5" /></Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link href="/zh/insights/" className="inline-flex items-center gap-2 text-hive-muted hover:text-white text-sm font-medium transition-colors">查看全部资讯 <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </div>
    </section>
  );
}
