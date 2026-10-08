import React, { useState } from 'react';
import { X, CheckCircle, Phone, Mail, User, Briefcase, GraduationCap } from 'lucide-react';
import { programsData } from '../data/programs';

export default function CallbackModal({ isOpen, onClose, initialProgram = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '3-5 years',
    program: initialProgram || programsData[0].title,
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // simulate auto-close or let user close
    }, 4000);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-race-navy to-race-navy-800 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-300 hover:text-white p-1 rounded-full hover:bg-white/10 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-race-orange text-white text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
              Admissions 2026
            </span>
            <span className="text-xs text-slate-300">Batches Starting Soon</span>
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">Request A Callback</h3>
          <p className="text-sm text-slate-300 mt-1">
            Speak with an executive academic counselor to find the ideal program for your career goals.
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Request Received!</h4>
              <p className="text-slate-600 text-sm max-w-sm mx-auto mb-6">
                Thank you for your interest in RACE REVA. An admissions advisor will call you within 24 business hours at <span className="font-semibold text-slate-800">{formData.phone || 'your phone number'}</span>.
              </p>
              <button
                onClick={handleReset}
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-race-navy text-white text-sm font-semibold hover:bg-race-navy-800 transition"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-race-orange/30 focus:border-race-orange transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Official / Personal Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-race-orange/30 focus:border-race-orange transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-race-orange/30 focus:border-race-orange transition"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Work Experience *
                  </label>
                  <div className="relative">
                    <Briefcase className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-race-orange/30 focus:border-race-orange bg-white transition"
                    >
                      <option value="1-3 years">1 – 3 Years</option>
                      <option value="3-5 years">3 – 5 Years</option>
                      <option value="5-8 years">5 – 8 Years</option>
                      <option value="8-12 years">8 – 12 Years</option>
                      <option value="12+ years">12+ Years (Senior Leader)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Program of Interest *
                  </label>
                  <div className="relative">
                    <GraduationCap className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-race-orange/30 focus:border-race-orange bg-white transition"
                    >
                      {programsData.map((p) => (
                        <option key={p.id} value={p.title}>
                          {p.name} ({p.subtitle})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg bg-race-orange hover:bg-race-orange-hover text-white font-semibold shadow-lg shadow-race-orange/25 transition duration-200 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Request Immediate Callback
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-500">
                🔒 Your contact details are secure. We respect your privacy and do not spam.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
