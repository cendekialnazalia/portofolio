import { useEffect, useRef, useState } from 'react';
import { QUICK_STACK_TOOLS } from '../data/portfolioData';

const GREETINGS = [
  'hi there! 👋 (click me)',
  'let’s build fun STEM! 🚀',
  'scrum sprints = 98% on-time ⚡',
  'ready for your next stage! 🎤',
];

export function AboutSection() {
  const avatarBoxRef = useRef<HTMLDivElement | null>(null);
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const box = avatarBoxRef.current;
      if (!box) return;
      const rect = box.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const angle = Math.atan2(deltaY, deltaX);
      const distance = Math.min(7, Math.hypot(deltaX, deltaY) / 18);

      setPupilOffset({
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleAvatarClick = () => {
    setGreetingIndex((prev) => (prev + 1) % GREETINGS.length);
    setIsBlinking(true);
    window.setTimeout(() => setIsBlinking(false), 180);
  };

  const activeToolObj = QUICK_STACK_TOOLS.find((t) => t.name === selectedTool);

  return (
    <section id="hello" className="w-full py-16 bg-surface-bright paper-grid-bg relative">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-10 relative z-10">
        {/* Section Stamp Header */}
        <div className="flex flex-wrap items-center justify-between pb-6 gap-3">
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="bg-ink text-surface font-mono text-[11px] font-bold tracking-[0.12em] px-2.5 py-1 shadow-[3px_3px_0px_#dd3124] -rotate-1 uppercase">
              DOSSIER SEC. 02 // PERSONAL BIO &amp; CAPABILITIES
            </div>
            <span className="font-mono text-[11px] font-bold text-secondary uppercase tracking-widest hidden sm:inline-block bg-tape-strip px-2 py-0.5 shadow-sm">
              ARCHIVE REF: 2026-BIO
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] font-bold text-secondary">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span>SYS.ID: CN-2026-X</span>
            <span className="text-primary font-bold">✦</span>
            <span className="bg-sticky-yellow text-ink px-1.5 py-0.5 font-bold shadow-[1px_1px_0px_#111111]">
              VERIFIED
            </span>
          </div>
        </div>

        {/* 3-Column Scrapbook Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Col 1: Selected Object Frame with 8 Bounding Box Handles & Live Eye-Tracking Avatar */}
          <div className="lg:col-span-4 relative">
            <div className="bg-pure-white p-5 shadow-[8px_8px_0px_#111111] relative -rotate-1 hover:rotate-0 transition-transform duration-200 border border-ink/20">
              {/* 8 Bounding Box Handles */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-pure-white border border-primary shadow-[1px_1px_0px_#111111] z-20" />
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-pure-white border border-primary shadow-[1px_1px_0px_#111111] z-20" />
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-pure-white border border-primary shadow-[1px_1px_0px_#111111] z-20" />
              <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 bg-pure-white border border-primary shadow-[1px_1px_0px_#111111] z-20" />
              <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-pure-white border border-primary shadow-[1px_1px_0px_#111111] z-20" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-pure-white border border-primary shadow-[1px_1px_0px_#111111] z-20" />
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-pure-white border border-primary shadow-[1px_1px_0px_#111111] z-20" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-pure-white border border-primary shadow-[1px_1px_0px_#111111] z-20" />

              {/* Translucent Washi Tape Strip */}
              <div
                aria-hidden="true"
                className="w-28 h-5 bg-tape-strip absolute -top-3 left-1/4 -rotate-3 z-30 shadow-sm pointer-events-none"
              />

              {/* Card Header */}
              <div className="flex items-center justify-between gap-2 pb-2 border-b border-surface-container mb-3">
                <span className="font-mono text-[11px] uppercase text-ink font-bold whitespace-nowrap">
                  AVATAR_MODULE.01
                </span>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-primary font-bold whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span>STATUS: ONLINE</span>
                </div>
              </div>

              {/* Illustrated Face with Live Cursor Eye Tracking */}
              <div
                ref={avatarBoxRef}
                className="relative w-full aspect-square bg-surface-container flex flex-col items-center justify-center p-5 shadow-inner overflow-hidden border border-ink/10"
              >
                <div className="relative w-44 h-44 bg-surface-bright rounded-full shadow-[4px_4px_0px_#111111] border-2 border-ink flex flex-col items-center justify-center">
                  {/* Eyeballs */}
                  <div className="flex items-center gap-7 mb-4 relative z-10">
                    <div
                      className={`w-10 h-10 bg-pure-white rounded-full border-2 border-ink shadow-[2px_2px_0px_#111111] relative flex items-center justify-center overflow-hidden transition-transform duration-100 ${
                        isBlinking ? 'scale-y-10' : 'scale-y-100'
                      }`}
                    >
                      <div
                        className="w-4 h-4 bg-ink rounded-full transition-transform duration-75"
                        style={{
                          transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)`,
                        }}
                      />
                    </div>
                    <div
                      className={`w-10 h-10 bg-pure-white rounded-full border-2 border-ink shadow-[2px_2px_0px_#111111] relative flex items-center justify-center overflow-hidden transition-transform duration-100 ${
                        isBlinking ? 'scale-y-10' : 'scale-y-100'
                      }`}
                    >
                      <div
                        className="w-4 h-4 bg-ink rounded-full transition-transform duration-75"
                        style={{
                          transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Smile & Rosy Cheeks */}
                  <div className="relative flex items-center justify-center">
                    <div className="w-3.5 h-2 bg-primary-fixed rounded-full -left-5 absolute" />
                    <div className="w-10 h-5 border-b-4 border-ink rounded-b-full" />
                    <div className="w-3.5 h-2 bg-primary-fixed rounded-full -right-5 absolute" />
                  </div>

                  {/* Glasses Rim Accent */}
                  <div className="absolute top-[42px] w-[124px] flex items-center justify-between pointer-events-none">
                    <div className="w-12 h-12 rounded-full border-2 border-ink" />
                    <div className="flex-1 h-0.5 bg-ink" />
                    <div className="w-12 h-12 rounded-full border-2 border-ink" />
                  </div>
                </div>

                {/* Interactive Speech Bubble Button */}
                <button
                  type="button"
                  onClick={handleAvatarClick}
                  className="mt-5 bg-ink text-surface px-3 py-1.5 font-mono text-[11px] uppercase shadow-[3px_3px_0px_#dd3124] hover:bg-primary hover:-translate-y-0.5 transition-all font-bold cursor-pointer"
                >
                  {GREETINGS[greetingIndex]}
                </button>
              </div>

              {/* Handwritten Note */}
              <p className="text-secondary italic mt-3 text-center font-bold font-hand text-[21px] leading-tight -rotate-2">
                psst… move your cursor, I&apos;m watching 👀
              </p>

              {/* Bottom Tag */}
              <div className="mt-3 pt-2 border-t border-surface-container flex items-center justify-between text-secondary font-mono text-[11px] font-bold">
                <span>DIR: JAKARTA, ID</span>
                <span className="text-primary">INDEX #02-A</span>
              </div>
            </div>
          </div>

          {/* Col 2: HELLO Display, Handwritten Signature & Narrative */}
          <div className="lg:col-span-5 bg-pure-white p-6 shadow-[8px_8px_0px_#111111] relative -rotate-0.5 border border-ink/20">
            <div
              aria-hidden="true"
              className="w-24 h-5 bg-tape-strip absolute -top-3 right-8 rotate-3 z-20 shadow-sm pointer-events-none"
            />

            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-[11px] text-primary uppercase font-bold tracking-wider">
                FILE #01: OVERVIEW
              </span>
              <span className="font-mono text-[11px] text-secondary uppercase font-bold">
                FOUNDER / PMO
              </span>
            </div>

            <h2 className="font-display font-black text-[56px] sm:text-[72px] leading-[0.95] tracking-[-0.015em] uppercase text-ink mt-1">
              HELLO
            </h2>

            {/* Handwritten Signature & Arrow */}
            <div className="flex flex-wrap items-center gap-2 mt-2 mb-3 text-ink select-none font-hand text-[26px] leading-tight -rotate-2">
              <svg
                className="w-7 h-7 text-primary shrink-0"
                viewBox="0 0 40 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M32 10 C 24 6, 12 14, 8 28" />
                <polyline points="4 20 8 28 16 26" />
              </svg>
              <span className="text-primary font-bold">that&apos;s me!</span>
              <span className="text-ink font-bold">Cendekia Luthfieta Nazalia</span>
            </div>

            {/* Bio Narrative */}
            <div className="space-y-3 text-on-surface">
              <p className="text-[18px] leading-[25px] font-bold text-ink">
                I&apos;m Cendekia Luthfieta Nazalia — an educator, project management officer, and
                tech ecosystem builder based in Jakarta.
              </p>
              <p className="text-[15px] leading-[23px] text-ink-soft">
                Bridging high-discipline Agile project delivery with playful, accessible STEM and
                coding curricula. Over the past 4+ years, I have architected learning initiatives
                impacting 10,000+ kids and youth, managed cross-functional squads for educational
                platforms, and hosted 50+ national tech conferences.
              </p>
              <p className="text-[15px] leading-[23px] text-ink-soft">
                Founder of{' '}
                <span className="bg-sticky-yellow text-ink px-1.5 py-0.5 font-bold shadow-[1px_1px_0px_#111111]">
                  Kidilent
                </span>
                , where we transform passive young consumers of tech into fearless digital creators
                through Scratch, game design, and creative computational logic.
              </p>
            </div>

            {/* Tactile Education & Certification Section */}
            <div className="mt-6 pt-5 border-t-2 border-ink space-y-3">
              <div className="flex items-center justify-between gap-2 pb-1">
                <span className="font-display font-extrabold text-[18px] uppercase text-ink">
                  EDUCATION &amp; CREDENTIALS
                </span>
                <span className="font-mono text-[10px] bg-surface-container px-2 py-0.5 font-bold shadow-[1px_1px_0px_#111111] whitespace-nowrap">
                  ACADEMIC RECORD
                </span>
              </div>

              <div className="bg-surface p-3.5 shadow-[3px_3px_0px_#111111] border border-ink/20 -rotate-0.5">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <div className="font-display font-bold text-[18px] leading-tight text-ink">
                      Bachelor of Information Technology
                    </div>
                    <div className="text-[13px] text-secondary mt-0.5">
                      Universitas Indonesia (UI) · 2019 — 2023
                    </div>
                  </div>
                  <span className="bg-primary text-on-primary font-mono text-[10px] px-2 py-0.5 font-bold shadow-[1px_1px_0px_#111111] shrink-0 whitespace-nowrap tabular-nums">
                    CUM LAUDE (3.91)
                  </span>
                </div>
              </div>

              <div className="bg-surface p-3.5 shadow-[3px_3px_0px_#dd3124] border border-ink/20 rotate-0.5">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <div className="font-display font-bold text-[17px] leading-tight text-ink flex items-center gap-1.5">
                      <span className="text-primary font-bold">✦</span>
                      <span>Certified Scrum Master (CSM®) &amp; PMP Trainee</span>
                    </div>
                    <div className="font-mono text-[10px] text-secondary mt-1">
                      Scrum Alliance · Credential ID: #SCR-90142
                    </div>
                  </div>
                  <span className="bg-ink text-surface font-mono text-[10px] px-2 py-0.5 font-bold shadow-[1px_1px_0px_#dd3124] shrink-0 whitespace-nowrap">
                    ACTIVE
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Stack & Experience Timeline */}
          <div className="lg:col-span-3 space-y-5">
            {/* Quick Stack */}
            <div className="bg-pure-white p-4 shadow-[6px_6px_0px_#111111] rotate-1 border border-ink/20 relative">
              <div
                aria-hidden="true"
                className="w-16 h-4 bg-tape-strip absolute -top-2 left-6 -rotate-3 z-10 shadow-sm pointer-events-none"
              />
              <div className="flex items-center justify-between gap-2 pb-2 border-b border-surface-container">
                <span className="font-display font-extrabold text-[18px] uppercase text-ink">
                  QUICK STACK
                </span>
                <span className="font-mono text-[10px] text-primary font-bold whitespace-nowrap">
                  TOOLKIT
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2 mt-3 text-center">
                {QUICK_STACK_TOOLS.map((tool) => {
                  const isActive = selectedTool === tool.name;
                  return (
                    <button
                      key={tool.name}
                      type="button"
                      onClick={() =>
                        setSelectedTool((prev) => (prev === tool.name ? null : tool.name))
                      }
                      className={`p-2 transition-all flex flex-col items-center cursor-pointer border ${
                        isActive
                          ? 'bg-sticky-yellow border-ink shadow-[3px_3px_0px_#dd3124] -translate-y-0.5'
                          : 'bg-surface border-ink/10 shadow-[2px_2px_0px_#111111] hover:shadow-[3px_3px_0px_#dd3124] hover:-translate-y-0.5'
                      }`}
                    >
                      <span className="material-symbols-outlined text-ink text-[20px]">
                        {tool.icon}
                      </span>
                      <span className="font-mono text-[9px] mt-1 font-bold truncate w-full">
                        {tool.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              {activeToolObj && (
                <div className="mt-3 p-2.5 bg-sticky-yellow/80 border border-ink/20 text-[12px] leading-snug text-ink">
                  <span className="font-mono font-bold uppercase text-[10px] text-primary block">
                    {activeToolObj.name} // FIELD NOTE
                  </span>
                  {activeToolObj.usage}
                </div>
              )}

              <div className="mt-3 pt-1 text-right">
                <a
                  href="#skills"
                  className="font-mono text-[11px] text-primary hover:underline font-bold uppercase"
                >
                  see all skills ↓
                </a>
              </div>
            </div>

            {/* Career Timeline */}
            <div className="bg-surface-container-high p-4 shadow-[6px_6px_0px_#111111] -rotate-1 border border-ink/20">
              <div className="flex items-center justify-between gap-2 pb-2 border-b border-ink/20">
                <span className="font-display font-extrabold text-[18px] uppercase text-ink">
                  CAREER TIMELINE
                </span>
                <span className="font-mono text-[10px] text-secondary font-bold whitespace-nowrap tabular-nums">
                  2021—NOW
                </span>
              </div>

              <div className="space-y-3 mt-3">
                <div className="relative pl-3 border-l-2 border-primary">
                  <span className="font-mono text-[10px] text-primary font-bold">
                    2023 — PRESENT
                  </span>
                  <div className="font-display font-bold text-[15px] text-ink leading-tight">
                    Founder &amp; Chief Educator
                  </div>
                  <div className="text-[13px] text-secondary">Kidilent Edutech Studio</div>
                </div>

                <div className="relative pl-3 border-l-2 border-ink">
                  <span className="font-mono text-[10px] text-secondary font-bold">
                    2022 — 2024
                  </span>
                  <div className="font-display font-bold text-[15px] text-ink leading-tight">
                    Project Management Officer
                  </div>
                  <div className="text-[13px] text-secondary">National EduTech Scaleup</div>
                </div>

                <div className="relative pl-3 border-l-2 border-ink">
                  <span className="font-mono text-[10px] text-secondary font-bold">
                    2021 — PRESENT
                  </span>
                  <div className="font-display font-bold text-[15px] text-ink leading-tight">
                    Master of Ceremony &amp; Keynote Speaker
                  </div>
                  <div className="text-[13px] text-secondary">50+ Tech &amp; Startup Summits</div>
                </div>
              </div>
            </div>

            {/* Stamped Gold Washi Tape Certification Banner */}
            <div className="p-3 bg-sticky-yellow shadow-[4px_4px_0px_#111111] rotate-2 text-center border border-ink/20">
              <span className="font-mono text-[11px] text-ink font-bold uppercase tracking-wider">
                ★ KEMENDIKBUD CERTIFIED TRAINER ★
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
