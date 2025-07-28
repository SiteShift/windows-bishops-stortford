import { c as createComponent, a as renderTemplate, m as maybeRenderHead, e as createAstro, b as renderComponent, r as renderScript, g as renderSlot, h as renderHead, u as unescapeHTML, f as addAttribute } from './astro/server_Ba8b9P2x.mjs';
import 'kleur/colors';
/* empty css                          */
import 'clsx';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<header id="main-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" data-astro-cid-3ef6ksr2> <nav class="container-custom py-4" data-astro-cid-3ef6ksr2> <div class="flex items-center justify-between" data-astro-cid-3ef6ksr2> <!-- Logo --> <div class="flex items-center" data-astro-cid-3ef6ksr2> <a href="/" class="flex items-center" data-astro-cid-3ef6ksr2> <img id="header-logo" src="/images/windows-logo-cropped.svg" alt="Windows Bishop's Stortford Logo" class="h-8 md:h-10 w-auto filter brightness-0 invert transition-all duration-300" data-astro-cid-3ef6ksr2> </a> </div> <!-- Desktop Navigation --> <div class="hidden md:flex items-center space-x-8" data-astro-cid-3ef6ksr2> <a href="/#businesses" class="nav-link font-semibold text-white hover:text-green-300 transition-colors duration-200" data-astro-cid-3ef6ksr2>
Companies
</a> <!-- Services Dropdown --> <div class="relative group" data-astro-cid-3ef6ksr2> <button class="nav-link font-semibold text-white hover:text-green-300 transition-colors duration-200 flex items-center" data-astro-cid-3ef6ksr2>
Services
<svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-3ef6ksr2></path> </svg> </button> <div class="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50" data-astro-cid-3ef6ksr2> <div class="py-2" data-astro-cid-3ef6ksr2> <a href="/window-installation-bishops-stortford" class="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors" data-astro-cid-3ef6ksr2>
Window Installation
</a> <a href="/window-types" class="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors" data-astro-cid-3ef6ksr2>
Window Types & Materials
</a> <a href="/energy-efficient-windows" class="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors" data-astro-cid-3ef6ksr2>
Energy Efficient Windows
</a> <a href="/window-repair-bishops-stortford" class="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors" data-astro-cid-3ef6ksr2>
Window Repair
</a> <a href="/window-costs-finance" class="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors" data-astro-cid-3ef6ksr2>
Costs & Finance
</a> </div> </div> </div> <a href="/blog" class="nav-link font-semibold text-white hover:text-green-300 transition-colors duration-200" data-astro-cid-3ef6ksr2>
Blog
</a> </div> <!-- CTA Button --> <div class="hidden md:block" data-astro-cid-3ef6ksr2> <a href="/contact" class="btn-header bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" data-astro-cid-3ef6ksr2>
Get a Free Quote
</a> </div> <!-- Mobile Menu Button --> <button id="mobile-menu-toggle" class="md:hidden text-white p-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors duration-200" aria-label="Toggle mobile menu" data-astro-cid-3ef6ksr2> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-3ef6ksr2></path> </svg> </button> </div> <!-- Mobile Menu --> <div id="mobile-menu" class="md:hidden hidden mt-4 py-4 border-t border-white border-opacity-20" data-astro-cid-3ef6ksr2> <div class="flex flex-col space-y-4" data-astro-cid-3ef6ksr2> <a href="/#businesses" class="nav-link text-white hover:text-green-300 font-semibold transition-colors duration-200" data-astro-cid-3ef6ksr2>
Companies
</a> <!-- Mobile Services Section --> <div class="border-l-2 border-green-300 pl-4" data-astro-cid-3ef6ksr2> <p class="text-green-300 font-semibold mb-2 text-sm" data-astro-cid-3ef6ksr2>Our Services</p> <a href="/window-installation-bishops-stortford" class="block text-white hover:text-green-300 transition-colors duration-200 mb-2" data-astro-cid-3ef6ksr2>
Window Installation
</a> <a href="/window-types" class="block text-white hover:text-green-300 transition-colors duration-200 mb-2" data-astro-cid-3ef6ksr2>
Window Types & Materials
</a> <a href="/energy-efficient-windows" class="block text-white hover:text-green-300 transition-colors duration-200 mb-2" data-astro-cid-3ef6ksr2>
Energy Efficient Windows
</a> <a href="/window-repair-bishops-stortford" class="block text-white hover:text-green-300 transition-colors duration-200 mb-2" data-astro-cid-3ef6ksr2>
Window Repair
</a> <a href="/window-costs-finance" class="block text-white hover:text-green-300 transition-colors duration-200" data-astro-cid-3ef6ksr2>
Costs & Finance
</a> </div> <a href="/blog" class="nav-link text-white hover:text-green-300 font-semibold transition-colors duration-200" data-astro-cid-3ef6ksr2>
Blog
</a> <a href="/contact" class="btn-header bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 text-center mt-4" data-astro-cid-3ef6ksr2>
Get a Free Quote
</a> </div> </div> </nav> </header> <script>
  // Header scroll effect and mobile menu
  document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('main-header');
    const logo = document.getElementById('header-logo');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    // Return early if essential elements are not found
    if (!header || !logo || !mobileMenuToggle || !mobileMenu) {
      return;
    }

    // Scroll effect for glassmorphism
    function updateHeaderOnScroll() {
      const scrolled = window.scrollY > 50;
      
      if (scrolled) {
        header.classList.add('scrolled');
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(20px)';
        header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)';
        
        // Update logo to dark for white background
        logo.classList.remove('brightness-0', 'invert');
        
        // Update text colors for scrolled state
        navLinks.forEach(function(link) {
          link.classList.remove('text-white', 'hover:text-green-300');
          link.classList.add('text-gray-800', 'hover:text-green-600');
        });
        
        // Update mobile menu button
        mobileMenuToggle.classList.remove('text-white');
        mobileMenuToggle.classList.add('text-gray-800');
      } else {
        header.classList.remove('scrolled');
        header.style.backgroundColor = 'transparent';
        header.style.backdropFilter = 'none';
        header.style.borderBottom = 'none';
        
        // Update logo to white for transparent background
        logo.classList.add('brightness-0', 'invert');
        
        // Update text colors for transparent state
        navLinks.forEach(function(link) {
          link.classList.remove('text-gray-800', 'hover:text-green-600');
          link.classList.add('text-white', 'hover:text-green-300');
        });
        
        // Update mobile menu button
        mobileMenuToggle.classList.remove('text-gray-800');
        mobileMenuToggle.classList.add('text-white');
      }
    }

    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking on links
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
      });
    });

    // Initial call and scroll listener
    updateHeaderOnScroll();
    window.addEventListener('scroll', updateHeaderOnScroll);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          }
        }
      });
    });
  });
