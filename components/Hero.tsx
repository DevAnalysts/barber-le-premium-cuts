
import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 hero-gradient z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1">
            <Star size={16} className="text-amber-500 fill-amber-500" />
            <span className="text-amber-500 text-xs font-bold uppercase tracking-widest">
              {BUSINESS_INFO.rating} Rating - {BUSINESS_INFO.reviewsCount}+ Reviews
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bebas leading-[0.9] text-white">
            Premium <span className="text-amber-500">Grooming</span> For The Modern Man
          </h1>
          
          <p className="text-xl text-zinc-400 max-w-lg leading-relaxed">
            Experience symmetry, care, and unparalleled professionalism in Puyallup. 
            From classic cuts to precision fades, we define your style.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-amber-500 text-zinc-950 px-10 py-5 rounded-lg font-bold text-lg uppercase flex items-center justify-center space-x-2 hover:bg-amber-400 transition-all hover:scale-105"
            >
              <span>Book Appointment</span>
              <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => onNavigate('services')}
              className="border border-zinc-700 bg-zinc-900/50 backdrop-blur text-white px-10 py-5 rounded-lg font-bold text-lg uppercase hover:bg-zinc-800 transition-all"
            >
              View Services
            </button>
          </div>

          <div className="flex items-center space-x-8 pt-6">
            <div className="border-l-2 border-amber-500 pl-4">
              <div className="text-white font-bold text-2xl">4.6</div>
              <div className="text-zinc-500 text-xs uppercase tracking-widest">Google Rating</div>
            </div>
            <div className="border-l-2 border-amber-500 pl-4">
              <div className="text-white font-bold text-2xl">10+</div>
              <div className="text-zinc-500 text-xs uppercase tracking-widest">Expert Stylists</div>
            </div>
            <div className="border-l-2 border-amber-500 pl-4">
              <div className="text-white font-bold text-2xl">100%</div>
              <div className="text-zinc-500 text-xs uppercase tracking-widest">Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex justify-end relative">
          <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden rounded-2xl border-2 border-zinc-800 shadow-2xl shadow-amber-500/10 group">
            <img 
              src="/assets/img/1.jpg"
              alt="Barber Le Puyallup" 
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-xl">
              <p className="text-white font-bold italic">"Clean and welcoming spot for all types of hair, offering cuts by skilled stylists."</p>
              <p className="text-amber-500 text-sm mt-2 font-semibold">— Official Overview</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
