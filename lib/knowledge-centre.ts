export type KnowledgeArticleType = "guide" | "update";

export interface KnowledgeFaq {
  question: string;
  answer: string;
}

export interface KnowledgeArticle {
  slug: string;
  translationKey?: string;
  lastModified?: string;
  publishedAt?: string;
  type: KnowledgeArticleType;
  featured?: boolean;
  title: string;
  seoTitle?: string;
  metaDescription?: string;
  openGraphImage?: string;
  category: string;
  tags: string[];
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  relatedPipelines: { label: string; href: string }[];
  faqs?: KnowledgeFaq[];
  content: string;
}

export interface TableOfContentsItem {
  id: string;
  title: string;
  level: 2 | 3;
}

export function slugifyKnowledgeHeading(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/\*\*/g, "")
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function getTableOfContents(content: string): TableOfContentsItem[] {
  return content
    .trim()
    .split("\n")
    .flatMap((line) => {
      const match = line.trim().match(/^(##|###)\s+(.+)$/);
      if (!match) return [];

      const title = match[2].replace(/\*\*/g, "");
      return [
        {
          id: slugifyKnowledgeHeading(title),
          title,
          level: match[1] === "##" ? (2 as const) : (3 as const),
        },
      ];
    });
}

export function getKnowledgeCategories(
  articles: KnowledgeArticle[],
): string[] {
  return [...new Set(articles.map((article) => article.category))];
}

export function getRelatedGuides(
  article: KnowledgeArticle,
  articles: KnowledgeArticle[],
  limit = 3,
): KnowledgeArticle[] {
  const candidates = articles.filter(
    (candidate) =>
      candidate.type === "guide" && candidate.slug !== article.slug,
  );

  return candidates
    .map((candidate, index) => ({
      candidate,
      index,
      score:
        candidate.tags.filter((tag) => article.tags.includes(tag)).length * 2 +
        (candidate.category === article.category ? 1 : 0),
    }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, limit)
    .map(({ candidate }) => candidate);
}
