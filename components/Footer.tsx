
import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  const handleLogoError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none';
    const parent = e.currentTarget.parentElement;
    if (parent) {
      parent.innerHTML = `<div class="h-16 w-16 bg-white rounded-full flex items-center justify-center font-black text-primary text-2xl shadow-xl animate-float">A</div>`;
    }
  };

  return (
    <footer className="bg-[#051125] text-white pt-20 pb-12 mt-16 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-transparent to-accent opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Animated Logo */}
          <div className="space-y-6 text-center md:text-left">
            <div className="relative group inline-block">
              <div className="absolute -inset-4 bg-accent/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="shimmer-container rounded-full overflow-hidden inline-block bg-white p-2 shadow-2xl relative z-10">
                <img 
                  src={CONTACT_INFO.logoUrl} 
                  alt="ADP Logo" 
                  onError={handleLogoError}
                  className="h-16 md:h-20 w-auto object-contain animate-float-slow transition-transform group-hover:scale-105"
                />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-black tracking-tighter uppercase italic">ADP <span className="text-accent">ENGENHARIA</span></h3>
              <p className="text-white/30 text-[9px] font-bold uppercase tracking-[0.4em] mb-4">Precision Hidraulics 24h</p>
            </div>
            <p className="text-white/40 text-xs leading-relaxed max-w-xs mx-auto md:mx-0 font-medium">
              Engenharia especializada em diagnóstico digital não-invasivo e manutenção hidráulica preditiva em Curitiba.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div>
              <h4 className="text-accent font-black text-[10px] uppercase tracking-[0.3em] mb-8">Navegação</h4>
              <ul className="space-y-4 text-white/50 text-[10px] font-black uppercase tracking-widest">
                <li><Link to="/" className="hover:text-accent transition-colors">Início</Link></li>
                <li><Link to="/servicos" className="hover:text-accent transition-colors">Serviços</Link></li>
                <li><Link to="/contato" className="hover:text-accent transition-colors">Contato</Link></li>
                <li><Link to="/sitemap" className="hover:text-accent transition-colors">Atendimento (Sitemap)</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-accent font-black text-[10px] uppercase tracking-[0.3em] mb-8">Central Suporte</h4>
              <ul className="space-y-4 text-white/50 text-[10px] font-black uppercase tracking-widest">
                <li><a href={CONTACT_INFO.whatsappLink} className="hover:text-accent transition-colors">WhatsApp 24h</a></li>
                <li><a href={CONTACT_INFO.phoneLink} className="hover:text-accent transition-colors">Chamada Voz</a></li>
                <li><a href={CONTACT_INFO.officialSite} target="_blank" className="hover:text-accent transition-colors">Portal Web</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 text-center md:text-left">
            <h4 className="text-accent font-black text-[10px] uppercase tracking-[0.3em] mb-8">Unidade Central</h4>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-4 hover:bg-white/10 transition-colors inline-flex md:flex text-left">
              <i className="fas fa-location-dot text-accent text-xl mt-1"></i>
              <div>
                <p className="text-sm font-black">{CONTACT_INFO.address}</p>
                <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Curitiba - Paraná - Brasil</p>
              </div>
            </div>
            <div className="flex gap-4 justify-center md:justify-start">
              {[
                { icon: 'fa-whatsapp', link: CONTACT_INFO.whatsappLink },
                { icon: 'fa-phone', link: CONTACT_INFO.phoneLink },
                { icon: 'fa-map', link: '#' }
              ].map((social, i) => (
                <a key={i} href={social.link} className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-accent hover:text-primary transition-all active:scale-90 border border-white/5">
                  <i className={`fas ${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/20 text-[9px] font-black uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} ADP ENGENHARIA HIDRÁULICA. TODOS OS DIREITOS RESERVADOS.
          </p>
          <div className="text-[9px] text-white/30 uppercase font-black tracking-[0.3em] flex items-center gap-2">
            MADE BY <a href="https://www.supremasite.com.br/" target="_blank" className="text-accent hover:underline">SUPREMA SITES EXPRESS</a>
          </div>
        </div>
      </div>

      <style>{`
        .animate-float-slow { animation: floatSlow 8s ease-in-out infinite; }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .shimmer-container { position: relative; }
        .shimmer-container::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.4) 50%, transparent 75%);
          animation: shimmer 4s infinite linear;
          pointer-events: none;
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
