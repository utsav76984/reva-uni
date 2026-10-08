import React, { useState } from 'react';
import { faqData } from '../data/faq';
import { ChevronDown, HelpCircle, Phone, ArrowRight, MessageSquare } from 'lucide-react';

export default function FAQ({ onRequestCallback }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-race-navy-50 text-race-navy text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-race-orange" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked <span className="text-race-orange">Questions</span>
          </h2>
          <p className="mt-3 text-base text-slate-600 font-normal">
            Everything you need to know about eligibility, executive format, university accreditations, and career ROI.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-race-orange/50 shadow-md ring-1 ring-race-orange/10'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-5 px-6 sm:px-7 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                    isOpen ? 'bg-race-orange text-white rotate-180' : 'bg-slate-100 text-slate-600'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-50 animate-fade-in font-normal">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-race-orange flex items-center justify-center shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">
                Have specific queries regarding your work experience or syllabus?
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Our executive academic counseling team is available Monday through Saturday.
              </p>
            </div>
          </div>
          <button
            onClick={onRequestCallback}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-race-navy hover:bg-race-navy-800 text-white font-bold text-xs uppercase tracking-wider shrink-0 transition"
          >
            <Phone className="w-4 h-4 text-race-orange" />
            <span>Speak to an Advisor</span>
          </button>
        </div>

      </div>
    </section>
  );
}
