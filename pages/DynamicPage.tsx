
import React, { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import { IMAGES, CONTACT_INFO, GENERAL_FAQ, TRUST_BADGES, BAIRROS } from '../constants';

type PageType = 'bairro' | 'cidade' | 'servico';

interface Props {
  type: PageType;
}

const DynamicPage: React.FC<Props> = ({ type }) => {
  const { name } = useParams<{ name: string }>();
  
  const formatName = (slug: string = '') => {
    return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const titleName = formatName(name);

  // Content Spinning Engine for SEO Dominance
  const uniqueContent = useMemo(() => {
    const args = [
      {
        arg: "diagnóstico com Geofone Digital de alta frequência, que localiza o ponto exato do vazamento através do solo e concreto",
        reason: "evitar demolições exploratórias em revestimentos de alto padrão e pisos cerâmicos em sua residência"
      },
      {
        arg: "limpeza técnica com Hidrojateamento de ultra-pressão, removendo 100% de gordura e detritos petrificados",
        reason: "desobstruir colunas de esgoto e redes pluviais de forma definitiva e higiênica sem danificar as tubulações"
      },
      {
        arg: "emissão de Laudo Técnico de Estanqueidade oficial, documento indispensável para abatimentos na fatura da Sanepar",
        reason: "comprovar o reparo de vazamentos subterrâneos e garantir o ressarcimento de taxas excedentes de esgoto"
      },
      {
        arg: "atendimento tático emergencial 24h com base operacional dedicada, garantindo chegada prioritária em vilas e condomínios",
        reason: "solucionar emergências hidráulicas críticas em tempo recorde para minimizar danos estruturais e alagamentos"
      }
    ];
    const index = (name || "").length % args.length;
    return args[index];
  }, [name]);
  
  const locationImage = useMemo(() => {
    const charCodeSum = (name || "").split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const idx = charCodeSum % IMAGES.length;
    return IMAGES[idx];
  }, [name]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const parent = e.currentTarget.parentElement;
    if (parent) {
      parent.className = "w-full h-full bg-[#f1f5f9] flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-200 rounded-[2.5rem]";
      parent.innerHTML = `
        <div class="relative group flex flex-col items-center">
          <div class="absolute inset-0 bg-accent/20 blur-2xl rounded-full animate-pulse"></div>
          <img src="${CONTACT_INFO.logoUrl}" class="w-24 h-24 object-contain grayscale opacity-20 mb-4 relative z-10" alt="ADP Logo" />
          <span class="text-primary/30 font-black text-[10px] uppercase tracking-[0.3em] relative z-10 italic">ADP Engenharia Digital</span>
        </div>
      `;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const metaTitle = type === 'servico' 
      ? `${titleName} Profissional em Curitiba 24h | ADP Engenharia`
      : `Encanador em ${titleName} 24h | Atendimento Tático Imediato ADP`;
    document.title = metaTitle;
  }, [name, type, titleName]);

  return (
    <div className="bg-white min-h-screen">
      {/* Schema Markup for Local SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "PlumbingService",
          "name": `ADP Encanador 24h em ${titleName}`,
          "description": `Serviço de encanador profissional e caça vazamentos em ${titleName}, Curitiba. Atendimento 24 horas para emergências hidráulicas.`,
          "url": window.location.href,
          "telephone": CONTACT_INFO.phone,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Curitiba",
            "addressRegion": "PR",
            "addressCountry": "BR"
          }
        })}
      </script>

      {/* Dynamic Header Section */}
      <section className="bg-[#051125] text-white pt-24 pb-16 md:py-48 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-accent/5 rounded-full blur-[120px]"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
            <div className="max-w-5xl">
              <nav className="flex items-center justify-center md:justify-start gap-2 text-white/30 text-[9px] font-black uppercase tracking-[0.2em] mb-8 overflow-x-auto scrollbar-hide">
                <Link to="/" className="hover:text-accent">Home</Link>
                <i className="fas fa-chevron-right text-[6px]"></i>
                <span className="text-white/50">{type}</span>
                <i className="fas fa-chevron-right text-[6px]"></i>
                <span className="text-accent">{titleName}</span>
              </nav>
              <h1 className="text-3xl md:text-7xl font-black mb-6 leading-none tracking-tighter uppercase italic">
                {type === 'servico' ? titleName : `Encanador em ${titleName}`}
              </h1>
              <p className="text-base md:text-3xl font-light text-white/40 max-w-3xl leading-tight mx-auto md:mx-0">
                Liderança técnica em sistemas hidráulicos em <strong className="text-white font-black">{titleName}</strong>. 
                Sua infraestrutura em mãos de engenharia qualificada 24 horas por dia.
              </p>
            </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="container mx-auto px-4 -mt-12 relative z-20 pb-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            
            <div className="w-full lg:w-2/3 space-y-12">
                <div className="bg-white p-6 md:p-16 rounded-[2rem] md:rounded-[3.5rem] shadow-2xl border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                      <div className="order-2 md:order-1">
                        <span className="text-secondary font-black tracking-[0.3em] text-[10px] uppercase mb-4 block">Precisão Operacional</span>
                        <h2 className="text-2xl md:text-4xl font-black text-primary mb-6 tracking-tighter leading-none">O Especialista em {titleName}.</h2>
                        <p className="text-gray-500 mb-8 leading-relaxed text-sm md:text-base font-medium opacity-80">
                          Na região de <strong>{titleName}</strong>, a ADP Engenharia disponibiliza {uniqueContent.arg}. 
                          Nossa meta em cada intervenção é {uniqueContent.reason}, entregando um resultado limpo e certificado.
                        </p>
                        <div className="space-y-3">
                           {TRUST_BADGES.map((badge, i) => (
                             <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 group hover:bg-primary transition-all duration-300">
                               <div className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center group-hover:bg-accent transition-colors">
                                 <i className={`fas ${badge.icon} text-primary`}></i>
                               </div>
                               <span className="text-[10px] font-black text-gray-700 uppercase tracking-widest group-hover:text-white">{badge.text}</span>
                             </div>
                           ))}
                        </div>
                      </div>
                      <div className="order-1 md:order-2">
                        <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white aspect-square md:aspect-[4/5] bg-gray-50 relative group">
                          <img 
                            src={locationImage.url} 
                            alt={`Serviço ADP em ${titleName}`} 
                            onError={handleImageError}
                            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                          />
                          <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors"></div>
                        </div>
                      </div>
                    </div>
                </div>

                {/* Persuasive CTA Banner */}
                <div className="bg-primary text-white p-8 md:p-16 rounded-[2rem] md:rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
                   <div className="absolute top-0 left-0 w-2 h-full bg-accent group-hover:w-full transition-all opacity-100 group-hover:opacity-5 duration-700"></div>
                   <h3 className="text-2xl md:text-4xl font-black mb-8 tracking-tighter uppercase italic leading-none">Vazamento oculto <br /><span className="text-accent italic">detectado em minutos.</span></h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-accent transition-colors">
                         <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                            <i className="fas fa-satellite-dish text-accent"></i>
                         </div>
                         <h4 className="text-base font-black mb-2 uppercase italic">Caça-Vazamentos</h4>
                         <p className="text-white/40 text-[10px] leading-relaxed font-bold uppercase tracking-widest">Escaneamento digital em toda rede de {titleName}.</p>
                      </div>
                      <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-accent transition-colors">
                         <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                            <i className="fas fa-camera-rotate text-accent"></i>
                         </div>
                         <h4 className="text-base font-black mb-2 uppercase italic">Vídeo Inspeção</h4>
                         <p className="text-white/40 text-[10px] leading-relaxed font-bold uppercase tracking-widest">Diagnóstico visual de tubulações sem quebrar nada.</p>
                      </div>
                   </div>
                </div>

                <FAQ 
                    items={[
                        { question: `Qual o valor da visita técnica em ${titleName}?`, answer: `Em **${titleName}**, a ADP Engenharia realiza a visita técnica e o diagnóstico presencial de forma **totalmente gratuita**. Você só paga se aprovar o orçamento e o serviço for executado.` },
                        ...GENERAL_FAQ
                    ]} 
                    title={`Engenharia de Suporte em ${titleName}`}
                />
            </div>

            {/* Sidebar Sticky Column */}
            <div className="w-full lg:w-1/3">
                <div className="sticky top-24 space-y-6">
                  <div className="bg-white p-2 rounded-[2.5rem] shadow-2xl border border-gray-100">
                    <ContactForm />
                  </div>
                  
                  <div className="bg-urgent p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest mb-4 block opacity-60">Urgência: Unidades On-line</span>
                    <h4 className="text-xl md:text-2xl font-black mb-6 tracking-tighter leading-none uppercase italic">Emergência Hidráulica em {titleName}?</h4>
                    <a 
                      href={CONTACT_INFO.whatsappLink} 
                      className="block bg-white text-urgent text-center font-black py-4 rounded-xl hover:bg-accent hover:text-primary transition-all shadow-xl uppercase tracking-[0.2em] text-[10px] active:scale-95"
                    >
                      <i className="fab fa-whatsapp mr-2 text-lg"></i> ATIVAR TÉCNICO AGORA
                    </a>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100">
                    <h5 className="font-black text-primary mb-6 flex items-center gap-2 text-[10px] uppercase tracking-widest">
                      <i className="fas fa-location-dot text-accent"></i> Atendimento em Regiões Próximas
                    </h5>
                    <div className="flex flex-wrap gap-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                       {BAIRROS.slice(0, 40).map((b, i) => (
                         <Link key={i} to={`/bairro/${b.toLowerCase().replace(/ /g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="text-[9px] font-black text-gray-400 hover:text-primary transition-colors uppercase bg-white px-3 py-1.5 rounded-lg border border-gray-100 hover:border-accent">
                           {b}
                         </Link>
                       ))}
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicPage;
