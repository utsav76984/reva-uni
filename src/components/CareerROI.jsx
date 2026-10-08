import React, { useState } from 'react';
import { roiProgramsData } from '../data/programs';
import { TrendingUp, ArrowRight, Award, ShieldCheck, CheckCircle2, DollarSign, Briefcase } from 'lucide-react';

export default function CareerROI({ onApplyNow, onRequestCallback }) {
  const [activeTab, setActiveTab] = useState(roiProgramsData[0].id);

  const selectedProgram = roiProgramsData.find((p) => p.id === activeTab) || roiProgramsData[0];

  return (
    <section id="career-roi" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-race-orange/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block with Original RACE ROI Messaging */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Documented Outcomes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Our programs are ranked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-race-orange to-orange-400">
              No. 1 in ROI
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-medium">
            Four programs. Four real outcomes.
          </p>

          <p className="mt-2 text-sm text-slate-400 leading-relaxed font-normal max-w-2xl mx-auto">
            Every number below is an average salary our graduates are earning right now. Pick the one closest to where you want to be, then go deep on what gets you there.
          </p>
        </div>

        {/* 4 Interactive Program Switcher Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-12">
          {roiProgramsData.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`p-4 rounded-xl text-left border transition-all duration-200 relative ${
                  isActive
                    ? 'bg-white/10 border-race-orange shadow-lg shadow-race-orange/15 scale-102'
                    : 'bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20'
                }`}
              >
                {isActive && (
                  <span className="absolute -top-2 right-3 bg-race-orange text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full">
                    Selected
                  </span>
                )}
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {item.tabName}
                </div>
                <div className="text-xl sm:text-2xl font-black text-amber-300 mt-1">
                  {item.avgSalary}
                </div>
                <div className="text-[11px] text-emerald-400 font-semibold mt-0.5">
                  +{item.avgHike} avg. hike
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Program Showcase Card */}
        <div className="bg-slate-800/80 rounded-2xl border border-white/15 p-6 sm:p-10 backdrop-blur-md shadow-2xl max-w-5xl mx-auto animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Details and Outcomes */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-race-orange text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded">
                    {selectedProgram.tabName}
                  </span>
                  <span className="text-xs text-slate-300 font-semibold">
                    • {selectedProgram.accreditation}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedProgram.programTitle}
                </h3>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  {selectedProgram.tagline}
                </p>
              </div>

              {/* Verified Career Outcomes */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  Documented Career Outcomes
                </span>
                <div className="space-y-2.5">
                  {selectedProgram.outcomes.map((out, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onApplyNow}
                  className="px-6 py-3 rounded-xl bg-race-orange hover:bg-race-orange-hover text-white font-bold text-xs uppercase tracking-wider transition flex items-center gap-2 shadow-lg shadow-race-orange/25"
                >
                  <span>Apply for {selectedProgram.tabName}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onRequestCallback}
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs transition"
                >
                  Speak to an ROI Advisor
                </button>
              </div>
            </div>

            {/* Right Column: 4 Stat Panels */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {selectedProgram.metrics.map((metric, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-900/80 rounded-xl p-4 border border-white/10 text-center flex flex-col justify-center"
                >
                  <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                    {metric.label}
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-amber-300 my-1">
                    {metric.value}
                  </div>
                  <span className="text-[10px] text-slate-400">
                    {metric.sub}
                  </span>
                </div>
              ))}

              {/* Trust Badge Callout */}
              <div className="col-span-2 bg-gradient-to-r from-race-navy to-slate-900 rounded-xl p-3.5 border border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-300">Degree Recognition:</span>
                <span className="font-bold text-emerald-400">{selectedProgram.accreditation}</span>
              </div>
            </div>

          </div>
        </div>

        {/* Global Strip from Site */}
        <div className="mt-12 text-center text-xs sm:text-sm text-slate-400 font-medium">
          <span className="text-white font-bold">100+</span> hiring partners &nbsp;&middot;&nbsp;{' '}
          <span className="text-white font-bold">50+</span> industry mentors &nbsp;&middot;&nbsp;{' '}
          <span className="text-white font-bold">1000+</span> alumni network worldwide
        </div>

      </div>
    </section>
  );
}
