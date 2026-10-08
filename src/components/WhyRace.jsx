import React from 'react';
import { Award, ShieldAlert, Cpu, Laptop, Users, CheckCircle, ArrowRight } from 'lucide-react';

export default function WhyRace({ onExplorePrograms }) {
  const pillars = [
    {
      id: 'degree',
      title: 'Formal University Master’s Degree',
      subtitle: 'AICTE & UGC Recognised',
      description: 'Unlike unaccredited bootcamps or certificate courses, graduate with a formal, globally recognised M.Tech. or M.Sc. degree awarded directly by REVA University.',
      icon: Award,
      badge: 'Academic Authority',
      highlight: 'Global Credibility'
    },
    {
      id: 'mentors',
      title: 'India’s Silicon Valley Faculty & CXOs',
      subtitle: '50+ Industry Mentors',
      description: 'Learn directly from Chief AI Officers, CISOs, distinguished engineers, and Kaggle Grandmasters from Dell, Granicus, Krutrim, and SAP Labs.',
      icon: Users,
      badge: 'Real Practitioner Insight',
      highlight: 'No Academic Theorists'
    },
    {
      id: 'labs',
      title: 'RACE Sandbox & Live Cyber Range',
      subtitle: 'Hands-on Simulation',
      description: 'Train on real-world systems, not passive slides. Tackle live-fire red team penetration tests, cyber range defense, and multi-cloud AI model deployments.',
      icon: ShieldAlert,
      badge: 'Practical Immersion',
      highlight: 'EC-Council & Azure Labs'
    },
    {
      id: 'format',
      title: 'Tailored for Working Professionals',
      subtitle: 'Weekend + Online Format',
      description: 'Structured specifically so you never have to quit your job or take a career break. Attend high-impact interactive weekend classes with 24/7 LMS access.',
      icon: Laptop,
      badge: 'Zero Career Disruption',
      highlight: 'Executive Friendly'
    },
    {
      id: 'certifications',
      title: 'Embedded Global Certifications',
      subtitle: 'AWS, Microsoft Azure & EC-Council',
      description: 'Walk away with up to five world-standard industry certifications alongside your university master’s degree, fully integrated into the coursework.',
      icon: Cpu,
      badge: 'Industry Standard',
      highlight: 'Enterprise Dual Value'
    },
    {
      id: 'roi',
      title: 'Ranked No. 1 in ROI & Salary Acceleration',
      subtitle: 'Proven Career Outcomes',
      description: 'Our graduates report average salary hikes up to 354% and top average packages of ₹39 LPA across 100+ global hiring partners including PwC, Swiss Re, and Oracle.',
      icon: CheckCircle,
      badge: 'Documented Impact',
      highlight: '₹39 LPA Top Avg Package'
    }
  ];

  return (
    <section id="why-race" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-race-orange/10 text-race-orange text-xs font-bold uppercase tracking-wider mb-3">
            <span>The RACE Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Working Leaders Choose <span className="text-race-orange">RACE REVA</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed font-normal">
            Being a thought leader in next-gen tech education, RACE supports its program participants to reinvent their careers through actionable, progressive, and integrated learning.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="group relative bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-card-hover hover:border-race-orange/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon and Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-race-navy-50 text-race-navy group-hover:bg-race-orange group-hover:text-white transition-colors duration-300 flex items-center justify-center shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-100 group-hover:bg-orange-50 group-hover:text-race-orange px-2.5 py-1 rounded-full transition-colors">
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-race-navy transition-colors mb-1">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-semibold text-race-orange mb-3">
                    {pillar.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Card Footer Tag */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span className="text-slate-700">{pillar.highlight}</span>
                  <span className="text-race-orange opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    Learn more &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 bg-gradient-to-r from-race-navy via-race-navy-800 to-slate-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Ready to elevate your engineering & executive leadership?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Explore the 6 master's programs tailored specifically for working professionals.
            </p>
          </div>
          <button
            onClick={onExplorePrograms}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-race-orange hover:bg-race-orange-hover text-white font-bold text-xs uppercase tracking-wider shrink-0 transition"
          >
            <span>Explore Programs</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
