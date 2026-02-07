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

  // Content Spinnner to make pages unique
  const uniqueArguments = useMemo(() => {
    const args = [
      "atendimento imediato para condomínios e residências",
      "preço justo e orçamento sem compromisso no local",
      "tecnologia de ponta com Geofone e Câmera de inspeção",
      "garantia total de 90 dias em todos os serviços executados",
      "plantão especial para emergências hidráulicas 24 horas"
    ];
    // Simple deterministic shuffle based on name length
    const index = (name?.length || 0) % args.length;
    return args[index];
  }, [name]);
  
  const getPageTitle = () => {
    if (type === 'servico') return `${titleName} em Curitiba 24h | Atendimento Imediato`;
    return `Encanador em ${titleName} - Atendimento 24h | ADP Curitiba`;
  };

  const getPageDescription = () => {
    if (type === 'servico') return `Serviço especializado de ${titleName} em Curitiba. Atendimento 24h, preço justo e garantia. Chegamos em 30 minutos em qualquer bairro.`;
    return `Precisa de um Encanador 24h em ${titleName}? A ADP resolve desentupimentos, vazamentos e reparos com ${uniqueArguments}.`;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = getPageTitle();

    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', getPageDescription());

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `ADP Encanador - ${titleName}`,
      "image": "https://desentope.aloanuncio.com.br/images/logo.png",
      "telephone": "+55-41-3345-1194",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Luiz Maltaca, 36",
        "addressLocality": type === 'cidade' ? titleName : "Curitiba",
        "addressRegion": "PR",
        "addressCountry": "BR"
      },
      "priceRange": "$$",
      "areaServed": titleName,
      "description": getPageDescription()
    };

    let scriptTag = document.getElementById('dynamic-schema') as HTMLScriptElement | null;
    if (scriptTag) {
      scriptTag.textContent = JSON.stringify(schemaData);
    } else {
      scriptTag = document.createElement('script');
      scriptTag.id = 'dynamic-schema';
      scriptTag.type = 'application/ld+json';
      scriptTag.textContent = JSON.stringify(schemaData);
      document.head.appendChild(scriptTag);
    }
  }, [name, type, uniqueArguments]);

  const getIntroText = () => {
    if (type === 'servico') {
        return `O serviço de **${titleName}** da ADP Encanador Curitiba é executado por técnicos com mais de 10 anos de experiência. Utilizamos equipamentos de alta performance que garantem a limpeza completa da tubulação sem danos estruturais. Nossa meta é resolver seu problema de **${titleName}** ainda hoje, com a máxima eficiência.`;
    }
    return `Você que mora ou trabalha em **${titleName}**, sabe a importância de ter um parceiro confiável para emergências. A ADP Encanador em ${titleName} oferece ${uniqueArguments}. Atendemos todas as ruas do bairro com equipes motorizadas, garantindo que o técnico chegue ao seu endereço em tempo recorde.`;
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 capitalize">{titleName}</h1>
             <h2 className="text-xl md:text-2xl text-accent font-medium">
              {type === 'servico' ? 'Serviço Técnico Especializado' : 'Encanador 24 Horas de Plantão'}
            </h2>
            <div className="mt-6 flex justify-center gap-2 text-sm text-blue-200">
                <Link to="/" className="hover:text-white">Home</Link> / 
                <span className="capitalize">{type}</span> / 
                <span className="text-white font-semibold">{titleName}</span>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
            
            <div className="w-full lg:w-2/3 space-y-12">
                
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                    <h2 className="text-2xl font-bold text-primary mb-6">
                        Soluções Hidráulicas em {titleName}
                    </h2>
                    <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed space-y-4">
                      <p>{getIntroText()}</p>
                      <p>Muitos moradores de **{titleName}** tentam resolver problemas de encanamento com soluções caseiras (como soda cáustica ou arames), o que pode corroer os canos ou causar entupimentos ainda piores. Nossa recomendação é sempre chamar um profissional que possua as ferramentas certas para cada tipo de obstrução ou vazamento.</p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                      {TRUST_BADGES.map((b, i) => (
                        <div key={i} className="bg-gray-50 p-3 rounded text-center">
                          <i className={`fas ${b.icon} text-primary mb-2`}></i>
                          <p className="text-[10px] font-bold uppercase text-gray-500">{b.text}</p>
                        </div>
                      ))}
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm">
                    <h2 className="text-2xl font-bold text-primary mb-6">Tabela de Preços e Serviços em {titleName}</h2>
                    <div className="overflow-x-auto border rounded-lg">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 text-gray-700">
                                    <th className="p-4 font-bold border-b">Especialidade</th>
                                    <th className="p-4 font-bold border-b">O que fazemos</th>
                                    <th className="p-4 font-bold border-b text-center">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {SERVICE_TABLE_DATA.map((row, idx) => (
                                    <tr key={idx} className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors">
                                        <td className="p-4 font-semibold text-primary">{row.service}</td>
                                        <td className="p-4 text-gray-600 text-sm">{row.description}</td>
                                        <td className="p-4 text-center">
                                            <span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-bold bg-green-100 text-green-700">
                                              DISPONÍVEL AGORA
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-4 text-xs text-gray-400 italic">* Valores base para Curitiba. O preço final depende da avaliação técnica no local.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm">
                    <h2 className="text-2xl font-bold text-primary mb-6">Atendimento Técnico em {titleName}</h2>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="space-y-4 text-gray-600">
                        <p>Nossa base em **{titleName}** conta com veículos equipados para qualquer emergência. Atendemos chamados de urgência em:</p>
                        <ul className="grid grid-cols-1 gap-2">
                          <li><i className="fas fa-caret-right text-accent mr-2"></i> Apartamentos e Coberturas</li>
                          <li><i className="fas fa-caret-right text-accent mr-2"></i> Casas e Sobrados</li>
                          <li><i className="fas fa-caret-right text-accent mr-2"></i> Lojas e Restaurantes</li>
                          <li><i className="fas fa-caret-right text-accent mr-2"></i> Condomínios Industriais</li>
                        </ul>
                        <p>Emitimos laudos técnicos detalhados e nota fiscal para condomínios e empresas.</p>
                      </div>
                      <div className="relative group">
                         <img src={IMAGES[3].url} alt={`Equipe ADP em ${titleName}`} className="rounded-xl shadow-lg w-full h-64 object-cover" />
                         <div className="absolute inset-0 bg-primary/20 rounded-xl group-hover:bg-transparent transition-all"></div>
                      </div>
                    </div>
                </div>

                <FAQ 
                    items={[
                        { question: `Qual a taxa de visita para o bairro ${titleName}?`, answer: `A ADP não cobra taxa de visita em ${titleName}. O orçamento é realizado sem compromisso por um de nossos técnicos especializados.` },
                        { question: `Vocês dão nota fiscal para o serviço em ${titleName}?`, answer: `Sim! Emitimos nota fiscal eletrônica e fornecemos certificado de garantia por escrito para todos os moradores de ${titleName}.` },
                        ...GENERAL_FAQ.slice(0, 2)
                    ]} 
                    title={`Dúvidas Comuns em ${titleName}`}
                />

                <div className="bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video">
                     <iframe 
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/jJ0WJqgXZ3k" 
                        title={`Encanador Especialista em ${titleName}`}
                        frameBorder="0" 
                        allowFullScreen
                    ></iframe>
                </div>

            </div>

            <div className="w-full lg:w-1/3">
                <div className="lg:sticky lg:top-24 space-y-8">
                    <ContactForm />
                    
                    <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-urgent">
                        <h3 className="font-bold text-xl mb-4 text-primary">Emergência em {titleName}?</h3>
                        <p className="text-gray-600 mb-6 text-sm">
                            Estamos com uma equipe agora mesmo na região de {titleName}. Clique abaixo e fale com o técnico via WhatsApp.
                        </p>
                        <div className="space-y-3">
                          <a 
                               href={CONTACT_INFO.whatsappLink}
                               target="_blank" rel="noopener noreferrer"
                               className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-lg shadow-md transition-all transform hover:scale-105"
                          >
                              <i className="fab fa-whatsapp text-2xl"></i> WHATSAPP TÉCNICO
                          </a>
                          <a 
                               href={CONTACT_INFO.phoneLink}
                               className="flex items-center justify-center gap-3 w-full bg-primary hover:bg-secondary text-white font-bold py-4 rounded-lg shadow-md transition-all"
                          >
                              <i className="fas fa-phone-alt"></i> (41) 3345-1194
                          </a>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                        <h3 className="font-bold text-lg mb-4 text-primary">Principais Ruas Atendidas</h3>
                        <div className="flex flex-wrap gap-2">
                           <span className="bg-gray-100 px-2 py-1 rounded text-[10px] text-gray-500 uppercase font-bold">Todas as Ruas de {titleName}</span>
                           <span className="bg-gray-100 px-2 py-1 rounded text-[10px] text-gray-500 uppercase font-bold">Avenidas Principais</span>
                           <span className="bg-gray-100 px-2 py-1 rounded text-[10px] text-gray-500 uppercase font-bold">Condomínios</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicPage;