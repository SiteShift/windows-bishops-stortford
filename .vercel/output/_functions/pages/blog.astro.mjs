/* empty css                                  */
import { _ as __vite_glob_0_14, a as __vite_glob_0_13, b as __vite_glob_0_12, c as __vite_glob_0_11, d as __vite_glob_0_10, e as __vite_glob_0_9, f as __vite_glob_0_8, g as __vite_glob_0_7, h as __vite_glob_0_6, i as __vite_glob_0_5, j as __vite_glob_0_4, k as __vite_glob_0_3, l as __vite_glob_0_2, m as __vite_glob_0_1, n as __vite_glob_0_0 } from '../chunks/zero-deposit-finance-whats-the-catch-bishops-stortford_Bbaivwos.mjs';
import { e as createAstro, c as createComponent, m as maybeRenderHead, f as addAttribute, a as renderTemplate, b as renderComponent, F as Fragment, r as renderScript } from '../chunks/astro/server_Ba8b9P2x.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BbRBOC0R.mjs';
import { s as siteData } from '../chunks/siteData_gIBrbVss.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://windowsbishopsstortford.com");
const $$BlogCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogCard;
  const { post } = Astro2.props;
  const slug = post.frontmatter.slug || post.url?.split("/").pop()?.replace(".md", "") || "untitled";
  const publishDate = new Date(post.frontmatter.publishDate);
  const formattedDate = publishDate.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const wordsPerMinute = 200;
  const descriptionWords = post.frontmatter.description ? post.frontmatter.description.split(" ").length : 50;
  const estimatedWordCount = descriptionWords * 15;
  const readingTime = Math.ceil(estimatedWordCount / wordsPerMinute);
  const primaryTag = post.frontmatter.tags?.[0];
  return renderTemplate`${maybeRenderHead()}<article class="card card-hover overflow-hidden group"> <a${addAttribute(`/blog/${slug}`, "href")} class="block"> <!-- Hero Image --> <div class="relative overflow-hidden bg-gray-200 h-48 md:h-56"> ${post.frontmatter.heroImage ? renderTemplate`<img${addAttribute(post.frontmatter.heroImage, "src")}${addAttribute(post.frontmatter.title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" decoding="async">` : renderTemplate`<div class="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center"> <svg class="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path> </svg> </div>`} <!-- Category Tag --> ${primaryTag && renderTemplate`<div class="absolute top-4 left-4"> <span class="service-tag bg-white text-green-700 shadow-lg"> ${primaryTag.charAt(0).toUpperCase() + primaryTag.slice(1)} </span> </div>`} <!-- Reading Time --> <div class="absolute top-4 right-4"> <div class="bg-black bg-opacity-60 text-white text-xs px-3 py-1 rounded-full"> ${readingTime} min read
</div> </div> </div> <!-- Content --> <div class="p-6"> <!-- Meta Information --> <div class="flex items-center text-sm text-gray-500 mb-3"> <div class="flex items-center"> <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> <time${addAttribute(post.frontmatter.publishDate, "datetime")}>${formattedDate}</time> </div> ${post.frontmatter.author && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <span class="mx-2">•</span> <div class="flex items-center"> <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path> </svg> <span>${post.frontmatter.author}</span> </div> ` })}`} </div> <!-- Title --> <h3 class="text-xl font-bold text-green-800 mb-3 leading-tight tracking-tight group-hover:text-green-600 transition-colors"> ${post.frontmatter.title} </h3> <!-- Description --> <p class="text-gray-600 leading-relaxed mb-4 line-clamp-2"> ${post.frontmatter.description} </p> <!-- Tags --> ${post.frontmatter.tags && post.frontmatter.tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 mb-4"> ${post.frontmatter.tags.slice(0, 3).map((tag) => renderTemplate`<span class="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"> ${tag.charAt(0).toUpperCase() + tag.slice(1)} </span>`)} ${post.frontmatter.tags.length > 3 && renderTemplate`<span class="text-xs text-gray-400 px-2 py-1">
+${post.frontmatter.tags.length - 3} more
</span>`} </div>`} <!-- Read More Link --> <div class="flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors group"> <span>Read Full Article</span> <svg class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </div> </div> </a> </article>`;
}, "/Users/max/Desktop/windowsbishopsstortford-website/src/components/BlogCard.astro", void 0);

const $$Astro = createAstro("https://windowsbishopsstortford.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const postModules = /* #__PURE__ */ Object.assign({"../../content/blog/best-windows-noise-reduction-bishops-stortford.md": __vite_glob_0_0,"../../content/blog/common-window-installation-mistakes-bishops-stortford.md": __vite_glob_0_1,"../../content/blog/diy-vs-professional-window-repair-bishops-stortford.md": __vite_glob_0_2,"../../content/blog/double-glazing-energy-bills-case-study-bishops-stortford.md": __vite_glob_0_3,"../../content/blog/grant-schemes-2025-eligibility-bishops-stortford.md": __vite_glob_0_4,"../../content/blog/hidden-window-installation-costs-bishops-stortford.md": __vite_glob_0_5,"../../content/blog/how-to-compare-window-installation-quotes-bishops-stortford.md": __vite_glob_0_6,"../../content/blog/part-l-compliance-explained-homeowners-bishops-stortford.md": __vite_glob_0_7,"../../content/blog/timber-window-maintenance-checklist-bishops-stortford.md": __vite_glob_0_8,"../../content/blog/upvc-windows-period-homes-bishops-stortford.md": __vite_glob_0_9,"../../content/blog/why-windows-steam-up-how-to-fix-bishops-stortford.md": __vite_glob_0_10,"../../content/blog/window-installation-cost-bishops-stortford.md": __vite_glob_0_11,"../../content/blog/window-installation-timeline-quote-to-completion-bishops-stortford.md": __vite_glob_0_12,"../../content/blog/window-security-upgrades-locks-restrictors-bishops-stortford.md": __vite_glob_0_13,"../../content/blog/zero-deposit-finance-whats-the-catch-bishops-stortford.md": __vite_glob_0_14});
  const allPosts = Object.values(postModules);
  const publishedPosts = allPosts.filter((post) => !post.frontmatter?.draft).sort((a, b) => new Date(b.frontmatter.publishDate).valueOf() - new Date(a.frontmatter.publishDate).valueOf());
  const currentPage = Number(Astro2.url.searchParams.get("page")) || 1;
  const postsPerPage = 12;
  const totalPosts = publishedPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = publishedPosts.slice(startIndex, endIndex);
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Windows Bishop's Stortford Blog",
    "description": "Expert advice on window installation, repairs, and energy efficiency in Bishop's Stortford",
    "url": `https://${siteData.site.domain}/blog`,
    "publisher": {
      "@type": "Organization",
      "name": siteData.business.name,
      "logo": `https://${siteData.site.domain}/images/windows-logo-cropped.svg`
    },
    "blogPost": paginatedPosts.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.frontmatter?.title || "",
      "description": post.frontmatter?.description || "",
      "url": `https://${siteData.site.domain}/blog/${post.frontmatter?.slug || post.url?.split("/").pop()?.replace(".md", "") || ""}`,
      "datePublished": post.frontmatter?.publishDate || "",
      "author": {
        "@type": "Person",
        "name": post.frontmatter?.author || "Oliver Greene"
      }
    }))
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `https://${siteData.site.domain}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `https://${siteData.site.domain}/blog`
      }
    ]
  };
  const schema = [blogSchema, breadcrumbSchema];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Windows Blog | Expert Advice from Bishop's Stortford Window Specialists", "description": "Expert window advice, installation guides, and local insights from Bishop's Stortford's trusted window specialists. Tips, costs, and maintenance guides.", "schema": schema }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative text-white overflow-hidden h-[60vh] md:h-[70vh] flex items-center" style="background-image: url('/images/windowsbishopsstortford-blogimages/Cream-aluminium-bay-windows_compressed-geotagged.webp'); background-size: cover; background-position: center; background-repeat: no-repeat;"> <!-- Dark overlay --> <div class="absolute inset-0 bg-black bg-opacity-70"></div> <div class="relative container-custom section-padding"> <div class="max-w-4xl"> <!-- Breadcrumbs --> <nav aria-label="Breadcrumb" class="mb-8"> <ol class="flex items-center space-x-2 text-sm text-green-200"> <li> <a href="/" class="hover:text-white transition-colors">Home</a> </li> <li class="text-green-300">/</li> <li class="text-white font-medium">Blog</li> </ol> </nav> <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tighter text-white">
