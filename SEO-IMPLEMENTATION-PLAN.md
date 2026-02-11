# SEO & AI SEO Implementation Plan

## Full Audit Results & Actionable Optimisations

**Site:** windowsbishopsstortford.com
**Audit Date:** 2026-02-11
**Overall Score:** 8.2/10 — Excellent foundation, key gaps to close

---

## Executive Summary

The site has strong technical SEO fundamentals: comprehensive JSON-LD schema, proper heading hierarchy, good meta tags, mobile-first responsive design, and authoritative content (48 blog posts, 150+ FAQs). The main gaps are in **AI discoverability**, **missing schema types**, **Core Web Vitals micro-optimisations**, and **enhanced robots/meta directives**.

---

## Priority 1 — Critical (High Impact, Low Effort)

### 1.1 Create `llms.txt` for AI Crawlers
**File:** `public/llms.txt`
**Why:** AI search engines (ChatGPT, Perplexity, Gemini) look for `llms.txt` to understand site content. This is the single biggest AI SEO gap.
**Action:** Create `public/llms.txt` with business summary, services, key pages, and structured content index.

### 1.2 Enhance `robots.txt` with AI Bot Directives
**File:** `public/robots.txt`
**Why:** Current robots.txt is minimal (3 lines). Need explicit AI crawler permissions and enhanced directives.
**Action:** Add explicit `User-agent` rules for GPTBot, Google-Extended, Anthropic, PerplexityBot, etc. Add crawl-delay and additional sitemap references.

### 1.3 Upgrade Meta Robots Tag for Rich Snippets
**File:** `src/layouts/Layout.astro`
**Why:** Current `<meta name="robots" content="index, follow" />` doesn't enable max snippet/image previews. Google limits snippet size without explicit permission.
**Action:** Change to `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`

### 1.4 Create Custom 404 Page
**File:** `src/pages/404.astro`
**Why:** No custom 404 exists. Default Astro 404 provides zero SEO value — no internal links, no brand, no recovery path.
**Action:** Create branded 404 page with internal links to key pages, search suggestion, and CTA.

### 1.5 Fix Hardcoded "5 min read" in Related Posts
**File:** `src/layouts/BlogLayout.astro` (line 339)
**Why:** All related blog post cards show "5 min read" regardless of actual content length. Misleading to users and potentially to search engines.
**Action:** Use `post.data.readingTime` from frontmatter instead of hardcoded value.

---

## Priority 2 — High Impact Schema Additions

### 2.1 Add `sameAs` Social Profiles to Organization Schema
**File:** `src/pages/index.astro`
**Why:** Organization schema `sameAs` only points to own domain. Google Knowledge Panel requires social profile links. Currently: `"sameAs": ["https://www.windowsbishopsstortford.com"]`.
**Action:** Add Google Business Profile, Twitter, LinkedIn, and any other social URLs to the `sameAs` array.

### 2.2 Add Individual Review Schema to Testimonials
**File:** `src/pages/index.astro` or `src/pages/contact.astro`
**Why:** Site has 5 detailed testimonials with star ratings but only uses AggregateRating schema. Individual Review schema enables rich review snippets in search results.
**Action:** Add `Review` schema objects for each testimonial with author, rating, reviewBody, and datePublished.

### 2.3 Add ContactPage Schema
**File:** `src/pages/contact.astro`
**Why:** Contact page has no ContactPage schema. Google can display contact info directly in search results with proper schema.
**Action:** Add `ContactPage` and `ContactPoint` schema with phone, email, hours.

### 2.4 Add Service Schema to Window Type Pages
**Files:** `src/pages/upvc-windows-bishops-stortford.astro`, `aluminium-windows-bishops-stortford.astro`, `timber-windows-bishops-stortford.astro`, `casement-windows-bishops-stortford.astro`, `sash-windows-bishops-stortford.astro`
**Why:** Individual window type pages should have explicit `Service` schema with `priceSpecification` for rich results. Some pages may have partial implementation — needs audit and completion.
**Action:** Ensure each page has complete `Service` schema with provider, areaServed, offers, and priceSpecification.

---

## Priority 3 — Performance & Core Web Vitals

### 3.1 Add `width` and `height` to Key Images
**Files:** Multiple components and pages
**Why:** Images without explicit dimensions cause Cumulative Layout Shift (CLS). Astro's Image component can handle this but manual `<img>` tags need dimensions.
**Action:** Add `width` and `height` attributes to hero images, profile pictures, and card images across layouts.

### 3.2 Add DNS Prefetch for AdSense Domain
**File:** `src/layouts/Layout.astro`
**Why:** AdSense script was just added but no DNS prefetch exists for `pagead2.googlesyndication.com`. This delays ad loading.
**Action:** Add `<link rel="dns-prefetch" href="//pagead2.googlesyndication.com" />`.

