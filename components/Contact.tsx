
import React, { useState } from 'react';
import { Phone, MapPin, Mail, Send, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">Get In Touch</h2>
          <h3 className="text-5xl md:text-7xl font-bebas text-white">Book Your Next Cut</h3>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <div className="glass-card p-10 rounded-3xl space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-amber-500 p-4 rounded-2xl text-zinc-950 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">Call Us Directly</h4>
                  <p className="text-2xl font-bold text-white">{BUSINESS_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-amber-500 p-4 rounded-2xl text-zinc-950 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">Visit The Shop</h4>
                  <p className="text-xl font-bold text-white leading-tight">
                    {BUSINESS_INFO.address}
                  </p>
                  <a 
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(BUSINESS_INFO.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-500 text-sm font-bold uppercase tracking-widest mt-4 inline-block hover:text-amber-400"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-amber-500 p-4 rounded-2xl text-zinc-950 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">Email Us</h4>
                  <p className="text-2xl font-bold text-white">hello@barberle.com</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden h-[300px] border border-zinc-800 grayscale hover:grayscale-0 transition-all duration-500">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.2241513256157!2d-122.26871322363117!3d47.19253497115599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490fd6969562723%3A0xc3f7a40237e408d2!2sBarber%20Le!5e0!3m2!1sen!2sus!4v1740520000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Barber Le Location"
              ></iframe>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="glass-card p-10 md:p-14 rounded-3xl relative h-full">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle size={64} />
                  </div>
                  <h4 className="text-4xl font-bebas text-white">Thank You!</h4>
                  <p className="text-zinc-400 text-lg">Your booking request has been sent. We'll call you shortly to confirm your time slot.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-zinc-500 text-xs font-bold uppercase tracking-widest px-1">Full Name</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full bg-zinc-950/50 border border-zinc-800 p-4 rounded-xl text-white focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-zinc-500 text-xs font-bold uppercase tracking-widest px-1">Phone Number</label>
                      <input 
                        required 
                        type="tel" 
                        placeholder="(253) 000-0000" 
                        className="w-full bg-zinc-950/50 border border-zinc-800 p-4 rounded-xl text-white focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-zinc-500 text-xs font-bold uppercase tracking-widest px-1">Preferred Service</label>
                    <select 
                      className="w-full bg-zinc-950/50 border border-zinc-800 p-4 rounded-xl text-white focus:border-amber-500 focus:outline-none transition-colors appearance-none"
                    >
                      <option>Precision Fade</option>
                      <option>Classic Gentleman's Cut</option>
                      <option>Royal Shave & Sculpt</option>
                      <option>Junior Master Cut</option>
                      <option>The Full Works</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-zinc-500 text-xs font-bold uppercase tracking-widest px-1">Preferred Date</label>
                      <input 
                        required 
                        type="date" 
                        className="w-full bg-zinc-950/50 border border-zinc-800 p-4 rounded-xl text-white focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-zinc-500 text-xs font-bold uppercase tracking-widest px-1">Preferred Time</label>
                      <select 
                        className="w-full bg-zinc-950/50 border border-zinc-800 p-4 rounded-xl text-white focus:border-amber-500 focus:outline-none transition-colors appearance-none"
                      >
                        <option>Morning (9AM - 12PM)</option>
                        <option>Afternoon (12PM - 4PM)</option>
                        <option>Evening (4PM - 7PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-zinc-500 text-xs font-bold uppercase tracking-widest px-1">Notes / Stylist Preference</label>
                    <textarea 
                      rows={4} 
                      placeholder="Tell us about your hair or specific stylist request..." 
                      className="w-full bg-zinc-950/50 border border-zinc-800 p-4 rounded-xl text-white focus:border-amber-500 focus:outline-none transition-colors"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-amber-500 text-zinc-950 py-5 rounded-xl font-bold text-lg uppercase flex items-center justify-center space-x-3 hover:bg-amber-400 transition-all hover:scale-[1.02]"
                  >
                    <span>Request Booking</span>
                    <Send size={20} />
                  </button>
                  <p className="text-zinc-600 text-center text-xs uppercase tracking-tighter">
                    Booking is a request only. We will contact you to confirm the final time.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
