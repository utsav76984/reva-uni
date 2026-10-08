import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  ArrowRight, 
  Phone, 
  Building2, 
  Users, 
  Award, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

// Authentic REVA University & RACE image assets
import campusImg from '../assets/reva-campus-hero.png';
import graduationImg from '../assets/race-cohort-steps.png';
import mentorsImg from '../assets/race-meetup-2.png';
import studentsImg from '../assets/race-meetup-1.png';

// ============================================================================
// ORIGINAL VERIFIED RACE / REVA HERO SLIDER CONTENT
// Sourced directly from official RACE at REVA University (https://race.reva.edu.in)
// No invented claims, statistics, or external stock phrases.
// ============================================================================
export const heroSlides = [
  {
    id: 1,
    image: campusImg,
    alt: 'REVA University 45-Acre Smart Campus with Swami Vivekananda Block and Central Library',
    eyebrow: 'BATCHES STARTING SOON',
    headingPrefix: 'Accelerate Your Career with ',
    headingHighlight: 'Top-Ranked',
    headingSuffix: ' Master’s Degrees',
    supporting: 'Data Science | Cybersecurity | Artificial Intelligence | Cloud Architecture and more…',
    description: 'Industry-aligned programs for working professionals with hands-on projects, live simulation labs, and expert mentorship from India’s Silicon Valley technology leaders.',
    primaryCta: 'APPLY NOW',
    secondaryCta: 'REQUEST A CALLBACK',
    caption: 'REVA University Campus • Bengaluru'
  },
  {
    id: 2,
    image: graduationImg,
    alt: 'RACE REVA Academic Programs and Executive Cohort on University Steps',
    eyebrow: 'RESEARCH-DRIVEN & SIMULATION-INTEGRATED',
    headingPrefix: 'Top-Ranked Master’s Programs Built with ',
    headingHighlight: 'Global Tech Giants',
    headingSuffix: '',
    supporting: 'M.Sc. Business Analytics | M.Tech. Cybersecurity | M.Tech. AI | Cloud Architecture',
    description: 'Turn raw data into board-level decisions, train on a live cyber range, and deploy full-stack AI systems backed by global industry certifications from AWS, Microsoft Azure, and EC-Council.',
    primaryCta: 'APPLY NOW',
    secondaryCta: 'REQUEST A CALLBACK',
    caption: 'UGC Recognised & AICTE Approved Degrees'
  },
  {
    id: 3,
    image: mentorsImg,
    alt: 'Distinguished Industry Leaders and Mentors Panel Discussion at RACE REVA',
    eyebrow: 'EXPERT FACULTY & MENTORSHIP',
    headingPrefix: 'Learn from India’s Silicon Valley’s ',
    headingHighlight: 'Finest Technology Leaders',
    headingSuffix: '',
    supporting: 'Practicing CISOs | Chief Data Scientists | AI Leaders | Enterprise Architects',
    description: 'Master emerging tech with insights from top industry minds and gain the edge to lead your domain with confidence through 1:1 executive mentorship and real-world projects.',
    primaryCta: 'APPLY NOW',
    secondaryCta: 'REQUEST A CALLBACK',
    caption: '50+ Practicing Directors & Chief Mentors'
  },
  {
    id: 4,
    image: studentsImg,
    alt: 'RACE REVA Executive Technology Learning Cohort and Collaborative Sessions',
    eyebrow: 'REVA ACADEMY FOR CORPORATE EXCELLENCE',
    headingPrefix: 'Developing ',
    headingHighlight: 'Visionary Enterprise Leaders',
    headingSuffix: ' for Global Corporates',
    supporting: '100+ Hiring Partners | 1000+ Alumni Network | Blended Executive Learning',
    description: 'From career switches to salary jumps, discover how RACE alumni drive digital transformation and innovation at the world’s leading technology enterprises.',
    primaryCta: 'APPLY NOW',
    secondaryCta: 'REQUEST A CALLBACK',
    caption: 'RACE Executive Alumni Community'
  }
];

// Preserved for backward compatibility
export const heroFeatureCards = [
  {
    id: 'partners',
    tag: 'CAREER OUTCOMES',
    title: '100+ Hiring Partners',
    desc: 'Top global technology companies actively recruiting RACE alumni across Cyber, AI & Analytics roles.',
    stat: 'Executive Career Support',
    icon: Building2,
    isOrangeAccent: false
  },
  {
    id: 'mentors',
    tag: 'EXECUTIVE FACULTY',
    title: '50+ Industry Mentors',
    desc: 'Learn directly from practicing Directors, CISOs & Chief Data Scientists leading Fortune 500 enterprises.',
    stat: '1:1 Executive Guidance',
    icon: Users,
    isOrangeAccent: true
  },
  {
    id: 'alumni',
    tag: 'LEADERSHIP COMMUNITY',
    title: '1000+ Alumni Network',
    desc: 'A thriving network of senior executives and technology professionals leading digital transformation worldwide.',
    stat: 'Verified Career Growth',
    icon: Award,
    isOrangeAccent: false
  }
];

