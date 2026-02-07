
import React, { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
// Added BAIRROS to the imports to resolve the missing reference in the sidebar
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
      "atendimento priorizado com tecnologia de geofone digital de alta precisão",
      "equipes móveis equipadas com bombas de hidrojateamento industrial",
      "tecnologia não-invasiva que localiza o problema sem quebrar seu piso ou parede",
      "laudo técnico certificado para redução de tarifa na Sanepar e perícia de seguro",
      "plantão especial para emergências hidráulicas 24 horas em condomínios"
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
      parent.innerHTML = `
        <div class="w-full h-full bg-primary/5 flex items-center justify-center p-12 rounded-[40px] border border-primary/10 backdrop-blur-xl">
          <img src="${CONTACT_INFO.logoUrl}" class="max-h-full max-w-full object-contain opacity-20" />
        </div>
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
    <div className="bg-gray-50 min-h-screen">
      {/* Dynamic Header Section */}
      <section className="bg-primary text-white py-24 md:py-40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <nav className="flex items-center gap-2 text-white/50 text-xs font-black uppercase tracking-widest mb-8">
                <Link to="/" className="hover:text-accent transition-colors">Home</Link>
                <i className="fas fa-chevron-right text-[8px]"></i>
                <span className="text-white">{type}</span>
                <i className="fas fa-chevron-right text-[8px]"></i>
                <span className="text-accent">{titleName}</span>
              </nav>
              <h1 className="text-5xl md:text-8xl font-black mb-6 leading-none tracking-tighter">
                {type === 'servico' ? titleName : `ENCANADOR EM ${titleName}`}
              </h1>
              <p className="text-xl md:text-3xl font-light text-white/70 max-w-2xl leading-relaxed">
                Referência em Engenharia Hidráulica em <strong className="text-white font-black">{titleName}</strong>. 
                Oferecemos {uniqueArguments} para total tranquilidade do seu imóvel.
              </p>
            </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 -mt-20 relative z-20 pb-24">
        <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Info Column */}
            <div className="w-full lg:w-2/3 space-y-12">
                <div className="bg-white p-8 md:p-16 rounded-[40px] shadow-2xl border border-white/50">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                      <div className="md:w-1/2">
                        <h2 className="text-3xl font-black text-primary mb-6 tracking-tighter">Atendimento Premium em {titleName}</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                          A ADP Engenharia Hidráulica mobiliza equipes especializadas para <strong>{titleName}</strong> com foco em diagnóstico preciso. 
                          Seja um vazamento oculto em seu banheiro ou um entupimento crítico em sua rede de esgoto, nossa abordagem é técnica, limpa e definitiva.
                        </p>
                        <div className="space-y-4">
                           {TRUST_BADGES.slice(0, 3).map((badge, i) => (
                             <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                               <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center">
                                 <i className={`fas ${badge.icon} text-primary`}></i>
                               </div>
                               <span className="text-xs font-black text-gray-700 uppercase tracking-widest">{badge.text}</span>
                             </div>
                           ))}
                        </div>
                      </div>
                      <div className="md:w-1/2 h-full">
                        <div className="rounded-[32px] overflow-hidden shadow-2xl border-4 border-white aspect-[3/4]">
                          <img 
                            src={locationImage.url} 
                            alt={`Serviço de Encanador em ${titleName}`} 
                            onError={handleImageError}
                            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-1000" 
                          />
                        </div>
                      </div>
                    </div>
                </div>

                {/* Localized FAQ / Content */}
                <div className="bg-primary text-white p-12 md:p-20 rounded-[40px] shadow-2xl relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
                   <h3 className="text-3xl font-black mb-12 tracking-tighter">Por que escolher a ADP em {titleName}?</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-4">
                         <h4 className="text-accent font-black text-lg">Visita Gratuita</h4>
                         <p className="text-white/60 text-sm leading-relaxed">Nossos técnicos realizam uma inspeção visual prévia em {titleName} sem qualquer custo. Você só paga pelo serviço aprovado.</p>
                      </div>
                      <div className="space-y-4">
                         <h4 className="text-accent font-black text-lg">Suporte Condominial</h4>
                         <p className="text-white/60 text-sm leading-relaxed">Atendemos síndicos e administradoras em {titleName} com faturamento diferenciado e prioridade de emergência.</p>
                      </div>
                      <div className="space-y-4">
                         <h4 className="text-accent font-black text-lg">Segurança Digital</h4>
                         <p className="text-white/60 text-sm leading-relaxed">Localizamos vazamentos através de Geofone, evitando o "quebra-quebra" exploratório tão comum em empresas amadoras.</p>
                      </div>
                      <div className="space-y-4">
                         <h4 className="text-accent font-black text-lg">Garantia em Contrato</h4>
                         <p className="text-white/60 text-sm leading-relaxed">Cada intervenção técnica em {titleName} acompanha um certificado de garantia que assegura o reparo contra reincidência.</p>
                      </div>
                   </div>
                </div>

                <FAQ 
                    items={[
                        { question: `Qual o tempo de chegada em ${titleName}?`, answer: `Devido ao nosso sistema de unidades móveis, nossa estimativa de chegada em **${titleName}** é de aproximadamente 30 a 45 minutos para casos críticos.` },
                        ...GENERAL_FAQ.slice(0, 2)
                    ]} 
                    title={`Suporte em ${titleName}`}
                />
            </div>

            {/* Sticky Sidebar */}
            <div className="w-full lg:w-1/3">
                <div className="sticky top-28 space-y-8">
                  <ContactForm />
                  
                  <div className="bg-urgent p-12 rounded-[40px] text-white shadow-2xl relative overflow-hidden group">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform"></div>
                    <h4 className="text-2xl font-black mb-4 tracking-tighter uppercase italic">Urgência Hidráulica?</h4>
                    <p className="mb-10 text-white/80 font-medium">Equipes prontas em {titleName} para conter vazamentos e transbordamentos agora.</p>
                    <a 
                      href={CONTACT_INFO.whatsappLink} 
                      className="block bg-white text-urgent text-center font-black py-6 rounded-2xl hover:bg-accent hover:text-primary transition-all shadow-xl uppercase tracking-widest text-sm"
                    >
                      <i className="fab fa-whatsapp mr-2 text-xl"></i> Chamar Unidade Móvel
                    </a>
                  </div>

                  <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm">
                    <h5 className="font-black text-primary mb-6 flex items-center gap-2">
                      <i className="fas fa-map-pin text-accent"></i> Cobertura Adjacente
                    </h5>
                    <div className="flex flex-wrap gap-2">
                       {BAIRROS.slice(0, 10).map((b, i) => (
                         <Link key={i} to={`/bairro/${b.toLowerCase().replace(/ /g, '-')}`} className="text-[10px] font-bold text-gray-400 hover:text-primary transition-colors uppercase tracking-widest bg-gray-50 px-3 py-1.5 rounded-lg">
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
