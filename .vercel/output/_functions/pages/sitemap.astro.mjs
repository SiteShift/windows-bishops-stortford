/* empty css                                  */
import { A as AstroError, U as UnknownContentCollectionError, c as createComponent, k as RenderUndefinedEntryError, u as unescapeHTML, a as renderTemplate, l as renderUniqueStylesheet, n as renderScriptElement, o as createHeadAndContent, b as renderComponent, m as maybeRenderHead, f as addAttribute } from '../chunks/astro/server_C8sX5OP2.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Layout_Ds5uocrA.mjs';
import { escape } from 'html-escaper';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { z } from 'zod';
import { r as removeBase, i as isRemotePath, p as prependForwardSlash } from '../chunks/path_bxFO2Kst.mjs';
import { V as VALID_INPUT_FORMATS } from '../chunks/consts_BmVDRGlB.mjs';
import * as devalue from 'devalue';
export { renderers } from '../renderers.mjs';

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('../chunks/_astro_data-layer-content_D_KTK9Ou.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_CONTACT_FORM_ENDPOINT": "https://your-webhook-endpoint.com/contact", "PUBLIC_GA4_MEASUREMENT_ID": "G-XXXXXXXXXX", "PUBLIC_GOOGLE_MAPS_API_KEY": "AIzaSyB8HGF7tMH_-onhmG1Ggq0oHN8eXjBXvmc", "SITE": "https://windowsbishopsstortford.com", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
z.object({
  tags: z.array(z.string()).optional(),
  maxAge: z.number().optional(),
  lastModified: z.date().optional()
});
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection,
  liveCollections
}) {
  return async function getCollection(collection, filter) {
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
      });
    }
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('../chunks/content-assets_DleWbedO.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (entry.legacyId) {
          entry = emulateLegacyEntry(entry);
        }
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('../chunks/content-assets_DleWbedO.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('../chunks/_astro_assets_DwkiBizk.mjs').then(n => n._);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute,
      // This attribute is used by the toolbar audit
      ...Object.assign(__vite_import_meta_env__, { _: process.env._ }).DEV ? { "data-image-component": "true" } : {}
    }).map(([key, value]) => value ? `${key}="${escape(value)}"` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('../chunks/content-modules_Dz-S_Wwv.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const liveCollections = {};

const contentDir = '/src/content/';

const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
	liveCollections,
});

