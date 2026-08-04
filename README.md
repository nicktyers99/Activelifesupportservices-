# Active Life Support Services

A static, no-build-step website for Active Life Support Services, styled after
the layout and structure of ourchoicedisability.com.au (no photos — all image
areas use placeholder colour blocks so they're easy to swap for real photos
later).

## Structure

```
index.html                      Home
contact.html                    Contact page + enquiry form
services.html                   Services overview
services-respite.html
services-camps.html
services-community-access.html
services-personal-support.html
pathways.html                   "Our journey with you" steps
careers.html                    "Join Our Team"
css/style.css                   All styles
js/main.js                      Mobile menu + contact form behaviour
assets/logo-full.png            Real logo (icon + wordmark), used in header/footer
assets/logo-icon.png            Icon-only mark, used as the favicon
```

## Running it locally

No build tools needed — just open `index.html` in a browser, or serve the
folder locally:

```
python3 -m http.server 8000
```

then visit http://localhost:8000

## Things to update before going live

1. **Phone number** — currently shows "Coming soon" in the footer and on
   `contact.html`. Once you have a number, replace those and add a
   `tel:` link.
2. **ABN** — currently `[Add your ABN]` in the footer of every page.
3. **Photos** — every `.media-block` div is a coloured placeholder standing
   in for a photo. Swap them for `<img>` tags (or CSS `background-image`)
   once you have photography to use.
4. **Social links** — the Instagram/Facebook/TikTok icons currently link to
   `#`. Update the `href` attributes in the header, homepage, and footer of
   each page with your real profile URLs.
5. **Contact form** — `contact.html`'s form currently only shows a "thanks"
   message locally (handled in `js/main.js`); it does not send anywhere yet.
   To make it work, either:
   - Point the `<form>` at a service like Formspree or Netlify Forms
     (add `action="https://formspree.io/f/your-id"` and simplify/remove the
     JS `preventDefault` handler), or
   - Hook the form up to your own backend/email API inside `js/main.js`.
6. **NDIS registration badges** — the "NDIS Registered" / "Accredited
   Provider" boxes in the dark section of the homepage are text
   placeholders; replace with your actual registration badge images once
   available.

## Deployment

This is a plain static site, so it can be hosted anywhere: Netlify, Vercel,
GitHub Pages, cPanel, etc. Just upload the whole folder.
