import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import VideoSection from '../components/VideoSection';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import { MAIN_SERVICES, BAIRROS, CIDADES, GENERAL_FAQ, CONTACT_INFO, IMAGES } from '../constants';

const Home: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = CONTACT_INFO.logoUrl;
    e.currentTarget.className = "rounded-xl p-4 object-contain bg-gray-50 w-full h-48";
  };

  return (
    <>
      <Hero />
      <TrustBar />
      
      {/* Services Grid */}
      <section id="servicos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">Serviços Profissionais de Encanador</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Atendimento técnico especializado em **Curitiba e Região Metropolitana**. Soluções definitivas para problemas hidráulicos de qualquer complexidade.
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
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                <div className="mt-4 text-accent font-semibold flex items-center gap-1 text-sm">
                  Ver Detalhes Técnicos <i className="fas fa-arrow-right text-xs"></i>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <VideoSection />

      {/* Info Content Section for SEO */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-primary mb-6">Por que somos a melhor opção em Curitiba?</h2>
              <div className="space-y-4 text-gray-600">
                <p>Com mais de 10 anos de experiência, a **ADP Encanador** consolidou-se como líder em atendimento emergencial. Entendemos que um cano estourado ou um esgoto entupido pode parar sua casa ou empresa.</p>
                <p>Nossa equipe utiliza **Geofone Digital**, câmeras de inspeção e maquinário rotativo de última geração. Isso significa menos sujeira e resolução muito mais rápida para você.</p>
                <ul className="space-y-2">
                  <li><i className="fas fa-check text-green-500 mr-2"></i> Atendimento em Residências, Comércios e Indústrias.</li>
                  <li><i className="fas fa-check text-green-500 mr-2"></i> Laudo técnico para SANEPAR e Seguradoras.</li>
                  <li><i className="fas fa-check text-green-500 mr-2"></i> Plantão 24 horas real, inclusive feriados.</li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <img 
                src={IMAGES[0].url} 
                alt="Encanador Profissional" 
                onError={handleImageError}
                className="rounded-lg shadow-md h-48 w-full object-cover" 
              />
              <img 
                src={IMAGES[3].url} 
                alt="Tubulação Hidráulica" 
                onError={handleImageError}
                className="rounded-lg shadow-md h-48 w-full object-cover mt-8" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grids */}
      <section id="bairros" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Bairros com Atendimento Expresso</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {BAIRROS.map((bairro, idx) => (
              <Link 
                key={idx} 
                to={`/bairro/${bairro.toLowerCase().replace(/ /g, '-')}`}
                className="block bg-white hover:bg-blue-50 p-3 rounded text-center text-sm text-gray-700 font-medium hover:text-primary border hover:border-blue-200 transition-all shadow-sm"
              >
                {bairro}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="cidades" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Atendemos toda a Região Metropolitana</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
             {CIDADES.map((cidade, idx) => (
              <Link 
                key={idx} 
                to={`/cidade/${cidade.toLowerCase().replace(/ /g, '-')}`}
                className="block bg-gray-50 hover:bg-green-50 p-4 rounded shadow-sm text-center font-medium text-gray-700 hover:text-green-700 border hover:border-green-200 transition-all"
              >
                <i className="fas fa-city text-green-500 mr-2"></i> {cidade}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Contact Split */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-8 text-center lg:text-left">
                <h2 className="text-3xl font-bold text-primary mb-4">Dúvidas Técnicas</h2>
                <p className="text-gray-600">Entenda como funciona nosso trabalho e tire suas dúvidas sobre orçamentos.</p>
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
      <section className="py-12 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Não espere o pior acontecer!</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">Vazamentos e entupimentos podem causar danos estruturais graves. Chame agora e economize!</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white text-xl font-bold py-4 px-10 rounded-full shadow-lg hover:bg-green-600 transition-all"
            >
              <i className="fab fa-whatsapp mr-2"></i> FALAR COM TÉCNICO
            </a>
            <a 
              href={CONTACT_INFO.phoneLink}
              className="bg-urgent text-white text-xl font-bold py-4 px-10 rounded-full shadow-lg hover:bg-red-700 transition-all"
            >
              <i className="fas fa-phone-alt mr-2"></i> (41) 3345-1194
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;