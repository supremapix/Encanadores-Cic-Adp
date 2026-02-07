
import React, { useEffect } from 'react';
import { CONTACT_INFO } from '../constants';
import SafeImage from '../components/SafeImage';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Sobre a ADP Engenharia | Liderança Hidráulica em Curitiba";
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-primary text-white pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-accent/10 rounded-full blur-[100px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase italic">Nossa <span className="text-accent">Engenharia</span></h1>
          <p className="text-lg md:text-3xl text-white/50 font-light max-w-3xl leading-tight">
            Mais do que encanadores, somos solucionadores de infraestrutura urbana em Curitiba.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/20 rounded-[3rem] blur-2xl"></div>
                <SafeImage 
                  src="https://images.unsplash.com/photo-1581244276891-997b6a550267?auto=format&fit=crop&w=1200&q=80" 
                  alt="Técnico ADP Especialista" 
                  className="relative z-10 rounded-[3rem] shadow-2xl border-8 border-white w-full h-auto min-h-[400px] object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2 space-y-8">
              <span className="text-accent font-black tracking-[0.4em] text-[10px] uppercase block">Desde o Coração de Curitiba</span>
              <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tighter leading-none uppercase italic">Tecnologia que <br /> <span className="text-secondary">preserva o imóvel.</span></h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                A ADP Engenharia nasceu da necessidade de um serviço hidráulico que respeitasse a estrutura dos imóveis. Em Curitiba, onde o clima e o solo exigem precisão, nos tornamos referência em **Caça Vazamentos Digital**.
              </p>
              <div className="grid grid-cols-2 gap-6">
                 <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                    <span className="text-4xl font-black text-primary block mb-2">24h</span>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Disponibilidade Total</span>
                 </div>
                 <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                    <span className="text-4xl font-black text-primary block mb-2">+10k</span>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Atendimentos Realizados</span>
                 </div>
              </div>
              <a 
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                className="inline-block bg-primary text-white font-black px-12 py-5 rounded-2xl shadow-xl hover:bg-accent hover:text-primary transition-all uppercase tracking-widest text-[11px] italic"
              >
                Fale com nossa Engenharia
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-32"></div>
         <div className="container mx-auto px-4 relative z-10 text-center">
            <h3 className="text-3xl md:text-6xl font-black mb-12 tracking-tighter uppercase italic">Onde a ADP está agora?</h3>
            <p className="text-white/40 text-lg mb-12 max-w-2xl mx-auto font-light">Nossas unidades móveis estão espalhadas em pontos estratégicos como CIC, Batel, Portão e Santa Felicidade para garantir o menor tempo de resposta da cidade.</p>
            <div className="flex flex-wrap justify-center gap-4 opacity-50">
               {["EQUIPAMENTOS HD", "LAUDOS DIGITAIS", "GARANTIA EM CONTRATO", "ENGENHEIROS DE CAMPO"].map((tag, i) => (
                 <span key={i} className="px-6 py-2 border border-white/20 rounded-full text-[10px] font-black uppercase tracking-widest">{tag}</span>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default AboutPage;
