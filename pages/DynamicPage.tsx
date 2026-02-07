import React, { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import { IMAGES, SERVICE_TABLE_DATA, CONTACT_INFO, GENERAL_FAQ, TRUST_BADGES, BAIRROS } from '../constants';

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
      "atendimento prioritário com unidades móveis equipadas com tecnologia de ultrassom digital de alta sensibilidade",
      "maquinário de hidrojateamento de alta pressão capaz de restaurar 100% do fluxo original das tubulações",
      "abordagem técnica não-invasiva que evita a quebra desnecessária de pisos e revestimentos de alto custo",
      "emissão imediata de laudo técnico oficial credenciado para reduções tarifárias junto à Sanepar",
      "plantão especial focado em condomínios e empresas com atendimento tático em menos de 45 minutos"
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
      parent.className = "w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-200 rounded-[3rem]";
      parent.innerHTML = `
        <img src="${CONTACT_INFO.logoUrl}" class="w-32 h-32 object-contain opacity-20 mb-4 grayscale" />
        <span class="text-primary/30 font-black text-[10px] uppercase tracking-widest">Asset Emulation: ADP Engenharia</span>
      `;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const metaTitle = type === 'servico' 
      ? `${titleName} Especializado em Curitiba 24h | ADP Engenharia`
      : `Encanador em ${titleName} - Atendimento Imediato 24h | ADP Curitiba`;
    document.title = metaTitle;
  }, [name, type, titleName]);

  return (
    <div className="bg-white min-h-screen">
      {/* Header Mobile Optimized */}
      <section className="bg-[#051125] text-white pt-24 pb-32 md:py-48 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl">
              <nav className="flex items-center gap-2 text-white/40 text-[9px] font-black uppercase tracking-[0.2em] mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
                <Link to="/" className="hover:text-accent">Home</Link>
                <i className="fas fa-chevron-right text-[6px]"></i>
                <span className="text-white/60">{type}</span>
                <i className="fas fa-chevron-right text-[6px]"></i>
                <span className="text-accent">{titleName}</span>
              </nav>
              <h1 className="text-4xl md:text-8xl font-black mb-8 leading-none tracking-tighter">
                {type === 'servico' ? titleName : `ENCANADOR EM ${titleName}`}
              </h1>
              <p className="text-xl md:text-3xl font-light text-white/50 max-w-3xl leading-tight">
                Engenharia de precisão para o imóvel mais importante do mundo: o seu, em <strong className="text-white font-bold">{titleName}</strong>.
              </p>
            </div>
        </div>
      </section>

      {/* Content Mobile Friendly Grid */}
      <div className="container mx-auto px-4 -mt-20 relative z-20 pb-32">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            
            <div className="w-full lg:w-2/3 space-y-12">
                <div className="bg-white p-8 md:p-16 rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-gray-100">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                      <div className="w-full md:w-1/2 order-2 md:order-1">
                        <span className="text-secondary font-black tracking-widest text-[9px] uppercase mb-4 block">Excelência em Atendimento</span>
                        <h2 className="text-3xl md:text-4xl font-black text-primary mb-6 tracking-tighter">Referência Técnica em {titleName}.</h2>
                        <p className="text-gray-500 mb-8 leading-relaxed font-light">
                          Oferecemos {uniqueArguments}. Em <strong>{titleName}</strong>, nossa missão é restaurar a funcionalidade total do seu sistema hidráulico com rapidez e higiene cirúrgica.
                        </p>
                        <div className="space-y-4">
                           {TRUST_BADGES.map((badge, i) => (
                             <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 group hover:bg-primary transition-all cursor-default">
                               <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors shadow-sm">
                                 <i className={`fas ${badge.icon} text-primary`}></i>
                               </div>
                               <span className="text-[10px] font-black text-gray-700 uppercase tracking-widest group-hover:text-white">{badge.text}</span>
                             </div>
                           ))}
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 order-1 md:order-2 h-full">
                        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-gray-100">
                          <img 
                            src={locationImage.url} 
                            alt={`Serviço de Encanador em ${titleName}`} 
                            onError={handleImageError}
                            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" 
                          />
                        </div>
                      </div>
                    </div>
                </div>

                {/* Persuasive Banner */}
                <div className="bg-[#0f172a] text-white p-12 md:p-20 rounded-[3rem] md:rounded-[4rem] shadow-2xl relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-1.5 h-full bg-accent group-hover:w-full opacity-10 group-hover:opacity-5 transition-all"></div>
                   <h3 className="text-3xl md:text-5xl font-black mb-12 tracking-tighter">Onde amadores quebram, <br /><span className="text-accent">nós localizamos.</span></h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:border-accent transition-colors">
                         <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                            <i className="fas fa-satellite-dish text-accent"></i>
                         </div>
                         <h4 className="text-xl font-black mb-3 italic">Ultrassom Geofônico</h4>
                         <p className="text-white/40 text-xs leading-relaxed">Captação de ondas sonoras de fissuras internas em {titleName}, evitando demolições exploratórias.</p>
                      </div>
                      <div className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:border-accent transition-colors">
                         <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                            <i className="fas fa-camera-rotate text-accent"></i>
                         </div>
                         <h4 className="text-xl font-black mb-3 italic">Vídeo-Inspeção HD</h4>
                         <p className="text-white/40 text-xs leading-relaxed">Mapeamento interno robotizado das tubulações para diagnósticos definitivos e limpos.</p>
                      </div>
                   </div>
                </div>

                <FAQ 
                    items={[
                        { question: `Qual o valor da visita em ${titleName}?`, answer: `Em **${titleName}**, a visita técnica e o diagnóstico presencial são **100% gratuitos**. Você só paga se aprovar o orçamento e o serviço for executado.` },
                        ...GENERAL_FAQ.slice(0, 3)
                    ]} 
                    title={`Suporte Técnico: ${titleName}`}
                />
            </div>

            {/* Sticky Sidebar Mobile Friendly */}
            <div className="w-full lg:w-1/3">
                <div className="sticky top-24 space-y-10">
                  <div className="bg-white p-2 rounded-[3.5rem] shadow-2xl border border-gray-100 overflow-hidden">
                    <ContactForm />
                  </div>
                  
                  <div className="bg-urgent p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden group">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                    <span className="text-[9px] font-black uppercase tracking-widest mb-4 block opacity-60">Emergência Prioritária</span>
                    <h4 className="text-3xl font-black mb-6 tracking-tighter leading-none uppercase italic">Precisa de um técnico agora?</h4>
                    <p className="mb-10 text-white/80 font-medium text-sm leading-relaxed">Temos unidades táticas de pronto atendimento circulando em {titleName} 24h por dia.</p>
                    <a 
                      href={CONTACT_INFO.whatsappLink} 
                      className="block bg-white text-urgent text-center font-black py-6 rounded-[2rem] hover:bg-accent hover:text-primary transition-all shadow-xl uppercase tracking-widest text-[10px]"
                    >
                      <i className="fab fa-whatsapp mr-2 text-xl"></i> Ativar Unidade Móvel
                    </a>
                  </div>

                  <div className="bg-gray-50 p-10 rounded-[3.5rem] border border-gray-100">
                    <h5 className="font-black text-primary mb-6 flex items-center gap-3 text-xs uppercase tracking-widest">
                      <i className="fas fa-location-dot text-accent"></i> Cobertura em Curitiba
                    </h5>
                    <div className="flex flex-wrap gap-2">
                       {BAIRROS.slice(0, 15).map((b, i) => (
                         <Link key={i} to={`/bairro/${b.toLowerCase().replace(/ /g, '-')}`} className="text-[9px] font-bold text-gray-400 hover:text-primary transition-colors uppercase bg-white border border-gray-100 px-3 py-1.5 rounded-full">
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