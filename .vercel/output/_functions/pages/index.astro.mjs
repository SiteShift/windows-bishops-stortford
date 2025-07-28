/* empty css                                  */
import { e as createAstro, c as createComponent, m as maybeRenderHead, f as addAttribute, r as renderScript, a as renderTemplate, u as unescapeHTML, b as renderComponent } from '../chunks/astro/server_Ba8b9P2x.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BbRBOC0R.mjs';
import 'clsx';
import { $ as $$ContactForm } from '../chunks/ContactForm_t49YfbFk.mjs';
/* empty css                                 */
import { s as siteData } from '../chunks/siteData_gIBrbVss.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://windowsbishopsstortford.com");
const $$GoogleMap = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GoogleMap;
  const { center, zoom, title, businesses = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="google-map" class="w-full h-96 rounded-lg shadow-md bg-gray-300 flex items-center justify-center"${addAttribute(JSON.stringify(center), "data-center")}${addAttribute(zoom, "data-zoom")}${addAttribute(title, "data-title")}${addAttribute(JSON.stringify(businesses), "data-businesses")}> <div class="text-center"> <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div> <p class="text-gray-600">Loading interactive map...</p> </div> </div> ${renderScript($$result, "/Users/max/Desktop/windowsbishopsstortford-website/src/components/GoogleMap.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/max/Desktop/windowsbishopsstortford-website/src/components/GoogleMap.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro("https://windowsbishopsstortford.com");
const $$BusinessList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BusinessList;
  const { businesses, maxDisplayed = 10, showContactButton = true } = Astro2.props;
  const displayedBusinesses = businesses.slice(0, maxDisplayed);
  const businessSchemas = displayedBusinesses.map((business) => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": business.name,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": business.vicinity
    },
    "aggregateRating": business.user_ratings_total > 0 ? {
      "@type": "AggregateRating",
      "ratingValue": business.rating,
      "reviewCount": business.user_ratings_total
    } : void 0,
    "url": business.website || business.google_url,
    "telephone": business.phone,
    "priceRange": business.price_level ? "$".repeat(business.price_level) : void 0
  })).filter((schema) => schema.aggregateRating);
  function getFaviconUrl(domain, size = 32) {
    if (!domain) {
      return `https://www.google.com/s2/favicons?domain=maps.google.com&sz=${size}`;
    }
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;
  }
  function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    return "\u2605".repeat(fullStars) + (hasHalfStar ? "\u2606" : "") + "\u2606".repeat(emptyStars);
  }
  return renderTemplate(_b || (_b = __template(["", `<section class="section-padding bg-gray-50" data-astro-cid-her53m67> <div class="container-custom" data-astro-cid-her53m67> <div class="max-w-6xl mx-auto" data-astro-cid-her53m67> <div class="text-center mb-16" data-astro-cid-her53m67> <h2 class="text-4xl lg:text-5xl font-extrabold text-green-800 mb-6 tracking-tight" data-astro-cid-her53m67>
Local Window Companies in Bishop's Stortford
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-astro-cid-her53m67>
Compare quotes from trusted local window installers. All businesses shown have good customer ratings and are located within 5km of Bishop's Stortford.
</p> </div> `, " ", " </div> </div> </section> <!-- Schema.org markup for businesses --> ", ` <script>
  document.addEventListener('DOMContentLoaded', function() {
    // Handle "Get Contact Details" button clicks
    document.querySelectorAll('.get-contact-btn').forEach(function(button) {
      button.addEventListener('click', function() {
        const placeId = button.dataset.placeId;
        const businessName = button.dataset.businessName;
        
        // Find the contact form and pre-fill with business info
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
          // Scroll to contact form
          contactForm.scrollIntoView({ behavior: 'smooth' });
          
          // Pre-fill the service field and add place_id
          const serviceField = contactForm.querySelector('#service');
          if (serviceField && 'value' in serviceField) {
            serviceField.value = 'consultation';
          }
          
          // Add hidden field for place_id if it doesn't exist
          let placeIdField = contactForm.querySelector('input[name="selected_business_place_id"]');
          if (!placeIdField) {
            placeIdField = document.createElement('input');
            placeIdField.type = 'hidden';
            placeIdField.name = 'selected_business_place_id';
            contactForm.appendChild(placeIdField);
          }
          if ('value' in placeIdField) {
            placeIdField.value = placeId || '';
          }
          
          // Add hidden field for business name
          let businessNameField = contactForm.querySelector('input[name="selected_business_name"]');
          if (!businessNameField) {
            businessNameField = document.createElement('input');
            businessNameField.type = 'hidden';
            businessNameField.name = 'selected_business_name';
            contactForm.appendChild(businessNameField);
          }
          if ('value' in businessNameField) {
            businessNameField.value = businessName || '';
          }
          
          // Update form title or add notice
          const formContainer = contactForm.closest('section');
          if (formContainer) {
            const formTitle = formContainer.querySelector('h2');
            if (formTitle) {
              formTitle.innerHTML = 'Get Contact Details for ' + (businessName || 'Selected Business');
            }
          }
        }
        
        // Track interaction
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'business_contact_request', {
            'business_name': businessName,
            'place_id': placeId
          });
        }
      });
    });
    
    // Show contact details after successful form submission
    // This would typically be handled by the form submission success callback
    window.showBusinessContact = function(placeId) {
      const button = document.querySelector('[data-place-id="' + placeId + '"]');
      if (button) {
        const businessCard = button.closest('.business-card');
        if (businessCard) {
          const contactDetails = businessCard.querySelector('.contact-details');
        if (contactDetails) {
          contactDetails.classList.remove('hidden');
            if ('style' in button) {
          button.style.display = 'none';
            }
          }
        }
      }
    };
  });
<\/script> `])), maybeRenderHead(), displayedBusinesses.length === 0 ? renderTemplate`<div class="text-center py-20" data-astro-cid-her53m67> <div class="w-24 h-24 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6" data-astro-cid-her53m67> <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-her53m67> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" data-astro-cid-her53m67></path> </svg> </div> <p class="text-xl text-gray-500 font-medium" data-astro-cid-her53m67>No local businesses found at this time.</p> </div>` : renderTemplate`<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-her53m67> ${displayedBusinesses.map((business) => renderTemplate`<div class="business-card" data-astro-cid-her53m67>  <div class="flex items-start gap-4 mb-6" data-astro-cid-her53m67> <div class="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0" data-astro-cid-her53m67> <img${addAttribute(getFaviconUrl(business.domain, 32), "src")}${addAttribute(`${business.name} favicon`, "alt")} class="w-8 h-8 rounded-lg" loading="lazy" onerror="this.src='https://www.google.com/s2/favicons?domain=maps.google.com&sz=32'" data-astro-cid-her53m67> </div> <div class="flex-1 min-w-0" data-astro-cid-her53m67> <h3 class="font-bold text-xl text-green-800 mb-2 tracking-tight line-clamp-2" data-astro-cid-her53m67> ${business.name} </h3> <p class="text-sm text-gray-500 font-medium" data-astro-cid-her53m67>${business.vicinity}</p> </div> </div>  <div class="flex items-center gap-3 mb-6" data-astro-cid-her53m67> <div class="flex items-center" data-astro-cid-her53m67> <span class="rating-stars"${addAttribute(`${business.rating} star rating`, "aria-label")} data-astro-cid-her53m67> ${generateStars(business.rating)} </span> <span class="ml-2 font-bold text-gray-800" data-astro-cid-her53m67> ${business.rating} </span> </div> ${business.user_ratings_total > 0 && renderTemplate`<span class="text-sm text-gray-500 font-medium" data-astro-cid-her53m67>
(${business.user_ratings_total} reviews)
</span>`} </div>  <div class="flex flex-col gap-3 mt-auto" data-astro-cid-her53m67> ${showContactButton && renderTemplate`<button type="button" class="get-contact-btn btn-primary w-full"${addAttribute(business.place_id, "data-place-id")}${addAttribute(business.name, "data-business-name")} data-astro-cid-her53m67>
Get a Free Quote
</button>`} </div>  <div class="contact-details mt-6 p-6 bg-green-50 border-2 border-green-200 rounded-2xl hidden" data-astro-cid-her53m67> <h4 class="font-bold text-green-800 mb-4 text-lg" data-astro-cid-her53m67>Contact Information:</h4> ${business.phone && renderTemplate`<p class="text-green-700 mb-3 flex items-center" data-astro-cid-her53m67> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-her53m67> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-astro-cid-her53m67></path> </svg> <a${addAttribute(`tel:${business.phone}`, "href")} class="hover:underline font-medium" data-astro-cid-her53m67>${business.phone}</a> </p>`} ${business.website && renderTemplate`<p class="text-green-700 flex items-center" data-astro-cid-her53m67> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-her53m67> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" data-astro-cid-her53m67></path> </svg> <a${addAttribute(business.website, "href")} target="_blank" rel="noopener noreferrer" class="hover:underline font-medium" data-astro-cid-her53m67> ${business.domain || "Visit Website"} </a> </p>`} ${!business.phone && !business.website && renderTemplate`<p class="text-green-700" data-astro-cid-her53m67>
Contact via Google Maps listing above
</p>`} </div> </div>`)} </div>`, businesses.length > maxDisplayed && renderTemplate`<div class="text-center mt-12" data-astro-cid-her53m67> <div class="inline-flex items-center px-6 py-3 bg-white rounded-2xl shadow-sm border border-gray-200" data-astro-cid-her53m67> <p class="text-gray-600 font-medium" data-astro-cid-her53m67>
Showing ${maxDisplayed} of ${businesses.length} businesses.
<span class="text-green-600 font-semibold ml-1" data-astro-cid-her53m67>Contact us for a complete local directory.</span> </p> </div> </div>`, businessSchemas.map((schema) => renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schema)))));
}, "/Users/max/Desktop/windowsbishopsstortford-website/src/components/BusinessList.astro", void 0);

