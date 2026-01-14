
import React, { useState } from 'react';
import { User, VendorType, Vendor } from '../types';

const MOCK_VENDORS: Vendor[] = [
  {
    id: 'v1',
    ownerId: 'u5',
    name: 'Mountain View Resort',
    type: VendorType.HOTEL,
    description: 'Breathtaking views of the Rockies with modern amenities and organic breakfast.',
    location: 'Denver, CO',
    pricePerNight: 180,
    image: 'https://images.unsplash.com/photo-1445013111723-6a4bb1371109?auto=format&fit=crop&q=80&w=800',
    amenities: ['Pool', 'Free WiFi', 'Breakfast', 'Spa']
  },
  {
    id: 'v2',
    ownerId: 'u6',
    name: 'Coastal Dream Houseboat',
    type: VendorType.HOUSEBOAT,
    description: 'Live on the water in this luxury houseboat. Perfect for small groups.',
    location: 'Seattle, WA',
    pricePerNight: 240,
    image: 'https://images.unsplash.com/photo-1544551763-47a0159f963f?auto=format&fit=crop&q=80&w=800',
    amenities: ['Kitchen', 'Deck', 'Fishing Gear', 'Kayak']
  },
  {
    id: 'v3',
    ownerId: 'u7',
    name: 'Savory Trails Food Walk',
    type: VendorType.ACTIVITY,
    description: 'Experience the hidden culinary gems of the city with a local guide.',
    location: 'Chicago, IL',
    pricePerNight: 45,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
    amenities: ['Tastings', 'Guided Tour', 'Drink Included']
  }
];

const Marketplace: React.FC<{ user: User }> = ({ user }) => {
  const [filter, setFilter] = useState<VendorType | 'All'>('All');

  const filteredVendors = filter === 'All' 
    ? MOCK_VENDORS 
    : MOCK_VENDORS.filter(v => v.type === filter);

  return (
    <div className="space-y-12 animate-fadeInUp pb-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div className="max-w-xl">
          <span className="text-[11px] font-black text-indigo-500 uppercase tracking-[0.4em] mb-4 block">Society Marketplace</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tighter">Curated Stays & Events</h1>
          <p className="text-slate-400 font-medium text-xl mt-3">Discover exclusive experiences from vetted partners of the Flettra society.</p>
        </div>
        <div className="flex bg-white/60 backdrop-blur-md p-1.5 rounded-[1.8rem] border border-indigo-50 shadow-sm overflow-x-auto scrollbar-hide">
          {['All', ...Object.values(VendorType)].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type as any)}
              className={`px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${
                filter === type 
                  ? 'bg-premium-gradient text-white shadow-lg shadow-indigo-500/20' 
                  : 'text-slate-400 hover:text-indigo-600 hover:bg-indigo-50/50'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredVendors.map(vendor => (
          <div key={vendor.id} className="premium-card overflow-hidden group cursor-pointer flex flex-col h-full trip-card">
            <div className="relative h-72 overflow-hidden shrink-0">
              <img src={vendor.image} className="w-full h-full object-cover trip-card-image" alt={vendor.name} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-6 left-6">
                <span className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-indigo-600 shadow-xl">
                  {vendor.type}
                </span>
              </div>
              <button className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white hover:bg-white hover:text-rose-500 transition-all border border-white/30 shadow-2xl active:scale-90">
                <i className="fa-regular fa-heart text-lg"></i>
              </button>
            </div>
            
            <div className="p-10 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-black text-slate-800 group-hover:text-indigo-600 transition-colors tracking-tighter leading-tight">{vendor.name}</h3>
                  <div className="flex items-center gap-1.5 text-amber-500 font-black">
                    <i className="fa-solid fa-star text-xs"></i>
                    <span className="text-sm">4.8</span>
                  </div>
                </div>
                
                <p className="text-slate-400 text-[11px] font-black uppercase tracking-[0.2em] flex items-center gap-2 mb-6">
                  <i className="fa-solid fa-location-dot text-indigo-400"></i>
                  {vendor.location}
                </p>
                
                <p className="text-slate-500 text-sm font-medium leading-relaxed line-clamp-2 mb-8">
                  {vendor.description}
                </p>

                <div className="flex flex-wrap gap-2.5 mb-10">
                  {vendor.amenities.slice(0, 3).map(am => (
                    <span key={am} className="text-[9px] font-black text-indigo-400 uppercase tracking-widest bg-indigo-50/50 px-3 py-1.5 rounded-lg border border-indigo-100/50">
                      {am}
                    </span>
                  ))}
                  {vendor.amenities.length > 3 && (
                    <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest px-2 py-1.5">
                      +{vendor.amenities.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between pt-8 border-t border-indigo-50">
                <div>
                  <p className="text-3xl font-black text-slate-800 tracking-tighter">${vendor.pricePerNight}<span className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">/ night</span></p>
                </div>
                <button className="btn-premium px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest active:scale-95 shadow-xl shadow-indigo-500/20">
                  Secure Entry
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
