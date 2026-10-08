import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown, 
  Phone, 
  Mail, 
  ExternalLink,
  GraduationCap,
  Award,
  FlaskConical,
  Calendar,
  Sparkles,
  Users,
  Info,
  MessageSquare,
  MapPin
} from 'lucide-react';

import revaLogo from '../assets/reva-university-white.svg';
import raceLogo from '../assets/race-academy-white.svg';

// ============================================================================
// EXACT AUTHORITATIVE NAVIGATION DATA FROM LIVE SITE (https://race.reva.edu.in/)
// Strict preservation of wording, capitalization, ordering, URLs & hierarchy
// ============================================================================

export const pgProgramsItems = [
  {
    name: 'PG Diploma/M.Sc. in Business Analytics',
    degree: 'PG Diploma / M.Sc.',
    badge: 'UGC Recognised',
    href: 'https://race.reva.edu.in/pg-diploma-msc-in-business-analytics/',
    localAnchor: '#pg-programs'
  },
  {
    name: 'M.Tech. in Artificial Intelligence',
    degree: 'M.Tech.',
    badge: 'AICTE Approved',
    href: 'https://race.reva.edu.in/pg-diploma-m-tech-in-artificial-intelligence',
    localAnchor: '#pg-programs'
  },
  {
    name: 'PG Diploma/M.Sc. in Artificial Intelligence',
    degree: 'PG Diploma / M.Sc.',
    badge: 'UGC Recognised',
    href: 'https://race.reva.edu.in/pg-diploma-m-tech-ms-in-artificial-intelligence/',
    localAnchor: '#pg-programs'
  },
  {
    name: 'M.Tech. in Cybersecurity',
    degree: 'M.Tech.',
    badge: 'AICTE Approved',
    href: 'https://race.reva.edu.in/m-tech-in-cybersecurity/',
    localAnchor: '#pg-programs'
  },
  {
    name: 'PG Diploma/M.Sc. in Cybersecurity',
    degree: 'PG Diploma / M.Sc.',
    badge: 'UGC Recognised',
    href: 'https://race.reva.edu.in/pg-diploma-m-tech-in-cyber-security/',
    localAnchor: '#pg-programs'
  },
  {
    name: 'PG Diploma/M.Sc. in Cloud Architecture and Security',
    degree: 'PG Diploma / M.Sc.',
    badge: 'UGC Recognised',
    href: 'https://race.reva.edu.in/msc-in-cloud-architecture-and-security',
    localAnchor: '#pg-programs'
  }
];

export const getCertifiedItems = [
  {
    name: 'Certified Agentic AI Engineer',
    badge: 'Trending',
    desc: 'Autonomous AI Agents, LangGraph & Multi-agent Systems',
    href: 'https://race.reva.edu.in/certified-agentic-ai-engineer',
    localAnchor: '#get-certified'
  },
  {
    name: 'Certified DevOps Specialist',
    badge: 'Cloud & K8s',
    desc: 'Terraform, Kubernetes, Docker & CI/CD Pipelines',
    href: 'https://race.reva.edu.in/certified-devops-specialist-with-terraform-kubernetes-and-docker',
    localAnchor: '#get-certified'
  },
  {
    name: 'Advanced Diploma in Cybersecurity and Privacy Management',
    badge: 'Executive',
    desc: 'Information Security Governance & Compliance',
    href: 'https://race.reva.edu.in/advanced-dip',
    localAnchor: '#get-certified'
  },
  {
    name: 'Certified Ethical Hacker',
    badge: 'CEH v12',
    desc: 'Offensive Security, Threat Hunting & Penetration Testing',
    href: 'https://race.reva.edu.in/certified-ethical-hacker-ceh',
    localAnchor: '#get-certified'
  },
  {
    name: 'Certified AI Engineer',
    badge: 'Professional',
    desc: 'Deep Learning, NLP & Computer Vision Architectures',
    href: 'https://race.reva.edu.in/certified-ai-engineer',
    localAnchor: '#get-certified'
  }
];

export const raceLabsItems = [
  {
    name: 'RACE Blogs',
    subtitle: 'Expert Insights',
    desc: 'Deep dives on generative AI, cloud governance & analytics trends',
    href: 'https://race.reva.edu.in/race-labs/',
    localAnchor: '#race-labs'
  },
  {
    name: 'RACE Research',
    subtitle: 'Industry Research',
    desc: 'Applied academic and industrial collaborative research papers',
    href: 'https://raceresearch.reva.edu.in/',
    isExternal: true
  },
  {
    name: 'RACE RETiNA',
    subtitle: 'Weekly Intelligence Brief',
    desc: 'Curated industry intelligence & technology shift forecasting',
    href: 'https://race.reva.edu.in/retina-race-weekly-intelligence-brief/',
    localAnchor: '#race-labs'
  }
];

