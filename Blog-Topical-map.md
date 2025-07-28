# 🗺️ Windows Bishop’s Stortford — Topical Content & SEO Map (2025-2026)

> Goal: Dominate organic search for all queries related to window installation, replacement, and repair **in Bishop’s Stortford** while satisfying Google’s EEAT guidelines and delivering genuine value to local homeowners.

---

## 1. Author Bio for EEAT  
Embed on every article footer & `/about` page.

```html
<!-- Structured data snippet for Author (insert in <script type="application/ld+json">) -->
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Oliver Greene",
  "description": "38-year veteran of the UK window industry; founder of Windows Bishop’s Stortford helping homeowners find vetted local installers.",
  "jobTitle": "Managing Director & Industry Expert",
  "worksFor": {
    "@type": "Organization",
    "name": "Windows Bishop’s Stortford"
  },
  "knowsAbout": [
    "Window installation",
    "Double glazing",
    "Energy efficiency",
    "Building regulations Part L",
    "FENSA certification"
  ],
  "url": "https://windowsbishopsstortford.com/about-oliver-greene"
}
```

---

## 2. High-Level Site Architecture

- **Homepage** → Service pages → Pillar hubs → Cluster posts → Supporting/FAQ posts
- Breadcrumbs enabled with `BreadcrumbList` schema.
- Only one click from homepage to any pillar; ≤3 clicks to any supporting post.
- Static `/sitemap.xml` auto-generated via Astro build.

---

## 3. Pillar / Cluster / Supporting Topic Map

| Pillar Hub | URL Slug | Core Intent | Primary Keywords | Cluster Topics (H2 pages) | Supporting Articles (blog) |
|------------|----------|-------------|------------------|---------------------------|----------------------------|
| **1. Window Installation & Replacement** | `/window-installation-bishops-stortford` | Commercial & residential installation services | windows Bishop’s Stortford, window installers Bishop’s Stortford | • Double vs Triple Glazing  
• FENSA & Building Regs  
• Installation Process  | – *How Much Does Window Installation Cost in Bishop’s Stortford?* (`/blog/window-installation-cost-bishops-stortford`)  
– *Timeline: From Quote to Completed Fit*  
– *Common Installation Mistakes & How We Avoid Them*  |
| **2. Window Types & Materials** | `/window-types` | Educate on style & material choices | casement windows, sash windows, uPVC vs aluminium | • Casement Windows Guide  
• Sash & Heritage Styles  
• uPVC vs Aluminium vs Timber | – *Pros & Cons of uPVC Windows for Period Homes*  
– *Best Windows for Noise Reduction in Bishop’s Stortford*  
– *Timber Window Maintenance Checklist* |
| **3. Energy Efficiency & Regulations** | `/energy-efficient-windows` | Savings, U-values, Part L | energy efficient windows, double glazing savings | • Understanding U-Values  
• Low-E Coatings  
• Government Grants & VAT | – *How Double Glazing Lowers Energy Bills in Bishop’s Stortford (Case Study)*  
– *Part L Compliance Explained for Homeowners*  
– *Grant Schemes 2025: Are You Eligible?* |
| **4. Repairs & Maintenance** | `/window-repair-bishops-stortford` | Repair services | window repair Bishop’s Stortford, misted units | • Misted Double Glazing  
• Hardware Replacement  
• Emergency Board-Up | – *DIY vs Professional Window Repair*  
– *Why Windows Steam Up & How to Fix It*  
– *Security Upgrades: Locks & Restrictors* |
| **5. Costs & Financing** | `/window-costs-finance` | Pricing transparency & finance options | window prices Bishop’s Stortford, window finance | • Average Costs by Material  
• Finance Plans  
• Quote Checklist | – *Zero-Deposit Finance: What’s the Catch?*  
– *Hidden Costs to Watch Out For*  
– *How to Compare Installation Quotes* |

### Internal Linking Blueprint

1. Each **supporting article** links up to its cluster page (exact-match anchor) and laterally to ≥2 other related supporting posts (LSI anchors).  
2. Cluster pages link back to pillar hub (bread-crumb style) and down to all child posts.  
3. Pillar hubs cross-link to each other where relevant via contextual blocks (e.g., Installation ↔ Costs, Energy Efficiency).  
4. Use *prospective* anchor text variations: “window installation Bishop’s Stortford”, “installing windows locally”, etc.  
5. All pages link to **Contact / Quote** CTA component with `rel="nofollow"` removed (passes juice).

---

## 4. On-Page SEO Checklist (Apply to Every Post)

- Title length ≤ 60 chars, primary keyword first.
- Meta description ≤ 155 chars, includes city & USP.
- H1 contains keyword + Bishop’s Stortford.
- First 100 words mention main keyword + semantic variation.
- Schema:
  - `Article` or `BlogPosting` with `mainEntityOfPage` ↔ `WebPage`.
  - `LocalBusiness` schema in site footer.
  - `FAQPage` blocks for ≥3 FAQs per article.
- Image optimisation: descriptive alt text incl. location, WebP format, width/height attributes set.
- Outbound links: authoritative UK gov/building regs, energy trust, etc.
- Internal links per blueprint.
- CTA component above the fold and at bottom.

---

## 5. Technical SEO Enhancements

| Task | Tool/Implementation | Owner |
|------|--------------------|--------|
| Core Web Vitals monitoring | Google Lighthouse CI via GitHub Action | DevOps |
| Lazy-load non-critical JS (Google Maps) | Astro island hydration | Front-end |
| BreadcrumbList schema | Astro layout component | Front-end |
| XML & HTML sitemap | `astro-sitemap` plugin | DevOps |
| robots.txt rules | Allow all + disallow staging paths | DevOps |
| HTTPS & HTTP/2 | Vercel auto | Infra |
| Structured data testing | Search Console & Rich Results Test | SEO |

---

## 6. Content Calendar (First 90 Days)

| Week | Post Title (supporting) | Target KW | Notes |
|------|-------------------------|-----------|-------|
| 1 | How Much Does Window Installation Cost in Bishop’s Stortford? | window installation cost Bishop’s Stortford | Cornerstone for Cost cluster |
| 2 | Pros & Cons of uPVC Windows for Period Homes | uPVC windows Bishop’s Stortford | Link to Types pillar |
| 3 | How Double Glazing Lowers Energy Bills in Bishop’s Stortford | double glazing savings Bishop’s Stortford | Case study with local data |
| 4 | DIY vs Professional Window Repair in Bishop’s Stortford | window repair DIY Bishop’s Stortford | Cross-link to Repair pillar |
| 5 | Part L Compliance Explained for Homeowners | Part L windows | Include gov references |
| 6 | Timeline: From Quote to Completed Fit | window installation timeline | Funnel to Contact |
| 7 | Best Windows for Noise Reduction in Bishop’s Stortford | noise reduction windows | Link to Types & Energy pillars |
| 8 | Grant Schemes 2025: Are You Eligible? | window grants 2025 UK | Authority & backlinks |
| 9 | Hidden Costs to Watch Out For | hidden window costs | Internal link to Cost cluster |
| 10 | Security Upgrades: Locks & Restrictors | window security Bishop’s Stortford | Link to Repair pillar |

---

## 7. Measurement & KPIs

- Organic sessions to blog: +1,000 within 6 months.
- Top 3 rank for “windows Bishop’s Stortford” main keyword.
- 5% form conversion from blog traffic.
- Gain 20+ referring domains via digital PR.

---

> **Next Steps**: Implement `Layout.astro` upgrades for schema & breadcrumbs, generate cluster hub pages, and begin Week 1 content production. 