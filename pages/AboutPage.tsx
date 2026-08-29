import React, { useEffect } from 'react';
import { CONTACT_INFO, THEME_BACKGROUNDS } from '../constants';
import TrustBar from '../components/TrustBar';
import ContactForm from '../components/ContactForm';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = "Sobre a Desentupidora ADP | ADP Engenharia Hidráulica em Curitiba";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Conheça a Desentupidora ADP e ADP Engenharia Hidráulica. Mais de uma década de experiência em caça-vazamento digital, desentupimento 24h e emissão de laudos técnicos em Curitiba.');
  }, []);

  return (
    <div className="bg-white">
      
      {/* Header Banner / Hero */}
      <section className="relative bg-slate-950 text-white pt-24 pb-12 md:pt-32 md:pb-16 border-b border-slate-800 overflow-hidden">
        {/* Background Image & Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{ backgroundImage: `url(${THEME_BACKGROUNDS.hero})` }}
        >
          <div className="absolute inset-0 bg-slate-950/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-yellow-400">
            Nossa História & Compromisso
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight">
            Sobre a Desentupidora ADP / ADP Engenharia
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Excelência técnica em diagnósticos hidráulicos não invasivos e soluções definitivas para Curitiba e Região Metropolitana.
          </p>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustBar />

      {/* Narrative Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8 text-left">
          
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Especialistas em Diagnóstico Hidráulico de Precisão
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              A <strong className="text-slate-900">{CONTACT_INFO.brandName}</strong> (operada pela {CONTACT_INFO.companyName}) nasceu da necessidade de modernizar a prestação de serviços hidráulicos em Curitiba. Abandonamos o método arcaico de quebrar pisos e paredes por adivinhação, adotando equipamentos eletrônicos de última geração.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Nossa equipe técnica atua equipada com <strong className="text-slate-900">Geofones Digitais Ultrassônicos</strong>, câmeras termográficas de alta resolução e microcâmeras robotizadas para vídeo inspeção de tubulações. Localizamos com precisão milimétrica a origem exata do vazamento, seja em redes de água fria, água quente, esgoto ou ramais subterrâneos.
            </p>
          </div>

          {/* Core Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center text-lg">
                <i className="fa-solid fa-bullseye"></i>
              </div>
              <h3 className="font-bold text-sm text-slate-900">Precisão Acústica</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Localização sem quebra-quebra desnecessário, protegendo o patrimônio do cliente.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center text-lg">
                <i className="fa-solid fa-file-signature"></i>
              </div>
              <h3 className="font-bold text-sm text-slate-900">Conformidade Sanepar</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Laudos técnicos periciais para solicitação de desconto na tarifa de esgoto.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center text-lg">
                <i className="fa-solid fa-clock-rotate-left"></i>
              </div>
              <h3 className="font-bold text-sm text-slate-900">Plantão 24h Real</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Unidades volantes com saída rápida em todos os 75 bairros e RMC.
              </p>
            </div>
          </div>

          {/* Official Entity NAP Section with Section Background */}
          <div className="relative overflow-hidden rounded-2xl p-6 sm:p-8 text-white border border-slate-800 shadow-xl">
            <div 
              className="absolute inset-0 bg-cover bg-center pointer-events-none"
              style={{ backgroundImage: `url(${THEME_BACKGROUNDS.sectionAndFooter})` }}
            >
              <div className="absolute inset-0 bg-slate-950/90"></div>
            </div>
            
            <div className="relative z-10 space-y-3">
              <h3 className="text-base font-bold text-yellow-400 uppercase tracking-wider">
                Informações Oficiais da Empresa
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
                <div>
                  <span className="text-slate-400 block">Razão Social / Marca:</span>
                  <span className="font-semibold text-white">{CONTACT_INFO.brandName} / {CONTACT_INFO.companyName}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Sede Operacional:</span>
                  <span className="font-semibold text-white">{CONTACT_INFO.address}, {CONTACT_INFO.neighborhood}</span>
                  <span className="block text-slate-400">Curitiba - PR, CEP {CONTACT_INFO.cep}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Contato Telefônico:</span>
                  <span className="font-semibold text-white">{CONTACT_INFO.phone}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">WhatsApp de Plantão:</span>
                  <span className="font-semibold text-white">{CONTACT_INFO.whatsapp}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 md:py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ContactForm />
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
