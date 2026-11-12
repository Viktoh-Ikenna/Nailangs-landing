# nailangs.com

The official website for Nailangs keyboards (Android, iPhone & iPad, Mac, Windows). It
replaces the old WordPress site.

Next.js 16 (App Router, all pages static) · Tailwind CSS 4 · Motion for animation.

```sh
npm install
npm run dev        # http://localhost:3000
npm run check      # lint + types + production build
```

## Where things are

| What | Where |
|---|---|
| All the words, languages, store links, FAQs | `src/content/site.ts` |
| Privacy policies, one per app (Markdown) | `src/content/privacy/` |
| Home page sections | `src/components/home/` |
| The typing phone in the hero | `src/components/KeyboardDemo.tsx` |
| Images | `public/images/` |
| Screenshots of the old and new site | `docs/old-site/`, `docs/new-site/` |

## Store links

Only Google Play's link is known. When the App Store, Mac and Microsoft Store listings are
live, set `store.href` for that platform in `src/content/site.ts`; until then the site shows
"Coming soon".

## SEO

- Per-page titles, descriptions and canonical URLs (Next.js Metadata API).
- Open Graph and Twitter cards; the share image is drawn by `src/app/opengraph-image.tsx`.
- `sitemap.xml`, `robots.txt` and a web manifest are generated (`src/app/sitemap.ts`, …).
- schema.org JSON-LD: Organization, WebSite, one SoftwareApplication per platform, and an
  FAQPage on the home page.
- Old WordPress addresses (`/features`, `/nkb`, `/privacy`, …) redirect permanently to their
  new pages (`next.config.ts`), so existing links and search results keep working.
- `lang="en-NG"`, semantic headings, alt text on every image, reduced-motion respected.

## Fonts: why not just any font

Yorùbá stacks a tone mark over a dotted vowel (ọ̀, ẹ́). Many display fonts put the mark beside
the letter instead ("ọ`"). Plus Jakarta Sans and Inter position them properly; check any new
font with "ọ̀kọ̀ ẹ̀ àárọ̀" before using it.

## Images

The photographs of people are AI-generated (Z-Image-Turbo) and show no real person. The
silicone cover photos are the real product, from the old site.

## Deploying

Any Next.js host works (Vercel is simplest: import the repo, no settings needed). Point the
nailangs.com DNS at it once the content has been approved.
