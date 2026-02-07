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
  { icon: 'fa-microscope', text: 'Engenharia de Diagnóstico' },
  { icon: 'fa-shield-halved', text: 'Garantia Blindada 90 Dias' },
  { icon: 'fa-file-signature', text: 'Laudos Técnicos Oficiais' },
  { icon: 'fa-user-tie', text: 'Técnicos de Elite' }
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
  { id: 'caca-vazamento', title: 'Engenharia de Vazamentos', description: 'Diagnóstico por Ultrassom Geofônico. Identificamos a fissura exata sem intervenções destrutivas no seu imóvel.', icon: 'fa-crosshairs' },
  { id: 'esgoto', title: 'Desobstrução Técnica', description: 'Tecnologia de sondas rotativas industriais. Limpeza profunda de redes de esgoto com preservação total da tubulação.', icon: 'fa-vial-circle-check' },
  { id: 'hidro', title: 'Hidrojateamento Premium', description: 'Remoção de incrustações por alta pressão em condomínios e indústrias. Higienização completa e restauradora.', icon: 'fa-faucet-drip' },
  { id: 'vaso', title: 'Restauração de Fluxo', description: 'Intervenção higiênica e rápida em vasos sanitários. Solucionamos o bloqueio sem riscos de danos à porcelana.', icon: 'fa-toilet-paper' },
  { id: 'pia', title: 'Manutenção de Cozinha', description: 'Limpeza hidrodinâmica de pias e caixas de gordura. Eliminação total de odores e bloqueios persistentes.', icon: 'fa-sink' },
  { id: 'ralo', title: 'Drenagem Pluvial', description: 'Manutenção e desobstrução de ralos e calhas. Preparação completa contra alagamentos e infiltrações.', icon: 'fa-droplet' },
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
  "Curitiba", "Almirante Tamandaré", "Araucária", "Campo Largo", "Colombo", 
  "Fazenda Rio Grande", "Pinhais", "Piraquara", "São José dos Pinhais", "Quatro Barras"
];

export const GENERAL_FAQ: FAQItem[] = [
  { question: "O orçamento técnico é realmente gratuito?", answer: "Sim. A ADP acredita na transparência total. Realizamos o diagnóstico técnico presencial em toda Curitiba sem qualquer taxa de deslocamento ou avaliação." },
  { question: "Vocês emitem Laudo para a Sanepar?", answer: "Sim. Somos credenciados para emitir **Laudos de Estanqueidade e Conformidade**, essenciais para solicitar o abatimento na conta de água após o reparo de vazamentos ocultos." },
  { question: "Quanto tempo dura a garantia?", answer: "Todos os nossos serviços de engenharia hidráulica possuem **90 dias de garantia total**, formalizada em contrato, assegurando sua total tranquilidade." },
  { question: "Atendem emergências condominiais?", answer: "Sim. Possuímos um canal exclusivo de **atendimento prioritário para Síndicos e Administradoras**, com faturamento mensal e plantão 24h especializado." }
];

export const SERVICE_TABLE_DATA: TableRow[] = [
  { service: "Engenharia de Esgoto", description: "Sondas rotativas alemãs", price: "Sob Consulta", availability: "Imediato 24h" },
  { service: "Caça Vazamento Digital", description: "Ultrassom Geofônico", price: "A partir de R$ 149", availability: "Urgente" },
  { service: "Hidrojateamento", description: "Alta pressão industrial", price: "Por metro/hora", availability: "Agendado" },
  { service: "Manutenção Preventiva", description: "Check-up completo", price: "Contrato Mensal", availability: "Personalizado" },
];