export interface ExternalArticle {
  title: string;
  excerpt: string;
  href: string;
  source: string;
  linkLabel: string;
}

// External listings do not create local article routes or sitemap entries.
export const englishExternalArticles: ExternalArticle[] = [
  {
    title: "Your China Visa Checklist Says ‘Authentication.’ Is It Outdated?",
    excerpt:
      "Why older China document checklists may still use ‘authentication,’ how document origin affects the apostille route, and what to confirm with HR or the receiving authority before proceeding.",
    href: "https://mp.weixin.qq.com/s/ZAwPZkHVfWIhDm3Xrhkuyw",
    source: "WeChat article · English",
    linkLabel: "Read on WeChat",
  },
];
