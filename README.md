# Curuza website

SEO-first static marketing site for Curuza, built with Astro. Pages are rendered to HTML at build time and can be served directly from any static host or Nginx.

## Commands

```bash
pnpm install --frozen-lockfile
pnpm dev
pnpm check
pnpm build
pnpm preview
```

The production artifact is written to `dist/`.

## Production URL

Canonical URLs, `robots.txt`, and the generated sitemap default to `https://curuza.rw`. If the launch domain differs, set `SITE_URL` during the build:

```bash
SITE_URL=https://www.example.com pnpm build
```

## SEO and performance

- Static, crawlable page content with no SPA bootstrap.
- Canonical, Open Graph, Twitter Card, and robots metadata.
- Organization, SoftwareApplication, and FAQ structured data.
- Generated XML sitemap and valid `robots.txt`.
- Same-origin CSS, self-hosted Sora font, favicon, and social sharing image.
- Native navigation and FAQ disclosure; only the VAT calculator needs browser JavaScript.

See [MIGRATION_REPORT.md](./MIGRATION_REPORT.md) for the reproducible before-and-after benchmark.
