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
      "atendimento prioritário com unidades móveis equipadas com tecnologia de ultrassom digital",
      "maquinário de hidrojateamento de alta pressão capaz de restaurar 100% do fluxo original",
      "abordagem técnica não-invasiva que evita a quebra de pisos e revestimentos caros",
      "emissão imediata de laudo técnico oficial para reduções tarifárias junto à Sanepar",
      "plantão especial focado em condomínios de alto padrão com atendimento em 30 minutos"
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
    // Emulação da logo em caso de imagem quebrada
    const container = e.currentTarget.parentElement;
    if (container) {
      container.className = "w-full h-full bg-[#f8fafc] flex flex-col items-center justify-center p-12";
      container.innerHTML = `
        <img src="${CONTACT_INFO.logoUrl}" class="w-32 h-32 object-contain opacity-20 mb-6 grayscale" />
        <span class="text-primary font-black text-xs uppercase tracking-[0.3em] opacity-30">ADP ENGENHARIA</span>
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
      {/* Premium Dynamic Header */}
      <section className="bg-primary text-white py-32 md:py-48 relative overflow-hidden">
        {/* Technical Design Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/5 rounded-full blur-[100px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl">
              <nav className="flex items-center gap-3 text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-10">
                <Link to="/" className="hover:text-accent transition-colors">ADP Home</Link>
                <i className="fas fa-chevron-right text-[7px]"></i>
                <span className="text-white/60">{type}</span>
                <i className="fas fa-chevron-right text-[7px]"></i>
                <span className="text-accent">{titleName}</span>
              </nav>
              <h1 className="text-6xl md:text-9xl font-black mb-10 leading-none tracking-tighter">
                {type === 'servico' ? titleName : `ENCANADOR EM ${titleName}`}
              </h1>
              <p className="text-2xl md:text-4xl font-light text-white/60 max-w-3xl leading-tight tracking-tight">
                Engenharia de alta performance para o imóvel mais importante do mundo: <strong className="text-white font-black">{titleName}</strong>.
              </p>
            </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 -mt-24 relative z-20 pb-32">
        <div className="flex flex-col lg:flex-row gap-16">
            {/* Info Column */}
            <div className="w-full lg:w-2/3 space-y-16">
                <div className="bg-white p-10 md:p-20 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                      <div className="order-2 md:order-1">
                        <span className="text-secondary font-black tracking-widest text-[9px] uppercase mb-4 block">Excelência em Atendimento</span>
                        <h2 className="text-3xl md:text-5xl font-black text-primary mb-8 tracking-tighter leading-none">A Elite Hidráulica agora em {titleName}.</h2>
                        <p className="text-gray-500 mb-10 leading-relaxed text-lg font-light">
                          Oferecemos {uniqueArguments}. Nosso objetivo em <strong>{titleName}</strong> é restaurar sua paz de espírito com a eficiência técnica que só a ADP possui.
                        </p>
                        <div className="grid grid-cols-1 gap-5">
                           {TRUST_BADGES.map((badge, i) => (
                             <div key={i} className="flex items-center gap-5 p-5 bg-gray-50 rounded-[2rem] border border-gray-100 group hover:bg-primary transition-all">
                               <div className="w-12 h-12 bg-white rounded-[1rem] shadow-sm flex items-center justify-center group-hover:bg-accent transition-colors">
                                 <i className={`fas ${badge.icon} text-primary`}></i>
                               </div>
                               <span className="text-xs font-black text-gray-700 uppercase tracking-widest group-hover:text-white">{badge.text}</span>
                             </div>
                           ))}
                        </div>
                      </div>
                      <div className="order-1 md:order-2">
                        <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white aspect-[4/5] bg-gray-50 flex items-center justify-center relative group">
                          <img 
                            src={locationImage.url} 
                            alt={`Serviço de Encanador em ${titleName}`} 
                            onError={handleImageError}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                          />
                          <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity"></div>
                        </div>
                      </div>
                    </div>
                </div>

                {/* Persuasive Tech Banner */}
                <div className="bg-[#0f172a] text-white p-16 md:p-24 rounded-[4rem] shadow-2xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-2 h-full bg-accent"></div>
                   <h3 className="text-3xl md:text-5xl font-black mb-16 tracking-tighter leading-none">Onde outros quebram tudo, <br /><span className="text-accent">nós localizamos.</span></h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                      <div className="group">
                         <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:bg-accent transition-all">
                            <i className="fas fa-radar text-accent group-hover:text-primary transition-colors"></i>
                         </div>
                         <h4 className="text-xl font-black mb-4 tracking-tight leading-none">Diagnóstico Geofônico</h4>
                         <p className="text-white/40 text-sm leading-relaxed font-light">Tecnologia que detecta ondas sonoras milimétricas emitidas por fissuras internas nas tubulações de {titleName}.</p>
                      </div>
                      <div className="group">
                         <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:bg-accent transition-all">
                            <i className="fas fa-video text-accent group-hover:text-primary transition-colors"></i>
                         </div>
                         <h4 className="text-xl font-black mb-4 tracking-tight leading-none">Vídeo Inspeção HD</h4>
                         <p className="text-white/40 text-sm leading-relaxed font-light">Mapeamento visual interno da rede de esgoto para identificar obstruções complexas sem necessidade de abertura de valas.</p>
                      </div>
                   </div>
                </div>

                <FAQ 
                    items={[
                        { question: `Qual a estimativa de preço para ${titleName}?`, answer: `Em **${titleName}**, trabalhamos com orçamentos personalizados baseados na complexidade técnica. Pequenas desobstruções possuem valores fixos, enquanto caça-vazamentos dependem da área a ser escaneada.` },
                        ...GENERAL_FAQ.slice(0, 3)
                    ]} 
                    title={`Engenharia de Atendimento: ${titleName}`}
                />
            </div>

            {/* Sidebar Column */}
            <div className="w-full lg:w-1/3">
                <div className="sticky top-28 space-y-10">
                  <div className="bg-white p-2 rounded-[3.5rem] shadow-2xl border border-gray-100">
                    <ContactForm />
                  </div>
                  
                  <div className="bg-urgent p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
                    <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full blur-[80px]"></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 block opacity-60">Emergência 24H</span>
                    <h4 className="text-3xl font-black mb-8 tracking-tighter leading-none italic uppercase">Inundação <br /> ou Vazamento?</h4>
                    <p className="mb-12 text-white/80 font-light text-lg">Temos uma unidade tática agora em {titleName} pronta para intervir.</p>
                    <a 
                      href={CONTACT_INFO.whatsappLink} 
                      className="block bg-white text-urgent text-center font-black py-7 rounded-[2rem] hover:bg-accent hover:text-primary transition-all shadow-xl uppercase tracking-[0.2em] text-[10px]"
                    >
                      <i className="fab fa-whatsapp mr-2 text-xl"></i> Ativar Unidade Móvel
                    </a>
                  </div>

                  <div className="bg-white p-12 rounded-[4rem] border border-gray-100 shadow-sm">
                    <h5 className="font-black text-primary mb-8 flex items-center gap-3">
                      <i className="fas fa-location-dot text-accent"></i> Cobertura Local
                    </h5>
                    <div className="flex flex-wrap gap-3">
                       {BAIRROS.slice(0, 15).map((b, i) => (
                         <Link key={i} to={`/bairro/${b.toLowerCase().replace(/ /g, '-')}`} className="text-[9px] font-black text-gray-400 hover:text-primary transition-colors uppercase tracking-[0.1em] bg-gray-50 px-4 py-2 rounded-full border border-transparent hover:border-accent">
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