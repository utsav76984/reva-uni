import React, { useState } from 'react';
import { programsData, programCategories } from '../data/programs';
import { 
  ArrowRight, 
  Clock, 
  Building2, 
  CheckCircle2, 
  GraduationCap, 
  ShieldCheck, 
  X, 
  ExternalLink 
} from 'lucide-react';

export default function Programs({ onApplyNow, onRequestCallback }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProgram, setSelectedProgram] = useState(null);

  // Filtered subset based on active category
  const filteredPrograms = activeCategory === 'all'
    ? programsData
    : programsData.filter((p) => p.category === activeCategory);

  return (
    <section 
      id="pg-programs" 
      className="scroll-mt-36 lg:scroll-mt-44 py-20 lg:py-28 bg-[#F6F8FB] relative border-b border-slate-200/80"
    >
      {/* Anchor for legacy/alternate hash links */}
      <div id="programs" className="scroll-mt-36 lg:scroll-mt-44 absolute top-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================
            HEADER AREA
            Title: "Choose Your Career Path"
            Label: REVA Academy for Corporate Excellence
            No new subtitle per instructions
           ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[#0B1F3A] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#F97316]" />
            <span>REVA Academy for Corporate Excellence</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1F3A] tracking-tight leading-tight">
            Choose Your <span className="text-[#F97316]">Career Path</span>
          </h2>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {programCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 tracking-wide cursor-pointer ${
                    isActive
                      ? 'bg-[#0B1F3A] text-white shadow-md shadow-[#0B1F3A]/20 scale-102'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`ml-2 text-xs py-0.5 px-2 rounded-full font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            PROGRAM GRID
            6 Equal-Size Program Cards in a clean 3x2 Grid
            Desktop: 3 equal cards per row (Row 1: BA, AI MTech, CS MTech; Row 2: AI MSc, CS MSc, Cloud)
            Tablet: 2 cards per row
            Mobile: 1 card per row
           ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-9">
          {filteredPrograms.map((prog) => {
            const isAICTE = prog.recognition.includes('AICTE');

            return (
              <div
                key={prog.id}
                className="group relative rounded-[18px] bg-white border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(11,31,58,0.06)] hover:shadow-[0_16px_32px_-6px_rgba(11,31,58,0.12)] hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between overflow-hidden h-full"
              >
                {/* Subtle top orange accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F97316] to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

                <div className="flex flex-col flex-1">
                  {/* HD Program Image Area with consistent aspect ratio */}
                  <div className="relative h-56 sm:h-60 overflow-hidden bg-slate-950 shrink-0">
                    <img
                      src={prog.bgImage}
                      alt={prog.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out opacity-90"
                    />
                    
                    {/* Contrast Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-black/25 pointer-events-none" />

                    {/* Top Left: Tag Pill */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-white/95 text-[#0B1F3A] shadow-sm backdrop-blur-md border border-white/60">
                        {prog.tag}
                      </span>
                    </div>

                    {/* Top Right: Accreditation Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold text-white shadow-sm backdrop-blur-md ${
                        isAICTE ? 'bg-emerald-600/95' : 'bg-blue-600/95'
                      }`}>
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>{prog.recognition}</span>
                      </span>
                    </div>

                    {/* Bottom Image Statistics Strip */}
                    <div className="absolute bottom-3.5 left-4 right-4 flex items-end justify-between z-10 text-white">
                      <div>
                        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block">
                          {prog.highlightMetric.label}
                        </span>
                        <span className="text-xl sm:text-2xl font-black text-amber-300 tracking-tight">
                          {prog.highlightMetric.value}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block">
                          Next Cohort
                        </span>
                        <span className="text-xs font-bold text-white bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                          {prog.nextCohort}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Editorial Card Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Program Type / Subtitle: Small uppercase orange text */}
                      <span className="text-xs font-bold uppercase tracking-wider text-[#F97316] block mb-1">
                        {prog.subtitle}
                      </span>

                      {/* Program Title: Large, strong navy typography */}
                      <h3 className="text-xl sm:text-2xl font-black text-[#0B1F3A] group-hover:text-[#F97316] transition-colors leading-snug">
                        {prog.name}
                      </h3>

                      {/* Association Line */}
                      <p className="text-xs font-semibold text-[#64748B] mt-2.5 flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-[#F97316] shrink-0" />
                        <span className="line-clamp-1">{prog.partner}</span>
                      </p>

                      {/* Existing RACE Description */}
                      <p className="text-sm text-[#64748B] line-clamp-3 leading-relaxed mt-3">
                        {prog.overview}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Metadata Strip + Consistent Action Area */}
                <div className="p-6 sm:p-7 pt-0 space-y-4">
                  {/* Program Details: Duration & Learning Mode */}
                  <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs sm:text-sm text-[#64748B] font-medium">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{prog.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{prog.format}</span>
                    </div>
                  </div>

                  {/* CTAs: Explore Program + Apply */}
                  <div className="pt-1 flex items-center gap-3">
                    <button
                      onClick={() => setSelectedProgram(prog)}
                      className="flex-1 py-3 px-4 rounded-xl border border-slate-200 hover:border-[#0B1F3A] text-slate-800 hover:text-[#0B1F3A] text-xs sm:text-sm font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-1.5 group/btn cursor-pointer"
                    >
                      <span>Explore Program</span>
                      <ArrowRight className="w-4 h-4 text-[#F97316] group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </button>

                    <button
                      onClick={() => onApplyNow?.(prog.title)}
                      className="py-3 px-5 rounded-xl bg-[#F97316] hover:bg-orange-600 text-white text-xs sm:text-sm font-bold transition-all shadow-sm hover:shadow-md hover:shadow-orange-500/20 active:scale-98 cursor-pointer"
                    >
                      <span>Apply</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* ========================================================
          CURRICULUM & PROGRAM DETAILS MODAL
         ======================================================== */}
      {selectedProgram && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedProgram(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative bg-gradient-to-r from-[#0B1F3A] via-slate-900 to-slate-900 p-6 sm:p-7 text-white shrink-0">
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-5 right-5 text-slate-300 hover:text-white p-2 rounded-full hover:bg-white/10 transition cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 uppercase tracking-wide">
                  {selectedProgram.tag}
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  • {selectedProgram.recognition}
                </span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                {selectedProgram.title}
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-300 mt-1.5 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-[#F97316]" />
                <span>{selectedProgram.partner}</span>
              </p>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-7 overflow-y-auto space-y-6 text-slate-700 text-sm">
              {/* Program Overview */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Program Overview
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {selectedProgram.overview}
                </p>
              </div>

              {/* Stats Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200/80 text-center">
                <div className="p-1">
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Duration</div>
                  <div className="text-xs sm:text-sm font-extrabold text-slate-900 mt-0.5">{selectedProgram.duration}</div>
                </div>
                <div className="p-1">
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Format</div>
                  <div className="text-xs sm:text-sm font-extrabold text-slate-900 mt-0.5">{selectedProgram.format}</div>
                </div>
                <div className="p-1">
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">{selectedProgram.highlightMetric.label}</div>
                  <div className="text-xs sm:text-sm font-black text-[#F97316] mt-0.5">{selectedProgram.highlightMetric.value}</div>
                </div>
                <div className="p-1">
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Next Cohort</div>
                  <div className="text-xs sm:text-sm font-extrabold text-emerald-600 mt-0.5">{selectedProgram.nextCohort}</div>
                </div>
              </div>

              {/* Curriculum Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Core Modules & Practical Curriculum
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProgram.curriculumHighlights.map((mod, i) => (
                    <div key={i} className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-lg border border-slate-200/70 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-semibold text-slate-800 leading-snug">{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Careers */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Target Career Roles
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProgram.careers.map((career, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-semibold bg-blue-50 text-[#0B1F3A] px-3.5 py-1.5 rounded-full border border-blue-100"
                    >
                      {career}
                    </span>
                  ))}
                </div>
              </div>

              {/* Official Source Link */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-medium">Degree awarded by REVA University</span>
                <a
                  href={selectedProgram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F97316] hover:text-orange-700 font-semibold flex items-center gap-1 hover:underline"
                >
                  <span>Official University Course Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-3 shrink-0">
              <button
                onClick={() => {
                  const prog = selectedProgram;
                  setSelectedProgram(null);
                  onRequestCallback?.(prog.title);
                }}
                className="px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-900 border border-slate-300 rounded-xl hover:bg-white transition cursor-pointer"
              >
                Request Callback
              </button>
              
              <button
                onClick={() => {
                  const prog = selectedProgram;
                  setSelectedProgram(null);
                  onApplyNow?.(prog.title);
                }}
                className="px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#F97316] hover:bg-orange-600 rounded-xl shadow-sm hover:shadow transition cursor-pointer"
              >
                Apply for this Program
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
