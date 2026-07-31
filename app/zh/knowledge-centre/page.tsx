import type { Metadata } from "next";
import KnowledgeCentreIndex from "@/components/knowledge-centre/KnowledgeCentreIndex";
import { generateItemListSchema } from "@/lib/schema";
import { zhKnowledgeArticles } from "@/lib/zh-insights-data";

const description =
  "专业指南、实用资源与可信信息，涵盖FBI背景调查、指纹采集、Apostille认证和国际文件准备。";

export const metadata: Metadata = {
  title: "知识中心 | Hive Digital",
  description,
  alternates: {
    canonical: "/zh/knowledge-centre/",
    languages: {
      en: "/knowledge-centre/",
      "zh-CN": "/zh/knowledge-centre/",
    },
  },
  openGraph: {
    title: "知识中心 | Hive Digital",
    description,
    type: "website",
    locale: "zh_CN",
    images: ["/background-checks.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "知识中心 | Hive Digital",
    description,
    images: ["/background-checks.png"],
  },
};

export default function ZhKnowledgeCentrePage() {
  const itemListSchema = generateItemListSchema(zhKnowledgeArticles, {
    path: "/zh/knowledge-centre/",
    name: "Hive Digital 知识中心",
    description,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <KnowledgeCentreIndex
        articles={zhKnowledgeArticles}
        basePath="/zh/knowledge-centre"
        labels={{
          eyebrow: "Hive Digital 资源",
          title: "知识中心",
          description,
          topics: "当前主题",
          featuredTitle: "精选指南",
          featuredDescription:
            "持续更新的实用资源，帮助您规划背景调查、文件认证与国际文件准备。",
          latestTitle: "最新动态",
          latestDescription:
            "经核实的服务公告、处理变化和运营通知与长期指南分开发布。",
          noUpdates: "目前没有服务公告。",
          guideBadge: "指南",
          updateBadge: "动态",
          readGuide: "阅读指南",
          readUpdate: "阅读动态",
          lastUpdated: "最后更新",
          published: "发布日期",
          ctaTitle: "需要文件准备指导？",
          ctaDescription:
            "请告诉Hive文件签发地和使用地，我们可以协助您确认适合的准备流程。",
          ctaPrimary: "联系Hive",
          ctaSecondary: "发送邮件",
          contactHref: "/zh/contact/",
        }}
      />
    </>
  );
}
