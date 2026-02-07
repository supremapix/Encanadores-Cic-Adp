
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none';
    const parent = e.currentTarget.parentElement;
    if (parent) {
      const logoEmul = document.createElement('div');
      logoEmul.className = "absolute inset-0 flex items-center justify-center opacity-10 animate-pulse";
      logoEmul.innerHTML = `<img src="${CONTACT_INFO.logoUrl}" class="w-1/2 max-w-[200px] object-contain grayscale brightness-200" alt="ADP Logo" />`;
      parent.appendChild(logoEmul);
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#051125] pt-20 pb-12">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581244276891-997b6a550267?auto=format&fit=crop&w=1920&q=80" 
          alt="ADP Engenharia Hidráulica" 
          onError={handleImageError}
          className="w-full h-full object-cover opacity-20 mix-blend-screen scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#051125] via-[#051125]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#051125] via-transparent to-primary/30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full overflow-hidden">
        <div className="max-w-4xl mx-auto lg:mx-0 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full mb-6 mx-auto lg:mx-0 max-w-full">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-white font-black text-[8px] sm:text-[10px] uppercase tracking-[0.2em] truncate">Atendimento Tático 24h Curitiba</span>
          </div>
          
          <h1 className="hero-title text-[clamp(2rem,8vw,6.5rem)] font-black text-white mb-6 leading-[1.1] tracking-tighter uppercase italic">
            SOLUÇÕES <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-200 to-white">HIDRÁULICAS</span>
          </h1>
          
          <p className="text-sm sm:text-lg md:text-2xl text-white/60 mb-8 md:mb-12 max-w-2xl leading-tight font-light mx-auto lg:mx-0">
            Onde outros quebram tudo, nós diagnosticamos. <strong className="text-white font-bold">Tecnologia Digital</strong> para detecção e reparo limpo em toda Curitiba e CIC.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-primary text-sm sm:text-lg font-black py-4 px-6 sm:px-10 rounded-xl shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-3"
            >
              <i className="fab fa-whatsapp text-xl sm:text-2xl"></i> WHATSAPP 24H
            </a>
            
            <a 
              href={CONTACT_INFO.phoneLink}
              className="bg-white/5 backdrop-blur-2xl text-white border border-white/10 text-sm sm:text-lg font-bold py-4 px-6 sm:px-10 rounded-xl flex items-center justify-center gap-3 transition-all hover:bg-white/10"
            >
              <i className="fas fa-phone-alt text-accent"></i> {CONTACT_INFO.phone}
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 md:mt-16 pt-8 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { val: 'ZERO', label: 'Quebra-quebra' },
              { val: '30min', label: 'Resposta rápida' },
              { val: 'LAUDO', label: 'Oficial Sanepar' },
              { val: '90 Dias', label: 'Garantia Total' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1 text-left border-l border-white/10 pl-3 first:border-l-0 first:pl-0">
                <span className="text-accent font-black text-lg sm:text-2xl tracking-tighter">{item.val}</span>
                <span className="text-white/30 text-[7px] sm:text-[9px] uppercase font-bold tracking-widest">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
