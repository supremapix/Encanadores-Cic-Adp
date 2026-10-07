import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, MAIN_SERVICES } from '../constants';
import PremiumLogo from './PremiumLogo';

const POPULAR_NEIGHBORHOODS = [
  { name: 'CIC (Cidade Industrial)', slug: 'cidade-industrial-cic' },
  { name: 'Batel', slug: 'batel' },
  { name: 'Água Verde', slug: 'agua-verde' },
  { name: 'Portão', slug: 'portao' },
  { name: 'Santa Felicidade', slug: 'santa-felicidade' },
  { name: 'Boa Vista', slug: 'boa-vista' },
  { name: 'Bigorrilho (Champagnat)', slug: 'bigorrilho' },
  { name: 'Centro', slug: 'centro' },
  { name: 'Boqueirão', slug: 'boqueirao' },
  { name: 'Pinheirinho', slug: 'pinheirinho' },
  { name: 'Sítio Cercado', slug: 'sitio-cercado' },
  { name: 'Cajuru', slug: 'cajuru' },
];

const POPULAR_CITIES = [
  { name: 'Curitiba', slug: 'curitiba' },
  { name: 'São José dos Pinhais', slug: 'sao-jose-dos-pinhais' },
  { name: 'Pinhais', slug: 'pinhais' },
  { name: 'Colombo', slug: 'colombo' },
  { name: 'Araucária', slug: 'araucaria' },
  { name: 'Fazenda Rio Grande', slug: 'fazenda-rio-grande' },
];

