
import React, { useState } from 'react';
import { User } from '../types';
import { generateItinerary } from '../services/geminiService';

const AIPlanner: React.FC<{ user: User }> = ({ user }) => {
  const [destination, setDestination] = useState('');
  const [days, setDays] = useState(3);
  const [interests, setInterests] = useState('');
  const [itinerary, setItinerary] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!destination || !interests) return;
    setLoading(true);
    setError('');
    try {
      const result = await generateItinerary(destination, days, interests);
      setItinerary(result);
    } catch (err) {
      setError('Connection issues. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-fadeInUp">
      <div className="text-center max-w-2xl mx-auto">
        <div className="w-20 h-20 bg-premium-gradient rounded-[2rem] flex items-center justify-center text-white text-4xl mx-auto mb-8 shadow-2xl shadow-indigo-500/20 border border-white/20">
          <i className="fa-solid fa-sparkles"></i>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Magic Itinerary</h1>
        <p className="text-slate-500 text-lg font-medium">Harness the power of AI to create a hyper-personalized travel plan in seconds.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <div className="bg-white p-10 rounded-[3rem] border border-indigo-50 shadow-2xl shadow-indigo-100/50 space-y-8 sticky top-28">
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Destination</label>
                <div className="relative">
                  <i className="fa-solid fa-map-pin absolute left-4 top-1/2 -translate-y-1/2 text-indigo-300"></i>
                  <input 
                    type="text" 
                    placeholder="e.g. Kyoto, Japan" 
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-2xl border border-indigo-50 outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all font-bold text-slate-900"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Trip Duration</label>
                <div className="flex items-center gap-3">
                  {[1, 3, 5, 7].map(num => (
                    <button 
                      key={num}
                      onClick={() => setDays(num)}
                      className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all border ${
                        days === num 
                        ? 'bg-premium-gradient text-white border-transparent shadow-lg shadow-indigo-500/20' 
                        : 'bg-white text-slate-500 border-indigo-50 hover:border-indigo-200'
                      }`}
                    >
                      {num} {num === 1 ? 'Day' : 'Days'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Your Interests</label>
                <textarea 
                  rows={4}
                  placeholder="e.g. Authentic ramen, zen gardens, photography, luxury stays..." 
                  className="w-full px-5 py-4 bg-slate-50 rounded-2xl border border-indigo-50 outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all font-bold text-slate-900 resize-none"
                  value={interests}
                  onChange={(e) => setInterests(e.target.value)}
                ></textarea>
              </div>
            </div>

            <button 
              onClick={handleGenerate}
              disabled={loading}
              className={`w-full py-5 rounded-2xl font-black text-white shadow-2xl transition-all flex items-center justify-center gap-3 active:scale-95 ${
                loading ? 'bg-indigo-300 cursor-not-allowed' : 'btn-premium'
              }`}
            >
              {loading ? (
                <>
                  <i className="fa-solid fa-spinner-third fa-spin text-xl"></i>
                  Summoning Plan...
                </>
              ) : (
                <>
                  <i className="fa-solid fa-wand-sparkles text-xl"></i>
                  Create My Plan
                </>
              )}
            </button>

            {error && <div className="p-3 bg-rose-50 rounded-xl text-rose-500 text-xs text-center font-bold border border-rose-100">{error}</div>}
          </div>
        </div>

        <div className="lg:col-span-8">
          {!itinerary && !loading ? (
            <div className="h-full min-h-[500px] flex flex-col items-center justify-center bg-white border-2 border-dashed border-indigo-100 rounded-[3rem] p-20 text-center">
              <div className="w-24 h-24 bg-indigo-50/50 rounded-full flex items-center justify-center mb-8">
                <i className="fa-solid fa-map-location-dot text-indigo-200 text-5xl"></i>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Your Adventure Awaits</h3>
              <p className="text-slate-400 font-medium max-w-sm">Complete the form to generate a world-class travel itinerary tailored just for you.</p>
            </div>
          ) : loading ? (
            <div className="bg-white p-12 rounded-[3rem] border border-indigo-50 shadow-2xl space-y-10">
               <div className="space-y-4">
                  <div className="h-10 bg-indigo-50 rounded-2xl w-2/3 animate-pulse"></div>
                  <div className="h-4 bg-indigo-50 rounded-full w-full animate-pulse"></div>
                  <div className="h-4 bg-indigo-50 rounded-full w-4/5 animate-pulse"></div>
               </div>
               <div className="space-y-12">
                  {[1,2].map(i => (
                    <div key={i} className="flex gap-8">
                      <div className="w-12 h-12 rounded-full bg-indigo-50 animate-pulse shrink-0"></div>
                      <div className="flex-1 space-y-4">
                        <div className="h-8 bg-indigo-50 rounded-xl w-1/2 animate-pulse"></div>
                        <div className="h-24 bg-indigo-50 rounded-2xl w-full animate-pulse"></div>
                      </div>
                    </div>
                  ))}
               </div>
            </div>
          ) : (
            <div className="bg-white rounded-[3rem] border border-indigo-50 shadow-2xl overflow-hidden animate-fadeInUp">
              <div className="bg-slate-900 p-12 text-white relative">
                 <div className="absolute top-0 right-0 w-64 h-full bg-premium-gradient opacity-20"></div>
                 <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                   <div>
                     <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 border border-white/10">Personalized Trip</span>
                     <h2 className="text-3xl md:text-4xl font-black tracking-tight">{itinerary.title}</h2>
                     <p className="text-slate-400 mt-2 font-medium max-w-xl">{itinerary.summary}</p>
                   </div>
                   <button className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl text-white transition-all backdrop-blur-md border border-white/10 shadow-xl">
                     <i className="fa-solid fa-cloud-arrow-down text-xl"></i>
                   </button>
                 </div>
              </div>

              <div className="p-12 space-y-16">
                {itinerary.days?.map((day: any) => (
                  <div key={day.day} className="relative">
                    <div className="flex items-center gap-6 mb-10">
                      <div className="w-16 h-16 bg-premium-gradient rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-indigo-500/20 shrink-0">
                        {day.day}
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">Adventure Day</p>
                        <h3 className="text-2xl font-black text-slate-900 tracking-tight">{day.theme}</h3>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6 relative">
                      <div className="absolute left-[31px] top-12 bottom-0 w-[2px] bg-indigo-50"></div>
                      {day.activities?.map((act: any, idx: number) => (
                        <div key={idx} className="flex gap-8 group">
                          <div className="relative z-10 w-16 flex justify-center pt-6">
                            <div className="w-4 h-4 rounded-full bg-white border-4 border-indigo-50 group-hover:border-indigo-500 transition-colors shadow-sm"></div>
                          </div>
                          <div className="flex-1 bg-slate-50/50 hover:bg-white p-8 rounded-3xl border border-transparent hover:border-indigo-50 hover:shadow-xl transition-all duration-500">
                            <div className="flex items-center justify-between mb-4">
                               <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400 bg-white px-3 py-1 rounded-full border border-indigo-50">
                                 {act.time}
                               </span>
                            </div>
                            <h4 className="text-lg font-black text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{act.task}</h4>
                            <p className="text-slate-500 text-sm leading-relaxed font-medium">{act.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-slate-50 p-12 border-t border-indigo-50">
                 <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
                    <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-premium-gradient opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-all duration-700"></div>
                    <div className="relative z-10 text-center md:text-left">
                      <h4 className="text-2xl font-black tracking-tight mb-2">Love this plan?</h4>
                      <p className="text-slate-400 font-medium">Create a public ride with this itinerary to find travel buddies!</p>
                    </div>
                    <button className="relative z-10 btn-premium px-10 py-4 rounded-2xl font-black transition-all shrink-0">
                      Sync to My Rides
                    </button>
                 </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIPlanner;
