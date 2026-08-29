import { Service, FAQItem, ImageData } from './types';

export const CONTACT_INFO = {
  brandName: "Desentupidora ADP",
  companyName: "ADP Engenharia Hidráulica",
  phone: "(41) 3345-1194",
  whatsapp: "(41) 98517-1966",
  address: "Rua Luiz Maltaca, 36",
  neighborhood: "CIC (Cidade Industrial)",
  city: "Curitiba",
  state: "PR",
  cep: "81310-060",
  email: "contato@desentopeadp.com.br",
  whatsappLink: "https://api.whatsapp.com/send?phone=5541985171966&text=Ol%C3%A1%2C%20encontrei%20o%20site%20e%20preciso%20de%20um%20encanador%20em%20Curitiba%20para%3A%20",
  officialSite: "https://desentopeadp.com.br/",
  phoneLink: "tel:+554133451194",
  logoUrl: "https://desentope.aloanuncio.com.br/images/logo.png",
  workingHours: "Plantão 24 Horas (Segunda a Domingo, incluindo feriados)",
  canonicalDomain: "https://www.encanador.servicosnobairro.com.br"
};

export const TRUST_BADGES = [
  { icon: 'fa-microscope', title: 'Geofone Digital Ultrassônico', desc: 'Detecção milimétrica sem quebra-quebra' },
  { icon: 'fa-file-signature', title: 'Laudo Oficial Sanepar', desc: 'Para contestação e desconto na fatura' },
  { icon: 'fa-shield-halved', title: 'Garantia por Escrito de 90 Dias', desc: 'Segurança total em todos os reparos' },
  { icon: 'fa-clock', title: 'Plantão 24 Horas em Curitiba', desc: 'Unidades volantes com saída imediata' }
];

