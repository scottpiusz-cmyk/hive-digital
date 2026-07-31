import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  FileText,
  Megaphone,
  MessageCircle,
  User,
} from "lucide-react";
import type { KnowledgeArticle } from "@/lib/knowledge-centre";
import {
  getRelatedGuides,
  getTableOfContents,
} from "@/lib/knowledge-centre";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFaqSchema,
} from "@/lib/schema";
import KnowledgeArticleContent from "./KnowledgeArticleContent";

export interface KnowledgeArticleLabels {
  centreName: string;
  guideBadge: string;
  updateBadge: string;
  lastUpdated: string;
  published: string;
  tableOfContents: string;
  relatedServices: string;
  questionsTitle: string;
  questionsDescription: string;
  scanLabel: string;
  allArticles: string;
  backToCentre: string;
  faqTitle: string;
  relatedGuidesTitle: string;
  relatedGuidesDescription: string;
  readGuide: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaPrimary: string;
  ctaSecondary: string;
  homeLabel: string;
  homeHref: string;
  contactHref: string;
}

export default function KnowledgeArticlePage({
  article,
  allArticles,
  basePath,
  language,
  labels,
}: {
  article: KnowledgeArticle;
  allArticles: KnowledgeArticle[];
  basePath: string;
  language: string;
  labels: KnowledgeArticleLabels;
}) {
  const isGuide = article.type === "guide";
  const tableOfContents = isGuide ? getTableOfContents(article.content) : [];
  const relatedGuides = isGuide
    ? getRelatedGuides(article, allArticles)
    : [];
  const articlePath = `${basePath}/${article.slug}/`;
  const articleUrl = `https://www.hiverelo.com${articlePath}`;
  const centreUrl = `https://www.hiverelo.com${basePath}/`;
  const articleSchema = generateArticleSchema(article, {
    path: articlePath,
    language,
  });
  const breadcrumbSchema = generateBreadcrumbSchema([
    {
      name: labels.homeLabel,
      url: `https://www.hiverelo.com${labels.homeHref}`,
    },
    { name: labels.centreName, url: centreUrl },
    { name: article.title, url: articleUrl },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {isGuide && article.faqs && article.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFaqSchema(article.faqs)),
          }}
        />
      )}

      <div className="min-h-screen bg-hive-bg px-6 pb-20 pt-28 lg:px-12 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-sm text-hive-dim"
          >
            <Link
              href={labels.homeHref}
              className="transition-colors hover:text-white"
            >
              {labels.homeLabel}
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href={`${basePath}/`}
              className="transition-colors hover:text-white"
            >
              {labels.centreName}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="max-w-[36rem] truncate text-hive-muted">
              {article.title}
            </span>
          </nav>

          <Link
            href={`${basePath}/`}
            className="mb-10 inline-flex items-center gap-2 text-sm text-hive-muted transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {labels.backToCentre}
          </Link>

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
            <article className="min-w-0">
              <header className="mb-10">
                <div className="mb-5 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-400">
                    {isGuide ? (
                      <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                    ) : (
                      <Megaphone className="h-3.5 w-3.5" aria-hidden="true" />
                    )}
                    {isGuide ? labels.guideBadge : labels.updateBadge}
                  </span>
                  <span className="rounded-full border border-hive-border px-3 py-1 text-xs text-hive-dim">
                    {article.category}
                  </span>
                </div>

                <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-6xl">
                  {article.title}
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-hive-muted">
                  {article.excerpt}
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-hive-dim">
                  <span className="inline-flex items-center gap-1.5">
                    <User className="h-4 w-4" aria-hidden="true" />
                    {article.author}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    {isGuide ? labels.lastUpdated : labels.published}:{" "}
                    {article.date}
                  </span>
                  {isGuide && (
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-4 w-4" aria-hidden="true" />
                      {article.readTime}
                    </span>
                  )}
                </div>
              </header>

              {isGuide && tableOfContents.length > 0 && (
                <nav
                  aria-labelledby="mobile-table-of-contents"
                  className="mb-10 rounded-2xl border border-hive-border bg-hive-surface p-6 lg:hidden"
                >
                  <h2
                    id="mobile-table-of-contents"
                    className="mb-4 text-sm font-bold uppercase tracking-widest text-white"
                  >
                    {labels.tableOfContents}
                  </h2>
                  <ol className="space-y-2">
                    {tableOfContents
                      .filter((item) => item.level === 2)
                      .map((item, index) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className="flex gap-3 text-sm leading-relaxed text-hive-muted transition-colors hover:text-red-400"
                          >
                            <span className="text-hive-dim">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            {item.title}
                          </a>
                        </li>
                      ))}
                  </ol>
                </nav>
              )}

              <div className="border-t border-hive-border pt-2">
                <KnowledgeArticleContent content={article.content} />
              </div>

              {isGuide && article.faqs && article.faqs.length > 0 && (
                <section
                  aria-labelledby="guide-faq"
                  className="mt-16 border-t border-hive-border pt-12"
                >
                  <h2
                    id="guide-faq"
                    className="mb-6 text-3xl font-bold tracking-tight text-white"
                  >
                    {labels.faqTitle}
                  </h2>
                  <div className="space-y-3">
                    {article.faqs.map((faq) => (
                      <details
                        key={faq.question}
                        className="group rounded-2xl border border-hive-border bg-hive-surface p-5 open:border-red-500/25"
                      >
                        <summary className="cursor-pointer list-none pr-8 font-semibold text-white marker:hidden">
                          {faq.question}
                        </summary>
                        <p className="mt-4 border-t border-hive-border pt-4 leading-relaxed text-hive-muted">
                          {faq.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </section>
              )}

              {isGuide && relatedGuides.length > 0 && (
                <section
                  aria-labelledby="related-guides"
                  className="mt-16 border-t border-hive-border pt-12"
                >
                  <h2
                    id="related-guides"
                    className="text-3xl font-bold tracking-tight text-white"
                  >
                    {labels.relatedGuidesTitle}
                  </h2>
                  <p className="mt-3 text-hive-muted">
                    {labels.relatedGuidesDescription}
                  </p>
                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    {relatedGuides.map((related) => (
                      <Link
                        key={related.slug}
                        href={`${basePath}/${related.slug}/`}
                        className="group rounded-2xl border border-hive-border bg-hive-surface p-5 transition-colors hover:border-red-500/30"
                      >
                        <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
                          {related.category}
                        </span>
                        <h3 className="mt-2 font-bold leading-snug text-white transition-colors group-hover:text-red-400">
                          {related.title}
                        </h3>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-hive-muted">
                          {labels.readGuide}
                          <ArrowRight
                            className="h-4 w-4 transition-transform group-hover:translate-x-1"
                            aria-hidden="true"
                          />
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              <section className="mt-16 rounded-3xl border border-red-500/20 bg-hive-elevated p-8">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  {labels.ctaTitle}
                </h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-hive-muted">
                  {labels.ctaDescription}
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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
            </article>

            <aside className="hidden space-y-6 lg:block">
              <div className="sticky top-28 space-y-6">
                {isGuide && tableOfContents.length > 0 && (
                  <nav
                    aria-labelledby="desktop-table-of-contents"
                    className="max-h-[48vh] overflow-y-auto rounded-2xl border border-hive-border bg-hive-surface p-6"
                  >
                    <h2
                      id="desktop-table-of-contents"
                      className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-hive-dim"
                    >
                      {labels.tableOfContents}
                    </h2>
                    <ol className="space-y-2.5">
                      {tableOfContents.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className={`block text-sm leading-snug text-hive-muted transition-colors hover:text-red-400 ${
                              item.level === 3 ? "pl-4 text-xs" : ""
                            }`}
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                )}

                <div className="rounded-2xl border border-hive-border bg-hive-surface p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <FileText
                      className="h-4 w-4 text-red-400"
                      aria-hidden="true"
                    />
                    <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-hive-dim">
                      {labels.relatedServices}
                    </h2>
                  </div>
                  <div className="space-y-2">
                    {article.relatedPipelines.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="group flex items-center justify-between rounded-xl border border-hive-border bg-hive-bg px-4 py-3 text-sm text-hive-muted transition-colors hover:border-red-500/30 hover:text-white"
                      >
                        {link.label}
                        <ArrowRight
                          className="h-4 w-4 text-hive-dim transition-colors group-hover:text-red-400"
                          aria-hidden="true"
                        />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-red-500/25 bg-hive-surface p-6 text-center">
                  <span className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 className="font-semibold text-white">
                    {labels.questionsTitle}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-hive-muted">
                    {labels.questionsDescription}
                  </p>
                  <div className="relative mx-auto mt-4 h-28 w-28 overflow-hidden rounded-xl border border-hive-border">
                    <Image
                      src="/wechat-qr.jpg"
                      alt={labels.scanLabel}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-3 text-xs text-hive-dim">
                    {labels.scanLabel}
                  </p>
                </div>

                <Link
                  href={`${basePath}/`}
                  className="flex items-center justify-center gap-2 rounded-xl border border-hive-border px-4 py-3 text-sm text-hive-muted transition-colors hover:border-red-500/30 hover:text-white"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  {labels.allArticles}
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
