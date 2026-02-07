
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

  return (
    <div className="bg-white rounded-[2.5rem] shadow-2xl p-6 md:p-12 border border-gray-100">
      <h2 className="text-3xl md:text-4xl font-black text-center mb-10 text-primary tracking-tighter uppercase italic">{title}</h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border border-gray-100 rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
            <button
              className={`w-full text-left p-6 flex justify-between items-center transition-all ${
                openIndex === index ? 'bg-primary text-white' : 'bg-gray-50 text-gray-800 hover:bg-white'
              }`}
              onClick={() => toggle(index)}
            >
              <span className="font-black text-base md:text-lg pr-6 uppercase tracking-tight">{item.question}</span>
              <i className={`fas fa-chevron-down transition-transform duration-500 text-sm ${
                openIndex === index ? 'rotate-180 text-accent' : 'text-gray-400'
              }`}></i>
            </button>
            <div 
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-8 text-gray-700 text-sm md:text-base leading-relaxed bg-white font-medium border-t border-gray-50">
                {item.answer.split('**').map((part, i) => (
                  i % 2 === 1 ? <strong key={i} className="text-primary font-black">{part}</strong> : part
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
