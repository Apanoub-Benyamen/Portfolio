# Content provenance and editorial decisions

Content was rebuilt from the supplied `WORK_Portfolio_Redesign_Handoff(1).zip`: its five existing project pages, homepage, handoff brief, original Power BI dashboard, customer presentation, and reference CV. The separate original JPEG was the initial portrait. At the owner’s request, the displayed portrait is now an AI-enhanced restoration; the original remains in data/portrait-original.jpg. Restoration may reconstruct fine details and is not a new camera capture.

## Claims retained

| Area | Source-grounded content |
| --- | --- |
| Customer behavior | 3,900 purchase records, $233,081 recorded revenue, $59.76 average purchase, 73% non-subscribed, $59.49 vs $59.87 average purchase, 37 imputed ratings, 3,116 records meeting the project's loyalty rule |
| AML | Approximately 9.5M transactions, 9,873 positive cases, 0.104% rounded positive rate, potentially leaking `Laundering_type` feature |
| Enterprise RAG | Offline retrieval, reranking and local generation; 4.29/5 mean pilot rating, explicitly not accuracy or an organization-wide efficiency measure |
| NLP | 10,000 reviews; VADER, TF-IDF and five traditional models, LSTM and bidirectional LSTM; rating-derived targets and evaluation limitations |
| Semantic mesh | Co-authored ITC 2026 research; 236 images, controlled device-payload test, 250-node mesh simulation; research-stage limitations |
| CARMA | 24 to 4 clicks, 40–50 seconds to 5–8 seconds, 15-minute SLA; source CV |
| Education | USM M.Sc. 2026, 3.87/4.0; Ain Shams B.B.A. 2022, Very Good; source CV |
| Contact | Email and WhatsApp number from supplied CV; GitHub and LinkedIn from handoff |

## Deliberate omissions and scope

- The CV is labeled an older reference. It is not offered as a current downloadable CV.
- CARMA dates use the non-conflicting year range 2023–2025 rather than an uncertain final month.
- No IELTS score is displayed. No unverified ministerial approval, public launch, operational savings estimate, or private IMC dashboard is shown.
- The additional 5DVR internship, AWS certification, and newer claims from conversation memory were not added without this attachment's supporting content.
- The original Power BI screenshot is the displayed dashboard. The alternate data-driven HTML dashboard was removed at the owner’s request. The AML dot field, RAG diagram, sentiment illustration, and mesh diagram are labeled conceptual.
- AML's 99.896% all-negative accuracy is the arithmetic complement of the supplied rounded positive rate, explicitly described as an illustrative calculation rather than a model result.
- No new independent audit of research notebooks or employment records was performed. The supplied project summaries and CV are the source of the personal claims.
- Source repository URLs are preserved exactly. The live GitHub repositories were not changed. The customer CSV was read to implement the interactive dashboard.
- Cairo coordinates refer to the city center as a design cue, not a home address or precise user location.

## Design

Warm ivory, charcoal, rust orange and quiet sage surfaces. Large editorial headlines pair a sans-serif with restrained serif italics. Motion supports navigation and comprehension: reveal transitions, diagram motion, focus/hover feedback, animated comparison bars, and a reading-progress indicator. Reduced-motion support is built in.

## Original dashboard presentation

The owner requested the same Power BI report inline, with a static fallback acceptable. The supplied screenshot remains unchanged. There is no verified Power BI embed URL in the site. The alternate HTML dashboard and its generated data renderer are removed. No interaction is claimed for filters inside the screenshot. The original PDF presentation and optional image enlargement remain available.

## Portrait enhancement

Built-in image generation tool; identity-preserve edit. Prompt: restore and upscale the exact supplied real portrait; improve clarity, fine detail and natural sharpness, reduce blur/JPEG artifacts, gently correct exposure and white balance; preserve identity, face geometry, expression, pose, clothing, lanyard, podium, flags and composition; no beautification, new background, invented text or cropping. Output converted to WebP for delivery. Source: data/portrait-original.jpg. Display asset: dist/assets/portrait-enhanced.webp (1086 × 1448).
