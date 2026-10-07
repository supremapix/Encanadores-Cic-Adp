import React from 'react';
import { Heart } from 'lucide-react';

export function SupremaCredit() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pt-4 pb-6 border-t border-[#C8783A]/25 flex justify-center items-center">
      <div className="bg-[#08202E] border border-[#C8783A]/40 rounded-full px-6 py-2.5 shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(200,120,58,0.25)]">
        <p className="text-[#F7F3EC] transition-colors duration-200 text-sm sm:text-base font-bold flex flex-wrap items-center justify-center gap-2">
          <span className="opacity-90">Desenvolvido com</span>
          <Heart size={14} className="text-red-500 animate-[pulse_1.5s_infinite] shrink-0 drop-shadow-[0_0_3px_rgba(239,68,68,0.7)]" aria-hidden="true" />
          <span className="opacity-90">por</span>
          <a
            id="developer-suprema-link"
            href="https://supremasite.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F5C518] hover:text-[#FFD84D] transition-all font-black inline-flex items-center gap-2 border-b border-dashed border-[#F5C518]/50 hover:border-[#FFD84D] min-h-[44px]"
          >
            Suprema Sites Express
            <img
              src="https://img.supremamidia.com/suprema-img.png"
              alt="Suprema"
              width="18" height="18"
              loading="lazy"
              className="h-[18px] w-auto inline select-none shrink-0 drop-shadow-[0_0_2px_rgba(250,204,21,0.5)] transition-transform duration-300 hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </a>
        </p>
      </div>
    </div>
  );
}

export default SupremaCredit;
