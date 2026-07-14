# Hive Digital Website Roadmap

This roadmap separates business-neutral technical work from initiatives that
depend on the forthcoming business strategy. It is a planning document, not an
authorization to publish, deploy, or change production configuration.

## Current Planning Constraint

The business strategy is pending owner review. Until it is supplied, do not
assume a target market, service priority, conversion goal, country expansion,
language launch order, price, timeline, or performance claim.

## Technical Stabilization

These tasks can be evaluated independently of the future business strategy.
Each should be delivered as a narrowly scoped change with its own verification.

1. Establish a clean lint baseline.
   - Fix the existing ESLint errors and warnings without changing page meaning.
   - Separate mechanical fixes from any behavior-changing React work.
2. Add repeatable route and link verification.
   - Check internal navigation, language-switch fallbacks, contact links, and
     generated static routes.
   - Keep sitemap verification as part of the production build.
3. Audit content claims and evidence.
   - Identify statistics, response times, ratings, years of experience,
     geographic coverage, and service claims that require owner validation.
   - Do not silently rewrite or remove claims; present findings for approval.
4. Review duplicated content sources.
   - Compare homepage service cards, service indexes, detail-page data, and
     their Chinese counterparts.
   - Recommend consolidation only where it will not erase intentional locale
     differences.
5. Review the Chinese layout and shared UI boundaries against the installed
   Next.js version before adding more locale trees.

## Awaiting Business Strategy

These ideas remain in the backlog but are not yet approved or ranked:

- Refine the homepage hero around the chosen primary conversion goal.
- Decide whether to create a Canada RCMP fingerprinting page.
- Decide whether to publish an FBI background-check explainer.
- Decide whether to create a recruiter and HR support page.
- Review contact calls to action and trust signals.
- Build a case-study or success-story program using approved, anonymized
  source material.
- Define Korean SEO expansion and the `/ko` content tree.
- Define Japanese SEO expansion and the `/ja` content tree.
- Decide priority countries, services, audiences, and content themes.

No language tree should launch from translated placeholders alone. Each launch
requires approved keyword research, native-language review, localized service
accuracy, complete metadata, reciprocal language relationships, and a release
plan.

## Recurring Operations

- Review service and country pages when government processes or source guidance
  changes.
- Check Search Console coverage, sitemap processing, indexing, and structured
  data after SEO releases.
- Test English and Chinese desktop and mobile journeys after shared UI changes.
- Review dependencies, security advisories, access permissions, and production
  configuration on a regular schedule.
- Keep customer documents, personal data, secrets, and generated build output
  out of Git history.

## Completed Foundations

- Established English and Chinese site trees.
- Added Shanghai fingerprinting as the lead homepage service in both languages.
- Removed obsolete Chinese service-card image references.
- Corrected language-switch routing for pages without direct translations.
- Corrected canonical metadata across English and Chinese pages.
- Automated localized sitemap generation and build-time sitemap verification.
- Removed tracked generated artifacts and strengthened repository ignore rules.
- Removed exposed customer documents from the repository and verified they were
  no longer served by production.

## Roadmap Review Gate

When the business strategy is provided:

1. Validate it against current services, operational capability, and approved
   claims.
2. Rank the strategy-dependent backlog by business impact and delivery risk.
3. Define measurable outcomes without inventing baselines or targets.
4. Convert the approved priorities into one logical Git commit per task.
5. Update this roadmap before implementation begins.
