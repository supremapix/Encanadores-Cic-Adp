
import React from 'react';
import { CONTACT_INFO } from '../constants';

const PHRASES = [
  "Desentupimento Técnico 24h", "Caça Vazamento Digital", "Hidrojateamento de Precisão",
  "Laudo Sanepar Imediato", "Reparo sem Quebra-Quebra", "Vídeo Inspeção de Esgoto",
  "Limpeza de Caixa de Gordura", "Atendimento Tático no CIC", "Equipe Batel Pronta Resposta",
  "Engenharia Hidráulica Portão", "Solução Água Verde Agora", "Vazamento Oculto Detectado",
  "Redução de Conta de Água", "Plantão 24h Curitiba", "Garantia Total em Contrato",
  "Técnicos Certificados", "Geofone de Alta Sensibilidade", "Desentupidora de Pias",
  "Vaso Sanitário Desobstruído", "Coluna de Prédio Limpa", "Manutenção Preventiva",
  "Troca de Barramento", "Instalação de Válvulas", "Detecção de Infiltração",
  "Perícia Hidráulica Oficial", "Atendimento em Vilas e Conjuntos", "Rapidez no Santa Felicidade",
  "Especialista em Condomínios", "Infraestrutura Industrial", "Rede Pluvial Desobstruída",
  "Caixa d'Água Higienizada", "Vazamento em Piscina", "Tubulação de Cobre Reparada",
  "PPR e CPVC Soldagem", "Emergência Hidráulica CIC", "Vila Izabel Atendimento",
  "Xaxim e Pinheirinho 24h", "Sítio Cercado Pronta Resposta", "Boqueirão Unidade Tática",
  "Uberaba e Jardim das Américas", "Tarumã e Bairro Alto", "Abranches e Pilarzinho",
  "Mercês e Bigorrilho", "Centro Cívico Emergência", "Juvevê e Cabral 24h",
  "Alto da XV e Cristo Rei", "Prado Velho e Rebouças", "Fanny e Hauer Imediato",
  "Tatuquara e Umbará Resgate", "Campo Comprido e Ecoville"
];

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#051125] pt-24 pb-12">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(30,60,114,0.2),transparent_70%)]"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] animate-float"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full mb-8 animate-fade-in">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            <span className="text-white font-black text-[10px] sm:text-[12px] uppercase tracking-[0.3em]">Engenharia Tática Ativa agora em Curitiba</span>
          </div>

          {/* Main Title with Dynamic Ticker */}
          <h1 className="text-[clamp(2.5rem,10vw,8rem)] font-[900] text-white leading-[0.9] tracking-tighter uppercase italic mb-6">
            ENGENHARIA <br />
            <div className="infinite-ticker-container my-2 sm:my-4">
              <div className="animate-infinite-scroll">
                {[...PHRASES, ...PHRASES].map((phrase, idx) => (
                  <div key={idx} className="h-[40px] sm:h-[60px] flex items-center justify-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-200 to-white text-[clamp(1.5rem,6vw,4rem)]">
                      {phrase}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            PROFISSIONAL
          </h1>

          <p className="text-white/50 text-base sm:text-2xl font-light max-w-3xl mb-12 leading-tight">
            Diagnóstico digital sem quebra-quebra. Atendimento 24h para residências, indústrias e condomínios com <strong className="text-white">precisão militar</strong>.
          </p>

          {/* Value Propositions & Price Tag */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 w-full max-w-4xl">
             <div className="glass-card p-6 rounded-3xl border border-white/5 flex flex-col items-center justify-center group hover:bg-white/10 transition-all">
                <span className="text-accent text-3xl font-black mb-1">R$ 50</span>
                <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Serviços a partir de</span>
             </div>
             <div className="glass-card p-6 rounded-3xl border border-white/5 flex flex-col items-center justify-center group hover:bg-white/10 transition-all">
                <i className="fab fa-whatsapp text-accent text-3xl mb-2"></i>
                <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest text-center">Avaliação Digital Grátis <br/> via WhatsApp</span>
             </div>
             <div className="glass-card p-6 rounded-3xl border border-white/5 flex flex-col items-center justify-center group hover:bg-white/10 transition-all">
                <span className="text-white text-3xl font-black mb-1">30min</span>
                <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Tempo médio de chegada</span>
             </div>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 w-full justify-center items-center">
            <a 
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer w-full sm:w-auto text-primary px-12 py-6 rounded-2xl font-[900] text-lg sm:text-2xl shadow-[0_20px_50px_-10px_rgba(255,235,59,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4 uppercase tracking-tighter italic"
            >
              <i className="fab fa-whatsapp text-3xl"></i> SOLICITAR TÉCNICO AGORA
            </a>
            
            <a 
              href={CONTACT_INFO.phoneLink}
              className="w-full sm:w-auto bg-white/5 border border-white/10 backdrop-blur-xl text-white px-10 py-6 rounded-2xl font-black text-lg flex items-center justify-center gap-4 hover:bg-white/10 transition-all"
            >
              <i className="fas fa-phone-alt text-accent"></i> {CONTACT_INFO.phone}
            </a>
          </div>

          {/* Social Proof Mini */}
          <div className="mt-16 flex items-center gap-4 text-white/20">
             <div className="flex -space-x-3">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 border-[#051125] bg-gray-700 flex items-center justify-center overflow-hidden">
                   <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Client" />
                 </div>
               ))}
             </div>
             <p className="text-[10px] font-black uppercase tracking-widest">Mais de 12.000 atendimentos em Curitiba</p>
          </div>

        </div>
      </div>

      {/* Background Bottom Mask */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
