import { readdirSync } from "node:fs";
import { join, relative, sep } from "node:path";
import type { MetadataRoute } from "next";
import { insights } from "@/lib/insights-data";
import { getAllServiceSlugs, services } from "@/lib/services-data";
import { zhInsights } from "@/lib/zh-insights-data";

export const SITE_URL = "https://www.hiverelo.com";

const localeDefinitions = [
  { language: "en", segment: "" },
  { language: "zh-CN", segment: "zh" },
  { language: "ko", segment: "ko" },
  { language: "ja", segment: "ja" },
] as const;

type LocaleCode = (typeof localeDefinitions)[number]["language"];

interface RouteRecord {
  path: string;
  locale: LocaleCode;
  translationKey: string;
  lastModified?: string;
  changeFrequency: NonNullable<
    MetadataRoute.Sitemap[number]["changeFrequency"]
  >;
  priority: number;
}

const staticLastModified: Record<string, string> = {
  "/": "2026-07-14",
  "/about/": "2026-05-06",
  "/contact/": "2026-05-06",
  "/countries/": "2026-07-14",
  "/fingerprinting/": "2026-07-18",
  "/insights/": "2026-05-06",
  "/japan-apostille/": "2026-05-06",
  "/korea-apostille/": "2026-07-14",
  "/services/": "2026-07-14",
  "/privacy/": "2026-07-14",
  "/shanghai-fingerprinting/": "2026-07-18",
  "/thailand-authentication/": "2026-05-06",
  "/vietnam-authentication/": "2026-05-06",
  "/zh/": "2026-07-14",
  "/zh/about/": "2026-06-10",
  "/zh/contact/": "2026-06-10",
  "/zh/countries/": "2026-07-14",
  "/zh/fingerprinting/": "2026-07-18",
  "/zh/insights/": "2026-06-10",
  "/zh/services/": "2026-07-14",
  "/zh/privacy/": "2026-07-14",
  "/zh/shanghai-fingerprinting/": "2026-07-18",
};

function withTrailingSlash(path: string): string {
  if (path === "/") return path;
  return `${path.replace(/\/+$/, "")}/`;
}

function getLocale(segments: string[]): {
  locale: LocaleCode;
  logicalSegments: string[];
} {
  const localizedDefinition = localeDefinitions.find(
    ({ segment }) => segment && segment === segments[0],
  );

  if (!localizedDefinition) {
    return { locale: "en", logicalSegments: segments };
  }

  return {
    locale: localizedDefinition.language,
    logicalSegments: segments.slice(1),
  };
}

function routeSettings(logicalPath: string): Pick<
  RouteRecord,
  "changeFrequency" | "priority"
> {
  if (logicalPath === "/") {
    return { changeFrequency: "weekly", priority: 1 };
  }
  if (logicalPath === "/services/" || logicalPath === "/insights/") {
    return { changeFrequency: "weekly", priority: 0.9 };
  }
  if (logicalPath.startsWith("/services/")) {
    return { changeFrequency: "monthly", priority: 0.8 };
  }
  if (logicalPath.startsWith("/insights/")) {
    return { changeFrequency: "monthly", priority: 0.7 };
  }
  if (
    logicalPath === "/fingerprinting/" ||
    logicalPath.endsWith("-apostille/") ||
    logicalPath.endsWith("-authentication/") ||
    logicalPath.endsWith("-fingerprinting/")
  ) {
    return { changeFrequency: "monthly", priority: 0.9 };
  }
  return { changeFrequency: "monthly", priority: 0.7 };
}

function discoverStaticRoutes(): RouteRecord[] {
  const appDirectory = join(process.cwd(), "app");
  const records: RouteRecord[] = [];

  function walk(directory: string): void {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const entryPath = join(directory, entry.name);

      if (entry.isDirectory()) {
        walk(entryPath);
        continue;
      }

      if (!/^page\.(?:js|jsx|ts|tsx)$/.test(entry.name)) continue;

      const relativeDirectory = relative(appDirectory, directory);
      const rawSegments = relativeDirectory
        ? relativeDirectory.split(sep)
        : [];

      if (
        rawSegments.some(
          (segment) => segment.startsWith("[") || segment.startsWith("@"),
        )
      ) {
        continue;
      }

      const routeSegments = rawSegments.filter(
        (segment) => !(segment.startsWith("(") && segment.endsWith(")")),
      );
      const path = withTrailingSlash(`/${routeSegments.join("/")}`);
      const { locale, logicalSegments } = getLocale(routeSegments);
      const logicalPath = withTrailingSlash(`/${logicalSegments.join("/")}`);

      records.push({
        path,
        locale,
        translationKey: `static:${logicalPath}`,
        lastModified: staticLastModified[path],
        ...routeSettings(logicalPath),
      });
    }
  }

  walk(appDirectory);
  return records;
}

