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
  { icon: 'fa-certificate', text: 'Garantia de 90 dias' },
  { icon: 'fa-user-shield', text: 'Técnicos Certificados' },
  { icon: 'fa-clock', text: 'Chegada em 30 min' },
  { icon: 'fa-credit-card', text: 'Parcelamos no Cartão' }
];

export const IMAGES: ImageData[] = [
  { url: "https://images.unsplash.com/photo-1581244276891-997b6a550267?auto=format&fit=crop&w=1200&q=80", alt: "Encanador profissional em serviço" },
  { url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80", alt: "Manutenção hidráulica residencial" },
  { url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80", alt: "Reparo de vazamento em pia" },
  { url: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1200&q=80", alt: "Tubulações de cobre de alta precisão" },
  { url: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=1200&q=80", alt: "Instalação de conexões hidráulicas" },
  { url: "https://images.unsplash.com/photo-1595467793429-079717871f76?auto=format&fit=crop&w=1200&q=80", alt: "Limpeza técnica de esgoto" },
  { url: "https://images.unsplash.com/photo-1624266324687-0971fd306775?auto=format&fit=crop&w=1200&q=80", alt: "Geofone digital para caça vazamento" },
  { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", alt: "Acabamentos hidráulicos modernos" }
];

export const MAIN_SERVICES: Service[] = [
  { id: 'esgoto', title: 'Desentupimento de Esgoto', description: 'Limpeza técnica de canos de esgoto com máquinas rotativas K-500.', icon: 'fa-faucet' },
  { id: 'vaso', title: 'Desentupimento de Vaso', description: 'Desobstrução higiênica sem necessidade de remover o vaso em 90% dos casos.', icon: 'fa-toilet' },
  { id: 'pia', title: 'Desentupimento de Pia', description: 'Remoção de gordura em tubulações de cozinha com sondas flexíveis.', icon: 'fa-sink' },
  { id: 'ralo', title: 'Desentupimento de Ralo', description: 'Desobstrução de ralos de banheiro e áreas externas com rapidez.', icon: 'fa-circle-notch' },
  { id: 'hidro', title: 'Hidrojateamento', description: 'Lavagem interna de tubulações com alta pressão para condomínios.', icon: 'fa-water' },
  { id: 'caca-vazamento', title: 'Caça-Vazamentos', description: 'Detecção por ultrassom (Geofone) para achar vazamentos invisíveis.', icon: 'fa-search-location' },
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
  { question: "Qual o preço do desentupimento?", answer: "O preço é calculado após avaliação técnica gratuita. Trabalhamos com **preço por metro linear** ou valor fixo para pequenos reparos. Garantimos o melhor custo-benefício de Curitiba." },
  { question: "Vocês quebram o piso para achar vazamento?", answer: "Não! Usamos tecnologia de **Geofone Ultrassônico**. Localizamos o ponto exato do vazamento e abrimos apenas onde é necessário, economizando sua reforma." },
  { question: "Atendem emergências na madrugada?", answer: "Sim, somos **Encanador 24h Curitiba**. Temos equipes de prontidão para vazamentos graves e entupimentos de esgoto a qualquer hora." },
  { question: "Quais as formas de pagamento?", answer: "Aceitamos Dinheiro, PIX, Cartões de Débito e Crédito (com parcelamento em até 12x para serviços maiores)." }
];

export const SERVICE_TABLE_DATA: TableRow[] = [
  { service: "Desentupimento de Esgoto", description: "Maquinário rotativo industrial", price: "Sob Orçamento", availability: "24h Imediato" },
  { service: "Caça Vazamento Digital", description: "Geofone eletrônico de alta precisão", price: "R$ 149,90 (Base)", availability: "Agendado/Urgente" },
  { service: "Pia e Sifão", description: "Limpeza e vedação técnica", price: "R$ 80,00 - R$ 150,00", availability: "24h" },
  { service: "Limpeza de Fossa", description: "Caminhão auto-vácuo 10m³", price: "Por M³", availability: "Sob Agendamento" },
  { service: "Vaso Sanitário", description: "Desobstrução com mola de aço", price: "Valor Fixo", availability: "Imediato" },
  { service: "Troca de Reparos", description: "Válvulas Hydra, Docol e Deca", price: "Mão de obra fixa", availability: "Comercial/Plantão" },
];