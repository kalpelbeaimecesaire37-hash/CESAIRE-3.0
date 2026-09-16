export type ProductCategory = 'all' | 'formations' | 'guides' | 'ia' | 'business';

export interface ProductModule {
  title: string;
  description: string;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  category: 'formations' | 'guides' | 'ia' | 'business';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  oldPrice?: number;
  currency: string;
  badge?: 'POPULAIRE' | 'NOUVEAU' | 'OFFRE DU MOMENT' | 'ESSENTIEL';
  image: string;
  isFeatured?: boolean;
  format: string;
  deliveryTime: string;
  deviceCompatibility: string;
  durationOrPages: string;
  problemSolved: string;
  benefits: string[];
  modules?: ProductModule[];
  targetAudience: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export type PageView = 'accueil' | 'formations' | 'guides' | 'a-propos' | 'faq' | 'contact';
