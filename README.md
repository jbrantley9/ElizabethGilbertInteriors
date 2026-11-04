# Elizabeth Gilbert Interiors

First-draft marketing site for Elizabeth Gilbert Interiors: interior design, paint consultations and ready-to-sell refreshes in Milton, Alpharetta, Roswell and Canton, Georgia.

It is a plain static site (`index.html`, `styles.css`, `script.js`) with no build step. Open `index.html` in a browser to preview, or host the folder on any static host (GitHub Pages, Netlify, etc.).

## Swapping in real photos

Every image is a placeholder file in `images/`. To replace one, drop in a real photo and update the matching `src` in `index.html` (for example `images/kitchen-after.svg` becomes `images/kitchen-after.jpg`). Also update its `alt` text, and the `width`/`height` attributes to the new photo's size.

| File | Where it appears |
| --- | --- |
| `hero.svg` | Top of the home page (tall, portrait crop) |
| `service-remodel.svg`, `service-paint.svg`, `service-refresh.svg` | Service cards (4:3) |
| `kitchen-before/after`, `bath-before/after`, `exterior-before/after` | Portfolio before-and-after pairs (4:3) |
| `gallery-entry.svg`, `gallery-dining.svg` | Extra portfolio photos (4:3) |
| `elizabeth.svg` | About section portrait (portrait crop) |

Photos are cropped with `object-fit: cover`, so close-enough proportions work. Exporting around 1600px wide as JPG or WebP keeps the page fast.

## Still placeholder before launch

- Testimonials (three quotes in the Testimonials section)
- Phone number and email in the Contact section
- The inquiry form only shows a thank-you message. Connect it to a form service such as Formspree or Netlify Forms so inquiries reach Elizabeth's inbox.
- Project names and cities in the Portfolio section
