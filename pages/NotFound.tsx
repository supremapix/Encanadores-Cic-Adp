import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import { SITE_URL, updateMetaTags, injectSchema, generateBreadcrumbSchema } from '../utils/seo';

const NotFound: React.FC = () => {
  useEffect(() => {
    updateMetaTags({
      title: 'Página não encontrada | ADP Encanador Curitiba 24h',
      description: 'A página que você está procurando não existe. Volte para a página inicial ou entre em contato conosco. ADP Encanador Curitiba 24h.',
      canonical: `${SITE_URL}/404`,
      keywords: 'página não encontrada, 404, encanador curitiba, ADP encanador'
    });

    injectSchema('schema-breadcrumb', generateBreadcrumbSchema([
      { name: 'Home', url: SITE_URL },
      { name: 'Página não encontrada', url: `${SITE_URL}/404` }
    ]));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-16">
      <div className="text-center px-4">
        <div className="mb-8">
          <i className="fas fa-wrench text-8xl text-primary opacity-50"></i>
        </div>
        <h1 className="text-6xl font-extrabold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Página não encontrada</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          A página que você está procurando não existe ou foi movida. 
          Mas não se preocupe, estamos aqui para ajudar!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-secondary transition-colors"
          >
            <i className="fas fa-home"></i> Voltar ao Início
          </Link>
          <a 
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
          >
            <i className="fab fa-whatsapp"></i> Falar com Atendente
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
