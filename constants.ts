
import { Service, FAQItem, TableRow, ImageData } from './types';

export const CONTACT_INFO = {
  phone: "(41) 3345-1194",
  whatsapp: "(41) 98517-1966",
  address: "Rua Luiz Maltaca, 36",
  email: "contato@desentopeadp.com.br",
  whatsappLink: "https://api.whatsapp.com/send?phone=5541985171966&text=Ol%C3%A1%20achei%20seu%20site%20no%20Google%20gostaria%20de%20saber%20sobre%3A%20%E2%9E%A1%EF%B8%8F",
  officialSite: "https://desentopeadp.com.br/",
  phoneLink: "tel:+554133451194",
  socialLink: "https://api.whatsapp.com/send?phone=5541985171966&text=Ol%C3%A1%20achei%20seu%20site%20no%20Google%20gostaria%20de%20saber%20sobre%3A%20%E2%9E%A1%EF%B8%8F",
  logoUrl: "https://desentope.aloanuncio.com.br/images/logo.png"
};

export const TRUST_BADGES = [
  { icon: 'fa-microscope', text: 'Diagnóstico Digital' },
  { icon: 'fa-shield-halved', text: 'Garantia Premium' },
  { icon: 'fa-file-signature', text: 'Laudos Oficiais' },
  { icon: 'fa-user-tie', text: 'Engenharia de Campo' }
];

