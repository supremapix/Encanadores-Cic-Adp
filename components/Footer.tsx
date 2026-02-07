import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#051125] text-white pt-20 pb-10 mt-16 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Logo Section & Animated Emulation */}
          <div className="space-y-6">
            <div className="relative group inline-block">
              <div className="absolute -inset-2 bg-gradient-to-r from-accent to-yellow-500 rounded-full opacity-20 group-hover:opacity-40 blur-xl transition-all animate-pulse"></div>
              <img 
                src={CONTACT_INFO.logoUrl} 
                alt="ADP Logo" 
                className="h-20 w-auto bg-white rounded-full p-2 relative z-10 shadow-2xl animate-float shimmer"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-black tracking-tighter">ADP <span className="text-accent">ENGENHARIA</span></h3>
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Tecnologia Hidráulica 24h</p>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Especialistas em diagnóstico digital e manutenção preditiva em Curitiba e Região Metropolitana.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div>
              <h4 className="text-accent font-black text-xs uppercase tracking-[0.2em] mb-6">Menu ADP</h4>
              <ul className="space-y-3 text-white/60 text-sm font-medium">
                <li><Link to="/" className="hover:text-accent transition-colors">Página Inicial</Link></li>
                <li><a href="#servicos" className="hover:text-accent transition-colors">Serviços Premium</a></li>
                <li><a href="#bairros" className="hover:text-accent transition-colors">Áreas de Atendimento</a></li>
                <li><Link to="/sitemap" className="hover:text-accent transition-colors">Mapa do Site</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-accent font-black text-xs uppercase tracking-[0.2em] mb-6">Suporte</h4>
              <ul className="space-y-3 text-white/60 text-sm font-medium">
                <li><a href={CONTACT_INFO.whatsappLink} className="hover:text-accent transition-colors">WhatsApp Urgente</a></li>
                <li><a href={CONTACT_INFO.phoneLink} className="hover:text-accent transition-colors">Plantão Telefônico</a></li>
                <li><a href={CONTACT_INFO.officialSite} target="_blank" className="hover:text-accent transition-colors">Portal Oficial</a></li>
              </ul>
            </div>
          </div>

          {/* Contact & Map */}
          <div className="space-y-6">
            <h4 className="text-accent font-black text-xs uppercase tracking-[0.2em] mb-6">Localização Central</h4>
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-4 hover:bg-white/10 transition-colors">
              <i className="fas fa-map-marker-alt text-accent mt-1"></i>
              <div>
                <p className="text-sm font-bold">{CONTACT_INFO.address}</p>
                <p className="text-xs text-white/40">Curitiba - Paraná</p>
              </div>
            </div>
            <div className="flex gap-4">
              {[
                { icon: 'fa-facebook-f', link: CONTACT_INFO.socialLink },
                { icon: 'fa-instagram', link: CONTACT_INFO.socialLink },
                { icon: 'fa-whatsapp', link: CONTACT_INFO.whatsappLink }
              ].map((social, i) => (
                <a key={i} href={social.link} className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-accent hover:text-primary transition-all shadow-xl">
                  <i className={`fab ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Legal & Credits */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-[10px] font-black uppercase tracking-widest">
            &copy; {new Date().getFullYear()} ADP Engenharia Hidráulica. Todos os Direitos Reservados.
          </p>
          <div className="text-[10px] text-white/40 uppercase font-bold tracking-widest flex items-center gap-2">
            DESENVOLVIDO PELA <a href="https://www.supremasite.com.br/" target="_blank" className="text-accent hover:underline">SUPREMA SITES EXPRESS</a>
          </div>
        </div>
      </div>

      <style>{`
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .shimmer {
          position: relative;
          overflow: hidden;
        }
        .shimmer::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 25%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 75%
          );
          animation: shimmer 4s infinite linear;
        }
        @keyframes shimmer {
          0% { transform: translate(-30%, -30%) rotate(45deg); }
          100% { transform: translate(30%, 30%) rotate(45deg); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;