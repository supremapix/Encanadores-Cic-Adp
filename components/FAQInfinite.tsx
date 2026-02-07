
import React, { useState, useEffect } from 'react';
import { GENERAL_FAQ } from '../constants';

const FAQInfinite: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(20);

  const filteredFaqs = GENERAL_FAQ.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
      setVisibleCount(prev => Math.min(prev + 20, filteredFaqs.length));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter uppercase italic mb-6">Central Tática de Dúvidas</h2>
          <p className="text-gray-500 font-medium text-lg max-w-2xl mx-auto italic">Explore nossa base de dados com 550 respostas técnicas sobre hidráulica em todos os bairros de Curitiba.</p>
          
          {/* Search Bar */}
          <div className="mt-10 max-w-xl mx-auto relative group">
            <input 
              type="text" 
              placeholder="Pesquise por bairro ou problema (ex: Batel, Pia...)"
              className="w-full px-8 py-5 rounded-2xl bg-gray-50 border border-gray-100 outline-none focus:ring-4 focus:ring-accent/20 transition-all font-bold text-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300 group-hover:text-accent transition-colors">
              <i className="fas fa-search text-xl"></i>
            </div>
          </div>
        </div>

        {/* Accordion List with Reveal Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredFaqs.slice(0, visibleCount).map((faq, idx) => (
            <button
              key={idx}
              onClick={() => openPopup(idx)}
              className="group p-6 bg-gray-50 rounded-2xl border border-transparent hover:border-accent hover:bg-white transition-all text-left flex justify-between items-center animate-fade-in-up"
              style={{ animationDelay: `${(idx % 20) * 0.05}s` }}
            >
              <span className="font-black text-gray-700 uppercase italic tracking-tight text-sm line-clamp-1">{faq.question}</span>
              <i className="fas fa-plus text-accent group-hover:rotate-90 transition-transform"></i>
            </button>
          ))}
        </div>

        {visibleCount < filteredFaqs.length && (
          <div className="mt-12 text-center">
             <div className="inline-flex items-center gap-3 text-accent animate-bounce">
                <i className="fas fa-chevron-down"></i>
                <span className="text-[10px] font-black uppercase tracking-widest">Continue rolando para carregar mais</span>
             </div>
          </div>
        )}
      </div>

      {/* Answer Modal */}
      {selectedIdx !== null && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-10">
          <div className="absolute inset-0 bg-primary/95 backdrop-blur-xl" onClick={closePopup}></div>
          <div className="relative bg-white w-full max-w-3xl rounded-[3rem] shadow-2xl overflow-hidden flex flex-col max-h-full animate-scale-up">
            
            {/* Modal Header */}
            <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50">
               <div>
                 <span className="text-[10px] font-black text-accent uppercase tracking-[0.3em]">Resposta Técnica {selectedIdx + 1}/550</span>
                 <h3 className="text-xl md:text-2xl font-black text-primary italic leading-tight mt-2">{filteredFaqs[selectedIdx].question}</h3>
               </div>
               <button onClick={closePopup} className="text-gray-300 hover:text-urgent text-3xl transition-colors">
                 <i className="fas fa-xmark"></i>
               </button>
            </div>

            {/* Modal Content */}
            <div className="p-10 overflow-y-auto text-gray-600 leading-relaxed font-medium">
              <p className="text-lg mb-8">
                {filteredFaqs[selectedIdx].answer.split('**').map((part, i) => (
                  i % 2 === 1 ? <strong key={i} className="text-primary font-black">{part}</strong> : part
                ))}
              </p>
              
              <div className="p-6 bg-accent/10 rounded-2xl border border-accent/20 flex gap-4 items-center mb-6">
                <i className="fas fa-info-circle text-accent text-2xl"></i>
                <p className="text-xs text-primary font-bold uppercase tracking-tight italic">Atenção: Entupimentos recorrentes indicam falha estrutural. Solicite uma vídeo inspeção HD.</p>
              </div>

              <a 
                href={`https://api.whatsapp.com/send?phone=5541985171966&text=Ol%C3%A1%2C%20vi%20a%20pergunta%20"${filteredFaqs[selectedIdx].question}"%20e%20preciso%20de%20ajuda.`}
                target="_blank"
                className="w-full bg-primary text-white py-6 rounded-2xl font-black uppercase italic tracking-widest text-center block shadow-xl hover:bg-secondary transition-colors"
              >
                Solicitar Técnico Agora
              </a>
            </div>

            {/* Modal Navigation */}
            <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-between gap-4">
              <button 
                onClick={() => navigate('prev')}
                disabled={selectedIdx === 0}
                className={`flex-1 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest border transition-all ${
                  selectedIdx === 0 ? 'opacity-30 cursor-not-allowed' : 'border-primary/10 hover:bg-primary hover:text-white'
                }`}
              >
                <i className="fas fa-chevron-left mr-2"></i> Anterior
              </button>
              <button 
                onClick={() => navigate('next')}
                disabled={selectedIdx === filteredFaqs.length - 1}
                className={`flex-1 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest border transition-all ${
                  selectedIdx === filteredFaqs.length - 1 ? 'opacity-30 cursor-not-allowed' : 'border-primary/10 hover:bg-primary hover:text-white'
                }`}
              >
                Próxima <i className="fas fa-chevron-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        @keyframes scale-up {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-scale-up {
          animation: scale-up 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
      `}</style>
    </section>
  );
};

export default FAQInfinite;
