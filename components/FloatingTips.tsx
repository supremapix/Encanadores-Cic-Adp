
import React, { useState, useEffect } from 'react';
import { PLUMBING_TIPS } from '../constants';

const FloatingTips: React.FC = () => {
  const [tipIdx, setTipIdx] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Inicia o ciclo de dicas
    const showRandomTip = () => {
      const nextIdx = Math.floor(Math.random() * PLUMBING_TIPS.length);
      setTipIdx(nextIdx);
      setIsVisible(true);

      // Desaparece após 15 segundos
      setTimeout(() => {
        setIsVisible(false);
      }, 15000);
    };

    const interval = setInterval(showRandomTip, 35000); // Mostra uma dica a cada 35 segundos
    
    // Mostra a primeira dica após 10 segundos no site
    const firstTimeout = setTimeout(showRandomTip, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(firstTimeout);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 right-4 md:right-8 z-[1500] max-w-sm w-full animate-slide-left pointer-events-none">
      <div className="bg-white rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-100 p-6 pointer-events-auto relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-1 h-full bg-accent group-hover:w-2 transition-all"></div>
        
        <div className="flex justify-between items-start mb-4">
           <div className="flex items-center gap-2">
              <i className="fas fa-lightbulb text-accent text-xl animate-pulse"></i>
              <span className="text-[9px] font-black text-primary uppercase tracking-[0.3em]">Dica de Engenharia</span>
           </div>
           <button 
             onClick={() => setIsVisible(false)}
             className="text-gray-300 hover:text-urgent transition-colors p-1"
             aria-label="Fechar dica"
           >
             <i className="fas fa-xmark"></i>
           </button>
        </div>

        <p className="text-sm font-bold text-gray-700 leading-relaxed italic">
          "{PLUMBING_TIPS[tipIdx]}"
        </p>

        {/* Progress Bar para expiração */}
        <div className="mt-4 h-1 w-full bg-gray-50 rounded-full overflow-hidden">
           <div className="h-full bg-accent animate-progress-tip"></div>
        </div>
      </div>

      <style>{`
        @keyframes slide-left {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-left {
          animation: slide-left 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        @keyframes progress-tip {
          from { width: 100%; }
          to { width: 0%; }
        }
        .animate-progress-tip {
          animation: progress-tip 15s linear forwards;
        }
      `}</style>
    </div>
  );
};

export default FloatingTips;
