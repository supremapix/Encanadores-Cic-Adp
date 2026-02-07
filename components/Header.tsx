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

  const handleLogoError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none';
    const parent = e.currentTarget.parentElement;
    if (parent) {
      parent.innerHTML = `<div class="h-10 w-10 md:h-12 md:w-12 bg-accent rounded-full flex items-center justify-center font-black text-primary text-xl shadow-lg">A</div>`;
    }
  };

  return (
    <header className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      scrolled || isMenuOpen ? 'bg-[#051125]/95 backdrop-blur-xl py-2 shadow-2xl' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 md:gap-4 group">
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img 
              src={CONTACT_INFO.logoUrl} 
              alt="ADP Logo" 
              onError={handleLogoError}
              className="h-10 md:h-14 bg-white rounded-full p-1 shadow-lg relative z-10 transition-transform group-hover:scale-110"
            />
          </div>
          <div className="leading-none">
            <h1 className="font-black text-white text-base md:text-xl tracking-tighter">ADP <span className="text-accent italic">ENGENHARIA</span></h1>
            <span className="text-[7px] md:text-[8px] text-white/40 font-bold uppercase tracking-[0.3em]">Precision Hidraulics</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {['Início', 'Serviços', 'Atendimento'].map((item, idx) => {
             const targets = ['/', '#servicos', '#bairros'];
             const isHash = targets[idx].startsWith('#');
             return isHash ? (
               <a key={idx} href={targets[idx]} className="text-white/80 hover:text-accent font-black text-[10px] uppercase tracking-[0.2em] transition-all relative group">
                 {item}
                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
               </a>
             ) : (
               <Link key={idx} to={targets[idx]} className="text-white/80 hover:text-accent font-black text-[10px] uppercase tracking-[0.2em] transition-all relative group">
                 {item}
                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
               </Link>
             )
          })}
          
          <div className="h-6 w-px bg-white/10 mx-2"></div>

          <a 
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer" 
            className="bg-accent hover:bg-white text-primary px-6 py-3 rounded-full font-black shadow-2xl transform hover:-translate-y-1 transition-all flex items-center gap-2 text-[10px] uppercase tracking-widest"
          >
            <i className="fab fa-whatsapp text-base"></i> WHATSAPP 24H
          </a>
        </nav>

        {/* Mobile Toggle & Direct Call */}
        <div className="flex items-center gap-3 lg:hidden">
          <a href={CONTACT_INFO.phoneLink} className="text-accent text-lg p-2.5 bg-white/5 rounded-full border border-white/10 active:scale-90 transition-transform">
            <i className="fas fa-phone-alt"></i>
          </a>
          <button 
            className="text-white text-2xl focus:outline-none p-2 bg-white/5 rounded-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars-staggered'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 bg-[#051125] z-[-1] transition-all duration-500 lg:hidden ${
        isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="flex flex-col h-full pt-32 px-8 gap-8 overflow-y-auto">
          <Link to="/" className="text-4xl font-black text-white tracking-tighter hover:text-accent border-b border-white/5 pb-4">Home</Link>
          <a href="#servicos" className="text-4xl font-black text-white tracking-tighter hover:text-accent border-b border-white/5 pb-4" onClick={() => setIsMenuOpen(false)}>Serviços</a>
          <a href="#bairros" className="text-4xl font-black text-white tracking-tighter hover:text-accent border-b border-white/5 pb-4" onClick={() => setIsMenuOpen(false)}>Atendimento</a>
          <Link to="/sitemap" className="text-xl font-bold text-white/40 tracking-widest uppercase hover:text-accent" onClick={() => setIsMenuOpen(false)}>Mapa do Site</Link>
          
          <div className="mt-auto pb-12 space-y-4">
            <a 
              href={CONTACT_INFO.whatsappLink}
              className="w-full bg-accent text-primary flex items-center justify-center gap-4 py-6 rounded-2xl font-black text-xl shadow-2xl active:scale-95 transition-transform"
            >
              <i className="fab fa-whatsapp text-2xl"></i> WHATSAPP 24H
            </a>
            <p className="text-center text-white/30 font-bold uppercase tracking-[0.2em] text-[9px]">
              Engenharia Hidráulica em Curitiba
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;