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

// Authentic REVA University & RACE image assets (1920px HD uncompressed sources)
import placementBoardroomImg from '../assets/reva-placement-boardroom-hd.png';
import auditoriumImg from '../assets/reva-campus-auditorium-hd.png';
import mentorsImg from '../assets/race-meetup-2.png';
import cohortMeetupImg from '../assets/race-meetup-1.png';

// ============================================================================
// ORIGINAL VERIFIED RACE / REVA HERO SLIDER CONTENT
// Sourced directly from official RACE at REVA University (https://race.reva.edu.in)
// Story Sequence:
// Slide 1 → Education & Career (REVA Boardroom Learners & Master's Degrees)
// Slide 2 → Corporate Excellence (Large Executive Cohort & Enterprise Leaders)
// Slide 3 → Technology & Industry (Panel of Practicing CISOs & Mentors)
// Slide 4 → REVA/RACE Experience (45-Acre Smart Campus & Kuvempu Amphitheatre)
// ============================================================================
export const heroSlides = [
  {
    id: 1,
    image: placementBoardroomImg,
    alt: 'REVA University Executive Boardroom and Corporate Placement Session with Faculty Mentors',
    objectPosition: 'object-[85%_35%] sm:object-[87%_35%] md:object-[89%_35%] lg:object-[90%_35%] xl:object-[92%_35%]',
    gradient: 'linear-gradient(90deg, rgba(3, 24, 55, 0.92) 0%, rgba(3, 24, 55, 0.72) 28%, rgba(3, 24, 55, 0.35) 55%, rgba(3, 24, 55, 0.08) 80%, rgba(3, 24, 55, 0) 100%)',
    radialGlow: 'radial-gradient(ellipse at 18% 46%, rgba(3, 24, 55, 0.42) 0%, transparent 68%)',
    textWidth: 'max-w-[780px]',
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
    image: cohortMeetupImg,
    alt: 'RACE REVA and Terralogic Executive Technology Learning Cohort at REVA University',
    objectPosition: 'object-[78%_20%] sm:object-[80%_20%] md:object-[82%_22%] lg:object-[84%_22%] xl:object-[86%_22%]',
    gradient: 'linear-gradient(90deg, rgba(3, 24, 55, 0.94) 0%, rgba(3, 24, 55, 0.76) 30%, rgba(3, 24, 55, 0.38) 58%, rgba(3, 24, 55, 0.10) 82%, rgba(3, 24, 55, 0) 100%)',
    radialGlow: 'radial-gradient(ellipse at 20% 48%, rgba(3, 24, 55, 0.48) 0%, transparent 72%)',
    textWidth: 'max-w-[780px]',
    eyebrow: 'REVA ACADEMY FOR CORPORATE EXCELLENCE',
    headingPrefix: 'Developing ',
    headingHighlight: 'Visionary Enterprise Leaders',
    headingSuffix: ' for Global Corporates',
    supporting: '100+ Hiring Partners | 1000+ Alumni Network | Blended Executive Learning',
    description: 'From career switches to salary jumps, discover how RACE alumni drive digital transformation and innovation at the world’s leading technology enterprises.',
    primaryCta: 'APPLY NOW',
    secondaryCta: 'REQUEST A CALLBACK',
    caption: 'RACE Executive Alumni Community'
  },
  {
    id: 3,
    image: mentorsImg,
    alt: 'Distinguished Industry Leaders and Mentors Panel Discussion at RACE REVA',
    objectPosition: 'object-[82%_24%] sm:object-[84%_24%] md:object-[86%_26%] lg:object-[88%_26%] xl:object-[90%_26%]',
    gradient: 'linear-gradient(90deg, rgba(3, 24, 55, 0.93) 0%, rgba(3, 24, 55, 0.74) 29%, rgba(3, 24, 55, 0.36) 56%, rgba(3, 24, 55, 0.08) 80%, rgba(3, 24, 55, 0) 100%)',
    radialGlow: 'radial-gradient(ellipse at 18% 45%, rgba(3, 24, 55, 0.45) 0%, transparent 70%)',
    textWidth: 'max-w-[770px]',
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
    image: auditoriumImg,
    alt: 'REVA University Kuvempu Amphitheatre Auditorium with Keynote Speaker and Student Audience',
    objectPosition: 'object-[65%_center] sm:object-[68%_center] md:object-[70%_center] lg:object-[72%_center] xl:object-[75%_center]',
    gradient: 'linear-gradient(90deg, rgba(3, 24, 55, 0.92) 0%, rgba(3, 24, 55, 0.70) 28%, rgba(3, 24, 55, 0.32) 54%, rgba(3, 24, 55, 0.06) 78%, rgba(3, 24, 55, 0) 100%)',
    radialGlow: 'radial-gradient(ellipse at 16% 45%, rgba(3, 24, 55, 0.40) 0%, transparent 66%)',
    textWidth: 'max-w-[780px]',
    eyebrow: '45-ACRE SMART CAMPUS • BENGALURU',
    headingPrefix: 'Experience World-Class Learning at ',
    headingHighlight: 'REVA University',
    headingSuffix: '',
    supporting: 'UGC Recognised | AICTE Approved | State-of-the-Art Labs | Global Tech Giants',
    description: 'Immerse yourself in a vibrant 45-acre university ecosystem with high-tech simulation labs, world-class amphitheater facilities, and a thriving community of tech innovators.',
    primaryCta: 'APPLY NOW',
    secondaryCta: 'REQUEST A CALLBACK',
    caption: 'Rukmini Knowledge Park • Bengaluru'
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
        className="relative w-full min-h-[720px] xs:min-h-[760px] sm:min-h-[820px] lg:min-h-[880px] xl:min-h-[920px] flex flex-col justify-between overflow-hidden bg-[#061226] pt-[118px] xs:pt-[128px] sm:pt-[140px] lg:pt-[155px] xl:pt-[170px] pb-6 sm:pb-8 lg:pb-10 focus:outline-none"
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
            FULL-WIDTH SLIDER BACKGROUND IMAGES & CINEMATIC OVERLAYS
            Seamless photographic composition:
            - Each slide has its own tailored negative-space framing
            - Slide-specific ultra-smooth 5-stop gradient crossfading with the image
            - Soft optical depth vignette centered in negative space
            - No hard vertical dividing line or separated text box
           ---------------------------------------------------- */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {heroSlides.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                aria-hidden={!isActive}
              >
                {/* Genuine, High-Resolution REVA/RACE Photographic Asset */}
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className={`w-full h-full object-cover ${slide.objectPosition || 'object-center'}`}
                  style={{ imageRendering: 'auto' }}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />

                {/* Slide-Specific Seamless Multi-Stop Cinematic Gradient */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: slide.gradient
                  }}
                />

                {/* Slide-Specific Atmospheric Optical Glow (Soft focus in natural negative space) */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: slide.radialGlow
                  }}
                />
              </div>
            );
          })}

          {/* Seamless ambient integration layers */}
          {/* Top soft feather beneath floating navbar */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#031837]/60 via-[#031837]/15 to-transparent z-15 pointer-events-none" />

          {/* Bottom soft feather grounding trust statistics and pagination */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#031837]/60 via-[#031837]/15 to-transparent z-15 pointer-events-none" />

          {/* Responsive mobile contrast balance */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#031837]/35 via-transparent to-[#031837]/60 sm:hidden z-15 pointer-events-none" />
        </div>

        {/* ----------------------------------------------------
            HERO CONTENT CONTAINER (SEAMLESS COMPOSITIONAL INTEGRATION)
            Text naturally lives inside the natural negative space of the photograph
           ---------------------------------------------------- */}
        <div className="relative z-20 w-[92vw] lg:w-[94vw] max-w-[1450px] mx-auto px-2 sm:px-4 box-border my-auto">
          <div 
            key={currentSlide}
            className={`${activeSlide.textWidth || 'max-w-[780px]'} flex flex-col items-start text-left transition-all duration-500 ease-out animate-fade-in`}
          >
            
            {/* Eyebrow: Integrated optical kicker */}
            <div className="inline-flex items-center gap-2 xs:gap-2.5 px-3.5 xs:px-4 py-1.5 rounded-full bg-[#031837]/60 border border-white/15 backdrop-blur-sm mb-4 sm:mb-6 shadow-sm max-w-full">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#F37021] animate-ping shrink-0"></span>
              <span className="text-[10.5px] xs:text-[11.5px] sm:text-xs font-extrabold tracking-[0.16em] sm:tracking-[0.2em] text-[#F37021] uppercase truncate sm:whitespace-normal">
                {activeSlide.eyebrow}
              </span>
            </div>

            {/* Main Heading: Authentic RACE headline with fluid clamp sizing & cinematic optical depth */}
            <h1 className="text-[clamp(1.85rem,4.5vw,3.95rem)] font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_2px_14px_rgba(3,24,55,0.7)] min-h-[90px] xs:min-h-[110px] sm:min-h-[135px] lg:min-h-[155px] flex items-center">
              <span>
                {activeSlide.headingPrefix}
                <span className="text-[#F37021] relative inline-block">
                  {activeSlide.headingHighlight}
                </span>
                {activeSlide.headingSuffix}
              </span>
            </h1>

            {/* Supporting line: Crisp glowing accents */}
            <div className="mt-3.5 sm:mt-5 flex items-center flex-wrap gap-y-1 gap-x-2 sm:gap-x-2.5 text-[11.5px] xs:text-xs sm:text-sm lg:text-[15px] font-bold text-[#00B4D8] tracking-wide drop-shadow-[0_1px_8px_rgba(0,180,216,0.3)]">
              {activeSlide.supporting.split(' | ').map((item, idx, arr) => (
                <React.Fragment key={idx}>
                  <span>{item}</span>
                  {idx < arr.length - 1 && <span className="text-white/30">|</span>}
                </React.Fragment>
              ))}
            </div>

            {/* Description: Integrated optical tone */}
            <p className="mt-3.5 sm:mt-5 text-slate-100/90 text-[14px] xs:text-[15px] sm:text-[16.5px] lg:text-[17.5px] leading-relaxed max-w-[700px] font-normal drop-shadow-[0_1px_10px_rgba(3,24,55,0.7)] min-h-[60px] xs:min-h-[70px] sm:min-h-[80px]">
              {activeSlide.description}
            </p>

            {/* CTA Buttons: APPLY NOW & REQUEST A CALLBACK */}
            <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              
              {/* Primary CTA: APPLY NOW
                  - Premium orange pill button
                  - Matched height: h-[50px] sm:h-[54px]
                  - Strong visual hierarchy with clean dark navy text
                  - Smooth rounded corners, clean arrow on right
                  - Hover: slight lift, subtle 1.02 scale, soft glow, arrow moves right (250ms transition)
              */}
              <button
                type="button"
                onClick={onApplyNow}
                className="h-[50px] sm:h-[54px] px-7 sm:px-8 rounded-full bg-[#F37021] hover:bg-[#ff7929] text-[#031837] font-black text-[13px] sm:text-[13.5px] uppercase tracking-wider shadow-lg shadow-orange-950/25 hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-[250ms] ease-out inline-flex items-center justify-center gap-2.5 group transform hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-100 cursor-pointer"
              >
                <span>{activeSlide.primaryCta}</span>
                <ArrowRight className="w-4 h-4 text-[#031837] stroke-[2.5] transition-transform duration-[250ms] ease-out group-hover:translate-x-1 shrink-0" />
              </button>

              {/* Secondary CTA: REQUEST A CALLBACK
                  - Premium glass navy style (semi-transparent navy bg + subtle border + backdrop blur)
                  - Matched height: h-[50px] sm:h-[54px]
                  - Same pill shape, white text
                  - Orange phone icon on left, arrow on right
                  - Hover: brighter background/border, subtle phone glow, arrow moves right (250ms transition)
              */}
              <button
                type="button"
                onClick={onRequestCallback}
                className="h-[50px] sm:h-[54px] px-6 sm:px-7 rounded-full bg-[#0a2144]/80 hover:bg-[#123163]/90 border border-white/20 hover:border-white/45 text-white font-bold text-[13px] sm:text-[13.5px] uppercase tracking-wider backdrop-blur-md shadow-md shadow-black/30 hover:shadow-lg hover:shadow-black/40 transition-all duration-[250ms] ease-out inline-flex items-center justify-center gap-2.5 group transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#F37021] shrink-0 transition-all duration-[250ms] ease-out group-hover:text-[#ff7d30] group-hover:drop-shadow-[0_0_6px_rgba(243,112,33,0.6)]" />
                <span>{activeSlide.secondaryCta}</span>
                <ArrowRight className="w-4 h-4 text-white/70 group-hover:text-white stroke-[2.2] transition-all duration-[250ms] ease-out group-hover:translate-x-1 shrink-0" />
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
        <div className="relative z-20 w-[92vw] lg:w-[94vw] max-w-[1450px] mx-auto px-2 sm:px-4 mt-6 sm:mt-8 lg:mt-10 pt-4 sm:pt-6 border-t border-white/15 box-border">
          <div className="grid grid-cols-3 gap-2 xs:gap-3 sm:flex sm:flex-wrap sm:items-center sm:justify-start sm:gap-x-6 lg:gap-x-8 text-xs sm:text-[13px] text-slate-200 font-semibold">
            
            <div className="flex flex-col xs:flex-row items-center xs:items-start sm:items-center text-center xs:text-left gap-1.5 xs:gap-2.5 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F37021]" />
              </div>
              <div>
                <span className="font-extrabold text-white text-xs xs:text-sm sm:text-base block leading-none">100+</span>
                <span className="text-[9.5px] xs:text-[10.5px] sm:text-[11px] text-slate-300 font-medium block leading-tight mt-0.5">Hiring Partners</span>
              </div>
            </div>

            <div className="hidden sm:block h-7 w-px bg-white/20"></div>

            <div className="flex flex-col xs:flex-row items-center xs:items-start sm:items-center text-center xs:text-left gap-1.5 xs:gap-2.5 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00B4D8]" />
              </div>
              <div>
                <span className="font-extrabold text-white text-xs xs:text-sm sm:text-base block leading-none">50+</span>
                <span className="text-[9.5px] xs:text-[10.5px] sm:text-[11px] text-slate-300 font-medium block leading-tight mt-0.5">Industry Mentors</span>
              </div>
            </div>

            <div className="hidden sm:block h-7 w-px bg-white/20"></div>

            <div className="flex flex-col xs:flex-row items-center xs:items-start sm:items-center text-center xs:text-left gap-1.5 xs:gap-2.5 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
              </div>
              <div>
                <span className="font-extrabold text-white text-xs xs:text-sm sm:text-base block leading-none">1000+</span>
                <span className="text-[9.5px] xs:text-[10.5px] sm:text-[11px] text-slate-300 font-medium block leading-tight mt-0.5">Alumni Network</span>
              </div>
            </div>

          </div>
        </div>

        {/* ----------------------------------------------------
            CENTER-BOTTOM: INDEPENDENT PAGINATION DOTS
            ● ● ● ●
            Positioned independently at the bottom center (~30-40px above bottom edge)
           ---------------------------------------------------- */}
        <div className="relative z-20 w-full flex items-center justify-center mt-4 sm:mt-6 box-border">
          <div 
            className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-950/60 border border-white/15 backdrop-blur-md shadow-xl shadow-black/40"
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
                  className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F37021] ${
                    isActive 
                      ? 'w-6 sm:w-8 bg-[#F37021] shadow-lg shadow-orange-500/50' 
                      : 'w-2 sm:w-2.5 bg-white/40 hover:bg-white/70'
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
          className="absolute left-2 xs:left-3 sm:left-5 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 bg-slate-950/40 hover:bg-[#F37021] hover:border-[#F37021] hover:text-slate-950 text-white backdrop-blur-md flex items-center justify-center transition-all duration-200 shadow-xl shadow-black/40 focus:outline-none focus:ring-2 focus:ring-[#F37021] group"
        >
          <ChevronLeft className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* RIGHT SIDE: Next → */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-2 xs:right-3 sm:right-5 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 bg-slate-950/40 hover:bg-[#F37021] hover:border-[#F37021] hover:text-slate-950 text-white backdrop-blur-md flex items-center justify-center transition-all duration-200 shadow-xl shadow-black/40 focus:outline-none focus:ring-2 focus:ring-[#F37021] group"
        >
          <ChevronRight className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </section>
    </div>
  );
}
