
import React, { useState, useEffect } from 'react';
import { Scissors, Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Services', id: 'services' },
    { name: 'Barbers', id: 'barbers' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Schedule', id: 'schedule' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/90 backdrop-blur-md py-4 border-b border-zinc-800' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center space-x-2 cursor-pointer group"
          onClick={() => handleLinkClick('hero')}
        >
          <div className="bg-amber-500 p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <Scissors size={24} className="text-zinc-950" />
          </div>
          <span className="font-bebas text-3xl tracking-wider text-white">Barber Le</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="text-zinc-400 hover:text-amber-500 transition-colors uppercase text-sm font-semibold tracking-widest"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => handleLinkClick('contact')}
            className="bg-amber-500 text-zinc-950 px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-amber-400 transition-colors"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-800 py-6 px-6 space-y-4 animate-in slide-in-from-top">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="block w-full text-left text-zinc-300 hover:text-amber-500 py-2 text-lg font-bebas tracking-widest uppercase border-b border-zinc-900 last:border-0"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => handleLinkClick('contact')}
            className="w-full bg-amber-500 text-zinc-950 py-4 rounded-lg font-bold uppercase tracking-widest mt-4"
          >
            Book Free Consultation
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
