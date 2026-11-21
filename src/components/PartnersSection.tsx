import { PARTNER_ROW_1, PARTNER_ROW_2 } from '../data/portfolioData';

export function PartnersSection() {
  return (
    <section
      id="partners"
      className="w-full bg-ink text-surface py-16 relative overflow-hidden shadow-2xl"
    >
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-10 pb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.12em] text-primary uppercase">
            <span className="inline-block w-2.5 h-2.5 bg-primary" />
            <span>TRUSTED ECOSYSTEM</span>
          </div>
          <h2 className="font-display font-black text-[36px] sm:text-[44px] leading-none uppercase text-surface tracking-[-0.01em] mt-1.5">
            COLLABORATED WITH
          </h2>
        </div>

        <div className="font-mono text-[11px] font-bold text-secondary uppercase">
          and 35+ regional learning institutions ↘
        </div>
      </div>

      {/* Infinite Scroll Partner Row 1 */}
      <div className="marquee-wrapper w-full py-2.5 overflow-hidden select-none">
        <div className="flex w-max items-center gap-5 animate-marquee-slow">
          {[...PARTNER_ROW_1, ...PARTNER_ROW_1].map((partner, index) => (
            <div
              key={`r1-${partner.label}-${index}`}
              className={`px-4 py-1.5 font-display font-extrabold text-[18px] leading-[22px] uppercase whitespace-nowrap transition-transform hover:rotate-0 ${partner.className}`}
            >
              {partner.label}
            </div>
          ))}
        </div>
      </div>

      {/* Infinite Scroll Partner Row 2 (Reverse) */}
      <div className="marquee-wrapper w-full py-2.5 overflow-hidden select-none mt-2">
        <div className="flex w-max items-center gap-5 animate-marquee-reverse">
          {[...PARTNER_ROW_2, ...PARTNER_ROW_2].map((partner, index) => (
            <div
              key={`r2-${partner.label}-${index}`}
              className={`px-4 py-1.5 font-display font-extrabold text-[18px] leading-[22px] uppercase whitespace-nowrap transition-transform hover:rotate-0 ${partner.className}`}
            >
              {partner.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
