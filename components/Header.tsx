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
      className="text-white hover:text-accent font-medium transition-colors duration-300"
      onClick={() => setIsMenuOpen(false)}
    >
      {children}
    </Link>
  );

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-primary to-secondary shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src="https://desentope.aloanuncio.com.br/images/logo.png" 
            alt="ADP Encanador Logo" 
            className="h-12 md:h-14 bg-white rounded-full p-1 transition-transform group-hover:scale-105"
          />
          <div className="hidden md:block leading-tight text-white">
            <h1 className="font-bold text-lg tracking-wider">ADP ENCANADOR</h1>
            <span className="text-xs text-accent font-semibold block">CURITIBA 24 HORAS</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/">Home</NavLink>
          {isHome ? (
            <>
              <a href="#bairros" className="text-white hover:text-accent font-medium transition-colors">Bairros</a>
              <a href="#cidades" className="text-white hover:text-accent font-medium transition-colors">Cidades</a>
              <a href="#servicos" className="text-white hover:text-accent font-medium transition-colors">Serviços</a>
            </>
          ) : (
            <>
               <NavLink to="/#bairros">Bairros</NavLink>
               <NavLink to="/#cidades">Cidades</NavLink>
               <NavLink to="/#servicos">Serviços</NavLink>
            </>
          )}
          <a 
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer" 
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-bold shadow-md transform hover:-translate-y-0.5 transition-all flex items-center gap-2"
          >
            <i className="fab fa-whatsapp text-xl"></i> Orçamento
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary border-t border-white/10 animate-fade-in">
          <nav className="flex flex-col p-4 gap-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/#bairros">Bairros</NavLink>
            <NavLink to="/#cidades">Cidades</NavLink>
            <NavLink to="/#servicos">Serviços</NavLink>
            <a 
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
               className="bg-green-500 text-white text-center py-3 rounded-lg font-bold"
            >
              <i className="fab fa-whatsapp"></i> Chamar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;