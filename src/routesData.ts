import { MAIN_SERVICES, CONTACT_INFO, BAIRROS, CIDADES, getLocalizedFAQ, GENERAL_FAQS } from '../constants';

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  canonical: string;
  h1: string;
  schemaJson: object;
  type?: 'home' | 'servico' | 'cidade' | 'bairro' | 'static' | '404';
}

export const formatSlug = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

const DOMAIN = CONTACT_INFO.canonicalDomain.replace(/\/$/, '');

export const getRouteMetadata = (pathname: string): RouteMeta | null => {
  const cleanPath = pathname.replace(/\/$/, '') || '/';

  // 1. Home
  if (cleanPath === '/') {
    return {
      path: '/',
      title: "Encanador em Curitiba 24 Horas | Caça-Vazamento Digital e Desentupimento",
      description: "Serviço de desentupidora e encanador 24h em Curitiba e Região Metropolitana. Especialista em caça-vazamento digital com geofone, desentupimento técnico e laudo oficial para Sanepar.",
      canonical: `${DOMAIN}/`,
      h1: "Encanador e Caça-Vazamento 24h em Curitiba",
      type: 'home',
      schemaJson: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "PlumbingService",
            "@id": `${DOMAIN}/#organization`,
            "name": "Desentupidora ADP",
            "alternateName": "Desentupidora ADP e Encanador Curitiba 24 Horas",
            "url": `${DOMAIN}/`,
            "telephone": "+554133451194",
            "priceRange": "$$",
            "image": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua Luiz Maltaca, 36",
              "addressLocality": "Curitiba",
              "addressRegion": "PR",
              "postalCode": "81310-060",
              "addressCountry": "BR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -25.5138495,
              "longitude": -49.3364239
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59"
              }
            ],
            "areaServed": CIDADES.map(c => ({ "@type": "City", "name": c }))
          },
          {
            "@type": "FAQPage",
            "@id": `${DOMAIN}/#faq`,
            "mainEntity": GENERAL_FAQS.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          }
        ]
      }
    };
  }

  // 2. /servicos
  if (cleanPath === '/servicos') {
    return {
      path: '/servicos',
      title: "Serviços de Encanador em Curitiba | Caça-Vazamento, Desentupidora & Laudos",
      description: "Catálogo completo de serviços de encanador em Curitiba. Caça-vazamento digital com geofone, desentupimento 24h, laudos técnicos para Sanepar e manutenção hidráulica.",
      canonical: `${DOMAIN}/servicos`,
      h1: "Serviços Especializados de Encanador em Curitiba",
      type: 'static',
      schemaJson: {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Serviços de Encanador e Desentupidora em Curitiba",
        "itemListElement": MAIN_SERVICES.map((srv, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": srv.title,
          "url": `${DOMAIN}/servico/${srv.id}`
        }))
      }
    };
  }

  // 3. /sobre
  if (cleanPath === '/sobre') {
    return {
      path: '/sobre',
      title: "Sobre a Desentupidora ADP | ADP Engenharia Hidráulica em Curitiba",
      description: "Conheça a Desentupidora ADP e ADP Engenharia Hidráulica. Mais de uma década de experiência em caça-vazamento digital, desentupimento 24h e emissão de laudos técnicos em Curitiba.",
      canonical: `${DOMAIN}/sobre`,
      h1: "Sobre a Desentupidora ADP / ADP Engenharia",
      type: 'static',
      schemaJson: {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "Sobre a Desentupidora ADP Curitiba",
        "url": `${DOMAIN}/sobre`
      }
    };
  }

  // 4. /contato
  if (cleanPath === '/contato') {
    return {
      path: '/contato',
      title: "Contato & Plantão 24h | Desentupidora ADP Curitiba",
      description: "Entre em contato com a Desentupidora ADP / ADP Engenharia Hidráulica em Curitiba. Plantão 24h no WhatsApp (41) 98517-1966 e telefone fixo (41) 3345-1194.",
      canonical: `${DOMAIN}/contato`,
      h1: "Fale com a Central Técnica em Curitiba",
      type: 'static',
      schemaJson: {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Central de Atendimento 24h Desentupidora ADP",
        "url": `${DOMAIN}/contato`
      }
    };
  }

  // 5. /sitemap
  if (cleanPath === '/sitemap') {
    return {
      path: '/sitemap',
      title: "Mapa do Site | Desentupidora ADP Curitiba 24h",
      description: "Mapa completo de navegação do site Desentupidora ADP Curitiba. Acesso a todas as páginas de serviços, bairros e cidades atendidas.",
      canonical: `${DOMAIN}/sitemap`,
      h1: "Mapa do Site — Desentupidora ADP Curitiba",
      type: 'static',
      schemaJson: {
        "@context": "https://schema.org",
        "@type": "SiteNavigationElement",
        "name": "Mapa do Site",
        "url": `${DOMAIN}/sitemap`
      }
    };
  }

  // 6. /servico/:name
  if (cleanPath.startsWith('/servico/')) {
    const slug = cleanPath.replace('/servico/', '').trim();
    const service = MAIN_SERVICES.find(s => s.id === slug);
    if (!service) return null;

    const title = `${service.title} em Curitiba 24 Horas | Desentupidora ADP`;
    const description = `Especialista em ${service.title} em Curitiba e Região Metropolitana. Diagnóstico preciso, garantia de 90 dias e atendimento emergencial 24h.`;
    const canonical = `${DOMAIN}/servico/${slug}`;
    const faqs = getLocalizedFAQ(service.title);

    return {
      path: cleanPath,
      title,
      description,
      canonical,
      h1: `${service.title} em Curitiba`,
      type: 'servico',
      schemaJson: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "PlumbingService",
            "@id": `${canonical}#service`,
            "name": `Desentupidora ADP - ${service.title}`,
            "url": canonical,
            "telephone": "+554133451194",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua Luiz Maltaca, 36",
              "addressLocality": "Curitiba",
              "addressRegion": "PR",
              "postalCode": "81310-060",
              "addressCountry": "BR"
            }
          },
          {
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          }
        ]
      }
    };
  }

  // 7. /cidade/:name
  if (cleanPath.startsWith('/cidade/')) {
    const slug = cleanPath.replace('/cidade/', '').trim();
    const matchCity = CIDADES.find(c => formatSlug(c) === slug);
    if (!matchCity) return null;

    const title = `Encanador em ${matchCity} 24 Horas | Caça-Vazamento e Desentupidora RMC`;
    const description = `Encanador 24 horas em ${matchCity} e região metropolitana. Caça-vazamento ultrassônico, desentupimento de esgoto/pias e laudo para Sanepar. Atendimento rápido.`;
    const canonical = `${DOMAIN}/cidade/${slug}`;
    const faqs = getLocalizedFAQ(matchCity);

    return {
      path: cleanPath,
      title,
      description,
      canonical,
      h1: `Encanador em ${matchCity} 24 Horas`,
      type: 'cidade',
      schemaJson: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "PlumbingService",
            "@id": `${canonical}#service`,
            "name": `Desentupidora ADP - Encanador em ${matchCity}`,
            "url": canonical,
            "telephone": "+554133451194",
            "priceRange": "$$",
            "areaServed": {
              "@type": "City",
              "name": matchCity
            }
          },
          {
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          }
        ]
      }
    };
  }

  // 8. /bairro/:name
  if (cleanPath.startsWith('/bairro/')) {
    const slug = cleanPath.replace('/bairro/', '').trim();
    const matchBairro = BAIRROS.find(b => formatSlug(b) === slug);
    if (!matchBairro) return null;

    const title = `Encanador no ${matchBairro} Curitiba 24 Horas | Caça-Vazamento & Desentupimento`;
    const description = `Serviço de encanador 24h no bairro ${matchBairro} em Curitiba. Localização de vazamentos com geofone digital sem quebrar paredes, desentupimento e laudo Sanepar.`;
    const canonical = `${DOMAIN}/bairro/${slug}`;
    const faqs = getLocalizedFAQ(matchBairro);

    return {
      path: cleanPath,
      title,
      description,
      canonical,
      h1: `Encanador no bairro ${matchBairro} em Curitiba`,
      type: 'bairro',
      schemaJson: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "PlumbingService",
            "@id": `${canonical}#service`,
            "name": `Desentupidora ADP - Encanador no bairro ${matchBairro}`,
            "url": canonical,
            "telephone": "+554133451194",
            "priceRange": "$$",
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": matchBairro
            }
          },
          {
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          }
        ]
      }
    };
  }

  // Invalid route
  return null;
};

export const getAllRoutes = (): string[] => {
  const staticRoutes = ['/', '/servicos', '/sobre', '/contato', '/sitemap'];

  const serviceRoutes = MAIN_SERVICES.map(s => `/servico/${s.id}`);

  const cityRoutes = CIDADES.map(c => `/cidade/${formatSlug(c)}`);

  const bairroRoutes = BAIRROS.map(b => `/bairro/${formatSlug(b)}`);

  // Remove duplicates if any
  return Array.from(new Set([...staticRoutes, ...serviceRoutes, ...cityRoutes, ...bairroRoutes]));
};
