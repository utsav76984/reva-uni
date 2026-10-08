import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CallbackModal from './components/CallbackModal';

export default function App() {
  const [callbackModalOpen, setCallbackModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');

  const handleOpenCallback = (progName = '') => {
    setSelectedProgram(progName);
    setCallbackModalOpen(true);
  };

  const handleApplyNow = (progName = '') => {
    handleOpenCallback(progName);
  };

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 font-sans antialiased selection:bg-race-orange/20 selection:text-race-orange-dark flex flex-col">
      
      {/* ========================================================
          1. NAVBAR / HEADER (Floating Dark Navy over the Hero)
             Finalized per requirements with exact authoritative menu
         ======================================================== */}
      <Header
        onRequestCallback={() => handleOpenCallback('General Inquiry')}
        onApplyNow={() => handleApplyNow('Application')}
      />

      {/* ========================================================
          2. HERO SECTION (Directly behind/below floating navbar)
             Univet-inspired editorial layout + authentic RACE content
         ======================================================== */}
      <Hero
        onApplyNow={() => handleApplyNow('Hero Application')}
        onRequestCallback={() => handleOpenCallback('Hero Callback')}
      />

      {/* ========================================================
          3. MINIMAL ANCHOR PLACEHOLDERS FOR NAVBAR VERIFICATION
             (No extra sections created per prompt instructions)
         ======================================================== */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-16 w-full">
        
        {/* Scroll Anchor Placeholders matching the exact 8 live menu items */}
        <div className="space-y-12 max-w-4xl mx-auto">
          
          <div id="pg-programs" className="scroll-mt-32 p-8 bg-white rounded-2xl border border-dashed border-slate-300 text-center shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Anchor Target</span>
            <h3 className="text-lg font-bold text-slate-800 mt-1">#pg-programs (PG Programs)</h3>
            <p className="text-xs text-slate-500 mt-1">
              Dropdown: Business Analytics, Artificial Intelligence, Cybersecurity, Cloud Architecture and Security
            </p>
          </div>

          <div id="get-certified" className="scroll-mt-32 p-8 bg-white rounded-2xl border border-dashed border-slate-300 text-center shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Anchor Target</span>
            <h3 className="text-lg font-bold text-slate-800 mt-1">#get-certified (Get Certified)</h3>
            <p className="text-xs text-slate-500 mt-1">
              Dropdown: Certified Agentic AI Engineer, DevOps Specialist, Advanced Diploma in Cybersecurity, CEH, AI Engineer
            </p>
          </div>

          <div id="race-labs" className="scroll-mt-32 p-8 bg-white rounded-2xl border border-dashed border-slate-300 text-center shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Anchor Target</span>
            <h3 className="text-lg font-bold text-slate-800 mt-1">#race-labs (RACE Labs)</h3>
            <p className="text-xs text-slate-500 mt-1">
              Dropdown: RACE Blogs (Expert Insights), RACE Research, RACE RETiNA (Weekly Intelligence Brief)
            </p>
          </div>

          <div id="consulting" className="scroll-mt-32 p-8 bg-white rounded-2xl border border-dashed border-slate-300 text-center shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Anchor Target</span>
            <h3 className="text-lg font-bold text-slate-800 mt-1">#consulting (Consulting)</h3>
          </div>

          <div id="events" className="scroll-mt-32 p-8 bg-white rounded-2xl border border-dashed border-slate-300 text-center shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Anchor Target</span>
            <h3 className="text-lg font-bold text-slate-800 mt-1">#events (Events)</h3>
            <p className="text-xs text-slate-500 mt-1">
              Dropdown: RACEx360 2026, Meetup Namma Bengaluru, Women Tech Leaders Awards, Cricket League, Past Events
            </p>
          </div>

          <div id="mentors" className="scroll-mt-32 p-8 bg-white rounded-2xl border border-dashed border-slate-300 text-center shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Anchor Target</span>
            <h3 className="text-lg font-bold text-slate-800 mt-1">#mentors (Mentors)</h3>
          </div>

          <div id="about-race" className="scroll-mt-32 p-8 bg-white rounded-2xl border border-dashed border-slate-300 text-center shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Anchor Target</span>
            <h3 className="text-lg font-bold text-slate-800 mt-1">#about-race (About RACE)</h3>
          </div>

          <div id="contact-us" className="scroll-mt-32 p-8 bg-white rounded-2xl border border-dashed border-slate-300 text-center shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Anchor Target</span>
            <h3 className="text-lg font-bold text-slate-800 mt-1">#contact-us (Contact Us)</h3>
          </div>

        </div>

      </main>

      {/* Interactive Modal for Callback & Application */}
      <CallbackModal
        isOpen={callbackModalOpen}
        onClose={() => setCallbackModalOpen(false)}
        initialProgram={selectedProgram}
      />

    </div>
  );
}
