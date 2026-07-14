# SEO and Localization

## Scope

This document defines the technical rules for search metadata, sitemaps, and
localized route relationships. Keyword targets, market priorities, and content
investment decisions remain subject to the business strategy and owner review.

## Locale Status

| Locale | Route prefix | Status |
| --- | --- | --- |
| English | none | Active; default locale |
| Simplified Chinese (`zh-CN`) | `/zh` | Active |
| Korean (`ko`) | `/ko` | Planned; not published |
| Japanese (`ja`) | `/ja` | Planned; not published |

Planned locales must not receive placeholder pages, sitemap entries, or
hreflang links until real, reviewed routes exist.

## Canonical Rules

- Every indexable page should use an absolute self-referencing canonical on
  `https://www.hiverelo.com`.
- Canonicals must match the production route and trailing-slash convention.
- Query strings, preview hosts, and Vercel deployment URLs are not canonical.
- A localized page must not canonicalize to another language merely because the
  content is similar.
- A URL change requires an explicit redirect and migration plan; sitemap edits
  alone do not preserve rankings or user links.

## Hreflang Rules

- Add a language alternate only when a real, indexable counterpart exists.
- Alternate relationships must be reciprocal.
- English and Chinese pages may remain unpaired where no equivalent exists.
- Use stable content relationships, such as article `translationKey` values,
  instead of assuming that slugs match.
- Keep the page metadata, language switcher, and sitemap alternates aligned.
- Add `x-default` only as a deliberate site-wide policy, not as an automatic
  substitute for missing translations.

For an unpaired route, the language switcher should use the approved safe
fallback rather than constructing a nonexistent translated path.

## Sitemap Architecture

`lib/site-sitemap.ts` builds the canonical inventory from App Router routes and
explicit dynamic data sources. It contains locale configuration and serializes
the XML records used by:

- `app/sitemap.ts` for `/sitemap.xml`
- `app/baidu-sitemap.xml/route.ts` for `/baidu-sitemap.xml`

Dynamic entries currently come from service and insight data. Dates should use
the most accurate maintained `lastModified` value available; do not substitute
the build date for every page because it falsely signals content changes.

`scripts/verify-sitemap.mjs` validates the exported sitemap after each build.
Any sitemap change must keep that verification accurate and Google-compatible.

## Adding an English or Chinese Page

1. Add the App Router page using the existing route convention.
2. Define accurate title, description, canonical, and structured data where
   appropriate.
3. Determine whether a genuine localized counterpart exists.
4. Add reciprocal alternates only for genuine counterparts.
5. Confirm the language switch behavior for paired and unpaired pages.
6. Run the production build and inspect both sitemap endpoints.
7. Check rendered metadata and internal links in a preview.

Future service, article, and static landing routes should be discoverable by the
sitemap architecture without a manually maintained master URL list. New dynamic
route families still require an explicit data adapter and verifier coverage.

## Adding an Insight Translation

- Keep English content in `lib/insights-data.ts` and Chinese content in
  `lib/zh-insights-data.ts` under the current architecture.
- Give translated counterparts the same stable `translationKey`.
- Use locale-appropriate slugs; identical slugs are not required.
- Maintain a truthful per-article modification date.
- Verify the article appears in its index, static export, sitemap, language
  alternates, and language switcher.

## Future Korean and Japanese Trees

Before enabling `/ko` or `/ja`:

1. Approve the market, audience, service scope, and localized content strategy.
2. Research locale-specific search intent and terminology.
3. Define native-language editorial and factual review ownership.
4. Add the real route tree and content source; do not clone English placeholders.
5. Extend shared navigation, metadata, schemas, locale configuration, language
   switching, and sitemap verification.
6. Add hreflang only for reviewed page-level counterparts.
7. Test fonts, line breaking, mobile layout, forms, and contact expectations.
8. Launch through a preview and an approved production release.

The existing sitemap locale model anticipates these locale codes, but that does
not make their route trees or content complete.

## Content Quality and Claims

- Localize meaning and user intent, not only words.
- Do not invent prices, timelines, statistics, credentials, testimonials, or
  service coverage.
- Avoid promises of legal, tax, immigration, visa, or government outcomes.
- Keep country-process guidance dated and tied to an owner-approved source.
- Use native review before publishing Korean, Japanese, or material Chinese
  content changes.

## Verification

For SEO or locale work, verify:

- self-canonical URLs
- reciprocal hreflang only where applicable
- indexability and robots behavior
- structured-data validity and agreement with visible content
- sitemap presence and accurate `lastmod`
- no placeholder or duplicate routes
- language-switch destinations
- internal links from relevant indexes and navigation
