
import React, { useState } from 'react';
import { FAQItem } from '../types';

interface Props {
  items: FAQItem[];
  title?: string;
}

const FAQ: React.FC<Props> = ({ items, title = "Perguntas Frequentes" }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="text-secondary font-bold">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary">{title}</h2>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
            <button
              className={`w-full text-left p-4 md:p-5 flex justify-between items-center transition-all ${
                openIndex === index ? 'bg-blue-50 text-secondary' : 'bg-white hover:bg-gray-50 text-gray-800'
              }`}
              onClick={() => toggle(index)}
              aria-expanded={openIndex === index}
            >
              <span className="font-bold text-sm md:text-base pr-4">{item.question}</span>
              <i className={`fas fa-chevron-down transition-transform duration-300 text-xs ${
                openIndex === index ? 'rotate-180' : ''
              }`}></i>
            </button>
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? 'max-h-[500px] opacity-100 border-t border-gray-50' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-5 text-gray-600 text-sm md:text-base leading-relaxed bg-white">
                {renderText(item.answer)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
