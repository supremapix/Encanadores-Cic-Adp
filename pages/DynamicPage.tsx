import React, { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import { IMAGES, SERVICE_TABLE_DATA, CONTACT_INFO, GENERAL_FAQ, TRUST_BADGES } from '../constants';

type PageType = 'bairro' | 'cidade' | 'servico';

interface Props {
  type: PageType;
}

const DynamicPage: React.FC<Props> = ({ type }) => {
  const { name } = useParams<{ name: string }>();
  
  const formatName = (slug: string = '') => {
    return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const titleName = formatName(name);

  const uniqueArguments = useMemo(() => {
    const args = [
      "atendimento imediato para condomínios e residências",
      "preço justo e orçamento sem compromisso no local",
      "tecnologia de ponta com Geofone e Câmera de inspeção",
      "garantia total de 90 dias em todos os serviços executados",
      "plantão especial para emergências hidráulicas 24 horas"
    ];
    // Determinístico baseado no nome
    const index = (name || "").length % args.length;
    return args[index];
  }, [name]);
  
  const locationImage = useMemo(() => {
    // Hash simples para selecionar imagem variada mas fixa por local
    const charCodeSum = (name || "").split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const idx = charCodeSum % IMAGES.length;
    return IMAGES[idx];
  }, [name]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const parent = e.currentTarget.parentElement;
    if (parent) {
      // Substitui a imagem por um container elegante com o logo
      parent.innerHTML = `
        <div class="w-full h-full bg-blue-50 flex items-center justify-center p-8 rounded-xl border border-blue-100">
          <img src="${CONTACT_INFO.logoUrl}" class="max-h-full max-w-full object-contain opacity-50 grayscale" />
        </div>
      `;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = type === 'servico' 
      ? `${titleName} em Curitiba 24h | Atendimento Imediato`
      : `Encanador em ${titleName} - Atendimento 24h | ADP Curitiba`;
  }, [name, type, titleName]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-primary text-white py-20 relative overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
            <nav className="text-white/60 text-sm mb-6 font-medium">
              <Link to="/" className="hover:text-accent">Home</Link> / 
              <span className="text-white ml-2 capitalize">{type}</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-black mb-4 capitalize tracking-tight">{titleName}</h1>
             <h2 className="text-xl md:text-2xl text-accent font-bold opacity-90 uppercase tracking-widest">
              {type === 'servico' ? 'Especialista em Hidráulica 24h' : 'Equipe de Plantão Próxima'}
            </h2>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-2/3 space-y-16">
                <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                    <h2 className="text-3xl font-bold text-primary mb-8">Soluções em {titleName}</h2>
                    <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                      A ADP Encanador Curitiba oferece serviços de alta performance em <strong>{titleName}</strong>. 
                      Resolvemos desde pequenos reparos até grandes obstruções industriais com {uniqueArguments}.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                      <div className="rounded-2xl shadow-xl overflow-hidden aspect-video md:aspect-auto border border-gray-100">
                        <img 
                          src={locationImage.url} 
                          alt={locationImage.alt} 
                          onError={handleImageError}
                          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
                        />
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 flex flex-col justify-center">
                        <h4 className="font-bold text-primary text-xl mb-6 flex items-center gap-2">
                          <i className="fas fa-check-double text-accent"></i> Benefícios para Você:
                        </h4>
                        <ul className="space-y-4 text-gray-700">
                          <li className="flex items-start gap-3">
                            <i className="fas fa-clock text-blue-500 mt-1"></i>
                            <div><strong>Rapidez:</strong> Chegada estimada em 30 min.</div>
                          </li>
                          <li className="flex items-start gap-3">
                            <i className="fas fa-search-plus text-blue-500 mt-1"></i>
                            <div><strong>Precisão:</strong> Geofone para evitar quebra-quebra.</div>
                          </li>
                          <li className="flex items-start gap-3">
                            <i className="fas fa-wallet text-blue-500 mt-1"></i>
                            <div><strong>Preço Justo:</strong> Orçamento técnico gratuito.</div>
                          </li>
                          <li className="flex items-start gap-3">
                            <i className="fas fa-calendar-check text-blue-500 mt-1"></i>
                            <div><strong>Plantão 24h:</strong> Noites, domingos e feriados.</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                </div>

                <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                  <h3 className="text-2xl font-bold text-primary mb-8">Serviços em Destaque em {titleName}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {SERVICE_TABLE_DATA.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex flex-col p-6 bg-gray-50 border border-gray-100 rounded-2xl hover:shadow-lg transition-all text-center">
                        <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                          <i className="fas fa-wrench text-xl"></i>
                        </div>
                        <p className="font-black text-primary mb-2">{item.service}</p>
                        <p className="text-xs text-gray-400 font-bold uppercase">{item.availability}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <FAQ 
                    items={[
                        { question: `A visita para orçamento em ${titleName} é paga?`, answer: `De forma alguma! A visita e o orçamento em **${titleName}** são totalmente gratuitos e sem compromisso. Nosso técnico vai até você para avaliar o problema.` },
                        ...GENERAL_FAQ.slice(0, 2)
                    ]} 
                    title={`FAQ sobre ${titleName}`}
                />
            </div>

            <div className="w-full lg:w-1/3 space-y-10">
                <div className="sticky top-24">
                  <ContactForm />
                  <div className="mt-8 bg-urgent text-white p-10 rounded-3xl shadow-2xl text-center relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-white/30 animate-pulse"></div>
                    <h4 className="text-2xl font-black mb-4">EMERGÊNCIA 24H</h4>
                    <p className="mb-8 opacity-90 text-lg">Temos um técnico agora em <strong>{titleName}</strong>.</p>
                    <a href={CONTACT_INFO.whatsappLink} className="block bg-white text-urgent font-black py-5 rounded-2xl hover:scale-105 transition-all shadow-xl">
                      <i className="fab fa-whatsapp mr-2 text-2xl"></i> WHATSAPP URGENTE
                    </a>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicPage;