import React, { useEffect } from 'react';
import { CONTACT_INFO, THEME_BACKGROUNDS } from '../constants';
import ContactForm from '../components/ContactForm';
import TrustBar from '../components/TrustBar';
import VideoSection from '../components/VideoSection';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = "Contato & Plantão 24h | Desentupidora ADP Curitiba";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Entre em contato com a Desentupidora ADP / ADP Engenharia Hidráulica em Curitiba. Plantão 24h no WhatsApp (41) 98517-1966 e telefone fixo (41) 3345-1194.');
  }, []);

  return (
    <div className="bg-white">
      
      {/* Header Banner / Hero */}
      <section className="relative bg-slate-950 text-white pt-24 pb-12 md:pt-32 md:pb-16 border-b border-slate-800 overflow-hidden">
        {/* Background Image & Evident Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{ backgroundImage: `url(${THEME_BACKGROUNDS.hero})` }}
        >
          <div className="absolute inset-0 bg-slate-950/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-slate-950/60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-yellow-400">
            Canais Oficiais de Atendimento
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight">
            Fale com a Central Técnica em Curitiba
          </h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Atendimento imediato 24 horas por dia, 7 dias por semana em todos os bairros e cidades da Região Metropolitana.
          </p>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustBar />

      {/* Main Contact Grid */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6 text-left">
              
              <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-5 shadow-sm">
                <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Informações de Contato (NAP)
                </h2>

                <div className="space-y-4 text-xs sm:text-sm">
                  {/* WhatsApp */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-green-50 text-green-700 flex items-center justify-center flex-shrink-0 text-base">
                      <i className="fa-brands fa-whatsapp"></i>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500 font-semibold uppercase block">WhatsApp Plantão 24h:</span>
                      <a 
                        href={CONTACT_INFO.whatsappLink}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-bold text-green-700 hover:underline text-sm sm:text-base"
                      >
                        {CONTACT_INFO.whatsapp}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center flex-shrink-0 text-base">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500 font-semibold uppercase block">Telefone Fixo Central:</span>
                      <a 
                        href={CONTACT_INFO.phoneLink}
                        className="font-bold text-slate-900 hover:underline text-sm sm:text-base"
                      >
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-yellow-50 text-yellow-700 flex items-center justify-center flex-shrink-0 text-base">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500 font-semibold uppercase block">Base Operacional:</span>
                      <p className="font-semibold text-slate-800">
                        {CONTACT_INFO.address}, {CONTACT_INFO.neighborhood}
                      </p>
                      <p className="text-slate-500 text-xs">
                        {CONTACT_INFO.city} - {CONTACT_INFO.state}, CEP {CONTACT_INFO.cep}
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0 text-base">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500 font-semibold uppercase block">E-mail Comercial:</span>
                      <span className="font-semibold text-slate-800">{CONTACT_INFO.email}</span>
                    </div>
                  </div>
                </div>

                {/* Operating hours */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <i className="fa-solid fa-clock text-green-600"></i>
                    <span>Horário de Funcionamento:</span>
                  </span>
                  <p className="text-slate-600">{CONTACT_INFO.workingHours}</p>
                </div>
              </div>

              {/* Map embed box */}
              <div className="bg-white rounded-2xl border border-slate-200 p-2 shadow-sm overflow-hidden">
                <iframe 
                  title="Localização Desentupidora ADP Encanador Curitiba"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.8679545935934!2d-49.3386126!3d-25.5138495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfb68d9047913%3A0xa94f9fa5bb5cf23c!2sR.%20Luiz%20Maltaca%2C%2036%20-%20Cidade%20Industrial%20de%20Curitiba%2C%20Curitiba%20-%20PR%2C%2081310-060!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  width="100%" 
                  height="220" 
                  style={{ border: 0, borderRadius: '0.75rem' }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Video Demonstration Section */}
      <VideoSection />

    </div>
  );
};

export default ContactPage;
