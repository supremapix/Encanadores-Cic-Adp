
import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';

interface Props {
  src: string;
  alt: string;
  className?: string;
}

const SafeImage: React.FC<Props> = ({ src, alt, className }) => {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className={`${className} bg-gradient-to-br from-primary to-secondary flex flex-col items-center justify-center p-6 text-center overflow-hidden relative group`}>
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl mb-4 animate-float">
             <img src={CONTACT_INFO.logoUrl} className="w-10 h-10 object-contain opacity-20" alt="Logo Fallback" />
             <span className="absolute font-black text-primary text-2xl md:text-3xl tracking-tighter italic">ADP</span>
          </div>
          <span className="text-white/30 text-[8px] font-black uppercase tracking-[0.4em]">Engenharia de Precisão</span>
        </div>
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      onError={() => setError(true)}
    />
  );
};

export default SafeImage;
