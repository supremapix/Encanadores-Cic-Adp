# ADP Encanador Curitiba 24h

## Overview
A React + Vite + TypeScript website for a plumbing service in Curitiba, Brazil. This is a static frontend application.

## Project Architecture
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS (via CDN)
- **Routing**: React Router DOM

## Structure
- `/components/` - Reusable React components (Header, Footer, Hero, FAQ, etc.)
- `/pages/` - Page components (Home, DynamicPage, Sitemap)
- `App.tsx` - Main application component with routing
- `index.tsx` - Application entry point
- `constants.ts` - App constants and configuration
- `types.ts` - TypeScript type definitions

## Development
- **Dev Server**: `npm run dev` (runs on port 5000)
- **Build**: `npm run build` (outputs to `dist/`)
- **Preview**: `npm run preview`

## Configuration
- Vite is configured to allow all hosts for Replit proxy compatibility
- Server binds to `0.0.0.0:5000`

## Deployment
- Static deployment with `dist` as the public directory
- Build command: `npm run build`
