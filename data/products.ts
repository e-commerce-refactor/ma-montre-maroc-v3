export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  priceMad: number;
  originalPriceMad?: number;
  image: string;
  badge?: string;
  rating?: number;
  reviewsCount?: number;
  stockLeft?: number;
  specs?: Record<string, string>;
  description?: string;
}

export const PRODUCTS: Product[] = [
  {
    "id": "item-1",
    "name": "Ma Montre Maroc Édition Signature",
    "subtitle": "Collection Officielle Ma Montre Maroc",
    "category": "Collection Signature",
    "priceMad": 950,
    "originalPriceMad": 1200,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    "badge": "BESTSELLER",
    "description": "Création officielle distribuée par Ma Montre Maroc au Maroc. Conforme aux standards de qualité et livrée avec paiement à la réception.",
    "stockLeft": 3
  }
];
