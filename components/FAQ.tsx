import React, { useState } from 'react';
import { FAQItem } from '../types';

interface Props {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

const FAQ: React.FC<Props> = ({ 
  items, 
  title = "Perguntas Frequentes sobre Serviços Hidráulicos em Curitiba",
  subtitle = "Tire suas dúvidas sobre detecção de vazamentos, prazos de atendimento, laudo Sanepar e valores."
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-8 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
            Dúvidas & Respostas Rápidas
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-white border border-slate-200/90 rounded-xl overflow-hidden shadow-sm transition-shadow hover:shadow-md"
              >
                <button
                  type="button"
                  className={`w-full text-left p-4 sm:p-5 flex justify-between items-center gap-4 transition-colors ${
                    isOpen ? 'bg-slate-900 text-white' : 'text-slate-800 hover:bg-slate-50'
                  }`}
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base leading-snug">
                    {item.question}
                  </span>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${
                    isOpen ? 'rotate-180 text-yellow-400' : 'text-slate-400'
                  }`}>
                    <i className="fa-solid fa-chevron-down text-xs"></i>
                  </div>
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-5 text-sm text-slate-700 bg-white border-t border-slate-100 leading-relaxed space-y-2 animate-fadeIn">
                    <p>
                      {item.answer.split('**').map((part, i) => (
                        i % 2 === 1 ? <strong key={i} className="font-bold text-slate-900">{part}</strong> : part
                      ))}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
