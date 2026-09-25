import fs from 'fs';
import path from 'path';
import express, { Request, Response, NextFunction } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
const isProd = process.env.NODE_ENV === 'production' || fs.existsSync(path.resolve(process.cwd(), 'dist'));

async function createServer() {
  if (!isProd) {
    // Development mode with Vite middleware
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true, port: 3000 },
      appType: 'custom'
    });

    app.use(vite.middlewares);

    app.use('*', async (req: Request, res: Response, next: NextFunction) => {
      const url = req.originalUrl;
      try {
        let template = fs.readFileSync(path.resolve(process.cwd(), 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    // Production mode serving pre-rendered static HTML files
    const distDir = path.resolve(process.cwd(), 'dist');

    // Asset caching middleware for versioned assets
    app.use('/assets', express.static(path.join(distDir, 'assets'), {
      maxAge: '1y',
      immutable: true,
      index: false
    }));

    // Static files middleware (images, manifest, robots, sitemap)
    app.use(express.static(distDir, {
      maxAge: '1h',
      index: false,
      redirect: false
    }));

    // Route handler with accurate HTTP status codes (200 for valid routes, 404 for invalid)
    app.use((req: Request, res: Response) => {
      let rawPath = req.originalUrl.split('?')[0];
      if (rawPath.length > 1 && rawPath.endsWith('/')) {
        rawPath = rawPath.slice(0, -1);
      }

      // Check if exact pre-rendered file exists in dist
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
          .set({
            'Content-Type': 'text/html; charset=UTF-8',
            'Cache-Control': 'public, max-age=0, must-revalidate'
          })
          .sendFile(filePath);
      } else {
        // Return 404 status code with pre-rendered 404.html
        const file404 = path.join(distDir, '404.html');
        if (fs.existsSync(file404)) {
          res.status(404)
            .set({
              'Content-Type': 'text/html; charset=UTF-8',
              'Cache-Control': 'no-cache, no-store, must-revalidate'
            })
            .sendFile(file404);
        } else {
          res.status(404).send('404 Not Found');
        }
      }
    });
  }

  app.listen(PORT, () => {
    console.log(`🌐 Server running on http://0.0.0.0:${PORT} [${isProd ? 'PRODUCTION' : 'DEVELOPMENT'}]`);
  });
}

createServer();
