import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_Cnddb19h.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/404.astro.mjs');
const _page1 = () => import('./pages/blog/posts/consider-hybrid-work.astro.mjs');
const _page2 = () => import('./pages/blog/posts/odyssey-theme-officially-released.astro.mjs');
const _page3 = () => import('./pages/blog/posts/remote-work-mental-health.astro.mjs');
const _page4 = () => import('./pages/blog/tags/_slug_.astro.mjs');
const _page5 = () => import('./pages/blog/tags.astro.mjs');
const _page6 = () => import('./pages/blog.astro.mjs');
const _page7 = () => import('./pages/company/about.astro.mjs');
const _page8 = () => import('./pages/company/contact.astro.mjs');
const _page9 = () => import('./pages/company/costcalculator.astro.mjs');
const _page10 = () => import('./pages/company/faq.astro.mjs');
const _page11 = () => import('./pages/company/impact.astro.mjs');
const _page12 = () => import('./pages/company/legal.astro.mjs');
const _page13 = () => import('./pages/company/services.astro.mjs');
const _page14 = () => import('./pages/landing-pages/landing-1.astro.mjs');
const _page15 = () => import('./pages/landing-pages/landing-2.astro.mjs');
const _page16 = () => import('./pages/landing-pages/landing-3.astro.mjs');
const _page17 = () => import('./pages/landing-pages/landing-4.astro.mjs');
const _page18 = () => import('./pages/landing-pages/og-landing-2.astro.mjs');
const _page19 = () => import('./pages/projects/project-posts/funke.astro.mjs');
const _page20 = () => import('./pages/projects/project-posts/pyxboxing.astro.mjs');
const _page21 = () => import('./pages/projects/project-posts/up2.astro.mjs');
const _page22 = () => import('./pages/projects/project-posts/usa-elite-training.astro.mjs');
const _page23 = () => import('./pages/projects/project-posts/wild-things-studio.astro.mjs');
const _page24 = () => import('./pages/projects/projects.astro.mjs');
const _page25 = () => import('./pages/theme/customizing-odyssey.astro.mjs');
const _page26 = () => import('./pages/theme/get-started.astro.mjs');
const _page27 = () => import('./pages/theme/style-guide.astro.mjs');
const _page28 = () => import('./pages/theme/theme-setup.astro.mjs');
const _page29 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/404.astro", _page0],
    ["src/pages/blog/posts/consider-hybrid-work.mdx", _page1],
    ["src/pages/blog/posts/odyssey-theme-officially-released.mdx", _page2],
    ["src/pages/blog/posts/remote-work-mental-health.mdx", _page3],
    ["src/pages/blog/tags/[slug].astro", _page4],
    ["src/pages/blog/tags/index.astro", _page5],
    ["src/pages/blog/index.astro", _page6],
    ["src/pages/company/about.astro", _page7],
    ["src/pages/company/contact.astro", _page8],
    ["src/pages/company/costcalculator.astro", _page9],
    ["src/pages/company/FAQ.astro", _page10],
    ["src/pages/company/impact.astro", _page11],
    ["src/pages/company/legal.astro", _page12],
    ["src/pages/company/services.astro", _page13],
    ["src/pages/landing-pages/landing-1.astro", _page14],
    ["src/pages/landing-pages/landing-2.astro", _page15],
    ["src/pages/landing-pages/landing-3.astro", _page16],
    ["src/pages/landing-pages/landing-4.astro", _page17],
    ["src/pages/landing-pages/og-landing-2.astro", _page18],
    ["src/pages/projects/project-posts/funke.mdx", _page19],
    ["src/pages/projects/project-posts/pyxboxing.mdx", _page20],
    ["src/pages/projects/project-posts/up2.mdx", _page21],
    ["src/pages/projects/project-posts/usa-elite-training.mdx", _page22],
    ["src/pages/projects/project-posts/wild-things-studio.mdx", _page23],
    ["src/pages/projects/projects.astro", _page24],
    ["src/pages/theme/customizing-odyssey.mdx", _page25],
    ["src/pages/theme/get-started.astro", _page26],
    ["src/pages/theme/style-guide.astro", _page27],
    ["src/pages/theme/theme-setup.mdx", _page28],
    ["src/pages/index.astro", _page29]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d65a4ad8-1112-42af-a11d-8b13136ff34d"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
