import fs from 'fs';
import path from 'path';
import express from 'express';
import http from 'http';

const distDir = path.resolve(process.cwd(), 'dist');

const app = express();

app.use('/assets', express.static(path.join(distDir, 'assets')));
app.use(express.static(distDir, { index: false, redirect: false }));

app.use((req, res) => {
  let rawPath = req.originalUrl.split('?')[0];
  if (rawPath.length > 1 && rawPath.endsWith('/')) {
    rawPath = rawPath.slice(0, -1);
  }

  let filePath = '';
  if (rawPath === '/') {
    filePath = path.join(distDir, 'index.html');
  } else {
    const directFile = path.join(distDir, rawPath, 'index.html');
    const altFile = path.join(distDir, `${rawPath}.html`);
    if (fs.existsSync(directFile)) {
      filePath = directFile;
    } else if (fs.existsSync(altFile)) {
      filePath = altFile;
    }
  }

  if (filePath && fs.existsSync(filePath)) {
    res.status(200)
      .set({ 'Content-Type': 'text/html; charset=UTF-8' })
      .sendFile(filePath);
  } else {
    const file404 = path.join(distDir, '404.html');
    if (fs.existsSync(file404)) {
      res.status(404)
        .set({ 'Content-Type': 'text/html; charset=UTF-8' })
        .sendFile(file404);
    } else {
      res.status(404).send('404 Not Found');
    }
  }
});

const server = app.listen(3009, async () => {
  console.log('Testing HTTP requests on port 3009...\n');

  const testRoutes = [
    '/',
    '/servico/caca-vazamento-digital',
    '/cidade/curitiba',
    '/bairro/agua-verde',
    '/cidade/curitiba-inexistente-404'
  ];

  for (const route of testRoutes) {
    await new Promise<void>((resolve) => {
      http.get(`http://127.0.0.1:3009${route}`, (res) => {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
          const titleMatch = body.match(/<title>(.*?)<\/title>/i);
          const canonicalMatch = body.match(/<link rel="canonical" href="(.*?)"/i);
          const h1Match = body.match(/<h1[^>]*>(.*?)<\/h1>/i);

          console.log(`========================================`);
          console.log(`URL: ${route}`);
          console.log(`HTTP Status: ${res.statusCode}`);
          console.log(`Title: ${titleMatch ? titleMatch[1] : 'N/A'}`);
          console.log(`Canonical: ${canonicalMatch ? canonicalMatch[1] : 'N/A'}`);
          console.log(`H1: ${h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : 'N/A'}`);
          console.log(`Pre-rendered Content Length: ${body.length} bytes`);
          console.log(`Root contains pre-rendered HTML: ${body.includes('<div id="root"><')}`);
          console.log(`========================================\n`);
          resolve();
        });
      });
    });
  }

  server.close(() => {
    process.exit(0);
  });
});
