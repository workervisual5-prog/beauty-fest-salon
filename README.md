# Beauty Fest Salon & Spa — Website

A React + Vite + Tailwind recreation of the Beauty Fest Salon & Spa website, ready to deploy on Netlify.

## ⚠️ Before you publish — content you need to fill in

I didn't have your **real service prices** or **real client reviews**, so I filled those
sections with clearly-labeled placeholder data so the site builds and works end-to-end.
**Please edit these before going live:**

- `src/data/services.js` — replace the placeholder service names/prices with your real menu.
- `src/data/reviews.js` — replace the 3 sample reviews with real client reviews (or remove
  the section / point people to Google Reviews only).

Everything else (layout, nav, contact info, hours, booking form, maps, WhatsApp) is wired
up with the real details you provided.

## Getting started

```bash
npm install
npm run dev       # local development at http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Deploying to Netlify

1. Push this project to a GitHub repo (or drag-and-drop the `dist/` folder after running
   `npm run build` into Netlify's manual deploy).
2. In Netlify: **New site from Git** → select the repo.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy. The included `netlify.toml` already sets this up and handles SPA routing.

## What's wired up

- **Booking form** → sends via EmailJS (`service_zcyqnei` / `template_i2se0dm`) to
  contact.beautyfest@gmail.com, with loading/success/error states.
- **Call Now / phone links** → `tel:+19054171700`
- **Floating WhatsApp button** → `https://wa.me/19054171700`
- **Get Directions** → your Google Maps short link
- **Write a Review** → your Google Maps review link
- **Embedded map** → Google Maps embed for the salon's address

## Project structure

```
src/
  components/   All page sections as reusable React components
  data/          Site-wide config, services & pricing, reviews
  assets/        Logo and photo assets
```
