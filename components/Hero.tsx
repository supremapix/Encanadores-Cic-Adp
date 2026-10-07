import React, { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  // Counters state
  const [years, setYears] = useState(0);
  const [calls, setCalls] = useState(0);
  const [bairros, setBairros] = useState(0);
  const [isWaterFlowing, setIsWaterFlowing] = useState(false);
  const [isButtonPulsing, setIsButtonPulsing] = useState(false);

  // Split headline for word-by-word animation
  const headlineWords = "Encanador em Curitiba 24 Horas".split(" ");
  const subHeadlineHighlight = "Caça-Vazamento Digital & Desentupimento";

  // Rain droplets state
  const [droplets, setDroplets] = useState<{ id: number; left: string; delay: string; duration: string }[]>([]);

  useEffect(() => {
    // Generate randomized discreet droplets
    const generatedDroplets = Array.from({ length: 8 }).map((_, idx) => ({
      id: idx,
      left: `${10 + Math.random() * 80}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${4 + Math.random() * 4}s`
    }));
    setDroplets(generatedDroplets);

    // Animate water flow sequence
    const flowTimer = setTimeout(() => {
      setIsWaterFlowing(true);
    }, 1200);

    // Turn on pulse after water arrives (takes approx 1.8s)
    const pulseTimer = setTimeout(() => {
      setIsButtonPulsing(true);
    }, 3000);

    // Counter animations
    const animateCounters = () => {
      const duration = 2000; // 2 seconds
      const start = performance.now();

      const update = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing out quadratic
        const ease = progress * (2 - progress);

        setYears(Math.floor(ease * 15));
        setCalls(Math.floor(ease * 8500));
        setBairros(Math.floor(ease * 75));

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      };

      requestAnimationFrame(update);
    };

    // Delay start of counters slightly for visual rhythm
    const counterTimer = setTimeout(animateCounters, 500);

    return () => {
      clearTimeout(flowTimer);
      clearTimeout(pulseTimer);
      clearTimeout(counterTimer);
    };
  }, []);

  return (
    <section className="relative bg-brand-dark text-white pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b-4 border-brand-accent blueprint-grid-dark">
      
      {/* Cotas e marcações estilo planta técnica (blueprint) sutil */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-25">
        {/* Horizontal dimension lines */}
        <div className="absolute top-12 left-6 right-6 border-t border-brand-accent/20 flex justify-between text-[10px] font-mono text-brand-accent/60">
          <span>H_COORD: 25.5138° S</span>
          <span>W_COORD: 49.3364° W</span>
        </div>
        <div className="absolute bottom-12 left-6 right-6 border-b border-brand-accent/20 flex justify-between text-[10px] font-mono text-brand-accent/60">
          <span>ELEVATION: 934m (CWB)</span>
          <span>FLOW_RATE: Max 120L/m</span>
        </div>
        
        {/* Isometric blueprint lines */}
        <svg className="absolute inset-0 w-full h-full text-brand-accent/5" fill="none">
          <line x1="0" y1="10%" x2="100%" y2="80%" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
          <line x1="100%" y1="10%" x2="0" y2="80%" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
          {/* Faint circles indicating plumbing layouts */}
          <circle cx="50%" cy="50%" r="200" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="85%" cy="30%" r="80" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
        </svg>
      </div>

      {/* Discrete slow-falling water droplets */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {droplets.map((d) => (
          <div
            key={d.id}
            className="absolute top-[-20px] w-[2px] h-[15px] bg-sky-400/40 rounded-full"
            style={{
              left: d.left,
              animationName: 'drip',
              animationDuration: d.duration,
              animationDelay: d.delay,
              animationIterationCount: 'infinite',
              animationTimingFunction: 'linear'
            }}
          />
        ))}
      </div>

      {/* Inline styles for custom animations (drip, fadeInUp, spinRegister, pulse) */}
      <style>{`
        @keyframes drip {
          0% { transform: translateY(-20px); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateY(120vh); opacity: 0; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spinRegister {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulseButton {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(245, 197, 24, 0.4); }
          50% { transform: scale(1.04); box-shadow: 0 0 15px 5px rgba(245, 197, 24, 0.15); }
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-spin-valve {
          animation: spinRegister 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .pulse-heavy {
          animation: pulseButton 2s infinite ease-in-out;
        }
      `}</style>

      {/* Mobile Plumbing Pipe: positioned strictly along the side margin, max 0.30 opacity, never crossing H1 or paragraph */}
      <div className="md:hidden absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 400 800" preserveAspectRatio="none" fill="none">
          {/* Copper pipe hugging the right border */}
          <path 
            d="M 390,0 L 390,320 Q 390,350 360,350 L 340,350 Q 310,350 310,390 L 310,800" 
            stroke="#C8783A" 
            strokeWidth="6" 
            strokeLinecap="round" 
            opacity="0.30"
          />
          <circle cx="390" cy="320" r="6" fill="#B35F24" stroke="#F5C518" strokeWidth="1.5" opacity="0.35" />
          {isWaterFlowing && (
            <path 
              d="M 390,0 L 390,320 Q 390,350 360,350 L 340,350 Q 310,350 310,390 L 310,800" 
              stroke="#51A8D9" 
              strokeWidth="3" 
              strokeLinecap="round" 
              className="animate-water-flow"
              opacity="0.30"
            />
          )}
        </svg>
      </div>

      {/* Desktop Plumbing Pipe: running across background with max 0.35 opacity behind text */}
      <div className="hidden md:block absolute inset-0 pointer-events-none select-none z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none">
          {/* Copper Pipe base */}
          <path 
            d="M -50,150 Q 200,80 500,200 T 1000,100 T 1500,250" 
            stroke="#C8783A" 
            strokeWidth="8" 
            strokeLinecap="round" 
            opacity="0.35"
          />
          {/* Copper joints / elbows (visual markers) */}
          <circle cx="500" cy="200" r="9" fill="#B35F24" stroke="#F5C518" strokeWidth="2" opacity="0.35" />
          <circle cx="1000" cy="100" r="9" fill="#B35F24" stroke="#F5C518" strokeWidth="2" opacity="0.35" />

          {/* Water flowing inside */}
          {isWaterFlowing && (
            <path 
              d="M -50,150 Q 200,80 500,200 T 1000,100 T 1500,250" 
              stroke="#51A8D9" 
              strokeWidth="4" 
              strokeLinecap="round" 
              className="animate-water-flow"
              opacity="0.35"
            />
          )}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left / Main Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status / Urgency Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-brand-navy border border-brand-accent/40 text-xs font-bold text-slate-100 shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse"></span>
              <span className="tracking-wide uppercase font-display">TÉCNICOS DE PLANTÃO 24H EM CURITIBA</span>
            </div>

            {/* Main H1 - Word by word staggered entry */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-display font-black tracking-tight leading-[1.08]">
              <span className="block">
                {headlineWords.map((word, idx) => (
                  <span
                    key={idx}
                    className="inline-block mr-2.5 animate-fade-in-up"
                    style={{ animationDelay: `${idx * 60}ms` }}
                  >
                    {word}
                  </span>
                ))}
              </span>
              
              <span 
                className="text-brand-yellow font-display font-black text-3xl sm:text-4xl lg:text-[40px] block mt-2 animate-fade-in-up"
                style={{ animationDelay: `${headlineWords.length * 60 + 100}ms` }}
              >
                {subHeadlineHighlight}
              </span>
            </h1>

            {/* Subheadline */}
            <p 
              className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed font-sans font-medium animate-fade-in-up"
              style={{ animationDelay: `${headlineWords.length * 60 + 300}ms` }}
            >
              Localização de vazamentos ocultos com <strong className="text-brand-yellow font-extrabold underline decoration-brand-accent decoration-2 underline-offset-4">Geofone Ultrassônico</strong> sem quebrar paredes ou pisos à toa. Desentupimento técnico, reparos hidráulicos e emissão de laudo técnico oficial para a Sanepar.
            </p>

            {/* Seals "Sem Quebra-Quebra / Garantia 90 Dias / Laudo Sanepar" */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {[
                { label: "Sem Quebra-Quebra", icon: "fa-ban" },
                { label: "Garantia 90 Dias", icon: "fa-shield-halved" },
                { label: "Laudo Sanepar", icon: "fa-file-signature" }
              ].map((seal, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-lg bg-brand-navy/60 border border-brand-accent/20 shadow-md animate-fade-in-up"
                  style={{ animationDelay: `${headlineWords.length * 60 + 500 + (idx * 200)}ms` }}
                >
                  <div className="w-9 h-9 rounded-full bg-brand-accent text-brand-dark flex items-center justify-center text-sm flex-shrink-0 shadow-sm">
                    <i 
                      className={`fa-solid ${seal.icon} animate-spin-valve`}
                      style={{ animationDelay: `${headlineWords.length * 60 + 600 + (idx * 200)}ms` }}
                    ></i>
                  </div>
                  <span className="text-sm font-extrabold text-white leading-tight font-display">{seal.label}</span>
                </div>
              ))}
            </div>

            {/* Primary & Secondary CTAs */}
            <div 
              className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up"
              style={{ animationDelay: `${headlineWords.length * 60 + 1200}ms` }}
            >
              <a 
                href={CONTACT_INFO.whatsappLink}
                target="_blank" 
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-3 bg-brand-green hover:bg-green-600 text-white font-black text-lg px-8 py-4.5 rounded-xl shadow-lg transition-transform active:scale-95 border-2 border-green-300 ${isButtonPulsing ? 'pulse-heavy' : ''}`}
                aria-label="Falar com o encanador plantonista no WhatsApp"
              >
                <i className="fa-brands fa-whatsapp text-2xl"></i>
                <span className="font-display">Chamar Encanador 24h</span>
              </a>

              <a 
                href={CONTACT_INFO.phoneLink}
                className="inline-flex items-center justify-center gap-2.5 bg-brand-navy hover:bg-brand-navy/80 text-brand-light font-bold text-lg px-6 py-4.5 rounded-xl border-2 border-brand-accent/50 transition-colors"
                aria-label={`Ligar para nós no telefone fixo ${CONTACT_INFO.phone}`}
              >
                <i className="fa-solid fa-phone text-brand-yellow"></i>
                <span>Ligar: {CONTACT_INFO.phone}</span>
              </a>
            </div>

            {/* Location & Coverage Quick Note */}
            <p 
              className="text-sm text-slate-300 pt-2 flex items-center gap-2 animate-fade-in-up"
              style={{ animationDelay: `${headlineWords.length * 60 + 1400}ms` }}
            >
              <i className="fa-solid fa-location-dot text-brand-yellow text-base"></i>
              <span>Base operacional no <strong className="text-white">CIC</strong>. Atendimento imediato em Curitiba e Região Metropolitana.</span>
            </p>

          </div>

          {/* Right Column / Quick Emergency Card & Counters */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Stats Counters (High Legibility, Elderly Friendly) */}
            <div className="grid grid-cols-3 gap-3 bg-brand-navy/40 border border-brand-accent/20 rounded-xl p-4 shadow-lg text-center">
              <div>
                <span className="block text-2xl sm:text-3xl font-display font-black text-brand-yellow font-mono tabular-nums">
                  {years}
                </span>
                <span className="text-[11px] font-bold text-slate-200 tracking-wider uppercase block mt-1 leading-tight">
                  Anos de<br />Sucesso
                </span>
              </div>
              <div className="border-l border-brand-accent/20">
                <span className="block text-2xl sm:text-3xl font-display font-black text-brand-yellow font-mono tabular-nums">
                  {calls.toLocaleString('pt-BR')}+
                </span>
                <span className="text-[11px] font-bold text-slate-200 tracking-wider uppercase block mt-1 leading-tight">
                  Visitas<br />Feitas
                </span>
              </div>
              <div className="border-l border-brand-accent/20">
                <span className="block text-2xl sm:text-3xl font-display font-black text-brand-yellow font-mono tabular-nums">
                  {bairros}
                </span>
                <span className="text-[11px] font-bold text-slate-200 tracking-wider uppercase block mt-1 leading-tight">
                  Bairros<br />Atendidos
                </span>
              </div>
            </div>

            {/* Quick Emergency Card */}
            <div className="bg-brand-navy border-2 border-brand-accent rounded-2xl p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-brand-accent/30 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/20 text-brand-yellow flex items-center justify-center text-lg">
                    <i className="fa-solid fa-triangle-exclamation"></i>
                  </div>
                  <div className="text-left">
                    <h2 className="text-base font-black text-white font-display">Emergência Hidráulica?</h2>
                    <p className="text-xs text-slate-300">Nossa equipe volante sai imediatamente</p>
                  </div>
                </div>
                <span className="text-xs uppercase tracking-wider font-black px-3 py-1 bg-brand-yellow text-brand-dark rounded-md shadow-sm font-display">
                  24 HORAS
                </span>
              </div>

              {/* Service Matrix in Card */}
              <ul className="space-y-3 text-sm text-slate-200 text-left">
                <li className="flex items-start gap-2.5">
                  <i className="fa-solid fa-circle-check text-brand-green mt-0.5 text-base"></i>
                  <span><strong>Conta de água subiu demais?</strong> Caça-vazamento eletrônico sem quebrar piso.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="fa-solid fa-circle-check text-brand-green mt-0.5 text-base"></i>
                  <span><strong>Privada ou ralo transbordando?</strong> Desentupimento mecânico limpo.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="fa-solid fa-circle-check text-brand-green mt-0.5 text-base"></i>
                  <span><strong>Vazamento em torneira ou descarga?</strong> Conserto rápido com peças originais.</span>
                </li>
              </ul>

              {/* Action Inside Card */}
              <div className="pt-3 border-t border-brand-accent/30 flex items-center justify-between gap-4">
                <div className="text-left">
                  <span className="text-[11px] text-slate-300 uppercase font-black block tracking-wider font-display">Curitiba e RMC</span>
                  <span className="text-xs font-bold text-brand-yellow">Visitas em até 35 min</span>
                </div>
                <a 
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-brand-yellow hover:bg-brand-yellow/90 text-brand-dark font-black text-sm px-5 py-3 rounded-lg transition-colors inline-flex items-center gap-2 shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-brand-yellow font-display"
                >
                  <span>Chamar Agora</span>
                  <i className="fa-solid fa-arrow-right text-xs"></i>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
