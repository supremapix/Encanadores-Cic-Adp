import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import VideoSection from '../components/VideoSection';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import { MAIN_SERVICES, BAIRROS, CIDADES, GENERAL_FAQ, CONTACT_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      
      {/* Services Grid */}
      <section id="servicos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">Nossos Serviços</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Equipe especializada em **encanador 24h curitiba**, oferecendo soluções rápidas e definitivas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MAIN_SERVICES.map((service) => (
              <Link 
                key={service.id} 
                to={`/servico/${service.id}`}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <i className={`fas ${service.icon} text-2xl text-primary group-hover:text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
                <div className="mt-4 text-accent font-semibold flex items-center gap-1 text-sm">
                  Saiba mais <i className="fas fa-arrow-right text-xs"></i>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <VideoSection />

      {/* Keywords Section */}
      <section className="py-10 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-6">O que você precisa agora?</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Encanador 24h Curitiba", "Desentupimento urgente", "Caça-vazamentos", 
              "Hidrojateamento", "Limpeza de Fossa", "Troca de Tubulação", 
              "Conserto de Cano", "Desentupidora no Centro", "Emergência Hidráulica"
            ].map((keyword, i) => (
              <span key={i} className="bg-white/10 hover:bg-accent hover:text-primary px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-default border border-white/20">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Grids */}
      <section id="bairros" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Bairros Atendidos em Curitiba</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {BAIRROS.map((bairro, idx) => (
              <Link 
                key={idx} 
                to={`/bairro/${bairro.toLowerCase().replace(/ /g, '-')}`}
                className="block bg-gray-50 hover:bg-blue-50 p-3 rounded text-center text-sm text-gray-700 font-medium hover:text-primary border hover:border-blue-200 transition-colors"
              >
                <i className="fas fa-map-pin text-xs mr-1 text-red-400"></i> {bairro}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="cidades" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Cidades da Região Metropolitana</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
             {CIDADES.map((cidade, idx) => (
              <Link 
                key={idx} 
                to={`/cidade/${cidade.toLowerCase().replace(/ /g, '-')}`}
                className="block bg-white hover:bg-green-50 p-4 rounded shadow-sm text-center font-medium text-gray-700 hover:text-green-700 border hover:border-green-200 transition-colors"
              >
                <i className="fas fa-city text-green-500 mr-2"></i> {cidade}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Contact Split */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">Dúvidas Frequentes</h2>
                <p className="text-gray-600">Tudo sobre nossos serviços de **Encanador 24h**.</p>
              </div>
              <FAQ items={GENERAL_FAQ} title="" />
            </div>
            <div className="lg:sticky lg:top-24 h-fit">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-urgent text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Precisa de Encanador Agora?</h2>
          <p className="text-xl mb-8 opacity-90">Não deixe o problema piorar. Atendemos em 30 minutos!</p>
          <a 
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-urgent text-xl font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
          >
            <i className="fab fa-whatsapp"></i> FALAR COM TÉCNICO
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;