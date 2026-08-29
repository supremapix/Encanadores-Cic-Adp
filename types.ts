export interface Service {
  id: string;
  title: string;
  shortTitle?: string;
  description: string;
  icon: string;
  applications?: string[];
}

export interface Location {
  name: string;
  type: 'bairro' | 'cidade';
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ImageData {
  url: string;
  alt: string;
}
