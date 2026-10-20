import type { Metadata } from "next";
import { notFound } from "next/navigation";
import KnowledgeArticlePage from "@/components/knowledge-centre/KnowledgeArticlePage";
import {
  getAllKnowledgeArticleSlugs,
  getKnowledgeArticleBySlug,
  knowledgeArticles,
} from "@/lib/insights-data";
import { getZhKnowledgeArticleBySlug } from "@/lib/zh-insights-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllKnowledgeArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getKnowledgeArticleBySlug(slug);
  if (!article) return {};

  const canonical = `/knowledge-centre/${slug}/`;
  const description = article.metaDescription ?? article.excerpt;

  return {
    title: article.seoTitle ?? `${article.title} | Hive Digital`,
    description,
    alternates: {
      canonical,
      ...(getZhKnowledgeArticleBySlug(slug)
        ? {
            languages: {
              en: canonical,
              "zh-CN": `/zh/knowledge-centre/${slug}/`,
            },
          }
        : {}),
    },
    openGraph: {
      title: article.title,
      description,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.lastModified,
      authors: [article.author],
      images: article.openGraphImage ? [article.openGraphImage] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description,
      images: article.openGraphImage ? [article.openGraphImage] : undefined,
    },
  };
}

export default async function KnowledgeGuidePage({ params }: Props) {
  const { slug } = await params;
  const article = getKnowledgeArticleBySlug(slug);
  if (!article) notFound();

  return (
    <KnowledgeArticlePage
      article={article}
      allArticles={knowledgeArticles}
      basePath="/knowledge-centre"
      language="en-US"
      labels={{
        centreName: "Knowledge Centre",
        guideBadge: "Guide",
        updateBadge: "Update",
        lastUpdated: "Last updated",
        published: "Published",
        tableOfContents: "Table of contents",
        relatedServices: "Related services",
        questionsTitle: "Questions about this resource?",
        questionsDescription:
          "Contact Hive for guidance based on your document and destination.",
        scanLabel: "Scan the WeChat QR code to contact Hive",
        allArticles: "All guides and updates",
        backToCentre: "Back to Knowledge Centre",
        faqTitle: "Frequently Asked Questions",
        relatedGuidesTitle: "Related Guides",
        relatedGuidesDescription:
          "Continue with practical resources selected from related topics.",
        readGuide: "Read guide",
        ctaTitle: "Need help preparing your documents?",
        ctaDescription:
          "Hive helps clients prepare background checks, fingerprint cards, apostilles and supporting documents for international use.",
        ctaPrimary: "Contact Hive",
        ctaSecondary: "Email Our Team",
        homeLabel: "Home",
        homeHref: "/",
        contactHref: "/contact/",
      }}
    />
  );
}
