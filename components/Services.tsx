
import React from 'react';
import { SERVICES } from '../constants';
import { Clock, Tag, Scissors } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">What We Do</h2>
          <h3 className="text-5xl md:text-7xl font-bebas text-white">Signature Services</h3>
          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            From vintage straight-razor shaves to modern fades, we provide a full range of grooming 
            services tailored to your unique style.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="glass-card p-8 rounded-2xl hover:border-amber-500/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-zinc-800 p-3 rounded-lg text-amber-500 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-colors">
                    <Scissors size={24} />
                  </div>
                  <span className="text-3xl font-bebas text-white group-hover:text-amber-500 transition-colors">{service.price}</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">{service.name}</h4>
                <p className="text-zinc-400 mb-8 leading-relaxed">{service.description}</p>
              </div>
              
              <div className="flex items-center space-x-6 text-sm font-semibold text-zinc-500 uppercase tracking-widest border-t border-zinc-800 pt-6">
                <div className="flex items-center space-x-2">
                  <Clock size={16} className="text-amber-500" />
                  <span>{service.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Tag size={16} className="text-amber-500" />
                  <span>{service.category}</span>
                </div>
              </div>
            </div>
          ))}

          <div className="bg-amber-500 rounded-2xl p-8 flex flex-col justify-center items-center text-center space-y-6 cursor-pointer hover:bg-amber-400 transition-colors">
            <h4 className="text-4xl font-bebas text-zinc-950">Custom Grooming Package</h4>
            <p className="text-zinc-900/80 font-medium">Looking for something specific? Combine any services for a personalized look.</p>
            <button className="bg-zinc-950 text-white px-8 py-3 rounded-full font-bold uppercase text-xs tracking-widest">Consult a Barber</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
