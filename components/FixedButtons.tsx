import React, { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../constants';

const FixedButtons: React.FC = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Action Buttons - Optimized to never overlap or cover critical text, touch areas >= 48px */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        
        {/* Back to Top - Touch Target 48x48 */}
        {showTop && (
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-xl bg-brand-dark/95 text-brand-light hover:text-brand-yellow border-2 border-brand-accent shadow-xl flex items-center justify-center transition-all hover:bg-brand-navy active:scale-95 pointer-events-auto"
            aria-label="Voltar para o Topo da Página"
          >
            <i className="fa-solid fa-arrow-up text-sm"></i>
          </button>
        )}

        {/* WhatsApp Callout Pill - Touch Target height >= 48px, optimized with clear text */}
        <a
          href={CONTACT_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-brand-green hover:bg-green-600 text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl transition-all active:scale-95 border-2 border-green-300 pointer-events-auto"
          aria-label="Falar com o Encanador de Plantão 24h no WhatsApp"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-yellow"></span>
          </span>
          <i className="fa-brands fa-whatsapp text-xl"></i>
          <span className="text-xs font-black tracking-wider uppercase font-display">Plantão 24h</span>
        </a>

      </div>
    </>
  );
};

export default FixedButtons;
