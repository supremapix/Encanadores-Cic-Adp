
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

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

  const isSolid = !isHome || scrolled || isMenuOpen;
  
  const headerClasses = isSolid 
    ? 'bg-primary/95 backdrop-blur-2xl py-3 shadow-2xl border-b border-accent/20' 
    : 'bg-transparent py-5';

  const linkClasses = "text-white hover:text-accent font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-300";

  return (
    <header className={`fixed top-0 w-full z-[100] transition-all duration-500 ${headerClasses}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group relative z-[110]">
          <div className="bg-white rounded-full p-1.5 shadow-xl transition-transform group-hover:rotate-6 group-hover:scale-110">
            <img 
              src={CONTACT_INFO.logoUrl} 
              alt="ADP Logo" 
              className="h-9 md:h-12 w-auto object-contain"
            />
          </div>
          <div className="leading-none">
            <h1 className="font-black text-white text-base md:text-xl tracking-tighter uppercase italic">
              ADP <span className="text-accent">Engenharia</span>
            </h1>
            <span className="text-[7px] text-white/50 font-bold uppercase tracking-[0.3em]">Precision Hidraulics 24h</span>
          </div>
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
        <div className="flex items-center gap-3 lg:hidden relative z-[110]">
          <a href={CONTACT_INFO.phoneLink} className="text-accent text-xl p-2.5 bg-white/5 rounded-full border border-white/10 active:scale-90 transition-all">
            <i className="fas fa-phone"></i>
          </a>
          <button 
            className="text-white text-3xl p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir Menu"
          >
            <i className={`fas ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} transition-transform duration-300`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-primary z-[105] transition-all duration-500 ease-in-out lg:hidden ${
        isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="flex flex-col h-full pt-32 px-10 gap-6 overflow-y-auto">
          <Link to="/" className="text-4xl font-black text-white tracking-tighter border-b border-white/5 pb-4 uppercase italic">INÍCIO</Link>
          <Link to="/servicos" className="text-4xl font-black text-white tracking-tighter border-b border-white/5 pb-4 uppercase italic">SERVIÇOS</Link>
          <Link to="/sobre" className="text-4xl font-black text-white tracking-tighter border-b border-white/5 pb-4 uppercase italic">SOBRE</Link>
          <Link to="/contato" className="text-4xl font-black text-white tracking-tighter border-b border-white/5 pb-4 uppercase italic">CONTATO</Link>
          
          <div className="mt-auto pb-12 space-y-6">
            <a href={CONTACT_INFO.whatsappLink} className="w-full bg-accent text-primary flex items-center justify-center gap-4 py-6 rounded-2xl font-black text-xl shadow-2xl active:scale-95 transition-transform uppercase italic">
              <i className="fab fa-whatsapp text-3xl"></i> WHATSAPP 24H
            </a>
            <p className="text-center text-white/30 text-[9px] font-black uppercase tracking-[0.4em]">Curitiba • CIC • RMC</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
