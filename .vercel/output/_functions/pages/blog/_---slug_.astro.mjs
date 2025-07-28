/* empty css                                     */
import { _ as __vite_glob_0_14, a as __vite_glob_0_13, b as __vite_glob_0_12, c as __vite_glob_0_11, d as __vite_glob_0_10, e as __vite_glob_0_9, f as __vite_glob_0_8, g as __vite_glob_0_7, h as __vite_glob_0_6, i as __vite_glob_0_5, j as __vite_glob_0_4, k as __vite_glob_0_3, l as __vite_glob_0_2, m as __vite_glob_0_1, n as __vite_glob_0_0 } from '../../chunks/zero-deposit-finance-whats-the-catch-bishops-stortford_Bbaivwos.mjs';
import { e as createAstro, c as createComponent, b as renderComponent, a as renderTemplate, m as maybeRenderHead, g as renderSlot, f as addAttribute } from '../../chunks/astro/server_Ba8b9P2x.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BbRBOC0R.mjs';
import { s as siteData } from '../../chunks/siteData_gIBrbVss.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://windowsbishopsstortford.com");
const $$BlogLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogLayout;
  const { frontmatter } = Astro2.props;
  const publishDate = new Date(frontmatter.publishDate);
  const formattedDate = publishDate.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const wordsPerMinute = 200;
  try {
    const content = await Astro2.slots.render("default");
    const wordCount = content.replace(/<[^>]*>/g, "").split(" ").length;
    var readingTime = Math.ceil(wordCount / wordsPerMinute);
  } catch (error) {
    const descriptionWords = frontmatter.description ? frontmatter.description.split(" ").length : 50;
    var readingTime = Math.ceil(descriptionWords * 15 / wordsPerMinute);
  }
  const slug = frontmatter.slug || Astro2.url.pathname.split("/").pop();
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": frontmatter.title,
    "description": frontmatter.description,
    "image": frontmatter.heroImage ? `https://${siteData.site.domain}${frontmatter.heroImage}` : `https://${siteData.site.domain}/images/bishopsstortfordwindows-heroimage.webp`,
    "author": {
      "@type": "Person",
      "name": frontmatter.author || "Oliver Greene",
      "description": "38-year veteran of the UK window industry; founder of Windows Bishop's Stortford helping homeowners find vetted local installers.",
      "jobTitle": "Managing Director & Industry Expert",
      "knowsAbout": [
        "Window installation",
        "Double glazing",
        "Energy efficiency",
        "Building regulations Part L",
        "FENSA certification"
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": siteData.business.name,
      "logo": {
        "@type": "ImageObject",
        "url": `https://${siteData.site.domain}/images/windows-logo-cropped.svg`
      }
    },
    "datePublished": frontmatter.publishDate,
    "dateModified": frontmatter.publishDate,
    "url": `https://${siteData.site.domain}/blog/${slug}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://${siteData.site.domain}/blog/${slug}`
    },
    "keywords": frontmatter.tags?.join(", "),
    "articleSection": "Window Installation and Repair",
    "inLanguage": "en-GB",
    "isPartOf": {
      "@type": "Blog",
      "name": "Windows Bishop's Stortford Blog",
      "url": `https://${siteData.site.domain}/blog`
    }
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": frontmatter.title,
        "item": `https://${siteData.site.domain}/blog/${slug}`
      }
    ]
  };
  const schema = [blogPostSchema, breadcrumbSchema];
  const seoTitle = `${frontmatter.title} | Windows Bishop's Stortford Blog`;
  const seoDescription = frontmatter.description;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seoTitle, "description": seoDescription, "schema": schema, "data-astro-cid-4dqtj3le": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative" data-astro-cid-4dqtj3le> ${frontmatter.heroImage ? renderTemplate`<div class="relative h-[65vh] md:h-[70vh] overflow-hidden flex items-center" data-astro-cid-4dqtj3le> <img${addAttribute(frontmatter.heroImage, "src")}${addAttribute(frontmatter.title, "alt")} class="w-full h-full object-cover" loading="eager" data-astro-cid-4dqtj3le> <div class="absolute inset-0 bg-black bg-opacity-60" data-astro-cid-4dqtj3le></div> <!-- Hero Content Overlay --> <div class="absolute inset-0 flex items-center" data-astro-cid-4dqtj3le> <div class="container-custom" data-astro-cid-4dqtj3le> <div class="max-w-4xl" data-astro-cid-4dqtj3le> <!-- Tags --> ${frontmatter.tags && frontmatter.tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-1 sm:gap-2 mb-6 mt-4 sm:mt-0" data-astro-cid-4dqtj3le> ${frontmatter.tags.map((tag) => renderTemplate`<span class="bg-white bg-opacity-20 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm" data-astro-cid-4dqtj3le> ${tag.charAt(0).toUpperCase() + tag.slice(1)} </span>`)} </div>`} <!-- Title --> <h1 class="text-3xl lg:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tighter" data-astro-cid-4dqtj3le> ${frontmatter.title} </h1> <!-- Meta Information --> <div class="flex flex-col sm:flex-row sm:items-center text-green-100" data-astro-cid-4dqtj3le> <!-- Author --> <div class="flex items-center mb-4 sm:mb-0 sm:mr-8" data-astro-cid-4dqtj3le> <div class="w-10 h-10 rounded-full mr-3 overflow-hidden ring-2 ring-white ring-opacity-50" data-astro-cid-4dqtj3le> <img src="/images/oliver-greene-profilepic_compressed_compressed.webp" alt="Oliver Greene - Window Expert" class="w-full h-full object-cover" loading="lazy" data-astro-cid-4dqtj3le> </div> <div class="leading-none -space-y-2" data-astro-cid-4dqtj3le> <p class="font-semibold text-white leading-none" data-astro-cid-4dqtj3le>${frontmatter.author || "Oliver Greene"}</p> <p class="text-xs text-green-200 leading-none" data-astro-cid-4dqtj3le>Window Expert</p> </div> </div> <!-- Date & Reading Time --> <div class="flex items-center space-x-6 text-sm text-green-100" data-astro-cid-4dqtj3le> <div class="flex items-center" data-astro-cid-4dqtj3le> <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-4dqtj3le> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-4dqtj3le></path> </svg> <time${addAttribute(frontmatter.publishDate, "datetime")} data-astro-cid-4dqtj3le>${formattedDate}</time> </div> <div class="flex items-center" data-astro-cid-4dqtj3le> <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-4dqtj3le> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-4dqtj3le></path> </svg> <span data-astro-cid-4dqtj3le>${readingTime} min read</span> </div> </div> </div> </div> </div> </div> </div>` : renderTemplate`<div class="h-32 bg-gradient-to-r from-green-600 to-green-500" data-astro-cid-4dqtj3le></div>`} </section>  <article class="section-padding bg-white" data-astro-cid-4dqtj3le> <div class="container-custom" data-astro-cid-4dqtj3le> <div class="max-w-4xl mx-auto" data-astro-cid-4dqtj3le> <!-- Breadcrumbs --> <nav aria-label="Breadcrumb" class="mb-8" data-astro-cid-4dqtj3le> <ol class="flex items-center space-x-2 text-sm text-gray-500" data-astro-cid-4dqtj3le> <li data-astro-cid-4dqtj3le> <a href="/" class="hover:text-green-600 transition-colors" data-astro-cid-4dqtj3le>Home</a> </li> <li class="text-gray-400" data-astro-cid-4dqtj3le>/</li> <li data-astro-cid-4dqtj3le> <a href="/blog" class="hover:text-green-600 transition-colors" data-astro-cid-4dqtj3le>Blog</a> </li> <li class="text-gray-400" data-astro-cid-4dqtj3le>/</li> <li class="text-gray-700 font-medium" data-astro-cid-4dqtj3le>${frontmatter.title}</li> </ol> </nav> <!-- Article Content --> <div class="max-w-none" data-astro-cid-4dqtj3le> <div class="text-xl text-gray-600 font-medium leading-relaxed mb-12 pb-8 border-b border-gray-200" data-astro-cid-4dqtj3le> ${frontmatter.description} </div> <div class="article-content" data-astro-cid-4dqtj3le> ${renderSlot($$result2, $$slots["default"])} </div> </div> <!-- Share buttons --> <div class="flex items-center justify-center space-x-4 mt-12 pt-8 border-t border-gray-200" data-astro-cid-4dqtj3le> <span class="text-sm text-gray-500 mr-2" data-astro-cid-4dqtj3le>Share this article:</span> <button class="p-3 text-gray-400 hover:text-green-600 transition-colors bg-gray-50 hover:bg-green-50 rounded-full" aria-label="Share on Twitter" data-astro-cid-4dqtj3le> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-4dqtj3le> <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" data-astro-cid-4dqtj3le></path> </svg> </button> <button class="p-3 text-gray-400 hover:text-green-600 transition-colors bg-gray-50 hover:bg-green-50 rounded-full" aria-label="Share on LinkedIn" data-astro-cid-4dqtj3le> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-4dqtj3le> <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" data-astro-cid-4dqtj3le></path> </svg> </button> </div> <!-- Author Bio --> <section class="mt-16 p-8 bg-gray-50 rounded-3xl" data-astro-cid-4dqtj3le> <div class="flex flex-col md:flex-row items-start gap-6" data-astro-cid-4dqtj3le> <div class="flex-shrink-0" data-astro-cid-4dqtj3le> <div class="w-20 h-20 rounded-3xl overflow-hidden ring-4 ring-green-100" data-astro-cid-4dqtj3le> <img src="/images/oliver-greene-profilepic_compressed_compressed.webp" alt="Oliver Greene - Window Expert" class="w-full h-full object-cover" loading="lazy" data-astro-cid-4dqtj3le> </div> </div> <div class="flex-1" data-astro-cid-4dqtj3le> <h3 class="text-2xl font-bold text-green-800 mb-2" data-astro-cid-4dqtj3le>About ${frontmatter.author || "Oliver Greene"}</h3> <p class="text-gray-600 leading-relaxed mb-4" data-astro-cid-4dqtj3le>
