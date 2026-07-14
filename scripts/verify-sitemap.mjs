import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const SITE_ORIGIN = "https://www.hiverelo.com";
const outputDirectory = join(process.cwd(), "out");

function fail(message) {
  throw new Error(`Sitemap verification failed: ${message}`);
}

function decodeXml(value) {
  return value
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&amp;", "&");
}

function parseAttributes(tag) {
  return Object.fromEntries(
    [...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((match) => [
      match[1].toLowerCase(),
      decodeXml(match[2]),
    ]),
  );
}

function parseSitemap(xml, label) {
  if (!xml.startsWith('<?xml version="1.0"')) {
    fail(`${label} is missing its XML declaration`);
  }
  if (!xml.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')) {
    fail(`${label} is missing the standard sitemap namespace`);
  }

  const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(
    ([, block]) => {
      const location = block.match(/<loc>([^<]+)<\/loc>/)?.[1];
      if (!location) fail(`${label} contains an entry without <loc>`);

      const languages = Object.fromEntries(
        [...block.matchAll(/<xhtml:link\b[^>]*\/?\s*>/g)].map((match) => {
          const attributes = parseAttributes(match[0]);
          return [attributes.hreflang, attributes.href];
        }),
      );
      const lastModified = block.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1];

      return {
        location: decodeXml(location),
        languages,
        lastModified,
      };
    },
  );

  const locations = entries.map(({ location }) => location);
  if (new Set(locations).size !== locations.length) {
    fail(`${label} contains duplicate URLs`);
  }

  for (const entry of entries) {
    const url = new URL(entry.location);
    if (url.origin !== SITE_ORIGIN) {
      fail(`${label} contains a URL outside ${SITE_ORIGIN}: ${entry.location}`);
    }
    if (url.pathname !== "/" && !url.pathname.endsWith("/")) {
      fail(`${label} URL is missing its trailing slash: ${entry.location}`);
    }
    if (entry.lastModified) {
      const timestamp = Date.parse(entry.lastModified);
      if (Number.isNaN(timestamp)) {
        fail(`${label} has invalid <lastmod>: ${entry.lastModified}`);
      }
      if (timestamp > Date.now()) {
        fail(`${label} has a future <lastmod>: ${entry.lastModified}`);
      }
    }
  }

  return entries;
}

function walkFiles(directory) {
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    return statSync(path).isDirectory() ? walkFiles(path) : [path];
  });
}

function findBaiduSitemap() {
  const candidates = walkFiles(outputDirectory).filter((path) =>
    relative(outputDirectory, path).includes("baidu-sitemap.xml"),
  );
  const sitemapPath = candidates.find((path) => {
    const contents = readFileSync(path, "utf8");
    return contents.includes("<urlset") && contents.includes("<loc>");
  });

  if (!sitemapPath) fail("generated /baidu-sitemap.xml was not found");
  return readFileSync(sitemapPath, "utf8");
}

function getCanonicalPages() {
  const htmlFiles = walkFiles(outputDirectory).filter((path) =>
    path.endsWith(".html"),
  );
  const pages = new Map();

  for (const path of htmlFiles) {
    const html = readFileSync(path, "utf8");
    const canonicalTag = html.match(/<link\b[^>]*rel="canonical"[^>]*>/)?.[0];
    if (!canonicalTag) continue;

    const canonical = parseAttributes(canonicalTag).href;
    const languages = Object.fromEntries(
      [...html.matchAll(/<link\b[^>]*rel="alternate"[^>]*>/g)]
        .map((match) => parseAttributes(match[0]))
        .filter((attributes) => attributes.hreflang && attributes.href)
        .map((attributes) => [attributes.hreflang, attributes.href]),
    );

    if (pages.has(canonical)) {
      fail(`multiple generated pages use canonical ${canonical}`);
    }
    pages.set(canonical, { path, languages });
  }

  return pages;
}

function sameLanguageMap(left, right) {
  return (
    JSON.stringify(Object.entries(left).sort()) ===
    JSON.stringify(Object.entries(right).sort())
  );
}

if (!existsSync(outputDirectory)) {
  fail("the out directory does not exist; run next build first");
}

const primaryXml = readFileSync(join(outputDirectory, "sitemap.xml"), "utf8");
const primaryEntries = parseSitemap(primaryXml, "/sitemap.xml");
const primaryByUrl = new Map(
  primaryEntries.map((entry) => [entry.location, entry]),
);
const canonicalPages = getCanonicalPages();

for (const [canonical, page] of canonicalPages) {
  const sitemapEntry = primaryByUrl.get(canonical);
  if (!sitemapEntry) {
    fail(`canonical page is missing from /sitemap.xml: ${canonical}`);
  }
  if (!sameLanguageMap(page.languages, sitemapEntry.languages)) {
    fail(`hreflang mismatch for ${canonical}`);
  }
}

for (const { location } of primaryEntries) {
  if (!canonicalPages.has(location)) {
    fail(`/sitemap.xml URL has no matching canonical page: ${location}`);
  }
}

const baiduEntries = parseSitemap(findBaiduSitemap(), "/baidu-sitemap.xml");
const expectedChineseUrls = primaryEntries
  .map(({ location }) => location)
  .filter((location) => new URL(location).pathname.startsWith("/zh/"));
const baiduUrls = baiduEntries.map(({ location }) => location);

if (
  JSON.stringify([...baiduUrls].sort()) !==
  JSON.stringify([...expectedChineseUrls].sort())
) {
  fail("/baidu-sitemap.xml does not match the Chinese primary-sitemap entries");
}

console.log(
  `Verified ${primaryEntries.length} canonical sitemap entries, ${baiduEntries.length} Chinese compatibility entries, and matching hreflang metadata.`,
);
