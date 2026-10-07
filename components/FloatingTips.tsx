import React, { useState, useEffect } from 'react';
import { PLUMBING_TIPS } from '../constants';

const FloatingTips: React.FC = () => {
  const [currentTip, setCurrentTip] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if the tip has already been shown in this session
    const alreadyShown = sessionStorage.getItem('adp_expert_tip_shown');
    if (alreadyShown === 'true') {
      setDismissed(true);
      return;
    }

    // Dwell time: Show only after 20 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
      sessionStorage.setItem('adp_expert_tip_shown', 'true');
    }, 20000);

    // Rotate tips every 15s when active
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % PLUMBING_TIPS.length);
    }, 15000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const handleClose = () => {
    setDismissed(true);
  };

  if (dismissed || !isVisible) return null;

  return (
    <div className="fixed bottom-28 left-4 z-40 max-w-xs bg-brand-dark/95 text-white border-2 border-brand-accent rounded-xl p-4 shadow-2xl backdrop-blur-md transition-all duration-300 animate-[fadeIn_300ms_ease-out] text-left">
      <div className="space-y-3">
        <div className="flex items-center justify-between border-b border-brand-accent/25 pb-1.5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-brand-accent/20 text-brand-yellow flex items-center justify-center text-xs">
              <i className="fa-solid fa-lightbulb"></i>
            </div>
            <span className="text-[10px] uppercase tracking-wider font-black text-brand-yellow font-display">
              Dica do Especialista
            </span>
          </div>
          
          {/* Explicit "Fechar" Text Button for Senior Accessibility */}
          <button 
            onClick={handleClose} 
            className="text-xs font-black text-slate-300 hover:text-white uppercase tracking-wider hover:underline"
            aria-label="Fechar dica técnica"
          >
            Fechar
          </button>
        </div>
        
        <p className="text-xs sm:text-sm text-slate-100 leading-snug font-sans font-medium">
          "{PLUMBING_TIPS[currentTip]}"
        </p>
      </div>
    </div>
  );
};

export default FloatingTips;
