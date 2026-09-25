import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { getAllRoutes, getRouteMetadata, RouteMeta } from '../src/routesData';

const distDir = path.resolve(process.cwd(), 'dist');
const templatePath = path.resolve(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('Error: dist/index.html not found. Run "vite build" first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf-8');

function renderPage(route: string, meta: RouteMeta): string {
  const bodyHtml = renderToString(
    React.createElement(
      MemoryRouter,
      { initialEntries: [route] },
      React.createElement(App)
    )
  );

  let html = template;

  // Replace Title
  html = html.replace(
    /<title>.*?<\/title>/s,
    `<title>${meta.title}</title>`
  );

  // Replace Meta Description
  const descTag = `<meta name="description" content="${meta.description.replace(/"/g, '&quot;')}">`;
  if (html.includes('<meta name="description"')) {
    html = html.replace(/<meta name="description"[^>]*>/s, descTag);
  } else {
    html = html.replace('</head>', `  ${descTag}\n</head>`);
  }

  // Replace Canonical Link (Ensure EXACTLY ONE canonical link)
  const canonicalTag = `<link rel="canonical" href="${meta.canonical}" />`;
  if (html.includes('<link rel="canonical"')) {
    html = html.replace(/<link rel="canonical"[^>]*>/s, canonicalTag);
  } else {
    html = html.replace('</head>', `  ${canonicalTag}\n</head>`);
  }

  // Replace OpenGraph Tags
  if (html.includes('<meta property="og:title"')) {
    html = html.replace(/<meta property="og:title"[^>]*>/s, `<meta property="og:title" content="${meta.title.replace(/"/g, '&quot;')}" />`);
  }
  if (html.includes('<meta property="og:description"')) {
    html = html.replace(/<meta property="og:description"[^>]*>/s, `<meta property="og:description" content="${meta.description.replace(/"/g, '&quot;')}" />`);
  }
  if (html.includes('<meta property="og:url"')) {
    html = html.replace(/<meta property="og:url"[^>]*>/s, `<meta property="og:url" content="${meta.canonical}" />`);
  }

  // Inject JSON-LD Schema
  const schemaScript = `\n    <script type="application/ld+json" id="route-schema">\n${JSON.stringify(meta.schemaJson, null, 2)}\n    </script>`;
  html = html.replace('</head>', `${schemaScript}\n</head>`);

  // Inject rendered React DOM
  html = html.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);

  return html;
}

async function runPrerender() {
  console.log('🚀 Starting SSG Pre-rendering for all routes...');
  const routes = getAllRoutes();

  let count = 0;
  for (const route of routes) {
    const meta = getRouteMetadata(route);
    if (!meta) continue;

    const pageHtml = renderPage(route, meta);

    let filePath: string;
    if (route === '/') {
      filePath = path.join(distDir, 'index.html');
    } else {
      const cleanRoute = route.replace(/^\//, '');
      const folderPath = path.join(distDir, cleanRoute);
      fs.mkdirSync(folderPath, { recursive: true });
      filePath = path.join(folderPath, 'index.html');
    }

    fs.writeFileSync(filePath, pageHtml, 'utf-8');
    count++;
  }

  console.log(`✅ Pre-rendered ${count} valid routes successfully.`);

  // Render 404 Page
  console.log('📄 Rendering 404 page...');
  const meta404: RouteMeta = {
    path: '/404',
    title: 'Página Não Encontrada (404) | Desentupidora ADP Curitiba',
    description: 'A página solicitada não foi encontrada. Entre em contato com a Desentupidora ADP para atendimento de encanador 24h em Curitiba.',
    canonical: 'https://www.encanador.servicosnobairro.com.br/404',
    h1: 'Página Não Encontrada (404)',
    type: '404',
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Página Não Encontrada (404)'
    }
  };

  const html404 = renderPage('/404-non-existent-page', meta404);
  fs.writeFileSync(path.join(distDir, '404.html'), html404, 'utf-8');
  console.log('✅ Generated dist/404.html successfully.');

  // Generate sitemap.xml
  console.log('🗺️ Generating sitemap.xml...');
  const sitemapEntries = routes.map((r) => {
    const loc = r === '/' ? 'https://www.encanador.servicosnobairro.com.br/' : `https://www.encanador.servicosnobairro.com.br${r}`;
    let priority = '0.6';
    if (r === '/') priority = '1.0';
    else if (r === '/servicos' || r === '/contato') priority = '0.8';
    else if (r.startsWith('/servico/')) priority = '0.9';
    else if (r.startsWith('/cidade/')) priority = '0.7';

    // Only include lastmod if known/relevant (e.g., home page)
    const lastmodTag = r === '/' ? '<lastmod>2026-04-24</lastmod>' : '';

    return `  <url><loc>${loc}</loc>${lastmodTag}<priority>${priority}</priority></url>`;
  });

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.join('\n')}
</urlset>`;

  fs.writeFileSync(path.resolve(process.cwd(), 'sitemap.xml'), sitemapXml, 'utf-8');
  fs.writeFileSync(path.resolve(process.cwd(), 'public', 'sitemap.xml'), sitemapXml, 'utf-8');
  fs.writeFileSync(path.resolve(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');

  console.log('✅ sitemap.xml generated with', routes.length, 'valid indexable URLs.');
}

runPrerender().catch((err) => {
  console.error('❌ Error during pre-rendering:', err);
  process.exit(1);
});
