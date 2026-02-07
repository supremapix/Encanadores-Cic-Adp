
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
  "Cidade Industrial (CIC)", "CIC Norte", "CIC Central", "CIC Sul", "Vila Nossa Senhora da Luz", 
  "Vila Verde", "Vila Sabará", "Vila São José", "Vila Santa Helena", "Vila Industrial", 
  "Vila Conquista", "Vila Torres", "Vila União", "Vila Nova Esperança", "Vila Osternack", 
  "Vila Nova", "Vila Guaíra", "Vila São Domingos", "Vila Tecnológica", "Vila Audi União", 
  "Vila Becker", "Vila Copel", "Vila Eletrosul", "Vila Trabalhador", "Vila São João", 
  "Vila São Miguel", "Vila Santo Antônio", "Vila Verde II", "Vila Verde III", "Vila Verde IV", 
  "Vila Verde V", "Vila Nova Primavera", "Vila Araucária", "Vila Concórdia", "Vila São Judas Tadeu", 
  "Vila São Mateus", "Vila São Pedro", "Vila São Marcos", "Vila São Paulo", "Vila Industrial Oeste", 
  "Vila Industrial Norte", "Vila Industrial Sul", "Vila Industrial Velha", "Vila Industrial Nova", 
  "Vila Industrial Moderna", "Vila Industrial do Trabalhador", "Vila Industrial União", "Vila Industrial Esperança",
  "Conjunto Habitacional Nossa Senhora da Luz", "Conjunto Sabará", "Conjunto Caiuá", "Conjunto Vitória Régia", 
  "Conjunto Nova Esperança", "Conjunto Industrial", "Conjunto União", "Conjunto Osternack", "Conjunto Habitacional Vila Verde",
  "Vila Parolin", "Vila Torres", "Jardim Schaffer", "Vila Sabará", "Boqueirão de Baixo", "Boqueirão de Cima", 
  "Tanguá", "Vila Zumbi", "Abranches de Baixo", "Abranches de Cima", "Vila Nossa Senhora da Luz", 
  "Vila Tecnológica", "Vila Oficinas", "Vila Fanny", "Vila Hauer", "Batel Soho", "Alto da Rua XV", 
  "Vila Guaíra", "Centro Histórico", "Ecoville", "Carmo Abranches", "Água Verde", "Ahú", "Alto Boqueirão", 
  "Alto da Glória", "Alto da XV", "Atuba", "Augusta", "Bacacheri", "Bairro Alto", "Barreirinha", 
  "Batel", "Bigorrilho", "Boa Vista", "Bom Retiro", "Boqueirão", "Butiatuvinha", "Cabral", "Cachoeira", 
  "Cajuru", "Campina do Siqueira", "Campo Comprido", "Campo de Santana", "Capão da Imbuia", "Capão Raso", 
  "Cascatinha", "Caximba", "Centro", "Centro Cívico", "Cristo Rei", "Fanny", "Fazendinha", "Ganchinho", 
  "Guabirotuba", "Guaíra", "Hauer", "Hugo Lange", "Jardim Botânico", "Jardim das Américas", "Jardim Social", 
  "Juvevê", "Lamenha Pequena", "Lindóia", "Mercês", "Mossunguê", "Novo Mundo", "Orleans", "Parolin", 
  "Pilarzinho", "Pinheirinho", "Portão", "Prado Velho", "Rebouças", "Riviera", "Santa Cândida", 
  "Santa Felicidade", "Santa Quitéria", "Santo Inácio", "São Braz", "São Francisco", "São João", 
  "São Lourenço", "São Miguel", "Vila Pantanal", "Seminário", "Sítio Cercado", "Taboão", "Tarumã", 
  "Tatuquara", "Tingui", "Uberaba", "Umbará", "Vila Izabel", "Vista Alegre", "Xaxim"
];

export const CIDADES: string[] = [
  "Curitiba", "Almirante Tamandaré", "Araucária", "Campo Largo", "Colombo", 
  "Fazenda Rio Grande", "Pinhais", "Piraquara", "São José dos Pinhais", "Quatro Barras"
];

export const GENERAL_FAQ: FAQItem[] = [
  { question: "O orçamento é gratuito?", answer: "Sim! A ADP realiza a visita técnica e o diagnóstico presencial sem custo em toda Curitiba. Transparência total para você." },
  { question: "Quanto tempo leva para um técnico chegar?", answer: "Temos unidades móveis espalhadas estrategicamente por toda Curitiba e CIC. Em média, chegamos entre 30 a 45 minutos para emergências." },
  { question: "Vocês dão garantia do serviço?", answer: "Sim, todos os nossos serviços possuem garantia total em contrato de 90 dias, assegurando sua paz de espírito e a qualidade da engenharia aplicada." },
  { question: "Como funciona a detecção de vazamentos?", answer: "Utilizamos Geofone Digital de alta sensibilidade para localizar o vazamento exatamente onde ele está, evitando quebras desnecessárias em seu imóvel." }
];
