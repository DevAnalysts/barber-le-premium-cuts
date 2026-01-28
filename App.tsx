
import React, { useCallback } from 'react';
import { Scissors, Camera, LayoutGrid } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Barbers from './components/Barbers';
import Testimonials from './components/Testimonials';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Compensate for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const portfolioImages = [
    'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=600', // Interior
    'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600', // Close up fade
    'https://images.unsplash.com/photo-1621605815841-aa897bd07b4c?auto=format&fit=crop&q=80&w=600', // Action shot
    'https://images.unsplash.com/photo-1593702288056-7927b442d0fa?auto=format&fit=crop&q=80&w=600', // Beard trim
    'https://images.unsplash.com/photo-1512690196236-4bab3b47971e?auto=format&fit=crop&q=80&w=600', // Tools
    'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=600', // Finished style
    'https://images.unsplash.com/photo-1534349762230-e0cadf78f5db?auto=format&fit=crop&q=80&w=600', // Barber shop vibe
    'https://images.unsplash.com/photo-1622286332303-073844890666?auto=format&fit=crop&q=80&w=600'  // Sharp edge
  ];

  return (
    <div className="bg-zinc-950 min-h-screen">
      <Navbar onNavigate={scrollToSection} />
      
      <main>
        <Hero onNavigate={scrollToSection} />
        
        <Services />
        
        {/* Experience Section */}
        <section className="py-24 bg-zinc-900/10">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden border-2 border-zinc-800">
                <img 
                  src="https://images.unsplash.com/photo-1590540179852-2110a54f813a?auto=format&fit=crop&q=80&w=800" 
                  alt="Remodeled Interior" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-amber-500 p-8 rounded-2xl shadow-2xl hidden lg:block">
                <p className="text-zinc-950 font-bebas text-4xl">Since 2012</p>
                <p className="text-zinc-950/80 font-bold uppercase tracking-widest text-xs">Puyallup Pride</p>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm">Our Space</h2>
              <h3 className="text-5xl md:text-7xl font-bebas text-white leading-tight">Completely <span className="text-amber-500">Remodeled</span> for Your Comfort</h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Step into a modern grooming sanctuary. We've updated our shop to offer the perfect balance of vintage barber shop soul and modern luxury. Clean, welcoming, and designed for the best haircut experience in Washington.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-zinc-950 overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Happy client" />
                    </div>
                  ))}
                </div>
                <p className="text-zinc-500 text-sm font-medium">Joined by 2,000+ local regulars</p>
              </div>
            </div>
          </div>
        </section>

        <Barbers />
        
        <div className="relative overflow-hidden py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-amber-500 rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="space-y-4 max-w-xl text-center md:text-left">
                <h3 className="text-4xl md:text-6xl font-bebas text-zinc-950 leading-tight">
                  Ready for the <span className="underline decoration-zinc-950">Sharpest</span> Look of Your Life?
                </h3>
                <p className="text-zinc-900/80 font-bold text-lg uppercase tracking-widest">
                  Accepts Walk-ins • Good For Kids • Professional Service
                </p>
              </div>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-zinc-950 text-white px-12 py-6 rounded-2xl font-bold text-xl uppercase tracking-widest hover:scale-110 transition-all shadow-2xl shrink-0"
              >
                Claim Free Trial
              </button>
            </div>
          </div>
        </div>

        <Testimonials />
        
        {/* Gallery Section */}
        <section className="py-24 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
            <div className="inline-flex items-center space-x-3 text-amber-500 mb-4">
              <Camera size={20} />
              <span className="font-bold uppercase tracking-widest text-sm">From the Shop</span>
            </div>
            <h3 className="text-5xl md:text-7xl font-bebas text-white">Barber Shop Portfolio</h3>
          </div>
          
          <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
            {portfolioImages.map((img, idx) => (
              <div key={idx} className="aspect-square rounded-2xl overflow-hidden group relative">
                <img 
                  src={img} 
                  alt="Barber Le Portfolio" 
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <LayoutGrid size={32} className="text-amber-500" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <a 
              href="https://www.facebook.com/barberleshop/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-zinc-500 hover:text-amber-500 font-bold uppercase tracking-widest text-xs transition-colors"
             >
               <span>View more on Facebook</span>
               <Scissors size={14} className="rotate-90" />
             </a>
          </div>
        </section>

        <Schedule />
        
        <Contact />
      </main>

      <Footer onNavigate={scrollToSection} />

      {/* Persistent Floating CTA for Mobile */}
      <div className="fixed bottom-6 right-6 md:hidden z-40">
        <button 
          onClick={() => scrollToSection('contact')}
          className="bg-amber-500 text-zinc-950 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl animate-bounce"
        >
          <Scissors size={28} />
        </button>
      </div>
    </div>
  );
};

export default App;
