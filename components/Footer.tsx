
import React from 'react';
import { Scissors, Instagram, Facebook, Twitter, Phone, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const facebookLink = "https://www.facebook.com/barberleshop/";

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="bg-amber-500 p-2 rounded-lg">
                <Scissors size={24} className="text-zinc-950" />
              </div>
              <span className="font-bebas text-4xl tracking-wider text-white">Barber Le</span>
            </div>
            <p className="text-zinc-500 leading-relaxed max-w-xs">
              Puyallup's premier spot for precision cuts and royal grooming. Remodeled, rejuvenated, 
              and ready to define your legacy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-zinc-900 p-3 rounded-xl text-zinc-400 hover:text-amber-500 hover:bg-zinc-800 transition-all">
                <Instagram size={20} />
              </a>
              <a 
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900 p-3 rounded-xl text-zinc-400 hover:text-amber-500 hover:bg-zinc-800 transition-all"
              >
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-zinc-900 p-3 rounded-xl text-zinc-400 hover:text-amber-500 hover:bg-zinc-800 transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Barbers', 'Testimonials', 'Schedule', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => onNavigate(item.toLowerCase())}
                    className="text-zinc-500 hover:text-amber-500 transition-colors uppercase text-xs tracking-widest font-bold"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-8">Quick Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4 text-zinc-500">
                <MapPin size={20} className="text-amber-500 shrink-0" />
                <span className="text-sm">{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-4 text-zinc-500">
                <Phone size={20} className="text-amber-500 shrink-0" />
                <span className="text-sm font-bold text-white">{BUSINESS_INFO.phone}</span>
              </li>
              <li className="flex items-center space-x-4 text-zinc-500">
                <div className="w-5 h-5 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm uppercase tracking-widest font-bold text-green-500">Currently Open</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-8">Newsletter</h4>
            <p className="text-zinc-500 text-sm mb-6">Get grooming tips and exclusive offer updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-zinc-900 border border-zinc-800 rounded-l-xl p-4 w-full text-white focus:outline-none focus:border-amber-500 transition-colors"
              />
              <button className="bg-amber-500 px-4 rounded-r-xl text-zinc-950 font-bold hover:bg-amber-400 transition-colors">
                GO
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-xs font-bold uppercase tracking-widest gap-6">
          <p>© {new Date().getFullYear()} Barber Le Puyallup. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
