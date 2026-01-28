
import { Service, Barber, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    name: "Classic Gentleman's Cut",
    description: "Symmetry, care, and professionalism in every stroke. Includes hot towel finish.",
    price: "$35",
    duration: "45 mins",
    category: 'Cut'
  },
  {
    id: '2',
    name: "Precision Fade",
    description: "Clean transitions and sharp lines. Skin fades, drop fades, or burst fades.",
    price: "$40",
    duration: "60 mins",
    category: 'Cut'
  },
  {
    id: '3',
    name: "Royal Shave & Beard Sculpt",
    description: "Full beard grooming with a traditional straight razor shave and essential oils.",
    price: "$25",
    duration: "30 mins",
    category: 'Shave'
  },
  {
    id: '4',
    name: "Junior Master Cut",
    description: "Gentle and stylish cuts for kids. We make them feel like a champ.",
    price: "$25",
    duration: "30 mins",
    category: 'Cut'
  },
  {
    id: '5',
    name: "The Full Works",
    description: "Haircut, beard trim, and a refreshing facial cleanse. Total rejuvenation.",
    price: "$60",
    duration: "90 mins",
    category: 'Specialty'
  }
];

export const BARBERS: Barber[] = [
  {
    id: '1',
    name: "Alex 'Le' Vance",
    role: "Master Barber",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=400",
    bio: "15 years of experience specializing in symmetry and traditional techniques."
  },
  {
    id: '2',
    name: "Jordan Smith",
    role: "Senior Stylist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    bio: "The king of skin fades and modern urban styles."
  },
  {
    id: '3',
    name: "Elena Ross",
    role: "Beard Specialist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
    bio: "Precision beard sculpting and straight razor excellence."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: "Seday Sanchez",
    text: "My haircut came out very wonderful especially with my baldness he was able to work with definitely will be coming back. Very clean. Prices are great. Very friendly too.",
    rating: 5
  },
  {
    id: '2',
    author: "Boppa",
    text: "The shop has been completely remodeled. It is hard to believe it. I have been going to this barber shop years before this younger generation took over from a relative.",
    rating: 5
  },
  {
    id: '3',
    author: "Wes Lay",
    text: "I'd say I had the best cut I've had in Puyallup here. If you're looking for symmetry, care, a professionalism. Come here for your next cut.",
    rating: 5
  }
];

export const BUSINESS_INFO = {
  name: "Barber Le",
  address: "1829 E Main Ave, Puyallup, WA 98372",
  phone: "(253) 904-8274",
  rating: 4.6,
  reviewsCount: 151,
  hours: {
    mon: "9:00 AM - 7:00 PM",
    tue: "9:00 AM - 7:00 PM",
    wed: "9:00 AM - 7:00 PM",
    thu: "9:00 AM - 7:00 PM",
    fri: "9:00 AM - 7:00 PM",
    sat: "9:00 AM - 6:00 PM",
    sun: "Closed"
  }
};
