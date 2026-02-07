import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import VideoSection from '../components/VideoSection';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import { MAIN_SERVICES, BAIRROS, CIDADES, GENERAL_FAQ, CONTACT_INFO, IMAGES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <TrustBar />
      
      {/* Introduction authority Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="text-secondary font-black tracking-widest text-xs uppercase mb-4 block">Líderes em Engenharia Hidráulica</span>
            <h2 className="text-4xl md:text-6xl font-black text-primary mb-8 tracking-tighter">Precisão Alemã no Coração de Curitiba</h2>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              Na ADP, não somos apenas desentupidores. Somos especialistas em <strong className="text-primary underline decoration-accent decoration-4">Tecnologia Não-Invasiva</strong>. 
              Localizamos problemas invisíveis aos olhos comuns e resolvemos com o menor impacto possível ao seu imóvel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-24 h-24 bg-blue-50 rounded-3xl flex items-center justify-center mx-auto mb-6 transform transition-transform group-hover:rotate-12 group-hover:bg-primary">
                <i className="fas fa-microchip text-4xl text-primary group-hover:text-white"></i>
              </div>
              <h4 className="text-xl font-black text-primary mb-4">Hardware de Ponta</h4>
              <p className="text-gray-500 text-sm">Operamos com Geofones Digitais de alta sensibilidade e Vídeo-Inspeção Robotizada.</p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 bg-blue-50 rounded-3xl flex items-center justify-center mx-auto mb-6 transform transition-transform group-hover:-rotate-12 group-hover:bg-primary">
                <i className="fas fa-file-invoice-dollar text-4xl text-primary group-hover:text-white"></i>
              </div>
              <h4 className="text-xl font-black text-primary mb-4">Economia Real</h4>
              <p className="text-gray-500 text-sm">Evitar quebras desnecessárias significa economizar em reformas, pisos e azulejos caros.</p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 bg-blue-50 rounded-3xl flex items-center justify-center mx-auto mb-6 transform transition-transform group-hover:rotate-12 group-hover:bg-primary">
                <i className="fas fa-user-shield text-4xl text-primary group-hover:text-white"></i>
              </div>
              <h4 className="text-xl font-black text-primary mb-4">Segurança Jurídica</h4>
              <p className="text-gray-500 text-sm">Emitimos notas fiscais, laudos técnicos para seguradoras e certificados de garantia oficial.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Premium Grid */}
      <section id="servicos" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tighter mb-4">Serviços <span className="text-secondary">Especializados</span></h2>
              <p className="text-gray-600 font-medium">Soluções definitivas para residências, condomínios de alto padrão e indústrias.</p>
            </div>
            <a href={CONTACT_INFO.whatsappLink} className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">
              Ver Todos os Serviços <i className="fas fa-arrow-right-long text-accent"></i>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MAIN_SERVICES.map((service) => (
              <Link 
                key={service.id} 
                to={`/servico/${service.id}`}
                className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-2xl transition-all hover:-translate-y-3 group border border-gray-100 flex flex-col items-start"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                  <i className={`fas ${service.icon} text-2xl text-primary group-hover:text-white`}></i>
                </div>
                <h3 className="text-2xl font-black text-gray-800 mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">{service.description}</p>
                <div className="w-full flex justify-between items-center pt-6 border-t border-gray-50">
                   <span className="text-xs font-black uppercase tracking-widest text-accent">Saber Mais</span>
                   <i className="fas fa-chevron-right text-xs text-gray-300 group-hover:text-primary group-hover:translate-x-2 transition-all"></i>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <VideoSection />

      {/* Tech Section */}
      <section id="tecnologia" className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
               <span className="text-accent font-black tracking-widest text-xs uppercase mb-4 block">Diferencial Tecnológico</span>
               <h2 className="text-4xl md:text-6xl font-black mb-8 leading-none tracking-tighter">Ouvimos o que seus <br /> canos estão dizendo.</h2>
               <p className="text-xl text-white/70 mb-10 leading-relaxed font-light">
                 Nossa tecnologia de <strong>Geofone Digital</strong> permite "escutar" vazamentos minúsculos através de concreto e asfalto. 
                 Já a nossa <strong>Vídeo-Inspeção</strong> mapeia o interior das tubulações em HD, identificando rachaduras e entupimentos antes de qualquer intervenção.
               </p>
               <div className="grid grid-cols-2 gap-8">
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                     <h4 className="font-black text-accent mb-2">99.8%</h4>
                     <p className="text-xs text-white/50 uppercase tracking-widest">Precisão de Localização</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                     <h4 className="font-black text-accent mb-2">+10k</h4>
                     <p className="text-xs text-white/50 uppercase tracking-widest">Clientes Atendidos</p>
                  </div>
               </div>
            </div>
            <div className="lg:w-1/2 relative">
               <img 
                 src={IMAGES[6].url} 
                 className="rounded-[40px] shadow-2xl border-8 border-white/10 transform rotate-2 hover:rotate-0 transition-transform duration-700" 
                 alt="Tecnologia Geofone Digital" 
               />
               <div className="absolute -bottom-10 -left-10 bg-accent text-primary p-10 rounded-3xl shadow-2xl animate-pulse">
                  <i className="fas fa-bolt text-4xl mb-4"></i>
                  <p className="font-black leading-none">PRONTO <br /> ATENDIMENTO</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section with Authority */}
      <section id="bairros" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-primary tracking-tighter mb-4">Onde Estamos em Curitiba</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Equipes móveis estrategicamente posicionadas para garantir a chegada em tempo recorde.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {BAIRROS.map((bairro, idx) => (
              <Link 
                key={idx} 
                to={`/bairro/${bairro.toLowerCase().replace(/ /g, '-')}`}
                className="group flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-primary transition-all shadow-sm"
              >
                <span className="text-sm font-bold text-gray-700 group-hover:text-white transition-colors">{bairro}</span>
                <i className="fas fa-chevron-right text-[10px] text-gray-300 group-hover:text-accent group-hover:translate-x-1 transition-all"></i>
              </Link>
            ))}
          </div>

          <div className="mt-20 p-12 bg-gradient-to-br from-gray-50 to-white rounded-[40px] border border-gray-100 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-grow">
                <h3 className="text-2xl font-black text-primary mb-2">Atendimento Metropolitano</h3>
                <p className="text-gray-500">Operamos em todas as cidades da Região Metropolitana com a mesma agilidade.</p>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {CIDADES.slice(0, 8).map((cidade, idx) => (
                  <Link 
                    key={idx} 
                    to={`/cidade/${cidade.toLowerCase().replace(/ /g, '-')}`}
                    className="px-6 py-3 bg-white border border-gray-100 rounded-full text-xs font-bold text-gray-600 hover:border-accent hover:text-primary transition-all shadow-sm"
                  >
                    {cidade}
                  </Link>
                ))}
              </div>
          </div>
        </div>
      </section>

      {/* Final Premium CTA */}
      <section className="py-32 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
             <h2 className="text-5xl md:text-8xl font-black text-white mb-8 leading-none tracking-tighter">
               PARE DE <span className="text-accent underline decoration-white/20">SOFRER</span> <br /> COM VAZAMENTOS.
             </h2>
             <p className="text-xl md:text-3xl text-white/80 mb-12 font-light">
               Sua casa merece o cuidado de especialistas, não de amadores. Chame agora e receba um diagnóstico técnico profissional.
             </p>
             <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
               <a 
                 href={CONTACT_INFO.whatsappLink}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full md:w-auto bg-accent text-primary text-2xl font-black py-8 px-16 rounded-[32px] shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-4 group"
               >
                 <i className="fab fa-whatsapp text-4xl group-hover:rotate-12 transition-transform"></i> 
                 SOLICITAR DIAGNÓSTICO
               </a>
               <div className="text-left">
                  <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-2 ml-1">Atendimento Urgente</p>
                  <a href={CONTACT_INFO.phoneLink} className="text-4xl font-black text-white hover:text-accent transition-colors">
                    (41) 3345-1194
                  </a>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
             <div>
               <ContactForm />
             </div>
             <div>
               <div className="mb-12">
                 <h2 className="text-4xl font-black text-primary tracking-tighter mb-4">Dúvidas Técnicas?</h2>
                 <p className="text-gray-500">Tudo o que você precisa saber sobre o processo de Engenharia ADP.</p>
               </div>
               <FAQ items={GENERAL_FAQ} title="" />
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;