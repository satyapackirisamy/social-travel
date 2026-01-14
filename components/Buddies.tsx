
import React, { useState, useEffect } from 'react';
import { User } from '../types';
import { UserService } from '../services/api';

const Buddies: React.FC<{ user: User }> = ({ user }) => {
  const [buddies, setBuddies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [requestedIds, setRequestedIds] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadBuddies = async () => {
      try {
        const data = await UserService.getSuggestedBuddies();
        setBuddies(data);
      } catch (err) {
        setBuddies([
          { id: 'b1', name: 'Julian Vance', bio: 'Architecture & Fine Arts. Currently drafting through Western Europe.', location: 'London, UK', img: 'https://i.pravatar.cc/150?u=Julian', status: 'Elite Explorer', match: '98%' },
          { id: 'b2', name: 'Akira Tanaka', bio: 'Tech lead & nomad. Coffee enthusiast. Scaling peaks in Kyoto.', location: 'Tokyo, JP', img: 'https://i.pravatar.cc/150?u=Akira', status: 'Society Member', match: '94%' },
          { id: 'b3', name: 'Sebastian Moretti', bio: 'Slow travel advocate. Finding the heart of Tuscany.', location: 'Florence, IT', img: 'https://i.pravatar.cc/150?u=Sebastian', status: 'Elite Explorer', match: '91%' },
          { id: 'b4', name: 'Clara Dubois', bio: 'Cultural anthropologist exploring Nordic heritage and design.', location: 'Paris, FR', img: 'https://i.pravatar.cc/150?u=Clara', status: 'Legacy Member', match: '89%' },
          { id: 'b5', name: 'Leo Sterling', bio: 'Adventure photography & sailing. Chasing the morning light.', location: 'Sydney, AU', img: 'https://i.pravatar.cc/150?u=Leo', status: 'Nomad Pro', match: '87%' }
        ]);
      } finally {
        setLoading(false);
      }
    };
    loadBuddies();
  }, []);

  const handleConnect = (id: string) => {
    setRequestedIds(prev => [...prev, id]);
  };

  const filtered = buddies.filter(b => 
    b.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    b.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-12 animate-fadeInUp pb-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div className="max-w-xl">
          <span className="text-[11px] font-black text-indigo-500 uppercase tracking-[0.4em] mb-4 block">Persona Discovery</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tighter leading-tight">Elite Society Network</h1>
          <p className="text-slate-400 font-medium text-xl mt-3">Sync with sophisticated explorers whose travel compass aligns with yours.</p>
        </div>
        <div className="relative w-full md:w-96 group">
          <i className="fa-solid fa-magnifying-glass absolute left-6 top-1/2 -translate-y-1/2 text-indigo-300 group-focus-within:text-indigo-600 transition-colors"></i>
          <input 
            type="text" 
            placeholder="Search personas..." 
            className="w-full pl-16 pr-6 py-5 bg-white border border-indigo-50 rounded-[2rem] outline-none focus:ring-4 focus:ring-indigo-50/50 transition-all font-bold text-slate-700 shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {loading ? (
          [1,2,3].map(i => <div key={i} className="h-[480px] bg-white rounded-[3.5rem] animate-pulse border border-indigo-50 shadow-sm"></div>)
        ) : (
          filtered.map(buddy => (
            <div key={buddy.id} className="premium-card p-12 flex flex-col items-center text-center group trip-card border-none bg-white relative">
               <div className="absolute top-8 right-8 bg-emerald-50 text-emerald-600 px-4 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest border border-emerald-100 shadow-sm">
                 {buddy.match} Match
               </div>

               <div className="relative mb-10 mt-4">
                  <div className="absolute inset-0 bg-premium-gradient opacity-10 rounded-full scale-125 blur-3xl group-hover:opacity-20 transition-all duration-1000"></div>
                  <img src={buddy.img} className="relative w-40 h-40 rounded-[3rem] object-cover border-4 border-white shadow-2xl group-hover:rotate-3 transition-transform duration-700" alt={buddy.name} />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-xl border border-indigo-50">
                    <i className="fa-solid fa-shield-check text-sm"></i>
                  </div>
               </div>

               <div className="space-y-2 mb-8">
                 <h3 className="text-3xl font-black text-slate-800 tracking-tight group-hover:text-indigo-600 transition-colors leading-none">{buddy.name}</h3>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] pt-1">
                   {buddy.status}
                 </p>
               </div>
               
               <p className="text-slate-400 text-[11px] font-black uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                 <i className="fa-solid fa-location-dot text-indigo-300"></i> {buddy.location}
               </p>
               
               <p className="text-slate-500 text-sm font-medium leading-relaxed mb-12 line-clamp-2 px-4 italic">
                 "{buddy.bio}"
               </p>

               <div className="w-full flex gap-5 pt-4 border-t border-indigo-50">
                 {requestedIds.includes(buddy.id) ? (
                   <button className="flex-1 bg-emerald-50 text-emerald-600 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest border border-emerald-100 cursor-default flex items-center justify-center gap-3 animate-fadeInUp">
                      <i className="fa-solid fa-circle-check text-lg"></i> Sync Requested
                   </button>
                 ) : (
                   <button 
                    onClick={() => handleConnect(buddy.id)}
                    className="flex-1 btn-premium py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest active:scale-95 shadow-xl shadow-indigo-500/20"
                   >
                     Initialize Sync
                   </button>
                 )}
                 <button className="w-16 h-16 bg-white text-indigo-300 rounded-2xl flex items-center justify-center hover:bg-indigo-50 hover:text-indigo-600 transition-all border border-indigo-50 shadow-sm active:scale-90">
                   <i className="fa-solid fa-paper-plane text-xl"></i>
                 </button>
               </div>
            </div>
          ))
        )}
      </div>

      {!loading && filtered.length === 0 && (
        <div className="text-center py-32 bg-white rounded-[4rem] border-2 border-dashed border-indigo-50 shadow-sm animate-fadeInUp">
           <div className="w-24 h-24 bg-indigo-50/50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
             <i className="fa-solid fa-ghost text-indigo-100 text-5xl"></i>
           </div>
           <h3 className="text-3xl font-black text-slate-800 tracking-tight">Persona Not Found</h3>
           <p className="text-slate-400 font-medium text-xl mt-3">Try adjusting your filters to discover more refined travelers.</p>
           <button 
            onClick={() => setSearchTerm('')}
            className="mt-10 bg-indigo-50 text-indigo-600 px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-indigo-100 transition-all"
           >
             Clear Selection
           </button>
        </div>
      )}
    </div>
  );
};

export default Buddies;
