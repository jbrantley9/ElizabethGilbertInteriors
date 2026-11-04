# Elizabeth Gilbert Interiors

First-draft marketing site for Elizabeth Gilbert Interiors: interior design, paint consultations and ready-to-sell refreshes in Milton, Alpharetta, Roswell and Canton, Georgia.

It is a plain static site (`index.html`, `styles.css`, `script.js`) with no build step. Open `index.html` in a browser to preview, or host the folder on any static host (GitHub Pages, Netlify, etc.).

## Swapping in real photos

Right now the site uses free stock photos from [Unsplash](https://unsplash.com/license), linked straight from Unsplash, so the mockup looks like the finished site. The only real photo is `images/elizabeth.jpg` in the About section.

To swap in a real photo, add it to `images/` (e.g. `images/kitchen-after.jpg`) and change that `<img>` tag's `src` in `index.html` from the Unsplash URL to the new file. Also update its `alt` text, and the `width` and `height` attributes to the new photo's size.

| Slot in `index.html` | Shape |
| --- | --- |
| Hero image at the top | Tall, portrait crop |
| Three service cards | 4:3 |
| Portfolio before-and-after pairs (kitchen, bath, exterior) | 4:3 |
| Two extra portfolio photos | 4:3 |
| About photo (`images/elizabeth.jpg`) | Square |

Photos are cropped with `object-fit: cover`, so close-enough proportions work. Exporting around 1600px wide as JPG or WebP keeps the page fast.

## Still placeholder before launch

- Stock photos (see above). The before-and-after pairs are different stock homes, not the same room.
- Testimonials are made-up samples. Replace them with real client reviews before launch.
- The phone number and email in the Contact section are made up.
- The inquiry form only shows a thank-you message. Connect it to a form service such as Formspree or Netlify Forms so inquiries reach Elizabeth's inbox.
- Project names and cities in the Portfolio section
