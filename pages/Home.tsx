import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import ResponseTimeTracker from '../components/ResponseTimeTracker';
import VideoSection from '../components/VideoSection';
import FAQ from '../components/FAQ';
import FAQInfinite from '../components/FAQInfinite';
import ContactForm from '../components/ContactForm';
import { MAIN_SERVICES, CONTACT_INFO, GENERAL_FAQS, BAIRROS, CIDADES } from '../constants';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Encanador em Curitiba 24 Horas | Caça-Vazamento Digital e Desentupimento";
    
    // Schema JSON-LD LocalBusiness & PlumbingService
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'schema-home';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "PlumbingService",
          "@id": "https://www.encanador.servicosnobairro.com.br/#organization",
          "name": "Desentupidora ADP",
          "alternateName": "Desentupidora ADP e Encanador Curitiba 24 Horas",
          "url": "https://www.encanador.servicosnobairro.com.br/",
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
              "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            }
          ],
          "areaServed": [
            { "@type": "City", "name": "Curitiba" },
            { "@type": "City", "name": "São José dos Pinhais" },
            { "@type": "City", "name": "Pinhais" },
            { "@type": "City", "name": "Colombo" },
            { "@type": "City", "name": "Araucária" },
            { "@type": "City", "name": "Fazenda Rio Grande" },
            { "@type": "City", "name": "Campo Largo" }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Serviços Hidráulicos",
            "itemListElement": MAIN_SERVICES.map(srv => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": srv.title,
                "description": srv.description
              }
            }))
          }
        },
        {
          "@type": "FAQPage",
          "@id": "https://www.encanador.servicosnobairro.com.br/#faq",
          "mainEntity": GENERAL_FAQS.map(faq => ({
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

    const oldScript = document.getElementById('schema-home');
    if (oldScript) oldScript.remove();
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('schema-home');
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust Bar Strip */}
      <TrustBar />

      {/* 3. Direct Answer / AIO Semantic Summary Block */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                Engenharia Hidráulica Especializada
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Serviço de Encanador Profissional, Caça-Vazamentos e Desentupimento em Curitiba
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                A <strong className="text-slate-900 font-semibold">{CONTACT_INFO.brandName}</strong> (operada pela {CONTACT_INFO.companyName}) resolve problemas hidráulicos complexos em residências, edifícios residenciais e comerciais, lojas e indústrias em toda Curitiba e Região Metropolitana.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Utilizamos <strong className="text-slate-900 font-semibold">Geofones Digitais Ultrassônicos</strong> e termografia para mapear com exatidão onde está o vazamento oculto no piso, parede ou tubulações subterrâneas, evitando obras desnecessárias e quebra generalizada de pisos.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                <span className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200">
                  <i className="fa-solid fa-check text-green-600 mr-1.5"></i>Laudo Técnico para Sanepar
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200">
                  <i className="fa-solid fa-check text-green-600 mr-1.5"></i>Garantia Escrita de 90 Dias
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200">
                  <i className="fa-solid fa-check text-green-600 mr-1.5"></i>Plantão Noturno & Feriados
                </span>
              </div>
            </div>

            {/* Right Fast Facts Card */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide border-b border-slate-200 pb-2">
                Resumo Operacional para Clientes
              </h3>
              <dl className="space-y-2 text-xs">
                <div>
                  <dt className="text-slate-500 font-medium">Empresa:</dt>
                  <dd className="text-slate-900 font-semibold">{CONTACT_INFO.brandName} / {CONTACT_INFO.companyName}</dd>
                </div>
                <div>
                  <dt className="text-slate-500 font-medium">Base Operacional:</dt>
                  <dd className="text-slate-900 font-semibold">{CONTACT_INFO.address}, {CONTACT_INFO.neighborhood} - Curitiba/PR</dd>
                </div>
                <div>
                  <dt className="text-slate-500 font-medium">Horário de Funcionamento:</dt>
                  <dd className="text-slate-900 font-semibold">24 Horas (Plantão contínuo todos os dias)</dd>
                </div>
                <div>
                  <dt className="text-slate-500 font-medium">Equipamento de Precisão:</dt>
                  <dd className="text-slate-900 font-semibold">Geofone Digital, Microcâmera HD, Hidrojato e Máquinas K-500</dd>
                </div>
                <div>
                  <dt className="text-slate-500 font-medium">Canais Oficiais:</dt>
                  <dd className="text-slate-900 font-semibold flex items-center gap-3 pt-1">
                    <a href={CONTACT_INFO.phoneLink} className="text-blue-700 hover:underline">
                      <i className="fa-solid fa-phone mr-1"></i>{CONTACT_INFO.phone}
                    </a>
                    <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">
                      <i className="fa-brands fa-whatsapp mr-1"></i>WhatsApp 24h
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Services Grid */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
              Soluções Completas
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Principais Serviços de Encanador em Curitiba
            </h2>
            <p className="text-sm text-slate-600">
              Atendimento técnico com diagnóstico preciso, maquinário elétrico rotativo e peças de primeira linha.
            </p>
          </div>

          {/* 3-Column Service Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MAIN_SERVICES.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center text-xl">
                    <i className={`fas ${service.icon}`}></i>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {service.applications && (
                    <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                      {service.applications.slice(0, 3).map((app, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <i className="fa-solid fa-angle-right text-blue-600 text-[10px]"></i>
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link 
                    to={`/servico/${service.id}`}
                    className="text-xs font-bold text-blue-700 hover:text-blue-900 transition-colors inline-flex items-center gap-1"
                  >
                    <span>Ver detalhes</span>
                    <i className="fa-solid fa-arrow-right text-[10px]"></i>
                  </Link>

                  <a 
                    href={CONTACT_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-green-700 hover:text-green-800 transition-colors inline-flex items-center gap-1"
                  >
                    <i className="fa-brands fa-whatsapp text-sm"></i>
                    <span>Orçamento</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Response Time Tracker */}
      <ResponseTimeTracker />

      {/* 6. Video / Technology Section */}
      <VideoSection />

      {/* 7. Comprehensive Coverage (Bairros & Cidades Links for SEO) */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
              Cobertura Local em Curitiba & RMC
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Atendimento 24h em Todos os Bairros e Cidades Vizinhas
            </h2>
            <p className="text-sm text-slate-600">
              Equipes móveis para rápida intervenção em emergências hidráulicas residenciais, condomínios e indústrias.
            </p>
          </div>

          {/* Bairros Grid */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3 flex items-center gap-2">
                <i className="fa-solid fa-map-pin text-blue-700"></i>
                <span>Bairros Atendidos em Curitiba:</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {BAIRROS.slice(0, 45).map((bairro, idx) => {
                  const slug = bairro.toLowerCase()
                    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/(^-|-$)/g, '');
                  return (
                    <Link
                      key={idx}
                      to={`/bairro/${slug}`}
                      className="text-xs bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-800 px-3 py-1.5 rounded-lg border border-slate-200 transition-colors"
                    >
                      Encanador {bairro}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Cidades Grid */}
            <div className="pt-4 border-t border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3 flex items-center gap-2">
                <i className="fa-solid fa-city text-blue-700"></i>
                <span>Cidades da Região Metropolitana de Curitiba:</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {CIDADES.map((cidade, idx) => {
                  const slug = cidade.toLowerCase()
                    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/(^-|-$)/g, '');
                  return (
                    <Link
                      key={idx}
                      to={`/cidade/${slug}`}
                      className="text-xs bg-slate-800 hover:bg-slate-700 text-white px-3 py-1.5 rounded-lg transition-colors font-medium"
                    >
                      Encanador em {cidade}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="text-center pt-2">
              <Link
                to="/sitemap"
                className="text-xs font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1 hover:underline"
              >
                <span>Ver lista completa de todos os bairros e vilas de Curitiba</span>
                <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 8. Contact Form Section */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ContactForm />
        </div>
      </section>

      {/* 9. FAQ Accordion */}
      <FAQ items={GENERAL_FAQS} />

      {/* 10. Searchable Knowledge Base */}
      <FAQInfinite />
    </div>
  );
};

export default Home;
