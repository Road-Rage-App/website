## Road Rage: The Game Website

This project is a static marketing/download website for Road Rage: The Game, built with Next.js (App Router). It does not require a backend.

## What The Site Includes

- Game overview and core gameplay loop
- Rules summary for cities, road challenges, and coins
- A download call-to-action link for the mobile app
- Responsive layout for desktop and mobile

## Getting Started

First, run the development server:

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## Customize Download Link

Update the download CTA URL in `src/app/page.js`:

- Replace `https://example.com/download` with your real App Store or Play Store URL.

## Build For Production

```bash
npm run build
npm run start
```

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4 (imported in globals.css)

## Notes

- This site is intentionally frontend-only.
- If you later need analytics, leaderboards, or live duel updates, those would require backend services.
