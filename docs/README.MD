# Hive Digital Documentation

This directory contains the business, technical, operational, SEO, security,
and content-planning documentation for the Hive Digital website.

Start with [AGENTS.md](../AGENTS.md) for repository instructions. Before making
architectural, UX, SEO, content, or product decisions, consult the
[Hive Business Strategy](core/FOUNDATION.md).

## Core Documentation

| Document | Purpose |
| --- | --- |
| [Foundation](core/FOUNDATION.md) | Business purpose, customers, service priorities, positioning, and long-term direction |
| [Architecture](core/ARCHITECTURE.md) | Current framework, routes, content sources, constraints, and system boundaries |
| [Development](core/DEVELOPMENT.md) | Local setup, working method, validation, and repository hygiene |
| [Deployment](core/DEPLOYMENT.md) | Preview, production release, verification, and rollback process |
| [SEO and Localization](core/SEO-AND-LOCALIZATION.md) | Canonicals, hreflang, sitemap behavior, active locales, and future locale rules |
| [Security and Privacy](core/SECURITY-AND-PRIVACY.md) | Sensitive-data handling, approvals, incident response, and privacy review |

`AGENTS.md` is authoritative for agent behavior. The Foundation governs business
direction. Core technical documents describe the current implementation and its
operating rules. [ROADMAP.md](../ROADMAP.md) tracks planned and completed work.

## Page Specifications

Page specifications are planning artifacts. They do not create routes,
authorize publication, or prove that a service is operationally available.
Every specification requires the factual, operational, privacy, metadata, and
release reviews listed within it before implementation.

### South Korea

- [Content strategy and page map](page-specs/korea/korea-content-map.md)
- [Korea document-services hub](page-specs/korea/korea-document-guide.md)
- [US FBI background check](page-specs/korea/us-fbi-background-check-korea.md)
- [US fingerprinting guide](page-specs/korea/us-fingerprinting-guide-korea.md)
- [US state police background check](page-specs/korea/us-state-police-background-check-korea.md)
- [US degree apostille](page-specs/korea/us-degree-apostille-korea.md)
- [US TEFL/TESOL certificate apostille](page-specs/korea/us-tefl-tesol-apostille-korea.md)

The Korea specifications currently plan English, Korea-intent pages. They do
not activate the future `/ko` language tree. Korean-language publication
requires approved keyword research, native review, real page-level
counterparts, and complete locale infrastructure.

## Documentation Workflow

1. Confirm the requested work against the Foundation and Roadmap.
2. Read the relevant core technical document.
3. Treat page specifications as drafts until their review gates are complete.
4. Update documentation in the same logical change when implementation alters
   architecture, deployment, SEO, privacy, or approved strategy.
5. Keep documentation commits free of generated output, personal data,
   credentials, and unrelated application changes.

## Current Locale Status

- English: active, default unprefixed route tree
- Simplified Chinese: active under `/zh`
- Korean: planned; `/ko` is not published
- Japanese: planned; `/ja` is not published
