
import React from 'react';
import { User } from '../types';

const Timeline: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-fadeIn">
      {/* Create Post */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex gap-4">
          <img src={user.profilePicture} className="w-10 h-10 rounded-full object-cover" />
          <div className="flex-1 space-y-4">
            <textarea 
              rows={2} 
              placeholder="Share your latest adventure..." 
              className="w-full bg-slate-50 rounded-xl p-4 text-sm outline-none border border-transparent focus:border-teal-500 focus:bg-white transition resize-none"
            ></textarea>
            <div className="flex items-center justify-between">
               <div className="flex gap-4">
                 <button className="text-slate-400 hover:text-teal-600 transition flex items-center gap-2 text-sm font-medium">
                   <i className="fa-solid fa-image"></i>
                   Photo
                 </button>
                 <button className="text-slate-400 hover:text-teal-600 transition flex items-center gap-2 text-sm font-medium">
                   <i className="fa-solid fa-location-dot"></i>
                   Location
                 </button>
                 <button className="text-slate-400 hover:text-teal-600 transition flex items-center gap-2 text-sm font-medium">
                   <i className="fa-solid fa-car"></i>
                   Link Ride
                 </button>
               </div>
               <button className="bg-teal-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-teal-700 transition shadow-lg shadow-teal-100">
                 Post
               </button>
            </div>
          </div>
        </div>
      </div>

      {/* Feed */}
      <div className="space-y-8 pb-12">
        <PostCard 
          author="Sarah Chen" 
          time="3 hours ago" 
          content="Just arrived at the base camp! The view is absolutely insane. 🏔️ Can't wait to start the trek tomorrow morning." 
          img="https://picsum.photos/seed/hike/800/600"
          likes={12}
          comments={3}
        />
        <PostCard 
          author="Alex Rivera" 
          time="5 hours ago" 
          content="If anyone is looking for a ride to the music festival this weekend, I have two seats left in my van. Leaving SF at 10 AM Friday!" 
          likes={5}
          comments={8}
          rideLink="San Francisco to Coachella"
        />
        <PostCard 
          author="Elena Rossi" 
          time="1 day ago" 
          content="Found this amazing little pasta place in Rome that isn't on the tourist maps. Authentic flavors only! 🍝" 
          img="https://picsum.photos/seed/rome/800/600"
          likes={45}
          comments={12}
        />
      </div>
    </div>
  );
};

const PostCard = ({ author, time, content, img, likes, comments, rideLink }: any) => (
  <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm group">
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img src={`https://i.pravatar.cc/150?u=${author}`} className="w-10 h-10 rounded-full border border-slate-100" />
          <div>
            <h4 className="text-sm font-bold text-slate-800">{author}</h4>
            <p className="text-[10px] text-slate-400">{time}</p>
          </div>
        </div>
        <button className="text-slate-300 hover:text-slate-600 transition">
          <i className="fa-solid fa-ellipsis"></i>
        </button>
      </div>
      
      <p className="text-slate-600 text-sm leading-relaxed mb-4">{content}</p>
      
      {rideLink && (
        <div className="bg-teal-50 border border-teal-100 p-3 rounded-xl flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-car text-teal-600"></i>
            <span className="text-xs font-bold text-teal-800">{rideLink}</span>
          </div>
          <button className="text-[10px] font-bold uppercase text-teal-600 hover:underline">View Ride</button>
        </div>
      )}
    </div>

    {img && (
      <div className="relative overflow-hidden cursor-pointer">
        <img src={img} className="w-full max-h-96 object-cover group-hover:scale-105 transition duration-700" />
      </div>
    )}

    <div className="px-6 py-4 flex items-center justify-between bg-slate-50/50">
       <div className="flex gap-6">
         <button className="flex items-center gap-2 text-slate-400 hover:text-rose-500 transition">
           <i className="fa-regular fa-heart"></i>
           <span className="text-xs font-bold">{likes}</span>
         </button>
         <button className="flex items-center gap-2 text-slate-400 hover:text-teal-600 transition">
           <i className="fa-regular fa-comment"></i>
           <span className="text-xs font-bold">{comments}</span>
         </button>
         <button className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition">
           <i className="fa-regular fa-paper-plane"></i>
         </button>
       </div>
       <button className="text-slate-300 hover:text-amber-500 transition">
         <i className="fa-regular fa-bookmark"></i>
       </button>
    </div>
  </div>
);

export default Timeline;
