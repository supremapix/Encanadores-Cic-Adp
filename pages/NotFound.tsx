import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, THEME_BACKGROUNDS } from '../constants';

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = "Página Não Encontrada (404) | Desentupidora ADP Curitiba";
  }, []);

  return (
    <div className="relative min-h-[80vh] bg-slate-950 text-white flex items-center justify-center px-4 py-24 overflow-hidden">
      {/* Background Image & Evident Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url(${THEME_BACKGROUNDS.hero})` }}
      >
        <div className="absolute inset-0 bg-slate-950/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-slate-950/60"></div>
      </div>

      <div className="max-w-lg w-full text-center space-y-6 relative z-10">
        
        {/* Visual Badge */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-slate-800/90 border border-slate-700 text-yellow-400 text-3xl shadow-lg">
          <i className="fa-solid fa-triangle-exclamation"></i>
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-slate-400">
            Erro 404
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Página Não Encontrada
          </h1>
          <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
            O endereço que você tentou acessar não existe ou foi modificado. Nosso atendimento de plantão 24h segue ativo para qualquer emergência hidráulica.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Link 
            to="/" 
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
          >
            Voltar para Página Inicial
          </Link>
          
          <a 
            href={CONTACT_INFO.whatsappLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2"
          >
            <i className="fa-brands fa-whatsapp text-base"></i>
            <span>Falar com Técnico 24h</span>
          </a>
        </div>

        <div className="pt-4 border-t border-slate-800 text-xs text-slate-400">
          Precisa de atendimento urgente? Ligue para <a href={CONTACT_INFO.phoneLink} className="text-yellow-400 font-semibold hover:underline">{CONTACT_INFO.phone}</a>
        </div>

      </div>
    </div>
  );
};

export default NotFound;