const $$Sitemap = createComponent(async ($$result, $$props, $$slots) => {
  const blogPosts = await getCollection("blog");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sitemap | Windows Bishop's Stortford", "description": "Complete sitemap for Windows Bishop's Stortford. Find all our pages including window services, blog posts, and helpful resources." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})}  ${maybeRenderHead()}<section class="hero-gradient text-white relative overflow-hidden"> <div class="hero-overlay absolute inset-0"></div> <div class="relative container-custom section-padding"> <div class="max-w-4xl mx-auto text-center"> <!-- Breadcrumb --> <nav class="flex justify-center mb-8" aria-label="Breadcrumb"> <ol class="flex items-center space-x-2 text-green-200"> <li><a href="/" class="hover:text-white transition-colors">Home</a></li> <li class="text-green-300">&gt;</li> <li class="text-white">Sitemap</li> </ol> </nav> <h1 class="text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
Sitemap
</h1> <p class="text-xl lg:text-2xl mb-8 text-gray-100 leading-relaxed">
Complete guide to all pages on our website
</p> </div> </div> </section>  <section class="section-padding bg-white"> <div class="container-custom"> <div class="max-w-4xl mx-auto"> <!-- Main Pages --> <div class="mb-12"> <h2 class="text-3xl font-bold text-green-800 mb-6">Main Pages</h2> <div class="grid md:grid-cols-2 gap-4"> <div class="bg-gray-50 p-4 rounded-lg"> <h3 class="text-xl font-semibold text-green-700 mb-3">Core Pages</h3> <ul class="space-y-2"> <li><a href="/" class="text-blue-600 hover:text-blue-800 transition-colors">Home</a></li> <li><a href="/contact" class="text-blue-600 hover:text-blue-800 transition-colors">Contact Us</a></li> <li><a href="/blog" class="text-blue-600 hover:text-blue-800 transition-colors">Blog</a></li> <li><a href="/thank-you" class="text-blue-600 hover:text-blue-800 transition-colors">Thank You</a></li> </ul> </div> <div class="bg-gray-50 p-4 rounded-lg"> <h3 class="text-xl font-semibold text-green-700 mb-3">Legal Pages</h3> <ul class="space-y-2"> <li><a href="/privacy" class="text-blue-600 hover:text-blue-800 transition-colors">Privacy Policy</a></li> <li><a href="/terms" class="text-blue-600 hover:text-blue-800 transition-colors">Terms of Service</a></li> <li><a href="/sitemap" class="text-blue-600 hover:text-blue-800 transition-colors">Sitemap</a></li> </ul> </div> </div> </div> <!-- Service Hub Pages --> <div class="mb-12"> <h2 class="text-3xl font-bold text-green-800 mb-6">Window Services</h2> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4"> <div class="bg-green-50 p-4 rounded-lg"> <h3 class="text-lg font-semibold text-green-700 mb-3">Installation</h3> <a href="/window-installation-bishops-stortford" class="text-blue-600 hover:text-blue-800 transition-colors">
Window Installation Bishop's Stortford
</a> </div> <div class="bg-green-50 p-4 rounded-lg"> <h3 class="text-lg font-semibold text-green-700 mb-3">Types & Materials</h3> <a href="/window-types" class="text-blue-600 hover:text-blue-800 transition-colors">
Window Types & Materials Guide
</a> </div> <div class="bg-green-50 p-4 rounded-lg"> <h3 class="text-lg font-semibold text-green-700 mb-3">Energy Efficiency</h3> <a href="/energy-efficient-windows" class="text-blue-600 hover:text-blue-800 transition-colors">
Energy Efficient Windows
</a> </div> <div class="bg-green-50 p-4 rounded-lg"> <h3 class="text-lg font-semibold text-green-700 mb-3">Repairs</h3> <a href="/window-repair-bishops-stortford" class="text-blue-600 hover:text-blue-800 transition-colors">
Window Repair Bishop's Stortford
</a> </div> <div class="bg-green-50 p-4 rounded-lg"> <h3 class="text-lg font-semibold text-green-700 mb-3">Costs & Finance</h3> <a href="/window-costs-finance" class="text-blue-600 hover:text-blue-800 transition-colors">
Window Costs & Finance Options
</a> </div> </div> </div> <!-- Blog Posts --> <div class="mb-12"> <h2 class="text-3xl font-bold text-green-800 mb-6">Blog Posts</h2> <div class="bg-gray-50 p-6 rounded-lg"> <p class="text-gray-600 mb-4">Expert guides and advice from 38 years of window industry experience:</p> <div class="grid md:grid-cols-2 gap-3"> ${blogPosts.map((post) => renderTemplate`<div class="py-2"> <a${addAttribute(`/blog/${post.id}`, "href")} class="text-blue-600 hover:text-blue-800 transition-colors block"> ${post.data.title} </a> <p class="text-sm text-gray-500 mt-1"> ${new Date(post.data.publishDate).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </p> </div>`)} </div> </div> </div> <!-- Quick Navigation --> <div class="bg-green-800 text-white p-8 rounded-xl"> <h2 class="text-2xl font-bold mb-4">Quick Navigation</h2> <div class="grid md:grid-cols-3 gap-6"> <div> <h3 class="text-lg font-semibold mb-3">Get Started</h3> <ul class="space-y-2 text-green-100"> <li><a href="/contact" class="hover:text-white transition-colors">Get Free Quote</a></li> <li><a href="/#businesses" class="hover:text-white transition-colors">Find Local Installers</a></li> <li><a href="/window-types" class="hover:text-white transition-colors">Choose Window Type</a></li> </ul> </div> <div> <h3 class="text-lg font-semibold mb-3">Learn More</h3> <ul class="space-y-2 text-green-100"> <li><a href="/energy-efficient-windows" class="hover:text-white transition-colors">Energy Savings</a></li> <li><a href="/window-costs-finance" class="hover:text-white transition-colors">Pricing & Finance</a></li> <li><a href="/blog" class="hover:text-white transition-colors">Expert Guides</a></li> </ul> </div> <div> <h3 class="text-lg font-semibold mb-3">Need Help?</h3> <ul class="space-y-2 text-green-100"> <li><a href="/window-repair-bishops-stortford" class="hover:text-white transition-colors">Window Repairs</a></li> <li><a href="/contact" class="hover:text-white transition-colors">Contact Support</a></li> <li><a href="/privacy" class="hover:text-white transition-colors">Privacy Policy</a></li> </ul> </div> </div> </div> </div> </div> </section> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/max/Desktop/windowsbishopsstortford-website/src/pages/sitemap.astro", void 0);

const $$file = "/Users/max/Desktop/windowsbishopsstortford-website/src/pages/sitemap.astro";
const $$url = "/sitemap";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sitemap,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