const businesses = [
	{
		place_id: "ChIJfe8AST2F2EcRRo0CUXIp_tA",
		name: "Markwell Windows and Doors",
		rating: 4.6,
		user_ratings_total: 81,
		vicinity: "28 Hadham Rd, Bishop's Stortford",
		website: "http://www.markwell-ltd.com/",
		phone: "01279 466341",
		google_url: "https://maps.google.com/?cid=15059519774935649606",
		domain: "markwell-ltd.com",
		types: [
			"establishment",
			"general_contractor",
			"point_of_interest"
		],
		price_level: null
	},
	{
		place_id: "ChIJwUCKTOuR2EcRvi6lFI9ssqA",
		name: "Glazing Masters",
		rating: 5,
		user_ratings_total: 29,
		vicinity: "Misty House, Ryes Ln, Bishop's Stortford",
		website: "https://www.glazingmasters.co.uk/",
		phone: "01279 216211",
		google_url: "https://maps.google.com/?cid=11579436953705459390",
		domain: "glazingmasters.co.uk",
		types: [
			"point_of_interest",
			"establishment",
			"general_contractor"
		],
		price_level: null
	},
	{
		place_id: "ChIJLejwzGKP2EcRqdtHmJ92NQo",
		name: "Herts & Essex Window Doctor",
		rating: 4.8,
		user_ratings_total: 25,
		vicinity: "30 Bentfield Gardens, Stansted Mountfitchet, Stansted",
		website: "http://hertsandessexwindowdoctor.co.uk/",
		phone: "07769 274610",
		google_url: "https://maps.google.com/?cid=735624541971667881",
		domain: "hertsandessexwindowdoctor.co.uk",
		types: [
			"establishment",
			"point_of_interest"
		],
		price_level: null
	},
	{
		place_id: "ChIJ_X3OAs2F2EcRfTG4Rbm-lSY",
		name: "Adam's Window Repairs",
		rating: 5,
		user_ratings_total: 20,
		vicinity: "Dimsdale Cres, Bishop's Stortford",
		website: "https://www.facebook.com/profile.php?id=61554454187201",
		phone: "07725 851270",
		google_url: "https://maps.google.com/?cid=2780338047919075709",
		domain: "facebook.com",
		types: [
			"point_of_interest",
			"establishment"
		],
		price_level: null
	},
	{
		place_id: "ChIJ36Y4n3-F2EcRT5Lc5v3scbM",
		name: "N L Glass & Glazing Ltd",
		rating: 5,
		user_ratings_total: 12,
		vicinity: "Unit 4c Hadham Industrial Estate, Church End",
		website: null,
		phone: "01279 771472",
		google_url: "https://maps.google.com/?cid=12930376580401500751",
		domain: null,
		types: [
			"point_of_interest",
			"establishment"
		],
		price_level: null
	},
	{
		place_id: "ChIJMdTZePiF2EcR9ny-Pg_RxGQ",
		name: "Hertfordshire Windows and Doors",
		rating: 5,
		user_ratings_total: 12,
		vicinity: "Three Acres, Three Acrs, Motts Green, Little Hallingbury, Bishop's Stortford",
		website: "https://hertswd.com/",
		phone: "01279 260960",
		google_url: "https://maps.google.com/?cid=7261158362635468022",
		domain: "hertswd.com",
		types: [
			"general_contractor",
			"point_of_interest",
			"establishment"
		],
		price_level: null
	},
	{
		place_id: "ChIJO_LwSKyb2EcRtJvLcTCxxpY",
		name: "Cuffley Conservatories PVC Window & Door Repair",
		rating: 0,
		user_ratings_total: 0,
		vicinity: "Grafters Croft, Spellbrook Ln W, Spellbrook, Sawbridgeworth",
		website: "https://www.cuffleyconservatories.co.uk/",
		phone: "07973 505794",
		google_url: "https://maps.google.com/?cid=10864565972703615924",
		domain: "cuffleyconservatories.co.uk",
		types: [
			"locksmith",
			"point_of_interest",
			"establishment"
		],
		price_level: null
	}
];

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteData.business.name,
    "url": `https://${siteData.site.domain}`,
    "telephone": siteData.business.telephone,
    "email": siteData.business.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": siteData.business.address.addressLocality,
      "addressRegion": siteData.business.address.addressRegion,
      "addressCountry": siteData.business.address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.8721,
      "longitude": 0.1604
    },
    "areaServed": siteData.business.serviceArea.map((area) => ({
      "@type": "Place",
      "name": area
    })),
    "serviceType": "Window Installation and Repair",
    "description": siteData.site.description,
    "priceRange": "\xA3\xA3",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "14:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Window Services",
      "itemListElement": siteData.services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description,
          "provider": {
            "@type": "LocalBusiness",
            "name": siteData.business.name
          }
        }
      }))
    }
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": siteData.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteData.business.name,
    "url": `https://${siteData.site.domain}`,
    "logo": `https://${siteData.site.domain}/images/windows-logo-cropped.svg`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteData.business.telephone,
      "contactType": "customer service",
      "email": siteData.business.email,
      "areaServed": "GB",
      "availableLanguage": "English"
    },
    "sameAs": [
      `https://${siteData.site.domain}`
    ]
  };
  const schema = [localBusinessSchema, faqSchema, organizationSchema];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": siteData.site.title, "description": siteData.site.description, "schema": schema }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative text-white overflow-hidden h-[70vh] md:h-[80vh] flex items-center" style="background-image: url('/images/bishopsstortfordwindows-heroimage.webp'); background-size: cover; background-position: center; background-repeat: no-repeat;"> <!-- Dark overlay --> <div class="absolute inset-0 bg-black bg-opacity-60"></div> <div class="relative container-custom section-padding"> <div class="max-w-4xl"> <h1 class="text-5xl lg:text-7xl font-extrabold mb-8 leading-tight tracking-tighter text-white">
