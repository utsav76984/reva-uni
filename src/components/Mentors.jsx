import React, { useState } from 'react';
import { mentorsData, mentorCategories } from '../data/mentors';
import { ChevronLeft, ChevronRight, Linkedin, ExternalLink, Sparkles, Building2, User, X } from 'lucide-react';

export default function Mentors() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMentor, setSelectedMentor] = useState(null);

  const filteredMentors = activeCategory === 'all'
    ? mentorsData
    : mentorsData.filter((m) => m.category === activeCategory);

  const itemsPerPage = 3;
  const maxIndex = Math.max(0, filteredMentors.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setCurrentIndex(0);
  };

  // Slice visible mentors for desktop view
  const visibleMentors = filteredMentors.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section id="mentors" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-race-orange/10 text-race-orange text-xs font-bold uppercase tracking-wider mb-3">
              <span>Distinguished Faculty & Practitioners</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Learn from India’s Silicon Valley’s <span className="text-race-orange">Finest</span>
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl font-normal">
              Master emerging tech with insights from top industry minds and gain the edge to lead your domain with confidence.
            </p>
          </div>

          {/* Carousel Navigation Arrows */}
          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center transition ${
                currentIndex === 0
                  ? 'opacity-40 cursor-not-allowed bg-slate-50 text-slate-400'
                  : 'hover:bg-race-navy hover:text-white hover:border-race-navy text-slate-700 bg-white shadow-sm'
              }`}
              aria-label="Previous mentors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className={`w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center transition ${
                currentIndex >= maxIndex
                  ? 'opacity-40 cursor-not-allowed bg-slate-50 text-slate-400'
                  : 'hover:bg-race-navy hover:text-white hover:border-race-navy text-slate-700 bg-white shadow-sm'
              }`}
              aria-label="Next mentors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-100">
          {mentorCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-race-navy text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Mentor Cards Grid / Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleMentors.map((mentor) => (
            <div
              key={mentor.id}
              onClick={() => setSelectedMentor(mentor)}
              className="group cursor-pointer bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-race-orange/50 hover:bg-white hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              {/* Large Portrait Frame (Univet-style faculty layout) */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-100 flex items-center justify-center">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white text-xs font-semibold flex items-center gap-1.5">
                    <span>Click to view profile & bio</span>
                    <ExternalLink className="w-3.5 h-3.5 text-race-orange" />
                  </span>
                </div>
              </div>

              {/* Mentor Meta */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-race-navy transition-colors">
                      {mentor.name}
                    </h3>
                    {mentor.linkedin && (
                      <a
                        href={mentor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-slate-400 hover:text-blue-600 p-1 transition"
                        aria-label={`${mentor.name} LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <p className="text-xs font-semibold text-race-orange mt-1">
                    {mentor.role}
                  </p>

                  <p className="text-xs text-slate-500 font-medium mt-1">
                    {mentor.organization}
                  </p>

                  <p className="text-xs text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    {mentor.bio}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium capitalize">
                    {mentor.category} Track
                  </span>
                  <span className="text-race-orange font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    View Profile &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === idx ? 'w-8 bg-race-orange' : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Mentor Profile Modal */}
      {selectedMentor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
          <div 
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMentor(null)}
              className="absolute top-4 right-4 z-10 text-slate-500 hover:text-slate-900 bg-white/80 backdrop-blur p-1.5 rounded-full shadow"
              aria-label="Close mentor modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 bg-slate-900 overflow-hidden">
              <img
                src={selectedMentor.image}
                alt={selectedMentor.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-race-orange block">
                  Industry Mentor & Faculty
                </span>
                <h3 className="text-2xl font-bold">{selectedMentor.name}</h3>
                <p className="text-xs text-slate-300">{selectedMentor.role}</p>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Organization / Affiliation
                </span>
                <p className="text-sm font-semibold text-slate-800">
                  {selectedMentor.organization}
                </p>
              </div>

              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Biography & Industry Expertise
                </span>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedMentor.bio}
                </p>
              </div>

              {selectedMentor.linkedin && (
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={selectedMentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-800"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>View Official LinkedIn Profile</span>
                  </a>
                  <button
                    onClick={() => setSelectedMentor(null)}
                    className="px-4 py-2 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold hover:bg-slate-200"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
