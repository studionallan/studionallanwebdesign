# Studio Nallan Web Design

Web design studio site — brutalist minimal, one accent colour, subtle
scroll-triggered motion only.

## Stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · framer-motion

## Develop

```bash
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Structure

- `src/app/` — routes. Homepage is composed from one component per section.
- `src/components/sections/home/` — homepage sections (Hero, Problem, Claim,
  HowItsBuilt, LocalProof, FinalCta).
- `src/components/sections/shared/` — `Proof`, `Prose`, `CTA` (reused across
  the homepage, About, Contact, and the three SEO pages).
- `src/components/motion/` — `Reveal`, `RevealHeadline`, `Stagger`, `Rule`.
  All honour `prefers-reduced-motion`.
- `src/components/layout/` — Header, Footer, PageFrame, PageHeader, SectionHeader.
- `src/lib/site.ts` — **single source of truth for NAP and links.**
- `src/lib/schema.ts` — `ProfessionalService` (sitewide) + per-page `Service`.

## Routes

| Path | Notes |
| --- | --- |
| `/` | Home |
| `/about/` `/contact/` | Primary nav |
| `/locations/hamilton-web-design/` | Footer-linked only |
| `/services/seo-hamilton/` | Footer-linked only |
| `/services/ai-automation/` | Footer-linked only |

| `/articles/` | Article index (footer-linked only, not in primary nav) |
| `/articles/[slug]/` | 5 posts, `BlogPosting` schema each |

The three service pages are kept out of primary nav on purpose; they are
crawlable via the footer "Services" list, the sitemap, and interlinking.
Same applies to Articles (footer link only).

## Before launch

`trailingSlash: true` is set so the published service-page URLs resolve
directly instead of 308-ing off the canonical.

Confirmed in `src/lib/site.ts`: name, domain (`www` canonical, apex 301s),
phone, email, street address, hours, geo. Still placeholder until swapped:

- `mapsUrl` (verified GBP link — joins schema `sameAs` automatically)
- `logo` / `ogImage` (generated placeholders in `public/assets/` serve today)
- social profiles (LinkedIn per spec; add others only with confirmed URLs)

Phone/email render as icon-only buttons on purpose (no scannable text on
screen); the number stays in the JSON-LD `telephone` field for local SEO.

## Hosting (Netlify)

`netlify.toml` pins the build (`npm run build`, publish `.next`) and the
Next.js plugin. Deploy the repo as-is, add both `studionallan.com` and
`www.studionallan.com` as domains, and set **www as the Primary domain** —
Netlify then 301s the apex automatically (no redirect lives in code, because
host-conditioned redirects break the Netlify plugin).

```bash
npm run build    # production bundle -> .next/
npm run start    # serve it locally
```

Local note: never run `npm run build` while `npm run dev` is serving — the
shared `.next` directory corrupts dev manifests (500s). Kill dev first.

Pre-launch checklist, all verified: 20/20 routes 200, one H1 per page,
titles ≤ 60 chars, descriptions 120–165 and unique, www canonicals,
`index, follow` everywhere, full OG/Twitter, valid JSON-LD with consistent
NAP, sitemap + robots.txt, apex→www 301, favicon set, branded 404.
Point the apex domain at the deployment so the 301 can fire.

`public/portfolio/` holds optimized client-site screenshots, listed in the
`WORKS` array in `src/components/sections/shared/Proof.tsx`. Originals live
in the `portfolio/` folder at the project root (not deployed).

`public/articles/` holds generated placeholder images for the 5 articles;
replace with the real GBP visuals and update `src/lib/articles.ts`.

The verified Kevin Ashton review lives in `src/lib/review.ts` — rendered
verbatim on the homepage band and the About reviews section, and mirrored in
the sitewide `Review` + `AggregateRating` schema. Append future verified
reviews to the About `Testimonials` component.
