import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
    <Link 
      to={to} 
      className="text-white hover:text-accent font-medium transition-all duration-300 relative group"
      onClick={() => setIsMenuOpen(false)}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-md shadow-2xl border-b border-white/5">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src={CONTACT_INFO.logoUrl} 
            alt="ADP Encanador Logo" 
            className="h-12 md:h-16 bg-white rounded-full p-1.5 shadow-xl transition-transform group-hover:rotate-6"
          />
          <div className="leading-tight text-white">
            <h1 className="font-black text-xl md:text-2xl tracking-tighter">ADP <span className="text-accent">ENGENHARIA</span></h1>
            <span className="text-[10px] md:text-xs text-white/70 font-bold block tracking-widest uppercase">Soluções Hidráulicas 24h</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <NavLink to="/">Home</NavLink>
          {isHome ? (
            <>
              <a href="#servicos" className="text-white hover:text-accent font-medium transition-colors">Serviços</a>
              <a href="#tecnologia" className="text-white hover:text-accent font-medium transition-colors">Tecnologia</a>
              <a href="#bairros" className="text-white hover:text-accent font-medium transition-colors">Atendimento</a>
            </>
          ) : (
            <>
               <NavLink to="/#servicos">Serviços</NavLink>
               <NavLink to="/#tecnologia">Tecnologia</NavLink>
               <NavLink to="/#bairros">Bairros</NavLink>
            </>
          )}
          
          <div className="h-8 w-px bg-white/10 mx-2"></div>

          <a 
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer" 
            className="bg-accent hover:bg-white text-primary px-8 py-3 rounded-xl font-black shadow-lg transform hover:-translate-y-1 transition-all flex items-center gap-2 text-sm uppercase"
          >
            <i className="fab fa-whatsapp text-lg"></i> Consultoria Já
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white text-3xl focus:outline-none p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars-staggered'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-primary border-t border-white/10 animate-fade-in absolute w-full shadow-2xl">
          <nav className="flex flex-col p-6 gap-6">
            <NavLink to="/">Página Inicial</NavLink>
            <NavLink to="/#servicos">Serviços Premium</NavLink>
            <NavLink to="/#tecnologia">Nossa Tecnologia</NavLink>
            <NavLink to="/#bairros">Locais de Atendimento</NavLink>
            <a 
              href={CONTACT_INFO.phoneLink}
              className="flex items-center gap-3 text-white font-bold"
            >
              <i className="fas fa-phone-alt text-accent"></i> (41) 3345-1194
            </a>
            <a 
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
               className="bg-green-500 text-white text-center py-4 rounded-2xl font-black text-lg shadow-xl"
            >
              <i className="fab fa-whatsapp mr-2"></i> WHATSAPP URGENTE
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;