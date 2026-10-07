import React, { useState, useMemo } from 'react';
import { FAQItem } from '../types';
import { GENERAL_FAQS } from '../constants';

const EXTENDED_FAQS: FAQItem[] = [
  ...GENERAL_FAQS,
  {
    question: "O que fazer se o hidrômetro continuar girando com todas as torneiras fechadas?",
    answer: "Isso é sinal inequívoco de vazamento oculto na rede pressurizada. Feche imediatamente o registro geral do cavalete para estancar o desperdício de água e chame a equipe da Desentupidora ADP para rastrear e localizar a fuga com o Geofone Digital Ultrassônico sem quebrar pisos ou paredes às cegas."
  },
  {
    question: "Quanto custa o serviço de caça-vazamento em Curitiba?",
    answer: "O valor da inspeção técnica depende do porte do imóvel (casa térrea, sobrado, comércio ou condomínio) e da extensão da tubulação. Fazemos avaliação prévia transparente via WhatsApp com valores justos, clareza total e orçamento sem surpresas."
  },
  {
    question: "Como é feita a desobstrução de canos sem danificar o PVC?",
    answer: "Utilizamos máquinas elétricas rotativas dotadas de ponteiras e guias flexíveis em liga especial que trituram gordura, resíduos e raízes, limpando e raspando a parede interna dos tubos sem riscar ou perfurar as conexões e curvas da tubulação."
  },
  {
    question: "Vocês atendem condomínios comerciais e residenciais com nota fiscal?",
    answer: "Sim! Emitimos Nota Fiscal de Serviço eletrônica (NFS-e), laudos periciais com responsabilidade técnica e mantemos planos de manutenção preventiva periódica para condomínios e empresas em toda a Grande Curitiba."
  },
  {
    question: "Qual a diferença entre esgoto pluvial e esgoto sanitário?",
    answer: "A rede pluvial destina-se exclusivamente à água da chuva (calhas e ralos externos). A rede sanitária recebe dejetos de pias, vasos sanitários e chuveiros. A ligação incorreta pode gerar refluxos de mau cheiro, transbordamento de esgoto e penalidades pela Sanepar."
  }
];

const FAQInfinite: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (!searchTerm.trim()) return EXTENDED_FAQS;
    const term = searchTerm.toLowerCase();
    return EXTENDED_FAQS.filter(
      item => item.question.toLowerCase().includes(term) || item.answer.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#F7F3EC] relative overflow-hidden border-t-2 border-brand-accent/25">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs font-black uppercase tracking-wider text-brand-accent font-display">
            Central de Dúvidas Hidráulicas
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-brand-dark tracking-tight">
            Base de Conhecimento: Encanamento, Sanepar e Vazamentos
          </h2>
          <p className="text-base text-slate-700 max-w-2xl mx-auto font-sans">
            Pesquise sobre problemas hidráulicos específicos, laudos periciais e atendimento 24h em Curitiba.
          </p>
        </div>

        {/* Search input with copper border */}
        <div className="mb-8 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-brand-accent">
            <i className="fa-solid fa-magnifying-glass text-base"></i>
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Pesquisar por: Sanepar, Geofone, Vaso entupido, Registro, CIC..."
            className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-brand-accent/40 rounded-xl text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent shadow-sm transition-all"
          />
        </div>

        {/* Results Accordion List */}
        <div className="space-y-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-10 bg-white border-2 border-brand-accent/30 rounded-xl p-6 shadow-sm">
              <p className="text-slate-700 text-base mb-2">
                Nenhuma pergunta encontrada para "<strong>{searchTerm}</strong>".
              </p>
              <a 
                href="https://api.whatsapp.com/send?phone=5541985171966"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-accent hover:underline font-bold text-base inline-flex items-center gap-2"
              >
                <i className="fa-brands fa-whatsapp text-green-600"></i>
                <span>Tire sua dúvida diretamente com nossos técnicos no WhatsApp 24h!</span>
              </a>
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className="bg-white border-2 border-[#C8783A]/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Header Button with 18px text and spinning register icon */}
                  <button
                    type="button"
                    className={`w-full text-left p-5 flex justify-between items-center gap-4 transition-colors focus:ring-2 focus:ring-brand-accent ${
                      isOpen ? 'bg-brand-navy text-white' : 'text-slate-900 hover:bg-brand-slate/40'
                    }`}
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-black text-[18px] leading-snug">
                      {item.question}
                    </span>
                    
                    {/* Valve / Register Wheel Icon that spins on open */}
                    <div 
                      className={`w-10 h-10 rounded-full bg-brand-accent/25 flex items-center justify-center flex-shrink-0 transition-transform ${
                        isOpen ? 'text-brand-yellow' : 'text-[#C8783A]'
                      }`}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transitionDuration: '400ms',
                        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    >
                      <i className="fa-solid fa-dharmachakra text-lg motion-reduce:transition-none"></i>
                    </div>
                  </button>

                  {/* Animated Accordion Content with 17px text */}
                  <div 
                    className={`grid transition-all duration-300 ease-in-out motion-reduce:transition-none ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                    style={{ display: 'grid' }}
                  >
                    <div className="overflow-hidden">
                      <div className="p-5 text-[17px] text-slate-800 bg-white border-t-2 border-[#C8783A]/15 leading-relaxed font-sans">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};

export default FAQInfinite;
