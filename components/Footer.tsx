import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, MAIN_SERVICES, THEME_BACKGROUNDS } from '../constants';
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
  return (
    <footer className="relative bg-slate-950 text-slate-400 text-xs border-t border-slate-800 overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-20"
        style={{ backgroundImage: `url(${THEME_BACKGROUNDS.sectionAndFooter})` }}
      >
        <div className="absolute inset-0 bg-slate-950/80"></div>
      </div>
      
      {/* Top CTA Banner */}
      <div className="relative bg-slate-900/90 border-b border-slate-800 py-8 backdrop-blur-xs z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white">
              Precisa de um Encanador ou Caça-Vazamento Agora?
            </h3>
            <p className="text-xs text-slate-300">
              Plantão 24 horas em Curitiba com diagnóstico não invasivo e garantia de 90 dias.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href={CONTACT_INFO.phoneLink}
              className="px-4 py-2.5 rounded-lg bg-slate-800 text-white font-semibold hover:bg-slate-700 transition-colors border border-slate-700 flex items-center gap-2 shadow-sm"
            >
              <i className="fa-solid fa-phone text-yellow-400"></i>
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <a 
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg bg-green-600 hover:bg-green-700 text-white font-bold transition-colors flex items-center gap-2 shadow-sm"
            >
              <i className="fa-brands fa-whatsapp text-base"></i>
              <span>WhatsApp 24h</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer 4 Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Company / Identity */}
          <div className="space-y-4">
            <PremiumLogo size="sm" theme="light" />
            <p className="text-slate-400 leading-relaxed">
              Empresa curitibana especializada em engenharia hidráulica, caça-vazamento digital com geofone ultrassônico, desentupimento 24h e laudos para Sanepar.
            </p>
            <div className="space-y-1.5 pt-1">
              <div className="flex items-center gap-2 text-slate-300">
                <i className="fa-solid fa-shield-halved text-yellow-400 text-xs"></i>
                <span>Garantia de 90 dias em serviços</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <i className="fa-solid fa-file-contract text-yellow-400 text-xs"></i>
                <span>Emissão de laudo técnico oficial</span>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Serviços Hidráulicos
            </h4>
            <ul className="space-y-2">
              {MAIN_SERVICES.slice(0, 7).map((srv) => (
                <li key={srv.id}>
                  <Link 
                    to={`/servico/${srv.id}`} 
                    className="hover:text-yellow-400 transition-colors flex items-center gap-2"
                  >
                    <i className="fa-solid fa-chevron-right text-[9px] text-slate-600"></i>
                    <span>{srv.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/servicos" className="text-yellow-400 font-semibold hover:underline block pt-1">
                  Ver todos os serviços &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Localities */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Bairros & Região
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5">
              {POPULAR_NEIGHBORHOODS.slice(0, 8).map((b) => (
                <Link 
                  key={b.slug}
                  to={`/bairro/${b.slug}`}
                  className="hover:text-yellow-400 transition-colors truncate"
                  title={`Encanador no bairro ${b.name}`}
                >
                  {b.name}
                </Link>
              ))}
            </div>
            <div className="pt-2 border-t border-slate-800">
              <span className="text-[11px] font-semibold text-slate-300 block mb-1">Cidades RMC:</span>
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                {POPULAR_CITIES.slice(0, 5).map((c) => (
                  <Link 
                    key={c.slug}
                    to={`/cidade/${c.slug}`}
                    className="hover:text-yellow-400 transition-colors text-[11px]"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/sitemap" className="text-yellow-400 font-semibold hover:underline block pt-1">
              Ver mapa completo (75 Bairros + RMC) &rarr;
            </Link>
          </div>

          {/* Column 4: Contact & NAP */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Dados Oficiais (NAP)
            </h4>
            <div className="space-y-2.5">
              <div>
                <span className="text-[11px] text-slate-500 block">Razão / Unidade:</span>
                <span className="text-slate-200 font-semibold block">{CONTACT_INFO.companyName}</span>
              </div>

              <div>
                <span className="text-[11px] text-slate-500 block">Endereço Base:</span>
                <span className="text-slate-300 block">
                  {CONTACT_INFO.address}, {CONTACT_INFO.neighborhood}
                </span>
                <span className="text-slate-400 block">
                  {CONTACT_INFO.city} - {CONTACT_INFO.state}, CEP {CONTACT_INFO.cep}
                </span>
              </div>

              <div>
                <span className="text-[11px] text-slate-500 block">Atendimento:</span>
                <span className="text-slate-200 font-semibold block">{CONTACT_INFO.workingHours}</span>
              </div>

              <div className="pt-1">
                <span className="text-[11px] text-slate-500 block">Central de Contato:</span>
                <a href={CONTACT_INFO.phoneLink} className="text-yellow-400 font-bold block hover:underline">
                  {CONTACT_INFO.phone}
                </a>
                <a href={CONTACT_INFO.whatsappLink} className="text-green-400 font-semibold block hover:underline">
                  WhatsApp: {CONTACT_INFO.whatsapp}
                </a>
                <span className="text-slate-400 block text-[11px] mt-0.5">{CONTACT_INFO.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="mt-10 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} {CONTACT_INFO.brandName} / {CONTACT_INFO.companyName}. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/sobre" className="hover:text-slate-300">Sobre a Empresa</Link>
            <Link to="/servicos" className="hover:text-slate-300">Serviços</Link>
            <Link to="/contato" className="hover:text-slate-300">Contato</Link>
            <Link to="/sitemap" className="hover:text-slate-300">Mapa do Site</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
