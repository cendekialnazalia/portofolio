import { useState } from 'react';
import { TESTIMONIALS } from '../data/portfolioData';

export function TestimonialSection() {
  const [memoIndex, setMemoIndex] = useState(0);
  const currentMemo = TESTIMONIALS[memoIndex];

  return (
    <section id="testimonial" className="w-full py-14 bg-surface paper-grid-bg relative">
      <div className="max-w-[820px] mx-auto px-4 md:px-6 relative">
        {/* Translucent Washi Tape Strip at Top Center */}
        <div
          aria-hidden="true"
          className="w-36 h-6 bg-tape-strip mx-auto -mb-3 relative z-20 shadow-sm -rotate-1 pointer-events-none"
        />

        {/* Yellow Sticky Note Container */}
        <div className="bg-sticky-yellow text-ink p-6 sm:p-10 border-2 border-ink shadow-[8px_8px_0px_#111111] -rotate-1 relative">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-ink/20">
            <span className="font-mono text-[11px] font-bold tracking-[0.12em] uppercase text-ink">
              {currentMemo.memoNumber}
            </span>
            <span className="font-hand text-[22px] text-primary font-bold leading-none">
              {currentMemo.noteTag}
            </span>
          </div>

          <blockquote className="mt-5 font-display font-black text-[22px] sm:text-[26px] leading-[1.2] tracking-[-0.01em] uppercase text-ink">
            {currentMemo.quote}
          </blockquote>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-ink/20">
            <div>
              <div className="font-display font-extrabold text-[19px] text-ink leading-tight">
                {currentMemo.author}
              </div>
              <div className="font-mono text-[11px] font-bold text-ink/75 mt-0.5">
                {currentMemo.role}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Memo Switcher Controls */}
              <div className="flex items-center gap-1.5">
                {TESTIMONIALS.map((memo, idx) => (
                  <button
                    key={memo.id}
                    type="button"
                    aria-label={`View ${memo.memoNumber}`}
                    onClick={() => setMemoIndex(idx)}
                    className={`w-7 h-7 font-mono text-[10px] font-bold border border-ink transition-all cursor-pointer ${
                      idx === memoIndex
                        ? 'bg-ink text-surface shadow-[2px_2px_0px_#dd3124]'
                        : 'bg-pure-white text-ink hover:bg-surface-container'
                    }`}
                  >
                    0{idx + 1}
                  </button>
                ))}
              </div>

              <div className="w-12 h-12 rounded-full border-2 border-ink bg-surface flex items-center justify-center font-display font-black text-[15px] text-primary shadow-[2px_2px_0px_#111111] shrink-0 tabular-nums">
                {currentMemo.stamp}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
