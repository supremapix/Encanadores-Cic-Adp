import React, { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../constants';

const FixedButtons: React.FC = () => {
  const [showTop, setShowTop] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Hide desktop floating buttons when footer is in view
    const footer = document.querySelector('footer');
    let observer: IntersectionObserver | null = null;
    if (footer) {
      observer = new IntersectionObserver(
        ([entry]) => {
          setIsFooterVisible(entry.isIntersecting);
        },
        { threshold: 0.1 }
      );
      observer.observe(footer);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observer) observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* =========================================================================
          1. MOBILE (<768px): Full-width 64px Bottom Bar with "Ligar" and "WhatsApp"
          ========================================================================= */}
      <div 
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 w-full bg-[#0B2A3C] border-t-2 border-brand-accent/40 shadow-[0_-4px_20px_rgba(0,0,0,0.35)]"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        <div className="grid grid-cols-2 h-16 w-full">
          {/* Ligar Button */}
          <a
            href={CONTACT_INFO.phoneLink}
            className="flex items-center justify-center gap-2 bg-[#0B2A3C] active:bg-brand-navy text-white font-black text-base px-3 transition-colors border-r border-brand-accent/30"
            aria-label={`Ligar para a ADP no telefone ${CONTACT_INFO.phone}`}
          >
            <div className="w-8 h-8 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow flex-shrink-0">
              <i className="fa-solid fa-phone text-sm"></i>
            </div>
            <span className="font-display tracking-wide">Ligar</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-brand-green active:bg-green-700 text-white font-black text-base px-3 transition-colors"
            aria-label="Falar com encanador no WhatsApp 24h"
          >
            <i className="fa-brands fa-whatsapp text-2xl flex-shrink-0"></i>
            <span className="font-display tracking-wide">WhatsApp</span>
          </a>
        </div>
      </div>

      {/* =========================================================================
          2. DESKTOP (>=768px): Floating Action Buttons (Hidden when Footer is visible)
          ========================================================================= */}
      <div 
        className={`hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3 transition-all duration-300 pointer-events-none ${
          isFooterVisible ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'
        }`}
      >
        {/* Back to Top */}
        {showTop && (
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-xl bg-brand-dark/95 text-brand-light hover:text-brand-yellow border-2 border-brand-accent shadow-xl flex items-center justify-center transition-all hover:bg-brand-navy active:scale-95 pointer-events-auto"
            aria-label="Voltar para o Topo da Página"
          >
            <i className="fa-solid fa-arrow-up text-sm"></i>
          </button>
        )}

        {/* WhatsApp Callout Pill */}
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
