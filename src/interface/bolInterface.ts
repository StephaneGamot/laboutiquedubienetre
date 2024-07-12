export interface Product {
    id: number;
    name: string;
    price: string;
    rating: number;
    images: Array<{
      id: number;
      name: string;
      src: string;
      alt: string;
    }>;
    colors: Array<{
      name: string;
      bgColor: string;
      selectedColor: string;
    }>;
    description: string;
    details: Array<{
      name: string;
      items: string[];
    }>;
  }
  