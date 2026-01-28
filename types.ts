
export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  category: 'Cut' | 'Shave' | 'Specialty';
}

export interface Barber {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  author: string;
  text: string;
  rating: number;
}
