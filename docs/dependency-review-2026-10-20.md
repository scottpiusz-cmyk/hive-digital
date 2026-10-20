# Dependency security review — 20 October 2026

## Scope and versions

This change updates package.json and package-lock.json without changing site
content, runtime architecture, analytics configuration or Vercel settings.

- next: 16.2.4 → 16.4.2
- @next/third-parties: ^16.2.4 → exact 16.4.2
- eslint-config-next: 16.2.4 → 16.4.2
- Retain React/React DOM 19.2.4: these satisfy the upgraded packages' peer ranges.
- Retain the current Node.js configuration. Next.js 16.4.2 requires Node >=20.9;
  local validation uses Node 22 and the existing Vercel project uses Node 24.

Compatible lockfile updates include PostCSS 8.5.23, sharp 0.35.5,
nanoid 3.3.20, source-map-js 1.2.2, baseline-browser-mapping 2.11.30,
Babel 7.29.x, browserslist 4.29.4, js-yaml 4.3.2 and patched
brace-expansion versions in their existing major ranges. Related Babel,
platform-native and browser-data entries move with those dependency families.
No npm audit fix --force or incompatible override is used.

## Applicability assessment

The site uses output: "export", images.unoptimized: true and build-time static
pages. No request-time Next.js server, Server Actions, Proxy/Middleware,
WebSocket upgrade handler or next/og ImageResponse usage was found in the
application source reviewed.

| Advisory family | Site assessment |
| --- | --- |
| Next.js image optimizer / sharp | The public site does not expose Next.js's image optimization endpoint. Images are unoptimized static assets. Upgrade still removes affected installed packages. |
| next/og ImageResponse | No ImageResponse route or attacker-controlled image generation was found. The published RCE condition is not present in this source. |
| Server Actions, request-time RSC, middleware bypass, ISR/cache | No such application endpoints/runtime are deployed by this static export. These findings do not establish a remotely exploitable public endpoint here. |
| Windows-hosted Next.js RCE | No Windows-hosted Next.js request server is used by the static Vercel deployment. |
| Development-server MCP disclosure | Relevant to development tooling rather than exported pages; upgrade rather than exposing a development server publicly. |
| PostCSS, Babel, source maps, glob/query parsers | Build/lint tooling processes repository inputs. Static hosting reduces public runtime exposure, but development and CI dependencies still require maintenance. |

This is source/configuration applicability triage, not a penetration test or a
claim that all potential dependency risks are absent.

## Audit outcome

Before the change:

- Production dependency audit: six affected package entries (one critical,
  four high, one moderate).
- Full dependency audit: 15 affected package entries (one critical, 12 high,
  one moderate, one low).

After the change:

- npm audit --omit=dev: zero vulnerabilities.
- npm audit: five high entries, all from the same development-only chain:
  eslint-config-next → @next/eslint-plugin-next → fast-glob → micromatch → braces.
- npm explain braces confirms braces@3.0.3 is a development dependency.
- GHSA-vfj7-8cjw-p6xm affects braces <=3.0.3 and lists no patched version as
  of this review. The registry's current braces version is 3.0.3.

The remaining chain can exhaust a Node.js process's stack when it parses a
deeply nested attacker-controlled glob pattern. The site has no public pattern
input; the affected use identified here is ESLint file discovery. Keep lint
configuration and its inputs reviewed. Track a compatible upstream fix and
repeat the full audit when ESLint/Next tooling changes. Do not downgrade
eslint-config-next to a different framework major or force an incompatible
braces override merely to suppress an audit entry.

## Verification

- Clean npm ci succeeds using the updated lockfile.
- npm run lint retains the existing three errors and two warnings in unrelated
  source files; no new lint findings were introduced.
- npm run build succeeds on Next.js 16.4.2. Postbuild verifies 38 canonical
  sitemap entries, 12 Chinese compatibility entries and 41 exported document
  structures, including correct language on all 12 Chinese pages.
- All exported title/meta/canonical/hreflang sets and both sitemap files match
  the pre-upgrade baseline exactly.
- Chrome checks pass for English service-card navigation, English/Chinese
  contact-page language switches, Chinese QR image loading and the contact
  layout at 320px (no horizontal overflow). No console errors were observed
  in these smoke checks.
- An initial local build encountered stale .next/dev/types references to the
  English routes before their earlier move into app/(en). Those generated
  development types were archived outside the repository before rebuilding;
  no application source or TypeScript configuration workaround was used.

## Primary references

- Next.js release: https://github.com/vercel/next.js/releases/tag/v16.4.2
- Version-matched upgrade/static-export documentation in node_modules/next/dist/docs/
- ImageResponse: https://github.com/advisories/GHSA-vcvr-r3jv-pc5j
- AVIF image optimization: https://github.com/advisories/GHSA-2xp9-vwfh-vxw4
- Remaining braces advisory: https://github.com/advisories/GHSA-vfj7-8cjw-p6xm

Audit findings and registry versions are point-in-time results, not a promise
that future audits remain clear. Production release is separate from this
local dependency change.
