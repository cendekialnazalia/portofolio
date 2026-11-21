import { useEffect, useState } from 'react';
import { JOURNEY_VOLUMES, type JourneyVolume } from '../data/portfolioData';

export function JourneySection() {
  const [selectedVolume, setSelectedVolume] = useState<JourneyVolume | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedVolume(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="journey" className="w-full py-16 bg-surface-bright paper-grid-bg relative">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between pb-8 gap-3">
          <div>
            <span className="bg-ink text-surface font-mono text-[11px] font-bold tracking-[0.12em] px-2 py-0.5 shadow-[2px_2px_0px_#dd3124]">
              CHRONICLES
            </span>
            <h2 className="font-display font-black text-[48px] sm:text-[68px] leading-[0.95] tracking-[-0.015em] uppercase text-ink mt-2">
              THE JOURNEY SCRAPBOOK
            </h2>
          </div>

          <div className="font-hand text-[24px] text-primary font-bold">
            year-by-year archives ↘
          </div>
        </div>

        {/* Bookshelf Spread with Tilted Volumes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {JOURNEY_VOLUMES.map((volume) => (
            <button
              key={volume.id}
              type="button"
              onClick={() => setSelectedVolume(volume)}
              className={`bg-pure-white p-5 border border-ink/20 shadow-[6px_6px_0px_#111111] ${volume.tiltClass} hover:rotate-0 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#dd3124] transition-all duration-200 flex flex-col justify-between min-h-[340px] relative text-left cursor-pointer group`}
            >
              <div
                aria-hidden="true"
                className={`w-16 h-5 bg-tape-strip absolute -top-2.5 ${volume.tapeClass} z-10 shadow-sm pointer-events-none`}
              />

              <div>
                <div className="flex items-center justify-between gap-2 pb-2 border-b border-surface-container">
                  <span className="font-mono text-[11px] text-primary font-bold whitespace-nowrap">
                    {volume.vol}
                  </span>
                  <span className="font-mono text-[10px] font-bold text-secondary whitespace-nowrap">
                    {volume.status}
                  </span>
                </div>

                <h3 className="font-display font-black text-[36px] leading-none uppercase text-ink mt-4 tabular-nums">
                  {volume.year}
                </h3>

                <p className="font-display font-extrabold text-[18px] leading-tight text-ink mt-1.5">
                  {volume.headline}
                </p>

                <p className="text-[14px] leading-[20px] text-ink-soft mt-2">{volume.summary}</p>
              </div>

              <div className="pt-3 mt-4 border-t border-surface-container flex items-center justify-between gap-2">
                <span className="font-mono text-[11px] text-ink font-bold tabular-nums">
                  {volume.chaptersCount} CHAPTERS
                </span>
                <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-primary uppercase group-hover:translate-x-0.5 transition-transform">
                  <span>OPEN</span>
                  <span className="material-symbols-outlined text-[18px]">auto_stories</span>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Volume Chapter Reader Modal */}
      {selectedVolume && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="volume-modal-title"
          className="fixed inset-0 z-50 bg-ink/75 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedVolume(null)}
        >
          <div
            className="bg-surface border-2 border-ink shadow-[10px_10px_0px_#dd3124] max-w-xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-4 border-b-2 border-ink">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] font-bold bg-primary text-on-primary px-2 py-0.5">
                    {selectedVolume.vol}
                  </span>
                  <span className="font-mono text-[10px] font-bold bg-sticky-yellow text-ink px-2 py-0.5">
                    {selectedVolume.status}
                  </span>
                </div>
                <h3
                  id="volume-modal-title"
                  className="font-display font-black text-[34px] leading-none uppercase text-ink mt-2"
                >
                  {selectedVolume.year} — {selectedVolume.headline}
                </h3>
              </div>

              <button
                type="button"
                aria-label="Close scrapbook volume"
                onClick={() => setSelectedVolume(null)}
                className="w-9 h-9 bg-ink text-surface flex items-center justify-center shadow-[3px_3px_0px_#dd3124] hover:bg-primary transition-colors shrink-0 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <p className="text-[15px] leading-[22px] text-ink-soft mt-4">
              {selectedVolume.summary}
            </p>

            <div className="mt-5 space-y-3">
              <div className="font-mono text-[11px] font-bold uppercase text-secondary">
                FEATURED ARCHIVE ENTRIES
              </div>
              {selectedVolume.chapters.map((chapter, idx) => (
                <div
                  key={chapter.title}
                  className="bg-pure-white p-4 border border-ink/20 shadow-[4px_4px_0px_#111111]"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] font-bold text-primary">
                      CH. 0{idx + 1} · {chapter.month}
                    </span>
                  </div>
                  <h4 className="font-display font-extrabold text-[19px] uppercase text-ink mt-1">
                    {chapter.title}
                  </h4>
                  <p className="text-[14px] leading-[20px] text-ink-soft mt-1">{chapter.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedVolume(null)}
                className="px-5 py-2.5 bg-ink text-surface font-mono text-[11px] font-bold uppercase shadow-[3px_3px_0px_#dd3124] hover:bg-primary transition-colors cursor-pointer"
              >
                Return to Bookshelf
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