const Footer: React.FC = () => {
  const [activeServiceIdx, setActiveServiceIdx] = useState<number | null>(null);
  const [footerInView, setFooterInView] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFooterInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const simpleExplanations: Record<string, string> = {
    'caca-vazamento-digital': 'Descobrimos vazamentos ocultos sob pisos e paredes usando aparelho com som de ultra-precisão sem quebra-quebra. Evitamos que você precise quebrar seu imóvel sem necessidade.',
    'desentupidora-24h': 'Desentupimos ralos, pias, esgoto e vasos com cabos elétricos de ponta. A sujeira é triturada sem danificar ou furar o encanamento de PVC da sua casa.',
    'limpeza-caixa-gordura': 'Limpamos a caixa de gordura acumulada da cozinha. Evita transbordamentos, mau cheiro forte e impede o aparecimento de insetos e baratas.',
    'hidrojateamento-pressao': 'Limpeza profunda com jato d\'água de alta potência. Indicado para canos com gordura solidificada, pedras de sabão ou raízes de árvores.',
    'video-inspecao-esgoto': 'Colocamos uma câmera de vídeo profissional com luz forte dentro do cano. Conseguimos ver se há rachaduras ou quebras estruturais profundas.',
    'laudo-tecnico-sanepar': 'Documento oficial assinado por responsável técnico. Comprove para a Sanepar que o vazamento foi consertado e peça desconto e abatimento na tarifa de esgoto.',
    'limpeza-caixa-dagua': 'Lavagem e desinfecção técnica do seu reservatório. Garanta a qualidade e potabilidade da água que sua família bebe e usa para tomar banho.',
    'desentupimento-vaso-sanitario': 'Desentupimos o vaso sanitário com pontas de mola espiral exclusivas. Resolvemos o transbordo sem riscar a louça sanitária ou quebrar nada.',
    'manutencao-hidraulica-predial': 'Consertos em geral: troca de registros que não fecham, reparo em válvulas Hydra e Docol, barriletes e toda a encanação de água ou esgoto.',
  };

  const toggleService = (idx: number) => {
    setActiveServiceIdx(activeServiceIdx === idx ? null : idx);
  };

  return (
    <footer 
      ref={footerRef}
      className="relative bg-brand-dark text-slate-300 text-sm border-t-4 border-brand-accent overflow-hidden"
    >
      
      {/* 1. HORIZONTAL SVG PIPE at the top of the footer where water flows when in view */}
      <div className="relative h-6 bg-brand-navy/40 w-full overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" fill="none">
          {/* Main pipe body */}
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#C8783A" strokeWidth="8" />
          {/* Water flow animate-water-flow if footer is in view */}
          {footerInView && (
            <line 
              x1="0" 
              y1="50%" 
              x2="100%" 
              y2="50%" 
              stroke="#51A8D9" 
              strokeWidth="3" 
              className="animate-water-flow"
            />
          )}
        </svg>
      </div>

      {/* 2. Top Banner with LARGE Phone and WhatsApp for Elderly Usability */}
      <div className="relative bg-brand-navy py-8 px-4 sm:px-6 lg:px-8 border-b border-brand-accent/20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-display font-black text-white">
              Precisa de ajuda urgente com encanamento?
            </h3>
            <p className="text-sm text-slate-200">
              Estamos de plantão 24h inclusive sábados, domingos e feriados em Curitiba e Região Metropolitana.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            {/* LARGE Phone Button (28px+) */}
            <a 
              href={CONTACT_INFO.phoneLink}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-brand-dark hover:bg-brand-dark/80 border-2 border-brand-accent text-brand-light font-black text-2xl tracking-tight transition-transform active:scale-95"
            >
              <i className="fa-solid fa-phone text-brand-yellow"></i>
              <span className="font-mono tabular-nums">{CONTACT_INFO.phone}</span>
            </a>

            {/* LARGE WhatsApp Button (28px+) */}
            <a 
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-brand-green hover:bg-green-600 text-white font-black text-2xl tracking-tight transition-transform active:scale-95 shadow-md border-2 border-green-300"
            >
              <i className="fa-brands fa-whatsapp text-3xl"></i>
              <span>FALAR NO WHATSAPP</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3. "Nossos serviços explicados" - Interactive explanations for seniors */}
      <div className="bg-brand-navy/20 border-b border-brand-accent/15 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow font-display">
              Linguagem Simples
            </span>
            <h4 className="text-lg sm:text-xl font-display font-black text-white mt-1">
              Entenda Nossos Serviços em Linguagem Fácil
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              Toque em qualquer serviço abaixo para ler uma explicação simples do que fazemos e como podemos te ajudar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {MAIN_SERVICES.map((srv, idx) => {
              const isOpen = activeServiceIdx === idx;
              return (
                <div 
                  key={srv.id} 
                  className="bg-brand-navy/40 border border-brand-accent/25 rounded-xl overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleService(idx)}
                    className={`w-full flex items-center justify-between p-4 text-left font-display font-black text-base transition-colors ${
                      isOpen ? 'bg-brand-accent text-brand-light' : 'text-white hover:bg-brand-navy/60'
                    }`}
                    aria-expanded={isOpen}
                  >
                    <span>{srv.title}</span>
                    <i className={`fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'} text-sm`}></i>
                  </button>

                  {isOpen && (
                    <div className="p-4 bg-brand-dark/50 border-t border-brand-accent/20 space-y-3 animate-[fadeIn_200ms_ease-out]">
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                        {simpleExplanations[srv.id] || srv.description}
                      </p>
                      
                      <div className="pt-2">
                        <a
                          href={`${CONTACT_INFO.whatsappLink}${encodeURIComponent(srv.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-brand-green hover:bg-green-600 text-white text-xs font-black px-4 py-2.5 rounded-lg transition-transform active:scale-95 shadow-sm"
                        >
                          <i className="fa-brands fa-whatsapp text-sm"></i>
                          <span>Pedir orçamento deste serviço</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. Main Footer 4 Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Company / Identity */}
          <div className="space-y-4">
            <PremiumLogo size="sm" theme="light" />
            <p className="text-slate-300 leading-relaxed text-sm">
              Empresa curitibana de engenharia hidráulica operada pela **{CONTACT_INFO.companyName}**. Especialistas em caça-vazamento digital de alta tecnologia, desentupimentos rápidos, manutenção predial e laudos oficiais.
            </p>
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2.5 text-slate-200 font-extrabold">
                <i className="fa-solid fa-shield-halved text-brand-yellow"></i>
                <span>Garantia de 90 dias por escrito</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200 font-extrabold">
                <i className="fa-solid fa-file-contract text-brand-yellow"></i>
                <span>Laudo Técnico Oficial Sanepar</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-base font-display font-black text-white uppercase tracking-wider border-b border-brand-accent/20 pb-1.5">
              Navegação do Site
            </h4>
            <ul className="space-y-2.5 text-slate-300">
              <li>
                <Link to="/" className="hover:text-brand-yellow hover:underline transition-colors flex items-center gap-2 font-bold">
                  <i className="fa-solid fa-arrow-right text-[10px] text-brand-accent"></i>
                  <span>Página Inicial</span>
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="hover:text-brand-yellow hover:underline transition-colors flex items-center gap-2 font-bold">
                  <i className="fa-solid fa-arrow-right text-[10px] text-brand-accent"></i>
                  <span>Nossos Serviços Hidráulicos</span>
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="hover:text-brand-yellow hover:underline transition-colors flex items-center gap-2 font-bold">
                  <i className="fa-solid fa-arrow-right text-[10px] text-brand-accent"></i>
                  <span>Quem Somos (Sobre Nós)</span>
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-brand-yellow hover:underline transition-colors flex items-center gap-2 font-bold">
                  <i className="fa-solid fa-arrow-right text-[10px] text-brand-accent"></i>
                  <span>Falar Conosco / Contato</span>
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="hover:text-brand-yellow hover:underline transition-colors flex items-center gap-2 font-bold">
                  <i className="fa-solid fa-arrow-right text-[10px] text-brand-accent"></i>
                  <span>Mapa de Bairros & Cidades</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Localities as Tag Cascades */}
          <div className="space-y-3">
            <h4 className="text-base font-display font-black text-white uppercase tracking-wider border-b border-brand-accent/20 pb-1.5">
              Bairros & Cidades Atendidas
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {POPULAR_NEIGHBORHOODS.slice(0, 8).map((b, idx) => (
                <Link 
                  key={b.slug}
                  to={`/bairro/${b.slug}`}
                  className="bg-brand-navy/40 hover:bg-brand-accent text-slate-200 hover:text-brand-light px-2.5 py-1 rounded-lg border border-brand-accent/20 text-xs font-bold transition-all inline-block shadow-sm"
                  title={`Encanador no bairro ${b.name}`}
                >
                  {b.name}
                </Link>
              ))}
            </div>
            <div className="pt-3 border-t border-brand-accent/15">
              <span className="text-xs font-extrabold text-slate-200 block mb-1.5 uppercase font-display">Cidades da Região RMC:</span>
              <div className="flex flex-wrap gap-1.5">
                {POPULAR_CITIES.map((c) => (
                  <Link 
                    key={c.slug}
                    to={`/cidade/${c.slug}`}
                    className="bg-brand-dark/80 hover:bg-brand-accent text-slate-200 hover:text-brand-light px-2 py-1 rounded-md text-xs font-semibold border border-brand-accent/10"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 4: Contact & NAP */}
          <div className="space-y-3">
            <h4 className="text-base font-display font-black text-white uppercase tracking-wider border-b border-brand-accent/20 pb-1.5">
              Dados da Empresa (NAP)
            </h4>
            <div className="space-y-3 text-slate-300">
              <div>
                <span className="text-xs text-brand-accent uppercase font-black block tracking-wider font-display">Nome Comercial / Razão Social:</span>
                <span className="text-white font-black block">{CONTACT_INFO.brandName}</span>
                <span className="text-slate-200 text-xs block">{CONTACT_INFO.companyName}</span>
              </div>

              <div>
                <span className="text-xs text-brand-accent uppercase font-black block tracking-wider font-display">Endereço Base Operacional:</span>
                <span className="text-white font-extrabold block">
                  {CONTACT_INFO.address}, {CONTACT_INFO.neighborhood}
                </span>
                <span className="text-slate-300 block">
                  {CONTACT_INFO.city} - {CONTACT_INFO.state}, CEP {CONTACT_INFO.cep}
                </span>
              </div>

              <div>
                <span className="text-xs text-brand-accent uppercase font-black block tracking-wider font-display">Horário de Funcionamento:</span>
                <span className="text-brand-yellow font-black block flex items-center gap-1.5">
                  <i className="fa-solid fa-clock animate-pulse"></i>
                  <span>{CONTACT_INFO.workingHours}</span>
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="mt-12 pt-6 border-t border-brand-navy flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-xs text-center md:text-left">
          <div>
            &copy; {new Date().getFullYear()} {CONTACT_INFO.brandName} • {CONTACT_INFO.companyName}. Todos os direitos reservados.
            <br />
            Dados comerciais verificados e autorizados em Curitiba e Região Metropolitana.
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            <Link to="/sobre" className="hover:text-brand-yellow underline">Quem Somos</Link>
            <Link to="/servicos" className="hover:text-brand-yellow underline">Nossos Serviços</Link>
            <Link to="/contato" className="hover:text-brand-yellow underline">Falar Conosco</Link>
            <Link to="/sitemap" className="hover:text-brand-yellow underline">Mapa do Site</Link>
          </div>
        </div>

        {/* 5. LETREIRO FINAL WITH LOGO cutout text to create strong memory visual */}
        <div className="text-[12vw] sm:text-[10vw] font-display font-black tracking-tighter text-brand-navy/15 uppercase select-none text-center leading-none mt-10 -mb-4 tracking-widest block font-display">
          DESENTUPIDORA ADP
        </div>

      </div>
    </footer>
  );
};

export default Footer;
