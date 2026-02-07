
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <header className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      scrolled || isMenuOpen ? 'bg-[#051125]/98 backdrop-blur-2xl py-3 shadow-2xl border-b border-white/5' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 group relative z-[110]">
          <img 
            src={CONTACT_INFO.logoUrl} 
            alt="ADP Logo" 
            className="h-9 md:h-12 bg-white rounded-full p-1 shadow-lg transition-transform group-hover:scale-105"
          />
          <div className="leading-none">
            <h1 className="font-black text-white text-sm md:text-xl tracking-tighter uppercase italic">ADP <span className="text-accent">Engenharia</span></h1>
            <span className="text-[7px] text-white/40 font-bold uppercase tracking-[0.3em]">Curitiba 24 Horas</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          <Link to="/" className="text-white/70 hover:text-accent font-black text-[10px] uppercase tracking-[0.2em] transition-colors">Início</Link>
          <a href="/#servicos" className="text-white/70 hover:text-accent font-black text-[10px] uppercase tracking-[0.2em] transition-colors">Serviços</a>
          <a href="/#bairros" className="text-white/70 hover:text-accent font-black text-[10px] uppercase tracking-[0.2em] transition-colors">Atendimento</a>
          <Link to="/sitemap" className="text-white/70 hover:text-accent font-black text-[10px] uppercase tracking-[0.2em] transition-colors">Mapa do Site</Link>
          <a href={CONTACT_INFO.whatsappLink} className="bg-accent text-primary px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-widest shadow-2xl hover:bg-white transition-all transform hover:-translate-y-1">CHAMADA URGENTE</a>
        </nav>

        {/* Mobile Toggle Button */}
        <div className="flex items-center gap-3 lg:hidden relative z-[110]">
          <a href={CONTACT_INFO.phoneLink} className="text-accent text-lg p-2.5 bg-white/5 rounded-full border border-white/10 active:scale-90 transition-all">
            <i className="fas fa-phone-alt"></i>
          </a>
          <button 
            className="text-white text-3xl p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars-staggered'} transition-transform duration-300`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#051125] z-[105] transition-all duration-500 ease-in-out lg:hidden ${
        isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="flex flex-col h-full pt-32 px-10 gap-8 overflow-y-auto">
          <Link to="/" className="text-3xl font-black text-white tracking-tighter border-b border-white/5 pb-4">INÍCIO</Link>
          <a href="/#servicos" className="text-3xl font-black text-white tracking-tighter border-b border-white/5 pb-4" onClick={() => setIsMenuOpen(false)}>SERVIÇOS</a>
          <a href="/#bairros" className="text-3xl font-black text-white tracking-tighter border-b border-white/5 pb-4" onClick={() => setIsMenuOpen(false)}>ATENDIMENTO</a>
          <Link to="/sitemap" className="text-xl font-bold text-white/30 tracking-widest uppercase hover:text-accent" onClick={() => setIsMenuOpen(false)}>MAPA DO SITE</Link>
          
          <div className="mt-auto pb-12 space-y-6">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
               <p className="text-accent font-black text-[10px] uppercase tracking-widest mb-2">Canal Direto</p>
               <p className="text-white text-2xl font-black">{CONTACT_INFO.phone}</p>
            </div>
            <a href={CONTACT_INFO.whatsappLink} className="w-full bg-accent text-primary flex items-center justify-center gap-4 py-5 rounded-xl font-black text-lg shadow-2xl active:scale-95 transition-transform">
              <i className="fab fa-whatsapp text-2xl"></i> WHATSAPP 24H
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
