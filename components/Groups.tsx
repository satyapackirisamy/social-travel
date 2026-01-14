
import React from 'react';
import { User } from '../types';

const MOCK_GROUPS = [
  { id: 'g1', name: 'Europe Backpackers 2026', members: 124, img: 'https://picsum.photos/seed/europe/400/300', isPrivate: false },
  { id: 'g2', name: 'West Coast Surfers', members: 45, img: 'https://picsum.photos/seed/surf/400/300', isPrivate: true },
  { id: 'g3', name: 'Foodies in Vietnam', members: 89, img: 'https://picsum.photos/seed/vietnam/400/300', isPrivate: false },
];

const Groups: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="animate-fadeIn">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Travel Groups</h1>
          <p className="text-slate-500 mt-1">Join specialized communities to plan trips together.</p>
        </div>
        <button className="bg-teal-600 text-white px-5 py-2.5 rounded-xl font-bold shadow-lg shadow-teal-100 hover:bg-teal-700 transition">
          Create Group
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_GROUPS.map(group => (
          <div key={group.id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden group hover:shadow-xl transition duration-500">
            <div className="h-40 overflow-hidden relative">
              <img src={group.img} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              {group.isPrivate && (
                <div className="absolute top-4 right-4 w-8 h-8 bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-white border border-white/30">
                  <i className="fa-solid fa-lock text-xs"></i>
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-teal-600 transition mb-2">{group.name}</h3>
              <div className="flex items-center gap-4 text-slate-400 text-xs mb-6">
                <span className="flex items-center gap-1">
                  <i className="fa-solid fa-users"></i>
                  {group.members} members
                </span>
                <span className="flex items-center gap-1">
                   <i className="fa-solid fa-globe"></i>
                   {group.isPrivate ? 'Private' : 'Public'}
                </span>
              </div>
              <div className="flex items-center justify-between gap-3">
                 <div className="flex -space-x-2">
                   {[1,2,3,4].map(i => (
                     <img key={i} src={`https://i.pravatar.cc/150?u=${group.id}${i}`} className="w-8 h-8 rounded-full border-2 border-white shadow-sm" />
                   ))}
                   <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white text-[10px] font-bold text-slate-400 flex items-center justify-center">
                     +20
                   </div>
                 </div>
                 <button className="bg-slate-50 text-slate-700 px-4 py-2 rounded-xl text-xs font-bold hover:bg-teal-600 hover:text-white transition">
                   {group.isPrivate ? 'Request to Join' : 'Join Group'}
                 </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Groups;
