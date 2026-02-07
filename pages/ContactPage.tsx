
import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import { CONTACT_INFO, TRUST_BADGES } from '../constants';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contato | ADP Engenharia Hidráulica Curitiba";
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Header Seção */}
      <section className="bg-primary text-white pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-accent font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">Central de Chamados</span>
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase italic">Fale <span className="text-accent">Conosco</span></h1>
          <p className="text-lg md:text-2xl text-white/40 font-light max-w-2xl italic">
            Atendimento tático imediato para residências, condomínios e indústrias em Curitiba e RMC.
          </p>
        </div>
      </section>

      <section className="py-24 -mt-16 relative z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Informações de Contato */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a href={CONTACT_INFO.whatsappLink} className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:border-accent transition-all group">
                  <div className="w-14 h-14 bg-green-500 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <i className="fab fa-whatsapp text-3xl"></i>
                  </div>
                  <h3 className="font-black text-primary text-xl mb-2 uppercase italic">WhatsApp 24h</h3>
                  <p className="text-gray-500 font-bold text-sm">{CONTACT_INFO.whatsapp}</p>
                </a>

                <a href={CONTACT_INFO.phoneLink} className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:border-accent transition-all group">
                  <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <i className="fas fa-phone text-2xl"></i>
                  </div>
                  <h3 className="font-black text-primary text-xl mb-2 uppercase italic">Telefone Fixo</h3>
                  <p className="text-gray-500 font-bold text-sm">{CONTACT_INFO.phone}</p>
                </a>
              </div>

              <div className="p-10 bg-primary text-white rounded-[3rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                   <i className="fas fa-location-dot text-8xl"></i>
                </div>
                <h3 className="text-2xl font-black mb-6 uppercase italic text-accent">Nossa Base</h3>
                <div className="space-y-4 relative z-10">
                  <p className="text-xl font-light leading-relaxed">
                    {CONTACT_INFO.address}<br />
                    Curitiba - PR
                  </p>
                  <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                    <span className="w-2 h-2 bg-accent rounded-full animate-ping"></span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/50">Unidade CIC de Pronta Resposta</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-black text-primary text-[10px] uppercase tracking-widest mb-6 px-2 italic">Compromisso ADP</h4>
                {TRUST_BADGES.map((badge, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm">
                    <i className={`fas ${badge.icon} text-accent text-xl`}></i>
                    <span className="text-[10px] font-black text-gray-700 uppercase tracking-widest">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Formulário */}
            <div className="w-full lg:w-1/2">
              <div className="sticky top-32">
                <div className="bg-white p-2 rounded-[3.5rem] shadow-2xl border border-gray-100 overflow-hidden">
                  <ContactForm />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white aspect-[21/9] grayscale hover:grayscale-0 transition-all duration-1000">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.735824584281!2d-49.3364239!3d-25.5138495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfca9142f36f9%3A0xc0f6f0f0f0f0f0f0!2sRua%20Luiz%20Maltaca%2C%2036%20-%20Curitiba%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1716220000000!5m2!1spt-BR!2sbr" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
