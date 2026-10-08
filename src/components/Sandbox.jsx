import React from 'react';
import { sandboxFeatures } from '../data/events';
import { ShieldAlert, Cpu, Cloud, Building2, Terminal, Play, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Sandbox({ onRequestCallback }) {
  const iconMap = {
    ShieldAlert: ShieldAlert,
    Cpu: Cpu,
    Cloud: Cloud,
    Building2: Building2
  };

  return (
    <section id="sandbox" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative cyber grid overlay */}
      <div className="absolute inset-0 opacity-10 bg-grid-pattern pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>Simulated Real-World Combat & Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Inside the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">RACE Sandbox</span> & Live Labs
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
              A single day engineered to move from context, to classroom, to live fire, to a system built entirely by the Academy’s own people.
            </p>
          </div>

          <div className="lg:col-span-4 text-left lg:text-right">
            <button
              onClick={onRequestCallback}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-race-orange hover:bg-race-orange-hover text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-race-orange/20 transition"
            >
              <span>Book A Sandbox Tour</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Featured Visual Spotlight + 4 Technical Infrastructure Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Main Visual: Sandbox Live-Fire Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-slate-800">
              <img
                src="https://race.reva.edu.in/wp-content/uploads/Sandbox.png"
                alt="Inside the RACE Sandbox"
                className="w-full h-80 sm:h-96 object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              
              {/* Terminal Overlay Badge */}
              <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>LIVE-FIRE SANDBOX ACTIVE</span>
              </div>

              {/* Bottom Info Ribbon */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10">
                <h4 className="text-sm font-bold text-white">
                  When Saturday Turned Into a Live-Fire Classroom
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Engineered for live red team vs. blue team drills, multi-cloud failure simulation, and real-time incident resolution.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Technical Environment Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sandboxFeatures.map((feat, idx) => {
              const Icon = iconMap[feat.icon] || Terminal;
              return (
                <div
                  key={idx}
                  className="bg-slate-800/80 border border-white/10 rounded-xl p-5 hover:border-cyan-400/50 hover:bg-slate-800 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                        {feat.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-2">
                      {feat.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-cyan-300 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Hands-on Every Cohort</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
