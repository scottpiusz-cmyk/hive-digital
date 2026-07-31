import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import type { KnowledgeArticle } from "@/lib/knowledge-centre";

export default function HomeKnowledgeCentre({
  articles,
  basePath,
  title,
  subtitle,
  guideLabel,
  readLabel,
  viewAllLabel,
}: {
  articles: KnowledgeArticle[];
  basePath: string;
  title: string;
  subtitle: string;
  guideLabel: string;
  readLabel: string;
  viewAllLabel: string;
}) {
  const guides = articles
    .filter((article) => article.type === "guide")
    .slice(0, 6);

  return (
    <section
      aria-labelledby="home-knowledge-centre"
      className="relative bg-hive-bg px-6 py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-red-400">
            {guideLabel}
          </p>
          <h2
            id="home-knowledge-centre"
            className="text-3xl font-bold tracking-tight text-white md:text-5xl"
          >
            {title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-hive-muted">
            {subtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((article) => (
            <article
              key={article.slug}
              className="group flex flex-col rounded-3xl border border-hive-border bg-hive-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/35 hover:shadow-2xl hover:shadow-black/20"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-400">
                  <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                  {guideLabel}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-hive-dim">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {article.readTime}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold leading-snug text-white transition-colors group-hover:text-red-400">
                {article.title}
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-hive-muted">
                {article.excerpt}
              </p>
              <Link
                href={`${basePath}/${article.slug}/`}
                className="inline-flex items-center gap-2 self-start text-sm font-semibold text-red-400 transition-colors hover:text-red-300"
              >
                {readLabel}
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={`${basePath}/`}
            className="inline-flex items-center gap-2 rounded-full border border-hive-border px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-red-500/40"
          >
            {viewAllLabel}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
