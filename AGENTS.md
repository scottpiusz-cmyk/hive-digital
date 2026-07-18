<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Hive Digital Website - AI Agent Instructions

This document provides instructions for AI coding assistants working within the Hive Digital website repository.

---

# Before Making Changes

Before making architectural, business, UX, SEO, content, localization, or product decisions, review the following documentation.

## Required Reading

1. `docs/core/FOUNDATION.md`
2. `docs/core/KNOWLEDGE.md`
3. `docs/core/ARCHITECTURE.md`
4. `docs/core/SEO-AND-LOCALIZATION.md`

Additional references when applicable:

- `docs/core/DEVELOPMENT.md`
- `docs/core/DEPLOYMENT.md`
- `docs/core/SECURITY-AND-PRIVACY.md`
- `ROADMAP.md`

---

# Documentation Priority

If documentation appears to conflict, use the following priority:

1. FOUNDATION.md
2. KNOWLEDGE.md
3. ROADMAP.md
4. SEO-AND-LOCALIZATION.md
5. ARCHITECTURE.md
6. Other documentation

If a conflict cannot be resolved confidently, stop and ask for clarification rather than making assumptions.

---

# Repository

Repository:

scottpiusz-cmyk/hive-digital

Production Website:

https://www.hiverelo.com

Chinese Website:

https://www.hiverelo.com/zh/

Production deployments are performed through Vercel.

---

# Business Philosophy

Hive Digital is a document consulting company.

We help individuals and organizations prepare documents required for international employment, education, immigration and business.

Hive is NOT:

- a government agency
- an embassy
- an immigration law firm
- a visa processing company
- an apostille authority

Business accuracy always takes priority over visual polish.

---

# Business Accuracy

Never invent:

- immigration requirements
- legalization requirements
- visa rules
- processing times
- pricing
- government policies
- statistics
- testimonials
- certifications

If requirements vary by employer, province, city, government office or destination, clearly state that they vary.

Never guarantee:

- approval
- acceptance
- visa issuance
- work permit issuance
- government decisions

---

# Brand Voice

Write as an experienced consultant.

Avoid:

- corporate buzzwords
- exaggerated marketing
- unnecessary sales language
- unsupported claims

Always:

- explain clearly
- reduce uncertainty
- build trust
- use practical language

---

# Editorial Standards

Follow terminology and editorial rules defined in:

`docs/core/KNOWLEDGE.md`

Do not create new terminology if an existing standard already exists.

When describing document legalization, remember:

The correct legalization process depends on BOTH:

- where the document originated
- where the document will be used

Never oversimplify legalization rules.

---

# Technical Standards

Do not modify without explicit approval:

- GitHub settings
- Vercel settings
- DNS
- domains
- analytics
- environment variables
- production deployment configuration

Never commit:

- customer documents
- credentials
- secrets
- personal information

---

# Content Standards

Preserve:

- SEO metadata
- structured data
- canonical URLs
- hreflang tags
- sitemap integrity
- internal linking
- bilingual consistency

English and Chinese are production languages.

Do not create public Korean or Japanese routes until instructed.

---

# Development Standards

Reuse existing:

- components
- layouts
- styling patterns

Avoid unnecessary refactoring.

Keep changes narrowly scoped.

Maintain responsive layouts.

---

# Workflow

Before editing:

- Explain which files will change.
- Explain why.

When practical:

- Use preview deployments before production.

Do not push directly to production unless explicitly requested.

Before completion:

Run:

npm run lint

and

npm run build

when possible.

If they cannot be run, explain why.

---

# Deliverables

After completing work, summarize:

- files changed
- work completed
- testing performed
- deployment status
- remaining risks
- recommended next steps

---

# Primary Content Sources

Roadmap

- ROADMAP.md

Business Strategy

- docs/core/FOUNDATION.md

Business Knowledge

- docs/core/KNOWLEDGE.md

Architecture

- docs/core/ARCHITECTURE.md

SEO

- docs/core/SEO-AND-LOCALIZATION.md

Service Data

- lib/services-data.ts

English Articles

- lib/insights-data.ts

Chinese Articles

- lib/zh-insights-data.ts

Homepage Services

- sections/ServicePipeline.tsx

Chinese Homepage Services

- sections/ZhServicePipeline.tsx

Structured Data

- lib/schema.ts

Sitemap

- lib/site-sitemap.ts

Verification

- scripts/verify-sitemap.mjs