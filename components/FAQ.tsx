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
    <section className="py-16 bg-brand-light relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs font-black uppercase tracking-wider text-brand-accent font-display">
            Dúvidas & Respostas Rápidas
          </span>
          <h2 className="text-3xl font-display font-black text-brand-dark tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-base text-slate-700 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-white border-2 border-brand-accent/25 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Accordion Header */}
                <button
                  type="button"
                  className={`w-full text-left p-5 flex justify-between items-center gap-4 transition-colors focus:ring-2 focus:ring-brand-accent ${
                    isOpen ? 'bg-brand-navy text-white' : 'text-slate-800 hover:bg-brand-slate/40'
                  }`}
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-black text-base sm:text-lg leading-snug">
                    {item.question}
                  </span>
                  
                  {/* Valve / Register Icon that spins on open (respecting prefers-reduced-motion) */}
                  <div 
                    className={`w-10 h-10 rounded-full bg-brand-accent/25 flex items-center justify-center flex-shrink-0 transition-transform ${
                      isOpen ? 'text-brand-yellow' : 'text-brand-accent'
                    }`}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transitionDuration: '400ms',
                      transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    {/* Dharmachakra / valve wheel icon represents a plumbing register handle */}
                    <i className="fa-solid fa-dharmachakra text-lg motion-reduce:transition-none"></i>
                  </div>
                </button>

                {/* Animated Accordion Content */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out motion-reduce:transition-none ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                  style={{
                    display: 'grid',
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="p-5 text-base text-slate-700 bg-white border-t-2 border-brand-accent/10 leading-relaxed space-y-2">
                      <p>
                        {item.answer.split('**').map((part, i) => (
                          i % 2 === 1 ? <strong key={i} className="font-extrabold text-brand-dark">{part}</strong> : part
                        ))}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
