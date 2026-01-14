
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { User, UserRole } from './types';
import { MOCK_USERS } from './constants';
import { UserService } from './services/api';

// Components
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Rides from './components/Rides';
import RideDetails from './components/RideDetails';
import Buddies from './components/Buddies';
import Groups from './components/Groups';
import Timeline from './components/Timeline';
import AIPlanner from './components/AIPlanner';
import Marketplace from './components/Marketplace';
import Admin from './components/Admin';
import Profile from './components/Profile';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOfflineMode, setIsOfflineMode] = useState(false);

  useEffect(() => {
    const initApp = async () => {
      try {
        setIsLoading(true);
        await new Promise(r => setTimeout(r, 800)); 
        
        try {
          const user = await UserService.getCurrentUser();
          setCurrentUser(user);
          setIsOfflineMode(false);
        } catch (e) {
          console.warn("Backend not detected, activating local simulation.");
          setIsOfflineMode(true);
        }
      } catch (err) {
        console.error("Critical System Init Failure", err);
      } finally {
        setIsLoading(false);
      }
    };

    initApp();
  }, []);

  const handleLogin = (isAdmin = false) => {
    if (isAdmin) {
      setCurrentUser({
        ...MOCK_USERS[0],
        role: UserRole.ADMIN,
        name: 'System Admin'
      });
    } else {
      setCurrentUser(MOCK_USERS[0]);
    }
  };

  const logout = () => setCurrentUser(null);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="relative">
          <div className="w-20 h-20 bg-premium-gradient rounded-[1.6rem] flex items-center justify-center text-white text-4xl font-black shadow-2xl animate-pulse">F</div>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-indigo-400 rounded-full animate-ping"></div>
        </div>
        <p className="mt-10 text-indigo-400 font-bold text-[11px] uppercase tracking-[0.4em] animate-pulse">Synchronizing Life</p>
      </div>
    );
  }

  if (!currentUser) {
    return <Landing onLogin={() => handleLogin()} />;
  }

  return (
    <HashRouter>
      <div className="flex flex-col h-screen overflow-hidden bg-[#fbfbfe]">
        {/* Top Header */}
        <header className="hidden lg:flex h-20 glass-nav sticky top-0 z-50 px-12 items-center justify-between">
          <div className="flex items-center gap-14">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-premium-gradient rounded-xl flex items-center justify-center text-white font-black group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-indigo-500/20">F</div>
              <span className="text-xl font-black tracking-tighter text-slate-800 uppercase group-hover:text-indigo-600 transition-colors">Flettra</span>
            </Link>

            <nav className="flex items-center gap-2">
              <DesktopNavLink to="/" label="Dashboard" />
              <DesktopNavLink to="/rides" label="Rides" />
              <DesktopNavLink to="/buddies" label="Buddies" />
              <DesktopNavLink to="/ai-planner" label="AI Assistant" />
              <DesktopNavLink to="/marketplace" label="Market" />
            </nav>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 bg-white/60 border border-indigo-50 px-5 py-2 rounded-2xl shadow-sm">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-compass text-amber-500 text-xs"></i>
                <span className="text-xs font-black text-slate-700">{currentUser.compassPoints} CP</span>
              </div>
              <div className="w-[1px] h-4 bg-indigo-100"></div>
              <div className={`w-2 h-2 rounded-full ${!isOfflineMode ? 'bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]' : 'bg-rose-300'}`}></div>
            </div>

            <Link to="/profile" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
              <div className="relative">
                <img src={currentUser.profilePicture} className="w-10 h-10 rounded-2xl object-cover border-2 border-white shadow-lg" alt="User" />
                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full"></div>
              </div>
              <p className="text-sm font-extrabold text-slate-700 hidden xl:block">{currentUser.name}</p>
            </Link>

            <button onClick={logout} className="w-10 h-10 flex items-center justify-center text-indigo-300 hover:text-rose-500 transition-all hover:bg-rose-50 rounded-xl group">
              <i className="fa-solid fa-power-off text-sm group-hover:scale-110"></i>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto pb-32 lg:pb-12 pt-6 lg:pt-12 scrollbar-hide px-6 sm:px-12">
          <div className="max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={<Dashboard user={currentUser} />} />
              <Route path="/rides" element={<Rides user={currentUser} />} />
              <Route path="/rides/:id" element={<RideDetails user={currentUser} />} />
              <Route path="/buddies" element={<Buddies user={currentUser} />} />
              <Route path="/groups" element={<Groups user={currentUser} />} />
              <Route path="/timeline" element={<Timeline user={currentUser} />} />
              <Route path="/ai-planner" element={<AIPlanner user={currentUser} />} />
              <Route path="/marketplace" element={<Marketplace user={currentUser} />} />
              <Route path="/admin" element={<Admin user={currentUser} />} />
              <Route path="/profile" element={<Profile user={currentUser} />} />
            </Routes>
          </div>
        </main>

        {/* Mobile Nav */}
        <nav className="lg:hidden fixed bottom-6 left-6 right-6 h-20 glass-mobile-nav z-50 flex items-center justify-around px-4 rounded-[2.2rem] shadow-[0_30px_70px_-15px_rgba(99,102,241,0.25)]">
           <MobileNavLink to="/" icon="fa-grid-2" />
           <MobileNavLink to="/rides" icon="fa-car-side" />
           <MobileNavLink to="/ai-planner" icon="fa-sparkles" highlight />
           <MobileNavLink to="/buddies" icon="fa-user-group" />
           <MobileNavLink to="/profile" icon="fa-user" />
        </nav>
      </div>
    </HashRouter>
  );
};

const DesktopNavLink: React.FC<{ to: string; label: string }> = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to || (to === '/rides' && location.pathname.startsWith('/rides/'));

  return (
    <Link 
      to={to} 
      className={`px-5 py-2.5 rounded-xl text-sm font-bold tracking-tight transition-all duration-300 ${
        isActive ? 'text-indigo-600 bg-indigo-50/70' : 'text-slate-400 hover:text-indigo-600 hover:bg-indigo-50/30'
      }`}
    >
      {label}
    </Link>
  );
};

const MobileNavLink: React.FC<{ to: string; icon: string; highlight?: boolean }> = ({ to, icon, highlight }) => {
  const location = useLocation();
  const isActive = location.pathname === to || (to === '/rides' && location.pathname.startsWith('/rides/'));

  return (
    <Link to={to} className="flex flex-col items-center justify-center w-full h-full relative">
      <div className={`w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-500 ${
        highlight 
          ? 'bg-premium-gradient text-white -translate-y-7 shadow-2xl shadow-indigo-600/30 scale-110 ring-4 ring-white' 
          : isActive ? 'text-indigo-600' : 'text-slate-300'
      }`}>
        <i className={`fa-solid ${icon} ${highlight ? 'text-xl' : 'text-2xl'}`}></i>
      </div>
      {isActive && !highlight && <div className="mobile-active-blob animate-fadeInUp"></div>}
    </Link>
  );
};

export default App;