38-year veteran of the UK window industry and founder of Windows Bishop's Stortford. Oliver helps homeowners navigate window installation, repairs, and energy efficiency improvements by connecting them with trusted local specialists throughout Hertfordshire.
</p> <div class="flex flex-wrap gap-2" data-astro-cid-4dqtj3le> <span class="service-tag text-xs" data-astro-cid-4dqtj3le>Window Installation Expert</span> <span class="service-tag text-xs" data-astro-cid-4dqtj3le>FENSA Certified</span> <span class="service-tag text-xs" data-astro-cid-4dqtj3le>Building Regulations Specialist</span> </div> </div> </div> </section> <!-- CTA Section --> <section class="mt-16 p-8 hero-gradient text-white rounded-3xl text-center" data-astro-cid-4dqtj3le> <h3 class="text-2xl lg:text-3xl font-extrabold mb-4 text-white" data-astro-cid-4dqtj3le>
Need Professional Window Services?
</h3> <p class="text-green-50 mb-6 leading-relaxed" data-astro-cid-4dqtj3le>
Get connected with Bishop's Stortford's most trusted window specialists for your next project.
</p> <a href="#contact" class="btn-primary bg-white text-green-600 hover:bg-gray-100 inline-flex items-center group" data-astro-cid-4dqtj3le> <span data-astro-cid-4dqtj3le>Get Free Quotes</span> <svg class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-4dqtj3le> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-4dqtj3le></path> </svg> </a> </section> </div> </div> </article>  <section class="section-padding bg-gray-50" data-astro-cid-4dqtj3le> <div class="container-custom" data-astro-cid-4dqtj3le> <div class="max-w-4xl mx-auto" data-astro-cid-4dqtj3le> <h3 class="text-3xl font-extrabold text-green-800 mb-8 text-center tracking-tight" data-astro-cid-4dqtj3le>
Related Articles
</h3> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-4dqtj3le> <!-- Related posts will be populated here --> <div class="card p-6 text-center" data-astro-cid-4dqtj3le> <div class="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4" data-astro-cid-4dqtj3le> <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-4dqtj3le> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" data-astro-cid-4dqtj3le></path> </svg> </div> <h4 class="text-lg font-bold text-green-800 mb-2" data-astro-cid-4dqtj3le>More Articles Coming Soon</h4> <p class="text-gray-600 text-sm" data-astro-cid-4dqtj3le>Check back for more expert window advice and guides.</p> </div> </div> </div> </div> </section> ` })} `;
}, "/Users/max/Desktop/windowsbishopsstortford-website/src/layouts/BlogLayout.astro", void 0);

