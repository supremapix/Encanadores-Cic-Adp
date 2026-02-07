import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import VideoSection from '../components/VideoSection';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import { MAIN_SERVICES, BAIRROS, CIDADES, GENERAL_FAQ, CONTACT_INFO, IMAGES } from '../constants';

const Home: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const parent = e.currentTarget.parentElement;
    if (parent) {
      parent.className = "w-full h-full bg-gray-100 flex flex-col items-center justify-center p-12 rounded-[2.5rem] border border-gray-200";
      parent.innerHTML = `
        <img src="${CONTACT_INFO.logoUrl}" class="w-24 h-24 object-contain opacity-10 mb-4 grayscale" />
        <span class="text-primary/20 font-black text-[8px] uppercase tracking-widest">Asset: ADP Precision</span>
      `;
    }
  };

  return (
    <div className="overflow-x-hidden bg-white">
      <Hero />
      <TrustBar />
      
      {/* Authority Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 order-2 lg:order-1">
               <span className="text-secondary font-black tracking-[0.3em] text-[10px] uppercase mb-6 block">Credibilidade Técnica</span>
               <h2 className="text-4xl md:text-6xl font-black text-primary mb-10 tracking-tighter leading-none">Proteja seu imóvel com <br /><span className="text-secondary">Engenharia Digital</span>.</h2>
               <p className="text-xl text-gray-600 leading-relaxed font-light mb-10">
                 A ADP Engenharia não utiliza o método da "quebra exploratória". Nossos técnicos operam **Geofones Digitais** de alta sensibilidade para localizar vazamentos invisíveis sem destruir azulejos e pisos caros.
               </p>
               <div className="flex items-center gap-6 p-6 bg-blue-50/50 rounded-3xl border border-blue-100">
                  <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                    <i className="fas fa-certificate text-3xl"></i>
                  </div>
                  <div>
                    <h4 className="font-black text-primary text-lg tracking-tight leading-none mb-2">Empresa Certificada</h4>
                    <p className="text-xs text-gray-500 font-medium">Laudos técnicos oficiais aceitos por Seguradoras e Sanepar.</p>
                  </div>
               </div>
            </div>
            <div className="lg:w-1/2 relative order-1 lg:order-2">
               <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border-8 border-white aspect-video lg:aspect-square flex items-center justify-center bg-gray-50">
                  <img 
                    src={IMAGES[1].url} 
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" 
                    onError={handleImageError}
                    alt="Engenharia de Diagnóstico" 
                  />
               </div>
               {/* Floating Premium Badge */}
               <div className="absolute -bottom-8 -right-4 md:-right-8 bg-accent text-primary p-8 md:p-12 rounded-[2.5rem] shadow-2xl z-20 animate-bounce-slow flex flex-col items-center">
                  <span className="block text-4xl md:text-5xl font-black leading-none mb-1">ZERO</span>
                  <span className="block text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Invasividade</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Premium */}
      <section id="servicos" className="py-24 bg-[#f9fbff] relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter mb-6">Nossas Especialidades</h2>
            <p className="text-gray-500 text-lg font-light">Equipamentos de última geração e técnicos treinados para resolver problemas de alta complexidade em Curitiba.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {MAIN_SERVICES.map((service) => (
              <Link 
                key={service.id} 
                to={`/servico/${service.id}`}
                className="bg-white rounded-[3rem] p-12 shadow-sm hover:shadow-2xl transition-all hover:-translate-y-4 group border border-gray-100 flex flex-col"
              >
                <div className="w-20 h-20 bg-blue-50 rounded-[1.8rem] flex items-center justify-center mb-10 group-hover:bg-primary transition-all duration-500 shadow-sm group-hover:shadow-xl">
                  <i className={`fas ${service.icon} text-3xl text-primary group-hover:text-white`}></i>
                </div>
                <h3 className="text-2xl font-black text-gray-800 mb-6 group-hover:text-primary transition-colors leading-none tracking-tight">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-10 flex-grow font-medium opacity-80">{service.description}</p>
                <div className="pt-8 border-t border-gray-50 flex justify-between items-center">
                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent group-hover:text-primary transition-colors">Consultar Especialista</span>
                   <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all group-hover:translate-x-2">
                     <i className="fas fa-chevron-right text-[10px]"></i>
                   </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <VideoSection />

      {/* High-End CTA Section */}
      <section className="py-32 bg-primary relative overflow-hidden">
        {/* Animated Light Blobs */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
             <h2 className="text-5xl md:text-[clamp(4rem,7vw,10rem)] font-black text-white mb-10 leading-[0.85] tracking-tighter">
               QUALIDADE <br /> <span className="text-accent italic">SEM COMPROMISSO.</span>
             </h2>
             <p className="text-xl md:text-3xl text-white/50 mb-16 font-light leading-relaxed max-w-2xl mx-auto">
               Não permita que um vazamento silencioso destrua seu investimento. Nosso diagnóstico é o seguro do seu imóvel.
             </p>
             <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
               <a 
                 href={CONTACT_INFO.whatsappLink}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full md:w-auto bg-accent text-primary text-2xl font-black py-8 px-16 rounded-[2.5rem] shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-6 group"
               >
                 <i className="fab fa-whatsapp text-4xl group-hover:rotate-12 transition-transform"></i> 
                 SOLICITAR DIAGNÓSTICO
               </a>
               <div className="text-left group cursor-pointer" onClick={() => window.location.href = CONTACT_INFO.phoneLink}>
                  <p className="text-white/30 text-[9px] font-black uppercase tracking-[0.3em] mb-2 ml-1 group-hover:text-accent transition-colors">Canal Urgente Curitiba</p>
                  <span className="text-3xl md:text-4xl font-black text-white border-b-2 border-white/10 group-hover:border-accent transition-all">(41) 3345-1194</span>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Locations Mobile Optimized */}
      <section id="bairros" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-black text-primary tracking-tighter mb-4">Rede de Atendimento</h2>
              <p className="text-gray-500 font-light text-lg">Unidades táticas de pronta resposta em todos os distritos.</p>
            </div>
            <Link to="/sitemap" className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary hover:text-primary flex items-center gap-2 border-b border-transparent hover:border-secondary transition-all">
              MAPA COMPLETO <i className="fas fa-location-arrow text-[8px]"></i>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {BAIRROS.slice(0, 18).map((bairro, idx) => (
              <Link 
                key={idx} 
                to={`/bairro/${bairro.toLowerCase().replace(/ /g, '-')}`}
                className="p-5 bg-gray-50 rounded-[2rem] border border-transparent hover:border-accent hover:bg-white hover:shadow-2xl transition-all text-center group"
              >
                <span className="text-xs font-black text-gray-700 group-hover:text-primary tracking-tight transition-colors">{bairro}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .animate-bounce-slow {
          animation: bounce 4s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default Home;