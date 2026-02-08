
import React, { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import FAQInfinite from '../components/FAQInfinite';
import SafeImage from '../components/SafeImage';
import { IMAGES, CONTACT_INFO, TRUST_BADGES, BAIRROS, MAIN_SERVICES } from '../constants';

type PageType = 'bairro' | 'cidade' | 'servico';

interface Props {
  type: PageType;
}

const DynamicPage: React.FC<Props> = ({ type }) => {
  const { name } = useParams<{ name: string }>();
  
  const serviceInfo = useMemo(() => {
    if (type !== 'servico') return null;
    return MAIN_SERVICES.find(s => s.id === name);
  }, [type, name]);

  const titleName = useMemo(() => {
    if (type === 'servico' && serviceInfo) return serviceInfo.title;
    return name?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || '';
  }, [type, name, serviceInfo]);

  const locationImage = useMemo(() => {
    const charCodeSum = (name || "").split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const idx = charCodeSum % IMAGES.length;
    return IMAGES[idx];
  }, [name]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${titleName} em Curitiba 24h - ADP Engenharia`;
    
    // Inject JSON-LD Schema Markup
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": titleName,
      "serviceType": type === 'servico' ? "Plumbing Service" : "Emergency Plumber",
      "provider": {
        "@type": "LocalBusiness",
        "name": "ADP Engenharia Hidráulica",
        "image": CONTACT_INFO.logoUrl,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": CONTACT_INFO.address,
          "addressLocality": "Curitiba",
          "addressRegion": "PR",
          "addressCountry": "BR"
        },
        "telephone": CONTACT_INFO.phone,
        "priceRange": "$$"
      },
      "areaServed": [
        { "@type": "City", "name": "Curitiba" },
        { "@type": "City", "name": titleName }
      ],
      "description": serviceInfo?.description || `Serviço especializado de ${titleName} em Curitiba. Atendimento tático 24 horas para residências e empresas.`
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaData);
    script.id = 'dynamic-schema';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('dynamic-schema');
      if (existingScript) document.head.removeChild(existingScript);
    };
  }, [name, titleName, type, serviceInfo]);

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-primary text-white pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto px-4 relative z-10">
            <nav className="flex items-center gap-3 text-white/30 text-[9px] font-black uppercase tracking-[0.2em] mb-8">
              <Link to="/" className="hover:text-accent">Home</Link>
              <i className="fas fa-chevron-right text-[6px]"></i>
              <span className="text-accent">{titleName}</span>
            </nav>
            <h1 className="text-4xl md:text-8xl font-black mb-8 leading-none tracking-tighter uppercase italic">
              {type === 'servico' ? titleName : `Atendimento ${titleName}`}
            </h1>
            <p className="text-lg md:text-3xl font-light text-white/40 max-w-4xl italic leading-tight">
              {serviceInfo?.description || `Excelência técnica e diagnóstico digital em Curitiba. Atendimento focado em ${titleName}.`}
              <br />
              Serviços especializados a partir de <strong className="text-accent">R$ 50</strong>.
            </p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-16 relative z-20 pb-24">
        <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-2/3 space-y-12">
                <div className="bg-white p-8 md:p-16 rounded-[3.5rem] shadow-2xl border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                      <div>
                        <span className="text-secondary font-black tracking-[0.3em] text-[10px] uppercase mb-4 block">Especialidade ADP</span>
                        <h2 className="text-3xl md:text-4xl font-black text-primary mb-8 tracking-tighter italic uppercase text-glow">
                          {type === 'servico' ? `Expertise em ${titleName}` : `Equipe Pronta em ${titleName}`}
                        </h2>
                        <p className="text-gray-500 mb-10 leading-relaxed font-medium text-lg">
                          Nossa abordagem técnica para <strong>{titleName}</strong> elimina o "quebra-quebra" desnecessário. 
                          Através de tecnologia alemã de Geofone e Vídeo Inspeção, entregamos um diagnóstico preciso para residências e condomínios de alto padrão.
                        </p>
                        <div className="space-y-4">
                           {TRUST_BADGES.map((badge, i) => (
                             <div key={i} className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 group hover:bg-white transition-colors">
                               <i className={`fas ${badge.icon} text-accent text-xl group-hover:scale-110 transition-transform`}></i>
                               <span className="text-[10px] font-black text-gray-700 uppercase tracking-widest">{badge.text}</span>
                             </div>
                           ))}
                        </div>
                      </div>
                      <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] relative">
                        <SafeImage src={locationImage.url} alt={titleName} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                        <div className="absolute bottom-8 left-8 right-8 text-white">
                           <span className="text-[8px] font-black uppercase tracking-[0.4em] mb-2 block text-accent">Engenharia de Campo</span>
                           <p className="text-xs font-bold leading-tight opacity-80">Técnicos certificados operando em Curitiba 24h.</p>
                        </div>
                      </div>
                    </div>
                </div>

                {/* Conteúdo Técnico Adicional para SEO */}
                <div className="p-8 md:p-16 bg-gray-50 rounded-[3.5rem] border border-gray-200">
                   <h3 className="text-2xl font-black text-primary uppercase italic tracking-tight mb-8">Diferenciais Técnicos ADP</h3>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-4">
                         <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-accent">
                            <i className="fas fa-bolt-lightning text-xl"></i>
                         </div>
                         <h4 className="font-black text-primary uppercase text-xs tracking-widest italic">Resposta Tática</h4>
                         <p className="text-sm text-gray-500 leading-relaxed">Tempo médio de chegada de 30 minutos após o acionamento em qualquer região de Curitiba.</p>
                      </div>
                      <div className="space-y-4">
                         <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-accent">
                            <i className="fas fa-file-invoice-dollar text-xl"></i>
                         </div>
                         <h4 className="font-black text-primary uppercase text-xs tracking-widest italic">Preço Transparente</h4>
                         <p className="text-sm text-gray-500 leading-relaxed">Orçamento digital enviado via WhatsApp com detalhamento de peças e mão de obra especializada.</p>
                      </div>
                   </div>
                </div>

                <div className="bg-primary text-white p-12 rounded-[3.5rem] shadow-2xl relative group overflow-hidden border border-white/5">
                   <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
                   <h3 className="text-3xl md:text-5xl font-black mb-10 tracking-tighter uppercase italic">Precisa de {titleName} agora?</h3>
                   <div className="flex flex-wrap gap-6">
                      <a href={CONTACT_INFO.whatsappLink} className="bg-accent text-primary px-10 py-5 rounded-2xl font-black uppercase text-sm shadow-xl flex items-center gap-4 italic hover:scale-105 transition-transform">
                        <i className="fab fa-whatsapp text-2xl"></i> WHATSAPP 24H
                      </a>
                      <a href={CONTACT_INFO.phoneLink} className="bg-white/5 border border-white/20 px-10 py-5 rounded-2xl font-black uppercase text-sm flex items-center gap-4 italic hover:bg-white/10 transition-all">
                        <i className="fas fa-phone-alt"></i> CHAMAR AGORA
                      </a>
                   </div>
                </div>

                <FAQInfinite locationName={titleName} />
            </div>

            <div className="w-full lg:w-1/3 space-y-8">
                <div className="sticky top-28 space-y-8">
                  <div className="bg-white p-2 rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden">
                    <ContactForm />
                  </div>
                  <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100">
                    <h5 className="font-black text-primary mb-8 text-[10px] uppercase tracking-widest italic">Outras Especialidades</h5>
                    <div className="flex flex-wrap gap-2">
                       {MAIN_SERVICES.map((s, i) => (
                         <Link key={i} to={`/servico/${s.id}`} className="text-[9px] font-black text-gray-400 hover:text-accent transition-colors bg-white px-4 py-2 rounded-xl uppercase border border-gray-100 hover:border-accent">
                           {s.title}
                         </Link>
                       ))}
                    </div>
                  </div>
                  <div className="bg-primary text-white p-10 rounded-[3rem] shadow-xl text-center">
                     <i className="fas fa-clock text-accent text-3xl mb-6"></i>
                     <h6 className="font-black uppercase italic mb-4">Plantão Curitiba</h6>
                     <p className="text-xs opacity-60 font-medium">Equipes disponíveis para {titleName} mesmo em feriados e finais de semana.</p>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicPage;
