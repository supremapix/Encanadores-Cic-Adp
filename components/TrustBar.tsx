import React from 'react';
import { TRUST_BADGES } from '../constants';

const TrustBar: React.FC = () => {
  return (
    <div className="bg-brand-slate border-b-2 border-brand-accent/20 py-6 relative overflow-hidden">
      {/* Blueprint grid subtle accent */}
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {TRUST_BADGES.map((badge, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-3.5 p-4 bg-white rounded-xl border border-brand-accent/15 shadow-sm hover:shadow-md transition-all"
            >
              {/* Copper colored line-stroke icons, no blue squares */}
              <div className="w-12 h-12 rounded-lg border-2 border-brand-accent/35 text-brand-accent flex items-center justify-center flex-shrink-0 text-lg bg-brand-light/40">
                <i className={`fas ${badge.icon}`}></i>
              </div>
              
              <div className="min-w-0 text-left">
                <h4 className="text-sm font-display font-black text-brand-dark leading-snug truncate">
                  {badge.title}
                </h4>
                <p className="text-xs text-slate-600 leading-tight mt-0.5 font-medium">
                  {badge.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
