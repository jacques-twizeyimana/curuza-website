# Astro migration impact report

Measured on 2026-08-19 against local production builds using Lighthouse 12.8.2 and Headless Chrome 151. Both runs used the same machine, mobile throttling profile, URL, port, and Lighthouse categories.

## Results

| Metric | Vite + React SPA | Astro static | Change |
| --- | ---: | ---: | ---: |
| Lighthouse Performance | 84 | 100 | +16 points |
| Lighthouse Accessibility | 93 | 100 | +7 points |
| Lighthouse Best Practices | 100 | 100 | No change |
| Lighthouse SEO | 91 | 100 | +9 points |
| First Contentful Paint | 3.24 s | 0.90 s | 72% faster |
| Largest Contentful Paint | 3.24 s | 1.35 s | 58% faster |
| Speed Index | 4.62 s | 0.90 s | 80% faster |
| Time to Interactive | 3.24 s | 1.35 s | 58% faster |
| Total Blocking Time | 0 ms | 0 ms | No change |
| Cumulative Layout Shift | 0 | 0 | No change |
| Initial transferred bytes | 143.5 kB | 56.8 kB | 60% less |
| Initial network requests | 7 | 4 | 43% fewer |
| Browser JavaScript requests | 1 (60.4 kB) | 0 | Removed from initial load |
| SEO-visible page content | Client-rendered | Build-time HTML | Fully crawlable without JS |

Lighthouse lab timings vary slightly between runs. Scores and transfer/request counts are the more stable regression targets.

## What changed

- Astro now prerenders the marketing page, `robots.txt`, and sitemap as static files.
- Existing visual sections render at build time and are not hydrated in the browser.
- The mobile menu and FAQ use native HTML disclosure controls.
- The VAT threshold calculator uses a small inline script instead of hydrating React.
- Google Fonts and the Vite starter favicon were removed from the critical path; Sora is self-hosted and preloaded from the site origin.
- Metadata now includes a canonical URL, index directives, Open Graph and Twitter cards, a real 1200 x 630 social image, and structured data.
- Dead footer links were replaced with working in-page destinations.
- Heading order and color contrast were corrected to reach a 100 Accessibility score.

## Reproduce the post-migration benchmark

```bash
pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm preview --host 127.0.0.1 --port 4173
npx --yes lighthouse@12.8.2 http://127.0.0.1:4173/ \
  --only-categories=performance,accessibility,best-practices,seo \
  --output=html \
  --output-path=./lighthouse-report.html
```

Run Lighthouse several times in CI and compare medians if the numbers will be used as release gates.

## Deployment notes

- Serve `dist/` as immutable static output.
- Cache fingerprinted files under `/_astro/` for one year with `immutable`.
- Cache HTML briefly or revalidate it so SEO changes publish quickly.
- Set `SITE_URL` during the production build if the deployed domain is not `https://curuza.rw`.
- Submit `/sitemap-index.xml` to search engines after the production domain is confirmed.