export const IMAGES: ImageData[] = [
  { url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80", alt: "Encanador Especialista em Curitiba - Manutenção Hidráulica" },
  { url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80", alt: "Detecção Digital de Vazamento Oculto com Geofone em Curitiba" },
  { url: "https://images.unsplash.com/photo-1581244276891-997b6a550267?auto=format&fit=crop&w=1200&q=80", alt: "Técnico Hidráulico em Atendimento Residencial e Predial" },
  { url: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1200&q=80", alt: "Tubulações e Infraestrutura Hidráulica Profissional" }
];

export const MAIN_SERVICES: Service[] = [
  { 
    id: 'caca-vazamento-digital', 
    title: 'Caça-Vazamento Digital', 
    shortTitle: 'Caça-Vazamento',
    description: 'Localização acústica com Geofone Ultrassônico e Câmera Térmica. Encontramos vazamentos ocultos sob pisos, lajes, paredes e redes subterrâneas sem necessidade de quebra generalizada.', 
    icon: 'fa-crosshairs',
    applications: ['Conta de água alta repentina', 'Infiltrações e umidade na parede ou rodapé', 'Relógio de água rodando sem uso', 'Vazamentos em piscinas e reservatórios']
  },
  { 
    id: 'desentupidora-24h', 
    title: 'Desentupidora 24 Horas', 
    shortTitle: 'Desentupimento 24h',
    description: 'Desobstrução técnica com maquinário rotativo elétrico K-500 com molas flexíveis que limpam as paredes dos canos de esgoto, pias, ralos e colunas prediais sem danificar as conexões de PVC.', 
    icon: 'fa-vial-circle-check',
    applications: ['Ralos e pias transbordando', 'Mau cheiro crônico na tubulação', 'Esgoto com retorno ou escoamento lento', 'Colunas e prumadas de prédios entupidas']
  },
  { 
    id: 'limpeza-caixa-gordura', 
    title: 'Limpeza de Caixa de Gordura', 
    shortTitle: 'Caixa de Gordura',
    description: 'Higienização e desincrustação mecânica de caixas de gordura residenciais e comerciais. Evita transbordamentos, mau odor na cozinha e atração de pragas urbanas com descarte ecologicamente correto.', 
    icon: 'fa-sink',
    applications: ['Pias de cozinha com retorno lento', 'Odores fortes vindos da área de serviço', 'Manutenção preventiva semestral e anual']
  },
  { 
    id: 'hidrojateamento-pressao', 
    title: 'Hidrojateamento de Alta Pressão', 
    shortTitle: 'Hidrojateamento',
    description: 'Limpeza e desobstrução pesada com jatos ultra potentes de água para galerias pluviais, tubulações industriais, redes condominiais e tubos com raízes ou gordura calcificada.', 
    icon: 'fa-faucet-drip',
    applications: ['Redes coletoras condominiais', 'Tubulações pluviais e bueiros entupidos', 'Gorduras duras e calcificações severas']
  },
  { 
    id: 'video-inspecao-esgoto', 
    title: 'Vídeo Inspeção Robotizada HD', 
    shortTitle: 'Vídeo Inspeção HD',
    description: 'Diagnóstico visual interno de tubulações por microcâmeras com sonda guia. Identifica com precisão quebras estruturais, desníveis, esmagamento de tubos e obstruções profundas.', 
    icon: 'fa-video',
    applications: ['Entupimentos recorrentes sem causa aparente', 'Verificação de integridade antes de reformas', 'Relatórios com fotos e vídeos técnicos']
  },
  { 
    id: 'laudo-tecnico-sanepar', 
    title: 'Laudo Técnico para Sanepar', 
    shortTitle: 'Laudo Sanepar',
    description: 'Emissão de Laudo Técnico de Estanqueidade e comprovação pericial de vazamento oculto sanado. Documento oficial necessário para solicitar abatimento na tarifa de esgoto junto à Sanepar.', 
    icon: 'fa-file-contract',
    applications: ['Contestação de contas astronômicas de água', 'Processos de reembolso e recálculo Sanepar', 'Documentação para seguradoras de imóveis']
  },
  { 
    id: 'limpeza-caixa-dagua', 
    title: 'Limpeza de Caixa d\'Água', 
    shortTitle: 'Caixa d\'Água',
    description: 'Higienização profunda, desinfecção e cloração de reservatórios de água potável residenciais e prediais, garantindo a pureza da água conforme exigências dos órgãos de vigilância.', 
    icon: 'fa-droplet',
    applications: ['Manutenção preventiva a cada 6 meses', 'Remoção de lodo, ferrugem e impurezas', 'Controle bacteriológico de água potável']
  },
  { 
    id: 'desentupimento-vaso-sanitario', 
    title: 'Desentupimento de Vaso Sanitário', 
    shortTitle: 'Vaso Sanitário',
    description: 'Remoção rápida e limpa de obstruções em vasos sanitários utilizando ponteiras especiais que preservam o esmalte da louça e o anel de vedação, restabelecendo a vazão original.', 
    icon: 'fa-toilet',
    applications: ['Vaso sanitário com nível de água subindo', 'Objetos caídos acidentalmente', 'Troca de anel de vedação e válvula de descarga']
  },
  { 
    id: 'manutencao-hidraulica-predial', 
    title: 'Manutenção Hidráulica Predial', 
    shortTitle: 'Manutenção Predial',
    description: 'Serviços completos de engenharia hidráulica para condomínios e residências: reparo em barriletes, prumadas, substituição de válvulas Hydra/Docol, registros gerais e pressurizadores.', 
    icon: 'fa-building-shield',
    applications: ['Substituição de registros que não fecham', 'Regulagem de válvulas redutoras de pressão', 'Revisão geral de bombas e barriletes']
  },
];

// Grafo Geográfico Real de Bairros de Curitiba (Vizinhanças reais)
export const NEIGHBORHOOD_GRAPH: Record<string, string[]> = {
  "cidade-industrial-cic": ["fazendinha", "capao-raso", "campo-comprido", "tatuquara", "pinheirinho", "augusta", "sao-miguel"],
  "batel": ["agua-verde", "bigorrilho", "seminario", "centro", "reboucas", "campina-do-siqueira"],
  "agua-verde": ["batel", "portao", "vila-izabel", "reboucas", "guaira", "prado-velho"],
  "portao": ["agua-verde", "vila-izabel", "santa-quiteria", "fazendinha", "novo-mundo", "lindoia", "guaira"],
  "santa-felicidade": ["cascatinha", "sao-braz", "butiatuvinha", "santo-inacio", "merces", "vista-alegre"],
  "boa-vista": ["bacacheri", "cabral", "ahu", "barreirinha", "santa-candida", "sao-lourenco"],
  "cabral": ["alto-da-gloria", "hugo-lange", "centro-civico", "boa-vista", "ahu", "bacacheri", "juveve"],
  "juveve": ["cabral", "alto-da-gloria", "ahu", "hugo-lange", "centro-civico"],
  "boqueirao": ["hauer", "xaxim", "alto-boqueirao", "uberaba", "guabirotuba"],
  "pinheirinho": ["capao-raso", "sitio-cercado", "tatuquara", "xaxim", "lindoia", "novo-mundo"],
  "sitio-cercado": ["pinheirinho", "alto-boqueirao", "ganchinho", "umbara", "xaxim"],
  "cajuru": ["capao-da-imbuia", "jardim-das-americas", "taruma", "uberaba", "cristo-rei"],
  "centro": ["centro-civico", "batel", "reboucas", "cristo-rei", "sao-francisco", "alto-da-rua-xv"],
  "merces": ["bigorrilho", "bom-retiro", "sao-francisco", "vista-alegre", "pilarzinho"],
  "santa-candida": ["boa-vista", "barreirinha", "atuba", "tingui"],
  "uberaba": ["jardim-das-americas", "cajuru", "guabirotuba", "boqueirao", "alto-boqueirao"],
  "novo-mundo": ["portao", "capao-raso", "lindoia", "fanny", "fazendinha"],
  "fazendinha": ["portao", "cidade-industrial-cic", "santa-quiteria", "campo-comprido", "novo-mundo"],
  "campo-comprido": ["santa-quiteria", "cidade-industrial-cic", "fazendinha", "mossungue", "seminario"],
  "bigorrilho": ["batel", "merces", "campina-do-siqueira", "santo-inacio", "mossungue"],
  "reboucas": ["centro", "agua-verde", "prado-velho", "jardim-botanico", "parolin"],
  "jardim-botanico": ["reboucas", "cristo-rei", "jardim-social", "jardim-das-americas", "prado-velho"],
  "alto-da-gloria": ["centro-civico", "juveve", "alto-da-rua-xv", "cabral"],
  "alto-da-rua-xv": ["centro", "alto-da-gloria", "cristo-rei", "taruma", "hugo-lange"],
  "cristo-rei": ["jardim-botanico", "centro", "alto-da-rua-xv", "cajuru"],
  "capao-raso": ["novo-mundo", "pinheirinho", "cidade-industrial-cic", "lindoia", "fanny"],
  "xaxim": ["boqueirao", "pinheirinho", "sitio-cercado", "fanny", "hauer"],
  "hauer": ["boqueirao", "xaxim", "guabirotuba", "prado-velho", "parolin"],
  "bacacheri": ["boa-vista", "cabral", "tingui", "bairro-alto", "jardim-social"],
  "bairro-alto": ["bacacheri", "taruma", "atuba", "tingui", "capao-da-imbuia"],
  "sao-braz": ["santa-felicidade", "orleans", "santo-inacio", "cascatinha"],
  "pilarzinho": ["merces", "sao-lourenco", "bom-retiro", "vista-alegre", "barreirinha"],
  "barreirinha": ["santa-candida", "boa-vista", "pilarzinho", "abranches", "cachoeira"],
  "tatuquara": ["cidade-industrial-cic", "pinheirinho", "campo-de-santana", "caximba"],
  "umbara": ["sitio-cercado", "ganchinho", "campo-de-santana"],
  "vila-izabel": ["agua-verde", "portao", "seminario", "santa-quiteria"]
};

// Cidades RMC e conexões lógicas
export const CITY_GRAPH: Record<string, string[]> = {
  "curitiba": ["sao-jose-dos-pinhais", "pinhais", "colombo", "araucaria", "campo-largo", "fazenda-rio-grande"],
  "sao-jose-dos-pinhais": ["curitiba", "pinhais", "fazenda-rio-grande", "tijucas-do-sul", "mandirituba"],
  "pinhais": ["curitiba", "sao-jose-dos-pinhais", "colombo", "quatro-barras", "campina-grande-do-sul"],
  "colombo": ["curitiba", "pinhais", "almirante-tamandare", "quatro-barras", "bocaiuva-do-sul"],
  "araucaria": ["curitiba", "fazenda-rio-grande", "campo-largo", "balsa-nova", "contenda"],
  "fazenda-rio-grande": ["curitiba", "araucaria", "sao-jose-dos-pinhais", "mandirituba"],
  "campo-largo": ["curitiba", "campo-magro", "araucaria", "balsa-nova"],
  "almirante-tamandare": ["curitiba", "colombo", "campo-magro", "rio-branco-do-sul", "itaperucu"],
  "campo-magro": ["curitiba", "almirante-tamandare", "campo-largo"],
  "quatro-barras": ["pinhais", "colombo", "campina-grande-do-sul", "curitiba"],
  "campina-grande-do-sul": ["quatro-barras", "colombo", "bocaiuva-do-sul"],
  "mandirituba": ["fazenda-rio-grande", "sao-jose-dos-pinhais", "quitandinha"],
  "balsa-nova": ["campo-largo", "araucaria"],
  "rio-branco-do-sul": ["almirante-tamandare", "itaperucu"],
  "itaperucu": ["rio-branco-do-sul", "almirante-tamandare"],
  "tijucas-do-sul": ["sao-jose-dos-pinhais", "mandirituba"]
};

export const BAIRROS: string[] = [
  // Bairros Oficiais Curitiba
  "Abranches", "Água Verde", "Ahú", "Alto Boqueirão", "Alto da Glória", "Alto da Rua XV", "Atuba", "Augusta", "Bacacheri", "Bairro Alto", "Barreirinha", "Batel", "Bigorrilho", "Boa Vista", "Bom Retiro", "Boqueirão", "Butiatuvinha", "Cabral", "Cachoeira", "Cajuru", "Campina do Siqueira", "Campo Comprido", "Campo de Santana", "Capão Raso", "Capão da Imbuia", "Cascatinha", "Caximba", "Centro", "Centro Cívico", "Cidade Industrial (CIC)", "Cristo Rei", "Fanny", "Fazendinha", "Ganchinho", "Guabirotuba", "Guaíra", "Hauer", "Hugo Lange", "Jardim Botânico", "Jardim Social", "Jardim das Américas", "Juvevê", "Lamenha Pequena", "Lindóia", "Mercês", "Mossunguê", "Novo Mundo", "Orleans", "Parolin", "Pilarzinho", "Pinheirinho", "Portão", "Prado Velho", "Rebouças", "Riviera", "Santa Cândida", "Santa Felicidade", "Santa Quitéria", "Santo Inácio", "Seminário", "Sítio Cercado", "São Braz", "São Francisco", "São João", "São Lourenço", "São Miguel", "Taboão", "Tarumã", "Tatuquara", "Tingui", "Uberaba", "Umbará", "Vila Izabel", "Vista Alegre", "Xaxim",
  // Vilas e Regiões Populares
  "Vila Sandra", "Vila Verde", "Vila Nossa Senhora da Luz", "Vitória Régia", "Caiuá", "Sabará", "Gabineto", "Itatiaia", "Santa Helena", "Conquista", "Barigui", "Osvaldo Cruz", "Atenas", "Neoville", "Vila Pantanal", "Vila Torres", "Vila das Torres", "Vila Hauer", "Vila Oficinas", "Vila Guaíra", "Vila Osternack", "Vila São Pedro", "Vila Audi", "Vila Parolin", "Jardim Gabineto", "Jardim Itatiaia", "Jardim da Ordem", "Jardim Kosmos", "Jardim Alvorada", "CIC Central", "Pinheirinho Velho", "Sítio Cercado Velho", "Umbará de Baixo", "Umbará de Cima", "Capão Raso Velho", "Carmo", "Hauer Velho", "Xaxim Velho", "Boqueirão Alto", "Boqueirão Velho", "Cajuru Alto", "Uberaba Velho", "Uberaba de Cima", "Jardim das Torres", "Vila Prado", "Bairro Alto Norte", "Bairro Alto Velho", "Tingui Velho", "Boa Vista Norte", "Orleans Velho", "São Braz Alto", "Santa Felicidade Norte", "Portão Velho"
];

export const CIDADES: string[] = [
  "Curitiba", "São José dos Pinhais", "Pinhais", "Colombo", "Araucária", "Almirante Tamandaré", "Campo Largo", "Campo Magro", "Fazenda Rio Grande", "Quatro Barras", "Campina Grande do Sul", "Mandirituba", "Balsa Nova", "Rio Branco do Sul", "Itaperuçu", "Tijucas do Sul"
];

export const GENERAL_FAQS: FAQItem[] = [
  {
    question: "Quem é a Desentupidora ADP / ADP Engenharia Hidráulica em Curitiba?",
    answer: "A Desentupidora ADP (operada pela ADP Engenharia Hidráulica) é uma empresa curitibana especializada em serviços de desentupidora, encanador profissional, caça-vazamento digital com geofone, atendimento 24 horas, manutenção de colunas prediais e emissão de laudos técnicos para Sanepar e seguradoras."
  },
  {
    question: "Como funciona a detecção de vazamento com Geofone sem quebrar?",
    answer: "O Geofone Digital Ultrassônico capta as frequências de ruído geradas pelo atrito da água sob pressão vazando na tubulação. O técnico especialista mapeia o traçado dos canos e identifica com precisão milimétrica o ponto exato da fuga d'água, evitando quebrar pisos e paredes à toa."
  },
  {
    question: "Como solicitar o Laudo Técnico para contestar a conta alta na Sanepar?",
    answer: "Após localizarmos e realizarmos o conserto do vazamento oculto no ramal de água tratada, nossos engenheiros/técnicos emitem o Laudo Oficial de Estanqueidade detalhando o reparo e a leitura do hidrômetro. Com este documento em mãos, o cliente dá entrada na Sanepar para requerer o recálculo e desconto na taxa de esgoto."
  },
  {
    question: "Qual o prazo de atendimento emergencial em Curitiba e CIC?",
    answer: "Trabalhamos com plantão técnico 24 horas em toda a capital e região metropolitana. Nossa base no CIC permite rápido deslocamento para bairros vizinhos e saídas volantes prontas para atender emergências residenciais, comerciais e condomínios."
  },
  {
    question: "Quais são os serviços hidráulicos realizados?",
    answer: "Realizamos caça-vazamento eletrônico, desentupimento mecânico e hidrojateamento de esgoto, limpeza de caixa de gordura, limpeza e desinfecção de caixa d'água, troca de válvulas Hydra/Docol, substituição de registros gerais, reparo em tubulações de PVC/PPR/Cobre e inspeção interna por vídeo com microcâmera HD."
  },
  {
    question: "Os serviços de encanador têm garantia?",
    answer: "Sim! Todos os nossos serviços contam com garantia legal e contratual por escrito de até 90 dias, além de emissão de nota fiscal e laudo técnico quando solicitado."
  },
  {
    question: "Como solicitar um orçamento de encanador em Curitiba?",
    answer: "Você pode solicitar um atendimento imediato enviando mensagem no WhatsApp (41) 98517-1966 ou ligando para o telefone fixo (41) 3345-1194. Descreva o problema ou envie foto/vídeo para avaliação prévia rápida."
  }
];

export const getLocalizedFAQ = (locationOrService: string): FAQItem[] => {
  const isService = MAIN_SERVICES.some(s => s.id === locationOrService || s.title.toLowerCase().includes(locationOrService.toLowerCase()));
  
  if (isService) {
    const srv = MAIN_SERVICES.find(s => s.id === locationOrService || s.title.toLowerCase().includes(locationOrService.toLowerCase()));
    const srvName = srv ? srv.title : locationOrService;
    return [
      {
        question: `Como funciona o serviço de ${srvName} em Curitiba?`,
        answer: `Nosso serviço de **${srvName}** utiliza ferramentas de precisão e engenharia especializada. Atendemos residências, comércios e condomínios em todos os bairros de Curitiba com garantia e execução ágil sem quebras desnecessárias.`
      },
      {
        question: `Qual o tempo de garantia para ${srvName}?`,
        answer: `Oferecemos garantia documentada de até 90 dias para serviços executados de **${srvName}**, além de suporte pós-atendimento e emissão de laudo técnico oficial quando aplicável.`
      },
      {
        question: `Como solicitar orçamento para ${srvName}?`,
        answer: `Basta entrar em contato pelo WhatsApp **(41) 98517-1966** ou telefone **(41) 3345-1194**. Nossa equipe de plantão 24h atende imediatamente com direcionamento técnico e agendamento rápido.`
      },
      {
        question: `A empresa atende emergências de ${srvName} aos finais de semana?`,
        answer: `Sim! O plantão para **${srvName}** funciona 24 horas por dia, 7 dias por semana, inclusive aos sábados, domingos e feriados em Curitiba e Região Metropolitana.`
      }
    ];
  }

  return [
    {
      question: `A Desentupidora ADP atende encanador e caça-vazamento no bairro/região ${locationOrService}?`,
      answer: `Sim! Prestamos serviços completos de encanador, caça-vazamento digital com geofone e desentupimento 24h em **${locationOrService}** e imediações, com atendimento residencial, predial e comercial.`
    },
    {
      question: `Quanto tempo leva o atendimento de encanador em ${locationOrService}?`,
      answer: `Com unidades volantes estrategicamente distribuídas por Curitiba e proximidade das vias rápidas, nosso tempo de resposta para **${locationOrService}** é ágil e otimizado para emergências hidráulicas.`
    },
    {
      question: `Quais serviços hidráulicos estão disponíveis em ${locationOrService}?`,
      answer: `Disponibilizamos caça-vazamento acústico sem quebra, desentupimento de esgoto/pias/ralos, laudo técnico para a Sanepar, limpeza de caixa de gordura e caixa d'água, reparo de válvulas e registros em **${locationOrService}**.`
    },
    {
      question: `Como chamar um encanador urgente em ${locationOrService}?`,
      answer: `Acione nosso plantão 24h via WhatsApp **(41) 98517-1966** ou ligue **(41) 3345-1194**. Uma equipe técnica será acionada com todo o equipamento necessário para resolver o seu problema na primeira visita.`
    }
  ];
};

export const PLUMBING_TIPS = [
  "Nunca descarte óleo de cozinha na pia; a gordura solidifica e causa obstruções graves na rede.",
  "Verifique o hidrômetro à noite antes de dormir; se os ponteiros girarem sem água em uso, há vazamento oculto.",
  "Evite o uso de soda cáustica ou arames; eles podem corroer conexões de PVC e perfurar canos.",
  "O mau cheiro constante em ralos decorre comumente do ressecamento do fecho hídrico no sifão.",
  "Limpeza semestral de caixas d'água garante a potabilidade e previne incrustações nas tubulações.",
  "Um pequeno gotejamento na torneira ou na descarga pode desperdiçar mais de 45 litros de água por dia.",
  "A Sanepar concede desconto na tarifa de esgoto mediante apresentação de Laudo Técnico comprovando conserto de vazamento oculto."
];
