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
  const template = fs.readFileSync(path.resolve(__dirname, 'build/index.html'), 'utf-8');

  for (const route of routes) {
    const { html, helmet } = render(route);

    let page = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

    if (helmet) {
      if (helmet.title?.toString()) {
        page = page.replace(/<title>[^<]*<\/title>/, helmet.title.toString());
      }
      if (helmet.meta?.toString()) {
        page = page.replace('</head>', `${helmet.meta.toString()}</head>`);
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
