import React from 'react';
import { TRUST_BADGES } from '../constants';

const TrustBar: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {TRUST_BADGES.map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-3 group-hover:bg-primary transition-colors">
                <i className={`fas ${badge.icon} text-primary group-hover:text-white text-xl`}></i>
              </div>
              <span className="text-sm font-bold text-gray-700">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;