import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import { IMAGES, SERVICE_TABLE_DATA, CONTACT_INFO, GENERAL_FAQ } from '../constants';

type PageType = 'bairro' | 'cidade' | 'servico';

interface Props {
  type: PageType;
}

const DynamicPage: React.FC<Props> = ({ type }) => {
  const { name } = useParams<{ name: string }>();
  
  // Convert URL slug back to readable Title Case
  const formatName = (slug: string = '') => {
    return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const titleName = formatName(name);
  
  // Construct SEO Data
  const getPageTitle = () => {
    if (type === 'servico') return `${titleName} em Curitiba 24h | Atendimento Imediato`;
    return `Encanador em ${titleName} - Atendimento 24h | ADP Curitiba`;
  };

  const getPageDescription = () => {
    if (type === 'servico') return `Serviço especializado de ${titleName} em Curitiba. Atendimento 24h, preço justo e garantia. Chegamos em 30 minutos.`;
    return `Encanador 24h em ${titleName}. Desentupimento, caça-vazamentos e reparos hidráulicos com atendimento imediato no bairro ${titleName}.`;
  };

  // SEO & Scroll Effect
  useEffect(() => {
    window.scrollTo(0, 0);

    // Update Title
    document.title = getPageTitle();

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', getPageDescription());

    // Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', `encanador ${titleName}, desentupidora ${titleName}, vazamento ${titleName}, encanador 24h`);

    // Inject JSON-LD Schema
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

  }, [name, type]);

  const getIntroText = () => {
    if (type === 'servico') {
        return `Somos especialistas em **${titleName}**. Se você está enfrentando problemas com entupimentos, vazamentos ou precisa de manutenção hidráulica, a ADP Encanador Curitiba é a escolha certa. Utilizamos tecnologia de ponta para resolver seu problema sem quebra-quebra, com garantia e preço justo.`;
    }
    return `Se você procura por **Encanador em ${titleName}**, chegou ao lugar certo. A ADP oferece cobertura total nesta região com equipes de plantão prontas para atender emergências residenciais, comerciais e industriais. Conhecemos bem a região de ${titleName} e garantimos chegada rápida.`;
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 capitalize">{titleName}</h1>
             <h2 className="text-xl md:text-2xl text-accent font-medium mb-4">
              {type === 'servico' ? 'Serviço Especializado' : 'Atendimento 24 Horas no Local'}
            </h2>
            <div className="flex justify-center gap-2 text-sm text-gray-300">
                <Link to="/" className="hover:text-white">Home</Link> / 
                <span className="capitalize">{type}</span> / 
                <span className="text-white font-semibold">{titleName}</span>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Content Column */}
            <div className="w-full lg:w-2/3 space-y-12">
                
                {/* Text Block 1 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                    <h2 className="text-2xl font-bold text-primary mb-4">
                        Atendimento Profissional em {titleName}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                       {getIntroText()} Nossa empresa se destaca pela agilidade e transparência. Ao contratar um **encanador 24h** conosco, você tem a segurança de um serviço bem executado. Não importa se é um pequeno reparo em uma torneira ou um grande **desentupimento de esgoto**, tratamos cada chamado com prioridade absoluta.
                    </p>
                    <img 
                        src={IMAGES[0].url} 
                        alt={`Atendimento em ${titleName}`} 
                        className="w-full h-64 md:h-80 object-cover rounded-xl shadow-md mb-6"
                    />
                     <p className="text-gray-600 leading-relaxed">
                        Atuamos com **preço por metro** ou valor fechado, sempre com orçamento prévio e sem surpresas. A transparência é nosso compromisso com os moradores de {titleName}.
                    </p>
                </div>

                {/* Service Table */}
                <div className="bg-white p-8 rounded-2xl shadow-sm overflow-hidden">
                    <h2 className="text-2xl font-bold text-primary mb-6">Tabela de Serviços Disponíveis</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 text-gray-700">
                                    <th className="p-4 font-bold border-b">Serviço</th>
                                    <th className="p-4 font-bold border-b">Descrição</th>
                                    <th className="p-4 font-bold border-b">Disponibilidade</th>
                                </tr>
                            </thead>
                            <tbody>
                                {SERVICE_TABLE_DATA.map((row, idx) => (
                                    <tr key={idx} className="border-b border-gray-100 hover:bg-blue-50">
                                        <td className="p-4 font-medium text-primary">{row.service}</td>
                                        <td className="p-4 text-gray-600 text-sm">{row.description}</td>
                                        <td className="p-4 text-green-600 font-semibold text-sm">
                                            <i className="fas fa-clock mr-1"></i> {row.availability}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-6 text-center">
                         <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-green-600 font-bold hover:underline">
                            <i className="fab fa-whatsapp mr-2"></i> Consultar Tabela Completa
                        </a>
                    </div>
                </div>

                {/* Text Block 2 & 3 Combined */}
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                     <h2 className="text-2xl font-bold text-primary mb-4">
                        Por que escolher a ADP em {titleName}?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <h3 className="font-bold text-lg mb-2 text-secondary"><i className="fas fa-bolt text-yellow-500 mr-2"></i> Rapidez</h3>
                            <p className="text-sm text-gray-600">Equipes motorizadas espalhadas estrategicamente para chegar rápido em {titleName}.</p>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <h3 className="font-bold text-lg mb-2 text-secondary"><i className="fas fa-shield-alt text-green-500 mr-2"></i> Garantia</h3>
                            <p className="text-sm text-gray-600">Todos os serviços de **caça-vazamentos** e desentupimentos possuem garantia total.</p>
                        </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Entendemos que problemas hidráulicos não têm hora para acontecer. Por isso, nosso serviço de **encanador urgente** funciona de domingo a domingo. Seja um **desentupimento de pia**, limpeza de caixa de gordura ou detecção de vazamento oculto, estamos prontos.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                        <img src={IMAGES[1].url} alt="Serviço técnico" className="w-full h-40 object-cover rounded-lg" />
                        <img src={IMAGES[2].url} alt="Equipamento" className="w-full h-40 object-cover rounded-lg" />
                    </div>
                </div>

                {/* FAQ Specific */}
                <FAQ 
                    items={[
                        { question: `Qual o tempo de chegada em ${titleName}?`, answer: `Normalmente chegamos em ${titleName} entre 30 a 40 minutos após o chamado.` },
                        { question: `Atendem ${titleName} aos sábados e domingos?`, answer: `Sim, nossa equipe de plantão atende **24 horas** em ${titleName} todos os dias.` },
                        ...GENERAL_FAQ.slice(0, 3)
                    ]} 
                    title={`Perguntas Frequentes em ${titleName}`}
                />

                {/* Video Embed */}
                <div className="bg-black rounded-xl overflow-hidden shadow-lg aspect-video">
                     <iframe 
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/jJ0WJqgXZ3k" 
                        title={`Encanador em ${titleName}`}
                        frameBorder="0" 
                        allowFullScreen
                    ></iframe>
                </div>

            </div>

            {/* Sidebar Column */}
            <div className="w-full lg:w-1/3 space-y-8">
                <div className="sticky top-24">
                    <ContactForm />
                    
                    <div className="mt-8 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                        <h3 className="font-bold text-xl mb-4 text-primary">Atendimento Rápido</h3>
                        <p className="text-gray-600 mb-4 text-sm">
                            Precisa de um **orçamento imediato**? Clique no botão abaixo e fale direto com o técnico responsável pela região de {titleName}.
                        </p>
                        <a 
                             href={CONTACT_INFO.whatsappLink}
                             target="_blank" rel="noopener noreferrer"
                             className="block w-full bg-green-500 hover:bg-green-600 text-white text-center font-bold py-3 rounded-lg shadow transition-colors"
                        >
                            <i className="fab fa-whatsapp mr-2"></i> CHAMAR NO WHATSAPP
                        </a>
                    </div>

                    <div className="mt-8 bg-primary p-6 rounded-xl shadow-lg text-white">
                        <h3 className="font-bold text-xl mb-4 text-accent">Serviços Populares</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="border-b border-white/20 pb-2 hover:pl-2 transition-all cursor-pointer">
                                <i className="fas fa-angle-right mr-2 text-accent"></i> Desentupimento de Vaso
                            </li>
                            <li className="border-b border-white/20 pb-2 hover:pl-2 transition-all cursor-pointer">
                                <i className="fas fa-angle-right mr-2 text-accent"></i> Caça Vazamento de Água
                            </li>
                            <li className="border-b border-white/20 pb-2 hover:pl-2 transition-all cursor-pointer">
                                <i className="fas fa-angle-right mr-2 text-accent"></i> Hidrojateamento
                            </li>
                            <li className="border-b border-white/20 pb-2 hover:pl-2 transition-all cursor-pointer">
                                <i className="fas fa-angle-right mr-2 text-accent"></i> Limpeza de Fossa
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicPage;