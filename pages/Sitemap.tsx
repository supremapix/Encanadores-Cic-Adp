import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MAIN_SERVICES, BAIRROS, CIDADES } from '../constants';

const Sitemap: React.FC = () => {
  useEffect(() => {
    document.title = "Mapa do Site | Desentupidora ADP Curitiba 24h";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Mapa completo de navegação do site Desentupidora ADP Curitiba. Acesso a todas as páginas de serviços, bairros e cidades atendidas.');
  }, []);

  const formatSlug = (text: string) => {
    return text.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  return (
    <div className="bg-white">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white pt-24 pb-12 md:pt-32 md:pb-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-yellow-400">
            Arquitetura & Cobertura Geográfica
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight">
            Mapa do Site — Desentupidora ADP Curitiba
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Navegue por todos os serviços hidráulicos, bairros oficiais de Curitiba e municípios da Região Metropolitana.
          </p>
        </div>
      </section>

      {/* Main Sitemap Content */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
          
          {/* 1. Páginas Principais */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <i className="fa-solid fa-house text-blue-700"></i>
              <span>Páginas Institucionais</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs sm:text-sm">
              <Link to="/" className="p-2.5 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-800 font-semibold border border-slate-200 transition-colors">
                Página Inicial (Home)
              </Link>
              <Link to="/servicos" className="p-2.5 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-800 font-semibold border border-slate-200 transition-colors">
                Catálogo de Serviços
              </Link>
              <Link to="/sobre" className="p-2.5 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-800 font-semibold border border-slate-200 transition-colors">
                Sobre a ADP Engenharia
              </Link>
              <Link to="/contato" className="p-2.5 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-800 font-semibold border border-slate-200 transition-colors">
                Central de Contato 24h
              </Link>
            </div>
          </div>

          {/* 2. Serviços Hidráulicos */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <i className="fa-solid fa-wrench text-blue-700"></i>
              <span>Serviços de Engenharia Hidráulica</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
              {MAIN_SERVICES.map((srv) => (
                <Link
                  key={srv.id}
                  to={`/servico/${srv.id}`}
                  className="p-3 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-800 hover:text-blue-800 font-medium border border-slate-200 transition-colors flex items-center justify-between"
                >
                  <span>{srv.title}</span>
                  <i className="fa-solid fa-chevron-right text-[10px] text-slate-400"></i>
                </Link>
              ))}
            </div>
          </div>

          {/* 3. Cidades da Região Metropolitana */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <i className="fa-solid fa-city text-blue-700"></i>
              <span>Cidades da Região Metropolitana de Curitiba (RMC)</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs">
              {CIDADES.map((cidade, idx) => {
                const slug = formatSlug(cidade);
                return (
                  <Link
                    key={idx}
                    to={`/cidade/${slug}`}
                    className="p-2.5 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-800 font-medium border border-slate-200 transition-colors truncate"
                    title={`Encanador em ${cidade}`}
                  >
                    Encanador {cidade}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* 4. Bairros e Vilas de Curitiba */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <i className="fa-solid fa-map-location-dot text-blue-700"></i>
              <span>Bairros Oficiais e Vilas de Curitiba</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 text-xs">
              {BAIRROS.map((bairro, idx) => {
                const slug = formatSlug(bairro);
                return (
                  <Link
                    key={idx}
                    to={`/bairro/${slug}`}
                    className="p-2 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-800 font-medium border border-slate-200 transition-colors truncate"
                    title={`Encanador no bairro ${bairro}`}
                  >
                    {bairro}
                  </Link>
                );
              })}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Sitemap;
