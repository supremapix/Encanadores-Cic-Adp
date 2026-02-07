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
    setIsMenuOpen(false);
  }, [location]);

  const NavLink: React.FC<{ to: string; children: React.ReactNode; isAnchor?: boolean }> = ({ to, children, isAnchor }) => {
    const commonClasses = "text-white/80 hover:text-accent font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-300 relative group";
    
    if (isAnchor) {
      return (
        <a href={to} className={commonClasses}>
          {children}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
        </a>
      );
    }

    return (
      <Link to={to} className={commonClasses}>
        {children}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
      </Link>
    );
  };

  return (
    <header className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      scrolled ? 'bg-[#051125]/95 backdrop-blur-xl py-2 shadow-2xl' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-4 group">
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
            <img 
              src={CONTACT_INFO.logoUrl} 
              alt="ADP Logo" 
              className="h-10 md:h-14 bg-white rounded-full p-1 shadow-lg relative z-10"
            />
          </div>
          <div className="leading-none hidden sm:block">
            <h1 className="font-black text-white text-lg md:text-xl tracking-tighter">ADP <span className="text-accent italic">ENGENHARIA</span></h1>
            <span className="text-[8px] text-white/40 font-bold uppercase tracking-[0.3em]">Precision Hidraulics</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          <NavLink to="/">Página Inicial</NavLink>
          <NavLink to="#servicos" isAnchor>Serviços</NavLink>
          <NavLink to="#tecnologia" isAnchor>Tecnologia</NavLink>
          <NavLink to="#bairros" isAnchor>Unidades</NavLink>
          
          <div className="h-6 w-px bg-white/10"></div>

          <a 
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer" 
            className="bg-accent hover:bg-white text-primary px-8 py-3 rounded-full font-black shadow-2xl transform hover:-translate-y-1 transition-all flex items-center gap-3 text-[10px] uppercase tracking-widest"
          >
            <i className="fab fa-whatsapp text-lg"></i> CONSULTORIA 24H
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <a href={CONTACT_INFO.phoneLink} className="text-accent text-lg p-2 bg-white/5 rounded-full border border-white/10">
            <i className="fas fa-phone-alt"></i>
          </a>
          <button 
            className="text-white text-3xl focus:outline-none p-2 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars-staggered'} transition-transform duration-300`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Redesign */}
      <div className={`fixed inset-0 bg-[#051125] z-[-1] transition-transform duration-500 lg:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full pt-32 px-10 gap-10">
          <Link to="/" className="text-4xl font-black text-white tracking-tighter hover:text-accent" onClick={() => setIsMenuOpen(false)}>Início</Link>
          <a href="#servicos" className="text-4xl font-black text-white tracking-tighter hover:text-accent" onClick={() => setIsMenuOpen(false)}>Serviços</a>
          <a href="#bairros" className="text-4xl font-black text-white tracking-tighter hover:text-accent" onClick={() => setIsMenuOpen(false)}>Atendimento</a>
          
          <div className="mt-auto pb-20 space-y-6">
            <a 
              href={CONTACT_INFO.whatsappLink}
              className="w-full bg-accent text-primary flex items-center justify-center gap-4 py-6 rounded-[2rem] font-black text-xl shadow-2xl"
            >
              <i className="fab fa-whatsapp text-2xl"></i> WHATSAPP URGENTE
            </a>
            <div className="text-center text-white/30 font-bold uppercase tracking-[0.2em] text-[10px]">
              Curitiba 24 Horas
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;