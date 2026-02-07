
import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import PremiumLogo from './PremiumLogo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#051125] text-white pt-20 pb-12 mt-16 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-transparent to-accent opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Animated Premium Logo */}
          <div className="space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
            <div className="relative group inline-block mb-4">
              <PremiumLogo size="lg" />
            </div>
            <p className="text-white/40 text-xs leading-relaxed max-w-xs mx-auto md:mx-0 font-medium italic">
              Engenharia especializada em diagnóstico digital não-invasivo e manutenção hidráulica preditiva em Curitiba e RMC.
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
                { icon: 'fa-whatsapp', link: CONTACT_INFO.whatsappLink, prefix: 'fab' },
                { icon: 'fa-phone', link: CONTACT_INFO.phoneLink, prefix: 'fas' },
                { icon: 'fa-map-location-dot', link: '#', prefix: 'fas' }
              ].map((social, i) => (
                <a key={i} href={social.link} className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-accent hover:text-primary transition-all active:scale-90 border border-white/5 group">
                  <i className={`${social.prefix} ${social.icon} text-xl transition-transform group-hover:scale-110`}></i>
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
    </footer>
  );
};

export default Footer;
