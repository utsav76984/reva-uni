import React, { useState } from 'react';
import { 
  Laptop, 
  Calendar, 
  Globe, 
  Code2, 
  Users, 
  Award, 
  Cpu, 
  Layers, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function LearningExperience({ onRequestCallback }) {
  const [activeStep, setActiveStep] = useState(0);

  const modelElements = [
    {
      id: 'blended',
      title: 'Blended Learning Pedagogy',
      short: 'Blended Format',
      icon: Layers,
      summary: 'Optimal blend of live weekend lectures with senior practitioners and continuous asynchronous reinforcement.',
      details: [
        'Interactive instructor-led weekend live sessions',
        'Structured pre-readings & concept tutorials',
        'Real-time Q&A during technical masterclasses',
        'Collaborative cohort problem-solving groups'
      ]
    },
    {
      id: 'weekend',
      title: 'Weekend Learning Schedule',
      short: 'Weekend Schedule',
      icon: Calendar,
      summary: 'Tailor-made for working tech leads and executives—learn on Saturdays & Sundays without leaving your day job.',
      details: [
        'Classes scheduled on weekends to avoid weekday office conflicts',
        'Preserve your weekday focus and career trajectory',
        'Buffer days for family, work emergencies, and project catch-up',
        'Consistent 12–24 month roadmap towards degree completion'
      ]
    },
    {
      id: 'online-lms',
      title: 'RACE LMS & 24/7 Digital Hub',
      short: '24/7 LMS Access',
      icon: Laptop,
      summary: 'Enterprise-grade Learning Management System with recorded classes, coding sandboxes, and learning assets.',
      details: [
        'High-definition video recordings of every weekend lecture',
        'Integrated Jupyter notebooks, cloud code repos, and dataset libraries',
        'Automated code assessment and grading pipelines',
        'Direct instructor messaging and peer discussion forums'
      ]
    },
    {
      id: 'hands-on',
      title: 'Hands-on Projects & Capstones',
      short: 'Hands-On Capstone',
      icon: Code2,
      summary: 'Solve live enterprise-grade problems with real-world datasets rather than textbook toy examples.',
      details: [
        'End-to-end industry capstone project guided by enterprise mentors',
        'Deployment to production cloud staging environments',
        'Portfolio-ready GitHub repositories and architecture diagrams',
        'Evaluation by external enterprise panel of CTOs & CISOs'
      ]
    },
    {
      id: 'mentorship',
      title: '1-on-1 Industry Mentorship',
      short: 'Industry Mentors',
      icon: Users,
      summary: 'Personalized guidance from Silicon Valley and Indian corporate leaders across every milestone.',
      details: [
        'Dedicated mentor pairing based on career specialization',
        'Strategic career guidance, resume review, and executive coaching',
        'Insights into emerging tech architecture trends in Fortune 500s',
        'Lifelong professional mentor network post-graduation'
      ]
    },
    {
      id: 'certifications',
      title: 'Embedded Global Certifications',
      short: 'Global Certifications',
      icon: Award,
      summary: 'Graduate with up to five international certifications from AWS, Microsoft Azure, and EC-Council.',
      details: [
        'AWS Academy Cloud Solutions Architect preparation & credits',
        'Microsoft Azure AI & Data Engineering certifications included',
        'EC-Council Certified Ethical Hacker (CEH) alignment',
        'Terralogic Inc. certified cyber defense credentials'
      ]
    },
    {
      id: 'practical-labs',
      title: 'Practical Labs & Cyber Range',
      short: 'Practical Labs',
      icon: Cpu,
      summary: 'Live cyber range exercises and GPU-accelerated AI sandbox for intensive real-time practice.',
      details: [
        'Live-fire cyber range combat against emulated APT attacks',
        'High-compute GPU infrastructure for deep neural networks',
        'Multi-cloud Kubernetes cluster orchestration labs',
        'Zero-trust network configuration and penetration testing'
      ]
    },
    {
      id: 'executive',
      title: 'Executive-Friendly Learning',
      short: 'Executive Care',
      icon: Globe,
      summary: 'Holistic support ecosystem designed for senior professionals with demanding business schedules.',
      details: [
        'Dedicated Academic Success Manager for every cohort',
        'Flexible submission extensions for business travel emergencies',
        'Continuous feedback loops to guarantee mastery',
        'Exclusive access to REVA University library & digital journals'
      ]
    }
  ];

  return (
    <section id="learning-experience" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-race-navy-50 text-race-navy text-xs font-bold uppercase tracking-wider mb-3">
            <span>Pedagogical Model</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            The RACE <span className="text-race-orange">Learning Experience</span>
          </h2>
          <p className="mt-3 text-base text-slate-600 font-normal">
            A progressive, integrated learning process engineered specifically for working tech leaders.
          </p>
        </div>

        {/* Visual Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Vertical Element Selector */}
          <div className="lg:col-span-5 space-y-2.5">
            {modelElements.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = activeStep === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center justify-between border ${
                    isSelected
                      ? 'bg-race-navy text-white border-race-navy shadow-md shadow-race-navy/15 scale-[1.01]'
                      : 'bg-white text-slate-700 border-slate-200/80 hover:bg-slate-100/60'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-race-orange text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                        {item.title}
                      </div>
                      <div className={`text-[11px] truncate max-w-[240px] ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                        {item.summary}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-race-orange translate-x-1' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Element Deep-Dive Display */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-lg sticky top-28 animate-fade-in">
            {(() => {
              const current = modelElements[activeStep];
              const CurrentIcon = current.icon;
              return (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-200 text-race-orange flex items-center justify-center shadow-sm">
                        <CurrentIcon className="w-7 h-7" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                          Pillar {activeStep + 1} of 8
                        </span>
                        <h3 className="text-2xl font-extrabold text-slate-900">
                          {current.title}
                        </h3>
                      </div>
                    </div>
                    <span className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1 rounded-full hidden sm:inline-block">
                      {current.short}
                    </span>
                  </div>

                  <p className="text-slate-600 text-base leading-relaxed">
                    {current.summary}
                  </p>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                      Key Highlights & Delivery
                    </h4>
                    <div className="space-y-3">
                      {current.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-sm text-slate-700">
                          <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="font-medium">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500">
                      Learn how this pedagogy fits your busy work schedule.
                    </span>
                    <button
                      onClick={onRequestCallback}
                      className="text-xs font-bold text-race-orange hover:text-race-orange-dark flex items-center gap-1"
                    >
                      <span>Speak with an Advisor</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>

        </div>

      </div>
    </section>
  );
}
