# Hive Digital Website

Production website for Hive Digital Consulting, including English and Chinese
content for cross-border document services across China and APAC.

## Links

- Production: https://www.hiverelo.com
- Chinese site: https://www.hiverelo.com/zh/
- GitHub: https://github.com/scottpiusz-cmyk/hive-digital
- Deployment: Vercel project `hive-digitalnew`

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Vercel

## Local Commands

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Workflow

1. Start from an up-to-date `main` branch.
2. Create a `codex/` preview branch for user-facing work.
3. Make a focused change and run lint/build checks.
4. Push the branch and review the Vercel preview.
5. Push the approved commit to `main` for production.
6. Wait for Vercel to report `READY`, then verify the live URL.

Read [AGENTS.md](AGENTS.md) before making changes. Use
[docs/site-brief.md](docs/site-brief.md) as the content source of truth, and
track ongoing work in [ROADMAP.md](ROADMAP.md).
