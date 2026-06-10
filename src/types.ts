export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  tag?: string; // e.g., 'Mais pedido', 'Destaque', 'Promoção', 'Novo', 'Combo', 'Consulte'
}

export interface Combo {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tag?: string;
}

export interface BusinessConfig {
  name: string;
  subdomain: string;
  slogan: string;
  subtitle: string;
  whatsappNumber: string;
  instagramUser: string;
  facebookUser: string;
  address: string;
  cityState: string;
  hours: string;
  serviceType: string;
  deliveryFee: string;
  googleMapsUrl: string;
}