const $$Astro = createAstro("https://windowsbishopsstortford.com");
async function getStaticPaths() {
  const postModules = /* #__PURE__ */ Object.assign({"../../content/blog/best-windows-noise-reduction-bishops-stortford.md": __vite_glob_0_0,"../../content/blog/common-window-installation-mistakes-bishops-stortford.md": __vite_glob_0_1,"../../content/blog/diy-vs-professional-window-repair-bishops-stortford.md": __vite_glob_0_2,"../../content/blog/double-glazing-energy-bills-case-study-bishops-stortford.md": __vite_glob_0_3,"../../content/blog/grant-schemes-2025-eligibility-bishops-stortford.md": __vite_glob_0_4,"../../content/blog/hidden-window-installation-costs-bishops-stortford.md": __vite_glob_0_5,"../../content/blog/how-to-compare-window-installation-quotes-bishops-stortford.md": __vite_glob_0_6,"../../content/blog/part-l-compliance-explained-homeowners-bishops-stortford.md": __vite_glob_0_7,"../../content/blog/timber-window-maintenance-checklist-bishops-stortford.md": __vite_glob_0_8,"../../content/blog/upvc-windows-period-homes-bishops-stortford.md": __vite_glob_0_9,"../../content/blog/why-windows-steam-up-how-to-fix-bishops-stortford.md": __vite_glob_0_10,"../../content/blog/window-installation-cost-bishops-stortford.md": __vite_glob_0_11,"../../content/blog/window-installation-timeline-quote-to-completion-bishops-stortford.md": __vite_glob_0_12,"../../content/blog/window-security-upgrades-locks-restrictors-bishops-stortford.md": __vite_glob_0_13,"../../content/blog/zero-deposit-finance-whats-the-catch-bishops-stortford.md": __vite_glob_0_14});
  const posts = Object.values(postModules);
  return posts.map((post) => {
    const slug = post.frontmatter?.slug || post.url?.split("/").pop()?.replace(".md", "") || "";
    return {
      params: {
        slug
      },
      props: {
        post
      }
    };
  });
}
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { post } = Astro2.props;
  const { Content, frontmatter } = post;
  if (frontmatter.draft) {
    return Astro2.redirect("/blog");
  }
  return renderTemplate`${renderComponent($$result, "BlogLayout", $$BlogLayout, { "frontmatter": frontmatter }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/max/Desktop/windowsbishopsstortford-website/src/pages/blog/[...slug].astro", void 0);

const $$file = "/Users/max/Desktop/windowsbishopsstortford-website/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
