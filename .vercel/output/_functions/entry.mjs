import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_iQWCg1io.mjs';
import { manifest } from './manifest_DGWdvksM.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/submit.astro.mjs');
const _page2 = () => import('./pages/blog.astro.mjs');
const _page3 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/energy-efficient-windows.astro.mjs');
const _page6 = () => import('./pages/privacy.astro.mjs');
const _page7 = () => import('./pages/sitemap.astro.mjs');
const _page8 = () => import('./pages/terms.astro.mjs');
const _page9 = () => import('./pages/thank-you.astro.mjs');
const _page10 = () => import('./pages/window-costs-finance.astro.mjs');
const _page11 = () => import('./pages/window-installation-bishops-stortford.astro.mjs');
const _page12 = () => import('./pages/window-repair-bishops-stortford.astro.mjs');
const _page13 = () => import('./pages/window-types.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/submit.ts", _page1],
    ["src/pages/blog/index.astro", _page2],
    ["src/pages/blog/[...slug].astro", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/energy-efficient-windows.astro", _page5],
    ["src/pages/privacy.astro", _page6],
    ["src/pages/sitemap.astro", _page7],
    ["src/pages/terms.astro", _page8],
    ["src/pages/thank-you.astro", _page9],
    ["src/pages/window-costs-finance.astro", _page10],
    ["src/pages/window-installation-bishops-stortford.astro", _page11],
    ["src/pages/window-repair-bishops-stortford.astro", _page12],
    ["src/pages/window-types.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "96458d9b-d071-487f-b902-8f550669f9b8",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
