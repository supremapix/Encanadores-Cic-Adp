import React from 'react';
import { CONTACT_INFO, THEME_BACKGROUNDS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-slate-950 text-white pt-24 pb-14 md:pt-32 md:pb-16 overflow-hidden border-b border-slate-800">
      {/* Background Image & Evident Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url(${THEME_BACKGROUNDS.hero})` }}
      >
        <div className="absolute inset-0 bg-slate-950/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-slate-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left / Main Content Column */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            {/* Status / Urgency Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-xs font-semibold text-slate-200">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span>Técnicos de plantão 24h em Curitiba e Região</span>
            </div>

            {/* Main H1 - Calibrated for SEO & Typography constraints */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight leading-[1.12]">
              Encanador em Curitiba 24 Horas <br />
              <span className="text-yellow-400 font-bold text-2xl sm:text-3xl lg:text-[36px]">
                Caça-Vazamento Digital & Desentupimento
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Localização de vazamentos ocultos com <strong className="text-white font-semibold">Geofone Ultrassônico</strong> sem quebrar paredes ou pisos à toa. Desentupimento técnico, reparos hidráulicos e emissão de laudo para a Sanepar.
            </p>

            {/* Key Value Points (Direct Answer block) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 pb-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 font-medium">
                <i className="fa-solid fa-check text-green-400"></i>
                <span>Sem Quebra-Quebra</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 font-medium">
                <i className="fa-solid fa-check text-green-400"></i>
                <span>Garantia de 90 Dias</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 font-medium col-span-2 sm:col-span-1">
                <i className="fa-solid fa-check text-green-400"></i>
                <span>Laudo para Sanepar</span>
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a 
                href={CONTACT_INFO.whatsappLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-95"
              >
                <i className="fa-brands fa-whatsapp text-xl"></i>
                <span>Chamar Encanador 24h</span>
              </a>

              <a 
                href={CONTACT_INFO.phoneLink}
                className="inline-flex items-center justify-center gap-2.5 bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold text-base px-5 py-3.5 rounded-xl border border-slate-700 transition-colors"
              >
                <i className="fa-solid fa-phone text-yellow-400"></i>
                <span>{CONTACT_INFO.phone}</span>
              </a>
            </div>

            {/* Location & Coverage Quick Note */}
            <p className="text-xs text-slate-400 pt-1">
              <i className="fa-solid fa-location-dot text-yellow-400 mr-1.5"></i>
              Base no <strong>CIC</strong> com atendimento em todos os bairros de Curitiba e RMC.
            </p>

          </div>

          {/* Right Column / Quick Emergency Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 sm:p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/30 text-blue-400 flex items-center justify-center text-sm">
                    <i className="fa-solid fa-triangle-exclamation"></i>
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white">Emergência Hidráulica?</h2>
                    <p className="text-[11px] text-slate-400">Diagnóstico rápido sem compromisso</p>
                  </div>
                </div>
                <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-yellow-400/20 text-yellow-300 rounded">
                  24 Horas
                </span>
              </div>

              {/* Service Matrix in Card */}
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-circle-check text-green-400 mt-0.5 text-[10px]"></i>
                  <span><strong>Conta de água alta?</strong> Detecção de vazamento invisível com Geofone.</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-circle-check text-green-400 mt-0.5 text-[10px]"></i>
                  <span><strong>Esgoto entupido?</strong> Desobstrução com máquina rotativa profissional.</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-circle-check text-green-400 mt-0.5 text-[10px]"></i>
                  <span><strong>Válvula Hydra ou Registro vazando?</strong> Troca de reparo imediata.</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-circle-check text-green-400 mt-0.5 text-[10px]"></i>
                  <span><strong>Caixa de gordura cheia?</strong> Limpeza técnica com descarte ecológico.</span>
                </li>
              </ul>

              {/* Action Inside Card */}
              <div className="pt-2 border-t border-slate-700 flex items-center justify-between">
                <div className="text-left">
                  <span className="text-[11px] text-slate-400 block">Atendimento Imediato</span>
                  <span className="text-xs font-bold text-white">Curitiba • CIC • Bairros • RMC</span>
                </div>
                <a 
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold text-xs px-4 py-2 rounded-lg transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Solicitar Agora</span>
                  <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
