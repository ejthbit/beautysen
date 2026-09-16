process.env.NODE_ENV = 'production';

import { build } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const routes = ['/', '/o-nas'];

async function prerender() {
  // 1. Build client bundle
  console.log('\n▸ Building client...');
  await build({});

  // 2. Build server entry (SSR)
  console.log('\n▸ Building server entry...');
  await build({
    mode: 'production',
    build: {
      ssr: 'src/entry-server.jsx',
      outDir: 'dist-ssr',
      rollupOptions: { output: { format: 'esm' } },
    },
  });

  // 3. Render each route and write HTML
  const { render } = await import(path.resolve(__dirname, 'dist-ssr/entry-server.js'));
  let template = fs.readFileSync(path.resolve(__dirname, 'build/index.html'), 'utf-8');

  // Inline the compiled stylesheet so the first paint doesn't wait on an
  // extra render-blocking request for a file that's only a few KB anyway.
  // Scoped to /assets/ so this can't accidentally grab the fonts.css
  // noscript fallback link, which must stay external and async-loaded.
  const stylesheetMatch = template.match(/<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/);
  if (stylesheetMatch) {
    const cssPath = path.resolve(__dirname, 'build', stylesheetMatch[1].replace(/^\//, ''));
    const css = fs.readFileSync(cssPath, 'utf-8');
    template = template.replace(stylesheetMatch[0], `<style>${css}</style>`);
  }

  // The static template's <head> carries the homepage's own description,
  // canonical, OpenGraph and Twitter tags. For every other route those must
  // be swapped out for react-helmet-async's per-route versions rather than
  // appended, otherwise the page ends up with two conflicting canonicals /
  // descriptions (and Google picks whichever confuses it least).
  const stripHeadTags = (html, needles) =>
    html.replace(/<(meta|link)\b[^]*?\/>/g, (tag) => (needles.some((needle) => tag.includes(needle)) ? '' : tag));
  const routeSpecificTagNeedles = [
    'name="description"',
    'name="robots"',
    'rel="canonical"',
    'property="og:',
    'name="twitter:',
    'name="keywords"',
  ];

  for (const route of routes) {
    const { html, helmet } = render(route);

    let page = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

    if (helmet) {
      if (helmet.title?.toString()) {
        page = page.replace(/<title>[^<]*<\/title>/, helmet.title.toString());
      }
      page = stripHeadTags(page, routeSpecificTagNeedles);
      const headInjections = [helmet.meta, helmet.link, helmet.script]
        .map((tag) => tag?.toString())
        .filter(Boolean)
        .join('');
      if (headInjections) {
        page = page.replace('</head>', `${headInjections}</head>`);
      }
    }

    const file =
      route === '/' ? 'build/index.html' : `build${route}/index.html`;
    const outPath = path.resolve(__dirname, file);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, page);
    console.log('  ✓', route, '→', file);
  }

  // 4. Clean up SSR build artifacts
  fs.rmSync(path.resolve(__dirname, 'dist-ssr'), { recursive: true });
  console.log('\n✓ Pre-rendering complete\n');
}

prerender().catch((e) => {
  console.error(e);
  process.exit(1);
});
