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
  { url: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1200&q=80", alt: "Infraestrutura Hidráulica" },
  { url: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=1200&q=80", alt: "Conexões Técnicas" },
  { url: "https://images.unsplash.com/photo-1595467793429-079717871f76?auto=format&fit=crop&w=1200&q=80", alt: "Desentupimento Industrial" },
  { url: "https://images.unsplash.com/photo-1624266324687-0971fd306775?auto=format&fit=crop&w=1200&q=80", alt: "Geofone Digital Avançado" },
  { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", alt: "Acabamento em Engenharia" }
];

export const MAIN_SERVICES: Service[] = [
  { id: 'caca-vazamento', title: 'Rastreamento de Vazamentos', description: 'Localização milimétrica com Geofone Ultrassônico Digital. Onde outros quebram tudo, nós apenas apontamos o ponto exato.', icon: 'fa-crosshairs' },
  { id: 'esgoto', title: 'Engenharia de Esgoto', description: 'Desobstrução técnica com sistema rotativo de alta performance. Limpeza total de colunas e redes coletoras sem riscos.', icon: 'fa-vial-circle-check' },
  { id: 'hidro', title: 'Hidrojateamento Industrial', description: 'Lavagem interna de tubulações por ultra-pressão. Solução definitiva para remoção de gordura e detritos petrificados.', icon: 'fa-faucet-drip' },
  { id: 'vaso', title: 'Restauração Sanitária', description: 'Intervenção técnica em sistemas de descarga e vasos sanitários com foco em higiene e preservação da louça.', icon: 'fa-toilet' },
  { id: 'pia', title: 'Manutenção Hidrodinâmica', description: 'Desentupimento de pias e sifões com foco na eliminação de odores e prevenção de transbordamentos futuros.', icon: 'fa-sink' },
  { id: 'ralo', title: 'Sistemas Pluviais', description: 'Diagnóstico e limpeza de ralos e sistemas de drenagem de águas da chuva para condomínios e pátios industriais.', icon: 'fa-droplet' },
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
  { question: "O orçamento técnico é pago?", answer: "Não. Oferecemos a **Visita e o Diagnóstico Presencial sem custo** para toda Curitiba. Transparência é o pilar da nossa engenharia." },
  { question: "Como funciona a detecção sem quebra?", answer: "Utilizamos o **Geofone Digital**, um equipamento de ultrassom que capta a frequência sonora da água escapando da tubulação, indicando o local exato com precisão de centímetros." },
  { question: "Vocês emitem documentos oficiais?", answer: "Sim. Nossos serviços acompanham **Laudo Técnico de Conformidade** para redução de conta na Sanepar e perícia de seguradoras." },
  { question: "Qual o prazo de atendimento?", answer: "Operamos com **Equipes de Pronta Resposta**. Em Curitiba, nossa meta de chegada é de 30 a 45 minutos após a confirmação." }
];

export const SERVICE_TABLE_DATA: TableRow[] = [
  { service: "Rastreamento de Vazamento", description: "Geofone Nível 1", price: "Sob Orçamento", availability: "Imediato 24h" },
  { service: "Desobstrução Mecânica", description: "Sondas K-500", price: "Valor Fixo/M", availability: "24h Urgente" },
  { service: "Vídeo Inspeção HD", description: "Mapeamento Digital", price: "Consulte", availability: "Agendado" },
  { service: "Contrato Condominial", description: "Preventiva Mensal", price: "Exclusivo", availability: "Prioritária" },
];