<\/script> `])), maybeRenderHead());
}, "/Users/max/Desktop/windowsbishopsstortford-website/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-900 text-white"> <!-- Main Footer Content --> <div class="container-custom py-16"> <div class="grid md:grid-cols-4 gap-8"> <!-- Company Info --> <div class="md:col-span-2"> <div class="flex items-center mb-6"> <img src="/images/windows-logo-cropped.svg" alt="Windows Bishop's Stortford Logo" class="h-12 w-auto filter brightness-0 invert"> </div> <p class="text-gray-300 leading-relaxed mb-6 max-w-md">
38-year veteran of the UK window industry and founder of Windows Bishop's Stortford. 
          Helping homeowners navigate window installation, repairs, and energy efficiency improvements by connecting them with trusted local specialists throughout Hertfordshire.
</p> <div class="flex space-x-4"> <!-- Social Media Links --> <a href="https://x.com/stortfordwindow" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-green-400 transition-colors duration-200" aria-label="Follow us on Twitter"> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path> </svg> </a> <a href="https://www.linkedin.com/in/oliver-greene-913415377/" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-green-400 transition-colors duration-200" aria-label="Connect with us on LinkedIn"> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> </svg> </a> </div> </div> <!-- Quick Links --> <div> <h3 class="text-lg font-bold mb-6 text-white">Quick Links</h3> <ul class="space-y-4"> <li> <a href="/#businesses" class="text-gray-300 hover:text-green-400 transition-colors duration-200">
Local Companies
</a> </li> <li> <a href="/#double-glazing" class="text-gray-300 hover:text-green-400 transition-colors duration-200">
Double Glazing
</a> </li> <li> <a href="/#window-repair" class="text-gray-300 hover:text-green-400 transition-colors duration-200">
Window Repair
</a> </li> <li> <a href="/#window-replacement" class="text-gray-300 hover:text-green-400 transition-colors duration-200">
Window Replacement
</a> </li> <li> <a href="/blog" class="text-gray-300 hover:text-green-400 transition-colors duration-200">
Blog
</a> </li> <li> <a href="/contact" class="text-gray-300 hover:text-green-400 transition-colors duration-200">
Get a Quote
</a> </li> </ul> </div> <!-- Contact Info --> <div> <h3 class="text-lg font-bold mb-6 text-white">Contact Info</h3> <ul class="space-y-4"> <li class="flex items-start"> <svg class="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <span class="text-gray-300">Bishop's Stortford, Hertfordshire</span> </li> <li class="flex items-start"> <svg class="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <a href="tel:07476382827" class="text-gray-300 hover:text-green-400 transition-colors duration-200">
07476 382827
</a> </li> <li class="flex items-start"> <svg class="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> <a href="mailto:stortfordwindows@gmail.com" class="text-gray-300 hover:text-green-400 transition-colors duration-200">
stortfordwindows@gmail.com
</a> </li> </ul> <!-- Business Hours --> <div class="mt-8"> <h4 class="font-semibold text-white mb-3">Business Hours</h4> <div class="text-gray-300 text-sm space-y-1"> <div class="flex justify-between"> <span>Mon - Fri:</span> <span>8:00 AM - 6:00 PM</span> </div> <div class="flex justify-between"> <span>Saturday:</span> <span>9:00 AM - 4:00 PM</span> </div> <div class="flex justify-between"> <span>Sunday:</span> <span>Emergency Only</span> </div> </div> </div> </div> </div> </div> <!-- Footer Bottom --> <div class="border-t border-gray-800"> <div class="container-custom py-6"> <div class="flex flex-col md:flex-row justify-between items-center"> <div class="text-gray-400 text-sm mb-4 md:mb-0">
© 2025 Windows Bishop's Stortford. All rights reserved.
</div> <div class="flex space-x-6 text-sm"> <a href="/privacy" class="text-gray-400 hover:text-green-400 transition-colors duration-200">
Privacy Policy
</a> <a href="/terms" class="text-gray-400 hover:text-green-400 transition-colors duration-200">
Terms of Service
</a> <a href="/sitemap" class="text-gray-400 hover:text-green-400 transition-colors duration-200">
Sitemap
</a> </div> </div> </div> </div> </footer>`;
}, "/Users/max/Desktop/windowsbishopsstortford-website/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro("https://windowsbishopsstortford.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/Users/max/Desktop/windowsbishopsstortford-website/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/max/Desktop/windowsbishopsstortford-website/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro("https://windowsbishopsstortford.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, schema } = Astro2.props;
  return renderTemplate(_b || (_b = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/png" sizes="32x32" href="/images/windowsbishopsstortford-logo (1).png"><link rel="icon" type="image/png" sizes="16x16" href="/images/windowsbishopsstortford-logo (1).png"><link rel="apple-touch-icon" href="/images/windowsbishopsstortford-logo (1).png"><link rel="manifest" href="/site.webmanifest"><meta name="theme-color" content="#357960"><meta name="generator"', "><!-- SEO Meta Tags --><title>", `</title><meta name="robots" content="index, follow"><meta name="author" content="Windows Bishop's Stortford"><meta name="google-site-verification" content="oWUd1gugwfwgnOL_JjvPs08GXDn2Ipz1QLYXWRByVWY"><!-- Canonical URL --><link rel="canonical"`, '><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', `><meta property="og:site_name" content="Windows Bishop's Stortford"><meta property="og:image" content="https://windowsbishopsstortford.com/images/bishopsstortfordwindows-heroimage.webp"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:url"`, '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image" content="https://windowsbishopsstortford.com/images/bishopsstortfordwindows-heroimage.webp"><!-- Preload critical resources --><link rel="preload" href="/images/bishopsstortfordwindows-heroimage.webp" as="image"><!-- Schema.org JSON-LD -->', '<!-- Performance optimizations --><link rel="dns-prefetch" href="//maps.googleapis.com"><link rel="dns-prefetch" href="//www.google-analytics.com">', '</head> <body class="font-sans text-gray-800 bg-gray-50"> ', " <main> ", " </main> ", " <!-- Vercel Analytics --> ", ' <!-- Google Analytics 4 - will be added during analytics setup --> <!-- <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"><\/script> --> </body></html>'])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), title, addAttribute(`https://windowsbishopsstortford.com${Astro2.url.pathname}`, "href"), addAttribute(`https://windowsbishopsstortford.com${Astro2.url.pathname}`, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(`https://windowsbishopsstortford.com${Astro2.url.pathname}`, "content"), addAttribute(title, "content"), addAttribute(description, "content"), schema && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schema))), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "Analytics", $$Index, {}));
}, "/Users/max/Desktop/windowsbishopsstortford-website/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$Header as a, $$Footer as b };
