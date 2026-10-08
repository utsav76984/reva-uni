import React, { useState } from 'react';
import { alumniData } from '../data/alumni';
import { ArrowRight, TrendingUp, Building2, ChevronLeft, ChevronRight, CheckCircle2, Award } from 'lucide-react';

export default function Alumni({ onApplyNow }) {
  const [activeTrack, setActiveTrack] = useState('All');
  const [currentPage, setCurrentPage] = useState(0);

  const filteredAlumni = activeTrack === 'All'
    ? alumniData
    : alumniData.filter((a) => a.track === activeTrack);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(filteredAlumni.length / itemsPerPage);

  const handleTrackChange = (track) => {
    setActiveTrack(track);
    setCurrentPage(0);
  };

  const displayedAlumni = filteredAlumni.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section id="alumni" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Real People, Real Transformations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Alumni <span className="text-race-orange">Career Outcomes</span>
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl font-normal">
              Verified career shifts of working professionals from the authoritative RACE REVA records.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
              disabled={currentPage === 0}
              className={`w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center transition ${
                currentPage === 0
                  ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400'
                  : 'hover:bg-race-navy hover:text-white hover:border-race-navy text-slate-700 bg-white shadow-sm'
              }`}
              aria-label="Previous alumni"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))}
              disabled={currentPage >= totalPages - 1}
              className={`w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center transition ${
                currentPage >= totalPages - 1
                  ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400'
                  : 'hover:bg-race-navy hover:text-white hover:border-race-navy text-slate-700 bg-white shadow-sm'
              }`}
              aria-label="Next alumni"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Track Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-3 border-b border-slate-200/60">
          {['All', 'Analytics', 'AI', 'Cybersecurity'].map((track) => {
            const isActive = activeTrack === track;
            return (
              <button
                key={track}
                onClick={() => handleTrackChange(track)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-race-navy text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-200/70 bg-white border border-slate-200'
                }`}
              >
                {track === 'All' ? 'All Transformations' : `${track} Graduates`}
              </button>
            );
          })}
        </div>

        {/* 3 Alumni Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedAlumni.map((alum) => (
            <div
              key={alum.id}
              className="group bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Photo + Name + Degree */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-race-orange/30 p-0.5 shrink-0 bg-slate-100">
                    <img
                      src={alum.image}
                      alt={alum.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-race-orange transition-colors">
                      {alum.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mt-0.5">
                      {alum.program}
                    </p>
                    <span className="inline-block mt-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-100">
                      {alum.metric}
                    </span>
                  </div>
                </div>

                {/* Transition Card Ribbon (Before -> After) */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mb-4">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Verified Career Jump
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-semibold text-slate-500 line-through decoration-slate-400">
                      {alum.beforeRole || 'Previous Role'}
                    </span>
                    <span className="text-race-orange font-bold text-sm">&rarr;</span>
                    <span className="font-black text-slate-950 text-sm">
                      {alum.afterRole}
                    </span>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-slate-200/60 text-xs font-extrabold text-race-navy flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-race-orange shrink-0" />
                    <span>{alum.company}</span>
                  </div>
                </div>
              </div>

              {/* Verified Ribbon */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Official RACE Alumni Record
                </span>
                <span className="font-semibold text-slate-600">{alum.track}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`h-2 rounded-full transition-all ${
                  currentPage === idx ? 'w-8 bg-race-orange' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
