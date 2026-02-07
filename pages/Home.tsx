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
    e.currentTarget.src = CONTACT_INFO.logoUrl;
    e.currentTarget.className = "w-24 h-24 opacity-20 mx-auto object-contain my-auto p-4";
  };

  return (
    <div className="overflow-x-hidden bg-white">
      <Hero />
      <TrustBar />
      
      {/* Authority Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
               <span className="text-secondary font-black tracking-[0.3em] text-[10px] uppercase mb-6 block">Credibilidade & Tecnologia</span>
               <h2 className="text-4xl md:text-6xl font-black text-primary mb-10 tracking-tighter leading-none">A Diferença entre <br /><span className="text-secondary">Quebrar e Localizar</span>.</h2>
               <p className="text-xl text-gray-600 leading-relaxed font-light mb-10">
                 Muitos encanadores em Curitiba ainda utilizam o método da tentativa e erro, destruindo acabamentos caros em busca de um vazamento. A <strong>ADP Engenharia</strong> utiliza o Geofone Digital de última geração para ouvir o som da fuga de água através da parede.
               </p>
               <div className="flex items-center gap-6 p-6 bg-blue-50 rounded-3xl border border-blue-100">
                  <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center shrink-0">
                    <i className="fas fa-certificate text-3xl"></i>
                  </div>
                  <div>
                    <h4 className="font-black text-primary text-lg tracking-tight leading-none mb-2">Empresa Credenciada</h4>
                    <p className="text-sm text-gray-500">Emitimos laudos técnicos aceitos por seguradoras e pela Sanepar.</p>
                  </div>
               </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-50 aspect-video lg:aspect-square flex items-center justify-center bg-gray-100">
                  <img 
                    src={IMAGES[1].url} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                    onError={handleImageError}
                    alt="Engenharia de Diagnóstico" 
                  />
               </div>
               {/* Floating Badge */}
               <div className="absolute -bottom-10 -right-6 md:-right-10 bg-accent text-primary p-8 md:p-12 rounded-[2.5rem] shadow-2xl z-20 animate-bounce-slow">
                  <span className="block text-4xl font-black leading-none mb-1">ZERO</span>
                  <span className="block text-xs font-black uppercase tracking-widest">Invasividade</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-[#f8fafc]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter mb-6">Nossas Especialidades</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">Soluções completas para problemas de alta complexidade em residências e empresas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {MAIN_SERVICES.map((service) => (
              <Link 
                key={service.id} 
                to={`/servico/${service.id}`}
                className="bg-white rounded-[3rem] p-12 shadow-sm hover:shadow-2xl transition-all hover:-translate-y-4 group border border-gray-100 flex flex-col"
              >
                <div className="w-20 h-20 bg-blue-50 rounded-[1.5rem] flex items-center justify-center mb-10 group-hover:bg-primary transition-colors">
                  <i className={`fas ${service.icon} text-3xl text-primary group-hover:text-white`}></i>
                </div>
                <h3 className="text-2xl font-black text-gray-800 mb-6 group-hover:text-primary transition-colors leading-none">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-10 flex-grow font-medium">{service.description}</p>
                <div className="pt-8 border-t border-gray-50 flex justify-between items-center">
                   <span className="text-xs font-black uppercase tracking-widest text-accent group-hover:text-primary">Consultar Serviço</span>
                   <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-primary transition-all group-hover:translate-x-2">
                     <i className="fas fa-chevron-right text-[10px] text-gray-300 group-hover:text-primary"></i>
                   </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <VideoSection />

      {/* Premium CTA Section */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
             <h2 className="text-5xl md:text-[100px] font-black text-white mb-10 leading-[0.85] tracking-tighter">
               QUALIDADE <br /> <span className="text-accent">SEM COMPROMISSO.</span>
             </h2>
             <p className="text-xl md:text-3xl text-white/60 mb-16 font-light leading-relaxed">
               Não espere o dano aumentar. Nosso diagnóstico preventivo economiza milhares de reais em reformas futuras.
             </p>
             <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
               <a 
                 href={CONTACT_INFO.whatsappLink}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full md:w-auto bg-accent text-primary text-2xl font-black py-8 px-16 rounded-[2.5rem] shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-5 group"
               >
                 <i className="fab fa-whatsapp text-4xl"></i> 
                 SOLICITAR DIAGNÓSTICO
               </a>
               <div className="text-left group cursor-pointer" onClick={() => window.location.href = CONTACT_INFO.phoneLink}>
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-2 ml-1 group-hover:text-accent transition-colors">Plantão Curitiba</p>
                  <span className="text-4xl font-black text-white">(41) 3345-1194</span>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Locations Summary */}
      <section id="bairros" className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tighter">Atendimento Geográfico</h2>
              <p className="text-gray-500 font-light text-lg">Unidades de pronta resposta em todos os distritos de Curitiba.</p>
            </div>
            <Link to="/sitemap" className="text-xs font-black uppercase tracking-widest text-secondary hover:text-primary flex items-center gap-2">
              Ver Mapa Completo <i className="fas fa-location-arrow"></i>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {BAIRROS.slice(0, 18).map((bairro, idx) => (
              <Link 
                key={idx} 
                to={`/bairro/${bairro.toLowerCase().replace(/ /g, '-')}`}
                className="p-6 bg-gray-50 rounded-[2rem] border border-transparent hover:border-accent hover:bg-white hover:shadow-xl transition-all text-center"
              >
                <span className="text-sm font-bold text-gray-700">{bairro}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final Form Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div>
               <span className="text-accent font-black tracking-widest text-[10px] uppercase mb-6 block">Contato Direto</span>
               <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Ouvimos o que seus canos estão dizendo.</h2>
               <p className="text-xl text-white/50 mb-12 font-light leading-relaxed">
                 Preencha os dados ao lado para um retorno imediato de um consultor técnico especializado da ADP.
               </p>
               <div className="space-y-6">
                  <div className="flex items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/10">
                    <i className="fas fa-clock text-3xl text-accent"></i>
                    <p className="font-bold">Plantão 24 horas - Incluindo Domingos e Feriados</p>
                  </div>
                  <div className="flex items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/10">
                    <i className="fas fa-map-pin text-3xl text-accent"></i>
                    <p className="font-bold">Base Móvel Central: Batel, Centro e Água Verde</p>
                  </div>
               </div>
             </div>
             <div className="bg-white text-gray-900 p-2 rounded-[3.5rem] shadow-2xl">
               <ContactForm />
             </div>
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