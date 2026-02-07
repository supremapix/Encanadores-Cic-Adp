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

  const uniqueArguments = useMemo(() => {
    const args = [
      "atendimento prioritário com tecnologia de geofone digital de alta precisão",
      "equipes móveis com maquinário de hidrojateamento de ultra-pressão",
      "tecnologia não-invasiva que localiza vazamentos ocultos sem quebras exploratórias",
      "emissão imediata de laudo técnico oficial para abatimentos junto à Sanepar",
      "plantão tático 24h especializado em condomínios e residências de alto padrão"
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
      parent.className = "w-full h-full bg-[#f8fafc] flex flex-col items-center justify-center p-8 border border-gray-100 rounded-[2.5rem]";
      parent.innerHTML = `
        <img src="${CONTACT_INFO.logoUrl}" class="w-32 h-32 object-contain opacity-10 mb-6 grayscale" />
        <span class="text-primary font-black text-[9px] uppercase tracking-[0.3em] opacity-30 italic">ADP Engenharia Hidráulica</span>
      `;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const metaTitle = type === 'servico' 
      ? `${titleName} Curitiba 24h | ADP Engenharia`
      : `Encanador em ${titleName} 24h | Atendimento Imediato ADP`;
    document.title = metaTitle;
  }, [name, type, titleName]);

  return (
    <div className="bg-white min-h-screen">
      {/* Dynamic Header */}
      <section className="bg-[#051125] text-white pt-28 pb-32 md:py-48 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/5 rounded-full blur-[100px]"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
            <div className="max-w-5xl">
              <nav className="flex items-center justify-center md:justify-start gap-2 text-white/40 text-[9px] font-black uppercase tracking-[0.2em] mb-10 overflow-x-auto whitespace-nowrap scrollbar-hide">
                <Link to="/" className="hover:text-accent">ADP</Link>
                <i className="fas fa-chevron-right text-[6px]"></i>
                <span className="text-white/60">{type}</span>
                <i className="fas fa-chevron-right text-[6px]"></i>
                <span className="text-accent">{titleName}</span>
              </nav>
              <h1 className="text-4xl md:text-8xl font-black mb-10 leading-none tracking-tighter">
                {type === 'servico' ? titleName : `ENCANADOR EM ${titleName}`}
              </h1>
              <p className="text-lg md:text-3xl font-light text-white/60 max-w-3xl leading-tight">
                Engenharia de prontidão em <strong className="text-white font-black">{titleName}</strong>. 
                Sua tranquilidade garantida por quem domina a hidráulica digital.
              </p>
            </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-20 relative z-20 pb-32">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            
            {/* Info Column */}
            <div className="w-full lg:w-2/3 space-y-12">
                <div className="bg-white p-8 md:p-20 rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                      <div className="order-2 md:order-1">
                        <span className="text-secondary font-black tracking-widest text-[9px] uppercase mb-4 block">Elite Hidráulica</span>
                        <h2 className="text-2xl md:text-4xl font-black text-primary mb-8 tracking-tighter leading-none">Referência Técnica em {titleName}.</h2>
                        <p className="text-gray-500 mb-10 leading-relaxed text-base font-light">
                          Disponibilizamos {uniqueArguments} para todo o bairro de <strong>{titleName}</strong>. 
                          Seja uma emergência ou manutenção preventiva, operamos com limpeza, rapidez e contrato de garantia formal.
                        </p>
                        <div className="grid grid-cols-1 gap-4">
                           {TRUST_BADGES.map((badge, i) => (
                             <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-[1.5rem] border border-gray-100 group hover:bg-primary transition-all duration-300">
                               <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center group-hover:bg-accent transition-colors">
                                 <i className={`fas ${badge.icon} text-primary`}></i>
                               </div>
                               <span className="text-[10px] font-black text-gray-700 uppercase tracking-widest group-hover:text-white">{badge.text}</span>
                             </div>
                           ))}
                        </div>
                      </div>
                      <div className="order-1 md:order-2">
                        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-gray-50 group">
                          <img 
                            src={locationImage.url} 
                            alt={`ADP ${titleName}`} 
                            onError={handleImageError}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                          />
                        </div>
                      </div>
                    </div>
                </div>

                {/* Tech Banner */}
                <div className="bg-[#0f172a] text-white p-12 md:p-20 rounded-[3rem] md:rounded-[4rem] shadow-2xl relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>
                   <h3 className="text-2xl md:text-4xl font-black mb-12 tracking-tighter leading-none italic uppercase">Onde amadores quebram, <span className="text-accent italic">nós localizamos.</span></h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div>
                         <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group hover:bg-accent transition-all">
                            <i className="fas fa-satellite-dish text-accent group-hover:text-primary transition-colors"></i>
                         </div>
                         <h4 className="text-xl font-black mb-4 tracking-tight leading-none italic uppercase">Geofone Digital</h4>
                         <p className="text-white/40 text-xs leading-relaxed font-light">Captamos frequências sonoras de vazamentos em paredes e pisos em {titleName}, evitando o "quebra-quebra" desnecessário.</p>
                      </div>
                      <div>
                         <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group hover:bg-accent transition-all">
                            <i className="fas fa-camera-rotate text-accent group-hover:text-primary transition-colors"></i>
                         </div>
                         <h4 className="text-xl font-black mb-4 tracking-tight leading-none italic uppercase">Vídeo Inspeção</h4>
                         <p className="text-white/40 text-xs leading-relaxed font-light">Mapeamos visualmente o interior da rede de esgoto para diagnósticos definitivos e limpos em qualquer tubulação.</p>
                      </div>
                   </div>
                </div>

                <FAQ 
                    items={[
                        { question: `Quanto tempo leva para chegar em ${titleName}?`, answer: `Possuímos bases móveis permanentes em Curitiba. Em **${titleName}**, nossa meta de chegada para emergências hidráulicas é de aproximadamente **30 a 45 minutos**.` },
                        ...GENERAL_FAQ.slice(0, 3)
                    ]} 
                    title={`Engenharia de Suporte: ${titleName}`}
                />
            </div>

            {/* Sidebar Mobile Optimized */}
            <div className="w-full lg:w-1/3">
                <div className="sticky top-28 space-y-8">
                  <div className="bg-white p-2 rounded-[3.5rem] shadow-2xl border border-gray-100">
                    <ContactForm />
                  </div>
                  
                  <div className="bg-urgent p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden group">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] mb-4 block opacity-60 italic">Emergência 24H</span>
                    <h4 className="text-2xl font-black mb-6 tracking-tighter leading-none uppercase italic">Precisa de um técnico em {titleName} agora?</h4>
                    <a 
                      href={CONTACT_INFO.whatsappLink} 
                      className="block bg-white text-urgent text-center font-black py-6 rounded-[2rem] hover:bg-accent hover:text-primary transition-all shadow-xl uppercase tracking-[0.2em] text-[10px]"
                    >
                      <i className="fab fa-whatsapp mr-2 text-xl"></i> Ativar Unidade Móvel
                    </a>
                  </div>

                  <div className="bg-gray-50 p-10 rounded-[3.5rem] border border-gray-100">
                    <h5 className="font-black text-primary mb-6 flex items-center gap-2 text-[10px] uppercase tracking-widest">
                      <i className="fas fa-location-dot text-accent"></i> Unidades Adjacentes
                    </h5>
                    <div className="flex flex-wrap gap-2">
                       {BAIRROS.slice(0, 12).map((b, i) => (
                         <Link key={i} to={`/bairro/${b.toLowerCase().replace(/ /g, '-')}`} className="text-[8px] font-black text-gray-400 hover:text-primary transition-colors uppercase bg-white border border-gray-100 px-4 py-2 rounded-full hover:border-accent">
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