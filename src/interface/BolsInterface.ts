export interface BolsInterface {
  id: number;
  name: string;
  price: string;
  rating: number;
  reviewCount: number;
  imageSrc: string;
  imageAlt: string;
  href: string;
  images?: { id: number; name: string; src: string; alt: string }[];
  description?: string;
  tailles?: { name: string; displayName: string; price: string }[];
  poids?: string; 
  details?: { name: string; items: string | string[] }[];
}
