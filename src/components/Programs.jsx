import React, { useState } from 'react';
import { 
  programsData, 
  programCategories 
} from '../data/programs';
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  Award, 
  Building2, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  FileText,
  X,
  ExternalLink
} from 'lucide-react';

export default function Programs({ onApplyNow, onRequestCallback }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProgram, setSelectedProgram] = useState(null);

  const filteredPrograms = activeCategory === 'all'
    ? programsData
    : programsData.filter((p) => p.category === activeCategory);

  return (
    <section id="programs" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-race-navy-50 text-race-navy text-xs font-bold uppercase tracking-wider mb-3">
            <span>Executive Academic Pathways</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Choose Your <span className="text-race-orange">Career Path</span>
          </h2>
          <p className="mt-3 text-base text-slate-600 font-normal">
            Pick your power-up — every program is a launchpad for technology leadership.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {programCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 tracking-wide ${
                    isActive
                      ? 'bg-race-navy text-white shadow-md shadow-race-navy/20 scale-105'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 6 Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Image Banner */}
              <div className="relative h-52 overflow-hidden bg-slate-900">
                <img
                  src={prog.bgImage}
                  alt={prog.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                
                {/* Tag Pill */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-white/95 backdrop-blur-md text-race-navy text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                    {prog.tag}
                  </span>
                </div>

                {/* Accreditation Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md shadow-sm ${
                    prog.recognition.includes('AICTE')
                      ? 'bg-amber-500 text-white'
                      : 'bg-blue-600 text-white'
                  }`}>
                    {prog.recognition}
                  </span>
                </div>

                {/* Highlight Metric Overlay */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] font-medium text-slate-300 uppercase tracking-wider block">
                      {prog.highlightMetric.label}
                    </span>
                    <span className="text-xl font-black text-amber-300">
                      {prog.highlightMetric.value}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-medium text-slate-300 uppercase tracking-wider block">
                      Next Cohort
                    </span>
                    <span className="text-xs font-bold text-white bg-white/20 px-2 py-0.5 rounded">
                      {prog.nextCohort}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs font-bold text-race-orange uppercase tracking-wider block mb-1">
                    {prog.subtitle}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-race-navy transition-colors leading-snug">
                    {prog.name}
                  </h3>

                  {/* Association */}
                  <p className="text-xs font-semibold text-slate-500 mt-2 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-race-orange shrink-0" />
                    <span>{prog.partner}</span>
                  </p>

                  <p className="text-xs text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    {prog.overview}
                  </p>
                </div>

                {/* Meta Strip */}
                <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{prog.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{prog.format}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center gap-2.5">
                  <button
                    onClick={() => setSelectedProgram(prog)}
                    className="flex-1 py-2.5 px-3 rounded-lg border border-slate-200 text-slate-800 text-xs font-bold hover:bg-slate-50 transition flex items-center justify-center gap-1"
                  >
                    <FileText className="w-3.5 h-3.5 text-slate-500" />
                    <span>Curriculum & Details</span>
                  </button>

                  <button
                    onClick={onApplyNow}
                    className="py-2.5 px-4 rounded-lg bg-race-orange hover:bg-race-orange-hover text-white text-xs font-bold transition flex items-center justify-center gap-1 shadow-sm"
                  >
                    <span>Apply</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Program Detail Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
          <div 
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative bg-gradient-to-r from-race-navy to-slate-900 p-6 text-white shrink-0">
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-5 right-5 text-slate-300 hover:text-white p-1 rounded-full hover:bg-white/10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-400 text-slate-950 uppercase">
                  {selectedProgram.tag}
                </span>
                <span className="text-xs text-slate-300">• {selectedProgram.recognition}</span>
              </div>
              <h3 className="text-2xl font-black text-white">{selectedProgram.title}</h3>
              <p className="text-xs text-slate-300 mt-1">{selectedProgram.partner}</p>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-slate-700 text-sm">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Program Overview</h4>
                <p className="text-slate-600 leading-relaxed">{selectedProgram.overview}</p>
              </div>

              {/* Stats Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 text-center">
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">Duration</div>
                  <div className="text-xs font-bold text-slate-900 mt-0.5">{selectedProgram.duration}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">Format</div>
                  <div className="text-xs font-bold text-slate-900 mt-0.5">{selectedProgram.format}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">Avg. Hike / Pkg</div>
                  <div className="text-xs font-bold text-race-orange mt-0.5">{selectedProgram.avgSalary || selectedProgram.highlightMetric.value}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">Next Cohort</div>
                  <div className="text-xs font-bold text-emerald-600 mt-0.5">{selectedProgram.nextCohort}</div>
                </div>
              </div>

              {/* Curriculum Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Core Modules & Specializations</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProgram.curriculumHighlights.map((mod, i) => (
                    <div key={i} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="font-semibold text-slate-800">{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Careers */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Target Career Leadership Roles</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProgram.careers.map((career, i) => (
                    <span key={i} className="text-xs font-semibold bg-race-navy-50 text-race-navy px-3 py-1 rounded-full border border-race-navy-100">
                      {career}
                    </span>
                  ))}
                </div>
              </div>

              {/* Official Source Link */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Degree awarded by REVA University</span>
                <a
                  href={selectedProgram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-race-orange hover:underline font-semibold flex items-center gap-1"
                >
                  <span>Official University Course Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-3 shrink-0">
              <button
                onClick={() => {
                  setSelectedProgram(null);
                  onRequestCallback();
                }}
                className="px-4 py-2 text-xs font-bold text-slate-700 hover:text-slate-900 border border-slate-300 rounded-lg"
              >
                Request Callback
              </button>
              <button
                onClick={() => {
                  setSelectedProgram(null);
                  onApplyNow();
                }}
                className="px-6 py-2 text-xs font-bold text-white bg-race-orange hover:bg-race-orange-hover rounded-lg shadow-sm"
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
