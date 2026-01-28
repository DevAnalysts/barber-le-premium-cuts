
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-amber-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-zinc-950 font-bold uppercase tracking-widest text-sm mb-4 opacity-70">Real Feedback</h2>
          <h3 className="text-5xl md:text-7xl font-bebas text-zinc-950">Trusted By The Community</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div 
              key={review.id} 
              className="bg-zinc-950 p-10 rounded-3xl relative overflow-hidden group shadow-2xl"
            >
              <Quote className="absolute top-8 right-8 text-amber-500/10 group-hover:text-amber-500/30 transition-colors" size={80} />
              
              <div className="flex mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-amber-500 fill-amber-500" />
                ))}
              </div>

              <p className="text-zinc-300 text-lg italic mb-8 relative z-10 leading-relaxed">
                "{review.text}"
              </p>

              <div className="flex items-center space-x-4 border-t border-zinc-900 pt-6">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center font-bold text-zinc-950 text-xl">
                  {review.author[0]}
                </div>
                <div>
                  <h4 className="text-white font-bold">{review.author}</h4>
                  <span className="text-zinc-500 text-xs uppercase tracking-widest">Google Local Guide</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://www.google.com/search?q=Barber+Le+Puyallup+reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-zinc-950 text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
          >
            Read All 151 Reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
