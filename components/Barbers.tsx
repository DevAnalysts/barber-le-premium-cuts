
import React from 'react';
import { BARBERS } from '../constants';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Barbers: React.FC = () => {
  const facebookLink = "https://www.facebook.com/barberleshop/";

  return (
    <section id="barbers" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">The Craftsmen</h2>
            <h3 className="text-5xl md:text-7xl font-bebas text-white">Meet Our Master Barbers</h3>
          </div>
          <p className="text-zinc-400 max-w-md text-lg leading-relaxed mb-4">
            Our team consists of industry veterans and creative stylists who understand that every cut is a work of art.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {BARBERS.map((barber) => (
            <div key={barber.id} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                <img 
                  src={barber.image} 
                  alt={barber.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60"></div>
                
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
                  <a href="#" className="bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-amber-500 hover:text-zinc-950 transition-all">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-amber-500 hover:text-zinc-950 transition-all">
                    <Twitter size={20} />
                  </a>
                  <a 
                    href={facebookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-amber-500 hover:text-zinc-950 transition-all"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
              <div className="text-center">
                <span className="text-amber-500 uppercase tracking-widest text-xs font-bold">{barber.role}</span>
                <h4 className="text-3xl font-bebas text-white mt-1 group-hover:text-amber-500 transition-colors">{barber.name}</h4>
                <p className="text-zinc-500 mt-2 text-sm max-w-xs mx-auto italic">"{barber.bio}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Barbers;
