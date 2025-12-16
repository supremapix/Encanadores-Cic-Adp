import React from 'react';
import { CONTACT_INFO } from '../constants';

const VideoSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Video Wrapper */}
          <div className="w-full lg:w-1/2">
            <div className="relative pt-[56.25%] rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/jJ0WJqgXZ3k" 
                title="Encanador Curitiba 24h" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h3 className="text-urgent font-bold text-lg uppercase tracking-wider">
              <i className="fas fa-video mr-2"></i> Veja nossa equipe em ação
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Resolvemos seu problema de encanamento em minutos!
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Assista ao vídeo e confira a qualidade do nosso serviço de <strong>encanador 24h</strong>. 
              Utilizamos equipamentos de última geração para desentupimentos, hidrojateamento e 
              caça-vazamentos, garantindo um serviço limpo, rápido e eficiente.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-secondary">
              <p className="font-semibold text-secondary mb-2">
                <i className="fas fa-check-circle mr-2"></i> Equipamentos Modernos
              </p>
              <p className="font-semibold text-secondary mb-2">
                <i className="fas fa-check-circle mr-2"></i> Técnicos Especializados
              </p>
              <p className="font-semibold text-secondary">
                <i className="fas fa-check-circle mr-2"></i> Garantia Total do Serviço
              </p>
            </div>

            <a 
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-urgent hover:bg-red-700 text-white text-lg font-bold py-3 px-8 rounded-lg shadow-lg transition-transform hover:-translate-y-1"
            >
              SOLICITAR ORÇAMENTO AGORA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;