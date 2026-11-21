import { useState } from 'react';
import { HERO_PORTRAIT_URL, HERO_SLIDES } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

const MARQUEE_TEXT =
  'EDU TECH CREATOR ✦ PROJECT MANAGEMENT OFFICER ✦ FOUNDER OF KIDILENT ✦ KEYNOTE SPEAKER & MC ✦ AGILE SCRUM MASTER ✦ STEM CURRICULUM ARCHITECT ✦ ';

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentSlide = HERO_SLIDES[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="hero"
      className="relative w-full pt-6 pb-20 overflow-hidden bg-surface paper-grid-bg"
    >
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-10 relative">
        {/* Topline Metadata Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4">
          <div className="flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.12em] text-ink uppercase bg-surface-container px-2.5 py-1 shadow-[2px_2px_0px_#111111] -rotate-1">
            <span className="inline-block w-2 h-2 bg-primary rounded-full" />
            <span>PMO / EDU TECH / FOUNDER / SPEAKER</span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.12em] text-secondary">
            <span>PORTFOLIO DOSSIER</span>
            <span className="text-primary font-display font-black text-[18px] leading-none">
              ✸✦✺
            </span>
            <span className="bg-sticky-yellow text-ink px-1.5 py-0.5 font-bold shadow-[2px_2px_0px_#111111] whitespace-nowrap">
              VOL. 2026
            </span>
          </div>
        </div>

        {/* Massive Master Display Header */}
        <div className="mt-4 relative z-10 flex flex-col items-start select-none">
          <div className="relative w-full">
            <h1 className="font-display font-black text-[58px] sm:text-[84px] lg:text-[112px] leading-[0.84] tracking-[-0.02em] uppercase text-ink text-left">
              CENDEKIA
            </h1>

            {/* Translucent Tape Strip */}
            <div
              aria-hidden="true"
              className="hidden sm:block absolute -top-3 left-1/3 w-28 h-6 bg-tape-strip backdrop-blur-sm -rotate-6 shadow-sm pointer-events-none"
            />

            {/* Handwritten Callout Note */}
            <div className="mt-3 sm:mt-0 sm:absolute sm:right-4 md:right-16 sm:-top-1 flex flex-col items-start sm:rotate-3">
              <span className="font-mono text-[11px] text-primary uppercase font-bold tracking-widest bg-pure-white px-2 py-0.5 shadow-[2px_2px_0px_#111111]">
                that&apos;s me!
              </span>
              <div className="text-ink font-hand text-[22px] leading-tight flex items-center gap-1 font-bold mt-0.5">
                <span>Cendekia Luthfieta Nazalia</span>
                <span className="material-symbols-outlined text-[18px] text-primary rotate-45">
                  south_west
                </span>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap items-center justify-between gap-2 mt-1">
            <span className="font-display font-black text-[28px] sm:text-[38px] lg:text-[44px] leading-none uppercase text-primary tracking-[-0.01em]">
              LUTHFIETA NAZALIA, S.T.
            </span>

            <div className="hidden md:flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.06em] text-secondary whitespace-nowrap">
              <span className="tabular-nums">LAT: -6.2088° S</span>
              <span>✦</span>
              <span className="tabular-nums">LON: 106.8456° E</span>
              <span className="bg-ink text-surface px-1.5 py-0.5">JAKARTA, ID</span>
            </div>
          </div>
        </div>

        {/* Hero Collage Stage Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative">
          {/* Left Column: Interactive Selected Object Card with 8 Bounding-Box Handles */}
          <div className="lg:col-span-4 relative z-20">
            <div className="bg-pure-white p-5 shadow-[6px_6px_0px_#111111] border border-ink/20 relative -rotate-1 hover:rotate-0 transition-transform duration-200">
              {/* 8 Bounding Box Handles */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-pure-white border border-ink shadow-[1px_1px_0px_#111111]" />
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-pure-white border border-ink shadow-[1px_1px_0px_#111111]" />
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-pure-white border border-ink shadow-[1px_1px_0px_#111111]" />
              <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 bg-pure-white border border-ink shadow-[1px_1px_0px_#111111]" />
              <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-pure-white border border-ink shadow-[1px_1px_0px_#111111]" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-pure-white border border-ink shadow-[1px_1px_0px_#111111]" />
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-pure-white border border-ink shadow-[1px_1px_0px_#111111]" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-pure-white border border-ink shadow-[1px_1px_0px_#111111]" />

              <div className="flex items-center justify-between gap-2 pb-2">
                <span className="font-mono text-[11px] font-bold tracking-[0.12em] bg-primary text-on-primary px-1.5 py-0.5 uppercase whitespace-nowrap tabular-nums">
                  {currentSlide.slideIndex}
                </span>
                <span className="font-mono text-[11px] font-bold text-secondary tracking-[0.04em] whitespace-nowrap">
                  ACTIVE_OBJECT
                </span>
              </div>

              <h2 className="font-display font-black text-[24px] leading-[28px] tracking-[-0.01em] uppercase text-ink mt-1">
                {currentSlide.title}
              </h2>

              <p className="text-[15px] leading-[22px] text-ink-soft mt-1.5 min-h-[66px]">
                {currentSlide.description}
              </p>

              {/* Interactive Progress Track & Prev/Next Controls */}
              <div className="mt-4 pt-2 flex items-center justify-between gap-2 border-t border-surface-container">
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-ink font-bold min-w-0">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous slide"
                    className="w-8 h-8 bg-surface-container border border-ink/15 flex items-center justify-center shadow-[2px_2px_0px_#111111] hover:bg-primary hover:text-on-primary transition-colors shrink-0 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">chevron_left</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next slide"
                    className="w-8 h-8 bg-surface-container border border-ink/15 flex items-center justify-center shadow-[2px_2px_0px_#111111] hover:bg-primary hover:text-on-primary transition-colors shrink-0 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </button>
                  <span className="ml-1 truncate text-[10px] tracking-wider">
                    {currentSlide.footerLabel}
                  </span>
                </div>

                <div className="w-16 h-2 bg-surface-container overflow-hidden shrink-0 border border-ink/15">
                  <div
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${currentSlide.progressPercent}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Sticky Note Tacked Below */}
            <div className="mt-5 bg-sticky-yellow p-3.5 shadow-[4px_4px_0px_#111111] border border-ink/15 rotate-2 relative transition-all">
              <div
                aria-hidden="true"
                className="w-16 h-4 bg-tape-strip absolute -top-2 left-1/3 -rotate-2 pointer-events-none"
              />
              <p className="font-display font-extrabold text-[18px] leading-[22px] uppercase text-ink">
                {currentSlide.stickyHeadline}
              </p>
              <p className="text-[13px] leading-[18px] text-ink-soft mt-1">
                {currentSlide.stickyNote}
              </p>
            </div>
          </div>

          {/* Center: Dynamic Orbit Illustration & Die-Cut Sticker Portrait */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[440px] py-4">
            {/* Orbit Graphic Background Rings */}
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="w-[320px] h-[320px] sm:w-[390px] sm:h-[390px] rounded-full shadow-[0_0_0_1.5px_#111111] flex items-center justify-center opacity-75">
                <div className="w-[240px] h-[240px] sm:w-[270px] sm:h-[270px] rounded-full shadow-[0_0_0_1.5px_#dd3124] rotate-45 flex items-center justify-center">
                  <div className="w-[170px] h-[170px] sm:w-[195px] sm:h-[195px] rounded-full shadow-[0_0_0_1.5px_#111111] -rotate-12" />
                </div>
              </div>

              <svg
                className="absolute w-[360px] h-[360px] sm:w-[430px] sm:h-[430px] text-ink opacity-30 animate-orbit"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  fill="none"
                  r="48"
                  stroke="currentColor"
                  strokeDasharray="2, 3"
                  strokeWidth="0.75"
                />
                <ellipse
                  cx="50"
                  cy="50"
                  fill="none"
                  rx="48"
                  ry="18"
                  stroke="currentColor"
                  strokeDasharray="1.5, 2"
                  strokeWidth="0.5"
                />
              </svg>
            </div>

            {/* Die-Cut Sticker Portrait */}
            <div className="relative z-10 p-2 transform rotate-1 group">
              <div className="relative p-1.5 bg-pure-white border border-ink/20 shadow-[10px_10px_0px_#dd3124] transition-transform duration-300 group-hover:scale-[1.03]">
                <ResilientImage
                  src={HERO_PORTRAIT_URL}
                  alt="Editorial studio portrait of Cendekia Luthfieta Nazalia"
                  fallbackLabel="CENDEKIA PORTRAIT"
                  fallbackIcon="person"
                  className="w-[270px] sm:w-[290px] h-[355px] sm:h-[380px] object-cover bg-surface-container block"
                />

                <div className="absolute -bottom-3 -right-3 bg-ink text-surface px-2.5 py-1 font-mono text-[10px] font-bold tracking-[0.1em] uppercase shadow-[3px_3px_0px_#dd3124] rotate-3 whitespace-nowrap">
                  AUTHENTIC_ORIGINAL
                </div>

                <div className="absolute top-2 -left-3 bg-sticky-yellow text-ink px-2 py-0.5 font-mono text-[10px] font-bold uppercase shadow-[2px_2px_0px_#111111] -rotate-6 whitespace-nowrap">
                  {currentSlide.stickerStamp}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Stacked Role Track Badges */}
          <div className="lg:col-span-3 flex flex-col gap-3 relative z-20">
            <div className="font-mono text-[11px] font-bold tracking-[0.12em] uppercase text-secondary pb-0.5">
              SELECTED TRACKS
            </div>

            {HERO_SLIDES.map((slide, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left p-3 border transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                    slide.cardBg
                  } ${slide.shadowColor} ${
                    isSelected
                      ? 'rotate-0 translate-x-1.5 border-primary ring-2 ring-primary/30'
                      : `${slide.tiltClass} border-ink/15 hover:rotate-0 hover:translate-x-1`
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className={`font-mono text-[10px] font-bold tracking-[0.06em] ${slide.categoryColor}`}>
                      {slide.trackCode}
                    </span>
                    {isSelected && (
                      <span className="font-mono text-[9px] font-bold bg-ink text-surface px-1 py-0.5">
                        ACTIVE
                      </span>
                    )}
                  </div>
                  <div className="font-display font-extrabold text-[18px] leading-[22px] uppercase text-ink mt-0.5">
                    {slide.title}
                  </div>
                  <div className="text-[13px] leading-[18px] text-ink-soft">
                    {slide.shortDesc}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Rotated Infinite Marquee Banner */}
      <div className="marquee-wrapper mt-14 w-full bg-ink text-surface py-2.5 relative z-30 shadow-[0_6px_0px_#dd3124] -rotate-1 scale-[1.02] overflow-hidden select-none">
        <div className="flex w-max animate-marquee font-display font-black text-[22px] sm:text-[24px] leading-[28px] uppercase tracking-wider">
          <span className="pr-4 whitespace-nowrap">{MARQUEE_TEXT}{MARQUEE_TEXT}</span>
          <span className="pr-4 whitespace-nowrap" aria-hidden="true">
            {MARQUEE_TEXT}{MARQUEE_TEXT}
          </span>
        </div>
      </div>
    </section>
  );
}
