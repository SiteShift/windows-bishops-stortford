# Window Types Landing Pages – Comprehensive Implementation Checklist

This checklist breaks down every task required to design, build, launch, and promote the new "window-type" landing pages so they rank and convert as effectively as possible.  
Tick off each item as you complete it.

---

## 1. Project Preparation

- [ ] **Confirm page list & slugs**  
  - [ ] `/upvc-windows-bishops-stortford`  
  - [ ] `/aluminium-windows-bishops-stortford`  
  - [ ] `/timber-windows-bishops-stortford`  
  - [ ] `/casement-windows-bishops-stortford`  
  - [ ] `/sash-windows-bishops-stortford`  
  - [ ] Secondary: Tilt & Turn, Bay & Bow, Flush Casement, Triple Glazing, Secondary Glazing, Heritage & Conservation


## 2. Research & Copywriting

- [ ] Refresh keyword research for each window type (primary + 3–5 secondary keywords)
- [ ] Compile competitor SERP cheatsheet (Title, H1, FAQs, offers)
- [ ] Draft unique, benefit-driven copy for each of the 15 blueprint sections (see §4)
- [ ] Verify local relevance (use Bishop’s Stortford / CM23, nearby villages, East Herts where natural)
- [ ] Run plagiarism & readability checks (Grammarly, Hemingway)

## 3. Design & Assets

- [ ] Source / produce high-resolution photos for each window material & style
- [ ] Create vector icons for the Benefits section (Security, Energy, Warranty)
- [ ] Build price tables & spec grids in Figma / design tool for dev hand-off
- [ ] Prepare review screenshots or pull from Trustpilot / Google profiles
- [ ] Optimise all imagery (WebP, ≤150 kB, descriptive alt text)

## 4. Page Structure – 15-Section Blueprint (apply to every core page)

- [ ] **Hero** – Localised H1 + short USP sub-heading + primary CTA button
- [ ] **Quick-spec grid** – U-value, frame depth, indicative price “From £…”, finance badge
- [ ] **Local authority note** – 1–2 sentence planning guidance specific to Bishop’s Stortford / East Herts
- [ ] **Benefits section** – 3-column icons & copy (Security / Energy savings / Warranty)
- [ ] **Price table** – Small | Medium | Large window + finance example row
- [ ] **Process timeline** – Survey → Manufacture → Install → FENSA cert (4-step visual)
- [ ] **Review carousel** – pull 4–5 recent reviews mentioning the product type
- [ ] **FAQ accordion** – 4–6 questions (<60 words each). Add FAQPage & Question schema
- [ ] **Related services** – Internal links to Repairs, Emergency glazing, etc.
- [ ] **Related guides** – Dynamically list 3–4 relevant blog posts
- [ ] **Sticky CTA bar (mobile)** – "Get a quote" button anchored to form
- [ ] **LocalBusiness schema** – hasOfferCatalog item pointing back to the same URL
- [ ] **Image schema** – mark product photos with ImageObject & geo tags
- [ ] **Breadcrumbs** – Home → Windows → *Window Type* (BreadcrumbList schema)
- [ ] **Footer CTA & contact details** – reinforce trust signals & NAP consistency

## 5. Development (Astro + Tailwind)

- [ ] Create new `.astro` page components under `src/pages/` with matching slug names
- [ ] Re-use existing `Layout.astro` & `BlogLayout.astro` where possible; otherwise build `WindowTypeLayout.astro`
- [ ] Add 15-section blueprint as modular components for re-use across pages
- [ ] Implement dynamic import for Related guides (use Content Collections API)
- [ ] Add structured-data `<script type="application/ld+json">` blocks
- [ ] Include meta title (~60 chars) & description (~155 chars) with primary keyword first
- [ ] Compress & lazy-load images (`loading="lazy"`, `decoding="async"`)
- [ ] Set canonical URL to self & ensure noindex tags are **not** present

## 6. Internal Linking Strategy

- [ ] **Hub page** – build/upgrade a "Windows Types & Materials Guide" hub under `/window-types`  
  - [ ] Grid-link each core page with **exact-match** anchor (e.g. "uPVC Windows Bishop’s Stortford")
- [ ] **Cross-links** – In every core page add “Popular alternatives” subsection linking to the other 4 core pages
- [ ] **Blog to Service** – Audit existing blog posts & insert contextual links up to the relevant landing page
- [ ] **Service to Blog** – Within Related guides component, surface 3–4 blog articles
- [ ] **Header / Footer nav** – Add dropdown or mega-menu links under “Windows”
- [ ] **Sitemap** – Trigger Astro build to auto-generate or update XML sitemap

## 7. Technical SEO & Performance

- [ ] Validate pages in Google Lighthouse (≥90 performance score on mobile)
- [ ] Ensure CLS < 0.1 & LCP < 2.5 s
- [ ] Minify CSS/JS bundles; tree-shake unused Tailwind classes
- [ ] Add `preload` for hero image & primary font files
- [ ] Check robots.txt allows crawling of new URLs
- [ ] Submit new sitemap in Google Search Console

