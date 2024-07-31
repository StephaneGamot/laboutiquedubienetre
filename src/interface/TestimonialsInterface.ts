export interface Author {
    name: string;
    handle: string;
    imageUrl: string;
    logoUrl?: string;
  }
  
  export interface Testimonial {
    body: string;
    author: Author;
  }
  
  export interface FeaturedTestimonial {
    body: string;
    author: Author;
  }
  
  export interface TestimonialData {
    featuredTestimonial: FeaturedTestimonial;
    testimonials: Testimonial[];
  }
  