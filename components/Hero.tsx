import React from 'react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none';
    const parent = e.currentTarget.parentElement;
    if (parent) {
      const logoEmul = document.createElement('div');
      logoEmul.className = "absolute inset-0 flex items-center justify-center opacity-10";
      logoEmul.innerHTML = `<img src="${CONTACT_INFO.logoUrl}" class="w-1/2 max-w-[200px] object-contain grayscale brightness-200" />`;
      parent.appendChild(logoEmul);
    }
  };

  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center overflow-hidden bg-[#051125] pt-16">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581244276891-997b6a550267?auto=format&fit=crop&w=1920&q=80" 
          alt="ADP Engenharia Background" 
          onError={handleImageError}
          className="w-full h-full object-cover opacity-15 mix-blend-screen scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#051125] via-[#051125]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#051125] via-transparent to-primary/20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto lg:mx-0 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full mb-6 mx-auto lg:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-white font-bold text-[9px] md:text-xs uppercase tracking-widest">Atendimento 24h em toda Curitiba</span>
          </div>
          
          <h1 className="text-[clamp(2.5rem,10vw,8rem)] font-black text-white mb-6 leading-[0.9] tracking-tighter">
            SOLUÇÕES <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-200 to-white">HIDRÁULICAS</span>
          </h1>
          
          <p className="text-sm md:text-2xl text-white/50 mb-10 max-w-2xl leading-tight font-light mx-auto lg:mx-0">
            Onde outros quebram, nós diagnosticamos. <strong className="text-white font-bold">Tecnologia Digital</strong> para detecção e reparo sem destruição em Curitiba.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-primary text-lg font-black py-4 px-8 rounded-2xl shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-3"
            >
              <i className="fab fa-whatsapp text-2xl"></i> WHATSAPP
            </a>
            
            <a 
              href={CONTACT_INFO.phoneLink}
              className="bg-white/5 backdrop-blur-xl text-white border border-white/10 text-lg font-bold py-4 px-8 rounded-2xl flex items-center justify-center gap-3 transition-all"
            >
              <i className="fas fa-phone-alt text-accent"></i> {CONTACT_INFO.phone}
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: 'ZERO', label: 'Quebra-quebra' },
              { val: '30m', label: 'Resposta' },
              { val: 'LAUDO', label: 'Sanepar' },
              { val: '90D', label: 'Garantia' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1 text-left border-l border-white/10 pl-3 first:border-l-0 first:pl-0">
                <span className="text-accent font-black text-xl md:text-2xl tracking-tighter">{item.val}</span>
                <span className="text-white/20 text-[7px] uppercase font-bold tracking-widest">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;