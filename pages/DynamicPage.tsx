
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

  useEffect(() => {
    window.scrollTo(0, 0);
    const metaTitle = type === 'servico' 
      ? `${titleName} Profissional em Curitiba 24h | ADP Engenharia`
      : `Encanador em ${titleName} 24h | Atendimento Tático Imediato ADP`;
    document.title = metaTitle;
  }, [name, type, titleName]);

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-primary text-white pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
            <div className="max-w-5xl">
              <nav className="flex items-center justify-center md:justify-start gap-3 text-white/30 text-[9px] font-black uppercase tracking-[0.2em] mb-8 overflow-x-auto scrollbar-hide">
                <Link to="/" className="hover:text-accent transition-colors">Home</Link>
                <i className="fas fa-chevron-right text-[6px]"></i>
                <Link to="/sitemap" className="hover:text-accent transition-colors">{type}s</Link>
                <i className="fas fa-chevron-right text-[6px]"></i>
                <span className="text-accent">{titleName}</span>
              </nav>
              <h1 className="text-4xl md:text-8xl font-black mb-8 leading-none tracking-tighter uppercase italic">
                {type === 'servico' ? titleName : `Encanador em ${titleName}`}
              </h1>
              <p className="text-lg md:text-3xl font-light text-white/40 max-w-3xl leading-tight mx-auto md:mx-0">
                Soluções hidráulicas de alta precisão em <strong className="text-white font-black">{titleName}</strong>. Atendimento tático e digital para seu imóvel.
              </p>
            </div>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-16 relative z-20 pb-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <div className="w-full lg:w-2/3 space-y-12">
                <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                      <div className="order-2 md:order-1">
                        <span className="text-secondary font-black tracking-[0.3em] text-[10px] uppercase mb-4 block">Foco Regional</span>
                        <h2 className="text-3xl md:text-4xl font-black text-primary mb-8 tracking-tighter leading-none">Referência em {titleName}.</h2>
                        <p className="text-gray-500 mb-10 leading-relaxed font-medium opacity-80">
                          Na região de <strong>{titleName}</strong>, a ADP Engenharia disponibiliza {uniqueContent.arg}. Nossa meta em cada intervenção é {uniqueContent.reason}, entregando um resultado certificado.
                        </p>
                        <div className="space-y-4">
                           {TRUST_BADGES.map((badge, i) => (
                             <div key={i} className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 group hover:bg-primary transition-all duration-300">
                               <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center group-hover:bg-accent transition-colors">
                                 <i className={`fas ${badge.icon} text-primary`}></i>
                               </div>
                               <span className="text-[10px] font-black text-gray-700 uppercase tracking-widest group-hover:text-white">{badge.text}</span>
                             </div>
                           ))}
                        </div>
                      </div>
                      <div className="order-1 md:order-2">
                        <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white aspect-square md:aspect-[4/5] bg-gray-50">
                          <img src={locationImage.url} alt={`ADP em ${titleName}`} className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </div>
                </div>

                <div className="bg-primary text-white p-10 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                   <div className="absolute top-0 left-0 w-2 h-full bg-accent group-hover:w-full transition-all opacity-100 group-hover:opacity-5 duration-700"></div>
                   <h3 className="text-3xl md:text-5xl font-black mb-10 tracking-tighter uppercase italic leading-none">Problema Crítico em {titleName}?</h3>
                   <div className="flex flex-col md:flex-row gap-6">
                      <a href={CONTACT_INFO.whatsappLink} target="_blank" className="bg-accent text-primary px-10 py-5 rounded-2xl font-black uppercase text-sm shadow-xl hover:bg-white transition-all flex items-center justify-center gap-4">
                        <i className="fab fa-whatsapp text-2xl"></i> Chamar Unidade 24h
                      </a>
                      <a href={CONTACT_INFO.phoneLink} className="bg-white/5 border border-white/20 px-10 py-5 rounded-2xl font-black uppercase text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-4">
                        <i className="fas fa-phone-alt"></i> Ligar Agora
                      </a>
                   </div>
                </div>

                <FAQ items={[
                  { question: `Como funciona o atendimento 24h em ${titleName}?`, answer: `Nossas unidades móveis operam em regime de plantão constante. Para **${titleName}**, temos uma rota dedicada que permite a chegada em tempo recorde para emergências.` },
                  ...GENERAL_FAQ.slice(0, 2)
                ]} title={`Suporte Técnico em ${titleName}`} />
            </div>

            <div className="w-full lg:w-1/3">
                <div className="sticky top-28 space-y-8">
                  <div className="bg-white p-2 rounded-[2.5rem] shadow-2xl border border-gray-100">
                    <ContactForm />
                  </div>
                  
                  <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
                    <h5 className="font-black text-primary mb-8 text-[10px] uppercase tracking-widest flex items-center gap-3">
                      <i className="fas fa-map-marked-alt text-accent"></i> Vizinhos de {titleName}
                    </h5>
                    <div className="flex flex-wrap gap-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                       {BAIRROS.slice(0, 30).map((b, i) => (
                         <Link key={i} to={`/bairro/${b.toLowerCase().replace(/ /g, '-')}`} className="text-[9px] font-black text-gray-400 hover:text-primary transition-colors uppercase bg-white px-4 py-2 rounded-xl border border-gray-100 hover:border-accent">
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
