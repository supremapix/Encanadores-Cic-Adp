import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CONTACT_INFO, MAIN_SERVICES } from '../constants';
import PremiumLogo from './PremiumLogo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesExpanded(false);
  }, [location.pathname]);

  // Lock scroll when menu is open & notify floating actions
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.setAttribute('data-mobile-menu-open', 'true');
      window.dispatchEvent(new CustomEvent('adp-mobile-menu-toggle', { detail: { isOpen: true } }));
    } else {
      document.body.style.overflow = '';
      document.body.removeAttribute('data-mobile-menu-open');
      window.dispatchEvent(new CustomEvent('adp-mobile-menu-toggle', { detail: { isOpen: false } }));
    }
    return () => {
      document.body.style.overflow = '';
      document.body.removeAttribute('data-mobile-menu-open');
    };
  }, [isMenuOpen]);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Simple explanations for senior accessibility
  const simpleServiceExplanations: Record<string, string> = {
    'caca-vazamento-digital': 'Caça-Vazamento: Encontramos o vazamento oculto com aparelho de som especial sem quebrar nada.',
    'desentupidora-24h': 'Desentupidora 24h: Desentupimos ralos, pias, esgotos e canos com máquinas modernas.',
    'limpeza-caixa-gordura': 'Caixa de Gordura: Limpamos para tirar a sujeira pesada, evitar entupimento na pia e mau cheiro.',
    'hidrojateamento-pressao': 'Hidrojateamento: Limpeza pesada com jato forte de água para desobstruir canos grandes.',
    'video-inspecao-esgoto': 'Vídeo Inspeção: Colocamos uma câmera dentro do cano para ver por onde está entupido ou quebrado.',
    'laudo-tecnico-sanepar': 'Laudo Sanepar: Fornecemos o papel oficial para você pedir desconto na conta de água após o reparo.',
    'limpeza-caixa-dagua': 'Caixa d\'Água: Lavamos e desinfetamos sua caixa d\'água para manter a sua saúde em dia.',
    'desentupimento-vaso-sanitario': 'Vaso Sanitário: Desentupimos a privada de forma rápida, muito limpa e sem riscar a louça.',
    'manutencao-hidraulica-predial': 'Consertos Hidráulicos: Trocamos torneiras, válvulas de descarga, registros e encanamentos.',
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg py-2 border-b border-brand-accent/30' 
            : 'bg-brand-dark py-3.5 border-b border-brand-navy/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo with clean wordmark */}
          <Link to="/" className="flex items-center" aria-label="Desentupidora ADP - Página Inicial">
            <PremiumLogo size="md" theme="light" />
          </Link>

          {/* Desktop Navigation - 3 Zone Top Bar Contract */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-base font-bold tracking-wide transition-all border-b-2 py-1 ${
                location.pathname === '/' 
                  ? 'text-brand-yellow border-brand-yellow' 
                  : 'text-brand-light border-transparent hover:text-brand-yellow hover:border-brand-yellow'
              }`}
            >
              Início
            </Link>
            <Link 
              to="/servicos" 
              className={`text-base font-bold tracking-wide transition-all border-b-2 py-1 ${
                location.pathname.startsWith('/servico') || location.pathname === '/servicos'
                  ? 'text-brand-yellow border-brand-yellow' 
                  : 'text-brand-light border-transparent hover:text-brand-yellow hover:border-brand-yellow'
              }`}
            >
              Serviços
            </Link>
            <Link 
              to="/sobre" 
              className={`text-base font-bold tracking-wide transition-all border-b-2 py-1 ${
                location.pathname === '/sobre' 
                  ? 'text-brand-yellow border-brand-yellow' 
                  : 'text-brand-light border-transparent hover:text-brand-yellow hover:border-brand-yellow'
              }`}
            >
              Quem Somos
            </Link>
            <Link 
              to="/contato" 
              className={`text-base font-bold tracking-wide transition-all border-b-2 py-1 ${
                location.pathname === '/contato' 
                  ? 'text-brand-yellow border-brand-yellow' 
                  : 'text-brand-light border-transparent hover:text-brand-yellow hover:border-brand-yellow'
              }`}
            >
              Falar Conosco
            </Link>
            <Link 
              to="/sitemap" 
              className={`text-base font-bold tracking-wide transition-all border-b-2 py-1 ${
                location.pathname === '/sitemap' 
                  ? 'text-brand-yellow border-brand-yellow' 
                  : 'text-brand-light border-transparent hover:text-brand-yellow hover:border-brand-yellow'
              }`}
            >
              Bairros Atendidos
            </Link>
          </nav>

          {/* Right Action Zone on Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href={CONTACT_INFO.phoneLink}
              className="text-sm font-bold text-brand-light hover:text-brand-yellow flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-navy/60 border border-brand-accent/40 transition-colors"
              title="Ligar para Central Telefônica"
            >
              <i className="fa-solid fa-phone text-brand-yellow"></i>
              <span>{CONTACT_INFO.phone}</span>
            </a>

            <a 
              href={CONTACT_INFO.whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-green hover:bg-green-600 text-white font-bold text-sm px-5 py-2.5 rounded-lg shadow-md hover:scale-105 active:scale-95 transition-all"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              <span>Falar no WhatsApp (24h)</span>
            </a>
          </div>

          {/* Mobile Senior Menu Button (Touch area >= 56px, contains text "MENU") */}
          <div className="flex items-center lg:hidden">
            <button 
              type="button"
              className="px-3 py-2 text-brand-light hover:text-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow min-w-[56px] min-h-[56px] flex items-center gap-2 rounded-xl bg-brand-navy border border-brand-accent/40 active:scale-95 transition-all"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Abrir Menu Principal"
              aria-expanded="false"
            >
              <i className="fa-solid fa-bars text-lg"></i>
              <span className="text-sm font-black tracking-widest">MENU</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu - Opens FULL SCREEN with curtains sliding down */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-brand-dark flex flex-col overflow-y-auto animate-[slideDown_300ms_cubic-bezier(0.16,1,0.3,1)_forwards]"
          style={{ animationFillMode: 'forwards' }}
        >
          {/* Header Zone in Full Screen Drawer */}
          <div className="flex items-center justify-between p-4 border-b border-brand-accent/30 bg-brand-dark/95">
            <PremiumLogo size="sm" theme="light" />
            
            {/* Close Button ("✕ FECHAR" in large text) */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 bg-brand-accent hover:bg-brand-accent/80 text-brand-light font-black tracking-wider text-sm rounded-lg flex items-center gap-2 focus:ring-2 focus:ring-brand-yellow min-w-[56px] min-h-[56px]"
              aria-label="Fechar Menu"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
              <span>FECHAR</span>
            </button>
          </div>

          {/* Two HUGE high-contrast buttons at the TOP of the menu for seniors */}
          <div className="p-4 grid grid-cols-1 gap-3 border-b border-brand-accent/20 bg-brand-navy/30">
            <a 
              href={CONTACT_INFO.phoneLink}
              className="w-full flex items-center justify-center gap-3 h-16 rounded-xl bg-brand-yellow text-brand-dark font-black text-lg shadow-md border-2 border-brand-light active:bg-brand-yellow/90"
            >
              <i className="fa-solid fa-phone text-xl"></i>
              <span>Ligar agora {CONTACT_INFO.phone}</span>
            </a>
            
            <a 
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 h-16 rounded-xl bg-brand-green text-white font-black text-lg shadow-md border-2 border-green-300 active:bg-green-700"
            >
              <i className="fa-brands fa-whatsapp text-2xl"></i>
              <span>WhatsApp — Falar com encanador</span>
            </a>
          </div>

          {/* Links list in giant size (22px text, 64px height each) with subtext */}
          <div className="flex-1 p-4 space-y-2">
            
            {/* INÍCIO */}
            <Link 
              to="/" 
              className="flex items-center gap-4 px-4 h-16 rounded-xl text-brand-light hover:bg-brand-navy border-b border-brand-navy/40"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-yellow">
                <i className="fa-solid fa-house text-lg"></i>
              </div>
              <div className="text-left">
                <span className="text-xl font-extrabold block text-white leading-tight">Início</span>
                <span className="text-[11px] text-slate-300 block">Ir para a página principal</span>
              </div>
            </Link>

            {/* SERVIÇOS - Accordion */}
            <div className="border-b border-brand-navy/40">
              <button 
                onClick={() => setIsServicesExpanded(!isServicesExpanded)}
                className="w-full flex items-center justify-between px-4 h-16 rounded-xl text-brand-light hover:bg-brand-navy text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-yellow">
                    <i className="fa-solid fa-screwdriver-wrench text-lg"></i>
                  </div>
                  <div>
                    <span className="text-xl font-extrabold block text-white leading-tight">Serviços</span>
                    <span className="text-[11px] text-slate-300 block">Veja o que nós fazemos</span>
                  </div>
                </div>
                <i className={`fa-solid ${isServicesExpanded ? 'fa-chevron-up' : 'fa-chevron-down'} text-brand-yellow text-lg`}></i>
              </button>

              {/* Accordion Content with simple phrases */}
              {isServicesExpanded && (
                <div className="px-4 py-2 bg-brand-navy/40 rounded-xl space-y-3 mt-1 mb-3">
                  {MAIN_SERVICES.map((srv) => (
                    <Link
                      key={srv.id}
                      to={`/servico/${srv.id}`}
                      className="block p-3 rounded-lg hover:bg-brand-navy/80 text-left"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="text-base font-extrabold text-brand-yellow block">
                        {srv.title}
                      </span>
                      <span className="text-xs text-slate-200 block mt-0.5 leading-snug">
                        {simpleServiceExplanations[srv.id] || srv.description}
                      </span>
                    </Link>
                  ))}
                  <div className="pt-2">
                    <Link
                      to="/servicos"
                      className="block text-center py-2 bg-brand-accent/20 rounded-lg text-brand-yellow text-sm font-extrabold"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Ver página completa de todos os serviços &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* QUEM SOMOS */}
            <Link 
              to="/sobre" 
              className="flex items-center gap-4 px-4 h-16 rounded-xl text-brand-light hover:bg-brand-navy border-b border-brand-navy/40"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-yellow">
                <i className="fa-solid fa-user-tie text-lg"></i>
              </div>
              <div className="text-left">
                <span className="text-xl font-extrabold block text-white leading-tight">Quem Somos</span>
                <span className="text-[11px] text-slate-300 block">Nossa história e garantia</span>
              </div>
            </Link>

            {/* FALAR CONOSCO */}
            <Link 
              to="/contato" 
              className="flex items-center gap-4 px-4 h-16 rounded-xl text-brand-light hover:bg-brand-navy border-b border-brand-navy/40"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-yellow">
                <i className="fa-solid fa-envelope text-lg"></i>
              </div>
              <div className="text-left">
                <span className="text-xl font-extrabold block text-white leading-tight">Contato</span>
                <span className="text-[11px] text-slate-300 block">Endereço, telefone e WhatsApp</span>
              </div>
            </Link>

            {/* BAIRROS ATENDIDOS */}
            <Link 
              to="/sitemap" 
              className="flex items-center gap-4 px-4 h-16 rounded-xl text-brand-light hover:bg-brand-navy"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-yellow">
                <i className="fa-solid fa-map-location-dot text-lg"></i>
              </div>
              <div className="text-left">
                <span className="text-xl font-extrabold block text-white leading-tight">Bairros Atendidos</span>
                <span className="text-[11px] text-slate-300 block">Atendemos Curitiba e toda RMC</span>
              </div>
            </Link>

          </div>

          {/* Footer of Mobile Drawer */}
          <div className="p-4 bg-brand-navy/60 border-t border-brand-accent/20 text-center text-xs text-slate-400">
            <p className="font-extrabold text-white text-sm mb-1">{CONTACT_INFO.companyName}</p>
            <p>{CONTACT_INFO.address} - {CONTACT_INFO.neighborhood}</p>
            <p>Curitiba - PR | Plantão 24h Permanente</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
