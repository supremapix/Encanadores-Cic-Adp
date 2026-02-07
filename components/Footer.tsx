import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  const handleLogoError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none';
    const parent = e.currentTarget.parentElement;
    if (parent) {
      parent.innerHTML = `<div class="h-16 w-16 bg-white rounded-full flex items-center justify-center font-black text-primary text-2xl animate-float shadow-xl">A</div>`;
    }
  };

  return (
    <footer className="bg-[#051125] text-white pt-20 pb-10 mt-16 relative overflow-hidden">
      {/* Dynamic Background Blur */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Animation */}
          <div className="space-y-6 text-center md:text-left">
            <div className="relative group inline-block">
              <div className="absolute -inset-2 bg-gradient-to-r from-accent to-white rounded-full opacity-10 group-hover:opacity-30 blur-xl transition-all animate-pulse"></div>
              <div className="shimmer-container">
                <img 
                  src={CONTACT_INFO.logoUrl} 
                  alt="ADP Logo" 
                  onError={handleLogoError}
                  className="h-20 w-auto bg-white rounded-full p-2 relative z-10 shadow-2xl animate-float-slow transition-transform group-hover:scale-105"
                />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-black tracking-tighter">ADP <span className="text-accent italic">ENGENHARIA</span></h3>
              <p className="text-white/30 text-[9px] font-bold uppercase tracking-[0.3em]">Precision Hidraulics 24h</p>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Engenharia especializada em diagnóstico não-invasivo e manutenção hidráulica de alta performance.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div>
              <h4 className="text-accent font-black text-[10px] uppercase tracking-[0.2em] mb-6">Navegação</h4>
              <ul className="space-y-3 text-white/50 text-sm font-bold uppercase tracking-widest text-[10px]">
                <li><Link to="/" className="hover:text-accent transition-colors">Início</Link></li>
                <li><a href="#servicos" className="hover:text-accent transition-colors">Serviços</a></li>
                <li><a href="#bairros" className="hover:text-accent transition-colors">Bairros</a></li>
                <li><Link to="/sitemap" className="hover:text-accent transition-colors">Mapa do Site</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-accent font-black text-[10px] uppercase tracking-[0.2em] mb-6">Suporte</h4>
              <ul className="space-y-3 text-white/50 text-sm font-bold uppercase tracking-widest text-[10px]">
                <li><a href={CONTACT_INFO.whatsappLink} className="hover:text-accent transition-colors">WhatsApp</a></li>
                <li><a href={CONTACT_INFO.phoneLink} className="hover:text-accent transition-colors">Ligar Agora</a></li>
                <li><a href={CONTACT_INFO.officialSite} target="_blank" className="hover:text-accent transition-colors">Portal Web</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-6 text-center md:text-left">
            <h4 className="text-accent font-black text-[10px] uppercase tracking-[0.2em] mb-6">Central ADP</h4>
            <div className="p-5 bg-white/5 border border-white/10 rounded-2xl inline-flex md:flex items-start gap-4 hover:bg-white/10 transition-colors">
              <i className="fas fa-location-dot text-accent mt-1"></i>
              <div className="text-left">
                <p className="text-sm font-bold">{CONTACT_INFO.address}</p>
                <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Curitiba - PR</p>
              </div>
            </div>
            <div className="flex gap-4 justify-center md:justify-start">
              {[
                { icon: 'fa-whatsapp', link: CONTACT_INFO.whatsappLink },
                { icon: 'fa-phone', link: CONTACT_INFO.phoneLink },
                { icon: 'fa-globe', link: CONTACT_INFO.officialSite }
              ].map((social, i) => (
                <a key={i} href={social.link} className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-accent hover:text-primary transition-all shadow-xl active:scale-90">
                  <i className={`fas ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[9px] font-black uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} ADP Engenharia Hidráulica. Todos os Direitos Reservados.
          </p>
          <div className="text-[9px] text-white/30 uppercase font-black tracking-[0.2em] flex items-center gap-2">
            DESIGN BY <a href="https://www.supremasite.com.br/" target="_blank" className="text-accent hover:underline">SUPREMA SITES</a>
          </div>
        </div>
      </div>

      <style>{`
        .animate-float-slow {
          animation: floatSlow 8s ease-in-out infinite;
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-12px) rotate(2deg); }
        }
        .shimmer-container {
          position: relative;
          overflow: hidden;
          border-radius: 9999px;
        }
        .shimmer-container::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 25%,
            rgba(255, 255, 255, 0.4) 50%,
            transparent 75%
          );
          animation: shimmerEffect 4s infinite linear;
          pointer-events: none;
        }
        @keyframes shimmerEffect {
          0% { transform: translate(-30%, -30%) rotate(45deg); }
          100% { transform: translate(30%, 30%) rotate(45deg); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;