Windows in Bishop's Stortford
</h1> <p class="text-xl lg:text-2xl mb-12 text-white font-medium leading-relaxed max-w-2xl">
Professional Window Installation & Repair Services
</p> <div class="flex flex-col sm:flex-row gap-6"> <a href="#contact" class="btn-primary inline-flex items-center justify-center group"> <span>Get Free Quote</span> <svg class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> </div> </div> </section>  <section id="businesses"> ${renderComponent($$result2, "BusinessList", $$BusinessList, { "businesses": businesses, "maxDisplayed": 20 })} </section>  <section class="section-padding bg-white"> <div class="container-custom"> <div class="max-w-5xl mx-auto text-center"> <p class="text-xl leading-relaxed text-gray-600 font-medium">
Looking for reliable window installers in Bishop's Stortford? Our experienced team provides top-quality double glazing, window repairs, and complete window replacements throughout Hertfordshire.<br><br>
With over 15 years serving local homeowners, we combine traditional craftsmanship with modern energy-efficient solutions. Every installation comes with comprehensive warranties and our commitment to exceptional customer service.<br><br>
From Victorian terraces to modern developments, we understand the unique requirements of Bishop's Stortford properties. Our local knowledge means faster response times, competitive pricing, and installations that complement your home's character.<br><br>
We source premium windows from leading manufacturers, ensuring durability and performance that stands the test of time. Whether you need emergency repairs, energy-saving upgrades, or complete window replacement, our certified installers deliver results that exceed expectations.<br><br>
All work is fully insured and meets current building regulations. Contact us today for your free, no-obligation consultation and discover why Bishop's Stortford residents trust us with their window needs.
</p> </div> </div> </section>  <section id="services-overview" class="section-padding bg-gray-50"> <div class="container-custom"> <div class="text-center mb-16"> <h2 class="text-4xl lg:text-5xl font-extrabold text-green-800 mb-6 tracking-tight">
Our Window Services
</h2> <p class="text-xl text-gray-600 max-w-2xl mx-auto">
Professional window solutions designed for Bishop's Stortford homes
</p> </div> <div class="grid md:grid-cols-3 gap-8 lg:gap-12"> ${siteData.services.map((service) => renderTemplate`<div class="card card-hover text-center p-8"> <div class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6"> <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" role="img" aria-label="Window service icon"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path> </svg> </div> <h3 class="text-2xl font-bold text-green-800 mb-4 tracking-tight">${service.title}</h3> <p class="text-gray-600 mb-6 leading-relaxed">${service.description.substring(0, 120)}...</p> <a${addAttribute(`#${service.id}`, "href")} class="inline-flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors mr-4">
Learn More
<svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> ${service.id === "window-installation" && renderTemplate`<a href="/window-installation-bishops-stortford" class="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors">
Full Guide
<svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path> </svg> </a>`} </div>`)} </div> </div> </section>  <section class="section-padding bg-white"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-4xl font-extrabold text-green-800 mb-4 tracking-tight">
Serving ${siteData.site.town} & Surrounding Areas
</h2> <p class="text-xl text-gray-600">
Local expertise you can trust, within 5 miles of your doorstep
</p> </div> <div class="max-w-5xl mx-auto"> <div class="map-container"> ${renderComponent($$result2, "GoogleMap", $$GoogleMap, { "center": siteData.maps.center, "zoom": siteData.maps.zoom, "title": siteData.maps.title, "businesses": businesses })} </div> </div> </div> </section>  <section id="services" class="section-padding bg-green-800 text-white"> <div class="container-custom"> <div class="max-w-6xl mx-auto"> <div class="text-center mb-16"> <h2 class="text-4xl font-extrabold mb-6">Complete Window Services</h2> <p class="text-xl text-green-100 max-w-3xl mx-auto">
From installation to repair, energy efficiency to costs - everything you need to know about windows in Bishop's Stortford.
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> <a href="/window-installation-bishops-stortford" class="card bg-white text-gray-800 p-6 hover:shadow-xl transition-all duration-300 group"> <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors"> <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path> </svg> </div> <h3 class="text-xl font-bold text-green-800 mb-3">Window Installation</h3> <p class="text-gray-600 mb-4">Professional FENSA-certified installation with 10-year guarantees.</p> <span class="text-green-600 font-semibold group-hover:text-green-700">Learn More →</span> </a> <a href="/window-types" class="card bg-white text-gray-800 p-6 hover:shadow-xl transition-all duration-300 group"> <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors"> <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l7-3 7 3z"></path> </svg> </div> <h3 class="text-xl font-bold text-green-800 mb-3">Window Types & Materials</h3> <p class="text-gray-600 mb-4">Compare uPVC, aluminium, and timber windows for your property.</p> <span class="text-green-600 font-semibold group-hover:text-green-700">Explore Options →</span> </a> <a href="/energy-efficient-windows" class="card bg-white text-gray-800 p-6 hover:shadow-xl transition-all duration-300 group"> <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors"> <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <h3 class="text-xl font-bold text-green-800 mb-3">Energy Efficient Windows</h3> <p class="text-gray-600 mb-4">Save money with A-rated windows and government grants.</p> <span class="text-green-600 font-semibold group-hover:text-green-700">Calculate Savings →</span> </a> <a href="/window-repair-bishops-stortford" class="card bg-white text-gray-800 p-6 hover:shadow-xl transition-all duration-300 group"> <div class="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors"> <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </div> <h3 class="text-xl font-bold text-green-800 mb-3">Window Repair</h3> <p class="text-gray-600 mb-4">Fast repairs for broken glass, locks, and misted units. 24/7 emergency service.</p> <span class="text-green-600 font-semibold group-hover:text-green-700">Get Repair →</span> </a> <a href="/window-costs-finance" class="card bg-white text-gray-800 p-6 hover:shadow-xl transition-all duration-300 group"> <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors"> <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path> </svg> </div> <h3 class="text-xl font-bold text-green-800 mb-3">Costs & Finance</h3> <p class="text-gray-600 mb-4">Transparent pricing and flexible payment options including 0% finance.</p> <span class="text-green-600 font-semibold group-hover:text-green-700">View Pricing →</span> </a> <a href="/blog" class="card bg-white text-gray-800 p-6 hover:shadow-xl transition-all duration-300 group"> <div class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors"> <svg class="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path> </svg> </div> <h3 class="text-xl font-bold text-green-800 mb-3">Expert Guides</h3> <p class="text-gray-600 mb-4">38 years of industry knowledge in comprehensive guides and tips.</p> <span class="text-green-600 font-semibold group-hover:text-green-700">Read Blog →</span> </a> </div> </div> </div> </section>   <section id="double-glazing" class="section-padding bg-gray-50"> <div class="container-custom"> <div class="max-w-6xl mx-auto"> <div class="grid lg:grid-cols-2 gap-16 items-center"> <div> <h2 class="text-4xl font-extrabold text-green-800 mb-6 tracking-tight">Double Glazing</h2> <p class="text-lg text-gray-600 mb-8 leading-relaxed">Professional double glazing installation using premium uPVC, timber, and aluminum frames. Our energy-efficient windows reduce heating costs by up to 30% while eliminating condensation and drafts. Each installation includes argon gas filling and low-E coating for maximum thermal performance.</p> <div class="space-y-4"> <div class="flex items-start"> <div class="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1"> <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> <span class="ml-4 text-gray-700 leading-relaxed">A+ energy rating as standard across all Bishop's Stortford installations</span> </div> <div class="flex items-start"> <div class="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1"> <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> <span class="ml-4 text-gray-700 leading-relaxed">Local building regulations compliance with fast council approvals</span> </div> <div class="flex items-start"> <div class="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1"> <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> <span class="ml-4 text-gray-700 leading-relaxed">Free home surveys with same-day quotes for Bishop's Stortford residents</span> </div> </div> </div> <div class="lg:order-first"> <div class="rounded-3xl overflow-hidden shadow-2xl h-96 lg:h-[500px]"> <img src="/images/windowsbishopsstortford-blogimages/Double Glazing.webp" alt="Professional double glazing installation in Bishop's Stortford - energy efficient windows" class="w-full h-full object-cover" loading="lazy"> </div> </div> </div> </div> </div> </section>  <section id="window-repair" class="section-padding bg-white"> <div class="container-custom"> <div class="max-w-6xl mx-auto"> <div class="grid lg:grid-cols-2 gap-16 items-center"> <div> <h2 class="text-4xl font-extrabold text-green-800 mb-6 tracking-tight">Window Repair</h2> <p class="text-lg text-gray-600 mb-8 leading-relaxed">Expert window repair services for all frame types and glazing systems. From broken glass replacement to faulty lock mechanisms, our skilled technicians restore your windows to full functionality. We stock common parts for immediate repairs and source specialist components for heritage properties.</p> <div class="space-y-4"> <div class="flex items-start"> <div class="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1"> <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> <span class="ml-4 text-gray-700 leading-relaxed">Emergency callouts available 24/7 throughout Bishop's Stortford area</span> </div> <div class="flex items-start"> <div class="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1"> <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> <span class="ml-4 text-gray-700 leading-relaxed">Heritage window specialists familiar with local conservation requirements</span> </div> <div class="flex items-start"> <div class="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1"> <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> <span class="ml-4 text-gray-700 leading-relaxed">All repairs guaranteed with 2-year warranty on parts and labor</span> </div> </div> </div> <div> <div class="rounded-3xl overflow-hidden shadow-2xl h-96 lg:h-[500px]"> <img src="/images/windowsbishopsstortford-blogimages/Window Repair.webp" alt="Expert window repair services in Bishop's Stortford - professional technicians" class="w-full h-full object-cover" loading="lazy"> </div> </div> </div> </div> </div> </section>  <section id="window-replacement" class="section-padding bg-gray-50"> <div class="container-custom"> <div class="max-w-6xl mx-auto"> <div class="grid lg:grid-cols-2 gap-16 items-center"> <div> <h2 class="text-4xl font-extrabold text-green-800 mb-6 tracking-tight">Window Replacement</h2> <p class="text-lg text-gray-600 mb-8 leading-relaxed">Complete window replacement service from survey to final installation. We handle planning permissions, building regulations, and coordinate with local authorities. Our replacement windows are designed to match your property's architectural style while delivering modern performance standards.</p> <div class="space-y-4"> <div class="flex items-start"> <div class="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1"> <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> <span class="ml-4 text-gray-700 leading-relaxed">Free planning permission assistance for Bishop's Stortford conservation areas</span> </div> <div class="flex items-start"> <div class="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1"> <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> <span class="ml-4 text-gray-700 leading-relaxed">Minimal disruption installation typically completed within one day</span> </div> <div class="flex items-start"> <div class="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1"> <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> <span class="ml-4 text-gray-700 leading-relaxed">10-year comprehensive warranty covering frames, glass, and hardware</span> </div> </div> </div> <div class="lg:order-first"> <div class="rounded-3xl overflow-hidden shadow-2xl h-96 lg:h-[500px]"> <img src="/images/windowsbishopsstortford-blogimages/Window Replacement.webp" alt="Complete window replacement service in Bishop's Stortford - modern performance standards" class="w-full h-full object-cover" loading="lazy"> </div> </div> </div> </div> </div> </section>  <section class="section-padding bg-white"> <div class="container-custom"> <div class="text-center mb-16"> <h2 class="text-4xl lg:text-5xl font-extrabold text-green-800 mb-6 tracking-tight">
Frequently Asked Questions
</h2> <p class="text-xl text-gray-600 max-w-2xl mx-auto">
Everything you need to know about our window services in Bishop's Stortford
</p> </div> <div class="max-w-4xl mx-auto space-y-6"> ${siteData.faqs.map((faq, index) => renderTemplate`<div class="faq-item p-8"> <h3 class="text-xl font-bold mb-4 text-green-800 tracking-tight">${faq.question}</h3> <p class="text-gray-600 leading-relaxed">${faq.answer}</p> </div>`)} </div> </div> </section>  <section class="section-padding bg-gray-50"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-4xl font-extrabold text-green-800 mb-4 tracking-tight">
What Our Customers Say
</h2> </div> <div class="max-w-4xl mx-auto"> <div class="testimonial-card"> <div class="flex flex-col lg:flex-row items-center gap-8"> <div class="flex-shrink-0"> <img${addAttribute(siteData.testimonial.image, "src")} alt="Customer testimonial - satisfied window installation client" class="w-32 h-32 rounded-3xl object-cover shadow-lg" loading="lazy"> </div> <div class="flex-1 text-center lg:text-left"> <blockquote class="text-2xl font-medium text-gray-700 mb-6 leading-relaxed">
"${siteData.testimonial.text}"
</blockquote> <div class="mb-4"> <cite class="text-green-800 font-bold text-lg">
Rebecca. S
</cite> <p class="text-gray-600">${siteData.testimonial.location}</p> </div> <p class="text-sm text-gray-500 leading-relaxed">${siteData.testimonial.project}</p> </div> </div> </div> </div> </div> </section>  <section id="contact" class="section-padding hero-gradient text-white relative overflow-hidden"> <div class="hero-overlay absolute inset-0"></div> <div class="relative container-custom"> <div class="max-w-3xl mx-auto text-center"> <h2 class="text-4xl lg:text-5xl font-extrabold mb-8 tracking-tight text-white">
Get Your Free Quote Today
</h2> <p class="text-xl mb-12 text-green-50 leading-relaxed">
Ready to upgrade your windows? Get a free, no-obligation quote from ${siteData.site.town}'s trusted window specialists.
</p> ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} </div> </div> <!-- Decorative elements --> <div class="absolute -top-24 -right-24 w-96 h-96 bg-green-400 rounded-full opacity-10 blur-3xl"></div> <div class="absolute -bottom-32 -left-32 w-128 h-128 bg-green-300 rounded-full opacity-10 blur-3xl"></div> </section> ` })}`;
}, "/Users/max/Desktop/windowsbishopsstortford-website/src/pages/index.astro", void 0);

const $$file = "/Users/max/Desktop/windowsbishopsstortford-website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
