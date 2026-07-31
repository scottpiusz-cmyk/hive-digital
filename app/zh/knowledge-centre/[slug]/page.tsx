import type { Metadata } from "next";
import { notFound } from "next/navigation";
import KnowledgeArticlePage from "@/components/knowledge-centre/KnowledgeArticlePage";
import { getKnowledgeArticleBySlug } from "@/lib/insights-data";
import {
  getAllZhKnowledgeArticleSlugs,
  getZhKnowledgeArticleBySlug,
  zhKnowledgeArticles,
} from "@/lib/zh-insights-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllZhKnowledgeArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getZhKnowledgeArticleBySlug(slug);
  if (!article) return {};

  const canonical = `/zh/knowledge-centre/${slug}/`;
  const description = article.metaDescription ?? article.excerpt;

  return {
    title: article.seoTitle ?? `${article.title} | Hive Digital`,
    description,
    alternates: {
      canonical,
      ...(getKnowledgeArticleBySlug(slug)
        ? {
            languages: {
              en: `/knowledge-centre/${slug}/`,
              "zh-CN": canonical,
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
      locale: "zh_CN",
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

export default async function ZhKnowledgeGuidePage({ params }: Props) {
  const { slug } = await params;
  const article = getZhKnowledgeArticleBySlug(slug);
  if (!article) notFound();

  return (
    <KnowledgeArticlePage
      article={article}
      allArticles={zhKnowledgeArticles}
      basePath="/zh/knowledge-centre"
      language="zh-CN"
      labels={{
        centreName: "知识中心",
        guideBadge: "指南",
        updateBadge: "动态",
        lastUpdated: "最后更新",
        published: "发布日期",
        tableOfContents: "目录",
        relatedServices: "相关服务",
        questionsTitle: "对本资源有疑问？",
        questionsDescription: "请联系Hive，获取适合您的文件和目的地的指导。",
        scanLabel: "扫描企业微信二维码联系Hive",
        allArticles: "全部指南与动态",
        backToCentre: "返回知识中心",
        faqTitle: "常见问题",
        relatedGuidesTitle: "相关指南",
        relatedGuidesDescription: "继续阅读根据相关主题选择的实用资源。",
        readGuide: "阅读指南",
        ctaTitle: "需要文件准备帮助？",
        ctaDescription:
          "Hive协助客户准备背景调查、指纹卡、Apostille认证和国际使用所需的支持文件。",
        ctaPrimary: "联系Hive",
        ctaSecondary: "发送邮件",
        homeLabel: "首页",
        homeHref: "/zh/",
        contactHref: "/zh/contact/",
      }}
    />
  );
}
