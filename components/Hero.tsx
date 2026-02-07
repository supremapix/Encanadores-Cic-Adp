import React from 'react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[500px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay - High quality professional photo */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581244276891-997b6a550267?q=80&w=2070&auto=format&fit=crop" 
          alt="Encanador Profissional Curitiba ADP" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-left text-white">
        <div className="animate-slide-up max-w-3xl">
          <h2 className="text-xl md:text-2xl font-light mb-2 text-accent uppercase tracking-widest">
            <i className="fas fa-tools mr-2"></i> Atendimento em Curitiba e Região
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            Encanador <span className="text-accent underline decoration-white/20">24 Horas</span>
            <br />
            <span className="text-3xl md:text-5xl opacity-90">Solução Imediata em Hidráulica</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-100 mb-10 max-w-2xl leading-relaxed">
            Especialistas em <strong>desentupimento</strong> e <strong>caça-vazamentos</strong>. 
            Equipes de plantão com chegada em até 30 minutos.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-green-500 hover:bg-green-600 text-white text-xl font-bold py-5 px-10 rounded-2xl shadow-2xl transform hover:scale-105 transition-all flex items-center justify-center gap-3"
            >
              <i className="fab fa-whatsapp text-3xl group-hover:rotate-12 transition-transform"></i> 
              CHAMAR NO WHATSAPP
            </a>
            <a 
              href={CONTACT_INFO.phoneLink}
              className="bg-white hover:bg-gray-100 text-primary text-xl font-bold py-5 px-10 rounded-2xl shadow-2xl transition-all flex items-center justify-center gap-3 border-2 border-transparent"
            >
              <i className="fas fa-phone-alt"></i> (41) 3345-1194
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6 text-sm md:text-base font-semibold text-accent animate-pulse">
            <span className="flex items-center gap-2"><i className="fas fa-check-circle"></i> Orçamento Gratuito</span>
            <span className="flex items-center gap-2"><i className="fas fa-check-circle"></i> Garantia de 90 Dias</span>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[120px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
          </svg>
      </div>
    </section>
  );
};

export default Hero;