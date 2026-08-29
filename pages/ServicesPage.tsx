import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MAIN_SERVICES, CONTACT_INFO, THEME_BACKGROUNDS } from '../constants';
import ContactForm from '../components/ContactForm';
import TrustBar from '../components/TrustBar';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = "Serviços de Encanador em Curitiba | Caça-Vazamento, Desentupidora & Laudos";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Catálogo completo de serviços de encanador em Curitiba. Caça-vazamento digital com geofone, desentupimento 24h, laudos técnicos para Sanepar e manutenção hidráulica.');
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
            Catálogo de Serviços Hidráulicos
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight">
            Serviços Especializados de Encanador em Curitiba
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Engenharia e tecnologia não invasiva para soluções definitivas em vazamentos, desentupimentos e manutenções hidráulicas.
          </p>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustBar />

      {/* Services List */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MAIN_SERVICES.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center text-xl">
                    <i className={`fas ${service.icon}`}></i>
                  </div>
                  
                  <h2 className="text-lg font-bold text-slate-900 leading-snug">
                    {service.title}
                  </h2>
                  
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {service.applications && (
                    <div className="pt-2 border-t border-slate-100">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                        Indicações:
                      </span>
                      <ul className="space-y-1">
                        {service.applications.map((app, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                            <i className="fa-solid fa-check text-green-600 text-[10px]"></i>
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link 
                    to={`/servico/${service.id}`}
                    className="text-xs font-bold text-blue-700 hover:text-blue-900 transition-colors inline-flex items-center gap-1"
                  >
                    <span>Saiba mais</span>
                    <i className="fa-solid fa-arrow-right text-[10px]"></i>
                  </Link>

                  <a 
                    href={CONTACT_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-green-700 hover:text-green-800 transition-colors inline-flex items-center gap-1"
                  >
                    <i className="fa-brands fa-whatsapp text-sm"></i>
                    <span>Orçamento</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ContactForm />
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
