<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Hive Digital Website

## Project

This repository powers the Hive Digital Consulting website at
`https://www.hiverelo.com` and its Chinese mirror at
`https://www.hiverelo.com/zh/`.

The GitHub repository is `scottpiusz-cmyk/hive-digital`. Vercel deploys the
`main` branch to production.

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
- Use this default rhythm: Idea -> `ROADMAP.md` -> `codex/` branch -> Vercel
  preview -> revisions -> pull request -> merge -> production verification.
- Keep tasks small and concrete. Preserve existing layout and behavior unless the
  task explicitly requests broader changes.
- Use a preview branch and Vercel preview for user-facing changes.
- Open a pull request for review rather than pushing feature work directly to
  `main`. Direct production pushes require explicit user approval.
- Use `docs/site-brief.md` as the source of truth for services, audiences, brand
  voice, contact details, approved claims, and page priorities.
- Run `npm run lint` and `npm run build` before finalizing when the local setup
  supports them. If either cannot run, report the exact limitation and verify
  through Vercel preview/build logs.
- After editing, summarize the change, tests run, deployment status, and any
  follow-up risk.
- Keep commits narrowly scoped and do not stage unrelated working-tree changes.

## Content Sources

- Master site brief: `docs/site-brief.md`
- Website roadmap: `ROADMAP.md`
- English article data: `lib/insights-data.ts`
- Chinese article data: `lib/zh-insights-data.ts`
- English homepage services: `sections/ServicePipeline.tsx`
- Chinese homepage services: `sections/ZhServicePipeline.tsx`
