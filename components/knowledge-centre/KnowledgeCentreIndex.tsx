import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Megaphone,
} from "lucide-react";
import type { KnowledgeArticle } from "@/lib/knowledge-centre";
import { getKnowledgeCategories } from "@/lib/knowledge-centre";

export interface KnowledgeCentreIndexLabels {
  eyebrow: string;
  title: string;
  description: string;
  topics: string;
  featuredTitle: string;
  featuredDescription: string;
  latestTitle: string;
  latestDescription: string;
  noUpdates: string;
  guideBadge: string;
  updateBadge: string;
  readGuide: string;
  readUpdate: string;
  lastUpdated: string;
  published: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaPrimary: string;
  ctaSecondary: string;
  contactHref: string;
}

function ArticleMeta({
  article,
  labels,
}: {
  article: KnowledgeArticle;
  labels: KnowledgeCentreIndexLabels;
}) {
  const dateLabel =
    article.type === "guide" ? labels.lastUpdated : labels.published;

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-hive-dim">
      <span className="inline-flex items-center gap-1.5">
        <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
        {dateLabel}: {article.date}
      </span>
      {article.type === "guide" && (
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          {article.readTime}
        </span>
      )}
    </div>
  );
}

export default function KnowledgeCentreIndex({
  articles,
  basePath,
  labels,
}: {
  articles: KnowledgeArticle[];
  basePath: string;
  labels: KnowledgeCentreIndexLabels;
}) {
  const featuredGuides = articles.filter(
    (article) => article.type === "guide" && article.featured,
  );
  const guides =
    featuredGuides.length > 0
      ? featuredGuides
      : articles.filter((article) => article.type === "guide");
  const updates = articles.filter((article) => article.type === "update");
  const categories = getKnowledgeCategories(articles);

  return (
    <div className="min-h-screen bg-hive-bg px-6 pb-20 pt-28 lg:px-12 lg:pt-36">
      <div className="mx-auto max-w-7xl">
        <header className="max-w-4xl pb-16">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-red-400">
            {labels.eyebrow}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
            {labels.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-hive-muted sm:text-xl">
            {labels.description}
          </p>
        </header>

        <section
          aria-labelledby="knowledge-topics"
          className="mb-20 border-y border-hive-border py-6"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <h2
              id="knowledge-topics"
              className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-hive-dim"
            >
              {labels.topics}
            </h2>
            <ul className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <li
                  key={category}
                  className="rounded-full border border-hive-border bg-hive-surface px-4 py-2 text-sm text-hive-muted"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="featured-guides">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                <BookOpen className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2
                id="featured-guides"
                className="text-3xl font-bold tracking-tight text-white md:text-4xl"
              >
                {labels.featuredTitle}
              </h2>
            </div>
            <p className="leading-relaxed text-hive-muted">
              {labels.featuredDescription}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {guides.map((article, index) => (
              <article
                key={article.slug}
                className={`group flex flex-col rounded-3xl border bg-hive-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-2xl hover:shadow-black/20 ${
                  index === 0
                    ? "border-red-500/25 lg:col-span-2 lg:p-10"
                    : "border-hive-border"
                }`}
              >
                <div className="mb-5 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-400">
                    <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                    {labels.guideBadge}
                  </span>
                  <span className="rounded-full border border-hive-border px-3 py-1 text-xs text-hive-dim">
                    {article.category}
                  </span>
                </div>
                <h3
                  className={`mb-4 font-bold leading-tight text-white transition-colors group-hover:text-red-400 ${
                    index === 0 ? "text-2xl md:text-4xl" : "text-xl"
                  }`}
                >
                  {article.title}
                </h3>
                <p className="mb-7 flex-1 leading-relaxed text-hive-muted">
                  {article.excerpt}
                </p>
                <ArticleMeta article={article} labels={labels} />
                <Link
                  href={`${basePath}/${article.slug}/`}
                  className="mt-7 inline-flex items-center gap-2 self-start text-sm font-semibold text-red-400 transition-colors hover:text-red-300"
                >
                  {labels.readGuide}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="latest-updates"
          className="mt-24 border-t border-hive-border pt-14"
        >
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-hive-elevated text-hive-muted">
                <Megaphone className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2
                id="latest-updates"
                className="text-2xl font-bold tracking-tight text-white md:text-3xl"
              >
                {labels.latestTitle}
              </h2>
            </div>
            <p className="leading-relaxed text-hive-muted">
              {labels.latestDescription}
            </p>
          </div>

          {updates.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2">
              {updates.map((article) => (
                <article
                  key={article.slug}
                  className="group rounded-2xl border border-hive-border bg-hive-surface p-6 transition-colors hover:border-red-500/30"
                >
                  <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-hive-border px-3 py-1 text-xs font-semibold uppercase tracking-wider text-hive-muted">
                    <Megaphone className="h-3.5 w-3.5" aria-hidden="true" />
                    {labels.updateBadge}
                  </span>
                  <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-red-400">
                    {article.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-hive-muted">
                    {article.excerpt}
                  </p>
                  <ArticleMeta article={article} labels={labels} />
                  <Link
                    href={`${basePath}/${article.slug}/`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-red-400"
                  >
                    {labels.readUpdate}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-hive-border bg-hive-surface/50 px-6 py-5 text-sm text-hive-dim">
              {labels.noUpdates}
            </div>
          )}
        </section>

        <section className="mt-24 rounded-3xl border border-red-500/20 bg-gradient-to-br from-hive-surface to-hive-elevated p-8 text-center md:p-12">
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
            {labels.ctaTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-hive-muted">
            {labels.ctaDescription}
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href={labels.contactHref}
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-500"
            >
              {labels.ctaPrimary}
            </Link>
            <a
              href="mailto:sales@hiverelo.com"
              className="inline-flex items-center justify-center rounded-full border border-hive-border px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-red-500/40"
            >
              {labels.ctaSecondary}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
