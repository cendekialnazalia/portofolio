import { SKILL_GROUPS } from '../data/portfolioData';

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-16 bg-surface-bright paper-grid-bg relative">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between pb-8 gap-3">
          <div>
            <span className="bg-ink text-surface font-mono text-[11px] font-bold tracking-[0.12em] px-2 py-0.5 shadow-[2px_2px_0px_#dd3124]">
              ARSENAL 05
            </span>
            <h2 className="font-display font-black text-[48px] sm:text-[68px] leading-[0.95] tracking-[-0.015em] uppercase text-ink mt-2">
              DETAILED TOOLKIT &amp; CREW
            </h2>
          </div>

          <div className="hidden sm:block font-mono text-[11px] font-bold text-secondary whitespace-nowrap">
            STANDARDIZED MATRIX // 2026 EDITION
          </div>
        </div>

        {/* 2-Column Grid of Pinned Paper Sheets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.id}
              className={`bg-pure-white p-6 sm:p-7 border border-ink/20 shadow-[6px_6px_0px_#111111] relative ${group.tiltClass} hover:rotate-0 transition-transform duration-200`}
            >
              <div
                aria-hidden="true"
                className={`w-20 h-5 bg-tape-strip absolute -top-2.5 ${group.tapeClass} z-10 shadow-sm pointer-events-none`}
              />

              <div className="flex flex-wrap items-center justify-between gap-2 pb-2">
                <h3 className="font-display font-extrabold text-[19px] leading-[22px] uppercase text-ink">
                  {group.title}
                </h3>
                <span
                  className={`font-mono text-[10px] font-bold whitespace-nowrap ${group.tagColor}`}
                >
                  {group.tag}
                </span>
              </div>

              {/* Skill Progress Bars */}
              <div className="space-y-4 mt-4">
                {group.bars.map((bar) => (
                  <div key={bar.name}>
                    <div className="flex items-center justify-between gap-2 font-mono text-[11px] mb-1.5">
                      <span className="font-bold text-ink">{bar.name}</span>
                      <span className="font-bold text-ink tabular-nums whitespace-nowrap shrink-0">
                        {bar.percent}%
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-surface-container border border-ink/10 overflow-hidden">
                      <div
                        className={`h-full ${bar.barColor}`}
                        style={{ width: `${bar.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Software Crew Chips */}
              <div className="mt-7 pt-4 border-t-2 border-surface-container">
                <span className="font-mono text-[11px] uppercase text-ink font-bold block">
                  {group.crewTitle}
                </span>
                <div className="flex flex-wrap gap-2 mt-2.5">
                  {group.crewItems.map((item) => (
                    <span
                      key={item.label}
                      className={`px-2.5 py-1 font-mono text-[11px] font-bold text-ink border border-ink/15 shadow-[2px_2px_0px_#111111] whitespace-nowrap ${
                        item.highlight ? 'bg-sticky-yellow' : 'bg-surface-container'
                      }`}
                    >
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
