# ADP Encanador Curitiba 24h

## Overview
A React + Vite + TypeScript website for a plumbing service in Curitiba, Brazil. This is a static frontend application with comprehensive SEO optimization.

## Project Architecture
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS (via CDN)
- **Routing**: React Router DOM (BrowserRouter for SEO-friendly URLs)

## Structure
```
/
├── components/          # Reusable React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── FAQ.tsx
│   ├── ContactForm.tsx
│   ├── FixedButtons.tsx
│   └── VideoSection.tsx
├── pages/               # Page components
│   ├── Home.tsx
│   ├── DynamicPage.tsx  # Handles /bairro, /cidade, /servico routes
│   ├── Sitemap.tsx
│   └── NotFound.tsx     # 404 page
├── utils/
│   └── seo.ts           # SEO utilities (meta tags, schemas)
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── _redirects       # Netlify redirects
│   └── .htaccess        # Apache redirects
├── App.tsx              # Main app with routing
├── index.tsx            # Entry point
├── index.html           # HTML with SEO meta tags
├── constants.ts         # App data (services, locations, FAQs)
├── types.ts             # TypeScript types
├── vercel.json          # Vercel SPA config
└── netlify.toml         # Netlify SPA config
```

## SEO Features
- **Dynamic Meta Tags**: Title, description, keywords per page
- **Canonical URLs**: Proper canonical links for all pages
- **Schema Markup**: LocalBusiness, Service, FAQ, Breadcrumb, VideoObject
- **Open Graph & Twitter Cards**: Social sharing optimization
- **Geo Tags**: Location-based SEO for Curitiba region
- **Sitemap.xml**: XML sitemap for search engines
- **Robots.txt**: Search engine crawling directives

## Development
- **Dev Server**: `npm run dev` (runs on port 5000)
- **Build**: `npm run build` (outputs to `dist/`)
- **Preview**: `npm run preview`

## Configuration
- Vite is configured to allow all hosts for Replit proxy compatibility
- Server binds to `0.0.0.0:5000`
- BrowserRouter for clean URLs (no hash)

## Deployment
- Static deployment with `dist` as the public directory
- Build command: `npm run build`
- Redirect files for various hosts (Vercel, Netlify, Apache)

## Recent Changes (Dec 2024)
- Migrated from HashRouter to BrowserRouter for SEO-friendly URLs
- Added comprehensive SEO utilities module (utils/seo.ts)
- Implemented Schema Markup across all pages
- Added 404 page with proper SEO handling
- Created robots.txt and sitemap.xml
- Added redirect configurations for multiple hosting platforms
