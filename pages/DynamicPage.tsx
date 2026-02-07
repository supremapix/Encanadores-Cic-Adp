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

  // Content Spinning Engine para SEO de Autoridade
  const uniqueContent = useMemo(() => {
    const args = [
      {
        arg: "diagnóstico tático com Geofone Digital de última geração, garantindo 100% de precisão",
        reason: "evitar quebras desnecessárias em revestimentos caros e acabamentos de alto padrão"
      },
      {
        arg: "hidrojateamento de ultra-pressão capaz de remover as obstruções mais severas em segundos",
        reason: "restaurar o fluxo total da tubulação sem o uso de produtos químicos corrosivos"
      },
      {
        arg: "emissão de laudo técnico oficial credenciado para abatimento de conta na Sanepar",
        reason: "assegurar o ressarcimento financeiro em casos de vazamentos ocultos subterrâneos"
      },
      {
        arg: "plantão 24h especializado em condomínios e residências com chegada tática em 30 min",
        reason: "conter vazamentos críticos e evitar danos estruturais graves ao seu patrimônio"
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
      <section className="bg-[#051125] text-white pt-24 pb-20 md:py-48 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
            <div className="max-w-5xl">
              <nav className="flex items-center justify-center md:justify-start gap-2 text-white/40 text-[9px] font-black uppercase tracking-[0.2em] mb-6 overflow-x-auto scrollbar-hide">
                <Link to="/" className="hover:text-accent">Home</Link>
                <i className="fas fa-chevron-right text-[6px]"></i>
                <span className="text-white/60">{type}</span>
                <i className="fas fa-chevron-right text-[6px]"></i>
                <span className="text-accent">{titleName}</span>
              </nav>
              <h1 className="text-4xl md:text-8xl font-black mb-6 leading-none tracking-tighter uppercase italic">
                {type === 'servico' ? titleName : `Encanador 24h em ${titleName}`}
              </h1>
              <p className="text-base md:text-3xl font-light text-white/50 max-w-3xl leading-tight mx-auto md:mx-0">
                Líder em Engenharia Hidráulica em <strong className="text-white font-black">{titleName}</strong>. 
                Sua emergência resolvida com tecnologia digital avançada.
              </p>
            </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-16 relative z-20 pb-32">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            
            <div className="w-full lg:w-2/3 space-y-12">
                <div className="bg-white p-6 md:p-20 rounded-[2.5rem] shadow-2xl border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                      <div className="order-2 md:order-1">
                        <span className="text-secondary font-black tracking-widest text-[10px] uppercase mb-4 block">Autoridade Técnica</span>
                        <h2 className="text-2xl md:text-4xl font-black text-primary mb-6 tracking-tighter">O Melhor Serviço em {titleName}.</h2>
                        <p className="text-gray-500 mb-8 leading-relaxed text-sm font-light">
                          A ADP Engenharia oferece {uniqueContent.arg} em <strong>{titleName}</strong>. 
                          Nosso foco principal é {uniqueContent.reason}, garantindo um serviço limpo, definitivo e com garantia total.
                        </p>
                        <div className="grid grid-cols-1 gap-3">
                           {TRUST_BADGES.map((badge, i) => (
                             <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 group hover:bg-primary transition-all duration-300">
                               <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center group-hover:bg-accent">
                                 <i className={`fas ${badge.icon} text-primary`}></i>
                               </div>
                               <span className="text-[10px] font-black text-gray-700 uppercase tracking-widest group-hover:text-white">{badge.text}</span>
                             </div>
                           ))}
                        </div>
                      </div>
                      <div className="order-1 md:order-2">
                        <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white aspect-square md:aspect-[4/5] bg-gray-50">
                          <img 
                            src={locationImage.url} 
                            alt={`ADP Encanador em ${titleName}`} 
                            className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" 
                          />
                        </div>
                      </div>
                    </div>
                </div>

                {/* Tech Banner */}
                <div className="bg-primary text-white p-10 md:p-20 rounded-[2.5rem] shadow-2xl relative overflow-hidden text-center md:text-left">
                   <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>
                   <h3 className="text-2xl md:text-4xl font-black mb-8 tracking-tighter uppercase italic">Onde outros quebram tudo, <br /><span className="text-accent italic">nós localizamos sem destruir.</span></h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                         <h4 className="text-xl font-black mb-2 uppercase text-accent">Geofone Digital</h4>
                         <p className="text-white/40 text-xs leading-relaxed">Captamos o som exato do vazamento através de paredes e pisos em {titleName}.</p>
                      </div>
                      <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                         <h4 className="text-xl font-black mb-2 uppercase text-accent">Vídeo Inspeção</h4>
                         <p className="text-white/40 text-xs leading-relaxed">Mapeamos o interior da sua tubulação para encontrar obstruções complexas sem demolição.</p>
                      </div>
                   </div>
                </div>

                <FAQ 
                    items={[
                        { question: `Qual o tempo de chegada no bairro ${titleName}?`, answer: `Por termos bases avançadas em Curitiba, nossa estimativa média em **${titleName}** é de apenas **30 a 45 minutos** para casos urgentes.` },
                        ...GENERAL_FAQ.slice(0, 3)
                    ]} 
                    title={`Suporte Técnico em ${titleName}`}
                />
            </div>

            {/* Sidebar Mobile Responsive */}
            <div className="w-full lg:w-1/3">
                <div className="sticky top-28 space-y-6">
                  <div className="bg-white p-2 rounded-[2.5rem] shadow-2xl border border-gray-100">
                    <ContactForm />
                  </div>
                  
                  <div className="bg-urgent p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                    <span className="text-[9px] font-black uppercase tracking-widest mb-4 block opacity-60 italic">Emergência Prioritária</span>
                    <h4 className="text-2xl font-black mb-4 tracking-tighter leading-none uppercase italic">Vazamento Crítico em {titleName}?</h4>
                    <p className="mb-8 text-white/80 font-medium text-xs">Acione agora nossa unidade móvel tática especializada em contenção rápida.</p>
                    <a 
                      href={CONTACT_INFO.whatsappLink} 
                      className="block bg-white text-urgent text-center font-black py-5 rounded-2xl hover:bg-accent hover:text-primary transition-all shadow-xl uppercase tracking-widest text-[10px]"
                    >
                      <i className="fab fa-whatsapp mr-2 text-xl"></i> ATIVAR UNIDADE MÓVEL
                    </a>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100">
                    <h5 className="font-black text-primary mb-4 flex items-center gap-2 text-[10px] uppercase tracking-widest">
                      <i className="fas fa-location-dot text-accent"></i> Cobertura em Curitiba
                    </h5>
                    <div className="flex flex-wrap gap-2">
                       {BAIRROS.slice(0, 20).map((b, i) => (
                         <Link key={i} to={`/bairro/${b.toLowerCase().replace(/ /g, '-')}`} className="text-[8px] font-bold text-gray-400 hover:text-primary transition-colors uppercase bg-white px-3 py-1.5 rounded-full border border-gray-100">
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