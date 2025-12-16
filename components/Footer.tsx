import React from 'react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-primary text-white pt-12 pb-6 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-accent mb-4 border-b border-gray-700 pb-2">ADP Encanador Curitiba</h3>
            <p className="flex items-center gap-3 text-gray-300">
              <i className="fas fa-map-marker-alt text-accent"></i> 
              {CONTACT_INFO.address}
            </p>
            <p className="flex items-center gap-3 text-gray-300">
              <i className="fas fa-envelope text-accent"></i> 
              {CONTACT_INFO.email}
            </p>
            <p className="flex items-center gap-3 text-gray-300">
              <i className="fas fa-phone-alt text-accent"></i> 
              {CONTACT_INFO.phone}
            </p>
            <p className="flex items-center gap-3 text-gray-300">
              <i className="fab fa-whatsapp text-accent"></i> 
              {CONTACT_INFO.whatsapp}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#bairros" className="hover:text-accent transition-colors">Bairros Atendidos</a></li>
              <li><a href="#cidades" className="hover:text-accent transition-colors">Cidades</a></li>
              <li><a href="#servicos" className="hover:text-accent transition-colors">Serviços</a></li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Área de Atendimento</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Atendemos todos os bairros de Curitiba e cidades da Região Metropolitana com equipes de plantão.
              Chegamos rápido no Água Verde, Batel, Centro, Portão, CIC e muito mais.
            </p>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Siga-nos</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} ADP Encanador Curitiba 24h. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-gray-400 text-sm">
            Desenvolvido com <span className="inline-block animate-heartbeat text-urgent">❤️</span> pela{' '}
            <a 
              href="https://www.supremasite.com.br/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-accent font-bold hover:text-white transition-colors"
            >
              Suprema Sites Express
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;