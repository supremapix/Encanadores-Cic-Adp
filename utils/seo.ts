export const SITE_URL = 'https://www.servicosadp.shop';

export const SEO_CONFIG = {
  siteName: 'ADP Encanador Curitiba 24h - Serviços ADP',
  defaultTitle: 'Encanador Curitiba 24h | Desentupimento Urgente | ADP',
  defaultDescription: 'Encanador 24h em Curitiba e região. Desentupimento urgente, caça-vazamentos, hidrojateamento e reparos hidráulicos. Atendimento imediato. (41) 98517-1966',
  defaultImage: 'https://desentope.aloanuncio.com.br/images/adp-desentupidora-1.webp',
  logo: 'https://desentope.aloanuncio.com.br/images/logo.png',
  phone: '+55-41-98517-1966',
  phoneDisplay: '(41) 98517-1966',
  address: {
    street: 'Rua Luiz Maltaca, 36',
    city: 'Curitiba',
    state: 'PR',
    country: 'BR',
    postalCode: '80000-000'
  },
  geo: {
    latitude: -25.4284,
    longitude: -49.2733
  },
  social: {
    facebook: 'https://www.facebook.com/adpdesentupidora',
    instagram: 'https://www.instagram.com/adpdesentupidora',
    website: 'https://desentopeadp.com.br/'
  }
};

export interface SEOData {
  title: string;
  description: string;
  canonical: string;
  keywords: string;
  type?: 'website' | 'article' | 'service';
  image?: string;
}

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": SEO_CONFIG.siteName,
  "image": SEO_CONFIG.logo,
  "url": SITE_URL,
  "telephone": SEO_CONFIG.phone,
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": SEO_CONFIG.address.street,
    "addressLocality": SEO_CONFIG.address.city,
    "addressRegion": SEO_CONFIG.address.state,
    "postalCode": SEO_CONFIG.address.postalCode,
    "addressCountry": SEO_CONFIG.address.country
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": SEO_CONFIG.geo.latitude,
    "longitude": SEO_CONFIG.geo.longitude
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    SEO_CONFIG.social.website,
    SEO_CONFIG.social.facebook,
    SEO_CONFIG.social.instagram
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "287"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": SEO_CONFIG.geo.latitude,
      "longitude": SEO_CONFIG.geo.longitude
    },
    "geoRadius": "50000"
  }
});

export const generateServiceSchema = (serviceName: string, serviceDescription: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": serviceName,
  "provider": {
    "@type": "LocalBusiness",
    "name": SEO_CONFIG.siteName,
    "telephone": SEO_CONFIG.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SEO_CONFIG.address.street,
      "addressLocality": SEO_CONFIG.address.city,
      "addressRegion": SEO_CONFIG.address.state,
      "addressCountry": SEO_CONFIG.address.country
    }
  },
  "description": serviceDescription,
  "areaServed": {
    "@type": "City",
    "name": "Curitiba"
  }
});

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const generateVideoSchema = (title: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": title,
  "description": description,
  "thumbnailUrl": "https://img.youtube.com/vi/jJ0WJqgXZ3k/maxresdefault.jpg",
  "uploadDate": "2024-01-15",
  "contentUrl": "https://youtu.be/jJ0WJqgXZ3k",
  "embedUrl": "https://www.youtube.com/embed/jJ0WJqgXZ3k"
});

export const updateMetaTags = (seoData: SEOData) => {
  document.title = seoData.title;

  const updateOrCreateMeta = (selector: string, attr: string, value: string) => {
    let meta = document.querySelector(selector) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      const [attrName, attrValue] = attr.split('=');
      meta.setAttribute(attrName, attrValue.replace(/"/g, ''));
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', value);
  };

  updateOrCreateMeta('meta[name="description"]', 'name="description"', seoData.description);
  updateOrCreateMeta('meta[name="keywords"]', 'name="keywords"', seoData.keywords);
  
  updateOrCreateMeta('meta[property="og:title"]', 'property="og:title"', seoData.title);
  updateOrCreateMeta('meta[property="og:description"]', 'property="og:description"', seoData.description);
  updateOrCreateMeta('meta[property="og:url"]', 'property="og:url"', seoData.canonical);
  updateOrCreateMeta('meta[property="og:image"]', 'property="og:image"', seoData.image || SEO_CONFIG.defaultImage);
  updateOrCreateMeta('meta[property="og:type"]', 'property="og:type"', seoData.type || 'website');
  updateOrCreateMeta('meta[property="og:site_name"]', 'property="og:site_name"', SEO_CONFIG.siteName);
  updateOrCreateMeta('meta[property="og:locale"]', 'property="og:locale"', 'pt_BR');
  
  updateOrCreateMeta('meta[name="twitter:card"]', 'name="twitter:card"', 'summary_large_image');
  updateOrCreateMeta('meta[name="twitter:title"]', 'name="twitter:title"', seoData.title);
  updateOrCreateMeta('meta[name="twitter:description"]', 'name="twitter:description"', seoData.description);
  updateOrCreateMeta('meta[name="twitter:image"]', 'name="twitter:image"', seoData.image || SEO_CONFIG.defaultImage);

  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', seoData.canonical);
};

export const injectSchema = (id: string, schema: object) => {
  let scriptTag = document.getElementById(id) as HTMLScriptElement | null;
  if (scriptTag) {
    scriptTag.textContent = JSON.stringify(schema);
  } else {
    scriptTag = document.createElement('script');
    scriptTag.id = id;
    scriptTag.type = 'application/ld+json';
    scriptTag.textContent = JSON.stringify(schema);
    document.head.appendChild(scriptTag);
  }
};

export const cleanupSchemas = (idsToKeep: string[] = []) => {
  const schemas = document.querySelectorAll('script[type="application/ld+json"]');
  schemas.forEach(schema => {
    if (schema.id && !idsToKeep.includes(schema.id)) {
      schema.remove();
    }
  });
};
