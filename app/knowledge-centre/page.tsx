import type { Metadata } from "next";
import KnowledgeCentreIndex from "@/components/knowledge-centre/KnowledgeCentreIndex";
import { knowledgeArticles } from "@/lib/insights-data";
import { generateItemListSchema } from "@/lib/schema";

const description =
  "Expert guides, practical resources and trusted information covering FBI background checks, fingerprinting, apostilles and international document preparation.";

export const metadata: Metadata = {
  title: "Knowledge Centre | Hive Digital Consulting",
  description,
  alternates: {
    canonical: "/knowledge-centre/",
    languages: {
      en: "/knowledge-centre/",
      "zh-CN": "/zh/knowledge-centre/",
    },
  },
  openGraph: {
    title: "Knowledge Centre | Hive Digital Consulting",
    description,
    type: "website",
    images: ["/background-checks.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Knowledge Centre | Hive Digital Consulting",
    description,
    images: ["/background-checks.png"],
  },
};

export default function KnowledgeCentrePage() {
  const itemListSchema = generateItemListSchema(knowledgeArticles, {
    path: "/knowledge-centre/",
    name: "Hive Digital Knowledge Centre",
    description,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <KnowledgeCentreIndex
        articles={knowledgeArticles}
        basePath="/knowledge-centre"
        labels={{
          eyebrow: "Hive Digital Resources",
          title: "Knowledge Centre",
          description,
          topics: "Current topics",
          featuredTitle: "Featured Guides",
          featuredDescription:
            "Permanent, practical resources for planning background checks, authentication and international document preparation.",
          latestTitle: "Latest Updates",
          latestDescription:
            "Verified service announcements, processing changes and operational notices are published separately from our evergreen guides.",
          noUpdates: "There are no current service announcements.",
          guideBadge: "Guide",
          updateBadge: "Update",
          readGuide: "Read guide",
          readUpdate: "Read update",
          lastUpdated: "Last updated",
          published: "Published",
          ctaTitle: "Need guidance for your documents?",
          ctaDescription:
            "Tell Hive where your documents were issued and where they will be used. Our team can help you identify the appropriate preparation process.",
          ctaPrimary: "Contact Hive",
          ctaSecondary: "Email Our Team",
          contactHref: "/contact/",
        }}
      />
    </>
  );
}
