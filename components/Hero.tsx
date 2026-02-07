import React from 'react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Se a imagem falhar, aplicamos um fundo sólido elegante
    e.currentTarget.style.display = 'none';
  };

  return (
    <section className="relative h-[550px] md:h-[750px] flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Layer with "Transparency" Effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581244276891-997b6a550267?auto=format&fit=crop&w=1920&q=80" 
          alt="Encanador Curitiba ADP Background" 
          onError={handleImageError}
          className="w-full h-full object-cover opacity-50 mix-blend-overlay scale-110 animate-pulse"
          style={{ animationDuration: '8s' }}
        />
        {/* Gradients to merge the image into the UI */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/20"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-left text-white">
        <div className="animate-slide-up max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-accent/20 border border-accent/30 rounded-full mb-6 text-accent font-bold text-sm tracking-widest uppercase">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            Atendimento Prioritário em Curitiba
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-none tracking-tighter">
            ENCANADOR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200">24 HORAS</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-gray-100 mb-12 max-w-2xl leading-tight font-light">
            Especialistas em <strong className="font-bold text-white">desentupimento</strong> e <strong className="font-bold text-white">caça-vazamento</strong> digital com tecnologia de ultrassom.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-green-500 hover:bg-green-600 text-white text-xl font-black py-6 px-12 rounded-2xl shadow-[0_20px_50px_rgba(34,197,94,0.3)] transform hover:scale-105 transition-all flex items-center justify-center gap-4"
            >
              <i className="fab fa-whatsapp text-4xl group-hover:rotate-12 transition-transform"></i> 
              WHATSAPP AGORA
            </a>
            <a 
              href={CONTACT_INFO.phoneLink}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border-2 border-white/30 text-xl font-bold py-6 px-12 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-4"
            >
              <i className="fas fa-phone-alt"></i> (41) 3345-1194
            </a>
          </div>
          
          <div className="mt-16 flex flex-wrap items-center gap-8 text-sm md:text-lg font-medium text-gray-300">
            <div className="flex items-center gap-2"><i className="fas fa-shield-alt text-accent"></i> 90 Dias de Garantia</div>
            <div className="flex items-center gap-2"><i className="fas fa-bolt text-accent"></i> Chegada em 30min</div>
            <div className="flex items-center gap-2"><i className="fas fa-credit-card text-accent"></i> Parcelamento no PIX/Cartão</div>
          </div>
        </div>
      </div>
      
      {/* Abstract Wave Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[150px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
          </svg>
      </div>
    </section>
  );
};

export default Hero;