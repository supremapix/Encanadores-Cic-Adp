
import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#051125] flex items-center justify-center p-6 pt-32 text-center">
      <div className="max-w-2xl w-full">
        <div className="relative inline-block mb-12">
          <span className="text-[clamp(6rem,20vw,15rem)] font-black text-white/5 leading-none">404</span>
          <div className="absolute inset-0 flex items-center justify-center">
             <i className="fas fa-screwdriver-wrench text-accent text-6xl md:text-8xl animate-bounce"></i>
          </div>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">Ops! Vazamento de rota.</h1>
        <p className="text-white/40 text-lg mb-12 font-light">Essa página não foi encontrada ou foi movida. Mas não se preocupe, nosso atendimento 24h está sempre ativo!</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="bg-accent text-primary px-10 py-5 rounded-2xl font-black uppercase tracking-widest shadow-2xl hover:scale-105 transition-transform">
            Voltar para Home
          </Link>
          <a href={CONTACT_INFO.whatsappLink} className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white/10 transition-all">
            Falar com Técnico
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
