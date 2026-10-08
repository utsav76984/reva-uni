import React from 'react';
import { Building2, Award, ShieldCheck, MapPin, ExternalLink, CheckCircle } from 'lucide-react';

export default function RevaUniversity() {
  const credentials = [
    {
      title: 'UGC Recognised University',
      desc: 'Established under the Government of Karnataka Act and recognized by the University Grants Commission (UGC). Degrees carry formal university legal standing across the globe.'
    },
    {
      title: 'AICTE Approved Technical Programs',
      desc: 'Technical postgraduate master’s programs like M.Tech. in AI and M.Tech. in Cybersecurity are formally approved by AICTE.'
    },
    {
      title: '45-Acre Green Campus in Bengaluru',
      desc: 'Located at Rukmini Knowledge Park, Kattigenahalli, Yelahanka, Bengaluru—complete with high-tech research centers, computing labs, and executive facilities.'
    },
    {
      title: 'Rukmini Educational Benevolent Trust',
      desc: 'Backed by a visionary philanthropic foundation dedicated to transforming higher and professional education in emerging domains.'
    }
  ];

  return (
    <section id="reva-credibility" className="py-20 lg:py-28 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Official Logos & Campus Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-race-navy-50 text-race-navy text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-race-orange" />
              <span>Institutional Heritage</span>
            </div>

            {/* Official Logos Side-by-Side: STRICT BRAND RULE */}
            <div className="flex items-center gap-6 py-2 border-b border-slate-100">
              <img
                src="https://race.reva.edu.in/wp-content/uploads/2020/11/Reva-logo-1-1.png"
                alt="REVA University Logo"
                className="h-14 sm:h-16 w-auto object-contain"
              />
              <div className="h-10 w-px bg-slate-200"></div>
              <img
                src="https://race.reva.edu.in/wp-content/uploads/RACE-REVA-University-logo.svg"
                alt="RACE REVA Logo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              An Initiative of <span className="text-race-orange">REVA University</span>, Bengaluru
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              <strong>REVA Academy for Corporate Excellence (RACE)</strong> is the dedicated executive education arm of REVA University, conceived to bridge the gap between rapidly evolving emerging technology industries and senior technical leadership.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every master’s degree and postgraduate diploma earned through RACE is awarded directly by REVA University under strict regulatory norms, ensuring lifelong academic value, global credential evaluation, and doctoral eligibility.
            </p>

            {/* Location callout */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-race-orange shrink-0 mt-0.5" />
              <div className="text-xs text-slate-700">
                <span className="font-bold text-slate-900 block">Campus Address</span>
                Rukmini Knowledge Park, Kattigenahalli, Yelahanka, Bengaluru, Karnataka, India – 560064
              </div>
            </div>

            <div>
              <a
                href="https://reva.edu.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-race-orange hover:text-race-orange-dark uppercase tracking-wider"
              >
                <span>Visit REVA University Main Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: 4 Credibility Metric Cards */}
          <div className="lg:col-span-6 space-y-4">
            {credentials.map((cred, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-race-orange/40 hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-race-navy-50 text-race-navy flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-5 h-5 text-race-orange" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {cred.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {cred.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
