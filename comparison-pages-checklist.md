# Comparison Landing Pages – Comprehensive Implementation Checklist ✅

> Purpose: Build 14 high-intent "X vs Y" comparison pages that educate visitors, answer bottom-funnel questions and drive quotation enquiries while preserving the existing brand design, SEO integrity and site performance.

---

## 1. Project Preparation
1.1 **Slug strategy** – Prefer short, share-friendly slugs `/compare/upvc-vs-aluminium/` etc.  
    • Create `src/pages/compare/` route folder.  
    • If using longer location slugs, add `<link rel="canonical">` pointing to the short version.  
1.2 **Navigation** – Add **“Comparisons”** (or “Compare”) menu item linking to `/compare` hub in both desktop & mobile headers/footers.  
1.3 **Branching** – Open semantic release branch **`feat/comparisons-v1`** (future hot-fixes can branch from this tag).  
1.4 Create `/compare/index.astro` hub page (ItemList schema – see §7).

## 2. Research & Keyword Validation
2.1 Confirm exact-match primary keyword incl. *“Bishop’s Stortford”*.  
2.2 Gather monthly search volume, competition & SERP intent for each comparison.  
2.3 **Label search intent** (informational / commercial / transactional) in tracking sheet to keep copy on-point.  
2.4 Capture **People-Also-Ask (PAA)** questions → shortlist 2-3 per page for FAQ schema (quick win for long-tail).  
2.5 Identify 3–5 closely-related secondary keywords per page.  
2.6 Benchmark top 5 competing pages (length, headings, schema, links).

## 3. Content Blueprint (per page)
| # | Section | Requirements |
|---|---------|--------------|
| 1 | **Hero** | Localised H1 ("uPVC vs Timber Windows in Bishop’s Stortford") + sub-heading, CTA button (see table). |
| 2 | **Jump-to TOC** (desktop) | Sticky mini ToC linking to each section (`scroll-margin-top` applied). |
| 3 | **Quick Spec Table** | Side-by-side features (Price, U-value, Lifespan, Aesthetics, Maintenance). |
| 4 | **Benefits Breakdown** | 3-column icons – who should choose which & why. |
| 5 | **Price / ROI Analysis** | Chart or table **+ lightweight ROI calculator component** (hydrated only). |
| 6 | **Noise & Energy Performance** | Data-driven bullet points. |
| 7 | **Local Planning Considerations** | Bishop’s Stortford / EHDC guidance. |
| 8 | **Case Study / Testimonial** | Real customer example (150–200 words). |
| 9 | **FAQ Accordion** | 4–6 Q&A (<60 words) incl. PAA; `FAQPage` schema. |
|10 | **Related Services** | Link to Repairs, EE Windows, Finance pages. |
|11 | **Related Guides** | Pull 2–3 blog posts automatically. |
|12 | **Author & Reviewer Blurb** | Headshot, credentials, `author` & `reviewedBy` schema. |
|13 | **Sticky CTA Bar (mobile)** | Matches CTA copy. |
|14 | **Contact Form** | Reuse `ContactForm.astro`. |

## 4. Design & UX
4.1 Reuse home-page typography & palette (`text-green-800`, `.btn-primary`).  
4.2 Use existing `card` & `card-hover` for tables / feature blocks.  
4.3 Optimise hero background with relevant WebP & `<picture>`.  
4.4 Apply **`content-visibility:auto`** to long FAQ accordions to improve INP.  
4.5 Add `scroll-margin-top` to every section ID so anchor links offset fixed header.  
4.6 WCAG AA contrast on all new elements.

## 5. Development Tasks
5.1 **`ComparisonLayout.astro`** – extends `Layout.astro`, auto-generates `FAQPage` & `BreadcrumbList` JSON-LD from front-matter.  
5.2 Optionally enable **MDX** for easier table / FAQ editing by non-devs.  
5.3 Create 14 comparison `.astro` (or `.mdx`) files with short slugs in `/compare/`.  
5.4 Implement lightweight ROI calculator component (partial hydration only).  
5.5 Update global nav to include hub link.  
5.6 Build `/compare` hub page listing all comparisons (grid + ItemList schema).

## 6. Internal Linking Strategy
6.1 From each comparison, link to both material landing pages (e.g. uPVC page, Aluminium page).  
6.2 Create **DynamicRelatedComparisons** component: auto-suggest pages sharing at least one material (uPVC, Aluminium etc.).  
6.3 Update existing window-type pages with “Popular Alternatives” links back to relevant comparisons.  
6.4 From relevant blog posts, add **Speakable** markup snippets linking back.  
6.5 Maintain crawl depth ≤3 with reciprocal links.

## 7. SEO & Structured Data
7.1 Meta Title (~60 chars): "uPVC vs Aluminium Windows Bishop’s Stortford | Which Wins?"  
7.2 Meta Description (~155 chars) with decision help + CTA.  
7.3 Self-referencing canonical (short slug if using canonical).  
7.4 OpenGraph & Twitter tags.  
7.5 **WebPage schema** with `about` → `Product` references ("uPVC Window").  
7.6 `FAQPage` + `BreadcrumbList` JSON-LD (automatic via layout).  
7.7 **SpeakableSpecification** (2–3 key answers).  
7.8 `ItemList` schema on `/compare` hub.  
7.9 Image `alt` tags with keyword + location.

## 8. Performance Optimisation
8.1 Compress all new images to WebP ≤100 KB.  
8.2 Lazy-load below-fold images.  
8.3 Reuse existing Tailwind classes to avoid CSS bloat.  
8.4 Run Lighthouse – Performance ≥90 mobile.

## 9. Quality Assurance
9.1 Run `npm run build` & resolve TS/Tailwind errors.  
9.2 Cross-browser test (Chrome, Safari, Edge).  
9.3 Responsive test (375px, 768px, 1440px).  
9.4 Validate schema via Rich Results Test.  
9.5 Check broken links with `npm run check-links`.  
9.6 Validate canonical & hreflang where applicable.

## 10. Launch & Post-Launch
10.1 Merge PR ➜ `main` → deploy.  
10.2 Verify XML sitemap auto-updates (run `astro build`).  
10.3 Submit new URLs in Google Search Console.  
10.4 Monitor index coverage & performance (GSC & GA4).  
10.5 A/B test CTA copy & calculator usage.

---

### Deliverables Checklist (per page)
- [ ] Content written & peer-reviewed (intent aligned)
- [ ] All 14 sections implemented
- [ ] Design matches brand styles & UX tweaks applied
- [ ] Schema markup passes validation
- [ ] Internal & dynamic links added
- [ ] Images optimised & lazy-loaded
- [ ] Meta tags & canonical optimised
- [ ] Lighthouse ≥90 mobile

### Global Deliverables
- [ ] `/compare` hub live & linked in nav
- [ ] 14 comparison URLs present in XML sitemap
- [ ] Dynamic related comparisons component operational
- [ ] No linter or build errors
- [ ] Git PR merged & deployed

> **Workflow:** Finish, QA & commit each comparison **one by one** to maintain quality, then ship the hub and nav update.
