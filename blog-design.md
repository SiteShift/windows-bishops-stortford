# 📝 Astro Blog Implementation Checklist

> Purpose: Provide a step-by-step technical guide to add a fully-featured, SEO-optimised blog to the Windows Bishop’s Stortford Astro site.

---

## 1. Directory / File Map

```
src/
├── pages/
│   ├── blog/
│   │   ├── index.astro            # Blog home / listing
│   │   ├── [...slug].astro        # Dynamic individual post
│   │   └── tag/
│   │       └── [...tag].astro     # Tag archive (optional)
│   └── rss.xml.ts                # RSS feed generation
├── layouts/
│   └── BlogLayout.astro          # Layout wrapper w/ breadcrumbs & schema
├── components/
│   ├── BlogCard.astro            # Post preview card
│   ├── HeadSEO.astro             # Reusable <head> w/ meta & schema
│   └── Breadcrumbs.astro         # Breadcrumb markup component
└── content/
    └── blog/*.mdx                # Markdown/MDX content files
```

---

## 2. Content Authoring Workflow

1. **Write Post**: Create `src/content/blog/yyyymmdd-slug.mdx` using front-matter:
   ```yaml
   ---
   title: "How Much Does Window Installation Cost in Bishop’s Stortford?"
   description: "Detailed local pricing guide for 2025."
   publishDate: "2025-08-04"
   tags: [costs, installation]
   heroImage: "/images/blog/window-cost.webp"
   ogImage: "/images/og/window-cost.jpg"
   author: "Oliver Greene"
   draft: false
   ---
   ```
2. **MDX Enhancements**: Use `import` for React/Preact components, callouts, YouTube embeds.
3. **Commit** → GitHub Actions run build & Lighthouse CI.

---

## 3. Build-Time Logic

| Area | Implementation | Astro API |
|------|----------------|-----------|
| **Blog Listing** | In `blog/index.astro`, use `import.meta.glob('../content/blog/*.mdx')` to fetch posts; sort by `publishDate`; paginate (e.g., 10 per page). | `Astro.fetchContent` or `import.meta.globEager` |
| **Post Pages** | Dynamic route `[...slug].astro` reads MDX front-matter; pass into `BlogLayout`. | `getStaticPaths()` |
| **Tag Pages** | Collect unique tags; generate paths `/blog/tag/{tag}`. | `getStaticPaths()` |
| **RSS Feed** | `src/pages/rss.xml.ts` exports `GET` using `@astrojs/rss`. | `@astrojs/rss` |
| **Sitemap** | Add `@astrojs/sitemap` plugin; configure `site` in `astro.config.mjs`. | Plugin |
| **Breadcrumbs** | `<Breadcrumbs>` component returns `<nav>` + `BreadcrumbList` JSON-LD via `set:html`. | Astro component |
| **Schema Markup** | `BlogPosting` on posts, `CollectionPage` on listing. Inject via `<HeadSEO>`. | Component |

---

## 4. On-Page SEO Requirements (Per Post)

- Unique `<title>` & `<meta name="description">`.
- Canonical URL using `Astro.url` helper.
- `BlogPosting` JSON-LD with:
  • `headline`, `description`, `datePublished`, `author`, `image`, `keywords`, `publisher` (LocalBusiness).  
- Visible publish date + "Last updated" if modified.
- H1 = title, logical heading hierarchy (H2/H3).
- Min 1 internal link up to cluster page, 2 lateral internal links, 1 external authoritative link.
- Alt text with keyword & location.

---

## 5. Accessibility & UX

- Keyboard-navigable card links (`<article>` wrapper + `aria-label`).
- Hero images: `decoding="async"` + `loading="lazy"` on below-fold images.
- Prefetch next page with `<link rel="prefetch">` inside intersection observer (optional).

---

## 6. Pagination Strategy

```js
const PAGE_SIZE = 10;
const allPosts = Object.values(import.meta.glob("../../content/blog/*.mdx", { eager: true }));
const totalPages = Math.ceil(allPosts.length / PAGE_SIZE);
```
Generate `/blog/`, `/blog/2`, `/blog/3`, etc. Use `rel="prev"/"next"` link tags.

---

## 7. Performance / Core Web Vitals

- Transform images to WebP/AVIF with `@astrojs/image`.
- Remove unused JavaScript; blog pages should be static by default.
- Inline critical CSS (Tailwind’s `@layer base` + Astro’s `style` directive).

---

## 8. DevOps & CI

1. **Pre-commit**: Lint Markdown (`markdownlint`), spellcheck.
2. **CI Build**: `npm run build && npm run lighthouse-ci`.
3. **Deploy**: Vercel; set `CACHE_CONTROL` headers for images.
4. **Monitoring**: Track 404s via Vercel analytics.

---

## 9. Migration / Back-Compatibility

- Place blog under `/blog/` to avoid conflict with existing static pages.
- 301 redirect any legacy URLs via `vercel.json`.

---

## 10. Launch Readiness Checklist ✅

- [ ] `astro.config.mjs` has `site: "https://windowsbishopsstortford.com"`.
- [ ] Install & configure `@astrojs/sitemap`, `@astrojs/rss`, `@astrojs/mdx`.
- [ ] Create `BlogLayout.astro` with breadcrumb + schema + CTA.
- [ ] Build passes without warnings.
- [ ] Validate structured data in Google Rich Results Test.
- [ ] Test pagination, tag pages, 404.
- [ ] Submit updated `/sitemap.xml` to Search Console.
- [ ] Request indexing for first 5 posts.

---

> After completing the above, proceed with the 90-day content calendar in `Blog-Topical-map.md`. 