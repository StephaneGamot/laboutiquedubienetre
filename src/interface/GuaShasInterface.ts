export interface GuaShasInterface {
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
  colors?: { name: string; bgColor: string; selectedColor: string }[];
  details?: { name: string; items: string[] }[];
}
