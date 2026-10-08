import React, { useState } from 'react';
import { academicAndTechPartners, hiringPartners } from '../data/partners';
import { Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Partners() {
  const [activeTab, setActiveTab] = useState('hiring');

  return (
    <section id="partners" className="py-20 lg:py-28 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-race-navy-50 text-race-navy text-xs font-bold uppercase tracking-wider mb-3">
            <span>Corporate Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Industry & <span className="text-race-orange">Hiring Partners</span>
          </h2>
          <p className="mt-3 text-base text-slate-600 font-normal">
            Where our graduates lead, build, and innovate across 100+ global enterprises and technical certifying bodies.
          </p>

          {/* Tab Switcher */}
          <div className="mt-8 inline-flex p-1 bg-slate-100 rounded-xl">
            <button
              onClick={() => setActiveTab('hiring')}
              className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'hiring'
                  ? 'bg-white text-race-navy shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Hiring Partners (100+)
            </button>
            <button
              onClick={() => setActiveTab('academic')}
              className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'academic'
                  ? 'bg-white text-race-navy shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Cloud & Certification Bodies
            </button>
          </div>
        </div>

        {/* Infinite Running Marquee Strip */}
        <div className="relative mb-14 overflow-hidden py-4">
          <div className="flex w-max animate-marquee space-x-12 items-center">
            {[...hiringPartners, ...hiringPartners].map((partner, idx) => (
              <div
                key={idx}
                className="h-16 px-6 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105 shrink-0"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-8 max-w-[110px] object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tabbed Grid View */}
        {activeTab === 'hiring' ? (
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
              {hiringPartners.map((partner, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-race-orange/40 hover:shadow-md transition-all flex flex-col items-center justify-center text-center group h-24"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-10 max-w-[100px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <span className="text-[11px] font-semibold text-slate-700 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicAndTechPartners.map((partner, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-card-hover transition-all flex items-center gap-5"
              >
                <div className="w-20 h-16 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center p-2 shrink-0">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-12 max-w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">{partner.name}</h3>
                  <p className="text-xs text-race-orange font-semibold mt-0.5">{partner.type}</p>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-medium mt-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Curriculum Integrated</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
