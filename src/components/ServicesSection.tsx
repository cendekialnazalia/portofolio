import { SERVICE_TRACKS } from '../data/portfolioData';

interface ServicesSectionProps {
  onEnquireTrack: (track: string) => void;
}

const RULER_MARKS = [
  '01 IN',
  '02 IN',
  '03 IN',
  '04 IN',
  '05 IN',
  '06 IN',
  '07 IN',
  '08 IN',
  '09 IN',
  '10 IN',
  '11 IN',
  '12 IN',
];

export function ServicesSection({ onEnquireTrack }: ServicesSectionProps) {
  return (
    <section id="services" className="w-full py-16 bg-surface-bright paper-grid-bg relative">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-10">
        {/* Green Self-Healing Cutting Mat Container */}
        <div className="cutting-mat-grid text-on-tertiary p-6 sm:p-10 shadow-[10px_10px_0px_#111111] border-2 border-ink relative overflow-hidden">
          {/* Ruler Markings at Top Edge */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 right-0 h-6 bg-cutting-mat-border flex items-center justify-between px-4 font-mono text-[9px] text-tertiary-fixed-dim select-none border-b border-tertiary-fixed-dim/20"
          >
            {RULER_MARKS.map((mark) => (
              <span key={mark} className="whitespace-nowrap">
                | {mark}
              </span>
            ))}
          </div>

          <div className="pt-5 flex flex-col md:flex-row md:items-end justify-between pb-8 gap-3">
            <div>
              <div className="inline-block bg-sticky-yellow text-ink font-mono text-[10px] px-2 py-0.5 font-bold -rotate-1 mb-2 shadow-[2px_2px_0px_#111111]">
                BENCHMARK SERVICES &amp; COLLABORATION
              </div>
              <h2 className="font-display font-black text-[48px] sm:text-[68px] leading-[0.95] uppercase text-on-tertiary tracking-[-0.015em]">
                WORK WITH ME
              </h2>
            </div>

            <div className="font-mono text-[11px] font-bold text-tertiary-fixed">
              four bespoke modes of partnership ↘
            </div>
          </div>

          {/* 4 Fanned-Out Service Dossier Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-2">
            {SERVICE_TRACKS.map((service) => (
              <div
                key={service.id}
                className={`bg-pure-white text-ink p-5 border border-ink/20 shadow-[5px_5px_0px_#111111] ${service.tiltClass} hover:rotate-0 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between pb-2">
                    <span className="font-mono text-[10px] font-bold bg-surface-container px-2 py-0.5">
                      {service.trackNumber}
                    </span>
                    <span className="material-symbols-outlined text-primary text-[22px]">
                      {service.icon}
                    </span>
                  </div>
                  <h3 className="font-display font-extrabold text-[19px] leading-[22px] uppercase text-ink mt-1.5">
                    {service.title}
                  </h3>
                  <p className="text-[14px] leading-[20px] text-ink-soft mt-2">
                    {service.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t-2 border-surface-container flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] font-bold text-secondary whitespace-nowrap">
                    {service.metric}
                  </span>
                  <button
                    type="button"
                    onClick={() => onEnquireTrack(service.inquiryOption)}
                    className="font-mono text-[11px] text-primary font-bold hover:underline cursor-pointer whitespace-nowrap"
                  >
                    ENQUIRE ↗
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
