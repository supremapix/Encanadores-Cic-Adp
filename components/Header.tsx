
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import PremiumLogo from './PremiumLogo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const isSolid = !isHome || scrolled || isMenuOpen;
  
  const headerClasses = isSolid 
    ? 'bg-[#051125] py-3 shadow-2xl border-b border-accent/20' 
    : 'bg-transparent py-5';

  const linkClasses = "text-white hover:text-accent font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-300";

  return (
    <header className={`fixed top-0 w-full z-[1000] transition-all duration-500 ${headerClasses}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Emulado Premium */}
        <Link to="/" className="relative z-[1100]">
          <PremiumLogo size="sm" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/" className={linkClasses}>Início</Link>
          <Link to="/servicos" className={linkClasses}>Serviços</Link>
          <Link to="/sobre" className={linkClasses}>Sobre</Link>
          <Link to="/contato" className={linkClasses}>Contato</Link>
          <a 
            href={CONTACT_INFO.whatsappLink} 
            target="_blank"
            className="bg-accent text-primary px-7 py-3 rounded-xl font-[900] text-[10px] uppercase tracking-widest shadow-2xl hover:bg-white hover:scale-105 transition-all transform italic"
          >
            CHAMADA URGENTE
          </a>
        </nav>

        {/* Mobile Interaction */}
        <div className="flex items-center gap-3 lg:hidden relative z-[1100]">
          <a href={CONTACT_INFO.phoneLink} className="text-accent text-xl p-2.5 bg-white/5 rounded-full border border-white/10 active:scale-90 transition-all">
            <i className="fa-solid fa-phone"></i>
          </a>
          <button 
            className="text-white text-3xl p-2 flex items-center justify-center min-w-[44px] min-h-[44px]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar Menu" : "Abrir Menu"}
          >
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} transition-all duration-300`}></i>
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 bg-[#051125] z-[1050] transition-all duration-500 ease-in-out lg:hidden ${
        isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-full invisible pointer-events-none'
      }`}>
        <div className="flex flex-col h-full pt-32 pb-10 px-8 gap-4 overflow-y-auto">
          <Link to="/" className="text-3xl font-black text-white tracking-tighter border-b border-white/5 pb-5 uppercase italic active:text-accent">
            INÍCIO
          </Link>
          <Link to="/servicos" className="text-3xl font-black text-white tracking-tighter border-b border-white/5 pb-5 uppercase italic active:text-accent">
            SERVIÇOS
          </Link>
          <Link to="/sobre" className="text-3xl font-black text-white tracking-tighter border-b border-white/5 pb-5 uppercase italic active:text-accent">
            SOBRE
          </Link>
          <Link to="/contato" className="text-3xl font-black text-white tracking-tighter border-b border-white/5 pb-5 uppercase italic active:text-accent">
            CONTATO
          </Link>
          
          <div className="mt-auto space-y-6">
            <a 
              href={CONTACT_INFO.whatsappLink} 
              target="_blank"
              className="w-full bg-accent text-primary flex items-center justify-center gap-4 py-6 rounded-2xl font-black text-xl shadow-2xl active:scale-95 transition-transform uppercase italic"
            >
              <i className="fa-brands fa-whatsapp text-3xl"></i> WHATSAPP 24H
            </a>
            <div className="text-center">
              <p className="text-white/30 text-[9px] font-black uppercase tracking-[0.4em] mb-2">Curitiba • CIC • RMC</p>
              <p className="text-white/20 text-[8px] font-bold">{CONTACT_INFO.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