### 3.3 Add `preconnect` for Critical Third-Party Origins
**File:** `src/layouts/Layout.astro`
**Why:** `dns-prefetch` only resolves DNS. `preconnect` also establishes TCP + TLS handshake, saving 100-200ms per resource.
**Action:** Add `<link rel="preconnect">` for googletagmanager.com and googlesyndication.com.

---

## Priority 4 — Blog & Content SEO Fixes

### 4.1 Add Open Graph `article:` Tags for Blog Posts
**File:** `src/layouts/Layout.astro` or `src/layouts/BlogLayout.astro`
**Why:** Blog posts use `og:type = "website"` instead of `"article"`. Missing `article:published_time`, `article:modified_time`, `article:author`, `article:section`, `article:tag`.
**Action:** Pass article metadata through Layout props and conditionally render article OG tags on blog pages.

### 4.2 Expand Short Meta Descriptions
**Files:** ~6 blog posts with descriptions under 150 characters
**Why:** Short descriptions get truncated or auto-generated by Google, losing control of SERP messaging.
**Action:** Identify and expand descriptions to 150-160 characters.

### 4.3 Add `dateModified` Support to Blog Schema
**File:** `src/layouts/BlogLayout.astro`
**Why:** `dateModified` currently mirrors `datePublished`. Google favours content with genuine update timestamps.
**Action:** Add optional `modifiedDate` frontmatter field; fall back to `publishDate` if not set.

---

## Priority 5 — AI SEO & Future-Proofing

### 5.1 Create `llms-full.txt` Comprehensive Content Index
**File:** `public/llms-full.txt`
**Why:** Extended version of llms.txt with full content inventory for AI systems that want deeper understanding.
**Action:** Create detailed content index with all page URLs, descriptions, and topic categories.

### 5.2 Add Structured Data Testing Annotations
**Why:** Ensure all schema passes Google Rich Results Test and Schema.org validator.
**Action:** Manual testing step — validate all schema types via Google's Rich Results Test tool.

### 5.3 Add `lang` and `dir` Attributes
**File:** `src/layouts/Layout.astro`
**Why:** `<html lang="en">` is present but missing `dir="ltr"`. Minor but good practice for accessibility and AI parsing.
**Action:** Add `dir="ltr"` to `<html>` tag.

---

## Implementation Checklist

| # | Task | File(s) | Priority | Status |
|---|------|---------|----------|--------|
| 1.1 | Create llms.txt | `public/llms.txt` | P1 | Done |
| 1.2 | Enhance robots.txt | `public/robots.txt` | P1 | Done |
| 1.3 | Upgrade meta robots | `src/layouts/Layout.astro` | P1 | Done |
| 1.4 | Create 404 page | `src/pages/404.astro` | P1 | Done |
| 1.5 | Fix hardcoded reading time | `src/layouts/BlogLayout.astro` | P1 | Done |
| 2.1 | Add sameAs social profiles | `src/pages/index.astro` | P2 | Done |
| 2.2 | Add Review schema | `src/pages/index.astro` | P2 | Done |
| 2.3 | Add ContactPage schema | `src/pages/contact.astro` | P2 | Already existed |
| 2.4 | Audit Service schema | Window type pages | P2 | Already existed |
| 3.1 | Add image dimensions | Multiple files | P3 | Deferred |
| 3.2 | DNS prefetch for AdSense | `src/layouts/Layout.astro` | P3 | Done |
| 3.3 | Add preconnect hints | `src/layouts/Layout.astro` | P3 | Done |
| 4.1 | OG article tags for blog | `src/layouts/Layout.astro` | P4 | Done |
| 4.2 | Expand short descriptions | 4 blog posts | P4 | Done |
| 4.3 | dateModified support | `src/layouts/BlogLayout.astro` | P4 | Done |
| 5.1 | Create llms-full.txt | `public/llms-full.txt` | P5 | Done |
| 5.2 | Schema validation | Manual testing | P5 | Manual |
| 5.3 | Add dir="ltr" | `src/layouts/Layout.astro` | P5 | Done |

---

## Audit Findings Reference

### What's Already Excellent
- LocalBusiness, FAQPage, BlogPosting, BreadcrumbList, Organization, Person, HowTo, ItemList schemas all implemented
- 48 blog posts with proper frontmatter and schema
- 150+ FAQs with structured data
- E-E-A-T signals: Oliver Greene (38yr expert), credentials, detailed author bios
- Speakable specification on comparison pages
- Semantic HTML throughout (article, section, nav, main, footer)
- Comprehensive ARIA labels and accessibility
- Google Analytics 4, Vercel Analytics, Speed Insights
- Static generation via Astro (optimal for SEO)
- PWA manifest configured
- Google Search Console verified
