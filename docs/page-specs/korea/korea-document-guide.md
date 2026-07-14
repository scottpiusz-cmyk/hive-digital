# Page Specification: Korea Document and Apostille Services

Version: 0.1

Status: Draft specification; not approved copy

Current route: `/korea-apostille/`

Page role: Commercial cluster hub

Priority: P0

## Objective

Evolve the existing Korea apostille landing page into a decision-oriented hub
that helps applicants and hiring organizations identify which document path to
verify before starting work.

The page should establish Hive as a consultative coordinator without claiming
that all Korea-bound documents follow one checklist or that Hive controls the
decision of an employer, Korean authority, or visa office.

## Primary Audiences

- US applicants preparing documents for work or teaching in South Korea
- international schools, universities, recruiters, and HR teams
- applicants who have been told to provide an apostilled document but do not
  know whether it is federal, state, academic, or privately issued

## Primary User Questions

1. Which document is actually being requested?
2. Who issued it and which authority can apostille it?
3. Is the request a government requirement or an employer preference?
4. Does the applicant need an FBI check, a state check, or something else?
5. Does a degree or certificate need an original, certified copy, notarization,
   apostille, translation, or another step?
6. What information does Hive need before recommending a workflow?

## Positioning

Core message: **Confirm the requirement before processing the document.**

Supporting proof should describe Hive's review method and communication process.
Do not publish years-of-experience, response-time, acceptance-rate, partner,
coverage, or testimonial claims without owner-approved evidence.

## Proposed Page Structure

1. **Hero**
   - Clear Korea-bound document focus.
   - Explain that the correct path depends on document origin and requester.
   - CTA: Request a document-path review.
2. **Start with the request, not the service**
   - Destination and intended use.
   - Requesting employer, school, university, or authority.
   - Document issuer and applicant location.
3. **Common US document paths**
   - FBI Identity History Summary.
   - State or local police record.
   - Degree or transcript.
   - TEFL/TESOL or other professional certificate.
   - Personal or corporate document, only if operationally supported.
4. **Federal versus state workflow**
   - Explain the distinction without prescribing a case result.
   - Link to the relevant child specifications once published.
5. **How Hive evaluates a case**
   - Understand the goal.
   - Confirm the requester and stated requirements.
   - Identify document origin and competent authority.
   - Recommend the legitimate path and explain alternatives.
   - Coordinate approved services and communication.
6. **For schools, recruiters, and HR teams**
   - Candidate intake consistency.
   - Batch planning without invented volume or turnaround claims.
   - Escalation of exceptions to a human specialist.
7. **FAQ**
   - Is an apostille always required?
   - Is an FBI check the same as a state police check?
   - Can an electronic result be used?
   - Does every teaching applicant need the same documents?
   - Can Hive guarantee acceptance or a visa outcome? Answer: no.
8. **Consultation CTA**
   - Request only the minimum initial case details.

## SEO Specification

- Draft title: `Korea Apostille and Document Services | Hive Digital`
- Draft H1: `Document and Apostille Services for South Korea`
- Primary intent: commercial investigation for Korea-bound document support
- Supporting concepts: FBI check, US apostille, degree, teacher documentation,
  schools, recruiters, and HR coordination
- Canonical: `https://www.hiverelo.com/korea-apostille/`
- Indexing: retain current indexable route after factual review
- Hreflang: English only until a reviewed Korean counterpart exists

The final title and description require keyword research and search-result
review. Avoid making the hub compete with each document-specific page for the
same narrow query.

## Internal Links

When the child routes exist, link to:

- `/us-fbi-background-check-korea/`
- `/us-fingerprinting-guide-korea/`
- `/us-degree-apostille-korea/`
- `/us-state-police-background-check-korea/`
- `/us-tefl-tesol-apostille-korea/`
- `/services/background-checks/`
- `/services/apostille/`
- `/contact/`

Do not render links to routes before they are deployed.

## Required Source and Claim Review

- Confirm current Korea-side requirements for every visa or employment example
  with the responsible Korean authority or diplomatic post.
- Confirm whether each statement describes law, visa procedure, local-office
  practice, or employer preference.
- Confirm US federal apostille guidance with the FBI and US Department of State.
- Confirm state-document workflows with the issuing state authority.
- Remove universal statements such as "for all documents" or "you need" unless
  a current primary source supports that exact scope.
- Owner-review all service capability, translation, courier, response-time, and
  experience claims on the existing page.

## Structured Data

- `WebPage` or an appropriate service-page representation
- `BreadcrumbList`
- `FAQPage` only if every marked-up question and answer is visibly rendered and
  factually reviewed

Do not mark up ratings, reviews, prices, or geographic service coverage without
visible and supportable page content.

## Acceptance Criteria

- Existing URL and canonical are preserved.
- The page separates federal, state, academic, and private-document paths.
- No visa, timing, cost, or acceptance outcome is guaranteed.
- Child pages have distinct intent and no duplicated primary copy.
- Contact intake follows the privacy rules in
  `docs/core/SECURITY-AND-PRIVACY.md`.
- Metadata, sitemap, structured data, links, desktop, and mobile are verified.
- Any Korean counterpart receives native review and reciprocal hreflang only
  when both pages are live.
