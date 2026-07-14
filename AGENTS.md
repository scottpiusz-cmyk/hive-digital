<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

Before making architectural, UX, SEO, content, or product decisions, consult
`FOUNDATION.md`. If implementation choices conflict with the business
strategy, follow the principles in `FOUNDATION.md` unless explicitly instructed
otherwise.

# Hive Digital Website

## Project

This repository powers the Hive Digital Consulting website at
`https://www.hiverelo.com` and its Chinese mirror at
`https://www.hiverelo.com/zh/`.

The GitHub repository is `scottpiusz-cmyk/hive-digital`. Vercel deploys the
`main` branch to production.

## Documentation Map

- Product and delivery priorities: `ROADMAP.md`
- System design and source-of-truth map: `docs/ARCHITECTURE.md`
- SEO, sitemaps, and locale rules: `docs/SEO-AND-LOCALIZATION.md`
- Local setup and contribution workflow: `docs/DEVELOPMENT.md`
- Preview and production release process: `docs/DEPLOYMENT.md`
- Sensitive-data handling and incident response: `docs/SECURITY-AND-PRIVACY.md`

`AGENTS.md` is the authoritative instruction file for coding agents. Technical
reference documents describe the current implementation; `ROADMAP.md` describes
planned work. If they conflict, stop and resolve the discrepancy before editing.

## Brand Rules

- Use a professional, clear, expat-friendly tone without corporate fluff.
- Emphasize document services, background checks, apostille, authentication,
  fingerprinting, and expat/business support in China and APAC.
- Do not promise legal, tax, immigration, visa, or government outcomes.
- Keep claims specific and supportable. Avoid invented statistics, timelines,
  prices, testimonials, certifications, or geographic coverage.
- Preserve the existing visual identity unless a redesign is explicitly
  requested.
- Treat English and Chinese pages as mirrors where practical. When changing a
  shared offering or page order, check whether the corresponding Chinese page
  should receive the same change.
- English and Chinese are the only active language trees. Korean (`/ko`) and
  Japanese (`/ja`) are planned, not live; do not publish or index placeholder
  locale routes.

## Technical Rules

- Do not change GitHub, Vercel, domains, DNS, environment variables, analytics,
  deployment settings, or production aliases without explicit approval.
- Do not commit secrets, credentials, customer documents, or personal data.
- Keep all pages responsive and usable on mobile and desktop.
- Preserve existing SEO metadata, structured data, canonicals, language links,
  sitemaps, and redirects unless deliberately improving them.
- Reuse existing components and styling patterns before adding abstractions.
- Do not include generated `.next` or `out` changes in feature commits unless
  the deployment process explicitly requires them.
- Avoid unrelated refactors when making content or layout changes.

## Workflow

- Before editing, state which files are expected to change and why.
- Use a preview branch and Vercel preview for user-facing changes when practical.
- Do not push to `main` or deploy production until the user approves the preview,
  unless the user explicitly requests a direct production push.
- Run `npm run lint` and `npm run build` before finalizing when the local setup
  supports them. If either cannot run, report the exact limitation and verify
  through Vercel preview/build logs.
- After editing, summarize the change, tests run, deployment status, and any
  follow-up risk.
- Keep commits narrowly scoped and do not stage unrelated working-tree changes.
- Leave changes uncommitted when the user asks to review them before approval.

## Content Sources

- Website roadmap: `ROADMAP.md`
- Service detail data: `lib/services-data.ts`
- English article data: `lib/insights-data.ts`
- Chinese article data: `lib/zh-insights-data.ts`
- English homepage services: `sections/ServicePipeline.tsx`
- Chinese homepage services: `sections/ZhServicePipeline.tsx`
- Sitemap and locale relationships: `lib/site-sitemap.ts`
- Sitemap build verification: `scripts/verify-sitemap.mjs`
- Structured-data helpers: `lib/schema.ts`
