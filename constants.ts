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
  { icon: 'fa-user-check', text: 'Engenheiros Certificados' },
  { icon: 'fa-microscope', text: 'Tecnologia Não-Invasiva' },
  { icon: 'fa-file-signature', text: 'Laudo Técnico Oficial' },
  { icon: 'fa-shield-halved', text: 'Garantia Premium 90 dias' }
];

export const IMAGES: ImageData[] = [
  { url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80", alt: "Engenharia Hidráulica de Precisão" },
  { url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80", alt: "Detecção Digital de Vazamentos" },
  { url: "https://images.unsplash.com/photo-1581244276891-997b6a550267?auto=format&fit=crop&w=1200&q=80", alt: "Reparos Hidráulicos Profissionais" },
  { url: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1200&q=80", alt: "Infraestrutura Hidráulica" },
  { url: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=1200&q=80", alt: "Conexões Técnicas" },
  { url: "https://images.unsplash.com/photo-1595467793429-079717871f76?auto=format&fit=crop&w=1200&q=80", alt: "Desentupimento Industrial" },
  { url: "https://images.unsplash.com/photo-1624266324687-0971fd306775?auto=format&fit=crop&w=1200&q=80", alt: "Geofone Digital Avançado" },
  { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", alt: "Acabamento em Engenharia" }
];

export const MAIN_SERVICES: Service[] = [
  { id: 'esgoto', title: 'Engenharia de Esgoto', description: 'Desobstrução técnica com maquinário K-500 de alta performance. Sem danos estruturais.', icon: 'fa-vial-circle-check' },
  { id: 'caca-vazamento', title: 'Caça-Vazamento Digital', description: 'Localização exata com Ultrassom Geofônico. Evitamos quebra-quebra desnecessário.', icon: 'fa-crosshairs' },
  { id: 'vaso', title: 'Desentupimento de Vaso', description: 'Técnica higiênica de pressurização. Restabelecemos o fluxo sem remoção da louça.', icon: 'fa-toilet-paper' },
  { id: 'pia', title: 'Desentupimento de Pia', description: 'Remoção de incrustações e gordura solidificada em tubulações de alta pressão.', icon: 'fa-sink' },
  { id: 'hidro', title: 'Hidrojateamento', description: 'Limpeza profunda por jato de água em alta pressão. Ideal para condomínios e indústrias.', icon: 'fa-faucet-drip' },
  { id: 'ralo', title: 'Desentupimento de Ralos', description: 'Desobstrução de sistemas de drenagem pluvial e residencial com rapidez total.', icon: 'fa-droplet' },
];

export const BAIRROS: string[] = [
  "Água Verde", "Alto da Glória", "Alto da XV", "Atuba", "Bacacheri", "Bairro Alto", 
  "Batel", "Bigorrilho", "Boa Vista", "Boqueirão", "Butiatuvinha", "Cabral", 
  "Cachoeira", "Cajuru", "Campina do Siqueira", "Campo Comprido", "Capão da Imbuia", 
  "Capão Raso", "Cascatinha", "Centro", "Centro Cívico", "Champagnat", 
  "Cidade Industrial", "Cristo Rei", "Fanny", "Fazendinha", "Ganchinho", 
  "Guabirotuba", "Hauer", "Hugo Lange", "Jardim Botânico", "Jardim das Américas", 
  "Jardim Social", "Juvevê", "Lindóia", "Mercês", "Mossunguê", "Novo Mundo", 
  "Orleans", "Parolin", "Pilarzinho", "Pinheirinho", "Portão", "Prado Velho", 
  "Rebouças", "Santa Cândida", "Santa Felicidade", "Santa Quitéria", "Santo Inácio", 
  "São Braz", "São Francisco", "São Lourenço", "Seminário", "Sítio Cercado", 
  "Taboão", "Tarumã", "Tatuquara", "Tingui", "Uberaba", "Umbará", "Vila Izabel", 
  "Vista Alegre", "Xaxim"
];

export const CIDADES: string[] = [
  "Curitiba", "Adrianópolis", "Agudos do Sul", "Almirante Tamandaré", "Araucária", 
  "Balsa Nova", "Bocaiúva do Sul", "Campina Grande do Sul", "Campo do Tenente", 
  "Campo Largo", "Campo Magro", "Cerro Azul", "Colombo", "Contenda", "Doutor Ulysses", 
  "Fazenda Rio Grande", "Itaperuçu", "Lapa", "Mandirituba", "Piên", "Pinhais", 
  "Piraquara", "Quatro Barras", "Quitandinha", "Rio Branco do Sul", "Rio Negro", 
  "São José dos Pinhais", "Tijucas do Sul", "Tunas do Paraná"
];

export const GENERAL_FAQ: FAQItem[] = [
  { question: "O orçamento tem custo?", answer: "Não. Oferecemos **Visita Técnica e Orçamento 100% Gratuitos** em toda Curitiba. Transparência total antes de qualquer execução." },
  { question: "Como funciona o Caça-Vazamento?", answer: "Utilizamos **Geofone Ultrassônico Digital**. Ele capta o ruído da água saindo do cano dentro da parede ou piso. Localizamos o ponto exato com margem de erro mínima." },
  { question: "Vocês emitem Laudo para a Sanepar?", answer: "Sim. Nossos serviços de Caça-Vazamento incluem **Laudo Técnico Credenciado** para solicitação de abatimento na conta de água por vazamento oculto." },
  { question: "Qual a garantia dos serviços?", answer: "Todos os serviços ADP possuem **Certificado de Garantia de 90 dias**, conforme o Código de Defesa do Consumidor, com suporte imediato." }
];

export const SERVICE_TABLE_DATA: TableRow[] = [
  { service: "Engenharia de Esgoto", description: "Sondas rotativas alemãs", price: "Sob Consulta", availability: "Imediato 24h" },
  { service: "Caça Vazamento", description: "Geofone Digital Nível 1", price: "A partir de R$ 149", availability: "Urgente" },
  { service: "Pia e Sifão", description: "Higiene e desobstrução", price: "Valor Fixo", availability: "24h" },
  { service: "Hidrojateamento", description: "Alta pressão industrial", price: "Por metro/hora", availability: "Agendado" },
];