import React from 'react';
import { TRUST_BADGES } from '../constants';

const TrustBar: React.FC = () => {
  return (
    <div className="bg-slate-50 border-b border-slate-200/80 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {TRUST_BADGES.map((badge, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200/60 shadow-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center flex-shrink-0 text-base">
                <i className={`fas ${badge.icon}`}></i>
              </div>
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-snug truncate">
                  {badge.title}
                </h4>
                <p className="text-[11px] text-slate-500 leading-tight truncate">
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
