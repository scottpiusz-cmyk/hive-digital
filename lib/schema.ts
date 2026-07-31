import type { KnowledgeArticle } from "./knowledge-centre";

const siteUrl = "https://www.hiverelo.com";

export function generateArticleSchema(
  article: KnowledgeArticle,
  options?: { path?: string; language?: string },
): object {
  const wordCount = article.content.split(/\s+/).length;
  const articlePath =
    options?.path ?? `/knowledge-centre/${article.slug}/`;
  const articleUrl = new URL(articlePath, siteUrl).toString();

  // Extract HowTo steps from content (lines starting with "Step X:" or numbered steps)
  const howToSteps: Array<{ name: string; text: string }> = [];
  const lines = article.content.split("\n");
  let stepNum = 1;
  for (const line of lines) {
    const trimmed = line.trim();
    if (
      trimmed.match(/^\d+\.\s/) &&
      !trimmed.startsWith("|") &&
      trimmed.length > 10
    ) {
      const stepText = trimmed.replace(/^\d+\.\s/, "").replace(/\*\*/g, "");
      howToSteps.push({
        name: `Step ${stepNum}`,
        text: stepText,
      });
      stepNum++;
    }
  }

  // Limit to meaningful steps (at least 3)
  const hasHowTo = howToSteps.length >= 3;

  const baseSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.title,
    description: article.excerpt,
    author: {
      "@type": "Organization",
      name: article.author,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Hive Digital",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/og-image.ico`,
      },
    },
    datePublished: article.publishedAt ?? article.lastModified,
    dateModified: article.lastModified ?? article.publishedAt,
    image: article.openGraphImage
      ? new URL(article.openGraphImage, siteUrl).toString()
      : undefined,
    url: articleUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    articleSection: article.category,
    about: {
      "@type": "Thing",
      name: "Document Authentication and Compliance",
    },
    proficiencyLevel: "Expert",
    wordCount,
    inLanguage: options?.language ?? "en-US",
  };

  if (hasHowTo) {
    return {
      ...baseSchema,
      isBasedOn: {
        "@type": "HowTo",
        name: article.title,
        description: article.excerpt,
        step: howToSteps.map((step, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: step.name,
          text: step.text,
        })),
      },
    };
  }

  return baseSchema;
}

export function generateItemListSchema(
  articles: KnowledgeArticle[],
  options?: { path?: string; name?: string; description?: string },
): object {
  const basePath = options?.path ?? "/knowledge-centre/";
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: options?.name ?? "Hive Digital Knowledge Centre",
    description:
      options?.description ??
      "Expert guides covering background checks, fingerprinting, apostilles, authentication and international document preparation.",
    url: new URL(basePath, siteUrl).toString(),
    itemListElement: articles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: article.title,
      description: article.excerpt,
      url: new URL(`${basePath}${article.slug}/`, siteUrl).toString(),
    })),
  };
}

export function generateFaqSchema(
  faqs: NonNullable<KnowledgeArticle["faqs"]>,
): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
