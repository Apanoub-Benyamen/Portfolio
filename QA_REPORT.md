# Verification report

Date: 8 November 2026 (Africa/Cairo).

## Verified in the browser

- Desktop Chromium viewport: 1363 × 936.
- Responsive layout checked in same-origin browser frames at 320, 390, 768, 1024 and 1280 pixels wide (frame height 844). Desktop scrollbars reduce the usable width by 15 pixels. These are responsive browser checks, not physical-device certification.
- Homepage showed no horizontal document overflow at the checked widths.
- All five case-study pages were checked at the narrow 320-pixel frame. An intrinsic-width issue in the case-study illustrations was found and corrected; each final document width matched the available 305-pixel content viewport.
- Mobile menu opens, updates its expanded state, and closes after selecting a destination.
- Project filters return 5 total / 3 analytics / 4 AI & ML / 1 research projects.
- Dashboard dialog opens and closes with Escape, restoring focus to its trigger.
- Email-copy button reports successful copy. The cloud-browser clipboard-reading API did not expose the OS clipboard text; manual-copy fallback and visible address are provided.
- CARMA experience disclosure expands and reveals the workflow results.
- Customer comparison switches from 27% / 73% to $59.49 / $59.87 on both desktop and mobile.
- AML, RAG, NLP and mesh method controls update their explanatory panels correctly.
- Project-to-project navigation works through all five case studies.
- All homepage images loaded with nonzero intrinsic dimensions.
- No site-origin browser errors were observed in the captured console logs. Unrelated browser-extension diagnostics were excluded.
- Actual browser screenshots were inspected for the desktop, mobile, tablet and case-study layouts. A non-personal project-section screenshot is included in `previews/`.

## Programmatic checks

`python check.py` validates six pages, local destinations and fragment IDs, image alternatives and dimensions, unique IDs, page titles and descriptions, `.nojekyll`, and removal of internal test fixtures.

`node --check dist/assets/app.js` validates JavaScript syntax.

## Scope

- No Safari/Firefox or physical iOS/Android device testing, screen-reader audit, Lighthouse score, or network-throttled performance claim is made.
- Reduced-motion behavior is implemented with `prefers-reduced-motion`; an OS-level emulation test was not performed.
- External contact and repository URLs were preserved and inspected in the generated markup. No message was sent and no external account was modified. No claim is made that a repository's current contents were independently audited.
- The original Power BI screenshot is retained alongside the new local-data interactive web dashboard; it is not an embedded Power BI report.
- The shipped static build is ready for GitHub Pages. Publishing to the user's GitHub account was not performed in this task.

## Follow-up refinement — 8 November 2026

- Added four direct contact links to the hero and a native project picker on every case-study page.
- Increased body-text size, tag readability, and mobile control sizes.
- Added dashboard image zoom from 100% to 250%, with reset and disabled bounds.
- Browser-tested zoom at 150%, reset to 100%, and the 250% maximum; Escape closes the dialog.
- Verified project-picker navigation, current-page indication, and Escape dismissal.
- Rechecked homepage widths 320 / 390 / 768 / 1024 / 1280 and all case-study pages at width 320; no horizontal document overflow.
- Used a scripts-disabled sandboxed iframe to verify that mobile navigation remains available with JavaScript disabled.
- Re-ran static local-reference validation and JavaScript syntax checks.

## Interactive dashboard and visual revision — 8 November 2026

- Removed the floating portrait card and integrated the enhanced WebP image (197 KB); original retained outside the deploy directory.
- Verified original CSV: 3,900 records, $233,081 revenue, 37 missing ratings; imputed category medians.
- Browser baseline matched $59.76 mean purchase and 3.75/5 review. Clothing + subscription matched independently computed 457 records / $27,321.
- Tested four filters, revenue/record toggle, clickable bars (Clothing: 1,737), reset and empty state (Female + subscribed: zero records; no NaN). Mobile season Winter: 971 records.
- Dashboard modal opens and closes with Escape. Original screenshot and zoom controls retained.
- Verified RAG running rotation and hover/focus pause on all eight rotating elements; labels remain upright. Reduced-motion CSS uses static phase positions; OS preference emulation was not performed.
- Inspected desktop and mobile graphics; 250 background nodes are conceptual, not live simulation telemetry.
- Home, customer, RAG and mesh pages tested at 320, 390, 768 and 1280 CSS-pixel frames: no horizontal document overflow (scrollWidth equals clientWidth). Desktop browser view also reviewed at 1363 px.
- Updated headlines in home cards and case studies.
- Static route and asset validation passed; JavaScript syntax validated. No physical-device or cross-browser audit claimed.

## Final interaction refinement — 9 November 2026

This section supersedes the prior alternate-dashboard implementation.

- Restored original Power BI image-only display; no alternate dashboard, renderer script, generated browser dataset or misleading interaction label remains.
- Verified original image enlargement, 125% zoom, and Escape close before the pause in work; same code recovered and checked again statically.
- RAG: two particles per elliptical track, 12-second cycles, opposite phase positions. Browser-read particle centers satisfied the matching ellipse equations within 0.002 (polygonal interpolation). Labels remain upright. Focus paused all four particles.
- AML: browser observed scan beam at opacity 0 / paused before interaction, and scan beam plus signal pulse running with hover true after pointer interaction.
- Mesh: browser observed base packet duration 5 seconds, changing to 1.7 seconds on hover; all five sequential wave animations running.
- Home, RAG, mesh and AML checked in 320 / 390 / 768 / 1280 px frames: scrollWidth equals clientWidth. Narrow RAG labels enlarged after visual inspection.
- Reduced-motion CSS disables orbital, scanner, pulse and relay animations; no OS-level preference emulation claimed.
- The diagrams remain conceptual illustrations, not live inference or simulation results.
