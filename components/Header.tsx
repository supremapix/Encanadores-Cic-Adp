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
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <header className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
      scrolled || isMenuOpen ? 'bg-[#051125]/95 backdrop-blur-xl py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src={CONTACT_INFO.logoUrl} 
            alt="ADP Logo" 
            className="h-10 md:h-12 bg-white rounded-full p-1 shadow-lg"
          />
          <div className="leading-none">
            <h1 className="font-black text-white text-sm md:text-lg tracking-tighter uppercase">ADP <span className="text-accent italic">Engenharia</span></h1>
            <span className="text-[7px] text-white/40 font-bold uppercase tracking-widest">Hidráulica 24h</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {['Home', 'Serviços', 'Atendimento'].map((item, idx) => {
            const targets = ['/', '#servicos', '#bairros'];
            return targets[idx].startsWith('#') ? (
              <a key={idx} href={targets[idx]} className="text-white/80 hover:text-accent font-bold text-[10px] uppercase tracking-widest transition-colors">{item}</a>
            ) : (
              <Link key={idx} to={targets[idx]} className="text-white/80 hover:text-accent font-bold text-[10px] uppercase tracking-widest transition-colors">{item}</Link>
            );
          })}
          <a href={CONTACT_INFO.whatsappLink} className="bg-accent text-primary px-5 py-2 rounded-full font-black text-[10px] uppercase tracking-widest shadow-lg">Chamada Urgente</a>
        </nav>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-3 lg:hidden">
          <a href={CONTACT_INFO.phoneLink} className="text-accent text-lg p-2 bg-white/5 rounded-full border border-white/10">
            <i className="fas fa-phone-alt"></i>
          </a>
          <button 
            className="text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars-staggered'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#051125] z-[-1] transition-all duration-500 lg:hidden ${
        isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
      }`}>
        <div className="flex flex-col h-full pt-32 px-10 gap-8">
          <Link to="/" className="text-4xl font-black text-white tracking-tighter">Início</Link>
          <a href="#servicos" className="text-4xl font-black text-white tracking-tighter" onClick={() => setIsMenuOpen(false)}>Serviços</a>
          <a href="#bairros" className="text-4xl font-black text-white tracking-tighter" onClick={() => setIsMenuOpen(false)}>Bairros</a>
          
          <div className="mt-auto pb-20 space-y-4">
            <a href={CONTACT_INFO.whatsappLink} className="w-full bg-accent text-primary flex items-center justify-center gap-4 py-6 rounded-2xl font-black text-xl shadow-2xl">
              <i className="fab fa-whatsapp text-2xl"></i> WHATSAPP 24H
            </a>
            <p className="text-center text-white/30 font-bold uppercase tracking-widest text-[9px]">Engenharia Hidráulica Curitiba</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;