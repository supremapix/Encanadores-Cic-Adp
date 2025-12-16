import { Service, Location, FAQItem, TableRow, ImageData } from './types';

export const CONTACT_INFO = {
  phone: "(41) 3345-1194",
  whatsapp: "(41) 98517-1966",
  address: "Rua Luiz Maltaca, 36",
  email: "contato@desentopeadp.com.br",
  whatsappLink: "https://api.whatsapp.com/send?phone=5541985171966&text=Ol%C3%A1%20achei%20seu%20site%20no%20Google%20gostaria%20de%20saber%20sobre%3A%20%E2%9E%A1%EF%B8%8F",
  officialSite: "https://desentopeadp.com.br/",
  phoneLink: "tel:+554133451194",
  // New unified social link
  socialLink: "https://api.whatsapp.com/send?phone=5541985171966&text=Ol%C3%A1%20achei%20seu%20site%20no%20Google%20gostaria%20de%20saber%20sobre%3A%20%E2%9E%A1%EF%B8%8F"
};

export const IMAGES: ImageData[] = [
  { url: "https://desentope.aloanuncio.com.br/images/adp-desentupidora-1.webp", alt: "Caminhão Desentupidora ADP" },
  { url: "https://desentope.aloanuncio.com.br/images/hidrojateamento.jpg", alt: "Serviço de Hidrojateamento" },
  { url: "https://desentope.aloanuncio.com.br/images/vaso-sanitario.jpg", alt: "Desentupimento de Vaso Sanitário" },
  { url: "https://desentopeadp.com.br/assets/images/caminhao-desentupimento-cidade-industrial-em-curitiba-890x890.png", alt: "Atendimento 24 horas" },
  { url: "https://picsum.photos/800/600?random=1", alt: "Equipe Técnica" },
  { url: "https://picsum.photos/800/600?random=2", alt: "Equipamentos de Ponta" }
];

export const MAIN_SERVICES: Service[] = [
  { id: 'esgoto', title: 'Desentupimento de Esgoto', description: 'Solução rápida para redes de esgoto entupidas.', icon: 'fa-faucet' },
  { id: 'vaso', title: 'Desentupimento de Vaso', description: 'Resolvemos entupimentos de vasos sanitários com higiene.', icon: 'fa-toilet' },
  { id: 'pia', title: 'Desentupimento de Pia', description: 'Pias de cozinha e banheiro desentupidas em minutos.', icon: 'fa-sink' },
  { id: 'ralo', title: 'Desentupimento de Ralo', description: 'Limpeza e desobstrução de ralos internos e externos.', icon: 'fa-circle-notch' },
  { id: 'hidro', title: 'Hidrojateamento', description: 'Limpeza de alta pressão para tubulações complexas.', icon: 'fa-water' },
  { id: 'caca-vazamento', title: 'Caça-Vazamentos', description: 'Detecção precisa de vazamentos sem quebra-quebra.', icon: 'fa-search-location' },
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
  { question: "Qual o preço do desentupimento?", answer: "O preço pode variar conforme a complexidade. Trabalhamos com **preço por metro** ou valor fechado. Entre em contato para um orçamento gratuito." },
  { question: "Atendem 24 horas?", answer: "Sim, somos **Encanador 24h Curitiba**. Temos equipes de plantão dia e noite, inclusive sábados, domingos e feriados." },
  { question: "Cobram visita?", answer: "Não cobramos taxa de visita em Curitiba e região para orçamento." },
  { question: "Aceitam cartão?", answer: "Sim, aceitamos cartões de crédito, débito e PIX. Parcelamos serviços maiores." },
  { question: "Fazem caça-vazamento?", answer: "Sim, utilizamos equipamentos eletrônicos para **Caça-vazamentos** exatos, evitando quebra-quebra desnecessário." }
];

export const SERVICE_TABLE_DATA: TableRow[] = [
  { service: "Desentupimento de Pia", description: "Remoção de gordura e restos de alimentos", price: "Sob Consulta", availability: "Imediata" },
  { service: "Desentupimento de Vaso", description: "Desobstrução com máquinas rotativas", price: "Sob Consulta", availability: "24 Horas" },
  { service: "Caça Vazamento", description: "Detecção eletrônica (Geofone)", price: "A partir de R$ 150,00", availability: "Agendamento/Urgência" },
  { service: "Limpeza de Fossa", description: "Sucção e transporte de resíduos", price: "Por M³", availability: "24 Horas" },
  { service: "Troca de Torneira", description: "Substituição e vedação", price: "Sob Consulta", availability: "Horário Comercial" },
  { service: "Hidrojateamento", description: "Limpeza de alta pressão", price: "Por Metro/Hora", availability: "Agendamento" },
  // ... representing 120 services conceptually
];