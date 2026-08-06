# Saraswat Eye & Dental Hospital — Website

A modern, responsive React website for **Saraswat Eye & Dental Hospital**,
Bharatpur Road, Achhnera, Agra (UP).

Built with **React 18 + Vite**.

## Run it locally

```bash
npm install      # first time only
npm run dev      # start dev server → http://localhost:5173
```

## Build for hosting

```bash
npm run build    # outputs a static site into docs/
npm run preview  # preview the production build locally
```

The build output goes into `docs/` (not the usual `dist/`) so the
site can be published straight from GitHub Pages — see below. You
can also upload the contents of `docs/` to any other static host
(Netlify, Vercel, Hostinger, cPanel, etc.).

## Publishing on GitHub Pages

This repo is already built and ready to publish — no CI/CD needed.

1. Create a new (empty) repository on GitHub and add it as the remote:
   ```bash
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`,
   branch `main`, folder `/docs`, then **Save**.
4. The site will be live at `https://<username>.github.io/<repo>/`
   within a minute or two.

Whenever content changes, run `npm run build` again to refresh `docs/`,
commit, and push — GitHub Pages picks up the new `docs/` folder automatically.

## Editing content

Almost all text — phone numbers, address, services, doctors, FAQs — lives in
one file: [`src/data.js`](src/data.js). Change it there and it updates across
the whole site. No need to touch the components for routine edits.

- **Clinic details / phone / WhatsApp / address:** `CLINIC` object
- **Eye & dental services:** `EYE_SERVICES`, `DENTAL_SERVICES`
- **Doctors:** `DOCTORS`
- **FAQs:** `FAQS`

Photos live in [`src/assets/`](src/assets/) — replace the files (keep the same
names) to swap images.

## Notable features

- Fully responsive (mobile, tablet, desktop) with a slide-in mobile menu.
- The **appointment form** and buttons open **WhatsApp** with the details
  pre-filled — no backend or database required.
- Google Map, click-to-call links, floating WhatsApp button.
- Smooth scroll-reveal animations, accessible markup, graceful no-JS fallback.

## Project structure

```
src/
  App.jsx            # page composition
  data.js            # ← edit content here
  index.css          # all styles (design system)
  hooks/useReveal.js # scroll-reveal animation
  components/        # Header, Hero, Services, About, Doctors,
                     # Gallery, CtaBanner, Faq, Contact, Footer, ...
  assets/            # clinic & treatment photos
```
