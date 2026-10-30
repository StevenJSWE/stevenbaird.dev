# stevenbaird.dev

Personal site for [Steven Baird](https://www.stevenbaird.dev/).

Fresh Next.js App Router rebuild of the pre–Solid Snake V4 page (commit `356e189` in `my_site`), with light typography, motion, and a11y polish.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Deploy target: Vercel or Render

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Content

Edit `lib/content.ts` for copy, links, experience, education, and stack. CV lives at `public/Steven_Baird_CV.pdf`.

## Deploy

Point the host at this repo’s root. Build command `npm run build`, output `.next`. Set the custom domain to `stevenbaird.dev` / `www.stevenbaird.dev` when ready.
