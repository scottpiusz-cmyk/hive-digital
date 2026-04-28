interface ArticleForSchema {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  content: string;
}

const siteUrl = "https://www.hiverelo.com";

export function generateArticleSchema(article: ArticleForSchema): object {
  const wordCount = article.content.split(/\s+/).length;

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
        url: `${siteUrl}/hive-logo.png`,
      },
    },
    datePublished: article.date,
    dateModified: article.date,
    url: `${siteUrl}/insights/${article.slug}/`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/insights/${article.slug}/`,
    },
    articleSection: article.category,
    about: {
      "@type": "Thing",
      name: "Document Authentication and Compliance",
    },
    proficiencyLevel: "Expert",
    wordCount,
    inLanguage: "en-US",
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
  articles: ArticleForSchema[]
): object {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Hive Digital Insights — Document Compliance Guides",
    description:
      "Regulatory intelligence and practical guides for crossborder document compliance. China-Vietnam corridor, FBI checks, apostille, and more.",
    url: `${siteUrl}/insights/`,
    itemListElement: articles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: article.title,
      description: article.excerpt,
      url: `${siteUrl}/insights/${article.slug}/`,
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
