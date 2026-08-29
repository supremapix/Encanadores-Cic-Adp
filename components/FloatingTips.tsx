import React, { useState, useEffect } from 'react';
import { PLUMBING_TIPS } from '../constants';

const FloatingTips: React.FC = () => {
  const [currentTip, setCurrentTip] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Exibe após 6 segundos
    const timer = setTimeout(() => {
      if (!dismissed) setIsVisible(true);
    }, 6000);

    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % PLUMBING_TIPS.length);
    }, 15000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [dismissed]);

  if (dismissed || !isVisible) return null;

  return (
    <div className="fixed bottom-20 left-4 z-40 max-w-xs sm:max-w-sm bg-slate-900/95 text-white border border-slate-700/80 rounded-xl p-3.5 shadow-xl backdrop-blur-sm transition-all duration-300 hidden md:block">
      <div className="flex items-start gap-2.5">
        <div className="w-7 h-7 rounded-lg bg-yellow-400/20 text-yellow-300 flex items-center justify-center flex-shrink-0 text-xs">
          <i className="fa-solid fa-lightbulb"></i>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-wider font-bold text-yellow-400">
              Dica Técnica do Especialista
            </span>
            <button 
              onClick={() => setDismissed(true)} 
              className="text-slate-400 hover:text-white text-xs p-1"
              aria-label="Fechar dica"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <p className="text-xs text-slate-200 mt-1 leading-snug">
            {PLUMBING_TIPS[currentTip]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FloatingTips;
