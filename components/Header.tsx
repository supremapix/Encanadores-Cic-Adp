import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import PremiumLogo from './PremiumLogo';

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
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-200 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-md py-3 border-b border-slate-800' 
          : 'bg-slate-900 py-3.5 border-b border-slate-800/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center" aria-label="Desentupidora ADP - Encanador e Caça-Vazamentos em Curitiba">
          <PremiumLogo size="md" theme="light" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          <Link 
            to="/" 
            className={`text-sm font-semibold transition-colors ${location.pathname === '/' ? 'text-yellow-400' : 'text-slate-200 hover:text-white'}`}
          >
            Início
          </Link>
          <Link 
            to="/servicos" 
            className={`text-sm font-semibold transition-colors ${location.pathname.startsWith('/servico') ? 'text-yellow-400' : 'text-slate-200 hover:text-white'}`}
          >
            Serviços
          </Link>
          <Link 
            to="/sobre" 
            className={`text-sm font-semibold transition-colors ${location.pathname === '/sobre' ? 'text-yellow-400' : 'text-slate-200 hover:text-white'}`}
          >
            Sobre Nós
          </Link>
          <Link 
            to="/contato" 
            className={`text-sm font-semibold transition-colors ${location.pathname === '/contato' ? 'text-yellow-400' : 'text-slate-200 hover:text-white'}`}
          >
            Contato
          </Link>
          <Link 
            to="/sitemap" 
            className={`text-sm font-semibold transition-colors ${location.pathname === '/sitemap' ? 'text-yellow-400' : 'text-slate-200 hover:text-white'}`}
          >
            Bairros & RMC
          </Link>
        </nav>

        {/* Right CTA / Contact on Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <a 
            href={CONTACT_INFO.phoneLink}
            className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/80 border border-slate-700/60"
            title="Ligar para Central Telefônica"
          >
            <i className="fa-solid fa-phone text-yellow-400 text-xs"></i>
            <span>{CONTACT_INFO.phone}</span>
          </a>

          <a 
            href={CONTACT_INFO.whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-sm transition-transform active:scale-95"
          >
            <i className="fa-brands fa-whatsapp text-sm"></i>
            <span>Plantão 24h</span>
          </a>
        </div>

        {/* Mobile Quick Action & Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a 
            href={CONTACT_INFO.whatsappLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm"
            aria-label="WhatsApp Plantão 24h"
          >
            <i className="fa-brands fa-whatsapp text-sm"></i>
            <span>24h</span>
          </a>

          <button 
            type="button"
            className="p-2 text-slate-200 hover:text-white focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-slate-800/80"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            aria-expanded={isMenuOpen}
          >
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-lg`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="flex flex-col space-y-2 pt-2 border-t border-slate-800">
            <Link 
              to="/" 
              className={`px-3 py-2.5 rounded-md text-sm font-semibold ${location.pathname === '/' ? 'bg-slate-800 text-yellow-400' : 'text-slate-200 hover:bg-slate-800/60'}`}
            >
              <i className="fa-solid fa-house mr-2 text-xs text-yellow-400"></i> Início
            </Link>
            <Link 
              to="/servicos" 
              className={`px-3 py-2.5 rounded-md text-sm font-semibold ${location.pathname.startsWith('/servico') ? 'bg-slate-800 text-yellow-400' : 'text-slate-200 hover:bg-slate-800/60'}`}
            >
              <i className="fa-solid fa-wrench mr-2 text-xs text-yellow-400"></i> Serviços Hidráulicos
            </Link>
            <Link 
              to="/sobre" 
              className={`px-3 py-2.5 rounded-md text-sm font-semibold ${location.pathname === '/sobre' ? 'bg-slate-800 text-yellow-400' : 'text-slate-200 hover:bg-slate-800/60'}`}
            >
              <i className="fa-solid fa-shield-halved mr-2 text-xs text-yellow-400"></i> Sobre a ADP Engenharia
            </Link>
            <Link 
              to="/contato" 
              className={`px-3 py-2.5 rounded-md text-sm font-semibold ${location.pathname === '/contato' ? 'bg-slate-800 text-yellow-400' : 'text-slate-200 hover:bg-slate-800/60'}`}
            >
              <i className="fa-solid fa-envelope mr-2 text-xs text-yellow-400"></i> Contato & Localização
            </Link>
            <Link 
              to="/sitemap" 
              className={`px-3 py-2.5 rounded-md text-sm font-semibold ${location.pathname === '/sitemap' ? 'bg-slate-800 text-yellow-400' : 'text-slate-200 hover:bg-slate-800/60'}`}
            >
              <i className="fa-solid fa-location-dot mr-2 text-xs text-yellow-400"></i> Cobertura por Bairros e Cidades
            </Link>
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a 
              href={CONTACT_INFO.phoneLink}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-slate-800 text-slate-200 text-sm font-semibold border border-slate-700"
            >
              <i className="fa-solid fa-phone text-yellow-400"></i>
              Ligar para {CONTACT_INFO.phone}
            </a>
            <a 
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-bold shadow-sm"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              Chamar no WhatsApp (Plantão 24h)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
