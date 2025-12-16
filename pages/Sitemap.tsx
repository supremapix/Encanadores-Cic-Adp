import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BAIRROS, CIDADES, MAIN_SERVICES } from '../constants';

const Sitemap: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Mapa do Site - ADP Encanador Curitiba";
  }, []);

  const createSlug = (text: string) => text.toLowerCase().replace(/ /g, '-');

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">Mapa do Site</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Encontre rapidamente o serviço ou local de atendimento que você precisa.
        </p>

        <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-secondary mb-6 border-b pb-2">Páginas Principais</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <li><Link to="/" className="text-gray-700 hover:text-primary hover:underline">Home</Link></li>
            <li><a href="#contato" className="text-gray-700 hover:text-primary hover:underline">Contato</a></li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-secondary mb-6 border-b pb-2">Nossos Serviços</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {MAIN_SERVICES.map((service) => (
              <li key={service.id}>
                <Link to={`/servico/${service.id}`} className="text-gray-700 hover:text-primary hover:underline flex items-center">
                  <i className="fas fa-wrench text-xs text-accent mr-2"></i> {service.title}
                </Link>
              </li>
            ))}
            {/* Expanded list simulation for SEO linking structure */}
            <li><Link to="/servico/desentupimento-geral" className="text-gray-700 hover:text-primary hover:underline"><i className="fas fa-wrench text-xs text-accent mr-2"></i> Desentupimento Geral</Link></li>
            <li><Link to="/servico/limpeza-de-caixa-dagua" className="text-gray-700 hover:text-primary hover:underline"><i className="fas fa-wrench text-xs text-accent mr-2"></i> Limpeza de Caixa d'Água</Link></li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-secondary mb-6 border-b pb-2">Bairros em Curitiba</h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 text-sm">
            {BAIRROS.map((bairro, i) => (
              <li key={i}>
                <Link to={`/bairro/${createSlug(bairro)}`} className="text-gray-600 hover:text-urgent hover:underline">
                  {bairro}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold text-secondary mb-6 border-b pb-2">Região Metropolitana</h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 text-sm">
            {CIDADES.map((cidade, i) => (
              <li key={i}>
                <Link to={`/cidade/${createSlug(cidade)}`} className="text-gray-600 hover:text-green-600 hover:underline">
                  {cidade}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Sitemap;