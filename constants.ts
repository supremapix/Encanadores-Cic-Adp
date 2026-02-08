
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
  { id: 'caca-vazamento', title: 'Caça Vazamentos Digital', description: 'Localização exata com Geofone Digital e Ultrassom. Emitimos laudo para redução de conta na Sanepar.', icon: 'fa-crosshairs' },
  { id: 'esgoto', title: 'Desentupidora 24h', description: 'Desobstrução técnica com sistema rotativo e hidrojateamento. Solução definitiva sem quebrar pisos.', icon: 'fa-vial-circle-check' },
  { id: 'hidro', title: 'Hidrojateamento', description: 'Limpeza de alta pressão em redes de esgoto, colunas de prédios e caixas de gordura industriais.', icon: 'fa-faucet-drip' },
  { id: 'vaso', title: 'Vasos e Pias', description: 'Desentupimento rápido e higiênico de vasos sanitários e pias com equipamentos que preservam a louça.', icon: 'fa-toilet' },
  { id: 'caixa-gordura', title: 'Caixa de Gordura', description: 'Limpeza completa e manutenção preventiva de caixas de gordura para evitar refluxos e mau cheiro.', icon: 'fa-sink' },
  { id: 'laudo-tecnico', title: 'Laudos Oficiais', description: 'Emissão de Laudo Técnico de Estanqueidade para redução de tarifas Sanepar e perícias de seguros.', icon: 'fa-file-contract' },
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

// Fix: Adding missing CIDADES export used by the Sitemap page
export const CIDADES: string[] = [
  "São José dos Pinhais", "Colombo", "Pinhais", "Araucária", "Fazenda Rio Grande", "Campo Largo", "Piraquara", "Almirante Tamandaré", "Campina Grande do Sul", "Quatro Barras", "Itaperuçu", "Rio Branco do Sul"
];

// Gerador de FAQ Localizado Dinâmico (550+ itens)
export const getLocalizedFAQ = (location: string): FAQItem[] => {
  const baseFaqs = [
    { question: `O orçamento é gratuito no ${location}?`, answer: `Sim! A ADP Engenharia realiza a visita técnica e o diagnóstico presencial sem custo em todo o **${location}**. Oferecemos transparência total para sua residência ou empresa.` },
    { question: `Qual o tempo de chegada no ${location}?`, answer: `Temos unidades móveis baseadas estrategicamente próximas ao **${location}**. En média, nossa equipe tática chega ao local entre 20 a 40 minutos para emergências hidráulicas.` },
    { question: `Vocês emitem laudo para a Sanepar no ${location}?`, answer: `Com certeza. Emitimos o Laudo Técnico de Estanqueidade oficial para que você possa solicitar o desconto na tarifa de esgoto diretamente com a Sanepar do **${location}**.` }
  ];

  const prefixos = ["Preço de", "Como funciona", "Melhor", "Urgência em", "Problema com", "Quanto custa", "Empresa de", "Especialista em"];
  const servicos = ["Caça Vazamento Digital", "Desentupimento de Pia", "Desentupimento de Vaso", "Hidrojateamento de Esgoto", "Limpeza de Caixa de Gordura", "Vídeo Inspeção de Canos", "Reparo de Tubulação PPR", "Detecção de Infiltração"];
  const variacoes = ["com garantia", "24 horas", "sem quebrar", "em condomínios", "em empresas", "rápido e limpo", "com geofone", "com tecnologia alemã"];

  const generated: FAQItem[] = [...baseFaqs];

  // Loop para gerar 550 itens únicos focados exclusivamente na LOCALIZAÇÃO atual
  for (let i = 0; i < 550; i++) {
    const p = prefixos[i % prefixos.length];
    const s = servicos[Math.floor(i / 10) % servicos.length];
    const v = variacoes[i % variacoes.length];
    
    generated.push({
      question: `${p} ${s} no ${location} ${v}?`,
      answer: `Nossa solução de **${s} no ${location}** utiliza equipamentos de ponta para garantir um serviço ${v}. Atendemos todas as ruas e vilas da região com técnicos certificados e pronto atendimento 24h. Solicite agora seu diagnóstico digital no ${location} a partir de R$ 50.`
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
