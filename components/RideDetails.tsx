
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { User, RideStatus } from '../types';

const RideDetails: React.FC<{ user: User }> = ({ user }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ride, setRide] = useState<any>(null);
  const [isJoined, setIsJoined] = useState(false);

  useEffect(() => {
    // Simulated fetch
    const mockRideData: any = {
      'r1': {
        id: 'r1', origin: 'Paris', destination: 'Nice', departureTime: '2026-06-12T10:00:00',
        seatsAvailable: 3, pricePerSeat: 85, transportMode: 'Porsche Taycan', status: RideStatus.SCHEDULED,
        description: 'Grand Tourer experience across the French countryside. Charging stops included.',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=2000',
        itinerary: [
          { time: '10:00 AM', loc: 'Place de la Concorde', task: 'Departure' },
          { time: '12:30 PM', loc: 'Auxerre', task: 'Bistro Lunch Stop' },
          { time: '04:00 PM', loc: 'Lyon', task: 'Recharge & Coffee' },
          { time: '08:00 PM', loc: 'Nice Promenade', task: 'Arrival' },
        ],
        passengers: [
          { id: 'u2', name: 'Julian Vance', role: 'Society Elite', img: 'https://i.pravatar.cc/150?u=Julian' },
          { id: 'u3', name: 'Clara Dubois', role: 'Global Nomad', img: 'https://i.pravatar.cc/150?u=Clara' }
        ]
      },
      'r2': {
        id: 'r2', origin: 'London', destination: 'Edinburgh', departureTime: '2026-06-14T08:00:00',
        seatsAvailable: 2, pricePerSeat: 110, transportMode: 'Defender 110', status: RideStatus.SCHEDULED,
        description: 'Rugged luxury. Plenty of space for outdoor gear and luggage.',
        image: 'https://images.unsplash.com/photo-1531152127014-8e393aacc9b2?auto=format&fit=crop&q=80&w=2000',
        itinerary: [
          { time: '08:00 AM', loc: 'King\'s Cross', task: 'Meeting Point' },
          { time: '01:00 PM', loc: 'York', task: 'History Break' },
          { time: '06:30 PM', loc: 'Royal Mile', task: 'Arrival' },
        ],
        passengers: []
      }
    };

    setRide(mockRideData[id || 'r1'] || mockRideData['r1']);
  }, [id]);

  if (!ride) return null;

  return (
    <div className="animate-fadeInUp space-y-12 pb-24">
      {/* Immersive Hero */}
      <div className="relative h-[450px] md:h-[550px] rounded-[4rem] overflow-hidden shadow-2xl">
        <img src={ride.image} className="w-full h-full object-cover" alt={ride.destination} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
        
        <button 
          onClick={() => navigate('/rides')}
          className="absolute top-10 left-10 w-14 h-14 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white border border-white/20 hover:bg-white hover:text-indigo-600 transition-all active:scale-90 z-20"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        <div className="absolute bottom-16 left-12 right-12 flex flex-col md:flex-row md:items-end justify-between gap-10">
           <div className="space-y-4">
             <div className="flex gap-4">
               <span className="bg-indigo-500 text-white px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl border border-white/10">{ride.transportMode}</span>
               <span className="bg-white/20 backdrop-blur-xl text-white px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/10">{ride.status}</span>
             </div>
             <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
               {ride.origin} <i className="fa-solid fa-arrow-right-long text-indigo-400 mx-4"></i> {ride.destination}
             </h1>
             <p className="text-indigo-100/80 font-medium text-xl max-w-2xl">{ride.description}</p>
           </div>
           
           <div className="bg-white/10 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white/20 min-w-[280px] text-center shadow-2xl">
              <p className="text-[10px] font-black text-indigo-200 uppercase tracking-[0.3em] mb-3">Individual Fare</p>
              <h2 className="text-6xl font-black text-white tracking-tighter mb-8">${ride.pricePerSeat}</h2>
              <button 
                onClick={() => setIsJoined(!isJoined)}
                className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 ${
                  isJoined ? 'bg-emerald-500 text-white shadow-xl shadow-emerald-500/20' : 'btn-premium'
                }`}
              >
                {isJoined ? 'Booking Confirmed' : 'Reserve Member Seat'}
              </button>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Itinerary Column */}
        <div className="lg:col-span-8 space-y-12">
           <div className="premium-card p-12">
             <div className="flex items-center justify-between mb-12">
               <h3 className="text-2xl font-black text-slate-800 tracking-tight">Trip Roadmap</h3>
               <div className="flex items-center gap-3 text-indigo-500 bg-indigo-50 px-5 py-2 rounded-2xl">
                 <i className="fa-solid fa-clock text-sm"></i>
                 <span className="text-xs font-black uppercase tracking-widest">
                   {new Date(ride.departureTime).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' })}
                 </span>
               </div>
             </div>

             <div className="relative space-y-12">
               <div className="absolute left-[31px] top-6 bottom-6 w-0.5 bg-indigo-50"></div>
               {ride.itinerary.map((step: any, idx: number) => (
                 <div key={idx} className="flex gap-10 group">
                   <div className="relative z-10 w-16 h-16 bg-white border-2 border-indigo-50 rounded-2xl flex items-center justify-center text-indigo-300 group-hover:border-indigo-500 group-hover:text-indigo-600 transition-all shadow-sm">
                      <i className={`fa-solid ${idx === 0 ? 'fa-car-side' : idx === ride.itinerary.length - 1 ? 'fa-flag-checkered' : 'fa-location-dot'}`}></i>
                   </div>
                   <div className="flex-1 pb-12 border-b border-slate-50 last:border-0 last:pb-0">
                      <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-1">{step.time}</p>
                      <h4 className="text-xl font-black text-slate-800 mb-2">{step.loc}</h4>
                      <p className="text-slate-400 font-medium">{step.task}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>

           <div className="premium-card p-12 bg-slate-900 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-full bg-premium-gradient opacity-10"></div>
              <div className="relative z-10 flex items-center justify-between gap-10 flex-wrap">
                 <div className="space-y-2">
                   <h4 className="text-xl font-black tracking-tight">Split & Settle</h4>
                   <p className="text-slate-400 font-medium text-sm">Automated expense management for fuel, tolls, and dining.</p>
                 </div>
                 <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl">
                   <i className="fa-solid fa-wallet text-amber-400"></i>
                   <span className="text-xs font-black uppercase tracking-widest">Digital Wallet Synced</span>
                 </div>
              </div>
           </div>
        </div>

        {/* Passengers Column */}
        <div className="lg:col-span-4 space-y-8">
           <div className="premium-card p-10">
              <h3 className="text-lg font-black text-slate-800 mb-8 tracking-tight">Society Circle</h3>
              <div className="space-y-8">
                {ride.passengers.length > 0 ? ride.passengers.map((p: any) => (
                  <div key={p.id} className="flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <img src={p.img} className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-lg group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="font-black text-slate-800 text-sm">{p.name}</p>
                        <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mt-0.5">{p.role}</p>
                      </div>
                    </div>
                    <button className="w-10 h-10 bg-indigo-50/50 rounded-xl flex items-center justify-center text-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 transition-all">
                      <i className="fa-solid fa-user-plus text-xs"></i>
                    </button>
                  </div>
                )) : (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto">
                      <i className="fa-solid fa-users text-slate-200 text-2xl"></i>
                    </div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">No Members Yet</p>
                  </div>
                )}
              </div>
              <div className="mt-10 pt-8 border-t border-slate-50">
                 <div className="bg-indigo-50/50 rounded-2xl p-6 text-center">
                    <p className="text-2xl font-black text-indigo-600 tracking-tighter">{ride.seatsAvailable}</p>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1">Available Slots</p>
                 </div>
              </div>
           </div>

           <div className="premium-card p-10 border-indigo-100 bg-indigo-50/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-premium-gradient rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                  <i className="fa-solid fa-shield-check"></i>
                </div>
                <h4 className="font-black text-slate-800 tracking-tight">Trust Verification</h4>
              </div>
              <p className="text-xs text-slate-500 font-medium leading-relaxed mb-8">Every member in this ride has passed our multi-tier verification and holds an Elite Society status.</p>
              <button className="w-full bg-white text-indigo-600 py-4 rounded-xl font-black border border-indigo-100 hover:bg-indigo-50 transition-all text-[10px] uppercase tracking-widest shadow-sm active:scale-95">Verify My Profile</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default RideDetails;
