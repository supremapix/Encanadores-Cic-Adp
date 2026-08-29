import React, { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MAIN_SERVICES, 
  CONTACT_INFO, 
  getLocalizedFAQ, 
  NEIGHBORHOOD_GRAPH, 
  CITY_GRAPH,
  BAIRROS,
  CIDADES 
} from '../constants';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import ResponseTimeTracker from '../components/ResponseTimeTracker';
import NotFound from './NotFound';

interface DynamicPageProps {
  type: 'bairro' | 'cidade' | 'servico';
}

const DynamicPage: React.FC<DynamicPageProps> = ({ type }) => {
  const { name } = useParams<{ name: string }>();

  // Normalização do slug
  const slug = (name || '').toLowerCase().trim();

  // Encontrar o elemento correspondente
  const currentItem = useMemo(() => {
    if (type === 'servico') {
      return MAIN_SERVICES.find(s => s.id === slug);
    }
    if (type === 'bairro') {
      const match = BAIRROS.find(b => {
        const bSlug = b.toLowerCase()
          .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
        return bSlug === slug;
      });
      return match ? { id: slug, title: match } : null;
    }
    if (type === 'cidade') {
      const match = CIDADES.find(c => {
        const cSlug = c.toLowerCase()
          .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
        return cSlug === slug;
      });
      return match ? { id: slug, title: match } : null;
    }
    return null;
  }, [type, slug]);

  // Se não encontrar o item correspondente, retorna 404
  if (!currentItem) {
    return <NotFound />;
  }

  const title = currentItem.title;
  const canonicalUrl = `${CONTACT_INFO.canonicalDomain}/${type}/${slug}`;

  // Vizinhos no grafo geográfico
  const relatedNeighbors = useMemo(() => {
    if (type === 'bairro') {
      const neighbors = NEIGHBORHOOD_GRAPH[slug] || ["centro", "portao", "batel", "cidade-industrial-cic"];
      return neighbors.map(nSlug => {
        const found = BAIRROS.find(b => {
          const s = b.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
          return s === nSlug;
        });
        return { slug: nSlug, name: found || nSlug };
      });
    }
    if (type === 'cidade') {
      const neighbors = CITY_GRAPH[slug] || ["curitiba", "sao-jose-dos-pinhais", "pinhais"];
      return neighbors.map(nSlug => {
        const found = CIDADES.find(c => {
          const s = c.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
          return s === nSlug;
        });
        return { slug: nSlug, name: found || nSlug };
      });
    }
    return [];
  }, [type, slug]);

  const faqs = useMemo(() => getLocalizedFAQ(title), [title]);

  useEffect(() => {
    // SEO Titles & Meta Description
    let pageTitle = "";
    let pageDesc = "";

    if (type === 'bairro') {
      pageTitle = `Encanador no ${title} Curitiba 24 Horas | Caça-Vazamento & Desentupimento`;
      pageDesc = `Serviço de encanador 24h no bairro ${title} em Curitiba. Localização de vazamentos com geofone digital sem quebrar paredes, desentupimento e laudo Sanepar.`;
    } else if (type === 'cidade') {
      pageTitle = `Encanador em ${title} 24 Horas | Caça-Vazamento e Desentupidora RMC`;
      pageDesc = `Encanador 24 horas em ${title} e região metropolitana. Caça-vazamento ultrassônico, desentupimento de esgoto/pias e laudo para Sanepar. Atendimento rápido.`;
    } else {
      pageTitle = `${title} em Curitiba 24 Horas | Desentupidora ADP`;
      pageDesc = `Especialista em ${title} em Curitiba e Região Metropolitana. Diagnóstico preciso, garantia de 90 dias e atendimento emergencial 24h.`;
    }

    document.title = pageTitle;

    // Atualiza Meta Description & Canonical
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', pageDesc);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Injeta Schema JSON-LD dinâmico
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'dynamic-page-schema';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "PlumbingService",
          "@id": `${canonicalUrl}#service`,
          "name": `Desentupidora ADP - Encanador em ${title}`,
          "url": canonicalUrl,
          "telephone": "+554133451194",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rua Luiz Maltaca, 36",
            "addressLocality": type === 'cidade' ? title : "Curitiba",
            "addressRegion": "PR",
            "postalCode": "81310-060",
            "addressCountry": "BR"
          },
          "areaServed": {
            "@type": type === 'cidade' ? "City" : "AdministrativeArea",
            "name": title
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Início",
              "item": `${CONTACT_INFO.canonicalDomain}/`
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": type === 'bairro' ? "Bairros de Curitiba" : type === 'cidade' ? "Cidades RMC" : "Serviços",
              "item": `${CONTACT_INFO.canonicalDomain}/${type === 'servico' ? 'servicos' : 'sitemap'}`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": title,
              "item": canonicalUrl
            }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }
      ]
    });

    const oldScript = document.getElementById('dynamic-page-schema');
    if (oldScript) oldScript.remove();
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('dynamic-page-schema');
      if (el) el.remove();
    };
  }, [type, title, canonicalUrl, faqs]);

  return (
    <div className="bg-white">
      
      {/* 1. Dynamic Page Hero */}
      <section className="bg-slate-900 text-white pt-24 pb-12 md:pt-32 md:pb-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-4">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-white transition-colors">Início</Link>
            <span>/</span>
            <Link 
              to={type === 'servico' ? '/servicos' : '/sitemap'} 
              className="hover:text-white transition-colors"
            >
              {type === 'bairro' ? 'Bairros Curitiba' : type === 'cidade' ? 'Cidades RMC' : 'Serviços'}
            </Link>
            <span>/</span>
            <span className="text-yellow-400 font-semibold">{title}</span>
          </nav>

          {/* Heading */}
          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-yellow-400">
              <i className="fa-solid fa-clock"></i>
              <span>Atendimento 24 Horas em {title}</span>
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight">
              {type === 'bairro' && `Encanador no bairro ${title} em Curitiba`}
              {type === 'cidade' && `Encanador em ${title} 24 Horas`}
              {type === 'servico' && `${title} em Curitiba`}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
              {type === 'bairro' && `Equipes técnicas com geofone digital e maquinário rotativo para atendimento rápido em residências, condomínios e comércios no bairro ${title} e imediações.`}
              {type === 'cidade' && `Plantão 24h de caça-vazamentos, desentupimento técnico e reparos hidráulicos em ${title} com garantia por escrito e emissão de laudo técnico.`}
              {type === 'servico' && `Serviço especializado de ${title} executado por técnicos qualificados com tecnologia não invasiva, precisão milimétrica e garantia de 90 dias.`}
            </p>
          </div>

          {/* Quick Contact CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a 
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl shadow-md transition-all active:scale-95"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              <span>Solicitar Técnico em {title}</span>
            </a>

            <a 
              href={CONTACT_INFO.phoneLink}
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold px-4 py-3 rounded-xl border border-slate-700 transition-colors"
            >
              <i className="fa-solid fa-phone text-yellow-400"></i>
              <span>Ligar: {CONTACT_INFO.phone}</span>
            </a>
          </div>

        </div>
      </section>

      {/* 2. Structured Local Information Block */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Main Narrative */}
            <div className="lg:col-span-8 space-y-6 text-left">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  Diagnóstico Hidráulico Especializado
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Como a Desentupidora ADP Resolve Problemas Hidráulicos em {title}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  A rotina de imóveis em <strong className="text-slate-900">{title}</strong> exige rapidez quando surgem emergências como aumento repentino na conta de água, infiltrações na alvenaria, pias e vasos sanitários entupidos ou falhas em válvulas de descarga.
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Nossa base operacional está equipada com <strong>Geofone Eletrônico Ultrassônico</strong> para escutar o som exato do vazamento por baixo de pisos cerâmicos, porcelanatos, lajes e jardins. Isso elimina a necessidade de abrir valas ou quebrar paredes sem certeza do ponto exato.
                </p>
              </div>

              {/* Service Cards for this location */}
              <div className="space-y-3 pt-2">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                  Serviços Mais Solicitados em {title}:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
                      <i className="fa-solid fa-crosshairs text-blue-600"></i>
                      <span>Caça-Vazamento Digital</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Localização sem quebra de fugas em ramais da Sanepar, caixas d'água e tubulações de água fria/quente.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <i className="fa-solid fa-vial-circle-check text-blue-600"></i>
                      <span>Desentupidora 24 Horas</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Desobstrução de vasos sanitários, caixas de gordura, ralos, pias e colunas com maquinário rotativo.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <i className="fa-solid fa-file-signature text-blue-600"></i>
                      <span>Laudo Técnico Sanepar</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Documentação técnica comprobatória para pleitear abatimento na fatura de esgoto após o conserto.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <i className="fa-solid fa-wrench text-blue-600"></i>
                      <span>Reparos & Manutenção</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Substituição de registros, troca de reparos Hydra/Docol, sifões, barriletes e prumadas condominiais.
                    </p>
                  </div>
                </div>
              </div>

              {/* Geographic Neighbors Links (Grafo Geográfico) */}
              {relatedNeighbors.length > 0 && (
                <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-2">
                    <i className="fa-solid fa-location-arrow text-blue-700"></i>
                    <span>Regiões e Bairros Vizinhos Atendidos:</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {relatedNeighbors.map((nb) => (
                      <Link
                        key={nb.slug}
                        to={`/${type}/${nb.slug}`}
                        className="text-xs bg-white text-slate-700 hover:text-blue-800 px-3 py-1.5 rounded-lg border border-blue-200 hover:border-blue-400 transition-all font-medium shadow-2xs"
                      >
                        Encanador {nb.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Sidebar Contact / Quick Callout */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 space-y-4 shadow-lg text-left">
                <div className="flex items-center gap-2 text-yellow-400 font-bold text-xs uppercase tracking-wider">
                  <i className="fa-solid fa-shield-halved"></i>
                  <span>Garantia de Qualidade</span>
                </div>

                <h3 className="text-base font-bold text-white leading-snug">
                  Atendimento Técnico em {title}
                </h3>

                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-green-400"></i>
                    <span>Técnicos certificados e uniformizados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-green-400"></i>
                    <span>Garantia de 90 dias por escrito</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-green-400"></i>
                    <span>Pagamento facilitado no cartão</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-green-400"></i>
                    <span>Atendimento 24h sem taxa abusiva</span>
                  </li>
                </ul>

                <div className="pt-2 border-t border-slate-800 space-y-2">
                  <a
                    href={CONTACT_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-xs font-bold py-3 px-4 rounded-xl transition-all shadow-sm"
                  >
                    <i className="fa-brands fa-whatsapp text-base"></i>
                    <span>Chamar Plantão em {title}</span>
                  </a>

                  <a
                    href={CONTACT_INFO.phoneLink}
                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold py-2.5 px-4 rounded-xl border border-slate-700 transition-colors"
                  >
                    <i className="fa-solid fa-phone text-yellow-400"></i>
                    <span>{CONTACT_INFO.phone}</span>
                  </a>
                </div>
              </div>

              {/* Base Address Note */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                <span className="font-bold text-slate-800 block">Base Operacional Curitiba:</span>
                <p>{CONTACT_INFO.address}, {CONTACT_INFO.neighborhood}</p>
                <p>CEP {CONTACT_INFO.cep} - Curitiba/PR</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Response Time Radar */}
      <ResponseTimeTracker />

      {/* 4. Localized FAQs */}
      <FAQ 
        items={faqs} 
        title={`Perguntas Frequentes sobre Encanador em ${title}`} 
        subtitle={`Dúvidas sobre atendimento emergencial, geofone e laudo Sanepar na região de ${title}.`}
      />

      {/* 5. Contact Form */}
      <section className="py-12 md:py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ContactForm />
        </div>
      </section>

    </div>
  );
};

export default DynamicPage;
