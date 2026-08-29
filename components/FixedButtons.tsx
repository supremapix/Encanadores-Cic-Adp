import React, { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../constants';

const FixedButtons: React.FC = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Action Buttons Desktop & Mobile */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2.5">
        
        {/* Back to Top */}
        {showTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-slate-800/90 text-slate-300 hover:text-white border border-slate-700 shadow-md flex items-center justify-center transition-all hover:bg-slate-700 active:scale-95"
            aria-label="Voltar ao topo"
          >
            <i className="fa-solid fa-arrow-up text-xs"></i>
          </button>
        )}

        {/* WhatsApp Callout Pill */}
        <a
          href={CONTACT_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-green-600 hover:bg-green-700 text-white pl-3.5 pr-4 py-2.5 rounded-full shadow-lg transition-all active:scale-95 border border-green-400/30"
          aria-label="Falar com Encanador no WhatsApp 24 Horas"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-300"></span>
          </span>
          <i className="fa-brands fa-whatsapp text-lg"></i>
          <span className="text-xs font-bold tracking-tight">Plantão 24h</span>
        </a>

      </div>
    </>
  );
};

export default FixedButtons;
