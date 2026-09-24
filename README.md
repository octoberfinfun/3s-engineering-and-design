# 3S Engineering & Design — Next.js rebuild

A modern Next.js App Router rebuild of the public 3S Engineering & Design website, preserving its real navigation, company information, service structure and visual identity while replacing the older Wix layout with a responsive corporate engineering interface.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Production:

```bash
npm run build
npm start
```

Type check:

```bash
npm run typecheck
```

## Contact form

The contact form posts to `/api/contact` and sends mail using Nodemailer. Copy `.env.example` to `.env.local` and configure SMTP credentials. The project intentionally does not contain real SMTP secrets.

## Central company configuration

Phone, email, office addresses, office hours and official LinkedIn URL are centralized in `data/company.ts`. Update them there once to change the values across the site.

## Images

The rebuild uses the actual public Wix media assets identified on the live 3S website. They are centralized in `data/assets.ts` and rendered through `next/image` in unoptimized mode so the browser uses the original public asset endpoints. This avoids screenshots and unrelated stock photography. If you want to self-host them later, download each source asset, place the files under `public/images`, and replace the URLs in `data/assets.ts`.

## Routes

- `/`
- `/about-3s`
- `/engineering-and-design`
- `/facility-electrical-engineering`
- `/power-distribution-engineering`
- `/automation-controls`
- `/3d-modeling-and-drafting`
- `/as-built-design`
- `/3d-scanning`
- `/feed-studies-front-end-engineeing-and-design`
- `/emissions-resuction`
- `/project-management`
- `/quality-management-system`
- `/safety`
- `/contact-us`
- `/job-board`

The legacy misspellings in the FEED and Emissions URLs are intentionally retained because they match the current public 3S routes and help avoid broken inbound links.
