import React from 'react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[650px] lg:h-[850px] flex items-center overflow-hidden bg-primary">
      {/* Background Layer with Sophisticated Transparency */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581244276891-997b6a550267?auto=format&fit=crop&w=1920&q=80" 
          alt="ADP Engenharia Hidráulica Background" 
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity scale-110 animate-slow-zoom"
        />
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/20"></div>
        
        {/* Animated Light Blobs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-24 right-24 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] animate-bounce-slow"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl animate-slide-up">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-8 shadow-2xl">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            <span className="text-white font-bold text-xs uppercase tracking-[0.2em]">Equipes de Plantão em Curitiba</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black text-white mb-6 leading-[0.9] tracking-tighter">
            SOLUÇÃO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-200 to-white">HIDRÁULICA</span>
            <br />
            <span className="text-4xl md:text-6xl font-light opacity-80 tracking-normal">Engenharia sem Quebra-Quebra</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-white/70 mb-12 max-w-2xl leading-relaxed font-medium">
            Atendimento 24h especializado em <strong className="text-white">Caça-Vazamento Digital</strong> e <strong className="text-white">Desentupimento de Alta Precisão</strong>. Onde outros quebram tudo, nós localizamos e resolvemos.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 items-stretch sm:items-center">
            <a 
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-accent hover:bg-white text-primary text-xl font-black py-6 px-12 rounded-2xl shadow-[0_30px_60px_-15px_rgba(255,235,59,0.3)] transform hover:scale-105 transition-all flex items-center justify-center gap-4"
            >
              <i className="fab fa-whatsapp text-3xl"></i> 
              WHATSAPP URGENTE
            </a>
            <div className="flex flex-col">
              <span className="text-white/50 text-[10px] font-bold uppercase tracking-widest mb-1 ml-4">Ligar Agora</span>
              <a 
                href={CONTACT_INFO.phoneLink}
                className="bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/20 text-xl font-bold py-5 px-10 rounded-2xl transition-all flex items-center justify-center gap-4"
              >
                <i className="fas fa-phone-alt text-accent"></i> (41) 3345-1194
              </a>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-1">
              <span className="text-accent font-black text-2xl tracking-tighter">24H</span>
              <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Disponibilidade Total</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-accent font-black text-2xl tracking-tighter">ZERO</span>
              <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Quebra-Quebra</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-accent font-black text-2xl tracking-tighter">100%</span>
              <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Garantido em Contrato</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-accent font-black text-2xl tracking-tighter">30MIN</span>
              <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Chegada em Curitiba</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative SVG Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[120px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
          </svg>
      </div>

      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;