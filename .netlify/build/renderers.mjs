import _renderer0 from '@astrojs/lit/server.js';
import { h as renderJSX, g as createVNode, A as AstroJSX, i as AstroUserError } from './chunks/astro/server_Cm_SQDaQ.mjs';
import 'kleur/colors';
import 'clsx';

const slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
async function check(Component, props, { default: children = null, ...slotted } = {}) {
  if (typeof Component !== "function") return false;
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  try {
    const result = await Component({ ...props, ...slots, children });
    return result[AstroJSX];
  } catch (e) {
    throwEnhancedErrorIfMdxComponent(e, Component);
  }
  return false;
}
async function renderToStaticMarkup(Component, props = {}, { default: children = null, ...slotted } = {}) {
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  const { result } = this;
  try {
    const html = await renderJSX(result, createVNode(Component, { ...props, ...slots, children }));
    return { html };
  } catch (e) {
    throwEnhancedErrorIfMdxComponent(e, Component);
    throw e;
  }
}
function throwEnhancedErrorIfMdxComponent(error, Component) {
  if (Component[Symbol.for("mdx-component")]) {
    if (AstroUserError.is(error)) return;
    error.title = error.name;
    error.hint = `This issue often occurs when your MDX component encounters runtime errors.`;
    throw error;
  }
}
const renderer = {
  name: "astro:jsx",
  check,
  renderToStaticMarkup
};
var server_default = renderer;

const renderers = [Object.assign({"name":"@astrojs/lit","serverEntrypoint":"@astrojs/lit/server.js","clientEntrypoint":"@astrojs/lit/dist/client.js"}, { ssr: _renderer0 }),Object.assign({"name":"astro:jsx","serverEntrypoint":"file:///Users/chairaharder/Desktop/odyssey-theme-main/node_modules/@astrojs/mdx/dist/server.js"}, { ssr: server_default }),];

export { renderers };
