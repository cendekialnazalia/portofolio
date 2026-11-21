import { HONORS } from '../data/portfolioData';

interface AchievementsSectionProps {
  onCollaborateClick: () => void;
}

export function AchievementsSection({ onCollaborateClick }: AchievementsSectionProps) {
  return (
    <section id="achievements" className="w-full py-16 bg-surface paper-grid-bg relative">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-10">
        {/* Mid-Page Callout Banner */}
        <div className="bg-primary text-on-primary p-6 sm:p-10 border-2 border-ink shadow-[8px_8px_0px_#111111] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 -rotate-0.5">
          <div className="max-w-xl">
            <div className="font-mono text-[10px] font-bold uppercase tracking-wider bg-ink text-surface px-2.5 py-1 inline-block">
              NEED A SPEAKER, MC, OR TECH CURRICULUM?
            </div>
            <h2 className="font-display font-black text-[34px] sm:text-[44px] leading-[0.98] uppercase mt-2.5">
              LET&apos;S SHAPE NEXT-GEN DIGITAL EXPERIENCES TOGETHER
            </h2>
            <p className="text-[16px] leading-[23px] text-pure-white/90 mt-2">
              Open for keynote speaking engagements, edutech consulting, and corporate coding
              partnerships.
            </p>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              onClick={onCollaborateClick}
              className="inline-flex items-center gap-1.5 bg-pure-white text-ink font-mono text-[11px] font-bold tracking-[0.12em] uppercase px-6 py-4 shadow-[4px_4px_0px_#111111] hover:shadow-[6px_6px_0px_#111111] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer whitespace-nowrap"
            >
              LET&apos;S COLLABORATE ↗
            </button>
          </div>
        </div>

        {/* Honors & Milestones Grid */}
        <div className="mt-14">
          <div className="flex items-center gap-3 pb-5">
            <span className="bg-ink text-surface font-mono text-[11px] font-bold tracking-[0.12em] px-2.5 py-1">
              RECOGNITIONS
            </span>
            <h3 className="font-display font-black text-[24px] sm:text-[28px] uppercase text-ink leading-none">
              HONORS &amp; MILESTONES
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {HONORS.map((honor) => (
              <div
                key={honor.title}
                className="bg-pure-white p-5 border border-ink/20 shadow-[4px_4px_0px_#111111] hover:shadow-[6px_6px_0px_#dd3124] hover:-translate-y-0.5 transition-all flex items-start gap-3"
              >
                <span className="text-primary font-display font-black text-[22px] leading-none mt-0.5">
                  ★
                </span>
                <div>
                  <div className="font-mono text-[11px] font-bold text-secondary tabular-nums">
                    {honor.year}
                  </div>
                  <h4 className="font-display font-extrabold text-[19px] leading-[22px] uppercase text-ink mt-0.5">
                    {honor.title}
                  </h4>
                  <p className="text-[14px] leading-[20px] text-ink-soft mt-1">
                    {honor.description}
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
