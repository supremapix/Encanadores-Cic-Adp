
import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark';
}

const PremiumLogo: React.FC<LogoProps> = ({ size = 'md', theme = 'light' }) => {
  const sizeClasses = {
    sm: { container: 'h-10 w-10', text: 'text-lg', subtext: 'text-[6px]', gap: 'gap-2' },
    md: { container: 'h-12 w-12', text: 'text-xl', subtext: 'text-[7px]', gap: 'gap-3' },
    lg: { container: 'h-20 w-20', text: 'text-3xl', subtext: 'text-[10px]', gap: 'gap-4' },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`flex items-center ${currentSize.gap} group cursor-pointer`}>
      {/* Icon Badge */}
      <div className={`relative ${currentSize.container} flex-shrink-0`}>
        {/* Outer Glow & Shimmer */}
        <div className="absolute -inset-1 bg-gradient-to-tr from-accent to-yellow-200 rounded-2xl blur-sm opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
        
        {/* Main Shield/Badge */}
        <div className="relative h-full w-full bg-primary rounded-2xl border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden">
          {/* Inner Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          
          {/* Animated Water Drop / Precision Icon */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="text-accent transform group-hover:scale-110 transition-transform duration-500">
               <svg 
                 viewBox="0 0 24 24" 
                 fill="currentColor" 
                 className={`${size === 'lg' ? 'w-10 h-10' : 'w-6 h-6'}`}
               >
                 <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
               </svg>
            </div>
            <span className={`absolute inset-0 flex items-center justify-center font-black text-white ${size === 'lg' ? 'text-xl' : 'text-xs'} mt-1 italic tracking-tighter`}>
              A
            </span>
          </div>

          {/* Sweep Shine Effect */}
          <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out"></div>
        </div>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-none">
        <div className={`font-black tracking-tighter uppercase italic flex items-baseline ${theme === 'light' ? 'text-white' : 'text-primary'}`}>
          <span className={`${currentSize.text}`}>ADP</span>
          <span className={`ml-1 text-accent ${currentSize.text}`}>ENGENHARIA</span>
        </div>
        <div className={`font-bold uppercase tracking-[0.4em] ${currentSize.subtext} ${theme === 'light' ? 'text-white/40' : 'text-primary/40'}`}>
          Precision Hidraulics
        </div>
      </div>
    </div>
  );
};

export default PremiumLogo;
