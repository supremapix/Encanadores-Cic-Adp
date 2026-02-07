
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MAIN_SERVICES, CONTACT_INFO } from '../constants';
import FAQ from '../components/FAQ';
import SafeImage from '../components/SafeImage';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Serviços Especializados de Engenharia Hidráulica | ADP Curitiba";
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-primary text-white pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <SafeImage src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1920&q=80" alt="Background Engenharia" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-accent font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">Portfólio Técnico</span>
          <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter uppercase italic">Nossas <span className="text-accent">Soluções</span></h1>
          <p className="text-lg md:text-2xl text-white/50 font-light max-w-2xl mx-auto">
            Da detecção digital ao reparo estrutural. Tecnologia de ponta para a saúde hidráulica do seu imóvel.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {MAIN_SERVICES.map((service) => (
              <div key={service.id} className="group bg-gray-50 rounded-[3rem] p-12 border border-transparent hover:border-accent hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="w-20 h-20 bg-primary text-accent rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                  <i className={`fas ${service.icon} text-3xl`}></i>
                </div>
                <h2 className="text-2xl font-black text-primary mb-6 uppercase tracking-tight italic">{service.title}</h2>
                <p className="text-gray-500 font-medium mb-10 leading-relaxed">{service.description}</p>
                <Link 
                  to={`/servico/${service.id}`}
                  className="inline-flex items-center gap-3 text-primary font-black text-[10px] uppercase tracking-widest border-b-2 border-accent pb-1 hover:gap-5 transition-all"
                >
                  Saiba mais <i className="fas fa-arrow-right text-[8px]"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-black text-primary mb-6 tracking-tighter uppercase italic">Por que escolher a ADP?</h2>
             <p className="text-gray-500">Aliamos o conhecimento da engenharia civil com equipamentos digitais de última geração.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
             <div className="p-10 bg-white rounded-3xl shadow-sm border border-transparent hover:border-accent transition-all group">
                <i className="fas fa-microscope text-4xl text-accent mb-6 group-hover:scale-110 transition-transform"></i>
                <h3 className="font-black text-primary mb-4 uppercase tracking-tighter italic">Diagnóstico Digital</h3>
                <p className="text-sm text-gray-500">Localizamos vazamentos sem o método "tentativa e erro".</p>
             </div>
             <div className="p-10 bg-white rounded-3xl shadow-sm border border-transparent hover:border-accent transition-all group">
                <i className="fas fa-file-signature text-4xl text-accent mb-6 group-hover:scale-110 transition-transform"></i>
                <h3 className="font-black text-primary mb-4 uppercase tracking-tighter italic">Laudos Oficiais</h3>
                <p className="text-sm text-gray-500">Documentação técnica para Sanepar e Seguradoras.</p>
             </div>
             <div className="p-10 bg-white rounded-3xl shadow-sm border border-transparent hover:border-accent transition-all group">
                <i className="fas fa-history text-4xl text-accent mb-6 group-hover:scale-110 transition-transform"></i>
                <h3 className="font-black text-primary mb-4 uppercase tracking-tighter italic">Pronta Resposta</h3>
                <p className="text-sm text-gray-500">Unidades móveis 24h em todos os bairros de Curitiba.</p>
             </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <FAQ items={[
            { question: "Vocês atendem prédios comerciais?", answer: "Sim, somos especialistas em manutenção preventiva e corretiva para condomínios, indústrias e prédios comerciais em toda Curitiba." },
            { question: "O serviço de desentupimento tem garantia?", answer: "Sim, oferecemos garantia total de 90 dias em todos os serviços de desobstrução técnica." }
          ]} />
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
