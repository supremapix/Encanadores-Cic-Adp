
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import VideoSection from '../components/VideoSection';
import FAQ from '../components/FAQ';
import SafeImage from '../components/SafeImage';
import { MAIN_SERVICES, BAIRROS, GENERAL_FAQ, CONTACT_INFO, IMAGES } from '../constants';

const Home: React.FC = () => {
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
               <h2 className="text-4xl md:text-6xl font-black text-primary mb-10 tracking-tighter leading-none">Proteja seu imóvel com <br /><span className="text-secondary italic">Engenharia Digital.</span></h2>
               <p className="text-xl text-gray-600 leading-relaxed font-light mb-10">
                 A ADP Engenharia localiza vazamentos invisíveis com precisão cirúrgica. Valores a partir de <strong>R$ 50</strong> para serviços básicos de desobstrução e avaliação.
               </p>
               <div className="flex items-center gap-6 p-6 bg-blue-50/50 rounded-3xl border border-blue-100">
                  <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                    <i className="fas fa-certificate text-3xl"></i>
                  </div>
                  <div>
                    <h4 className="font-black text-primary text-lg tracking-tight mb-1">Empresa Certificada</h4>
                    <p className="text-xs text-gray-500 font-medium italic">Laudos oficiais aceitos por Seguradoras e Sanepar.</p>
                  </div>
               </div>
            </div>
            <div className="lg:w-1/2 relative order-1 lg:order-2">
               <div className="relative z-10 rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white aspect-square">
                  <SafeImage 
                    src={IMAGES[1].url} 
                    alt="Diagnóstico Digital ADP" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
               </div>
               <div className="absolute -bottom-10 -right-6 bg-accent text-primary p-10 rounded-[3rem] shadow-2xl z-20 animate-bounce-slow text-center">
                  <span className="block text-4xl font-black leading-none">R$ 50</span>
                  <span className="block text-[8px] font-black uppercase tracking-widest opacity-50">A PARTIR DE</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="servicos" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter mb-6 uppercase italic">Especialidades</h2>
            <p className="text-gray-500 text-lg">Tecnologia avançada para quem não pode perder tempo nem dinheiro.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {MAIN_SERVICES.map((service) => (
              <Link 
                key={service.id} 
                to={`/servico/${service.id}`}
                className="bg-white rounded-[3rem] p-12 shadow-sm hover:shadow-2xl transition-all hover:-translate-y-4 group border border-gray-100"
              >
                <div className="w-20 h-20 bg-primary/5 rounded-[2rem] flex items-center justify-center mb-10 group-hover:bg-primary transition-colors">
                  <i className={`fas ${service.icon} text-3xl text-primary group-hover:text-accent`}></i>
                </div>
                <h3 className="text-2xl font-black text-gray-800 mb-6 group-hover:text-primary transition-colors italic">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-10 font-medium opacity-80">{service.description}</p>
                <div className="pt-8 border-t border-gray-50 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-accent group-hover:text-primary">
                   <span>Consultar Especialista</span>
                   <i className="fas fa-arrow-right"></i>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <VideoSection />

      {/* High-End CTA */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <SafeImage src={IMAGES[0].url} alt="Fundo" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-5xl md:text-[clamp(3rem,8vw,8rem)] font-black text-white mb-10 leading-none tracking-tighter uppercase italic">
            RESOLUÇÃO <span className="text-accent">DEFINITIVA.</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
             <a href={CONTACT_INFO.whatsappLink} className="bg-accent text-primary px-16 py-8 rounded-3xl font-black text-2xl shadow-2xl hover:scale-105 transition-transform uppercase italic">
               Chamar Agora R$ 50*
             </a>
             <div className="text-left text-white/50 text-xs uppercase tracking-widest font-black italic">
                *Valor referente a visita técnica <br /> e avaliação preliminar digital.
             </div>
          </div>
        </div>
      </section>

      <section id="bairros" className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-4xl font-black text-primary tracking-tighter italic uppercase">Rede Curitiba</h2>
            <Link to="/sitemap" className="text-[10px] font-black uppercase tracking-[0.2em] text-accent bg-primary px-6 py-3 rounded-xl">MAPA COMPLETO</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {BAIRROS.slice(0, 18).map((bairro, idx) => (
              <Link 
                key={idx} 
                to={`/bairro/${bairro.toLowerCase().replace(/ /g, '-')}`}
                className="p-6 bg-gray-50 rounded-[2rem] border border-transparent hover:border-accent hover:bg-white transition-all text-center group"
              >
                <span className="text-[10px] font-black text-gray-400 group-hover:text-primary tracking-widest uppercase">{bairro}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
