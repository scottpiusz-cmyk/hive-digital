import { Metadata } from "next";
import Link from "next/link";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { zhInsights } from "@/lib/zh-insights-data";

export const metadata: Metadata = {
  title: "资讯与合规指南 | Hive Digital",
  description: "深入了解文件Apostille、使馆认证、背景调查和中国工作许可的合规指南。由Hive Digital专家团队撰写。",
  alternates: {
    canonical: "/zh/insights/",
    languages: {
      en: "/insights/",
      "zh-CN": "/zh/insights/",
    },
  },
};

export default function ChineseInsightsPage() {
  const featured = zhInsights[0];
  const others = zhInsights.slice(1);

  return (
    <main className="pt-24 pb-16 px-6 lg:px-12 bg-hive-bg min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white mb-4">
          资讯与<span className="text-red-500">合规指南</span>
        </h1>
        <p className="text-hive-muted text-lg max-w-2xl mb-12">
          跨境文件认证、工作许可和合规要求的深度分析。由Hive Digital专家团队撰写。
        </p>

        {/* Featured Article */}
        <Link
          href={`/zh/insights/${featured.slug}/`}
          className="group block bg-hive-surface border border-hive-border rounded-2xl overflow-hidden hover:border-red-500/30 transition-all mb-10"
        >
          <div className="p-8 lg:p-10">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-red-500/10 text-red-400 border border-red-500/20 mb-4">
              {featured.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
              {featured.title}
            </h2>
            <p className="text-hive-muted text-base leading-relaxed mb-6 max-w-3xl">
              {featured.excerpt}
            </p>
            <div className="flex items-center gap-6 text-hive-dim text-sm">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{featured.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{featured.readTime}</span>
            </div>
          </div>
        </Link>

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {others.map((article) => (
            <Link
              key={article.slug}
              href={`/zh/insights/${article.slug}/`}
              className="group bg-hive-surface border border-hive-border rounded-2xl p-6 hover:border-red-500/30 transition-all"
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-red-500/10 text-red-400 border border-red-500/20 mb-3">
                {article.category}
              </span>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-red-400 transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-hive-muted text-sm leading-relaxed mb-4 line-clamp-3">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-hive-dim text-xs">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{article.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-hive-dim group-hover:text-red-500 transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
