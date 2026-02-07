import React from 'react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = CONTACT_INFO.logoUrl;
    e.currentTarget.className = "w-48 h-auto opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain";
  };

  return (
    <section className="relative h-[700px] lg:h-[900px] flex items-center overflow-hidden bg-[#0a192f]">
      {/* Background Layer with Sophisticated Transparency */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581244276891-997b6a550267?auto=format&fit=crop&w=1920&q=80" 
          alt="ADP Engenharia Hidráulica Background" 
          onError={handleImageError}
          className="w-full h-full object-cover opacity-20 mix-blend-screen scale-105 animate-slow-zoom"
        />
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        
        {/* Cinematic Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-[#0a192f]/40"></div>
        
        {/* Animated Light Blobs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-24 right-24 w-64 h-64 bg-secondary/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl animate-slide-up">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full mb-10 shadow-2xl">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            <span className="text-white/90 font-bold text-[10px] uppercase tracking-[0.3em]">Unidades Móveis de Elite em Curitiba</span>
          </div>
          
          <h1 className="text-6xl md:text-[110px] font-black text-white mb-8 leading-[0.85] tracking-tighter">
            ENGENHARIA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-200 to-white drop-shadow-sm">HIDRÁULICA</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-white/60 mb-14 max-w-2xl leading-tight font-light tracking-tight">
            Diagnóstico de alta precisão por <strong className="text-white font-bold">Ultrassom Digital</strong>. Resolvemos vazamentos e entupimentos críticos onde o amadorismo falha.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-stretch sm:items-center">
            <a 
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-accent hover:bg-white text-primary text-2xl font-black py-7 px-14 rounded-[2rem] shadow-[0_25px_50px_-12px_rgba(255,235,59,0.4)] transform hover:scale-105 transition-all flex items-center justify-center gap-4"
            >
              <i className="fab fa-whatsapp text-4xl group-hover:scale-110 transition-transform"></i> 
              WHATSAPP 24H
            </a>
            
            <div className="flex flex-col group cursor-pointer" onClick={() => window.location.href = CONTACT_INFO.phoneLink}>
              <span className="text-white/40 text-[9px] font-black uppercase tracking-[0.2em] mb-2 ml-4 group-hover:text-accent transition-colors">Plantão Telefônico</span>
              <div className="bg-white/5 hover:bg-white/10 backdrop-blur-xl text-white border border-white/10 text-2xl font-bold py-6 px-10 rounded-[2rem] transition-all flex items-center justify-center gap-4">
                <i className="fas fa-phone-alt text-accent animate-shake"></i> (41) 3345-1194
              </div>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-20 pt-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { val: 'ZERO', label: 'DESTRUIÇÃO' },
              { val: '100%', label: 'CERTIFICADO' },
              { val: '30m', label: 'CHEGADA' },
              { val: 'LAUDO', label: 'OFICIAL' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <span className="text-accent font-black text-3xl tracking-tighter">{item.val}</span>
                <span className="text-white/30 text-[9px] uppercase font-bold tracking-[0.2em]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[120px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
          </svg>
      </div>

      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        @keyframes shake {
          0%, 100% { transform: rotate(0); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
        }
        .animate-slow-zoom { animation: slow-zoom 30s ease-in-out infinite; }
        .animate-shake { animation: shake 0.5s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;