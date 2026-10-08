import React from 'react';
import { eventsAndLabsData } from '../data/events';
import { Calendar, Clock, ArrowRight, BookOpen, Sparkles, ExternalLink } from 'lucide-react';

export default function RaceLabs() {
  return (
    <section id="race-labs" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-race-navy-50 text-race-navy text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5 text-race-orange" />
              <span>Thought Leadership & Applied Research</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              RACE Labs & <span className="text-race-orange">Industry Events</span>
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl font-normal">
              Dive into frontier tech research, executive conferences, RACEx360 summits, and hands-on simulation dispatches.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <a
              href="https://race.reva.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-race-navy hover:text-race-orange transition"
            >
              <span>Explore All RACE Insights</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Events & Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventsAndLabsData.map((event) => (
            <div
              key={event.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Header */}
                <div className="relative h-44 overflow-hidden bg-slate-900">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-black uppercase tracking-wider bg-race-navy text-white px-2.5 py-1 rounded-md shadow-sm">
                      {event.category}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400 font-semibold mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-race-orange" />
                      {event.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {event.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-race-orange transition-colors leading-snug line-clamp-2">
                    {event.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
                    {event.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {event.highlights.map((h, i) => (
                      <span key={i} className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-race-orange group-hover:translate-x-1 transition-transform">
                  <span>Read Full Dispatch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
