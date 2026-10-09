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
  ExternalLink,
  TrendingUp,
  Sparkles,
  Calendar,
  ChevronRight
} from 'lucide-react';

export default function Programs({ onApplyNow, onRequestCallback }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [featuredProgramId, setFeaturedProgramId] = useState('msc-ba');
  const [selectedProgram, setSelectedProgram] = useState(null);

  // Filtered subset based on category
  const filteredPrograms = activeCategory === 'all'
    ? programsData
    : programsData.filter((p) => p.category === activeCategory);

  // Identify currently featured program
  const featuredProgram = filteredPrograms.find((p) => p.id === featuredProgramId) 
    || filteredPrograms[0] 
    || programsData[0];

  // Supporting programs: Always ensure 2 supporting companion programs are displayed on desktop
  const categorySupporting = filteredPrograms.filter((p) => p.id !== featuredProgram.id);
  const fallbackCompanions = programsData.filter((p) => p.id !== featuredProgram.id);
  const supportingPrograms = [
    ...categorySupporting,
    ...fallbackCompanions.filter((p) => !categorySupporting.some((sp) => sp.id === p.id))
  ].slice(0, 2);

  // Handler for category change
  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    if (catId === 'all') {
      setFeaturedProgramId('msc-ba');
    } else {
      const match = programsData.find((p) => p.category === catId);
      if (match) setFeaturedProgramId(match.id);
    }
  };

  const isFeaturedAICTE = featuredProgram.recognition.includes('AICTE');

  return (
    <section 
      id="pg-programs" 
      className="scroll-mt-36 lg:scroll-mt-44 py-12 sm:py-16 lg:py-24 bg-[#FAF8F5] relative border-b border-stone-200/80 overflow-hidden"
    >
      {/* Anchor for legacy/alternate hash links */}
      <div id="programs" className="scroll-mt-36 lg:scroll-mt-44 absolute top-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================
            1. HEADER AREA
            - Balanced 2-line title on mobile (no isolated "Path")
            - Tighter vertical spacing
            - Compact, wrapping category filters
           ======================================================== */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white border border-stone-200/90 text-[#0B1F3A] text-[10.5px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-3.5 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#F97316]" />
            <span>REVA Academy for Corporate Excellence</span>
          </div>
          
          {/* Balanced 2-line heading on mobile */}
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1F3A] tracking-tight leading-snug sm:leading-tight">
            <span className="block sm:inline">Choose Your </span>
            <span className="text-[#F97316] whitespace-nowrap">Career Path</span>
          </h2>

          <p className="mt-2 sm:mt-3 text-xs xs:text-sm sm:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Pick your power-up – every program is a launchpad.
          </p>

          {/* Compact wrapping category filters */}
          <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 lg:gap-2.5 max-w-3xl mx-auto">
            {programCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 lg:px-5 lg:py-2.5 rounded-full text-[11px] sm:text-xs lg:text-sm font-semibold transition-all duration-300 tracking-tight sm:tracking-normal cursor-pointer flex items-center gap-1.5 sm:gap-2 ${
                    isActive
                      ? 'bg-[#0B1F3A] text-white shadow-md shadow-[#0B1F3A]/20 scale-[1.02]'
                      : 'bg-white text-slate-700 border border-stone-200/90 hover:border-stone-300 hover:bg-white/80 hover:text-[#0B1F3A]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] sm:text-[11px] py-0.5 px-1.5 sm:px-2 rounded-full font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-stone-100 text-slate-500'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            2. EDITORIAL LAYOUT: 1 WIDER FEATURED + 2 SUPPORTING CARDS
            - Fixed badge spacing (never overlaps on 320px-430px)
            - Responsive padding & sharp imagery
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 lg:gap-8 items-stretch">
          
          {/* --------------------------------------------------------
              A. WIDER FEATURED PROGRAM CARD (Left on Desktop, 7 Cols)
             -------------------------------------------------------- */}
          <div 
            onClick={() => setSelectedProgram(featuredProgram)}
            className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl border border-stone-200/90 shadow-[0_8px_30px_rgba(11,31,58,0.06)] hover:shadow-[0_22px_44px_rgba(11,31,58,0.12)] hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden flex flex-col justify-between group cursor-pointer"
          >
            {/* Top Image Area */}
            <div>
              <div className="relative h-52 xs:h-60 sm:h-72 lg:h-80 w-full overflow-hidden bg-stone-100 shrink-0 border-b border-stone-100">
                <img
                  src={featuredProgram.bgImage}
                  alt={featuredProgram.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-300 ease-out"
                />

                {/* Top Badges Container - Full Width Flex Wrap to eliminate overlap on narrow screens */}
                <div className="absolute top-2.5 inset-x-2.5 sm:top-4 sm:inset-x-4 z-10 flex flex-wrap items-center justify-between gap-1.5 sm:gap-2 pointer-events-none">
                  {/* Left: Featured Indicator + Tag */}
                  <div className="flex items-center gap-1.5 pointer-events-auto">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold bg-[#F97316] text-white shadow-xs">
                      <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                      <span>Featured Program</span>
                    </span>
                    <span className="hidden xs:inline-flex items-center px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold bg-white/95 text-[#0B1F3A] backdrop-blur-md shadow-2xs border border-white/80">
                      {featuredProgram.tag}
                    </span>
                  </div>

                  {/* Right: Recognition Badge */}
                  <div className="pointer-events-auto shrink-0">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold backdrop-blur-md shadow-2xs border ${
                      isFeaturedAICTE 
                        ? 'bg-emerald-50/95 text-emerald-800 border-emerald-200/80' 
                        : 'bg-blue-50/95 text-blue-800 border-blue-200/80'
                    }`}>
                      <ShieldCheck className={`w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 ${isFeaturedAICTE ? 'text-emerald-600' : 'text-blue-600'}`} />
                      <span>{featuredProgram.recognition}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Featured Card Content */}
              <div className="p-4 xs:p-5 sm:p-7 lg:p-8">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#F97316]">
                    {featuredProgram.subtitle}
                  </span>
                  <span className="xs:hidden text-[10px] font-bold px-2 py-0.5 rounded-full bg-stone-100 text-[#0B1F3A]">
                    {featuredProgram.tag}
                  </span>
                </div>

                <h3 className="text-xl xs:text-2xl sm:text-3xl font-black text-[#0B1F3A] group-hover:text-[#F97316] transition-colors duration-300 leading-snug sm:leading-tight">
                  {featuredProgram.name}
                </h3>

                <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-2 flex items-center gap-1.5 sm:gap-2">
                  <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F97316] shrink-0" />
                  <span className="line-clamp-1">{featuredProgram.partner}</span>
                </p>

                <p className="text-xs xs:text-sm sm:text-base text-slate-600 leading-relaxed mt-3 sm:mt-4 line-clamp-3">
                  {featuredProgram.overview}
                </p>

                {/* 4-Field Metric Strip (Responsive 2x2 on Mobile, 4x1 on Tablet/Desktop) */}
                <div className="mt-4 sm:mt-6 p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-[#FAF8F5] border border-stone-200/80 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 text-center">
                  <div className="p-1 min-w-0">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 block truncate">Duration</span>
                    <span className="text-xs sm:text-sm font-black text-[#0B1F3A] mt-0.5 block truncate">{featuredProgram.duration}</span>
                  </div>
                  <div className="p-1 min-w-0">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 block truncate">Study Mode</span>
                    <span className="text-xs sm:text-sm font-black text-[#0B1F3A] mt-0.5 block truncate">{featuredProgram.format}</span>
                  </div>
                  <div className="p-1 min-w-0">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#F97316] block truncate">{featuredProgram.highlightMetric.label}</span>
                    <span className="text-xs sm:text-sm font-black text-[#F97316] mt-0.5 block truncate">{featuredProgram.highlightMetric.value}</span>
                  </div>
                  <div className="p-1 min-w-0">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-700 block truncate">Next Cohort</span>
                    <span className="text-xs sm:text-sm font-black text-emerald-700 mt-0.5 block truncate">{featuredProgram.nextCohort}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Card Actions */}
            <div className="p-4 xs:p-5 sm:p-7 lg:p-8 pt-0">
              <div className="pt-3.5 sm:pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProgram(featuredProgram);
                  }}
                  className="flex-1 py-3 px-4 rounded-xl border border-stone-200 hover:border-[#0B1F3A] text-[#0B1F3A] text-xs sm:text-sm font-bold hover:bg-stone-50 transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer min-h-[44px]"
                >
                  <span>Explore Curriculum & Outcomes</span>
                  <ArrowRight className="w-4 h-4 text-[#F97316] group-hover/btn:translate-x-1 transition-transform duration-300 ease-out shrink-0" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onApplyNow?.(featuredProgram.title);
                  }}
                  className="py-3 px-6 rounded-xl bg-[#F97316] hover:bg-orange-600 text-white text-xs sm:text-sm font-bold transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-orange-500/20 active:scale-98 cursor-pointer min-h-[44px]"
                >
                  <span>Apply Now</span>
                </button>
              </div>
            </div>

          </div>

          {/* --------------------------------------------------------
              B. TWO SUPPORTING PROGRAM CARDS (Right on Desktop, 5 Cols)
             -------------------------------------------------------- */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-5 sm:gap-6 lg:gap-7">
            {supportingPrograms.map((prog) => {
              const isAICTE = prog.recognition.includes('AICTE');

              return (
                <div
                  key={prog.id}
                  onClick={() => setSelectedProgram(prog)}
                  className="bg-white rounded-2xl sm:rounded-3xl border border-stone-200/90 shadow-[0_6px_24px_rgba(11,31,58,0.05)] hover:shadow-[0_18px_36px_rgba(11,31,58,0.1)] hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden flex flex-col justify-between group cursor-pointer h-full"
                >
                  <div>
                    {/* Supporting Card Image */}
                    <div className="relative h-36 xs:h-40 sm:h-44 w-full overflow-hidden bg-stone-100 shrink-0 border-b border-stone-100">
                      <img
                        src={prog.bgImage}
                        alt={prog.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-300 ease-out"
                      />

                      <div className="absolute top-2.5 inset-x-2.5 sm:top-3 sm:inset-x-3 z-10 flex items-center justify-between gap-1.5 pointer-events-none">
                        <span className="inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-white/95 text-[#0B1F3A] backdrop-blur-md shadow-2xs border border-white/80 pointer-events-auto truncate max-w-[55%]">
                          {prog.tag}
                        </span>

                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-semibold backdrop-blur-md shadow-2xs border pointer-events-auto shrink-0 ${
                          isAICTE 
                            ? 'bg-emerald-50/95 text-emerald-800 border-emerald-200/80' 
                            : 'bg-blue-50/95 text-blue-800 border-blue-200/80'
                        }`}>
                          <ShieldCheck className={`w-3 h-3 ${isAICTE ? 'text-emerald-600' : 'text-blue-600'}`} />
                          <span>{prog.recognition}</span>
                        </span>
                      </div>
                    </div>

                    {/* Supporting Card Body */}
                    <div className="p-4 xs:p-5 sm:p-6">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#F97316] block mb-1">
                        {prog.subtitle}
                      </span>

                      <h4 className="text-base xs:text-lg sm:text-xl font-black text-[#0B1F3A] group-hover:text-[#F97316] transition-colors duration-300 leading-snug">
                        {prog.name}
                      </h4>

                      <p className="text-xs font-semibold text-slate-500 mt-1.5 flex items-center gap-1.5 line-clamp-1">
                        <Building2 className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
                        <span className="truncate">{prog.partner}</span>
                      </p>

                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mt-2">
                        {prog.overview}
                      </p>

                      {/* Format and Duration */}
                      <div className="mt-3 pt-2.5 sm:mt-3.5 sm:pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] sm:text-xs text-slate-500 font-medium">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>{prog.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>{prog.format}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Supporting Card Footer */}
                  <div className="p-4 xs:p-5 sm:p-6 pt-0">
                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#F97316] truncate">
                        <TrendingUp className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
                        <span className="truncate">{prog.highlightMetric.label}: {prog.highlightMetric.value}</span>
                      </div>

                      <div className="flex items-center gap-1.5 xs:gap-2 shrink-0">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setFeaturedProgramId(prog.id);
                          }}
                          title="Showcase as featured program"
                          className="px-2.5 py-1.5 rounded-lg border border-stone-200 hover:border-[#0B1F3A] text-[#0B1F3A] text-[11px] font-bold hover:bg-stone-50 transition cursor-pointer min-h-[36px]"
                        >
                          Feature
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onApplyNow?.(prog.title);
                          }}
                          className="py-1.5 px-3 sm:px-3.5 rounded-lg bg-[#F97316] hover:bg-orange-600 text-white text-xs font-bold transition shadow-2xs hover:shadow-sm cursor-pointer min-h-[36px]"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* ========================================================
            3. ALL DEGREE PATHWAYS SELECTOR STRIP
            Responsive 1-col on mobile, 2-col on tablet, 3-col on desktop
           ======================================================== */}
        <div className="mt-10 sm:mt-14 lg:mt-16 pt-6 sm:pt-8 border-t border-stone-200/80">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-4">
            <div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 block">Complete Portfolio</span>
              <h4 className="text-sm xs:text-base sm:text-lg font-bold text-[#0B1F3A]">All 6 Postgraduate Degree Pathways</h4>
            </div>
            <span className="text-[11px] sm:text-xs font-semibold text-slate-500">
              Click any program to showcase above or explore full curriculum
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3.5">
            {programsData.map((prog) => {
              const isSelected = featuredProgram.id === prog.id;

              return (
                <button
                  key={prog.id}
                  onClick={() => {
                    setFeaturedProgramId(prog.id);
                    if (activeCategory !== 'all' && prog.category !== activeCategory) {
                      setActiveCategory('all');
                    }
                  }}
                  className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl text-left border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#F97316] shadow-md shadow-orange-500/10 ring-1 ring-[#F97316]'
                      : 'bg-white/80 hover:bg-white border-stone-200/80 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
                    <img 
                      src={prog.bgImage} 
                      alt="" 
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl object-cover shrink-0 border border-stone-200/80" 
                    />
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#F97316] block truncate">
                        {prog.subtitle}
                      </span>
                      <span className="text-xs sm:text-sm font-extrabold text-[#0B1F3A] block truncate group-hover:text-[#F97316] transition-colors">
                        {prog.name}
                      </span>
                      <span className="text-[10.5px] sm:text-[11px] text-slate-500 font-medium block truncate">
                        {prog.highlightMetric.label}: {prog.highlightMetric.value}
                      </span>
                    </div>
                  </div>

                  <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${
                    isSelected 
                      ? 'bg-[#F97316] text-white' 
                      : 'border border-stone-200 text-slate-400 group-hover:text-[#F97316] group-hover:border-[#F97316]'
                  }`}>
                    <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* ========================================================
          CURRICULUM & PROGRAM DETAILS MODAL
          Preserves 100% of authentic RACE modules, career pathways,
          official university verification and interactive callbacks
         ======================================================== */}
      {selectedProgram && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 sm:p-6 bg-slate-950/75 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedProgram(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative bg-gradient-to-r from-[#0B1F3A] via-slate-900 to-[#0B1F3A] p-5 sm:p-7 text-white shrink-0">
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 text-slate-300 hover:text-white p-2 rounded-full hover:bg-white/10 transition duration-200 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex flex-wrap items-center gap-2 mb-2 pr-8">
                <span className="text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#F97316] text-white uppercase tracking-wide">
                  {selectedProgram.tag}
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  • {selectedProgram.recognition}
                </span>
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight">
                {selectedProgram.title}
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-300 mt-1.5 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-[#F97316] shrink-0" />
                <span className="line-clamp-1">{selectedProgram.partner}</span>
              </p>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-4 sm:p-7 overflow-y-auto space-y-5 sm:space-y-6 text-slate-700 text-sm">
              {/* Program Overview */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5 sm:mb-2">
                  Program Overview
                </h4>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-sm md:text-base">
                  {selectedProgram.overview}
                </p>
              </div>

              {/* Stats Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 p-3 sm:p-4 bg-stone-50 rounded-xl sm:rounded-2xl border border-stone-200/80 text-center">
                <div className="p-1 min-w-0">
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider truncate">Duration</div>
                  <div className="text-xs sm:text-sm font-extrabold text-slate-900 mt-0.5 truncate">{selectedProgram.duration}</div>
                </div>
                <div className="p-1 min-w-0">
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider truncate">Format</div>
                  <div className="text-xs sm:text-sm font-extrabold text-slate-900 mt-0.5 truncate">{selectedProgram.format}</div>
                </div>
                <div className="p-1 min-w-0">
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider truncate">{selectedProgram.highlightMetric.label}</div>
                  <div className="text-xs sm:text-sm font-black text-[#F97316] mt-0.5 truncate">{selectedProgram.highlightMetric.value}</div>
                </div>
                <div className="p-1 min-w-0">
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider truncate">Next Cohort</div>
                  <div className="text-xs sm:text-sm font-extrabold text-emerald-600 mt-0.5 truncate">{selectedProgram.nextCohort}</div>
                </div>
              </div>

              {/* Curriculum Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 sm:mb-3">
                  Core Modules & Practical Curriculum
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  {selectedProgram.curriculumHighlights.map((mod, i) => (
                    <div key={i} className="flex items-start gap-2 sm:gap-2.5 bg-stone-50 p-2.5 sm:p-3 rounded-lg sm:rounded-xl border border-stone-200/70 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-semibold text-slate-800 leading-snug">{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Careers */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 sm:mb-2.5">
                  Target Career Roles
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {selectedProgram.careers.map((career, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-semibold bg-stone-100 text-[#0B1F3A] px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-stone-200"
                    >
                      {career}
                    </span>
                  ))}
                </div>
              </div>

              {/* Official Source Link */}
              <div className="pt-3 border-t border-stone-100 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 text-xs text-slate-500">
                <span className="font-medium">Degree awarded by REVA University</span>
                <a
                  href={selectedProgram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F97316] hover:text-orange-700 font-semibold flex items-center gap-1 hover:underline"
                >
                  <span>Official University Course Page</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-3.5 sm:p-5 bg-stone-50 border-t border-stone-100 flex items-center justify-end gap-2.5 sm:gap-3 shrink-0">
              <button
                onClick={() => {
                  const prog = selectedProgram;
                  setSelectedProgram(null);
                  onRequestCallback?.(prog.title);
                }}
                className="px-3.5 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-900 border border-stone-300 rounded-xl hover:bg-white transition duration-200 cursor-pointer min-h-[40px]"
              >
                Request Callback
              </button>
              
              <button
                onClick={() => {
                  const prog = selectedProgram;
                  setSelectedProgram(null);
                  onApplyNow?.(prog.title);
                }}
                className="px-4 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-bold text-white bg-[#F97316] hover:bg-orange-600 rounded-xl shadow-sm hover:shadow transition duration-200 cursor-pointer min-h-[40px]"
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
