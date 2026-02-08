
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { getLocalizedFAQ, CONTACT_INFO } from '../constants';

interface Props {
  locationName?: string;
}

const FAQInfinite: React.FC<Props> = ({ locationName = 'Curitiba' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(24);
  const listRef = useRef<HTMLDivElement>(null);

  // Gera as 550 perguntas focadas 100% no local atual
  const localFaqs = useMemo(() => getLocalizedFAQ(locationName), [locationName]);

  const filteredFaqs = useMemo(() => {
    if (!searchTerm) return localFaqs;
    return localFaqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [localFaqs, searchTerm]);

  // Efeito de Scroll Infinito
  useEffect(() => {
    const handleScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 800) {
        setVisibleCount(prev => Math.min(prev + 24, filteredFaqs.length));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredFaqs.length]);

  const openPopup = (idx: number) => {
    setSelectedIdx(idx);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setSelectedIdx(null);
    document.body.style.overflow = 'unset';
  };

  const navigate = (dir: 'prev' | 'next') => {
    if (selectedIdx === null) return;
    const newIdx = dir === 'next' ? selectedIdx + 1 : selectedIdx - 1;
    if (newIdx >= 0 && newIdx < filteredFaqs.length) {
      setSelectedIdx(newIdx);
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">SEO Hidráulico Localizado</span>
          <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter uppercase italic mb-6">
            Dúvidas no <span className="text-accent">{locationName}</span>
          </h2>
          <p className="text-gray-500 font-medium text-lg max-w-2xl mx-auto italic">
            Nossa IA técnica gerou uma base com 550 respostas exclusivas para o atendimento no **{locationName}**.
          </p>
          
          {/* Search Bar Premium */}
          <div className="mt-10 max-w-xl mx-auto relative group">
            <input 
              type="text" 
              placeholder={`O que você busca no ${locationName}?`}
              className="w-full px-8 py-5 rounded-full bg-gray-50 border border-gray-100 outline-none focus:ring-4 focus:ring-accent/20 transition-all font-bold text-primary shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300 group-hover:text-accent transition-colors">
              <i className="fas fa-search text-xl"></i>
            </div>
          </div>
        </div>

        {/* Accordion Grid with "Bottom-Up" Reveal */}
        <div ref={listRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredFaqs.slice(0, visibleCount).map((faq, idx) => (
            <button
              key={idx}
              onClick={() => openPopup(idx)}
              className="group p-6 bg-gray-50 rounded-2xl border border-transparent hover:border-accent hover:bg-white transition-all text-left flex justify-between items-center animate-reveal-up"
              style={{ animationDelay: `${(idx % 24) * 0.03}s` }}
            >
              <div className="pr-4 overflow-hidden">
                <span className="font-black text-primary uppercase italic tracking-tight text-[11px] block truncate group-hover:text-accent">
                  {faq.question}
                </span>
                <span className="text-[8px] text-gray-400 font-bold uppercase tracking-widest mt-1 block">Unidade {locationName}</span>
              </div>
              <i className="fas fa-chevron-right text-accent group-hover:translate-x-1 transition-transform"></i>
            </button>
          ))}
        </div>

        {/* Visual Indicator of Infinity */}
        {visibleCount < filteredFaqs.length && (
          <div className="mt-16 text-center">
             <div className="inline-flex flex-col items-center gap-3 text-accent/30">
                <i className="fas fa-angles-down animate-bounce text-2xl"></i>
                <span className="text-[9px] font-black uppercase tracking-[0.4em]">Base de dados infinita em carregamento</span>
             </div>
          </div>
        )}
      </div>

      {/* Answer Modal with Flip Navigation */}
      {selectedIdx !== null && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-10">
          <div className="absolute inset-0 bg-primary/98 backdrop-blur-2xl" onClick={closePopup}></div>
          <div className="relative bg-white w-full max-w-3xl rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col max-h-full animate-modal-enter">
            
            {/* Modal Header */}
            <div className="p-10 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
               <div>
                 <span className="text-[10px] font-black text-accent uppercase tracking-[0.3em]">Protocolo Técnico {selectedIdx + 1}/550</span>
                 <h3 className="text-xl md:text-3xl font-black text-primary italic leading-tight mt-3 uppercase tracking-tighter">
                   {filteredFaqs[selectedIdx].question}
                 </h3>
               </div>
               <button onClick={closePopup} className="text-gray-300 hover:text-urgent text-4xl transition-colors p-2">
                 <i className="fas fa-xmark"></i>
               </button>
            </div>

            {/* Modal Content - Resposta Ultra Focada */}
            <div className="p-10 md:p-16 overflow-y-auto text-gray-600 leading-relaxed font-medium">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl md:text-2xl mb-10 text-gray-800">
                  {filteredFaqs[selectedIdx].answer.split('**').map((part, i) => (
                    i % 2 === 1 ? <strong key={i} className="text-primary font-black underline decoration-accent/30 decoration-4">{part}</strong> : part
                  ))}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <div className="p-6 bg-accent/10 rounded-3xl border border-accent/20 flex gap-4 items-center">
                  <i className="fas fa-truck-fast text-accent text-2xl"></i>
                  <span className="text-[10px] text-primary font-black uppercase tracking-widest italic">Saída imediata para o {locationName}</span>
                </div>
                <div className="p-6 bg-primary/5 rounded-3xl border border-primary/10 flex gap-4 items-center">
                  <i className="fas fa-shield-check text-primary text-2xl"></i>
                  <span className="text-[10px] text-primary font-black uppercase tracking-widest italic">Garantia oficial ADP Engenharia</span>
                </div>
              </div>

              <a 
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                className="w-full bg-primary text-white py-8 rounded-[2rem] font-black uppercase italic tracking-[0.2em] text-center block shadow-2xl hover:bg-accent hover:text-primary transition-all active:scale-95 text-lg"
              >
                Atendimento Imediato no {locationName}
              </a>
            </div>

            {/* Modal Navigation - "Folhear" as Perguntas */}
            <div className="p-8 bg-gray-50 border-t border-gray-100 flex justify-between gap-6">
              <button 
                onClick={() => navigate('prev')}
                disabled={selectedIdx === 0}
                className={`flex-1 py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest border transition-all flex items-center justify-center gap-3 ${
                  selectedIdx === 0 ? 'opacity-20 cursor-not-allowed border-gray-200' : 'border-primary/10 bg-white hover:bg-primary hover:text-white shadow-sm'
                }`}
              >
                <i className="fas fa-arrow-left"></i> Anterior
              </button>
              <button 
                onClick={() => navigate('next')}
                disabled={selectedIdx === filteredFaqs.length - 1}
                className={`flex-1 py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest border transition-all flex items-center justify-center gap-3 ${
                  selectedIdx === filteredFaqs.length - 1 ? 'opacity-20 cursor-not-allowed border-gray-200' : 'border-primary/10 bg-white hover:bg-primary hover:text-white shadow-sm'
                }`}
              >
                Próxima <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes reveal-up {
          from { opacity: 0; transform: translateY(60px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-reveal-up {
          animation: reveal-up 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }
        @keyframes modal-enter {
          from { opacity: 0; transform: translateY(100px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-modal-enter {
          animation: modal-enter 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default FAQInfinite;