Bishops Stortford Window Blog
</h1> <p class="text-xl lg:text-2xl mb-8 text-green-50 font-medium leading-relaxed max-w-3xl">
Professional insights, installation guides, and expert advice from Bishop's Stortford's window specialists
</p> <div class="flex items-center text-green-200"> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path> </svg> <span class="font-medium">${totalPosts} Articles</span> </div> </div> </div> </section>  <section class="section-padding bg-white"> <div class="container-custom"> <div class="flex items-center justify-between mb-12"> <div> <h2 class="text-3xl lg:text-4xl font-extrabold text-green-800 mb-2 tracking-tight">
Latest Articles
</h2> <p class="text-gray-600">
Page ${currentPage} of ${totalPages} • ${totalPosts} total articles
</p> </div> <!-- Sort/Filter options (placeholder for future enhancement) --> <div class="hidden md:flex items-center space-x-4"> <span class="text-sm text-gray-500">Sort by:</span> <select class="form-input text-sm py-2 px-3 w-auto"> <option value="newest">Newest First</option> <option value="oldest">Oldest First</option> <option value="popular">Most Popular</option> </select> </div> </div> ${paginatedPosts.length > 0 ? renderTemplate`<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"> ${paginatedPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "post": post })}`)} </div>` : renderTemplate`<div class="text-center py-16"> <div class="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6"> <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path> </svg> </div> <h3 class="text-xl font-bold text-gray-700 mb-2">No articles found</h3> <p class="text-gray-500">Check back soon for expert window advice and guides.</p> </div>`} <!-- Pagination --> ${totalPages > 1 && renderTemplate`<nav aria-label="Blog pagination" class="flex justify-center"> <div class="flex items-center space-x-2"> ${currentPage > 1 && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <a href="/blog?page=1" class="px-4 py-2 text-sm font-medium text-gray-500 hover:text-green-600 transition-colors" aria-label="Go to first page">
First
</a> <a${addAttribute(`/blog?page=${currentPage - 1}`, "href")} class="px-4 py-2 text-sm font-medium text-gray-500 hover:text-green-600 transition-colors" aria-label="Go to previous page">
Previous
</a> ` })}`} ${Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
    const pageNum = Math.max(1, currentPage - 2) + i;
    if (pageNum > totalPages) return null;
    return renderTemplate`<a${addAttribute(pageNum === 1 ? "/blog" : `/blog?page=${pageNum}`, "href")}${addAttribute(`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${pageNum === currentPage ? "bg-green-500 text-white" : "text-gray-500 hover:text-green-600 hover:bg-green-50"}`, "class")}${addAttribute(`Go to page ${pageNum}`, "aria-label")}${addAttribute(pageNum === currentPage ? "page" : void 0, "aria-current")}> ${pageNum} </a>`;
  })} ${currentPage < totalPages && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <a${addAttribute(`/blog?page=${currentPage + 1}`, "href")} class="px-4 py-2 text-sm font-medium text-gray-500 hover:text-green-600 transition-colors" aria-label="Go to next page">
Next
</a> <a${addAttribute(`/blog?page=${totalPages}`, "href")} class="px-4 py-2 text-sm font-medium text-gray-500 hover:text-green-600 transition-colors" aria-label="Go to last page">
Last
</a> ` })}`} </div> </nav>`} </div> </section>  <section class="section-padding hero-gradient text-white relative overflow-hidden"> <div class="hero-overlay absolute inset-0"></div> <div class="relative container-custom"> <div class="max-w-3xl mx-auto text-center"> <h2 class="text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight text-white">
Stay Updated with Window Tips
</h2> <p class="text-xl mb-8 text-green-50 leading-relaxed">
Get expert window advice, maintenance tips, and exclusive offers delivered to your inbox.
</p> <form id="newsletter-form" class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"> <input type="email" name="email" placeholder="Enter your email address" class="flex-1 px-6 py-4 rounded-2xl border-0 focus:ring-2 focus:ring-green-300 text-gray-800" required> <input type="hidden" name="formType" value="newsletter"> <input type="hidden" name="source" value="blog-newsletter"> <input type="text" name="website" style="display:none;" tabindex="-1" autocomplete="off"> <button type="submit" id="newsletter-submit" class="btn-primary bg-white text-green-600 hover:bg-gray-100 px-8 py-4 font-semibold"> <span class="btn-text">Subscribe</span> <span class="btn-loading hidden"> <svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-green-600 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"> <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle> <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path> </svg>
Subscribing...
</span> </button> </form> <p class="text-sm text-green-200 mt-4">
No spam. Unsubscribe anytime. Local window tips only.
</p> </div> </div> <!-- Decorative elements --> <div class="absolute -top-24 -right-24 w-96 h-96 bg-green-400 rounded-full opacity-10 blur-3xl"></div> <div class="absolute -bottom-32 -left-32 w-128 h-128 bg-green-300 rounded-full opacity-10 blur-3xl"></div> </section> ` })} ${renderScript($$result, "/Users/max/Desktop/windowsbishopsstortford-website/src/pages/blog/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/max/Desktop/windowsbishopsstortford-website/src/pages/blog/index.astro", void 0);

const $$file = "/Users/max/Desktop/windowsbishopsstortford-website/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
