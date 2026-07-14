import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { insights } from "@/lib/insights-data";
import { generateItemListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Insights — Document Compliance Intelligence | Hive Digital",
  description:
    "Regulatory intelligence, process optimization guides, and document compliance updates for crossborder hiring. China-Vietnam corridor, FBI checks, apostille, and more.",
  alternates: {
    canonical: "/insights/",
    languages: {
      en: "/insights/",
      "zh-CN": "/zh/insights/",
    },
  },
  openGraph: {
    title: "Insights — Document Compliance Intelligence | Hive Digital",
    description:
      "Expert guides on document authentication, apostille, work permits, and crossborder compliance.",
    type: "website",
  },
};

export default function InsightsPage() {
  const itemListSchema = generateItemListSchema(insights);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema),
        }}
      />
      <main className="pt-24 pb-16 px-6 lg:px-12 bg-hive-bg min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white mb-4">
            Insights
          </h1>
          <p className="text-hive-muted text-lg max-w-2xl">
            Regulatory intelligence and practical guides for crossborder
            document compliance. Stay ahead of changing requirements across
            Asia and beyond.
          </p>
        </div>

        {/* Featured / Pillar Post */}
        <div className="mb-12">
          <Link
            href={`/insights/${insights[0].slug}/`}
            className="group block bg-hive-surface border border-hive-border rounded-2xl overflow-hidden hover:border-hive-accent/30 transition-all duration-300"
          >
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                  {insights[0].category}
                </span>
                <span className="text-hive-dim text-xs">Featured</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-hive-accent transition-colors">
                {insights[0].title}
              </h2>
              <p className="text-hive-muted leading-relaxed mb-6 max-w-3xl">
                {insights[0].excerpt}
              </p>
              <div className="flex items-center gap-6 text-hive-dim text-sm">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {insights[0].date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {insights[0].readTime}
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {insights.slice(1).map((article) => (
            <article
              key={article.slug}
              className="group bg-hive-surface border border-hive-border rounded-2xl p-6 hover:border-hive-accent/30 transition-all duration-300 flex flex-col"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                  {article.category}
                </span>
              </div>
              <h2 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-hive-accent transition-colors">
                {article.title}
              </h2>
              <p className="text-hive-muted text-sm leading-relaxed mb-6 flex-1">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-hive-border">
                <div className="flex items-center gap-4 text-hive-dim text-xs">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>
                <Link
                  href={`/insights/${article.slug}/`}
                  className="inline-flex items-center gap-1.5 text-hive-accent hover:text-hive-accent-hover text-sm font-medium transition-colors"
                >
                  Read
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter / CTA */}
        <div className="mt-16 bg-hive-elevated border border-hive-border rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3 uppercase tracking-tight">
            Need Compliance Guidance?
          </h2>
          <p className="text-hive-muted mb-6 max-w-xl mx-auto">
            Our team monitors regulatory changes across 21+ countries. Contact
            us for a compliance assessment tailored to your mobility program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sales@hiverelo.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-hive-accent text-hive-bg font-semibold rounded-xl hover:bg-hive-accent-hover transition-colors"
            >
              Email Our Team
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-hive-border text-white font-semibold rounded-xl hover:border-hive-accent/50 transition-colors"
            >
              Contact Page
            </Link>
          </div>
        </div>
      </div>
      </main>
    </>
  );
}
