import React from 'react';
import { CONTACT_INFO, THEME_BACKGROUNDS } from '../constants';

const VideoSection: React.FC = () => {
  return (
    <section className="relative py-16 md:py-20 bg-[#0B2A3C] text-white border-t-2 border-b-2 border-brand-accent/40 overflow-hidden blueprint-grid-dark">
      {/* Blueprint Technical Dimensions & Markings */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-20">
        <div className="absolute top-4 left-6 right-6 border-t border-brand-accent/30 flex justify-between text-[10px] font-mono text-brand-accent">
          <span>SPEC: ACOUSTIC_GEO_LOCATOR // v4.2</span>
          <span>ULTRASONIC_FREQ: 32.5 kHz</span>
        </div>
        <div className="absolute bottom-4 left-6 right-6 border-b border-brand-accent/30 flex justify-between text-[10px] font-mono text-brand-accent">
          <span>INSPECTION_MODE: NON_DESTRUCTIVE</span>
          <span>PRESSURE_DELTA: 0.05 bar</span>
        </div>
      </div>

      {/* Subtle Background Texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-25"
        style={{ backgroundImage: `url(${THEME_BACKGROUNDS.sectionAndFooter})` }}
      >
        <div className="absolute inset-0 bg-[#0B2A3C]/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-brand-accent font-display inline-block bg-brand-navy px-3 py-1 rounded border border-brand-accent/30">
            Tecnologia Não Invasiva em Campo
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight leading-tight">
            Como Funciona a Detecção com Geofone Digital em Curitiba
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Veja a precisão dos nossos equipamentos eletrônicos para encontrar o ponto exato da fuga de água antes de qualquer intervenção ou perfuração.
          </p>
        </div>

        {/* Video & Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Video Player Box */}
          <div className="lg:col-span-7">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl bg-brand-navy border-2 border-brand-accent/50">
              <iframe
                src="https://www.youtube-nocookie.com/embed/jJ0WJqgXZ3k?rel=0&modestbranding=1&autoplay=0"
                title="Detecção de Vazamentos e Desentupimento Técnico - Desentupidora ADP Curitiba"
                className="w-full h-full object-cover"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Feature Specs in Blueprint Card Style */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="p-4 rounded-lg bg-brand-navy border border-brand-accent/40 space-y-1.5 shadow-md">
              <div className="flex items-center gap-3 text-brand-yellow font-display font-black text-base">
                <div className="w-8 h-8 rounded bg-brand-accent/20 border border-brand-accent flex items-center justify-center text-[#C8783A] flex-shrink-0">
                  <i className="fa-solid fa-headphones-simple"></i>
                </div>
                <h4>Sensor de Escuta Acústica Ultrassônica</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans pl-11">
                Filtra o ruído ambiente urbano e amplifica a frequência sonora exata do atrito da água pressurizada vazando da tubulação.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-brand-navy border border-brand-accent/40 space-y-1.5 shadow-md">
              <div className="flex items-center gap-3 text-brand-yellow font-display font-black text-base">
                <div className="w-8 h-8 rounded bg-brand-accent/20 border border-brand-accent flex items-center justify-center text-[#C8783A] flex-shrink-0">
                  <i className="fa-solid fa-camera"></i>
                </div>
                <h4>Câmera Térmica & Vídeo Inspeção</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans pl-11">
                Mapeia contrastes térmicos em tubulações embutidas e inspeciona o interior de redes de esgoto sem quebrar azulejos ou pisos.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-brand-navy border border-brand-accent/40 space-y-1.5 shadow-md">
              <div className="flex items-center gap-3 text-brand-yellow font-display font-black text-base">
                <div className="w-8 h-8 rounded bg-brand-accent/20 border border-brand-accent flex items-center justify-center text-[#C8783A] flex-shrink-0">
                  <i className="fa-solid fa-file-shield"></i>
                </div>
                <h4>Laudo Pericial Oficial para a Sanepar</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans pl-11">
                Emissão de laudo técnico de estanqueidade assinado para comprovar o reparo, contestar a conta de água e abater tarifas de esgoto.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-brand-green hover:bg-green-600 text-white font-display font-black text-sm sm:text-base py-3.5 px-6 rounded-lg transition-all shadow-lg active:scale-95 border-2 border-green-300"
              >
                <i className="fa-brands fa-whatsapp text-xl"></i>
                <span>Agendar Teste de Estanqueidade com Técnico</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoSection;