export const eventsItems = [
  {
    name: 'RACEx360 2026',
    subtitle: 'Emerging Technology Conference',
    badge: 'Flagship',
    href: 'https://race.reva.edu.in/racex360-season-2',
    localAnchor: '#events'
  },
  {
    name: 'Meetup',
    subtitle: 'Namma Bengaluru',
    badge: 'Community',
    href: 'https://race.reva.edu.in/namma-bengaluru-meetup',
    localAnchor: '#events'
  },
  {
    name: 'Awards',
    subtitle: 'Top 10 Women Tech Leaders India Awards',
    badge: 'Annual',
    href: 'https://race.reva.edu.in/top-10-women-tech-leaders-india-awards',
    localAnchor: '#events'
  },
  {
    name: 'Sports',
    subtitle: 'REVA Cricket League 2026',
    badge: 'Tournament',
    href: 'https://race.reva.edu.in/rcl-2026',
    localAnchor: '#events'
  },
  {
    name: 'Past Events',
    subtitle: 'RACE360 2019 Conference',
    badge: 'Archive',
    href: 'https://race.reva.edu.in/past-events',
    localAnchor: '#events'
  }
];

// Search index
const searchableList = [
  ...pgProgramsItems.map(p => ({ title: p.name, category: 'PG Programs', href: p.href, anchor: p.localAnchor })),
  ...getCertifiedItems.map(c => ({ title: c.name, category: 'Get Certified', href: c.href, anchor: c.localAnchor })),
  ...raceLabsItems.map(l => ({ title: `${l.name} – ${l.subtitle}`, category: 'RACE Labs', href: l.href, anchor: l.localAnchor })),
  ...eventsItems.map(e => ({ title: `${e.name} – ${e.subtitle}`, category: 'Events', href: e.href, anchor: e.localAnchor })),
  { title: 'Consulting Services for Enterprise', category: 'Consulting', href: 'https://race.reva.edu.in/consulting', anchor: '#consulting' },
  { title: 'Mentors & Advisory Board', category: 'Mentors', href: 'https://race.reva.edu.in/mentors/', anchor: '#mentors' },
  { title: 'About RACE REVA University', category: 'About RACE', href: 'https://race.reva.edu.in/about', anchor: '#about-race' },
  { title: 'Contact Us & Campus Admissions', category: 'Contact Us', href: 'https://race.reva.edu.in/contact-us/', anchor: '#contact-us' }
];

// ============================================================================
// REUSABLE NAVIGATION COMPONENTS
// ============================================================================

/**
 * Reusable Dropdown Component for Desktop Navigation
 */
