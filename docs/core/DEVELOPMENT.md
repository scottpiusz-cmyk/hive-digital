# Development Guide

## Prerequisites

- A supported Node.js version for the installed Next.js release
- npm
- Git
- GitHub CLI only when an approved GitHub operation requires it

Confirm the exact Node.js requirement in the installed Next.js documentation
before changing the runtime. Node.js 20.9 or newer is the current minimum for
Next.js 16.

## Local Setup

```bash
npm ci
npm run dev
```

The development server normally starts on `http://localhost:3000`. Do not treat
a successful development render as a substitute for the static production
build.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create the static export and run sitemap verification |
| `npm run start` | Invoke `next start`; this is not the deployment-equivalent server for the current static-export configuration |

The `postbuild` script runs `scripts/verify-sitemap.mjs` automatically. A build
is not complete if sitemap verification fails.

The production artifact is `out/`. When local verification requires production
output rather than the development server, serve that directory with a local
static HTTP server; do not commit it.

## Working Method

1. Read `AGENTS.md`, this guide, and the technical document relevant to the
   requested change.
2. Inspect `git status` and preserve unrelated user work.
3. State the files expected to change and why before editing.
4. Use a focused branch and Vercel preview for user-facing work when practical.
5. Make the smallest coherent change and check the corresponding locale.
6. Run focused checks, then lint and build when the local setup supports them.
7. Review the exact diff before staging.
8. Commit, push, or deploy only within the approval given by the user.

## Validation

For application changes, the normal completion checks are:

```bash
npm run lint
npm run build
git diff --check
```

The repository may have known pre-existing lint findings. Record their exact
baseline and do not claim a clean check when it is not clean. A task should not
introduce new findings. Behavior-changing React fixes should be reviewed more
carefully than mechanical lint corrections.

For user-facing changes, also verify:

- affected desktop and mobile layouts
- internal links and primary contact actions
- English/Chinese parity where appropriate
- canonical, hreflang, structured data, and sitemap output when routes change
- browser console errors and missing assets

Documentation-only changes do not require an application build unless they
alter executable examples or build configuration.

## Adding Content or Routes

Before adding a page, determine whether it is:

- a static App Router page
- a service generated from `lib/services-data.ts`
- an English insight from `lib/insights-data.ts`
- a Chinese insight from `lib/zh-insights-data.ts`
- a localized counterpart or an intentionally unpaired page

Then verify the page metadata, canonical URL, appropriate language alternates,
internal navigation, sitemap inclusion, and static export. Do not add an
alternate merely because a locale homepage exists.

## Repository Hygiene

- Never stage `.next/`, `out/`, `.DS_Store`, local environment files, logs,
  credentials, or customer material.
- Do not use real personal data in fixtures, screenshots, examples, or commits.
- Inspect staged files with `git diff --cached --name-only` and
  `git diff --cached` before committing.
- Keep one logical change per commit and avoid unrelated formatting churn.
