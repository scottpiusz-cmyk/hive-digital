# Security and Privacy

## Purpose

Hive Digital handles services that may involve identity records, background
checks, fingerprints, and government documents. The public website repository
must be treated as an inappropriate storage location for all customer documents
and personal data, even if a file is not linked from a page.

This document is a technical handling baseline for owner review. It is not a
substitute for legal advice, a formal privacy policy, or a jurisdiction-specific
retention schedule.

## Prohibited Repository Content

Do not commit or place under `public/`:

- passports, identity cards, fingerprints, police checks, certificates, or
  application documents
- customer names, contact details, addresses, identification numbers, or case
  records
- credentials, API keys, access tokens, private keys, cookies, or environment
  files
- production exports, analytics data, support conversations, or unredacted logs
- real customer material used as fixtures, screenshots, demonstrations, or
  design references

A file is exposed if it is present in a public deployment or reachable Git
history, whether or not the current UI links to it.

## Safe Development Practices

- Use synthetic data that cannot be mistaken for a real person.
- Store secrets only in approved local or Vercel environment mechanisms.
- Keep local environment files and generated output ignored by Git.
- Minimize data copied into issue trackers, pull requests, commit messages,
  build logs, and chat tools.
- Redact screenshots and logs before sharing them.
- Limit repository and deployment access to people who require it and review
  access periodically.

Before every commit, inspect:

```bash
git status --short
git diff --cached --name-only
git diff --cached
```

For suspicious files, verify tracking with `git ls-files` and inspect all Git
history before concluding that deletion from the current branch is sufficient.

## Environment and Credential Handling

- Never commit `.env` files or paste secret values into documentation.
- Environment-variable changes in Vercel require explicit approval.
- Grant the narrowest practical scope and rotate credentials when access is no
  longer needed.
- If a secret enters Git history, treat it as compromised and rotate it; history
  cleanup alone does not restore secrecy.
- Do not expose server-only values through browser bundles or public-prefixed
  environment variables.

## Sensitive-Data Incident Response

If private data or a secret is found in the repository or a deployment:

1. Stop sharing the affected URL, branch, build output, and file details.
2. Record the minimum facts needed for a private incident log.
3. Remove public access from the current application and verify the production
   URL no longer serves the material.
4. Rotate exposed credentials immediately when applicable.
5. Determine whether the material remains in Git objects, pull-request refs,
   forks, caches, logs, or historical deployments.
6. Obtain explicit approval before rewriting Git history, force-pushing refs,
   deleting deployments, or changing production configuration.
7. Coordinate with GitHub or Vercel support when hidden refs or retained
   artifacts cannot be removed through normal project controls.
8. Verify every affected surface, document the result privately, and define a
   prevention follow-up.

Avoid repeating personal names, document titles, tokens, or sensitive URLs in
public commits and cleanup documentation.

## Approval Matrix

| Action | Approval |
| --- | --- |
| Read-only local inspection | No special approval |
| Remove an identified sensitive file from an uncommitted working tree | Owner confirmation when scope is ambiguous |
| Commit a reviewed removal | Normal commit approval |
| Push to a non-production preview branch | Normal workflow approval |
| Push or merge to `main` | Explicit production approval |
| Rewrite history or force-push any ref | Explicit approval and coordinated plan |
| Delete Vercel deployments or change aliases | Explicit approval |
| Change domains, DNS, environment variables, analytics, or access | Explicit approval |
| Notify customers, regulators, vendors, or other third parties | Owner-led legal and operational decision |

## Forms, Analytics, and Integrations

Before adding a form or third-party service, document:

- the exact fields or events collected
- why each item is necessary
- where it is transmitted and stored
- who can access it
- retention and deletion behavior
- user notice and consent requirements
- failure, spam, abuse, and data-exposure risks

Collect the minimum information needed. Do not send identity documents or case
details through analytics, URL parameters, client logs, or unsupported contact
flows.

## Review Cadence

Review this document when the business strategy introduces new forms,
integrations, analytics, customer portals, document upload, authentication, or
new jurisdictions. Formal privacy notices and retention rules require owner and
appropriate professional review before publication.
