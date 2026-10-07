import React, { useState, useEffect, useRef } from 'react';
import { 
  Share2, 
  Phone, 
  MessageCircle, 
  ArrowUp, 
  Copy, 
  Check, 
  X, 
  Smartphone 
} from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  // Check scroll position for scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if navigator.share is available
  useEffect(() => {
    if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
      setCanNativeShare(true);
    }
  }, []);

  // Listen to mobile menu toggle from Header
  useEffect(() => {
    const handleMenuToggle = (e: Event) => {
      const customEvent = e as CustomEvent<{ isOpen: boolean }>;
      if (customEvent.detail) {
        setIsMobileMenuOpen(customEvent.detail.isOpen);
      }
    };

    window.addEventListener('adp-mobile-menu-toggle', handleMenuToggle);

    // Initial check
    if (document.body.getAttribute('data-mobile-menu-open') === 'true') {
      setIsMobileMenuOpen(true);
    }

    return () => {
      window.removeEventListener('adp-mobile-menu-toggle', handleMenuToggle);
    };
  }, []);

  // Close share popup on click outside or Escape
  useEffect(() => {
    if (!isShareOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsShareOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setIsShareOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isShareOpen]);

  // Current page data for sharing
  const getShareData = () => {
    const url = typeof window !== 'undefined' ? window.location.href : CONTACT_INFO.canonicalDomain;
    const title = typeof document !== 'undefined' ? document.title : 'Desentupidora ADP — Encanador 24h em Curitiba';
    const message = `Estou indicando o melhor Encanador e Desentupidora 24h de Curitiba — Desentupidora ADP: ${title} (${url})`;
    return { url, title, message };
  };

  const handleCopyLink = async () => {
    const { message } = getShareData();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(message);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = message;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    } catch (err) {
      console.error('Falha ao copiar link:', err);
    }
  };

  const handleNativeShare = async () => {
    const { title, message, url } = getShareData();
    try {
      await navigator.share({
        title,
        text: message,
        url,
      });
      setIsShareOpen(false);
    } catch {
      // User cancelled share
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If mobile drawer is open, hide all floating buttons
  if (isMobileMenuOpen) {
    return null;
  }

  const { url, title, message } = getShareData();
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedMessage = encodeURIComponent(message);
  const ogImageUrl = 'https://www.encanador.servicosnobairro.com.br/og-image.jpg';

  const shareLinks = [
    {
      name: 'WhatsApp',
      url: `https://wa.me/?text=${encodedMessage}`,
      bgColor: 'hover:bg-emerald-600',
      iconClass: 'fa-brands fa-whatsapp',
      color: '#25D366'
    },
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      bgColor: 'hover:bg-blue-600',
      iconClass: 'fa-brands fa-facebook-f',
      color: '#1877F2'
    },
    {
      name: 'X (Twitter)',
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      bgColor: 'hover:bg-slate-700',
      iconClass: 'fa-brands fa-x-twitter',
      color: '#FFFFFF'
    },
    {
      name: 'Pinterest',
      url: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodeURIComponent(ogImageUrl)}&description=${encodedTitle}`,
      bgColor: 'hover:bg-red-600',
      iconClass: 'fa-brands fa-pinterest',
      color: '#BD081C'
    },
    {
      name: 'LinkedIn',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      bgColor: 'hover:bg-sky-700',
      iconClass: 'fa-brands fa-linkedin-in',
      color: '#0A66C2'
    },
    {
      name: 'Threads',
      url: `https://www.threads.net/intent/post?text=${encodedMessage}`,
      bgColor: 'hover:bg-neutral-800',
      iconClass: 'fa-brands fa-threads',
      color: '#FFFFFF'
    }
  ];

  return (
    <>
      {/* Toast Notification when link is copied */}
      {isCopied && (
        <div 
          role="status"
          aria-live="polite"
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-[60] bg-emerald-600 text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-2 border-2 border-white/40 text-sm font-bold animate-[slideDown_200ms_ease-out]"
        >
          <Check size={18} className="text-white shrink-0" />
          <span>Link copiado com sucesso!</span>
        </div>
      )}

      {/* CANTO INFERIOR ESQUERDO: Botão Compartilhar */}
      <div className="fixed bottom-4 left-4 z-40">
        <button
          onClick={() => setIsShareOpen(!isShareOpen)}
          type="button"
          aria-label="Compartilhar esta página"
          aria-expanded={isShareOpen}
          className="relative group flex items-center gap-2.5 px-4 py-3 bg-[#0B2A3C] text-[#F7F3EC] hover:text-[#F5C518] rounded-full border-2 border-[#C8783A] shadow-xl hover:shadow-[0_0_20px_rgba(200,120,58,0.5)] transition-all duration-300 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-[#F5C518] active:scale-95"
        >
          {/* Pulsing ring highlight behind button */}
          <span className="absolute -inset-1 rounded-full bg-[#C8783A]/30 motion-reduce:hidden animate-ping pointer-events-none opacity-40"></span>
          
          <Share2 size={20} className="text-[#F5C518] shrink-0" />
          <span className="text-xs sm:text-sm font-black tracking-wide font-display">
            Compartilhar
          </span>
        </button>

        {/* Modal / Popup de Compartilhamento */}
        {isShareOpen && (
          <div 
            ref={popupRef}
            role="dialog"
            aria-modal="true"
            aria-label="Opções de compartilhamento"
            className="absolute bottom-16 left-0 w-[340px] max-w-[calc(100vw-32px)] bg-[#0B2A3C]/95 backdrop-blur-md rounded-2xl border-2 border-[#C8783A] p-4 shadow-2xl z-50 text-white animate-[slideUp_200ms_cubic-bezier(0.16,1,0.3,1)]"
          >
            {/* Header do Popup */}
            <div className="flex items-center justify-between pb-3 border-b border-[#C8783A]/30">
              <div className="flex items-center gap-2">
                <Share2 size={16} className="text-[#F5C518]" />
                <span className="text-sm font-black font-display text-[#F7F3EC] uppercase tracking-wider">
                  Compartilhar Página
                </span>
              </div>
              <button
                onClick={() => setIsShareOpen(false)}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F5C518]"
                aria-label="Fechar janela de compartilhamento"
              >
                <X size={18} />
              </button>
            </div>

            {/* Botão Compartilhar pelo Celular (navigator.share) */}
            {canNativeShare && (
              <div className="pt-3">
                <button
                  onClick={handleNativeShare}
                  type="button"
                  className="w-full flex items-center justify-center gap-2.5 h-12 rounded-xl bg-gradient-to-r from-[#F5C518] to-[#C8783A] text-[#0B2A3C] font-black text-sm shadow-md hover:brightness-110 active:scale-98 transition-all"
                >
                  <Smartphone size={18} />
                  <span>Compartilhar pelo Celular</span>
                </button>
              </div>
            )}

            {/* Grid de Redes Sociais */}
            <div className="grid grid-cols-2 gap-2 pt-3">
              {shareLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2.5 px-3 h-12 rounded-xl bg-[#08202E] border border-[#C8783A]/25 ${item.bgColor} text-[#F7F3EC] hover:text-white transition-all text-xs font-bold active:scale-95`}
                  aria-label={`Compartilhar no ${item.name}`}
                >
                  <i 
                    className={`${item.iconClass} text-lg shrink-0`} 
                    style={{ color: item.color }}
                  ></i>
                  <span className="truncate">{item.name}</span>
                </a>
              ))}
            </div>

            {/* Botão Copiar Link */}
            <div className="pt-3 border-t border-[#C8783A]/25 mt-3">
              <button
                onClick={handleCopyLink}
                type="button"
                className="w-full flex items-center justify-center gap-2.5 h-12 rounded-xl bg-[#08202E] hover:bg-[#C8783A]/20 border border-[#C8783A]/50 text-[#F5C518] font-bold text-xs transition-all active:scale-98"
                aria-label="Copiar link desta página"
              >
                {isCopied ? (
                  <>
                    <Check size={16} className="text-emerald-400" />
                    <span className="text-emerald-400">Copiado para a área de transferência!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Copiar link da página</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* CANTO INFERIOR DIREITO: Empilhados verticalmente com gap 12px */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 pointer-events-none">
        
        {/* 1. Voltar ao Topo (apenas após 300px) */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            type="button"
            aria-label="Voltar ao topo da página"
            className="pointer-events-auto p-3 rounded-full bg-[#0B2A3C] text-[#F7F3EC] hover:text-[#F5C518] border-2 border-[#C8783A]/60 hover:border-[#F5C518] shadow-lg transition-all duration-300 hover:-translate-y-1 active:scale-95 min-h-[48px] min-w-[48px] flex items-center justify-center animate-[fadeIn_200ms_ease-out]"
          >
            <ArrowUp size={22} className="shrink-0" />
          </button>
        )}

        {/* 2. Ligar Agora (Telefone Fixo) */}
        <a
          href={CONTACT_INFO.phoneLink}
          aria-label={`Ligar agora para ${CONTACT_INFO.phone}`}
          className="pointer-events-auto flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full bg-gradient-to-r from-[#F5C518] to-[#C8783A] text-[#0B2A3C] font-black font-display shadow-xl hover:shadow-[0_0_20px_rgba(245,197,24,0.5)] border-2 border-white/40 transition-all duration-300 hover:scale-105 active:scale-95 min-h-[48px] text-xs sm:text-sm"
        >
          <span className="p-1 rounded-full bg-[#0B2A3C] text-[#F5C518] flex items-center justify-center shrink-0 motion-reduce:animate-none animate-bounce">
            <Phone size={16} />
          </span>
          <span className="hidden sm:inline">Ligar agora {CONTACT_INFO.phone}</span>
          <span className="sm:hidden">Ligar</span>
        </a>

        {/* 3. WhatsApp 24h */}
        <a
          href="https://wa.me/5541985171966?text=Ol%C3%A1%2C%20preciso%20de%20um%20encanador%20em%20Curitiba%2024h"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Falar no WhatsApp 24h: ${CONTACT_INFO.whatsapp}`}
          className="pointer-events-auto relative flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-500 text-white font-black font-display shadow-[0_0_20px_rgba(34,197,94,0.45)] border-2 border-white/50 transition-all duration-300 hover:scale-105 active:scale-95 min-h-[48px] text-xs sm:text-sm"
        >
          {/* Luz pulsante */}
          <span className="absolute -inset-1 rounded-full bg-emerald-500/30 motion-reduce:hidden animate-pulse pointer-events-none"></span>

          {/* Bolinha verde "Online agora" piscando */}
          <span className="relative flex h-3 w-3 shrink-0">
            <span className="animate-ping motion-reduce:hidden absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-200"></span>
          </span>

          <MessageCircle size={18} className="shrink-0 motion-reduce:animate-none animate-pulse" />
          
          <span className="hidden sm:inline">WhatsApp 24h</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>

      </div>
    </>
  );
};

export default FloatingActions;
