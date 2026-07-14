# Korea Content Strategy and Page Map

Version: 0.1

Status: Draft for owner, operational, and native-language review

Market: South Korea

Source review date: 2026-07-14

## Strategic Role

Korea is an initial expansion market in `docs/core/FOUNDATION.md`. This content
cluster should attract people and organizations with a known document problem,
help them identify the correct document path, and convert appropriate cases to
an expert consultation.

The cluster must support Hive's core promise: recommend the correct legitimate
solution before processing begins. It must not imply that one checklist applies
to every employer, visa category, nationality, issuing state, or Korean office.

## Primary Audiences

1. International educators preparing documents for a role in South Korea.
2. International schools, universities, recruiters, and HR teams coordinating
   candidate documentation.
3. US citizens who need an FBI or state-level police record for use in Korea.
4. US degree and certificate holders who need an apostille for use in Korea.
5. Applicants outside the United States who need help coordinating fingerprints
   or US document processing.

## Search-Intent Model

These are strategic seed topics, not validated search-volume claims:

- **Transactional:** FBI background check for Korea, FBI apostille for Korea,
  degree apostille for Korea, Korea apostille service.
- **Problem solving:** how to get fingerprints for an FBI check abroad, which
  police check is needed for Korea, how to apostille a US degree.
- **Employer/HR:** Korea teacher document checklist, background checks for
  international-school hires, document coordination for Korea-bound staff.
- **Qualification:** FBI versus state police check, original versus copy,
  federal versus state apostille, whether a TEFL/TESOL certificate is requested.

Keyword wording and Korean terminology require current keyword research before
publication. Do not turn seed phrases into repetitive copy.

## Recommended Cluster

| Priority | Role | Proposed URL | Specification |
| --- | --- | --- | --- |
| P0 | Existing commercial hub to audit and strengthen | `/korea-apostille/` | `korea-document-guide.md` |
| P0 | Primary strategic service page | `/us-fbi-background-check-korea/` | `us-fbi-background-check-korea.md` |
| P0 | Supporting process guide | `/us-fingerprinting-guide-korea/` | `us-fingerprinting-guide-korea.md` |
| P1 | Degree-specific service page | `/us-degree-apostille-korea/` | `us-degree-apostille-korea.md` |
| P1 | Qualification/comparison page | `/us-state-police-background-check-korea/` | `us-state-police-background-check-korea.md` |
| P2 | Certificate-specific service page | `/us-tefl-tesol-apostille-korea/` | `us-tefl-tesol-apostille-korea.md` |

The existing `/korea-apostille/` URL must be preserved. Its current content
should be fact-checked before it becomes the cluster hub; this strategy does not
approve the claims already on that page.

## Journey and Internal Linking

```text
Search or employer checklist
        ↓
Korea apostille hub
        ↓
Document-specific page
        ↓
Requirement and source confirmation
        ↓
Consultation with destination, employer, deadline, and document details
```

Linking rules:

- The hub links to every approved document-specific page.
- Each child page links back to the hub and to only genuinely helpful siblings.
- The FBI page links to the fingerprint guide and explains when state checks are
  a different product rather than an interchangeable substitute.
- Degree and TEFL/TESOL pages distinguish academic documents from private
  training certificates.
- Relevant service pages may link into the cluster once the target page is live.
- Do not add links to planned routes before those routes exist.

## Conversion Model

Primary CTA: **Request a document-path review**.

The enquiry should gather only the minimum information needed:

- document type and issuing country/state
- intended use and destination in South Korea
- requesting employer, school, university, or authority
- stated deadline
- applicant's current country
- whether the document already exists

Do not request identity documents, fingerprints, criminal-history results, or
other sensitive records through analytics, URL parameters, or an unsecured
initial enquiry.

## Content Rules

- Lead with decision clarity, not fear or guaranteed outcomes.
- Separate verified government rules from employer or recruiter preferences.
- Use "may," "often," or an explicit condition when requirements vary.
- Never promise visa issuance, document acceptance, processing time, or price.
- Do not state that Hive has a Korea partner, local office, or in-country
  fingerprint service until the owner confirms operational capability.
- Date procedural claims and cite the responsible primary authority.
- Explain the issuing-authority rule: the correct process generally depends on
  who issued the document, not simply where the applicant lives.
- Treat FBI, state police, degree, and private training documents as distinct
  workflows.

## English and Korean Rollout

Phase 1 is an English-language Korea-intent cluster. English pages remain
unprefixed and must not advertise a Korean-language alternate that does not
exist.

The `/ko` tree may launch only after:

1. Korean keyword and terminology research is approved.
2. A native reviewer adapts the content for Korean readers.
3. Page-level counterparts and stable translation keys are defined.
4. Navigation, canonicals, reciprocal hreflang, language switching, sitemap
   discovery, and verification support the real routes.
5. Every Korean page passes factual, operational, and privacy review.

## Source Hierarchy

Use sources in this order:

1. Korea Immigration Service, Korea Visa Portal, and the Korean diplomatic post
   responsible for the applicant's filing jurisdiction.
2. The authority that issued or apostilles the source document.
3. The requesting employer, school, university, recruiter, or Korean office for
   case-specific requirements.
4. Hive operational procedures confirmed by the owner.

Current primary starting points:

- [FBI Identity History Summary FAQs](https://www.fbi.gov/how-we-can-help-you/more-fbi-services-and-information/identity-history-summary-checks/identity-history-summary-checks-faqs)
- [US Department of State: Criminal Records Checks](https://travel.state.gov/en/international-travel/living-abroad/criminal-records.html)
- [US Department of State: Office of Authentications](https://travel.state.gov/content/travel/en/replace-certify-docs/authenticate-your-document/office-of-authentications.html)
- [HCCH Apostille Convention status table](https://www.hcch.net/en/instruments/conventions/status-table/?cid=41)
- [Korean Consulate in Boston: General Visa Information](https://overseas.mofa.go.kr/us-boston-en/brd/m_21279/view.do?page=2&seq=23)

## Measurement

Measure only after analytics and privacy choices are approved:

- qualified consultation starts by page
- consultation completion rate
- enquiries resolved through a cheaper or simpler legitimate option
- organic impressions and clicks by intent group
- pages with outdated or unverified claims
- assisted conversions from informational guides to consultation

Traffic alone is not success. The cluster should generate appropriate cases and
reduce avoidable misunderstandings before work begins.

## Publication Gate

No page in this cluster is ready to publish until it has:

- current source validation
- owner confirmation of service capability and handoff path
- content and claim approval
- privacy review of its enquiry flow
- metadata, canonical, structured-data, internal-link, and sitemap verification
- mobile and desktop review
- Korean native review when a `/ko` counterpart is involved
