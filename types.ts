export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Location {
  name: string;
  type: 'bairro' | 'cidade';
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TableRow {
  service: string;
  description: string;
  price: string;
  availability: string;
}

export interface ImageData {
  url: string;
  alt: string;
}