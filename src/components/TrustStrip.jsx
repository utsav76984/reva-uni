import React from 'react';
import { Award, Building2, Users, Briefcase, GraduationCap, TrendingUp, ShieldCheck } from 'lucide-react';

export default function TrustStrip() {
  const stats = [
    {
      value: '100+',
      label: 'Hiring Partners',
      sub: 'Top Tier Global Tech & BFSI',
      icon: Briefcase,
      color: 'text-race-orange',
      bg: 'bg-orange-50'
    },
    {
      value: '50+',
      label: 'Industry Mentors',
      sub: 'Silicon Valley & Global CXOs',
      icon: Users,
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      value: '1000+',
      label: 'Alumni Network',
      sub: 'Leading Tech Worldwide',
      icon: GraduationCap,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      value: '354%',
      label: 'Highest Avg. Hike',
      sub: 'M.Sc. Business Analytics',
      icon: TrendingUp,
      color: 'text-amber-600',
      bg: 'bg-amber-50'
    },
    {
      value: 'Ranked #1',
      label: 'Return on Investment',
      sub: 'Executive Tech Degrees',
      icon: Award,
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    }
  ];

  return (
    <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className={`flex flex-col items-center sm:items-start text-center sm:text-left ${idx !== 0 ? 'sm:pl-6 pt-4 sm:pt-0' : ''}`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-9 h-9 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-4 h-4 ${item.color}`} />
                  </div>
                  <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {item.value}
                  </span>
                </div>
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  {item.label}
                </div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                  {item.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
