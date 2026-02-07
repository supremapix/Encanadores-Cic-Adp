import React from 'react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none';
    const parent = e.currentTarget.parentElement;
    if (parent) {
      const logoEmul = document.createElement('div');
      logoEmul.className = "absolute inset-0 flex items-center justify-center opacity-10 animate-pulse-slow";
      logoEmul.innerHTML = `<img src="${CONTACT_INFO.logoUrl}" class="w-1/2 max-w-[300px] object-contain grayscale brightness-200" />`;
      parent.appendChild(logoEmul);
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#051125] pt-24 md:pt-0">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581244276891-997b6a550267?auto=format&fit=crop&w=1920&q=80" 
          alt="ADP Engenharia" 
          onError={handleImageError}
          className="w-full h-full object-cover opacity-15 mix-blend-screen scale-110 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#051125] via-[#051125]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#051125] via-transparent to-primary/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:30px_30px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto lg:mx-0 animate-slide-up text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full mb-6 md:mb-8 mx-auto lg:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-white font-black text-[8px] md:text-xs uppercase tracking-[0.2em]">Plantão Técnico Curitiba 24h</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-[clamp(3.5rem,8vw,9rem)] font-black text-white mb-6 leading-[0.9] tracking-tighter">
            SOLUÇÕES <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-200 to-white">HIDRÁULICAS</span>
          </h1>
          
          <p className="text-base md:text-2xl text-white/50 mb-10 md:mb-12 max-w-2xl leading-tight font-light mx-auto lg:mx-0">
            Onde outros quebram, nós diagnosticamos. <strong className="text-white font-bold">Engenharia Digital</strong> para detecção e reparo sem destruição.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start items-stretch">
            <a 
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-accent hover:bg-white text-primary text-lg md:text-xl font-black py-5 md:py-6 px-8 md:px-12 rounded-2xl md:rounded-[2rem] shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-4"
            >
              <i className="fab fa-whatsapp text-2xl md:text-3xl"></i> 
              WHATSAPP 24H
            </a>
            
            <a 
              href={CONTACT_INFO.phoneLink}
              className="bg-white/5 hover:bg-white/10 backdrop-blur-xl text-white border border-white/10 text-lg md:text-xl font-bold py-5 md:py-6 px-8 md:px-12 rounded-2xl md:rounded-[2rem] transition-all flex items-center justify-center gap-4"
            >
              <i className="fas fa-phone-alt text-accent"></i> (41) 3345-1194
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 md:mt-16 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { val: 'ZERO', label: 'Quebra-quebra' },
              { val: '30min', label: 'Chegada média' },
              { val: 'LAUDO', label: 'Oficial Sanepar' },
              { val: '90 Dias', label: 'Garantia Total' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1 border-l border-white/10 pl-3 md:pl-4 first:border-l-0 first:pl-0 text-left">
                <span className="text-accent font-black text-xl md:text-2xl tracking-tighter">{item.val}</span>
                <span className="text-white/20 text-[7px] md:text-[9px] uppercase font-bold tracking-widest">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Smooth Bottom Transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
      </div>

      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .animate-slow-zoom { animation: slow-zoom 40s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse 6s ease-in-out infinite; }
        @keyframes pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.02); }
        }
      `}</style>
    </section>
  );
};

export default Hero;