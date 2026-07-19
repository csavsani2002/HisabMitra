# HisabMitra — Landing Page

Next.js 14 (App Router) + Tailwind CSS landing page for HisabMitra.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Deploy

Easiest: push this folder to a GitHub repo, then import it on
[vercel.com](https://vercel.com) — zero config needed.

Also works on Netlify (`next build`, output `.next`) or any Node host.

## Where to edit

- `app/page.tsx` — all page content and copy (features, FAQ, sections)
- `app/layout.tsx` — page metadata (SEO title/description) and fonts
- `tailwind.config.js` — color palette (bahi-khata ledger theme: ink, thread red, brass, paper)
- `app/globals.css` — the red "thread spine" signature element and ledger styling
- `app/privacy/page.tsx`, `app/terms/page.tsx` — replace placeholder legal text before launch

## Notes

- CTAs currently link to `mailto:hello@hisabmitra.app` and `#` — swap in your real
  demo-request form / Play Store link.
- Google Fonts (Fraunces, Inter, IBM Plex Mono) load automatically at build time —
  requires internet access during `npm run build`.
