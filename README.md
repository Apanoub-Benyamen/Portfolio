# Abanoub Benyamin — Business & Data Analytics

An editorial portfolio built around business questions, authentic evidence, and practical outcomes. Six static pages, an enhanced portrait, actual Power BI screenshot and presentation, the original Power BI report and four case-study explorers, responsive navigation, project filtering, dashboard lightbox, experience accordions, and email-copy feedback.

## Run

Open `dist/index.html`, or serve the build:

```bash
python -m http.server 8000 --directory dist
```

No dependency installation or build is required to view the delivered site. No analytics, remote fonts, tracking, API keys, or external script dependencies are included.

## Edit and validate

Content and page templates live in `build.py`. Styling and browser behavior live in `dist/assets/style.css` and `dist/assets/app.js`.

```bash
python build.py
python check.py
node --check dist/assets/app.js
```

Python is a local authoring tool, not a hosting dependency. `dist/` remains deployable as static files. Do not overwrite the project assets when rebuilding: the generator regenerates HTML only. Direct HTML changes are overwritten on regeneration.

## GitHub Pages

For manual branch publication, upload the **contents of `dist/`** to the repository root and select `main` + `/ (root)` in Settings → Pages → Deploy from a branch.

For automated publication, push this entire project (including `dist/`, `check.py`, and `.github/`) and select GitHub Actions as the Pages source. The provided workflow deploys the committed `dist/` and validates local references first. Run `build.py` before committing any content-template changes. Paths are relative and work under a project subdirectory.

See `README_AR.md` for the complete Arabic walkthrough. GitHub documentation: [create a site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site), [custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Accessibility and performance

Semantic headings, native links and details, visible focus indicators, skip link, live status messages, pressed-state filters, keyboard-operable controls, native modal focus management and Escape close. The CSS honors reduced-motion preferences. Core content remains in HTML. Case-study explorers are explanations, not live inference endpoints. No external icon/font fetches; SVG icons avoid OS-specific emoji rendering. Image dimensions reduce layout shift and offscreen imagery is lazy-loaded.

## Ownership

Portrait and supplied project artifacts remain the owner’s materials. Research is attributed as co-authored work. No stock testimonials, speculative achievements, invented dashboard screenshots, or production-ready ML claims are included. See `CONTENT_NOTES.md` and `QA_REPORT.md`.

## Follow-up usability improvements

Direct hero contact links, a native case-study picker, larger body text and mobile controls, dashboard zoom (100–250%), and a no-JavaScript navigation fallback. Updated browser checks are documented in `QA_REPORT.md`.

## Report and motion update

The customer dashboard is the owner’s original Power BI screenshot, shown directly on the homepage and case study, with an optional image-zoom dialog. The alternate HTML dashboard has been removed at the owner’s request. True Power BI interaction needs the report’s published embed URL; none is configured. No fake filters are overlaid on the image.

RAG uses two crossed elliptical SVG tracks with two opposite labels on each. A cycle lasts 12 seconds, versus 24 seconds in the previous version; hover or focus pauses it. AML hover activates a moving scan beam, crosshair and pulse around the same illustrative rare signal. Mesh hover activates sequential radio waves, highlights the devices and speeds up the relay packet. These interactions also respond to keyboard focus. Reduced-motion preferences disable the motion.

The enhanced portrait remains in `dist/assets/portrait-enhanced.webp`, and its original is preserved in `data/portrait-original.jpg`.
