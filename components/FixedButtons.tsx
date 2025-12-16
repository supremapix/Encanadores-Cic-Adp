import React, { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../constants';

const FixedButtons: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Left Buttons */}
      <div className="fixed left-4 bottom-4 z-50 flex flex-col gap-3">
        <a 
          href={CONTACT_INFO.whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 animate-bounce"
          aria-label="Contato WhatsApp"
        >
          <i className="fab fa-whatsapp text-3xl"></i>
        </a>
        <a 
          href={CONTACT_INFO.phoneLink}
          className="bg-primary hover:bg-secondary text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
          aria-label="Ligar Agora"
        >
          <i className="fas fa-phone-alt text-2xl"></i>
        </a>
      </div>

      {/* Right Buttons */}
      <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3 items-end">
        {showScrollTop && (
          <button 
            onClick={scrollToTop}
            className="bg-gray-700 hover:bg-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all opacity-90 hover:opacity-100"
            aria-label="Voltar ao topo"
          >
            <i className="fas fa-chevron-up text-xl"></i>
          </button>
        )}
        <a 
          href={CONTACT_INFO.officialSite}
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-urgent hover:bg-red-700 text-white px-4 py-2 rounded-full shadow-lg text-sm font-bold transition-transform hover:scale-105 flex items-center gap-2"
        >
          <i className="fas fa-external-link-alt"></i> Site Oficial
        </a>
      </div>
    </>
  );
};

export default FixedButtons;