
import React from 'react';
import { User } from '../types';
import { Link } from 'react-router-dom';

const Dashboard: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="space-y-12 lg:space-y-16 animate-fadeInUp pb-12">
      {/* Personalized Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tighter">Welcome back, <span className="text-premium-gradient">{user.name.split(' ')[0]}</span>.</h1>
          <p className="text-slate-400 font-medium text-xl mt-3">Curating your next masterpiece journey.</p>
        </div>
        <div className="flex gap-5">
          <Link to="/ai-planner" className="btn-premium px-10 py-5 rounded-[1.8rem] font-black text-sm active:scale-95 shadow-lg">
             <i className="fa-solid fa-sparkles mr-2"></i> Summon AI Assistant
          </Link>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-14">
           <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black text-slate-800 tracking-tight uppercase tracking-[0.1em]">Active Itineraries</h2>
              <button className="text-xs font-black text-indigo-600 uppercase tracking-widest hover:underline underline-offset-[6px]">Sync with Map</button>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             <LuxuryTripCard 
                title="Cinque Terre Yachting" 
                location="Liguria, Italy" 
                price="€180" 
                img="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800"
                tags={['Private Boat', 'Verfied']}
             />
             <LuxuryTripCard 
                title="Lapland Winter Trek" 
                location="Finland" 
                price="€115" 
                img="https://images.unsplash.com/photo-1491555103944-7c647fd857e6?auto=format&fit=crop&w=800"
                tags={['Expedition', 'Winter']}
             />
           </div>

           <div className="premium-card p-14 bg-premium-gradient text-white relative overflow-hidden group border-none shadow-2xl shadow-indigo-500/20">
              <div className="absolute top-0 right-0 w-[500px] h-full bg-white/5 -translate-y-20 rotate-45 group-hover:bg-white/10 transition-all duration-[2000ms]"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="max-w-md space-y-4 text-center md:text-left">
                  <h3 className="text-3xl font-black tracking-tight leading-tight">Proprietary Travel Intelligence</h3>
                  <p className="text-indigo-100 font-medium leading-relaxed opacity-90">Harness the Flettra AI engine to generate masterpiece itineraries based on your member preferences.</p>
                </div>
                <Link to="/ai-planner" className="bg-white text-indigo-600 hover:bg-indigo-50 px-12 py-5 rounded-2xl font-black transition-all shadow-2xl whitespace-nowrap active:scale-95">
                  Launch AI Assistant
                </Link>
              </div>
           </div>
        </div>

        <div className="lg:col-span-4 space-y-12">
           <div className="premium-card p-12">
              <h3 className="text-xl font-black text-slate-800 mb-10 tracking-tight">Society Portfolio</h3>
              <div className="space-y-10">
                <DashboardStatRow label="Compass Points" value={user.compassPoints.toString()} icon="fa-compass-drafting" color="text-amber-500" />
                <DashboardStatRow label="Active Bookings" value="12" icon="fa-bookmark" color="text-emerald-500" />
                <DashboardStatRow label="Society Buddies" value={user.buddies.length.toString()} icon="fa-user-group" color="text-indigo-500" />
                <DashboardStatRow label="Member Level" value="Emerald" icon="fa-gem" color="text-violet-500" />
              </div>
           </div>

           <div className="premium-card p-12 bg-indigo-50/50 border-indigo-100 relative overflow-hidden group">
              <div className="flex items-center gap-6 mb-8">
                 <div className="w-16 h-16 bg-premium-gradient rounded-[1.5rem] flex items-center justify-center text-white text-2xl shadow-lg shadow-indigo-500/20 group-hover:rotate-6 transition-all duration-500">
                   <i className="fa-solid fa-crown"></i>
                 </div>
                 <div>
                   <h4 className="font-black text-slate-800 text-xl tracking-tight">Elite Explorer</h4>
                   <p className="text-[10px] text-indigo-600 font-black uppercase tracking-[0.3em] mt-1.5">Verified Status</p>
                 </div>
              </div>
              <p className="text-sm text-slate-500 font-medium mb-10 leading-relaxed">Your elite standing ensures priority syncing on all premium regional ride-shares and boutique transfers.</p>
              <button className="w-full bg-white text-indigo-600 py-5 rounded-2xl font-black border border-indigo-100 hover:bg-indigo-50 transition-all text-sm shadow-sm active:scale-95">Upgrade Benefits</button>
           </div>
        </div>
      </div>
    </div>
  );
};

const DashboardStatRow = ({ label, value, icon, color }: any) => (
  <div className="flex items-center justify-between group cursor-default">
    <div className="flex items-center gap-5">
      <div className={`w-14 h-14 bg-indigo-50/50 rounded-2xl flex items-center justify-center text-xl ${color} group-hover:scale-110 group-hover:bg-indigo-50 transition-all duration-500`}>
        <i className={`fa-solid ${icon}`}></i>
      </div>
      <span className="text-sm font-bold text-slate-400 group-hover:text-slate-600 transition-colors uppercase tracking-widest">{label}</span>
    </div>
    <span className="text-2xl font-black text-slate-800 tracking-tighter">{value}</span>
  </div>
);

const LuxuryTripCard = ({ title, location, price, img, tags }: any) => (
  <div className="premium-card overflow-hidden group cursor-pointer h-full flex flex-col trip-card">
    <div className="h-64 overflow-hidden relative shrink-0">
      <img src={img} className="w-full h-full object-cover trip-card-image" alt={title} />
      <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-2xl font-black text-indigo-600 text-sm shadow-2xl">{price}</div>
      <div className="absolute bottom-6 left-6">
        <div className="flex gap-3">
          {tags.map((tag: string) => (
            <span key={tag} className="px-4 py-1.5 bg-indigo-900/40 backdrop-blur-xl text-white text-[10px] font-black uppercase rounded-xl border border-white/20 tracking-widest">{tag}</span>
          ))}
        </div>
      </div>
    </div>
    <div className="p-10 flex-1 flex flex-col justify-between">
      <div>
        <h4 className="text-2xl font-black text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors tracking-tight leading-tight">{title}</h4>
        <p className="text-slate-400 text-[11px] font-black uppercase tracking-[0.3em]"><i className="fa-solid fa-location-dot mr-2 text-indigo-400"></i> {location}</p>
      </div>
      <div className="mt-10 pt-8 border-t border-indigo-50 flex items-center justify-between">
        <div className="flex -space-x-3">
           {[1,2,3].map(i => <img key={i} src={`https://i.pravatar.cc/150?u=${title}${i}`} className="w-10 h-10 rounded-2xl border-2 border-white shadow-md ring-2 ring-indigo-50/30" />)}
        </div>
        <span className="text-[11px] font-black text-indigo-300 uppercase tracking-[0.3em]">4 Society Slots</span>
      </div>
    </div>
  </div>
);

export default Dashboard;
