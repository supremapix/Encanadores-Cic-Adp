
import React from 'react';
import { CONTACT_INFO } from '../constants';

const PHRASES = [
  "Desentupimento Sem Quebra", "Caça Vazamento Digital", "Laudo Sanepar Imediato",
  "Atendimento Tático 24h", "Hidrojateamento Premium", "Vídeo Inspeção HD",
  "Reparo em Tubulação PPR", "Detecção de Infiltração", "Limpeza Técnica de Esgoto",
  "Garantia Total 90 Dias", "Engenheiro de Campo Ativo", "Unidade CIC em 20 min",
  "Vazamento Oculto Localizado", "Redução de Conta de Água", "Equipe Batel Pronta",
  "Solução Portão Imediata", "Água Verde Emergência", "Santa Felicidade 24h",
  "Pilarzinho e Ahú Atendimento", "Juvevê e Cabral Resgate", "Centro Cívico Hidráulica",
  "Ecoville Diagnóstico Pro", "Bigorrilho Sem Sujeira", "Mercês Reparo Rápido",
  "Prado Velho e Rebouças", "Hauer e Fanny Emergência", "Boqueirão Tático Ativo",
  "Xaxim e Pinheirinho 24h", "Sítio Cercado e Ganchinho", "Tatuquara Unidade Móvel",
  "Campo Comprido Precisão", "Fazendinha Sem Stress", "Santa Quitéria Soluções",
  "Seminário e Vila Izabel", "Jardim Botânico Reparos", "Cristo Rei e Tarumã",
  "Bairro Alto e Bacacheri", "Atuba e Santa Cândida", "Boa Vista e Barreirinha",
  "Abranches e Taboão 24h", "São Lourenço e Bom Retiro", "Centro Histórico Elite",
  "Vídeo Diagnóstico Esgoto", "Troca de Válvula Hydra", "Manutenção de Colunas",
  "Infras de Condomínios", "Limpeza Caixa Gordura", "Drenagem Pluvial Técnica",
  "Impermeabilização Estrutural", "ADP Engenharia Curitiba"
];

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-primary pt-20">
      {/* Background FX */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,235,59,0.05),transparent_70%)] animate-pulse-slow"></div>
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          
          {/* Status Badge */}
          <div className="mb-8 px-5 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl animate-fade-in flex items-center gap-3">
             <span className="w-2 h-2 bg-accent rounded-full animate-ping"></span>
             <span className="text-white font-black text-[9px] uppercase tracking-[0.4em]">Técnicos de Plantão em toda Curitiba</span>
          </div>

          {/* Main Display */}
          <div className="space-y-2 mb-10 w-full">
            <h1 className="text-[clamp(2.5rem,12vw,9rem)] font-[900] text-white leading-none tracking-tighter uppercase italic">
              ENGENHARIA <br />
              <div className="h-[1.2em] overflow-hidden my-4 relative">
                <div className="animate-infinite-scroll">
                  {[...PHRASES, ...PHRASES].map((phrase, idx) => (
                    <div key={idx} className="h-[1.2em] flex items-center justify-center">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent text-[clamp(1.5rem,8vw,5rem)]">
                        {phrase}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <span className="text-white/20">PREVENTIVA</span>
            </h1>
          </div>

          <p className="text-white/40 text-lg md:text-2xl font-light max-w-2xl mb-12 leading-tight">
            Diagnóstico digital de alta performance. <br className="hidden md:block" /> 
            Valores a partir de <strong className="text-accent font-black">R$ 50,00</strong>.
          </p>

          {/* Magnetic CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-3xl justify-center items-stretch">
            <a 
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              className="group relative flex-1 bg-accent hover:bg-white text-primary px-8 py-7 rounded-[2rem] font-black text-xl sm:text-2xl shadow-[0_20px_60px_-15px_rgba(255,235,59,0.4)] transition-all active:scale-95 flex items-center justify-center gap-4 overflow-hidden"
            >
              <div className="absolute inset-0 btn-shimmer opacity-30"></div>
              <i className="fab fa-whatsapp text-3xl group-hover:scale-110 transition-transform"></i>
              <span className="relative z-10 uppercase italic tracking-tighter">Avaliação Grátis</span>
            </a>
            
            <a 
              href={CONTACT_INFO.phoneLink}
              className="flex-1 bg-white/5 border border-white/10 text-white px-8 py-7 rounded-[2rem] font-black text-xl flex items-center justify-center gap-4 hover:bg-white/10 transition-all uppercase italic tracking-tighter"
            >
              <i className="fas fa-phone-alt text-accent"></i> {CONTACT_INFO.phone}
            </a>
          </div>

          {/* Pricing Info Mobile Overlay */}
          <div className="mt-12 p-6 glass-card rounded-3xl border border-white/5 inline-flex items-center gap-6 animate-float">
             <div className="text-left">
                <span className="text-accent font-black text-2xl block leading-none">R$ 50*</span>
                <span className="text-[8px] text-white/30 uppercase font-bold tracking-widest">Preço Base Inicial</span>
             </div>
             <div className="h-8 w-px bg-white/10"></div>
             <div className="text-left">
                <span className="text-white font-black text-lg block leading-none">WhatsApp</span>
                <span className="text-[8px] text-white/30 uppercase font-bold tracking-widest">Orçamento via Vídeo</span>
             </div>
          </div>

        </div>
      </div>

      <style>{`
        .animate-infinite-scroll {
          animation: infinite-scroll 60s linear infinite;
        }
        @keyframes infinite-scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
