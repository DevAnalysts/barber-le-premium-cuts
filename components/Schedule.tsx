
import React from 'react';
import { Clock, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Schedule: React.FC = () => {
  const scheduleItems = [
    { day: 'Monday', time: BUSINESS_INFO.hours.mon },
    { day: 'Tuesday', time: BUSINESS_INFO.hours.tue },
    { day: 'Wednesday', time: BUSINESS_INFO.hours.wed },
    { day: 'Thursday', time: BUSINESS_INFO.hours.thu },
    { day: 'Friday', time: BUSINESS_INFO.hours.fri },
    { day: 'Saturday', time: BUSINESS_INFO.hours.sat },
    { day: 'Sunday', time: BUSINESS_INFO.hours.sun, closed: true },
  ];

  return (
    <section id="schedule" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">Availability</h2>
          <h3 className="text-5xl md:text-7xl font-bebas text-white mb-8">Opening Hours</h3>
          <p className="text-zinc-400 text-lg leading-relaxed mb-10">
            We operate on an appointment and walk-in basis. While we recommend booking in advance to ensure 
            your preferred slot, we always strive to accommodate our walk-in clients.
          </p>
          
          <div className="inline-flex items-center space-x-3 bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
            <div className="bg-amber-500/10 p-2 rounded-lg text-amber-500">
              <Calendar size={24} />
            </div>
            <div>
              <p className="text-white font-bold">Closed on Sundays</p>
              <p className="text-zinc-500 text-sm">Family time for our barbers</p>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-3xl p-8 md:p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl"></div>
          
          <div className="space-y-6 relative z-10">
            {scheduleItems.map((item) => (
              <div 
                key={item.day} 
                className={`flex justify-between items-center py-4 border-b border-zinc-800 last:border-0 ${item.closed ? 'text-zinc-600' : 'text-zinc-300'}`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-2 h-2 rounded-full ${item.closed ? 'bg-zinc-800' : 'bg-amber-500'}`}></div>
                  <span className="font-bold text-lg">{item.day}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} className={item.closed ? 'text-zinc-800' : 'text-amber-500'} />
                  <span className={`font-mono ${item.closed ? 'italic' : 'text-white'}`}>{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
