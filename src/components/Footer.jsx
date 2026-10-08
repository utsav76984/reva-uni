import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink, 
  ArrowUpRight, 
  ShieldCheck, 
  Building2,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  Youtube
} from 'lucide-react';
import { programsData } from '../data/programs';

export default function Footer({ onRequestCallback }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          
          {/* Col 1: Brand & Institutional Heritage (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            {/* STRICT BRAND RULE: EXACT ORIGINAL LOGOS */}
            <div className="flex items-center gap-4 py-1">
              <img
                src="https://race.reva.edu.in/wp-content/uploads/RACE-REVA-University-logo.svg"
                alt="RACE REVA University logo"
                className="h-10 w-auto object-contain bg-white/5 p-1 rounded"
              />
              <div className="h-8 w-px bg-white/20"></div>
              <img
                src="https://race.reva.edu.in/wp-content/uploads/2020/11/Reva-logo-1-1.png"
                alt="REVA University logo"
                className="h-10 w-auto object-contain bg-white/5 p-1 rounded"
              />
            </div>

            <p className="text-slate-300 leading-relaxed font-normal">
              REVA Academy for Corporate Excellence (RACE) is an initiative of REVA University, delivering executive Master’s degrees and PG Diplomas in Artificial Intelligence, Cybersecurity, Business Analytics, and Cloud Architecture for working professionals.
            </p>

            {/* Social Icons with Official Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.linkedin.com/school/racereva/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-blue-600 text-white flex items-center justify-center transition"
                aria-label="RACE REVA LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/RACE-REVA-University-105159408557689"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-blue-700 text-white flex items-center justify-center transition"
                aria-label="RACE REVA Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/racereva/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-pink-600 text-white flex items-center justify-center transition"
                aria-label="RACE REVA Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/RACEREVA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-sky-500 text-white flex items-center justify-center transition"
                aria-label="RACE REVA Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCiu0y2YYQtQ4qZomlW-6xtg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition"
                aria-label="RACE REVA YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Academic Programs (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Academic Programs
            </h4>
            <ul className="space-y-2.5 font-medium">
              {programsData.map((prog) => (
                <li key={prog.id}>
                  <a
                    href="#programs"
                    className="hover:text-race-orange transition block text-slate-300 hover:translate-x-0.5"
                  >
                    {prog.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links & Student Portals (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 font-medium text-slate-300">
              <li>
                <a href="#why-race" className="hover:text-race-orange transition">
                  About RACE
                </a>
              </li>
              <li>
                <a href="#race-labs" className="hover:text-race-orange transition">
                  RACE Labs – Blogs
                </a>
              </li>
              <li>
                <a href="#mentors" className="hover:text-race-orange transition">
                  Industry Mentors
                </a>
              </li>
              <li>
                <a href="#alumni" className="hover:text-race-orange transition">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#reva-credibility" className="hover:text-race-orange transition">
                  REVA University
                </a>
              </li>
              <li>
                <a 
                  href="https://race.reva.edu.in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white text-race-orange font-bold flex items-center gap-1"
                >
                  <span>RACE LMS Login</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://race.reva.edu.in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-race-orange transition flex items-center gap-1"
                >
                  <span>Razorpay / Bill Desk</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Campus Info (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Admissions & Campus
            </h4>
            <div className="space-y-3.5 text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-race-orange shrink-0 mt-0.5" />
                <span>
                  Rukmini Knowledge Park, Kattigenahalli, Yelahanka, Bengaluru, Karnataka, India – 560064
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-race-orange shrink-0" />
                <a href="tel:+918069378092" className="hover:text-white font-bold text-white">
                  +91 8069378092 <span className="font-normal text-slate-400">(Toll-Free)</span>
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-race-orange shrink-0" />
                <a href="mailto:admissions@race.reva.edu.in" className="hover:text-white">
                  admissions@race.reva.edu.in
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={onRequestCallback}
                  className="w-full py-2.5 px-4 rounded-lg bg-white/10 hover:bg-race-orange hover:text-white text-slate-200 font-bold text-xs uppercase tracking-wider transition border border-white/10"
                >
                  Request A Callback
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            &copy; {currentYear} REVA Academy for Corporate Excellence (RACE), REVA University. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6 text-slate-300">
            <span>UGC Recognised University</span>
            <span>•</span>
            <span>AICTE Approved M.Tech Programs</span>
            <span>•</span>
            <a href="https://race.reva.edu.in/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
