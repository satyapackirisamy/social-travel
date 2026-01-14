
import React from 'react';
import { User, SubscriptionTier } from '../types';

const Profile: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="h-48 bg-gradient-to-r from-teal-400 to-indigo-500 relative">
          <div className="absolute -bottom-12 left-8 flex items-end gap-6">
            <div className="relative">
              <img 
                src={user.profilePicture} 
                className="w-32 h-32 rounded-3xl object-cover border-4 border-white shadow-xl"
              />
              <button className="absolute bottom-2 right-2 w-8 h-8 bg-teal-600 text-white rounded-xl flex items-center justify-center hover:bg-teal-700 transition border-2 border-white shadow-sm">
                <i className="fa-solid fa-camera text-xs"></i>
              </button>
            </div>
            <div className="pb-4">
              <h1 className="text-2xl font-black text-slate-800">{user.name}</h1>
              <p className="text-slate-500 font-medium">{user.location}</p>
            </div>
          </div>
        </div>

        <div className="pt-20 px-8 pb-8 flex flex-col md:flex-row justify-between gap-8">
           <div className="max-w-md space-y-6">
             <section>
               <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">Bio</h3>
               <p className="text-slate-600 leading-relaxed">{user.bio}</p>
             </section>
             <div className="flex gap-4">
               <button className="bg-slate-100 text-slate-700 px-6 py-2.5 rounded-xl font-bold hover:bg-slate-200 transition">
                 Edit Profile
               </button>
               <button className="bg-slate-100 text-slate-700 px-6 py-2.5 rounded-xl font-bold hover:bg-slate-200 transition">
                 Privacy Settings
               </button>
             </div>
           </div>
           
           <div className="flex-1 max-w-sm">
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
               <div className="flex items-center justify-between">
                 <h4 className="font-bold text-slate-800">Account Status</h4>
                 <span className="bg-teal-100 text-teal-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Verified</span>
               </div>
               <div className="flex items-center justify-between py-3 border-y border-slate-200/50">
                 <p className="text-sm text-slate-500">Compass Points</p>
                 <p className="font-bold text-amber-600 flex items-center gap-1">
                   <i className="fa-solid fa-compass"></i>
                   {user.compassPoints} CP
                 </p>
               </div>
               <div className="flex items-center justify-between">
                 <p className="text-sm text-slate-500">Joined Date</p>
                 <p className="font-bold text-slate-700">Jan 2025</p>
               </div>
             </div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-slate-800 mb-6">Subscription Plans</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <PlanCard 
              tier={SubscriptionTier.BASIC} 
              price="$9.99" 
              active={user.subscription === 'Basic'} 
              features={['20 AI Planner Queries', 'Priority Buddy Finding', 'Ad-free Experience']}
            />
            <PlanCard 
              tier={SubscriptionTier.PREMIUM} 
              price="$19.99" 
              active={user.subscription === 'Premium'} 
              features={['Unlimited AI Queries', 'Global Travel Buddies', 'Exclusive Vendor Deals', 'Priority Support']}
            />
          </div>
        </div>

        <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition duration-500">
             <i className="fa-solid fa-rocket text-8xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-4">Enterprise</h3>
          <p className="text-slate-400 text-sm mb-6">Need a custom solution for your travel agency or team?</p>
          <ul className="space-y-3 mb-8">
            <li className="text-xs flex items-center gap-2"><i className="fa-solid fa-check text-teal-400"></i> Custom Branding</li>
            <li className="text-xs flex items-center gap-2"><i className="fa-solid fa-check text-teal-400"></i> Bulk Subscriptions</li>
            <li className="text-xs flex items-center gap-2"><i className="fa-solid fa-check text-teal-400"></i> API Access</li>
          </ul>
          <button className="w-full bg-white text-slate-900 py-3 rounded-xl font-bold hover:bg-teal-500 hover:text-white transition">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

const PlanCard = ({ tier, price, active, features }: any) => (
  <div className={`p-6 rounded-2xl border-2 transition duration-300 ${active ? 'border-teal-500 bg-teal-50/30' : 'border-slate-100 hover:border-slate-200'}`}>
    <div className="flex items-center justify-between mb-2">
      <h4 className="font-bold text-slate-800">{tier}</h4>
      {active && <span className="text-[10px] font-bold text-teal-600 uppercase">Current</span>}
    </div>
    <p className="text-2xl font-black text-slate-800 mb-4">{price}<span className="text-xs font-normal text-slate-400">/mo</span></p>
    <ul className="space-y-2 mb-6">
      {features.map((f: string) => (
        <li key={f} className="text-[11px] text-slate-500 flex items-center gap-2">
          <i className="fa-solid fa-circle-check text-teal-500"></i>
          {f}
        </li>
      ))}
    </ul>
    {!active && (
      <button className="w-full py-2 bg-slate-900 text-white rounded-lg text-sm font-bold hover:bg-teal-600 transition">
        Upgrade
      </button>
    )}
  </div>
);

export default Profile;
