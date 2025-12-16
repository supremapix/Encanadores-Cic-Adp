import React from 'react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Encanador trabalhando" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-primary/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <div className="animate-slide-up">
          <h2 className="text-xl md:text-2xl font-light mb-2 text-accent">PROBLEMAS COM ENCANAMENTO?</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Encanador <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Curitiba 24h</span>
            <br />
            <span className="text-3xl md:text-5xl">Atendimento Imediato!</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Especialistas em <strong>desentupimento urgente</strong>, caça-vazamentos e reparos hidráulicos. 
            Chegamos em até 30 minutos em qualquer bairro.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a 
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white text-lg font-bold py-4 px-8 rounded-full shadow-xl transform hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <i className="fab fa-whatsapp text-2xl"></i> CHAMAR AGORA
            </a>
            <a 
              href={CONTACT_INFO.phoneLink}
              className="w-full md:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white text-lg font-bold py-4 px-8 rounded-full shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <i className="fas fa-phone-alt"></i> (41) 3345-1194
            </a>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
          </svg>
      </div>
    </section>
  );
};

export default Hero;