function NavDropdown({ label, isOpen, onMouseEnter, onMouseLeave, children }) {
  return (
    <div 
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        type="button"
        className={`flex items-center gap-0.5 xl:gap-1 px-1.5 xl:px-2 2xl:px-2.5 py-1.5 rounded-lg transition-colors font-medium text-[13px] 2xl:text-[14px] whitespace-nowrap group ${
          isOpen ? 'text-race-orange bg-white/10' : 'text-white hover:text-race-orange hover:bg-white/5'
        }`}
        aria-expanded={isOpen}
      >
        <span>{label}</span>
        <ChevronDown 
          className={`w-3 h-3 text-slate-300 group-hover:text-race-orange transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-race-orange' : ''
          }`} 
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 pt-2.5 z-50 animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}

/**
 * Reusable Direct Navigation Link Component
 */
function NavDirectLink({ label, href, anchor, onNavClick }) {
  return (
    <a
      href={href}
      onClick={(e) => onNavClick(e, anchor, href)}
      className="px-1.5 xl:px-2 2xl:px-2.5 py-1.5 rounded-lg text-white hover:text-race-orange hover:bg-white/5 transition-colors font-medium text-[13px] 2xl:text-[14px] whitespace-nowrap"
    >
      {label}
    </a>
  );
}

// ============================================================================
// MAIN HEADER COMPONENT
// ============================================================================

export default function Header({ onRequestCallback, onApplyNow }) {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [desktopDrawerOpen, setDesktopDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Track active desktop dropdown
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Track mobile drawer accordion states
  const [mobileAccordions, setMobileAccordions] = useState({
    pgPrograms: false,
    getCertified: false,
    raceLabs: false,
    events: false
  });

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when drawers or search modal are open
  useEffect(() => {
    if (mobileDrawerOpen || desktopDrawerOpen || searchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileDrawerOpen, desktopDrawerOpen, searchOpen]);

  // Smooth scroll handler
  const handleNavClick = (e, localAnchor, externalHref) => {
    setMobileDrawerOpen(false);
    setDesktopDrawerOpen(false);
    setActiveDropdown(null);

    if (localAnchor && document.querySelector(localAnchor)) {
      e.preventDefault();
      document.querySelector(localAnchor).scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMobileAccordion = (key) => {
    setMobileAccordions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const filteredItems = searchQuery.trim() === ''
    ? searchableList.slice(0, 8)
    : searchableList.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <>
      {/* ========================================================
          1. TOP UTILITY BAR (Very thin, dark navy, authentic info)
             Phone: +91 89040 58866 | Email: enquiry@race.reva.edu.in
         ======================================================== */}
      <div className="w-full bg-[#061226] text-slate-300 border-b border-white/10 text-[11px] sm:text-[12px] py-1.5 z-40 relative box-border overflow-hidden">
        <div className="w-[92vw] lg:w-[94vw] max-w-[1450px] mx-auto px-2 sm:px-4 flex items-center justify-between box-border gap-2">
          
          {/* Left: Contact Info */}
          <div className="flex items-center gap-3 sm:gap-6 shrink-0 min-w-0">
            <a 
              href="tel:+918904058866" 
              className="flex items-center gap-1.5 text-slate-200 hover:text-white transition group whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-race-orange group-hover:scale-110 transition-transform shrink-0" />
              <span className="text-[10px] xs:text-[11px] sm:text-[12px]"><strong className="text-white font-bold tracking-wide">+91 89040 58866</strong></span>
            </a>

            <a 
              href="mailto:enquiry@race.reva.edu.in" 
              className="hidden md:flex items-center gap-1.5 text-slate-300 hover:text-white transition group whitespace-nowrap shrink-0"
            >
              <Mail className="w-3.5 h-3.5 text-race-orange group-hover:scale-110 transition-transform shrink-0" />
              <span>enquiry@race.reva.edu.in</span>
            </a>
          </div>

          {/* Center Announcement */}
          <div className="hidden lg:flex items-center gap-2 text-slate-300 font-medium truncate">
            <span className="w-2 h-2 rounded-full bg-race-orange animate-pulse shrink-0"></span>
            <span className="truncate">Admission Open 2025-26 • REVA Academy for Corporate Excellence</span>
          </div>

          {/* Right Links */}
          <div className="flex items-center gap-2 sm:gap-4 text-slate-300 font-medium text-[10px] sm:text-[12px] shrink-0">
            <a 
              href="https://race.reva.edu.in/connect-with-race-reva-university/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white text-slate-300 transition hidden sm:inline-flex items-center gap-1 whitespace-nowrap"
            >
              <span>Book Your Free Consultation</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            <span className="text-white/20 hidden sm:inline">|</span>

            {/* Admission Open badge - responsive and compact */}
            <button
              type="button"
              onClick={onRequestCallback}
              className="px-2 sm:px-2.5 py-0.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold transition text-[9px] xs:text-[10px] sm:text-[11px] uppercase tracking-wider whitespace-nowrap shrink-0"
            >
              <span className="hidden xs:inline">Admission Open 2025-26</span>
              <span className="xs:hidden">Admissions Open</span>
            </button>
          </div>

        </div>
      </div>

      {/* ========================================================
          2. FLOATING UNIVET-STYLE NAVBAR CONTAINER
             Positioned over hero area, centered horizontally,
             width 92–94% viewport, max-width 1450px,
             height 72–76px (h-[74px]), rounded corners 16px,
             dark navy background (#0B1B3D), soft shadow.
         ======================================================== */}
      <header className="absolute top-[32px] sm:top-[34px] left-0 right-0 z-50 w-full pt-2.5 sm:pt-4 xl:pt-5 pointer-events-none box-border">
        <div className="w-[92vw] lg:w-[94vw] max-w-[1450px] mx-auto pointer-events-auto box-border">
          
          <nav 
            className={`w-full box-border h-[62px] sm:h-[70px] xl:h-[74px] min-h-[60px] xl:min-h-[72px] xl:max-h-[76px] bg-[#0B1B3D] text-white rounded-[14px] sm:rounded-[16px] px-3 sm:px-5 xl:px-4 2xl:px-7 border border-white/10 shadow-xl shadow-slate-950/30 backdrop-blur-md transition-all duration-300 flex items-center justify-between ${
              isScrolled ? 'bg-[#0B1B3D]/95 shadow-2xl shadow-slate-950/50 border-white/15' : ''
            }`}
            aria-label="RACE REVA University Navigation"
          >

            {/* ----------------------------------------------------
                LEFT: LOGO / BRAND AREA
                Structure: [ REVA UNIVERSITY ] | [ RACE LOGO ]
                Placed directly on navy background (NO white box).
                Compact & responsive to leave maximum space for navigation.
                Followed by a thin vertical divider after brand area.
               ---------------------------------------------------- */}
            <div className="shrink-0 flex items-center min-w-0">
              <a 
                href="https://race.reva.edu.in" 
                className="flex items-center gap-1.5 sm:gap-2.5 xl:gap-2 2xl:gap-3 group shrink-0"
                title="RACE REVA University"
              >
                {/* Original REVA University Logo */}
                <img 
                  src={revaLogo} 
                  alt="REVA University" 
                  className="w-[70px] xs:w-[78px] sm:w-[90px] md:w-[96px] xl:w-[94px] 2xl:w-[105px] h-[22px] xs:h-[24px] sm:h-[30px] md:h-[32px] xl:h-[32px] 2xl:h-[34px] object-contain shrink-0 transition-transform group-hover:scale-[1.02]"
                />
                
                {/* Thin Vertical Divider between REVA and RACE */}
                <div className="h-4 sm:h-5 xl:h-5 w-px bg-white/20 shrink-0"></div>

                {/* Original RACE Logo */}
                <img 
                  src={raceLogo} 
                  alt="RACE - REVA Academy for Corporate Excellence" 
                  className="w-[62px] xs:w-[70px] sm:w-[80px] md:w-[86px] xl:w-[84px] 2xl:w-[94px] h-[22px] xs:h-[24px] sm:h-[30px] md:h-[32px] xl:h-[32px] 2xl:h-[34px] object-contain shrink-0 transition-transform group-hover:scale-[1.02]"
                />
              </a>
            </div>

            {/* Thin vertical divider after the brand area */}
            <div className="hidden xl:block h-6 w-px bg-white/20 ml-2.5 mr-1 2xl:ml-4 2xl:mr-2 shrink-0"></div>

            {/* ----------------------------------------------------
                CENTER: NAVIGATION SPACING
                Single horizontal flex layout. No overlap.
                Font: ~14px, white navigation text.
                Dropdown arrows: small and subtle.
                Items:
                1. PG Programs ▼
                2. Get Certified ▼
                3. RACE Labs ▼
                4. Consulting
                5. Events ▼
                6. Mentors
                7. About RACE
                8. Contact Us
               ---------------------------------------------------- */}
            <div className="hidden xl:flex items-center justify-center flex-1 min-w-0 mx-0.5 2xl:mx-2">
              <div className="flex items-center gap-0.5 xl:gap-1 2xl:gap-2.5 text-[13px] 2xl:text-[14px] font-medium text-white whitespace-nowrap">
                
                {/* 1. PG Programs ▼ */}
                <NavDropdown
                  label="PG Programs"
                  isOpen={activeDropdown === 'pgPrograms'}
                  onMouseEnter={() => setActiveDropdown('pgPrograms')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="w-[450px] min-w-[420px] max-w-[min(480px,90vw)] bg-[#0B1E45] border border-white/20 rounded-2xl shadow-2xl p-4 backdrop-blur-xl divide-y divide-white/10 overflow-x-hidden">
                    <div className="px-3 py-1 flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                        Degree Programs
                      </span>
                      <span className="text-[10px] text-race-orange font-bold uppercase bg-white/10 px-2 py-0.5 rounded shrink-0">
                        AICTE / UGC
                      </span>
                    </div>

                    <div className="py-2 space-y-1">
                      {pgProgramsItems.map((prog, idx) => (
                        <a
                          key={idx}
                          href={prog.href}
                          onClick={(e) => handleNavClick(e, prog.localAnchor, prog.href)}
                          className="block px-3.5 py-2.5 rounded-xl hover:bg-white/10 transition group"
                        >
                          <div className="flex items-start justify-between">
                            <span className="text-[13px] font-bold text-white group-hover:text-race-orange transition-colors whitespace-normal break-words leading-snug flex-1 pr-2">
                              {prog.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[10px] font-semibold text-amber-300 shrink-0">
                              {prog.badge}
                            </span>
                            <span className="text-white/30 text-[10px]">•</span>
                            <span className="text-[11px] text-slate-300">
                              {prog.degree}
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>

                    <div className="pt-2 px-3 pb-1">
                      <a
                        href="https://race.reva.edu.in"
                        onClick={(e) => handleNavClick(e, '#pg-programs', 'https://race.reva.edu.in')}
                        className="text-xs font-bold text-race-orange hover:text-orange-400 flex items-center justify-between py-1"
                      >
                        <span>View All Degree Programs</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </NavDropdown>

                {/* 2. Get Certified ▼ */}
                <NavDropdown
                  label="Get Certified"
                  isOpen={activeDropdown === 'getCertified'}
                  onMouseEnter={() => setActiveDropdown('getCertified')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="w-[450px] min-w-[420px] max-w-[min(480px,90vw)] bg-[#0B1E45] border border-white/20 rounded-2xl shadow-2xl p-4 backdrop-blur-xl divide-y divide-white/10 overflow-x-hidden">
                    <div className="px-3 py-1 flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                        Executive Certifications
                      </span>
                      <span className="text-[10px] text-race-orange font-bold uppercase bg-white/10 px-2 py-0.5 rounded shrink-0">
                        Industry Aligned
                      </span>
                    </div>

                    <div className="py-2 space-y-1">
                      {getCertifiedItems.map((cert, idx) => (
                        <a
                          key={idx}
                          href={cert.href}
                          onClick={(e) => handleNavClick(e, cert.localAnchor, cert.href)}
                          className="block px-3.5 py-2.5 rounded-xl hover:bg-white/10 transition group"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <span className="text-[13px] font-bold text-white group-hover:text-race-orange transition-colors whitespace-normal break-words leading-snug flex-1">
                              {cert.name}
                            </span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/10 text-amber-300 shrink-0 whitespace-nowrap mt-0.5">
                              {cert.badge}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-300 mt-1 line-clamp-1 leading-snug whitespace-normal break-words">
                            {cert.desc}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                </NavDropdown>

                {/* 3. RACE Labs ▼ */}
                <NavDropdown
                  label="RACE Labs"
                  isOpen={activeDropdown === 'raceLabs'}
                  onMouseEnter={() => setActiveDropdown('raceLabs')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="w-84 bg-[#0B1E45] border border-white/20 rounded-2xl shadow-2xl p-4 backdrop-blur-xl divide-y divide-white/10">
                    <div className="px-3 py-1 flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                        Research & Insights
                      </span>
                    </div>

                    <div className="py-2 space-y-1">
                      {raceLabsItems.map((lab, idx) => (
                        <a
                          key={idx}
                          href={lab.href}
                          target={lab.isExternal ? '_blank' : '_self'}
                          rel={lab.isExternal ? 'noopener noreferrer' : undefined}
                          onClick={(e) => lab.localAnchor ? handleNavClick(e, lab.localAnchor, lab.href) : null}
                          className="block px-3.5 py-2.5 rounded-xl hover:bg-white/10 transition group"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-[13px] font-bold text-white group-hover:text-race-orange transition-colors">
                              {lab.name}
                            </span>
                            <span className="text-[10px] text-slate-300 group-hover:text-white font-medium flex items-center gap-1">
                              <span>{lab.subtitle}</span>
                              {lab.isExternal && <ExternalLink className="w-2.5 h-2.5" />}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-300 mt-0.5 line-clamp-1 leading-snug">
                            {lab.desc}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                </NavDropdown>

                {/* 4. Consulting */}
                <NavDirectLink
                  label="Consulting"
                  href="https://race.reva.edu.in/consulting"
                  anchor="#consulting"
                  onNavClick={handleNavClick}
                />

                {/* 5. Events ▼ */}
                <NavDropdown
                  label="Events"
                  isOpen={activeDropdown === 'events'}
                  onMouseEnter={() => setActiveDropdown('events')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="w-92 bg-[#0B1E45] border border-white/20 rounded-2xl shadow-2xl p-4 backdrop-blur-xl divide-y divide-white/10">
                    <div className="px-3 py-1 flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                        Events & Conferences
                      </span>
                    </div>

                    <div className="py-2 space-y-1">
                      {eventsItems.map((ev, idx) => (
                        <a
                          key={idx}
                          href={ev.href}
                          onClick={(e) => handleNavClick(e, ev.localAnchor, ev.href)}
                          className="block px-3.5 py-2.5 rounded-xl hover:bg-white/10 transition group"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-[13px] font-bold text-white group-hover:text-race-orange transition-colors">
                              {ev.name}
                            </span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/10 text-amber-300">
                              {ev.badge}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-300 mt-0.5 line-clamp-1 leading-snug">
                            {ev.subtitle}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                </NavDropdown>


                {/* 6. Mentors */}
                <NavDirectLink
                  label="Mentors"
                  href="https://race.reva.edu.in/mentors/"
                  anchor="#mentors"
                  onNavClick={handleNavClick}
                />

                {/* 7. About RACE */}
                <NavDirectLink
                  label="About RACE"
                  href="https://race.reva.edu.in/about"
                  anchor="#about-race"
                  onNavClick={handleNavClick}
                />

                {/* 8. Contact Us */}
                <NavDirectLink
                  label="Contact Us"
                  href="https://race.reva.edu.in/contact-us/"
                  anchor="#contact-us"
                  onNavClick={handleNavClick}
                />

              </div>
            </div>

            {/* ----------------------------------------------------
                RIGHT:
                Structure: Search icon | Vertical divider | Hamburger/menu icon | Apply Now → button
                Button:
                - approximately 125–135px wide
                - approximately 44–48px high
                - fully visible
                - right padding inside navbar around 22–28px
                - Never allow button to overflow
               ---------------------------------------------------- */}
            <div className="hidden xl:flex items-center gap-1.5 xl:gap-2 2xl:gap-3 shrink-0 ml-auto xl:ml-0">
              
              {/* Search icon */}
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="w-8.5 h-8.5 2xl:w-9 2xl:h-9 rounded-full flex items-center justify-center text-white hover:text-race-orange hover:bg-white/10 transition shrink-0"
                aria-label="Search"
                title="Search Programs & Certifications"
              >
                <Search className="w-4 h-4 text-white" />
              </button>

              {/* Vertical divider */}
              <div className="h-5 w-px bg-white/20 shrink-0"></div>

              {/* Hamburger/menu icon */}
              <button
                type="button"
                onClick={() => setDesktopDrawerOpen(true)}
                className="w-8.5 h-8.5 2xl:w-9 2xl:h-9 rounded-full flex items-center justify-center text-white hover:text-race-orange hover:bg-white/10 transition shrink-0"
                aria-label="Menu Directory"
                title="Open Directory Menu"
              >
                <Menu className="w-4 h-4 2xl:w-4.5 2xl:h-4.5 text-white" />
              </button>

              {/* Apply Now → button
                  - Orange rounded/pill button
                  - Laptop (1280-1440px): 116px wide, 42px high
                  - Desktop (1440px+): 130px wide, 46px high
                  - Fully visible, shrink-0
                  - Text: Apply Now →
              */}
              <button
                type="button"
                onClick={onApplyNow}
                className="w-[116px] 2xl:w-[130px] h-[42px] 2xl:h-[46px] rounded-full bg-[#F37021] hover:bg-[#E05F10] text-slate-950 hover:text-black font-extrabold text-[12.5px] 2xl:text-[13.5px] tracking-wide shadow-md shadow-orange-500/20 transition-all duration-200 flex items-center justify-center gap-1.5 shrink-0 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 text-slate-950 font-bold" />
              </button>

            </div>

            {/* ----------------------------------------------------
                MOBILE / TABLET (< 1280px):
                Structure: [ Search ] [ Menu ]
                Responsive, compact, fully contained within navbar.
               ---------------------------------------------------- */}
            <div className="xl:hidden flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              {/* Search Icon */}
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-white hover:text-race-orange hover:bg-white/10 transition shrink-0"
                aria-label="Search"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </button>

              {/* Tablet Apply Now (Hidden on mobile < 768px so navbar remains clean) */}
              <button
                type="button"
                onClick={onApplyNow}
                className="hidden md:inline-flex items-center justify-center gap-1 px-3.5 py-1.5 rounded-full bg-[#F37021] hover:bg-[#E05F10] text-slate-950 font-extrabold text-xs shadow-md shadow-orange-500/20 shrink-0"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-950 font-bold" />
              </button>

              {/* Hamburger/menu icon [ ☰ ] */}
              <button
                type="button"
                onClick={() => setMobileDrawerOpen(true)}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center text-white hover:text-race-orange hover:bg-white/10 transition bg-white/5 shrink-0 focus:outline-none focus:ring-2 focus:ring-white/25"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-white" />
              </button>
            </div>

          </nav>

        </div>
      </header>

      {/* ========================================================
          3. INTERACTIVE SEARCH MODAL (Triggered by 🔍 Icon)
         ======================================================== */}
      {searchOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-24 px-4 bg-slate-950/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSearchOpen(false)}
        >
          <div 
            className="w-full max-w-2xl bg-[#0B1E45] border border-white/20 rounded-2xl shadow-2xl p-6 text-white relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 text-race-orange font-bold text-xs uppercase tracking-wider">
                <Search className="w-4 h-4" />
                <span>Search RACE Degree Programs & Certifications</span>
              </div>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="pt-4">
              <div className="relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g. Artificial Intelligence, Cybersecurity, DevOps, Business Analytics..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-900/90 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-race-orange text-sm"
                />
              </div>

              {/* Suggestions */}
              <div className="mt-4 pt-3 border-t border-white/10 max-h-72 overflow-y-auto space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  {searchQuery.trim() === '' ? 'Popular Programs & Certifications' : `Matches (${filteredItems.length})`}
                </span>
                
                {filteredItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={(e) => {
                      setSearchOpen(false);
                      if (item.anchor) handleNavClick(e, item.anchor, item.href);
                    }}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition group"
                  >
                    <div>
                      <span className="text-xs font-bold text-white group-hover:text-race-orange transition-colors">
                        {item.title}
                      </span>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          4. DESKTOP DIRECTORY PANEL (Triggered by ☰ Icon on Desktop)
         ======================================================== */}
      {desktopDrawerOpen && (
        <div 
          className="fixed inset-0 z-50 flex justify-end bg-slate-950/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setDesktopDrawerOpen(false)}
        >
          <div 
            className="w-full max-w-md bg-[#0B1B3D] text-white h-full shadow-2xl p-8 overflow-y-auto flex flex-col justify-between border-l border-white/15"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <img 
                    src={revaLogo} 
                    alt="REVA University" 
                    className="w-[100px] h-auto object-contain"
                  />
                  <div className="h-5 w-px bg-white/20"></div>
                  <img 
                    src={raceLogo} 
                    alt="RACE" 
                    className="w-[90px] h-auto object-contain"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setDesktopDrawerOpen(false)}
                  className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Exact Menu Directory */}
              <div className="py-6 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-race-orange">
                  RACE REVA Directory
                </h4>
                
                <div className="space-y-3 text-sm">
                  {/* PG Programs */}
                  <div>
                    <span className="font-bold text-white block mb-1">PG Programs</span>
                    <div className="pl-3 border-l border-white/15 space-y-1.5 text-xs text-slate-300">
                      {pgProgramsItems.map((p, idx) => (
                        <a 
                          key={idx} 
                          href={p.href} 
                          onClick={(e) => handleNavClick(e, p.localAnchor, p.href)}
                          className="block hover:text-race-orange py-0.5"
                        >
                          {p.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Get Certified */}
                  <div className="pt-2">
                    <span className="font-bold text-white block mb-1">Get Certified</span>
                    <div className="pl-3 border-l border-white/15 space-y-1.5 text-xs text-slate-300">
                      {getCertifiedItems.map((c, idx) => (
                        <a 
                          key={idx} 
                          href={c.href} 
                          onClick={(e) => handleNavClick(e, c.localAnchor, c.href)}
                          className="block hover:text-race-orange py-0.5"
                        >
                          {c.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* RACE Labs */}
                  <div className="pt-2">
                    <span className="font-bold text-white block mb-1">RACE Labs</span>
                    <div className="pl-3 border-l border-white/15 space-y-1.5 text-xs text-slate-300">
                      {raceLabsItems.map((l, idx) => (
                        <a 
                          key={idx} 
                          href={l.href} 
                          target={l.isExternal ? '_blank' : '_self'}
                          rel={l.isExternal ? 'noopener noreferrer' : undefined}
                          onClick={(e) => l.localAnchor ? handleNavClick(e, l.localAnchor, l.href) : null}
                          className="block hover:text-race-orange py-0.5"
                        >
                          {l.name} ({l.subtitle})
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Direct links */}
                  <div className="pt-2 space-y-2">
                    <a 
                      href="https://race.reva.edu.in/consulting" 
                      onClick={(e) => handleNavClick(e, '#consulting', 'https://race.reva.edu.in/consulting')}
                      className="block font-bold text-white hover:text-race-orange py-1"
                    >
                      Consulting
                    </a>
                    
                    <a 
                      href="https://race.reva.edu.in/racex360-season-2" 
                      onClick={(e) => handleNavClick(e, '#events', 'https://race.reva.edu.in/racex360-season-2')}
                      className="block font-bold text-white hover:text-race-orange py-1"
                    >
                      Events
                    </a>

                    <a 
                      href="https://race.reva.edu.in/mentors/" 
                      onClick={(e) => handleNavClick(e, '#mentors', 'https://race.reva.edu.in/mentors/')}
                      className="block font-bold text-white hover:text-race-orange py-1"
                    >
                      Mentors
                    </a>

                    <a 
                      href="https://race.reva.edu.in/about" 
                      onClick={(e) => handleNavClick(e, '#about-race', 'https://race.reva.edu.in/about')}
                      className="block font-bold text-white hover:text-race-orange py-1"
                    >
                      About RACE
                    </a>

                    <a 
                      href="https://race.reva.edu.in/contact-us/" 
                      onClick={(e) => handleNavClick(e, '#contact-us', 'https://race.reva.edu.in/contact-us/')}
                      className="block font-bold text-white hover:text-race-orange py-1"
                    >
                      Contact Us
                    </a>
                  </div>

                </div>
              </div>

              {/* Admissions details */}
              <div className="pt-4 space-y-3 text-xs text-slate-300 border-t border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-race-orange">
                  Admissions Office & Contact
                </h4>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-race-orange shrink-0 mt-0.5" />
                  <span>REVA University, Rukmini Knowledge Park, Kattigenahalli, Yelahanka, Bengaluru, Karnataka, India – 560064</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-race-orange shrink-0" />
                  <a href="tel:+918904058866" className="text-white font-bold hover:underline">
                    +91 89040 58866
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-race-orange shrink-0" />
                  <a href="mailto:enquiry@race.reva.edu.in" className="text-white font-bold hover:underline">
                    enquiry@race.reva.edu.in
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <a
                href="https://race.reva.edu.in/connect-with-race-reva-university/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full border border-white/30 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition text-center block"
              >
                Book Your Free Consultation
              </a>
              <button
                type="button"
                onClick={() => {
                  setDesktopDrawerOpen(false);
                  onApplyNow();
                }}
                className="w-full py-3.5 rounded-full bg-[#F37021] hover:bg-[#E05F10] text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition"
              >
                <span>Apply Now – Admission Open 2026</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          5. MOBILE NAVIGATION DRAWER
             Contains:
             - PG Programs
             - Get Certified
             - RACE Labs
             - Consulting
             - Events
             - Mentors
             - About RACE
             - Contact Us
             - Apply Now
         ======================================================== */}
      {mobileDrawerOpen && (
        <div 
          className="fixed inset-0 z-50 flex justify-end bg-slate-950/80 backdrop-blur-sm xl:hidden animate-fade-in"
          onClick={() => setMobileDrawerOpen(false)}
        >
          <div 
            className="w-full max-w-sm bg-[#0B1B3D] text-white h-full shadow-2xl p-6 overflow-y-auto flex flex-col justify-between border-l border-white/15"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <img 
                    src={revaLogo} 
                    alt="REVA University" 
                    className="w-[98px] h-auto object-contain"
                  />
                  <div className="h-5 w-px bg-white/20"></div>
                  <img 
                    src={raceLogo} 
                    alt="RACE" 
                    className="w-[88px] h-auto object-contain"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setMobileDrawerOpen(false)}
                  className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Exact Menu List */}
              
              {/* 1. PG Programs */}
              <div className="py-3 border-b border-white/10">
                <button
                  type="button"
                  onClick={() => toggleMobileAccordion('pgPrograms')}
                  className="w-full flex items-center justify-between text-sm font-semibold text-white py-1.5"
                >
                  <span className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-race-orange" />
                    <span>PG Programs</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    mobileAccordions.pgPrograms ? 'rotate-180 text-race-orange' : 'text-slate-300'
                  }`} />
                </button>

                {mobileAccordions.pgPrograms && (
                  <div className="pl-6 pt-2 pb-1 space-y-2 text-xs">
                    {pgProgramsItems.map((prog, idx) => (
                      <a
                        key={idx}
                        href={prog.href}
                        onClick={(e) => handleNavClick(e, prog.localAnchor, prog.href)}
                        className="block py-1.5 text-slate-300 hover:text-race-orange font-medium"
                      >
                        • {prog.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* 2. Get Certified */}
              <div className="py-3 border-b border-white/10">
                <button
                  type="button"
                  onClick={() => toggleMobileAccordion('getCertified')}
                  className="w-full flex items-center justify-between text-sm font-semibold text-white py-1.5"
                >
                  <span className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-race-orange" />
                    <span>Get Certified</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    mobileAccordions.getCertified ? 'rotate-180 text-race-orange' : 'text-slate-300'
                  }`} />
                </button>

                {mobileAccordions.getCertified && (
                  <div className="pl-6 pt-2 pb-1 space-y-2 text-xs">
                    {getCertifiedItems.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.localAnchor, item.href)}
                        className="block py-1.5 text-slate-300 hover:text-race-orange font-medium"
                      >
                        • {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* 3. RACE Labs */}
              <div className="py-3 border-b border-white/10">
                <button
                  type="button"
                  onClick={() => toggleMobileAccordion('raceLabs')}
                  className="w-full flex items-center justify-between text-sm font-semibold text-white py-1.5"
                >
                  <span className="flex items-center gap-2">
                    <FlaskConical className="w-4 h-4 text-race-orange" />
                    <span>RACE Labs</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    mobileAccordions.raceLabs ? 'rotate-180 text-race-orange' : 'text-slate-300'
                  }`} />
                </button>

                {mobileAccordions.raceLabs && (
                  <div className="pl-6 pt-2 pb-1 space-y-2 text-xs">
                    {raceLabsItems.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        target={item.isExternal ? '_blank' : '_self'}
                        rel={item.isExternal ? 'noopener noreferrer' : undefined}
                        onClick={(e) => item.localAnchor ? handleNavClick(e, item.localAnchor, item.href) : null}
                        className="block py-1.5 text-slate-300 hover:text-race-orange font-medium"
                      >
                        • {item.name} ({item.subtitle})
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* 4. Consulting */}
              <div className="py-2.5 border-b border-white/10">
                <a
                  href="https://race.reva.edu.in/consulting"
                  onClick={(e) => handleNavClick(e, '#consulting', 'https://race.reva.edu.in/consulting')}
                  className="flex items-center gap-2 text-sm font-semibold text-white hover:text-race-orange py-1"
                >
                  <Sparkles className="w-4 h-4 text-race-orange" />
                  <span>Consulting</span>
                </a>
              </div>

              {/* 5. Events */}
              <div className="py-3 border-b border-white/10">
                <button
                  type="button"
                  onClick={() => toggleMobileAccordion('events')}
                  className="w-full flex items-center justify-between text-sm font-semibold text-white py-1.5"
                >
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-race-orange" />
                    <span>Events</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    mobileAccordions.events ? 'rotate-180 text-race-orange' : 'text-slate-300'
                  }`} />
                </button>

                {mobileAccordions.events && (
                  <div className="pl-6 pt-2 pb-1 space-y-2 text-xs">
                    {eventsItems.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.localAnchor, item.href)}
                        className="block py-1.5 text-slate-300 hover:text-race-orange font-medium"
                      >
                        • {item.name} ({item.subtitle})
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* 6. Mentors */}
              <div className="py-2.5 border-b border-white/10">
                <a
                  href="https://race.reva.edu.in/mentors/"
                  onClick={(e) => handleNavClick(e, '#mentors', 'https://race.reva.edu.in/mentors/')}
                  className="flex items-center gap-2 text-sm font-semibold text-white hover:text-race-orange py-1"
                >
                  <Users className="w-4 h-4 text-race-orange" />
                  <span>Mentors</span>
                </a>
              </div>

              {/* 7. About RACE */}
              <div className="py-2.5 border-b border-white/10">
                <a
                  href="https://race.reva.edu.in/about"
                  onClick={(e) => handleNavClick(e, '#about-race', 'https://race.reva.edu.in/about')}
                  className="flex items-center gap-2 text-sm font-semibold text-white hover:text-race-orange py-1"
                >
                  <Info className="w-4 h-4 text-race-orange" />
                  <span>About RACE</span>
                </a>
              </div>

              {/* 8. Contact Us */}
              <div className="py-2.5 border-b border-white/10">
                <a
                  href="https://race.reva.edu.in/contact-us/"
                  onClick={(e) => handleNavClick(e, '#contact-us', 'https://race.reva.edu.in/contact-us/')}
                  className="flex items-center gap-2 text-sm font-semibold text-white hover:text-race-orange py-1"
                >
                  <MessageSquare className="w-4 h-4 text-race-orange" />
                  <span>Contact Us</span>
                </a>
              </div>

            </div>

            {/* Mobile Actions (Apply Now Button prominent) */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileDrawerOpen(false);
                  onApplyNow();
                }}
                className="w-full py-3.5 rounded-full bg-[#F37021] hover:bg-[#E05F10] text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition"
              >
                <span>Apply Now →</span>
              </button>

              <div className="pt-2 text-center text-xs text-slate-400">
                <span>Admissions: </span>
                <a href="tel:+918904058866" className="text-white font-bold hover:underline">
                  +91 89040 58866
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