export default function Hero({ onApplyNow, onRequestCallback }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideCount = heroSlides.length;

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  }, [slideCount]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  }, [slideCount]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Autoplay every 5.5 seconds (5-6s range)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);

    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  // Touch / Swipe support on mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide(); // Swiped left -> next
    } else if (distance < -50) {
      prevSlide(); // Swiped right -> prev
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const activeSlide = heroSlides[currentSlide];

  return (
    <div className="relative w-full bg-[#061226] text-white">
      {/* ========================================================
          FULL-WIDTH HERO SECTION AS A REAL PHOTOGRAPHIC SLIDER
          Occupies full hero height, starting beneath/behind floating navbar.
         ======================================================== */}
      <section
        className="relative w-full min-h-[820px] sm:min-h-[860px] lg:min-h-[900px] xl:min-h-[940px] flex flex-col justify-between overflow-hidden bg-[#061226] pt-[140px] sm:pt-[150px] lg:pt-[165px] xl:pt-[175px] pb-8 sm:pb-9 lg:pb-10 focus:outline-none"
        aria-label="REVA University & RACE Hero Carousel"
        role="region"
        aria-roledescription="carousel"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* ----------------------------------------------------
            FULL-WIDTH SLIDER BACKGROUND IMAGES
            100% width, 100% height, object-cover
           ---------------------------------------------------- */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {heroSlides.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                aria-hidden={!isActive}
              >
                {/* Genuine REVA/RACE Photographic Asset */}
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className={`w-full h-full object-cover object-center lg:object-[center_35%] transform transition-transform duration-[7000ms] ease-out ${
                    isActive ? 'scale-105' : 'scale-100'
                  }`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
            );
          })}

          {/* ----------------------------------------------------
              REFINED DARK NAVY OVERLAYS (PHOTO FULLY VISIBLE ON RIGHT)
              Stronger on LEFT for pristine text contrast,
              subtle & translucent on RIGHT so the photographic image
              is clearly, beautifully visible.
             ---------------------------------------------------- */}
          {/* 1. Left-to-right directional gradient (95% left -> 20% right) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#061226]/95 via-[#061226]/75 via-45% to-[#061226]/20 z-10" />

          {/* 2. Top-down gradient for floating navbar legibility */}
          <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#061226]/85 via-[#061226]/40 to-transparent z-10" />

          {/* 3. Bottom-up gradient for grounding trust stats & controls */}
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#061226]/90 via-[#061226]/40 to-transparent z-10" />
        </div>

        {/* ----------------------------------------------------
            HERO CONTENT CONTAINER (EACH SLIDE FEATURES AUTHENTIC RACE TEXT)
            Smooth crossfade between verified original messages
           ---------------------------------------------------- */}
        <div className="relative z-20 w-[92vw] lg:w-[94vw] max-w-[1450px] mx-auto px-2 sm:px-4 box-border my-auto">
          <div 
            key={currentSlide}
            className="max-w-[840px] flex flex-col items-start text-left transition-all duration-500 ease-out animate-fade-in"
          >
            
            {/* Eyebrow: Verified original category / status label */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-5 sm:mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#F37021] animate-ping"></span>
              <span className="text-[11px] sm:text-xs font-extrabold tracking-[0.2em] text-[#F37021] uppercase">
                {activeSlide.eyebrow}
              </span>
            </div>

            {/* Main Heading: Authentic RACE headline */}
            <h1 className="text-[36px] sm:text-[46px] md:text-[54px] lg:text-[62px] xl:text-[70px] font-black text-white tracking-tight leading-[1.08] max-w-[820px] drop-shadow-sm min-h-[120px] sm:min-h-[140px] lg:min-h-[160px] flex items-center">
              <span>
                {activeSlide.headingPrefix}
                <span className="text-[#F37021] relative inline-block">
                  {activeSlide.headingHighlight}
                </span>
                {activeSlide.headingSuffix}
              </span>
            </h1>

            {/* Supporting line */}
            <div className="mt-4 sm:mt-5 flex items-center flex-wrap gap-y-1 gap-x-2.5 text-xs sm:text-sm lg:text-[15px] font-bold text-[#00B4D8] tracking-wide">
              {activeSlide.supporting.split(' | ').map((item, idx, arr) => (
                <React.Fragment key={idx}>
                  <span>{item}</span>
                  {idx < arr.length - 1 && <span className="text-white/30">|</span>}
                </React.Fragment>
              ))}
            </div>

            {/* Description */}
            <p className="mt-4 sm:mt-5 text-slate-200 text-base sm:text-[17px] lg:text-[18px] leading-relaxed max-w-[720px] font-normal drop-shadow-sm min-h-[75px] sm:min-h-[85px]">
              {activeSlide.description}
            </p>

            {/* CTA Buttons: APPLY NOW & REQUEST A CALLBACK */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              
              {/* Primary CTA */}
              <button
                type="button"
                onClick={onApplyNow}
                className="px-8 sm:px-9 py-4 rounded-full bg-[#F37021] hover:bg-[#E05F10] text-slate-950 hover:text-black font-extrabold text-[13.5px] uppercase tracking-wider shadow-xl shadow-orange-500/25 transition-all duration-200 flex items-center justify-center gap-2 group transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{activeSlide.primaryCta}</span>
                <ArrowRight className="w-4 h-4 text-slate-950 font-bold group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA */}
              <button
                type="button"
                onClick={onRequestCallback}
                className="px-7 sm:px-8 py-4 rounded-full border border-white/25 hover:border-white/50 bg-white/10 hover:bg-white/15 text-white font-bold text-[13.5px] uppercase tracking-wider backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2.5 group transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-4 h-4 text-[#F37021] group-hover:scale-110 transition-transform" />
                <span>{activeSlide.secondaryCta}</span>
              </button>

            </div>

          </div>
        </div>

        {/* ----------------------------------------------------
            TRUST STATS (PRESERVED CONTENT & HIERARCHY)
            "100+ Hiring Partners"
            "50+ Industry Mentors"
            "1000+ Alumni Network"
           ---------------------------------------------------- */}
        <div className="relative z-20 w-[92vw] lg:w-[94vw] max-w-[1450px] mx-auto px-2 sm:px-4 mt-8 sm:mt-10 lg:mt-12 pt-5 sm:pt-6 border-t border-white/15 box-border">
          <div className="flex flex-wrap items-center justify-start gap-y-3 gap-x-5 sm:gap-x-8 text-xs sm:text-[13px] text-slate-200 font-semibold">
            
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                <Building2 className="w-4 h-4 text-[#F37021]" />
              </div>
              <div>
                <span className="font-extrabold text-white text-sm sm:text-base block leading-none">100+</span>
                <span className="text-[11px] text-slate-300 font-medium">Hiring Partners</span>
              </div>
            </div>

            <div className="hidden sm:block h-7 w-px bg-white/20"></div>

            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                <Users className="w-4 h-4 text-[#00B4D8]" />
              </div>
              <div>
                <span className="font-extrabold text-white text-sm sm:text-base block leading-none">50+</span>
                <span className="text-[11px] text-slate-300 font-medium">Industry Mentors</span>
              </div>
            </div>

            <div className="hidden sm:block h-7 w-px bg-white/20"></div>

            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                <Award className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <span className="font-extrabold text-white text-sm sm:text-base block leading-none">1000+</span>
                <span className="text-[11px] text-slate-300 font-medium">Alumni Network</span>
              </div>
            </div>

          </div>
        </div>

        {/* ----------------------------------------------------
            CENTER-BOTTOM: INDEPENDENT PAGINATION DOTS
            ● ● ● ●
            Positioned independently at the bottom center (~30-40px above bottom edge)
           ---------------------------------------------------- */}
        <div className="relative z-20 w-full flex items-center justify-center mt-5 sm:mt-6 box-border">
          <div 
            className="inline-flex items-center gap-2 sm:gap-2.5 px-4 py-2 rounded-full bg-slate-950/60 border border-white/15 backdrop-blur-md shadow-xl shadow-black/40"
            role="tablist" 
            aria-label="Hero slider pagination"
          >
            {heroSlides.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(index)}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Go to slide ${index + 1}: ${slide.caption}`}
                  className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F37021] ${
                    isActive 
                      ? 'w-8 bg-[#F37021] shadow-lg shadow-orange-500/50' 
                      : 'w-2.5 bg-white/40 hover:bg-white/70'
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* ----------------------------------------------------
            OPPOSITE SIDE NAVIGATION ARROWS
            Positioned near the left and right edges of the Hero, vertically centered.
            LEFT SIDE:  ← Previous
            RIGHT SIDE: Next →
           ---------------------------------------------------- */}
        {/* LEFT SIDE: ← Previous */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-3 sm:left-5 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/20 bg-slate-950/40 hover:bg-[#F37021] hover:border-[#F37021] hover:text-slate-950 text-white backdrop-blur-md flex items-center justify-center transition-all duration-200 shadow-xl shadow-black/40 focus:outline-none focus:ring-2 focus:ring-[#F37021] group"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* RIGHT SIDE: Next → */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-3 sm:right-5 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/20 bg-slate-950/40 hover:bg-[#F37021] hover:border-[#F37021] hover:text-slate-950 text-white backdrop-blur-md flex items-center justify-center transition-all duration-200 shadow-xl shadow-black/40 focus:outline-none focus:ring-2 focus:ring-[#F37021] group"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </section>
    </div>
  );
}
