import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark';
}

const PremiumLogo: React.FC<LogoProps> = ({ size = 'md', theme = 'light' }) => {
  const isLight = theme === 'light';

  const iconSizes = {
    sm: 'w-8 h-8 text-base',
    md: 'w-10 h-10 text-lg',
    lg: 'w-12 h-12 text-xl',
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  };

  const subtitleSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-[11px]',
  };

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Icon Badge */}
      <div className={`${iconSizes[size]} rounded-xl bg-gradient-to-br from-blue-600 to-brand-dark border border-blue-400/30 flex items-center justify-center shadow-sm flex-shrink-0 text-white`}>
        <i className="fa-solid fa-droplet text-yellow-300"></i>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-tight">
        <div className={`font-extrabold tracking-tight ${titleSizes[size]} ${isLight ? 'text-white' : 'text-slate-900'}`}>
          <span>Desentupidora</span>
          <span className="text-yellow-400 ml-1.5">ADP</span>
        </div>
        <div className={`font-medium tracking-wider uppercase ${subtitleSizes[size]} ${isLight ? 'text-slate-300' : 'text-slate-500'}`}>
          Encanador & Caça-Vazamentos 24h
        </div>
      </div>
    </div>
  );
};

export default PremiumLogo;
