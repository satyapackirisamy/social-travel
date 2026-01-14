
import React from 'react';
import { User, UserRole } from '../types';

const Admin: React.FC<{ user: User }> = ({ user }) => {
  if (user.role !== UserRole.ADMIN) {
    return (
      <div className="flex items-center justify-center h-full text-center">
        <div>
          <i className="fa-solid fa-lock text-slate-200 text-6xl mb-4"></i>
          <h2 className="text-2xl font-bold text-slate-800">Access Restricted</h2>
          <p className="text-slate-500">Only platform administrators can access this portal.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-10 animate-fadeIn">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Admin Dashboard</h1>
          <p className="text-slate-500 mt-1">Monitor platform health and manage system resources.</p>
        </div>
        <button className="bg-teal-600 text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-teal-100 hover:bg-teal-700 transition">
          Export Platform Data
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AdminStat icon="fa-users" label="Total Users" value="1,420" trend="+12%" up />
        <AdminStat icon="fa-car" label="Active Rides" value="284" trend="+5%" up />
        <AdminStat icon="fa-money-bill-transfer" label="Revenue (30d)" value="$12,450" trend="-2%" />
        <AdminStat icon="fa-shop" label="Vendors" value="48" trend="+1%" up />
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-800">User Management</h3>
          <div className="relative">
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
            <input 
              type="text" 
              placeholder="Search users..." 
              className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-slate-400 text-[10px] uppercase font-bold tracking-widest border-b border-slate-100">
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Subscription</th>
                <th className="px-6 py-4">Joined</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              <UserRow name="Sarah Chen" email="sarah@example.com" role="Traveler" plan="Basic" date="Oct 12, 2025" />
              <UserRow name="Marcus Johnson" email="marcus@voyage.co" role="Vendor" plan="Premium" date="Sept 28, 2025" />
              <UserRow name="Elena Rossi" email="elena@mail.it" role="Traveler" plan="Enterprise" date="Nov 01, 2025" />
              <UserRow name="David Kim" email="david@kim.dev" role="Admin" plan="N/A" date="Jan 05, 2025" />
            </tbody>
          </table>
        </div>
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium">
          <span>Showing 4 of 1,420 users</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-white border border-slate-200 rounded hover:bg-slate-50">Prev</button>
            <button className="px-3 py-1 bg-white border border-slate-200 rounded hover:bg-slate-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdminStat = ({ icon, label, value, trend, up }: any) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
    <div className="flex justify-between items-start mb-4">
      <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400">
        <i className={`fa-solid ${icon}`}></i>
      </div>
      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${up ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
        {trend}
      </span>
    </div>
    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{label}</p>
    <p className="text-2xl font-black text-slate-800 mt-1">{value}</p>
  </div>
);

const UserRow = ({ name, email, role, plan, date }: any) => (
  <tr className="hover:bg-slate-50 transition cursor-default group">
    <td className="px-6 py-4">
      <div className="flex items-center gap-3">
        <img src={`https://i.pravatar.cc/150?u=${name}`} className="w-9 h-9 rounded-full border border-slate-100" />
        <div>
          <p className="text-sm font-bold text-slate-800">{name}</p>
          <p className="text-xs text-slate-400">{email}</p>
        </div>
      </div>
    </td>
    <td className="px-6 py-4">
       <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase ${role === 'Admin' ? 'bg-amber-100 text-amber-700' : role === 'Vendor' ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-700'}`}>
         {role}
       </span>
    </td>
    <td className="px-6 py-4">
       <p className="text-sm text-slate-600 font-medium">{plan}</p>
    </td>
    <td className="px-6 py-4">
       <p className="text-xs text-slate-400">{date}</p>
    </td>
    <td className="px-6 py-4 text-right">
       <button className="p-2 text-slate-400 hover:text-teal-600 transition">
         <i className="fa-solid fa-pen-to-square"></i>
       </button>
       <button className="p-2 text-slate-400 hover:text-rose-500 transition">
         <i className="fa-solid fa-trash"></i>
       </button>
    </td>
  </tr>
);

export default Admin;
