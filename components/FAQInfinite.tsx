import React, { useState, useMemo } from 'react';
import { FAQItem } from '../types';
import { GENERAL_FAQS } from '../constants';

const EXTENDED_FAQS: FAQItem[] = [
  ...GENERAL_FAQS,
  {
    question: "O que fazer se o hidrômetro continuar girando com todas as torneiras fechadas?",
    answer: "Isso é sinal inequívoco de vazamento oculto. Feche o registro do cavalete para estancar a perda de água e chame imediatamente a equipe da Desentupidora ADP para localizar a fuga com o Geofone Digital."
  },
  {
    question: "Quanto custa o serviço de caça-vazamento em Curitiba?",
    answer: "O valor da inspeção técnica depende do porte do imóvel (casa térrea, sobrado, comércio ou condomínio) e da extensão da rede hidráulica. Fazemos avaliação prévia transparente via WhatsApp com orçamento sem surpresas."
  },
  {
    question: "Como é feita a desobstrução de canos sem danificar o PVC?",
    answer: "Utilizamos máquinas elétricas rotativas dotadas de ponteiras especiais que removem gordura, raízes e detritos preservando a integridade das conexões e curvas da tubulação."
  },
  {
    question: "Vocês atendem condomínios comerciais e residenciais com nota fiscal?",
    answer: "Sim! Emitimos Nota Fiscal de Serviço, laudos técnicos com ART/responsabilidade técnica e contratos de manutenção preventiva periódica para condomínios em toda a Grande Curitiba."
  },
  {
    question: "Qual a diferença entre esgoto pluvial e esgoto sanitário?",
    answer: "A rede pluvial destina-se exclusivamente à água da chuva (calhas e ralos externos). A rede sanitária recebe dejetos de pias, vasos sanitários e chuveiros. A ligação incorreta pode gerar refluxos e multas pela Sanepar."
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

  return (
    <section className="py-12 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-8 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
            Central de Dúvidas Hidráulicas
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Base de Conhecimento: Encanamento, Sanepar e Vazamentos
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Pesquise sobre problemas hidráulicos específicos, laudos e atendimento em Curitiba.
          </p>
        </div>

        {/* Search input */}
        <div className="mb-6 relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <i className="fa-solid fa-magnifying-glass text-sm"></i>
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Pesquisar por: Sanepar, Geofone, Vaso entupido, Registro, CIC..."
            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
          />
        </div>

        {/* Results */}
        <div className="space-y-3">
          {filteredItems.length === 0 ? (
            <div className="text-center py-8 text-slate-500 text-sm">
              Nenhuma pergunta encontrada para "{searchTerm}". <br />
              <span className="text-blue-600 font-semibold">Tire sua dúvida diretamente com nossos técnicos no WhatsApp 24h!</span>
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className="border border-slate-200 rounded-xl overflow-hidden shadow-sm"
                >
                  <button
                    type="button"
                    className={`w-full text-left p-4 flex justify-between items-center gap-3 transition-colors ${
                      isOpen ? 'bg-slate-900 text-white' : 'bg-white text-slate-800 hover:bg-slate-50'
                    }`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="font-bold text-xs sm:text-sm">
                      {item.question}
                    </span>
                    <i className={`fa-solid fa-chevron-down text-xs transition-transform ${isOpen ? 'rotate-180 text-yellow-400' : 'text-slate-400'}`}></i>
                  </button>
                  {isOpen && (
                    <div className="p-4 bg-slate-50 text-xs sm:text-sm text-slate-700 border-t border-slate-200 leading-relaxed">
                      {item.answer}
                    </div>
                  )}
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
