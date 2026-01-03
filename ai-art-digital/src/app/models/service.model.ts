export interface ServiceItem {
  id: string;
  title: {
    he: string;
    en: string;
  };
  description: {
    he: string;
    en: string;
  };
  priceRange: {
    min: number;
    max: number;
    currency: string;
  };
  deliveryTime: {
    he: string;
    en: string;
  };
  includes: {
    he: string[];
    en: string[];
  };
  featured?: boolean;
  isBeta?: boolean;
  isFree?: boolean;
  externalUrl?: string;
  media?: {
    type: 'video' | 'image' | 'pdf';
    url: string;
    thumbnail?: string;
  };
  gallery?: string[];
  manuals?: Array<{
    title: { he: string; en: string };
    description: { he: string; en: string };
    url: string;
    type: 'pdf' | 'image';
    thumbnail?: string;
  }>;
}

export interface ArticleItem {
  id: string;
  title: {
    he: string;
    en: string;
  };
  description: {
    he: string;
    en: string;
  };
  imageUrl: string;
  link: string;
  date: string;
  readTime: {
    he: string;
    en: string;
  };
  tags: {
    he: string[];
    en: string[];
  };
}

export interface ContentSection {
  hero: {
    badge: { he: string; en: string };
    headline: { he: string; en: string };
    subheadline: { he: string; en: string };
    cta: { he: string; en: string };
  };
  benefits: Array<{
    title: { he: string; en: string };
    description: { he: string; en: string };
  }>;
  stats: Array<{
    value: string;
    label: { he: string; en: string };
  }>;
  services: ServiceItem[];
  about: {
    headline: { he: string; en: string };
    bio: { he: string; en: string };
    credentials?: { he: string; en: string };
  };
  process: Array<{
    step: number;
    title: { he: string; en: string };
    description: { he: string; en: string };
  }>;
  faq: Array<{
    question: { he: string; en: string };
    answer: { he: string; en: string };
  }>;
  articles: ArticleItem[];
}