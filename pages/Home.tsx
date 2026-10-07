import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import ResponseTimeTracker from '../components/ResponseTimeTracker';
import VideoSection from '../components/VideoSection';
import FAQ from '../components/FAQ';
import FAQInfinite from '../components/FAQInfinite';
import ContactForm from '../components/ContactForm';
import { MAIN_SERVICES, CONTACT_INFO, GENERAL_FAQS } from '../constants';

const PipeSectionDivider: React.FC = () => {
  return (
    <div className="relative h-12 w-full bg-brand-light flex items-center justify-center select-none pointer-events-none z-10">
      <svg className="w-40 h-full text-brand-accent" viewBox="0 0 160 48" fill="none">
        {/* Left pipe */}
        <line x1="0" y1="24" x2="60" y2="24" stroke="currentColor" strokeWidth="6" />
        {/* Elbow / joint */}
        <rect x="60" y="14" width="16" height="20" rx="3" fill="currentColor" stroke="#F5C518" strokeWidth="2" />
        {/* Connection dial / ring */}
        <circle cx="68" cy="24" r="3" fill="#0B2A3C" />
        {/* Gauge / pressure indicator */}
        <circle cx="80" cy="20" r="8" stroke="currentColor" strokeWidth="2" fill="#0B2A3C" />
        <line x1="80" y1="20" x2="84" y2="15" stroke="#F5C518" strokeWidth="2" />
        {/* Elbow / joint */}
        <rect x="84" y="14" width="16" height="20" rx="3" fill="currentColor" stroke="#F5C518" strokeWidth="2" />
        {/* Right pipe */}
        <line x1="100" y1="24" x2="160" y2="24" stroke="currentColor" strokeWidth="6" />
      </svg>
    </div>
  );
};

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Encanador em Curitiba 24 Horas | Caça-Vazamento Digital e Desentupimento";
    
    // Schema JSON-LD LocalBusiness & PlumbingService (Exactly ONE unified block for LocalBusiness/PlumbingService as requested)
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
    <div className="bg-brand-light font-sans">
      {/* 1. Hero Section with animation */}
      <Hero />

      {/* 2. Trust Bar Strip */}
      <TrustBar />

      {/* 3. Direct Answer / AIO Semantic Summary Block (Blueprint theme) */}
      <section className="py-16 bg-brand-light border-b border-brand-accent/25 relative overflow-hidden">
        {/* Blueprint grid subtle background */}
        <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <span className="text-xs font-black uppercase tracking-wider text-brand-accent font-display">
                Engenharia Hidráulica Autorizada Curitibana
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-brand-dark tracking-tight leading-tight">
                Serviço de Encanador Profissional, Caça-Vazamentos e Desentupimento em Curitiba
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                A Desentupidora ADP (operada pela ADP Engenharia Hidráulica) resolve problemas hidráulicos complexos em residências, edifícios residenciais e comerciais, lojas e indústrias em toda Curitiba e Região Metropolitana.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Nossos encanadores especialistas atuam com <strong className="text-brand-dark font-extrabold">Geofone Digital Ultrassônico</strong> e sensores térmicos para mapear e localizar exatamente onde está o vazamento por baixo da alvenaria ou piso, impedindo o "quebra-quebra" generalizado em seu patrimônio.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-black text-brand-dark font-display">
                <span className="px-3.5 py-2 rounded-lg bg-brand-slate border-2 border-brand-accent/25 flex items-center">
                  <i className="fa-solid fa-check text-brand-green mr-2 text-sm"></i>Laudo Técnico para Sanepar
                </span>
                <span className="px-3.5 py-2 rounded-lg bg-brand-slate border-2 border-brand-accent/25 flex items-center">
                  <i className="fa-solid fa-check text-brand-green mr-2 text-sm"></i>Garantia Escrita de 90 Dias
                </span>
                <span className="px-3.5 py-2 rounded-lg bg-brand-slate border-2 border-brand-accent/25 flex items-center">
                  <i className="fa-solid fa-check text-brand-green mr-2 text-sm"></i>Plantão Real 24h & Feriados
                </span>
              </div>
            </div>

            {/* Right Fast Facts Card - Fully Verified Commercial Data */}
            <div className="lg:col-span-5 bg-brand-navy text-white rounded-xl p-6 border-2 border-brand-accent shadow-xl space-y-4 text-left relative overflow-hidden">
              <div className="absolute inset-0 blueprint-grid-dark opacity-15 pointer-events-none"></div>
              
              <h3 className="text-sm font-black text-brand-yellow uppercase tracking-widest border-b border-brand-accent/30 pb-2.5 font-display flex items-center gap-2">
                <i className="fa-solid fa-shield-check"></i>
                <span>Dados Comerciais Confirmados</span>
              </h3>
              
              <dl className="space-y-3.5 text-sm">
                <div>
                  <dt className="text-slate-300 text-xs uppercase font-black tracking-wider">Empresa Registrada:</dt>
                  <dd className="text-white font-extrabold text-base">{CONTACT_INFO.brandName}</dd>
                  <dd className="text-slate-300 text-xs">{CONTACT_INFO.companyName}</dd>
                </div>
                <div>
                  <dt className="text-slate-300 text-xs uppercase font-black tracking-wider">Endereço:</dt>
                  <dd className="text-white font-bold">{CONTACT_INFO.address}, {CONTACT_INFO.neighborhood}</dd>
                  <dd className="text-slate-300 text-xs">{CONTACT_INFO.city} - {CONTACT_INFO.state}, CEP {CONTACT_INFO.cep}</dd>
                </div>
                <div>
                  <dt className="text-slate-300 text-xs uppercase font-black tracking-wider">Funcionamento Técnico:</dt>
                  <dd className="text-brand-yellow font-black">Plantão 24 Horas permanente todos os dias</dd>
                </div>
                <div>
                  <dt className="text-slate-300 text-xs uppercase font-black tracking-wider">Equipamentos de Diagnóstico:</dt>
                  <dd className="text-slate-200">Geofone Digital, Sonda Guia de Microcâmera, Máquinas Rotativas K-500</dd>
                </div>
                <div className="pt-2 border-t border-brand-accent/20">
                  <dt className="text-slate-400 text-[10px] uppercase font-black tracking-wider">Contato Verificado:</dt>
                  <dd className="flex flex-wrap items-center gap-4 pt-1 font-bold">
                    <a href={CONTACT_INFO.phoneLink} className="text-brand-yellow hover:underline flex items-center gap-1.5 font-mono">
                      <i className="fa-solid fa-phone"></i>
                      <span>{CONTACT_INFO.phone}</span>
                    </a>
                    <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline flex items-center gap-1.5 font-mono">
                      <i className="fa-brands fa-whatsapp"></i>
                      <span>WhatsApp 24h</span>
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

          </div>
        </div>
      </section>

      {/* Pipe Divider with register */}
      <PipeSectionDivider />

      {/* 4. Services Section (Alternating Editorial timeline layout connected by SVG pipe line) */}
      <section className="py-16 bg-brand-light relative overflow-hidden">
        {/* Subtle background plant layout dimensions */}
        <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-left max-w-3xl mb-12 space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-brand-accent font-display">
              Portfólio de Alta Qualidade
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-brand-dark">
              Principais Serviços de Encanador em Curitiba
            </h2>
            <p className="text-base text-slate-700 font-sans">
              Cada serviço é prestado com tecnologia não invasiva, maquinário moderno e garantia em contrato.
            </p>
          </div>

          {/* Alternating Editorial timeline connected by SVG pipe line */}
          <div className="relative max-w-5xl mx-auto space-y-16">
            
            {/* Horizontal-to-Vertical connection joints (simulation of real plumbing) */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-2.5 transform -translate-x-1/2 hidden md:block select-none pointer-events-none z-0 bg-brand-accent/20 rounded">
              <div className="h-full w-full bg-gradient-to-b from-brand-accent/60 via-brand-accent/30 to-brand-accent/50 relative">
                {/* Fluid water inside vertical pipe */}
                <div className="absolute inset-0 w-full bg-gradient-to-b from-sky-400 via-sky-300 to-sky-400/20 animate-water-flow opacity-70"></div>
              </div>
            </div>

            {/* Mobile pipe line */}
            <div className="absolute left-6 top-0 bottom-0 w-1.5 select-none pointer-events-none z-0 bg-brand-accent/20 md:hidden rounded"></div>

            {MAIN_SERVICES.map((service, idx) => {
              const isEven = idx % 2 === 0;
              const editorialNumber = String(idx + 1).padStart(2, '0');
              
              return (
                <div 
                  key={service.id}
                  className={`relative flex flex-col md:flex-row items-stretch gap-8 md:gap-16 z-10 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  
                  {/* Left content block */}
                  <div className="w-full md:w-1/2 text-left space-y-4">
                    <div className="flex items-center gap-4">
                      {/* Big copper editorial number */}
                      <span className="text-4xl sm:text-5xl font-display font-black text-brand-accent">
                        {editorialNumber}
                      </span>
                      {/* Clean line stroke icon cor cobre */}
                      <div className="w-12 h-12 rounded-lg border-2 border-brand-accent flex items-center justify-center text-brand-accent text-xl bg-brand-slate shadow-sm">
                        <i className={`fas ${service.icon}`}></i>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-black text-brand-dark">
                      {service.title}
                    </h3>
                    
                    <p className="text-base text-slate-700 leading-relaxed font-sans">
                      {service.description}
                    </p>

                    {service.applications && (
                      <div className="pt-3 border-t border-brand-accent/15">
                        <span className="text-xs uppercase tracking-wider text-brand-accent font-black font-display block mb-1.5">
                          Aplicações Hidráulicas:
                        </span>
                        <ul className="space-y-1.5">
                          {service.applications.slice(0, 3).map((app, appIdx) => (
                            <li key={appIdx} className="flex items-start gap-2.5 text-sm text-slate-700 leading-snug">
                              <i className="fa-solid fa-angle-right text-brand-accent mt-1 text-xs flex-shrink-0"></i>
                              <span>{app}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="pt-4 flex items-center gap-6 font-display font-black">
                      <Link 
                        to={`/servico/${service.id}`}
                        className="text-sm text-brand-blue hover:text-brand-dark hover:underline transition-all inline-flex items-center gap-1.5"
                      >
                        <span>Ver detalhes do serviço</span>
                        <i className="fa-solid fa-arrow-right text-[10px]"></i>
                      </Link>

                      <a 
                        href={CONTACT_INFO.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-brand-green hover:text-green-700 transition-colors inline-flex items-center gap-1.5"
                      >
                        <i className="fa-brands fa-whatsapp text-base"></i>
                        <span>Pedir Orçamento</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Spacing / Blueprint Connection Joint */}
                  <div className="w-full md:w-1/2 flex items-center justify-center">
                    <div className="w-full p-5 bg-brand-slate rounded-lg border-2 border-brand-accent/25 shadow-md relative overflow-hidden text-left space-y-4">
                      {/* Blueprint grid accent inside card */}
                      <div className="absolute inset-0 blueprint-grid opacity-45 pointer-events-none"></div>
                      
                      <div className="relative z-10 space-y-3">
                        <span className="text-[10px] font-mono text-brand-accent tracking-widest uppercase block border-b border-brand-accent/15 pb-1">
                          Como fazemos
                        </span>
                        
                        <div className="space-y-1 text-xs text-slate-700 leading-relaxed">
                          <p className="font-extrabold text-brand-dark">Método e Tecnologia Aplicada:</p>
                          <p>
                            {service.id === 'caca-vazamento-digital' && 'Mapeamento acústico com Geofone Ultrassônico profissional e varredura de termografia infravermelha.'}
                            {service.id === 'desentupidora-24h' && 'Roto-Rooter mecânico rotativo com espirais flexíveis de liga para desobstrução e raspagem de tubulações de PVC.'}
                            {service.id === 'laudo-tecnico-sanepar' && 'Emissão de laudo técnico oficial de estanqueidade assinado por responsável técnico credenciado.'}
                            {(!['caca-vazamento-digital', 'desentupidora-24h', 'laudo-tecnico-sanepar'].includes(service.id)) && 'Maquinário de desobstrução mecânica ou higienização hidrostática com descarte regulamentado.'}
                          </p>
                        </div>

                        <div className="p-3 bg-brand-dark/5 rounded border border-brand-accent/10 flex items-center justify-between">
                          <div className="text-[11px] text-slate-500 font-bold">Garantia Comercial:</div>
                          <div className="text-xs font-black text-brand-accent">90 Dias por Escrito</div>
                        </div>

                        <div className="text-xs text-slate-500 italic">
                          *Visitas imediatas sem quebra desnecessária de revestimentos em Curitiba.
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Pipe Divider with register */}
      <PipeSectionDivider />

      {/* 5. Response Time Tracker */}
      <ResponseTimeTracker />

      {/* 6. Video / Technology Section */}
      <VideoSection />

      {/* Pipe Divider with register */}
      <PipeSectionDivider />

      {/* 7. Contact Form Section */}
      <section className="py-16 bg-brand-slate relative overflow-hidden border-b border-brand-accent/15">
        <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <ContactForm />
        </div>
      </section>

      {/* Pipe Divider with register */}
      <PipeSectionDivider />

      {/* 9. FAQ Accordion with register spin on open */}
      <FAQ items={GENERAL_FAQS} />

      {/* 10. Searchable Knowledge Base */}
      <FAQInfinite />
    </div>
  );
};

export default Home;
