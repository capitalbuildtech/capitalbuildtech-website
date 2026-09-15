# Capital BuildTech Engineering — Website

Official website for Capital BuildTech Engineering, built with **Next.js (App Router)**.

## Stack

- [Next.js](https://nextjs.org/) 16 — App Router, server components, `next/image`
- React 19
- Tailwind CSS 3
- Framer Motion
- lucide-react icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/                  Routes (App Router)
  layout.jsx           Root layout — fonts, metadata, Navbar/Footer shell
  page.jsx              Home
  about/page.jsx
  services/page.jsx
  projects/page.jsx        Project listing (search + filter)
  projects/[slug]/page.jsx Project detail
  team/page.jsx
  contact/page.jsx
  not-found.jsx
components/            Shared UI components
data/                  Site content (company info, services, projects, team)
```

## Content

All site copy and listings live in `data/*.js`. Update those files to change
company details, services, team members, or the project portfolio — no
component changes required.

Images are currently served from Unsplash as placeholders. Replace the URLs
in `data/*.js` (and in individual components where noted) with real project
photography when available; `next/image` will optimize local files placed in
`public/` automatically — just point `src` at `/your-image.jpg`.

## Build & deploy

```bash
npm run build
npm run start
```

This project deploys to [Vercel](https://vercel.com) with zero configuration:
push the repo and import it in the Vercel dashboard, or run:

```bash
npx vercel
```