function getDynamicRoutes(): RouteRecord[] {
  const serviceRoutes: RouteRecord[] = getAllServiceSlugs().map((slug) => ({
    path: `/services/${slug}/`,
    locale: "en",
    translationKey: `service:${slug}`,
    lastModified: services[slug].lastModified,
    ...routeSettings(`/services/${slug}/`),
  }));

  const insightSources = [
    { locale: "en" as const, prefix: "/insights", articles: insights },
    {
      locale: "zh-CN" as const,
      prefix: "/zh/insights",
      articles: zhInsights,
    },
  ];
  const insightRoutes = insightSources.flatMap(({ locale, prefix, articles }) =>
    articles.map((article) => ({
      path: `${prefix}/${article.slug}/`,
      locale,
      translationKey: `insight:${article.translationKey ?? article.slug}`,
      lastModified: article.lastModified,
      ...routeSettings(`/insights/${article.slug}/`),
    })),
  );

  return [...serviceRoutes, ...insightRoutes];
}

function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}

export function getSitemapEntries(options?: {
  locale?: LocaleCode;
}): MetadataRoute.Sitemap {
  const records = [...discoverStaticRoutes(), ...getDynamicRoutes()];
  const uniqueRecords = new Map(records.map((record) => [record.path, record]));
  const deduplicatedRecords = [...uniqueRecords.values()];
  const translationGroups = new Map<string, RouteRecord[]>();

  for (const record of deduplicatedRecords) {
    const group = translationGroups.get(record.translationKey) ?? [];
    group.push(record);
    translationGroups.set(record.translationKey, group);
  }

  return deduplicatedRecords
    .filter((record) => !options?.locale || record.locale === options.locale)
    .sort((a, b) => a.path.localeCompare(b.path))
    .map((record) => {
      const translations = translationGroups.get(record.translationKey) ?? [];
      const languages = Object.fromEntries(
        translations.map((translation) => [
          translation.locale,
          absoluteUrl(translation.path),
        ]),
      );

      return {
        url: absoluteUrl(record.path),
        ...(record.lastModified
          ? { lastModified: record.lastModified }
          : {}),
        changeFrequency: record.changeFrequency,
        priority: record.priority,
        ...(translations.length > 1
          ? { alternates: { languages } }
          : {}),
      };
    });
}

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export function renderSitemapXml(entries: MetadataRoute.Sitemap): string {
  const hasAlternates = entries.some((entry) => entry.alternates?.languages);
  const namespace = hasAlternates
    ? ' xmlns:xhtml="http://www.w3.org/1999/xhtml"'
    : "";
  const urls = entries
    .map((entry) => {
      const alternates = Object.entries(entry.alternates?.languages ?? {})
        .map(
          ([language, url]) =>
            `    <xhtml:link rel="alternate" hreflang="${escapeXml(language)}" href="${escapeXml(String(url))}" />`,
        )
        .join("\n");
      const lastModified = entry.lastModified
        ? `    <lastmod>${escapeXml(
            entry.lastModified instanceof Date
              ? entry.lastModified.toISOString()
              : entry.lastModified,
          )}</lastmod>\n`
        : "";

      return [
        "  <url>",
        `    <loc>${escapeXml(entry.url)}</loc>`,
        alternates,
        lastModified.trimEnd(),
        entry.changeFrequency
          ? `    <changefreq>${entry.changeFrequency}</changefreq>`
          : "",
        typeof entry.priority === "number"
          ? `    <priority>${entry.priority}</priority>`
          : "",
        "  </url>",
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"${namespace}>\n${urls}\n</urlset>\n`;
}
