# Deployment Guide

## Production Model

The GitHub repository is `scottpiusz-cmyk/hive-digital`. Vercel project
`hive-digitalnew` deploys the `main` branch to production at
`https://www.hiverelo.com`.

Changing GitHub settings, Vercel settings, domains, DNS, environment variables,
analytics, production aliases, or the production branch requires explicit
approval.

## Preferred Release Flow

1. Confirm the intended scope and inspect the working tree.
2. Run the checks appropriate to the change, including `npm run lint` and
   `npm run build` for application work.
3. Commit only the reviewed files to a focused branch.
4. Push the branch and inspect its Vercel preview when practical.
5. Verify the affected user journeys, both active locales, metadata, and static
   assets on the preview.
6. Obtain approval before merging or pushing to `main` and before changing any
   production configuration.
7. Monitor the Vercel deployment until it reaches a terminal state.
8. Run production smoke checks after the deployment is ready.

A direct push to `main` is acceptable only when the user explicitly requests
it. That approval does not authorize unrelated platform or domain changes.

## Pre-Deployment Checklist

- The diff contains only the intended task.
- No generated output, secrets, personal data, or customer files are staged.
- Lint results are recorded, including any known baseline findings.
- The static build and postbuild sitemap verifier succeed.
- Canonical URLs, language alternates, and sitemap records agree for route
  changes.
- A preview has been checked for user-facing changes when practical.
- The production action and rollback owner are understood.

## Production Verification

After a release, check at minimum:

- English and Chinese homepages
- every route directly affected by the change
- navigation and contact actions relevant to the change
- `/robots.txt`
- `/sitemap.xml`
- `/baidu-sitemap.xml` for Chinese sitemap changes
- canonical and hreflang markup for SEO changes
- Vercel deployment state and build logs

Expected sitemap counts evolve as routes are added. Use the build verifier and
compare the actual route inventory rather than copying a permanent count into
release documentation.

## Rollback

If a deployment introduces a production defect:

1. Record the affected deployment, routes, and symptoms.
2. Stop further releases until the impact is understood.
3. Choose either a narrowly scoped revert or promotion of a known-good Vercel
   deployment.
4. Obtain explicit approval for the production rollback action.
5. Verify the production alias and affected routes after rollback.
6. Preserve non-sensitive logs and document the cause and follow-up.

Do not modify DNS or domains as a routine rollback mechanism.

For a release involving exposed private data or credentials, follow
`SECURITY-AND-PRIVACY.md` immediately; a normal code rollback may not remove
historical Git objects or prior deployment artifacts.
