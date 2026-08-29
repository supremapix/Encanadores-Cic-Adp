import React from 'react';
import { CONTACT_INFO } from '../constants';

const VideoSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-slate-900 text-white border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-yellow-400">
            Tecnologia Não Invasiva em Campo
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Como Funciona a Detecção com Geofone Digital em Curitiba
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Veja a precisão dos nossos equipamentos eletrônicos para encontrar o ponto exato da fuga de água antes de qualquer intervenção.
          </p>
        </div>

        {/* Video & Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Video Player Box */}
          <div className="lg:col-span-7">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-slate-950 border border-slate-800">
              <iframe
                src="https://www.youtube-nocookie.com/embed/5F_76F9_rB8?rel=0&modestbranding=1"
                title="Detecção de Vazamentos com Geofone Eletrônico - Desentupidora ADP Curitiba"
                className="w-full h-full object-cover"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Feature Specs */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
              <div className="flex items-center gap-2 text-yellow-400 font-bold text-sm">
                <i className="fa-solid fa-headphones-simple"></i>
                <h4>Sensor de Escuta Acústica Ultrassônica</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Filtra o ruído ambiente e amplifica a frequência sonora do atrito da água pressurizada saindo pelo furo da tubulação.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
              <div className="flex items-center gap-2 text-yellow-400 font-bold text-sm">
                <i className="fa-solid fa-camera"></i>
                <h4>Câmera Térmica & Vídeo Inspeção</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Mapeia contrastes térmicos em tubulações embutidas e inspeciona o interior de redes de esgoto sem quebrar nada.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
              <div className="flex items-center gap-2 text-yellow-400 font-bold text-sm">
                <i className="fa-solid fa-file-shield"></i>
                <h4>Laudo Pericial para Sanepar</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Emissão do laudo de estanqueidade para contestação da conta de água e solicitação de desconto na taxa de esgoto.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm font-bold py-3 px-5 rounded-xl transition-all shadow-sm"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
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
