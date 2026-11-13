# DXB Incorp website

A static, multi-page redesign of [dxbincorp.com](https://dxbincorp.com). No framework and no dependencies: a small Node script generates the HTML.

## Build

```bash
node build.mjs
```

This writes every page (`index.html`, `about-us.html`, `our-services/*.html`, …), `sitemap.xml` and `robots.txt` into the project root. Open `index.html`, or serve the folder with any static server.

## Structure

| Path | Purpose |
|---|---|
| `src/content.mjs` | All site copy (taken from the live dxbincorp.com site) |
| `build.mjs` | Page templates and generator |
| `styles.css` | Styles |
| `script.js` | Menu, search, form and entrance animations |
| `assets/` | Logo and photos |

## Options

- **Hero video:** add a clip at `assets/hero.mp4` (or `.webm`) and rebuild. It fades in over the hero photo. Phones and reduced-motion visitors keep the photo.
- **Contact form:** there is no backend. Submitting opens the visitor's email app with the details filled in.

## Hosting

The generated files are plain static files, so the project root can be served as-is (for example with GitHub Pages).
