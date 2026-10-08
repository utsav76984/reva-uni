import React from 'react';
import { ArrowRight, Phone, Sparkles, ShieldCheck, Award, Users } from 'lucide-react';

export default function FinalCTA({ onApplyNow, onRequestCallback }) {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-r from-race-navy via-slate-900 to-race-navy-950 text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-race-orange/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Urgency Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold mb-6">
          <span className="w-2 h-2 rounded-full bg-race-orange animate-ping"></span>
          <span className="text-race-orange font-bold uppercase tracking-wider">BATCHES STARTING SOON</span>
          <span className="text-slate-400">•</span>
          <span className="text-slate-200">Limited Seats Remaining</span>
        </div>

        {/* Main Heading directly from existing site */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
          Your Tech Career{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-race-orange to-orange-400">
            Starts Now
          </span>
        </h2>

        {/* Subtitle directly from existing site */}
        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Don’t wait for the “perfect moment.” Join 5,000+ professionals who took action and transformed their careers with RACE REVA.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onApplyNow}
            className="w-full sm:w-auto px-9 py-4 rounded-xl bg-race-orange hover:bg-race-orange-hover text-white font-bold text-sm uppercase tracking-wider shadow-xl shadow-race-orange/30 transition transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
          >
            <span>Apply Now – Limited Seats</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="tel:+918069378092"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 backdrop-blur-sm transition flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-race-orange" />
            <span>Talk to Career Counselor (+91 8069378092)</span>
          </a>
        </div>

        {/* Reassurance pills */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            AICTE & UGC Recognised
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-amber-400" />
            Ranked #1 in ROI
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-cyan-400" />
            Weekend Executive Format
          </span>
        </div>

      </div>
    </section>
  );
}
