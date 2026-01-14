
import React, { useState, useEffect } from 'react';

interface LandingProps {
  onLogin: () => void;
}

const Landing: React.FC<LandingProps> = ({ onLogin }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const appFeatureSlides = [
    {
      img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2000",
      title: "Shared Logistics",
      location: "Premium Ride-Sharing",
      desc: "Coordinate high-end transfers from Paris to the Alps. Split costs effortlessly with verified Flettra members in premium EVs and SUVs."
    },
    {
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000",
      title: "Buddy Discovery",
      location: "The Society Network",
      desc: "Stop traveling alone. Our multi-tier vetting system connects you with sophisticated personas who share your interests and itinerary."
    },
    {
      img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=2000",
      title: "AI Itineraries",
      location: "Gemini Concierge",
      desc: "Generate master-class travel plans in seconds. Our AI maps out hidden gems, dining, and transit based on your personal 'Compass Points'."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % appFeatureSlides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [appFeatureSlides.length]);

  return (
    <div className="bg-[#fcfcff] min-h-screen font-['Plus_Jakarta_Sans'] text-slate-800 overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-900">
      {/* Elegant Gradient Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[100] h-20 glass-nav px-8 md:px-16 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-premium-gradient rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-indigo-500/20 group-hover:rotate-12 transition-all duration-500">F</div>
          <span className="text-xl font-black tracking-tighter uppercase text-slate-900 group-hover:text-indigo-600 transition-colors">Flettra</span>
        </div>
        <div className="hidden lg:flex items-center gap-12">
          <a href="#about" className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-indigo-600 transition-all">The Ethos</a>
          <a href="#destinations" className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-indigo-600 transition-all">App Modules</a>
          <a href="#download" className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-indigo-600 transition-all">Mobile App</a>
          <a href="#pricing" className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-indigo-600 transition-all">Membership</a>
          <button onClick={onLogin} className="btn-premium px-10 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest active:scale-95">
            Launch Platform
          </button>
        </div>
      </nav>

      {/* Hero Section: Focused on App Utility */}
      <section className="relative pt-44 pb-32 px-8 md:px-16 lg:px-24">
        <div className="absolute top-0 left-0 w-full h-[1000px] bg-gradient-to-b from-indigo-50/50 to-transparent -z-10"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12 animate-fadeInUp">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-indigo-50 rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-indigo-500 border border-indigo-100 shadow-sm">
              <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(99,102,241,0.5)]"></span>
              Synchronized Exploration Engine
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.95] tracking-tight text-slate-900">
              Travel <br/> <span className="text-premium-gradient">Harmonized.</span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl max-w-xl font-medium leading-relaxed">
              Flettra is the operating system for sophisticated nomads. Find verified buddies, coordinate premium regional transport, and generate AI-driven itineraries in one seamless ecosystem.
            </p>
            <div className="flex flex-wrap gap-8 pt-6">
              <button onClick={onLogin} className="btn-premium px-14 py-6 rounded-[2.8rem] font-black text-lg active:scale-95">
                Start Exploring
              </button>
              <button className="bg-white text-slate-700 border border-indigo-50 px-14 py-6 rounded-[2.8rem] font-black text-lg hover:bg-indigo-50/30 transition-all active:scale-95 shadow-sm">
                View Ride Network
              </button>
            </div>
          </div>
          <div className="relative h-[650px] lg:h-[800px] animate-fadeInUp delay-300">
            <div className="absolute inset-0 bg-indigo-600/5 rounded-[5rem] rotate-3 blur-2xl"></div>
            <div className="absolute inset-0 bg-purple-600/5 rounded-[5rem] -rotate-2 blur-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2000" 
              className="relative w-full h-full object-cover rounded-[5rem] shadow-[0_50px_100px_-20px_rgba(99,102,241,0.2)] border-[12px] border-white"
              alt="Elite Social Travel"
            />
          </div>
        </div>
      </section>

      {/* Feature Slider: Showcasing App Capabilities */}
      <section id="destinations" className="py-40 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-2xl">
              <span className="text-[12px] font-black text-indigo-500 uppercase tracking-[0.5em] mb-6 block">Core App Modules</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">Unified Experience.</h2>
              <p className="text-slate-400 font-medium text-xl mt-6 leading-relaxed">Flettra brings every aspect of high-end social travel into a single, elegant interface.</p>
            </div>
            <div className="flex gap-5">
              <button onClick={() => setActiveSlide((prev) => (prev - 1 + appFeatureSlides.length) % appFeatureSlides.length)} className="w-16 h-16 rounded-[1.5rem] border border-indigo-50 flex items-center justify-center hover:bg-indigo-50 transition-all active:scale-90 group shadow-sm">
                <i className="fa-solid fa-arrow-left text-indigo-300 group-hover:text-indigo-600"></i>
              </button>
              <button onClick={() => setActiveSlide((prev) => (prev + 1) % appFeatureSlides.length)} className="w-16 h-16 rounded-[1.5rem] bg-premium-gradient text-white flex items-center justify-center hover:shadow-xl hover:shadow-indigo-500/30 transition-all active:scale-90 shadow-lg">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>

          <div className="relative h-[650px] rounded-[5rem] overflow-hidden shadow-2xl bg-indigo-50/50">
            {appFeatureSlides.map((slide, index) => (
              <div 
                key={index} 
                className={`absolute inset-0 transition-all duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1) ${index === activeSlide ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'}`}
              >
                <img src={slide.img} className="w-full h-full object-cover brightness-75" alt={slide.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/20 to-transparent flex flex-col justify-end p-12 md:p-24">
                   <span className="text-indigo-300 font-black text-xs uppercase tracking-[0.4em] mb-4">{slide.location}</span>
                   <h3 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tight">{slide.title}</h3>
                   <p className="text-indigo-50 font-medium text-lg md:text-2xl max-w-3xl leading-relaxed opacity-90">{slide.desc}</p>
                   <button onClick={onLogin} className="mt-12 bg-white text-indigo-600 px-12 py-6 rounded-[2.2rem] font-black text-sm w-fit hover:scale-105 transition-all shadow-2xl active:scale-95">
                      Explore this Module
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligence Suite: Focusing on AI & Vetting */}
      <section id="features" className="py-40 px-8 md:px-16 lg:px-24 bg-gradient-to-b from-white to-indigo-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-32">
             <span className="text-[12px] font-black text-indigo-500 uppercase tracking-[0.5em] mb-6 block">Platform Pillars</span>
             <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-8 leading-tight">Built for <br/> <span className="text-premium-gradient">Modern Nomads.</span></h2>
             <p className="text-slate-400 font-medium text-xl leading-relaxed">Technology that understands you. Flettra simplifies the chaos of social coordination.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <LandingFeatureCard 
              icon="fa-car-side" 
              title="Regional Rides" 
              desc="Book seats in premium vehicles or offer your own. Built-in expense splitting and route optimization for every journey." 
              img="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800"
            />
            <LandingFeatureCard 
              icon="fa-user-astronaut" 
              title="Verified Personas" 
              desc="Our society is invite-only. Every traveler is vetted for safety and shared interests, ensuring meaningful connections." 
              img="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800"
            />
            <LandingFeatureCard 
              icon="fa-sparkles" 
              title="AI Itineraries" 
              desc="Hyper-personalized plans powered by Gemini. From coffee spots to sunset points, your trip is mapped with precision." 
              img="https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&q=80&w=800"
            />
          </div>
        </div>
      </section>

      {/* App Download Section: Mobile Focus */}
      <section id="download" className="py-40 px-8 md:px-16 lg:px-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-50 to-white rounded-[5rem] p-12 md:p-24 flex flex-col lg:flex-row items-center gap-20 border border-indigo-100 shadow-xl relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl"></div>
            
            <div className="flex-1 space-y-10 text-center lg:text-left z-10">
              <span className="text-[12px] font-black text-indigo-500 uppercase tracking-[0.6em] mb-4 block">Flettra Mobile</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">Control from <br/> <span className="text-premium-gradient">Anywhere.</span></h2>
              <p className="text-slate-500 font-medium text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
                The full Flettra experience in the palm of your hand. Access real-time ride tracking, instant buddy messaging, and smart digital wallets.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
                <button className="bg-slate-900 text-white px-10 py-5 rounded-[1.8rem] flex items-center gap-4 hover:bg-slate-800 transition-all active:scale-95 shadow-xl shadow-slate-900/10">
                  <i className="fa-brands fa-apple text-3xl"></i>
                  <div className="text-left">
                    <p className="text-[9px] font-black uppercase tracking-widest leading-none">Download on the</p>
                    <p className="text-lg font-black leading-none mt-1">App Store</p>
                  </div>
                </button>
                <button className="bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-[1.8rem] flex items-center gap-4 hover:bg-slate-50 transition-all active:scale-95 shadow-xl shadow-slate-200/20">
                  <i className="fa-brands fa-google-play text-2xl text-indigo-600"></i>
                  <div className="text-left">
                    <p className="text-[9px] font-black uppercase tracking-widest leading-none">Get it on</p>
                    <p className="text-lg font-black leading-none mt-1">Google Play</p>
                  </div>
                </button>
              </div>
            </div>

            <div className="flex-1 relative flex justify-center lg:justify-end animate-fadeInUp">
               <div className="relative w-72 md:w-80 h-[580px] md:h-[650px] bg-slate-900 rounded-[3.5rem] p-4 shadow-[0_60px_120px_-30px_rgba(99,102,241,0.3)] ring-12 ring-slate-100">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 bg-slate-900 rounded-b-3xl z-20"></div>
                  <div className="w-full h-full bg-premium-gradient rounded-[2.8rem] overflow-hidden relative p-8 text-white flex flex-col justify-center gap-6">
                     <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl font-black shadow-inner">F</div>
                     <div className="space-y-4">
                        <p className="text-xs font-black uppercase tracking-widest">Active Ride</p>
                        <div className="h-20 bg-white/20 rounded-3xl backdrop-blur-md border border-white/20 p-4 flex flex-col justify-center">
                           <p className="text-[10px] font-bold">Paris → Nice</p>
                           <p className="text-lg font-black">12:30 PM</p>
                        </div>
                     </div>
                     <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="h-24 bg-white/20 rounded-3xl flex flex-col items-center justify-center p-2 text-center">
                           <i className="fa-solid fa-user-group text-xl mb-2"></i>
                           <p className="text-[8px] font-bold">Buddies</p>
                        </div>
                        <div className="h-24 bg-white/10 rounded-3xl flex flex-col items-center justify-center p-2 text-center">
                           <i className="fa-solid fa-wallet text-xl mb-2"></i>
                           <p className="text-[8px] font-bold">Wallet</p>
                        </div>
                     </div>
                     <div className="absolute bottom-10 left-8 right-8 h-14 bg-white text-indigo-600 rounded-2xl flex items-center justify-center font-black text-[10px] uppercase tracking-widest shadow-2xl">
                        Open Map Interface
                     </div>
                  </div>
               </div>
               <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Passes */}
      <section id="pricing" className="py-40 bg-premium-gradient text-white px-8 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-white/10 rounded-full blur-[180px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-400/20 rounded-full blur-[180px] translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="text-[12px] font-black text-indigo-200 uppercase tracking-[0.6em] mb-8 block">Member Society</span>
          <h2 className="text-5xl md:text-8xl font-black tracking-tight mb-10">The Flettra Pass.</h2>
          <p className="text-indigo-100 font-medium text-xl max-w-2xl mx-auto mb-28 leading-relaxed">Exclusive access to a global network of refined travelers and boutique transportation services.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch max-w-6xl mx-auto">
            <LandingPricingCard 
              tier="Voyager" 
              price="$0" 
              features={['Public Network Access', 'Standard Ride Sync', 'Community Discovery', 'Basic Profile']}
              buttonText="Join Free"
              onAction={onLogin}
            />
            <LandingPricingCard 
              tier="Elite" 
              price="$24" 
              features={['Unlimited AI Itineraries', 'Priority Buddy Sync', 'Verified Society Badge', 'Private Marketplace', '24/7 Concierge Support']}
              buttonText="Get Elite Pass"
              popular
              onAction={onLogin}
            />
            <LandingPricingCard 
              tier="Enterprise" 
              price="Custom" 
              features={['Bespoke Agency Portal', 'Whitelabel Integration', 'Advanced Splitting API', 'Society Relations Mgr', 'Group Vetting Tools']}
              buttonText="Contact Relations"
              onAction={() => {}}
            />
          </div>
        </div>
      </section>

      {/* Final Call */}
      <section className="py-40 px-8 text-center bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
           <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">Your Journey <br/> Redefined.</h2>
           <button onClick={onLogin} className="btn-premium px-16 py-8 rounded-[3rem] font-black text-2xl active:scale-95">
             Launch Experience
           </button>
        </div>
      </section>

      <footer className="py-32 px-12 md:px-24 bg-[#fbfbfe] border-t border-indigo-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-premium-gradient rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-indigo-500/20">F</div>
              <span className="text-3xl font-black tracking-tighter uppercase text-slate-900">Flettra</span>
            </div>
            <p className="text-slate-400 font-medium max-w-sm text-lg leading-relaxed">Redefining the logistics of high-end social travel for the global nomad.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 lg:gap-32">
            <div className="space-y-8">
              <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-indigo-500">App Modules</h4>
              <ul className="space-y-5 text-sm font-bold text-slate-500">
                <li><a href="#" className="hover:text-indigo-600 transition-all">Buddy Finder</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-all">Ride Shares</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-all">AI Planner</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-all">Marketplace</a></li>
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-indigo-500">Society</h4>
              <ul className="space-y-5 text-sm font-bold text-slate-500">
                <li><a href="#" className="hover:text-indigo-600 transition-all">Safety Trust</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-all">Verification</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-all">Ethics</a></li>
              </ul>
            </div>
            <div className="space-y-8 hidden md:block">
              <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-indigo-500">Download</h4>
              <ul className="space-y-5 text-sm font-bold text-slate-500">
                <li><a href="#" className="hover:text-indigo-600 transition-all">iOS App</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-all">Android App</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-24 mt-24 border-t border-indigo-50 flex flex-col md:flex-row justify-between items-center gap-10">
           <p className="text-[11px] font-black text-slate-300 uppercase tracking-widest">© 2026 Flettra Global Society. Paris | London | New York</p>
           <div className="flex gap-10 text-indigo-300">
              <i className="fa-brands fa-instagram text-2xl hover:text-indigo-600 cursor-pointer transition-all"></i>
              <i className="fa-brands fa-x-twitter text-2xl hover:text-indigo-600 cursor-pointer transition-all"></i>
              <i className="fa-brands fa-linkedin-in text-2xl hover:text-indigo-600 cursor-pointer transition-all"></i>
           </div>
        </div>
      </footer>
    </div>
  );
};

const LandingFeatureCard = ({ icon, title, desc, img }: any) => (
  <div className="premium-card overflow-hidden group border-none">
    <div className="h-72 overflow-hidden relative">
      <img src={img} className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-110" alt={title} />
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
    </div>
    <div className="p-14 space-y-8">
      <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-3xl flex items-center justify-center text-3xl group-hover:bg-premium-gradient group-hover:text-white transition-all duration-700 shadow-sm">
        <i className={`fa-solid ${icon}`}></i>
      </div>
      <h3 className="text-3xl font-black text-slate-900 tracking-tight">{title}</h3>
      <p className="text-slate-500 font-medium text-lg leading-relaxed">{desc}</p>
    </div>
  </div>
);

const LandingPricingCard = ({ tier, price, features, buttonText, popular, onAction }: any) => (
  <div className={`p-14 rounded-[4rem] border transition-all duration-700 flex flex-col items-center text-center ${popular ? 'bg-white text-slate-900 border-white shadow-[0_50px_120px_-30px_rgba(49,46,129,0.3)] scale-110 relative z-20' : 'bg-white/10 border-white/10 hover:bg-white/15'}`}>
    {popular && <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-amber-400 text-[#0f172a] px-8 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-xl">Prestige Choice</div>}
    
    <h3 className={`text-2xl font-black mb-8 tracking-tighter ${!popular ? 'text-indigo-200' : 'text-indigo-600'}`}>{tier}</h3>
    
    <div className="flex items-baseline gap-2 mb-14">
      <span className="text-6xl font-black tracking-tight">{price}</span>
      {price !== 'Custom' && <span className={`${popular ? 'text-slate-400' : 'text-indigo-300'} text-xs font-bold uppercase tracking-widest`}>/ Month</span>}
    </div>

    <ul className="space-y-6 mb-16 flex-1 w-full">
      {features.map((f: string) => (
        <li key={f} className="flex items-center justify-center gap-4 text-sm font-bold leading-tight">
          <i className={`fa-solid fa-circle-check text-lg ${popular ? 'text-indigo-500' : 'text-indigo-300'}`}></i>
          {f}
        </li>
      ))}
    </ul>

    <button onClick={onAction} className={`w-full py-6 rounded-[2.2rem] font-black text-xs uppercase tracking-[0.2em] transition-all active:scale-[0.98] ${popular ? 'bg-premium-gradient text-white hover:shadow-xl hover:shadow-indigo-500/40 shadow-lg' : 'bg-white text-indigo-600 hover:bg-indigo-50'}`}>
      {buttonText}
    </button>
  </div>
);

export default Landing;
