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
    const index = (name?.length || 0) % args.length;
    return args[index];
  }, [name]);
  
  const locationImage = useMemo(() => {
    // Aumentando a variabilidade baseada no nome para garantir que cada página pareça única
    const charSum = (name || "").split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const idx = charSum % IMAGES.length;
    return IMAGES[idx] || IMAGES[0];
  }, [name]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = CONTACT_INFO.logoUrl;
    e.currentTarget.className = "rounded-xl p-12 object-contain bg-gray-50 w-full h-64 border border-gray-100 opacity-50";
    e.currentTarget.onerror = null; 
  };

  useEffect(() => {
    try {
      window.scrollTo(0, 0);
      document.title = type === 'servico' 
        ? `${titleName} em Curitiba 24h | Atendimento Imediato`
        : `Encanador em ${titleName} - Atendimento 24h | ADP Curitiba`;

      const description = type === 'servico'
        ? `Serviço especializado de ${titleName} em Curitiba. Atendimento 24h, preço justo e garantia.`
        : `Precisa de um Encanador 24h em ${titleName}? A ADP resolve desentupimentos e vazamentos com ${uniqueArguments}.`;

      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }

      const schemaData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `ADP Encanador - ${titleName}`,
        "image": locationImage.url,
        "telephone": "+55-41-3345-1194",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua Luiz Maltaca, 36",
          "addressLocality": type === 'cidade' ? titleName : "Curitiba",
          "addressRegion": "PR",
          "addressCountry": "BR"
        }
      };

      const scriptId = 'dynamic-schema';
      const existingScript = document.getElementById(scriptId) as HTMLScriptElement | null;
      if (existingScript) {
        existingScript.textContent = JSON.stringify(schemaData);
      } else {
        const scriptElement = document.createElement('script');
        scriptElement.id = scriptId;
        scriptElement.type = 'application/ld+json';
        scriptElement.textContent = JSON.stringify(schemaData);
        document.head.appendChild(scriptElement);
      }
    } catch (e) {
      console.error("SEO Update Error:", e);
    }
  }, [name, type, titleName, uniqueArguments, locationImage]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 capitalize">{titleName}</h1>
             <h2 className="text-xl md:text-2xl text-accent font-medium opacity-90">
              {type === 'servico' ? 'Especialista Hidráulico 24h' : 'Encanador de Plantão Agora'}
            </h2>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-2/3 space-y-12">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-primary mb-6">Atendimento Especializado em {titleName}</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      A ADP Encanador Curitiba é referência em <strong>{titleName}</strong> para resolver qualquer emergência hidráulica. 
                      Oferecemos {uniqueArguments} com foco em rapidez e transparência total no orçamento.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <img 
                        src={locationImage.url} 
                        alt={locationImage.alt} 
                        onError={handleImageError}
                        className="rounded-xl shadow-md w-full h-64 object-cover border" 
                      />
                      <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100 flex flex-col justify-center">
                        <h4 className="font-bold text-primary mb-4">Diferenciais em {titleName}:</h4>
                        <ul className="space-y-3 text-sm text-gray-700">
                          <li><i className="fas fa-check text-green-500 mr-2"></i> Chegada em até 30 minutos</li>
                          <li><i className="fas fa-check text-green-500 mr-2"></i> Orçamento grátis no local</li>
                          <li><i className="fas fa-check text-green-500 mr-2"></i> Equipamentos profissionais</li>
                          <li><i className="fas fa-check text-green-500 mr-2"></i> Garantia de 90 dias</li>
                        </ul>
                      </div>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-primary mb-6">Serviços Disponíveis para {titleName}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {SERVICE_TABLE_DATA.slice(0, 4).map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 border rounded-xl hover:bg-gray-50 transition-colors">
                        <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">
                          <i className="fas fa-wrench text-sm"></i>
                        </div>
                        <div>
                          <p className="font-bold text-gray-800 text-sm">{item.service}</p>
                          <p className="text-xs text-gray-500">{item.availability}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <FAQ 
                    items={[
                        { question: `Qual o valor da visita em ${titleName}?`, answer: `Em ${titleName}, a visita e o orçamento são **100% gratuitos**. O técnico avalia o problema e passa o valor na hora.` },
                        ...GENERAL_FAQ.slice(0, 2)
                    ]} 
                    title={`Dúvidas sobre ${titleName}`}
                />
            </div>

            <div className="w-full lg:w-1/3 space-y-8">
                <ContactForm />
                <div className="bg-urgent text-white p-8 rounded-2xl shadow-xl text-center">
                  <h4 className="text-xl font-bold mb-4">Emergência Agora?</h4>
                  <p className="mb-6 opacity-90 text-sm">Temos um técnico de plantão perto de {titleName}.</p>
                  <a href={CONTACT_INFO.whatsappLink} className="block bg-white text-urgent font-bold py-4 rounded-xl hover:scale-105 transition-all">
                    <i className="fab fa-whatsapp mr-2 text-xl"></i> CHAMAR WHATSAPP
                  </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicPage;