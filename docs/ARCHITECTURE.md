# Architecture

## Purpose

This document describes the current Hive Digital website implementation and
its technical boundaries. It does not define business priorities or authorize
production changes.

## System Overview

Hive Digital is a statically exported Next.js App Router website. Vercel builds
and serves the production site from the `main` branch.

- Framework: Next.js 16 with the App Router
- UI: React 19, TypeScript, Tailwind CSS 4, Framer Motion, and Lucide icons
- Output: static export (`output: "export"`)
- URLs: trailing slashes enabled
- Images: Next.js image optimization disabled for static export
- Production host: `https://www.hiverelo.com`
- Active locales: English and Simplified Chinese

Static export means deployed pages cannot rely on request-time server code,
Server Actions, or runtime API behavior unless the deployment architecture is
deliberately changed.

## Repository Structure

```text
app/                    App Router pages, layouts, metadata, and sitemap routes
  zh/                   Chinese route tree
components/             Shared interface components
lib/                    Content data, schemas, and sitemap utilities
public/                 Publicly served static assets and robots.txt
scripts/                Build-time verification scripts
sections/               Homepage and page-level visual sections
docs/                   Technical and operational documentation
```

Generated `.next/` and `out/` directories are local build products. They are
not application source and must not be committed.

## Route Model

English is the default, unprefixed locale. Chinese uses the `/zh` prefix.

The current route families include:

- Core pages: home, about, contact, services, and insights
- Dynamic English service detail pages under `/services/[slug]`
- Dynamic insight pages under `/insights/[slug]` and `/zh/insights/[slug]`
- English country and service landing pages
- The Chinese Shanghai fingerprinting landing page
- XML endpoints for the canonical sitemap and Baidu compatibility sitemap

Korean (`/ko`) and Japanese (`/ja`) are reserved future locale trees. They do
not currently have pages and must not appear as live alternates or placeholders.

## Content Sources

Content is currently split by page type:

| Concern | Source |
| --- | --- |
| English service detail pages | `lib/services-data.ts` |
| English insights | `lib/insights-data.ts` |
| Chinese insights | `lib/zh-insights-data.ts` |
| English homepage service cards | `sections/ServicePipeline.tsx` |
| Chinese homepage service cards | `sections/ZhServicePipeline.tsx` |
| Structured-data helpers | `lib/schema.ts` |

The homepage cards, service index content, and service detail data are not one
unified content model. Shared offering changes therefore require a deliberate
English/Chinese and summary/detail consistency check.

Some content modules may exist without being included in a live article array
or route. A source file alone does not prove that content is published; verify
the exported collections and generated routes.

## SEO and Sitemap Flow

Pages define their own metadata, canonicals, and available language alternates.
`lib/site-sitemap.ts` combines discovered App Router pages with dynamic content
sources to generate sitemap records. The app exposes:

- `/sitemap.xml` as the canonical multilingual sitemap
- `/baidu-sitemap.xml` as a Chinese compatibility sitemap

`scripts/verify-sitemap.mjs` runs after `next build` and validates the exported
XML against the expected route inventory and language relationships. See
`SEO-AND-LOCALIZATION.md` for extension rules.

## Architectural Constraints and Risks

- Separate locale trees make divergence possible. Shared changes must be
  checked across both languages.
- Service information is duplicated across several presentation layers, which
  can cause inconsistent names, ordering, or claims.
- Static route discovery depends on App Router conventions and explicit dynamic
  data sources. Unusual route construction needs a sitemap test.
- Static export limits request-time features and changes the assumptions for
  forms, personalization, authentication, and server-side integrations.
- Adding locales without a stable content relationship model can create false
  hreflang pairs, inconsistent slugs, and thin placeholder pages.
- Framework conventions may differ from prior Next.js releases. Read the
  relevant installed guide in `node_modules/next/dist/docs/` before changing
  routing, metadata, layouts, or build behavior.

## Change Boundaries

- Preserve production URLs unless a redirect and migration are explicitly
  approved.
- Prefer existing components and data structures before adding abstractions.
- Keep content, architecture, and deployment changes in separate commits.
- Treat changes to static export, route conventions, domains, or Vercel settings
  as architectural changes requiring explicit approval.