export const IMAGES: ImageData[] = [
  { url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80", alt: "Engenharia Hidráulica de Precisão" },
  { url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80", alt: "Detecção Digital de Vazamentos" },
  { url: "https://images.unsplash.com/photo-1581244276891-997b6a550267?auto=format&fit=crop&w=1200&q=80", alt: "Reparos Hidráulicos Profissionais" },
  { url: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1200&q=80", alt: "Infraestrutura Hidráulica" }
];

export const MAIN_SERVICES: Service[] = [
  { id: 'caca-vazamento-digital', title: 'Caça Vazamento Digital', description: 'Localização não-invasiva com Geofone Ultrassônico. Detectamos vazamentos ocultos em paredes, pisos e jardins com precisão milimétrica, evitando quebras desnecessárias.', icon: 'fa-crosshairs' },
  { id: 'desentupidora-24h', title: 'Desentupidora 24h', description: 'Desobstrução técnica de redes de esgoto, pias, ralos e colunas prediais. Utilizamos máquinas rotativas K-500 e hidrojateamento para limpeza completa da tubulação.', icon: 'fa-vial-circle-check' },
  { id: 'limpeza-caixa-gordura', title: 'Limpeza de Caixa de Gordura', description: 'Manutenção higiênica e técnica para evitar transbordamentos e mau cheiro. Limpeza completa com descarte ecológico e certificação de conformidade.', icon: 'fa-sink' },
  { id: 'hidrojateamento-pressao', title: 'Hidrojateamento', description: 'Limpeza de alta pressão para redes coletoras de condomínios e indústrias. Remove raízes, gordura solidificada e detritos pesados com jatos ultra-potentes.', icon: 'fa-faucet-drip' },
  { id: 'video-inspecao-esgoto', title: 'Vídeo Inspeção HD', description: 'Diagnóstico visual interno de tubulações via micro-câmera. Identificamos rachaduras, selas rompidas ou obstruções complexas com gravação em tempo real.', icon: 'fa-video' },
  { id: 'laudo-tecnico-sanepar', title: 'Laudos para Sanepar', description: 'Emissão de Laudo de Estanqueidade para redução de tarifa de esgoto. Perícia técnica aceita pela Sanepar e companhias de seguro para comprovação de vazamento.', icon: 'fa-file-contract' },
  { id: 'limpeza-caixa-dagua', title: 'Limpeza de Caixa d\'Água', description: 'Higienização bactericida de reservatórios residenciais e prediais. Controle de potabilidade seguindo rigorosos padrões de saúde e segurança.', icon: 'fa-droplet' },
  { id: 'desentupimento-vaso-sanitario', title: 'Desentupimento de Vaso', description: 'Remoção de obstruções em vasos sanitários com equipamentos que não riscam a louça nem danificam o anel de vedação. Serviço rápido e higiênico.', icon: 'fa-toilet' },
  { id: 'manutencao-hidraulica-predial', title: 'Manutenção Predial', description: 'Gestão hidráulica completa para condomínios. Revisão de prumadas, barriletes, bombas e válvulas redutoras de pressão com engenharia tática.', icon: 'fa-building-shield' },
];

export const BAIRROS: string[] = [
  "Cidade Industrial (CIC)", "Batel", "Água Verde", "Portão", "Centro", "Santa Felicidade", "Boqueirão", "Sítio Cercado", "Tatuquara",
  "Alto da XV", "Bigorrilho", "Cabral", "Juvevê", "Mercês", "Rebouças", "São Francisco", "Hugo Lange", "Jardim Social",
  "Abranches", "Pilarzinho", "Taboão", "Bacacheri", "Bairro Alto", "Tarumã", "Capão da Imbuia", "Cajuru", "Uberaba",
  "Jardim das Américas", "Guabirotuba", "Prado Velho", "Hauer", "Fanny", "Lindóia", "Novo Mundo", "Capão Raso", "Pinheirinho",
  "Xaxim", "Ganchinho", "Umbará", "Caximba", "Campo de Santana", "Augusta", "Riviera", "São Miguel", "Fazendinha", "Santa Quitéria",
  "Vila Izabel", "Seminário", "Campina do Siqueira", "Mossunguê", "Orleans", "São Braz", "Santo Inácio", "Cascatinha", "Vista Alegre",
  "Butiatuvinha", "São João", "Lamenha Pequena", "Santa Cândida", "Tingui", "Atuba", "Boa Vista", "Barreirinha", "São Lourenço", "Bom Retiro", "Ahú", "Centro Cívico", "Alto da Glória", "Jardim Botânico", "Cristo Rei"
];

export const CIDADES: string[] = [
  "São José dos Pinhais", "Colombo", "Pinhais", "Araucária", "Fazenda Rio Grande", "Campo Largo", "Piraquara", "Almirante Tamandaré", "Campina Grande do Sul", "Quatro Barras", "Itaperuçu", "Rio Branco do Sul"
];

export const getLocalizedFAQ = (locationOrService: string): FAQItem[] => {
  const isService = MAIN_SERVICES.some(s => s.id === locationOrService || s.title.toLowerCase().includes(locationOrService.toLowerCase()));
  
  const baseFaqs = [
    { 
      question: `Quanto custa o serviço de ${locationOrService} em Curitiba?`, 
      answer: `O valor para **${locationOrService}** inicia em R$ 50 para a visita técnica de diagnóstico. O orçamento final depende da complexidade detectada via Geofone ou Vídeo Inspeção. Garantimos o melhor custo-benefício da região.` 
    },
    { 
      question: `A ADP Engenharia atende ${locationOrService} hoje?`, 
      answer: `Sim! Operamos com plantão tático 24 horas para todos os chamados de **${locationOrService}**. Nossa equipe está pronta para sair agora mesmo com equipamentos digitais de última geração.` 
    },
    { 
      question: `Qual a garantia para ${locationOrService}?`, 
      answer: `Oferecemos garantia total de até 90 dias para serviços de desentupimento e laudos técnicos permanentes para processos de redução de conta junto à Sanepar em casos de **${locationOrService}**.` 
    }
  ];

  const prefixos = ["Preço de", "Como funciona", "Melhor", "Urgência em", "Problema com", "Quanto custa", "Empresa de", "Especialista em"];
  const variacoes = ["com garantia", "24 horas", "sem quebrar", "em condomínios", "em empresas", "rápido e limpo", "com geofone", "com tecnologia alemã"];
  
  const contextSubject = isService ? locationOrService : `encanador no ${locationOrService}`;

  const generated: FAQItem[] = [...baseFaqs];

  for (let i = 0; i < 550; i++) {
    const p = prefixos[i % prefixos.length];
    const v = variacoes[i % variacoes.length];
    
    generated.push({
      question: `${p} ${contextSubject} ${v}?`,
      answer: `Nossa solução de **${contextSubject}** foca em eficiência e custo reduzido. Atendemos Curitiba e RMC com técnicos certificados que dominam a técnica de ${v}, garantindo que o seu problema hidráulico seja resolvido na primeira visita.`
    });
  }

  return generated;
};

export const PLUMBING_TIPS = [
  "Nunca jogue óleo de cozinha na pia; ele solidifica e causa obstruções graves.",
  "Limpe as calhas antes do período de chuvas para evitar refluxo pluvial.",
  "Verifique o relógio de água antes de dormir; se mexer sem uso, há vazamento.",
  "Não use soda cáustica; ela pode 'empedrar' o esgoto e corroer canos de PVC.",
  "O mau cheiro no ralo pode ser falta de água no fecho hídrico do sifão.",
  "Troque o anel de vedação do vaso sanitário a cada 2 anos para evitar infiltrações.",
  "Mantenha a tampa da caixa de gordura sempre bem vedada contra insetos.",
  "Vazamentos em descargas podem desperdiçar até 100 litros de água por dia.",
  "Cabelos no ralo do chuveiro são os maiores causadores de entupimento doméstico.",
  "A limpeza da caixa d'água deve ser feita a cada 6 meses obrigatoriamente.",
  "Use telas de proteção nos ralos para impedir a entrada de detritos e baratas.",
  "Sons de batidas nos canos (golpe de aríete) indicam excesso de pressão na rede.",
  "Se a conta de água subiu sem motivo, o culpado pode ser um vazamento oculto.",
  "Nunca descarte lenços umedecidos no vaso; eles não se dissolvem como papel.",
  "A borra de café na pia cria uma massa que obstrui a passagem da água.",
  "Verifique se as raízes de árvores próximas não estão invadindo a rede de esgoto.",
  "Um gotejamento simples pode desperdiçar 45 litros de água tratada por dia.",
  "A manutenção preventiva custa 70% menos que um reparo emergencial de quebra.",
  "Em apartamentos, vazamentos no teto geralmente são responsabilidade do vizinho acima.",
  "O hidrojateamento é a única forma de limpar as paredes internas dos canos de gordura.",
  "Canos de ferro antigos devem ser substituídos por PVC ou PPR para evitar ferrugem.",
  "A válvula Hydra precisa de manutenção se começar a demorar para fechar.",
  "Manchas de mofo na parede são sinais claros de infiltração por micro-vazamento.",
  "Ao viajar, feche o registro geral para evitar surpresas com canos estourados.",
  "Ralos sifonados impedem que os gases do esgoto entrem na sua residência.",
  "Evite usar arames para desentupir; você pode perfurar a tubulação.",
  "O Geofone localiza vazamentos por som, sem precisar quebrar azulejos.",
  "Limpeza de fossa deve ser feita por empresas com certificação ambiental.",
  "Borbulhas no vaso quando você solta a água indicam obstrução no respiro do esgoto.",
  "Água demorando a descer na pia? É o primeiro sinal de entupimento parcial.",
  "Use água quente (não fervendo) e detergente para manter a gordura fluida nos canos.",
  "O registro de pressão do chuveiro não deve ser apertado com força excessiva.",
  "Infiltrações na base da parede podem vir do solo ou de canos de alimentação.",
  "Teste do balde: se colocar água e ela descer devagar, o problema é estrutural.",
  "A Sanepar dá desconto na tarifa de esgoto se houver laudo de vazamento oculto.",
  "Vazamentos em piscinas podem ser detectados com corantes específicos.",
  "Tubulações de água quente exigem isolamento térmico para economizar energia.",
  "O desentupimento técnico com mola rotativa preserva as curvas do cano.",
  "Caixas de gordura de plástico são mais fáceis de limpar que as de concreto.",
  "Não ligue a água pluvial na rede de esgoto; isso causa transbordamento nas ruas.",
  "Verifique a boia da caixa d'água; se travar, a água vai vazar pelo ladrão.",
  "O laudo técnico da ADP é aceito por todas as seguradoras de imóveis.",
  "Vazamentos em colunas de prédios exigem intervenção imediata da administração.",
  "Sempre exija nota fiscal e certificado de garantia do serviço hidráulico.",
  "Equipamentos de vídeo-inspeção mostram o estado real do seu esgoto.",
  "O cloro na caixa d'água deve ser dosado corretamente para não corroer metais.",
  "Pias de cozinha industrial exigem caixas de gordura de alta capacidade.",
  "A pressão excessiva da rua pode ser controlada com válvulas redutoras.",
  "O 'azul de metileno' ajuda a encontrar vazamentos em caixas acopladas.",
  "A ADP Engenharia é especialista em diagnósticos complexos em Curitiba."
];
