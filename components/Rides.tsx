
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Ride, RideStatus } from '../types';
import { RideService } from '../services/api';

const Rides: React.FC<{ user: User }> = ({ user }) => {
  const navigate = useNavigate();
  const [rides, setRides] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchRides = async () => {
      setIsLoading(true);
      try {
        const data = await RideService.getAll();
        setRides(data);
      } catch (err) {
        setRides([
          {
            id: 'r1', driverId: 'u1', origin: 'Paris', destination: 'Nice', departureTime: '2026-06-12T10:00:00',
            seatsAvailable: 3, pricePerSeat: 85, transportMode: 'Porsche Taycan', status: RideStatus.SCHEDULED,
            description: 'Grand Tourer experience across the French countryside. Charging stops included.', passengers: [],
            image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800'
          },
          {
            id: 'r2', driverId: 'u2', origin: 'London', destination: 'Edinburgh', departureTime: '2026-06-14T08:00:00',
            seatsAvailable: 2, pricePerSeat: 110, transportMode: 'Defender 110', status: RideStatus.SCHEDULED,
            description: 'Rugged luxury. Plenty of space for outdoor gear and luggage.', passengers: [],
            image: 'https://images.unsplash.com/photo-1531152127014-8e393aacc9b2?auto=format&fit=crop&q=80&w=800'
          },
          {
            id: 'r3', driverId: 'u3', origin: 'Milan', destination: 'Lake Como', departureTime: '2026-06-15T11:30:00',
            seatsAvailable: 1, pricePerSeat: 45, transportMode: 'Alfa Romeo Giulia', status: RideStatus.SCHEDULED,
            description: 'Quick transfer for a weekend getaway. Pure Italian style.', passengers: [],
            image: 'https://images.unsplash.com/photo-1528114039593-4366cc844691?auto=format&fit=crop&q=80&w=800'
          },
          {
            id: 'r4', driverId: 'u4', origin: 'Zermatt', destination: 'St. Moritz', departureTime: '2026-06-18T09:00:00',
            seatsAvailable: 4, pricePerSeat: 150, transportMode: 'Mercedes EQS', status: RideStatus.SCHEDULED,
            description: 'Silent luxury through the heart of the Alps. Panoramic views guaranteed.', passengers: [],
            image: 'https://images.unsplash.com/photo-1502943693086-33b5b1cfdf2f?auto=format&fit=crop&q=80&w=800'
          }
        ]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRides();
  }, []);

  const filteredRides = rides.filter((r: any) => 
    r.destination.toLowerCase().includes(searchQuery.toLowerCase()) || 
    r.origin.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-12 animate-fadeInUp pb-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div className="max-w-xl">
          <span className="text-[11px] font-black text-indigo-500 uppercase tracking-[0.4em] mb-4 block">Regional Logistics</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tighter">Boutique Ride Network</h1>
          <p className="text-slate-400 font-medium text-xl mt-3">Find your seat in a curated selection of vetted, elite transportation.</p>
        </div>
        <div className="flex gap-5 w-full md:w-auto">
          <div className="relative flex-1 md:w-80 group">
            <i className="fa-solid fa-magnifying-glass absolute left-6 top-1/2 -translate-y-1/2 text-indigo-300 group-focus-within:text-indigo-600 transition-colors"></i>
            <input 
              type="text" 
              placeholder="Where to next?" 
              className="w-full pl-16 pr-6 py-5 bg-white border border-indigo-50 rounded-[2rem] outline-none focus:ring-4 focus:ring-indigo-50/50 transition-all font-bold text-slate-700 shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="btn-premium px-10 py-5 rounded-[2rem] font-black shadow-2xl flex items-center gap-3 shrink-0 active:scale-95">
            <i className="fa-solid fa-plus text-sm"></i>
            Offer Ride
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
           {[1,2,3].map(i => <div key={i} className="h-[500px] bg-white rounded-[3.5rem] animate-pulse border border-indigo-50"></div>)}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredRides.map((ride: any) => {
            return (
              <div 
                key={ride.id} 
                onClick={() => navigate(`/rides/${ride.id}`)}
                className="premium-card overflow-hidden group cursor-pointer flex flex-col h-full trip-card"
              >
                 <div className="h-64 overflow-hidden relative shrink-0">
                    <img src={ride.image} className="w-full h-full object-cover trip-card-image" alt={ride.destination} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-indigo-600 shadow-xl">
                      {ride.transportMode}
                    </div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <p className="text-[10px] font-black uppercase text-indigo-100 tracking-[0.2em] mb-1">Departure</p>
                      <p className="text-base font-black">{new Date(ride.departureTime).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' })}</p>
                    </div>
                    <div className="absolute top-6 right-6 text-right">
                      <div className="bg-premium-gradient text-white px-5 py-2.5 rounded-2xl shadow-2xl">
                        <p className="text-[9px] font-black uppercase text-indigo-100 tracking-widest mb-0.5">Seat</p>
                        <p className="text-xl font-black">${ride.pricePerSeat}</p>
                      </div>
                    </div>
                 </div>
                 
                 <div className="p-10 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-black text-slate-800 group-hover:text-indigo-600 transition-colors tracking-tighter leading-tight">
                        {ride.origin} <i className="fa-solid fa-arrow-right-long mx-3 text-indigo-100 group-hover:text-indigo-200 transition-colors"></i> {ride.destination}
                      </h3>
                      <p className="text-sm text-slate-400 font-medium leading-relaxed line-clamp-3">
                        {ride.description}
                      </p>
                    </div>

                    <div className="space-y-8 pt-8 border-t border-indigo-50 mt-8">
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-xl bg-indigo-50/50 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all duration-500">
                             <i className="fa-solid fa-shield-check"></i>
                           </div>
                           <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Elite Society</span>
                         </div>
                         <div className="flex -space-x-2">
                           {[1, 2].map(i => (
                             <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-indigo-100 overflow-hidden">
                               <img src={`https://i.pravatar.cc/100?u=passenger${i}${ride.id}`} className="w-full h-full object-cover" />
                             </div>
                           ))}
                         </div>
                      </div>

                      <button 
                        className="w-full py-4.5 rounded-[1.8rem] font-black text-[10px] uppercase tracking-widest transition-all active:scale-[0.98] btn-premium"
                      >
                        View Full Itinerary
                      </button>
                    </div>
                 </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Rides;
