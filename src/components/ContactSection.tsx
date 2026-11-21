import { type FormEvent, useEffect, useState } from 'react';
import { INQUIRY_TRACK_OPTIONS } from '../data/portfolioData';

interface ContactSectionProps {
  selectedTrack: string;
  onTrackChange: (track: string) => void;
}

export function ContactSection({ selectedTrack, onTrackChange }: ContactSectionProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [brief, setBrief] = useState('');
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (selectedTrack) {
      setSubmittedRef(null);
    }
  }, [selectedTrack]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const randomRef = `SLIP-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedRef(randomRef);
  };

  const handleReset = () => {
    setFullName('');
    setEmail('');
    setBrief('');
    setSubmittedRef(null);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('cendekialuthfieta@gmail.com');
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2400);
    } catch {
      // Fallback gracefully if clipboard API is unavailable
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-ink text-surface py-16 sm:py-20 relative shadow-2xl overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Headline & Manifesto */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.12em] uppercase text-primary">
              <span className="w-2.5 h-2.5 bg-primary" />
              <span>DIRECT DISPATCH CHANNELS</span>
            </div>

            <h2 className="font-display font-black text-[52px] sm:text-[72px] leading-[0.94] tracking-[-0.015em] uppercase text-surface">
              LET&apos;S CONNECT ✦
            </h2>

            <p className="text-[19px] leading-[26px] font-semibold text-secondary-fixed-dim">
              Collab, speaking, mentoring, or just dropping by to say hi :)
            </p>

            <p className="text-[15px] leading-[24px] text-surface/80 max-w-xl">
              I am currently considering speaking gigs for Q3/Q4 2025, bespoke coding workshops for
              international schools, and advisory engagements for mission-driven education startups.
            </p>

            {/* Tactile 3D Offset Contact Badges */}
            <div className="flex flex-wrap gap-3 pt-3">
              <a
                href="mailto:cendekialuthfieta@gmail.com"
                className="inline-flex items-center gap-2 bg-surface text-ink px-4 py-2.5 font-mono text-[11px] font-bold tracking-[0.1em] uppercase shadow-[4px_4px_0px_#dd3124] hover:shadow-[6px_6px_0px_#dd3124] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all whitespace-nowrap"
              >
                <span className="material-symbols-outlined text-[16px]">mail</span>
                <span>EMAIL TRANSMISSION</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-surface text-ink px-4 py-2.5 font-mono text-[11px] font-bold tracking-[0.1em] uppercase shadow-[4px_4px_0px_#dd3124] hover:shadow-[6px_6px_0px_#dd3124] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all whitespace-nowrap"
              >
                <span className="material-symbols-outlined text-[16px]">link</span>
                <span>LINKEDIN DOSSIER</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-sticky-yellow text-ink px-4 py-2.5 font-mono text-[11px] font-bold tracking-[0.1em] uppercase shadow-[4px_4px_0px_#dd3124] hover:shadow-[6px_6px_0px_#dd3124] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all whitespace-nowrap"
              >
                <span className="material-symbols-outlined text-[16px]">photo_camera</span>
                <span>INSTAGRAM FEED</span>
              </a>
            </div>

            {/* Direct Email Copy Utility */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 font-mono text-[11px] text-surface/75 hover:text-sticky-yellow transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[15px]">
                  {copiedEmail ? 'check_circle' : 'content_copy'}
                </span>
                <span>
                  {copiedEmail
                    ? 'Copied cendekialuthfieta@gmail.com to clipboard'
                    : 'cendekialuthfieta@gmail.com (click to copy)'}
                </span>
              </button>
            </div>
          </div>

          {/* Right: Communication Slip Form */}
          <div className="lg:col-span-6 bg-pure-white text-ink p-6 sm:p-7 shadow-[8px_8px_0px_#dd3124] border-2 border-ink relative lg:rotate-1">
            <div
              aria-hidden="true"
              className="w-24 h-5 bg-tape-strip absolute -top-3 right-1/3 -rotate-3 z-10 shadow-sm pointer-events-none"
            />

            <div className="flex items-center justify-between gap-2 pb-3 border-b border-surface-container">
              <span className="font-display font-extrabold text-[19px] uppercase text-ink">
                COMMUNICATION SLIP
              </span>
              <span className="font-mono text-[11px] font-bold text-primary whitespace-nowrap">
                FORM // REF. 042
              </span>
            </div>

            {submittedRef ? (
              <div className="py-8 space-y-4">
                <div className="inline-flex items-center gap-2 bg-sticky-yellow border-2 border-ink px-3 py-1.5 font-mono text-[11px] font-bold uppercase shadow-[3px_3px_0px_#111111] -rotate-1">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">
                    verified
                  </span>
                  <span>TRANSMISSION LOGGED // {submittedRef}</span>
                </div>

                <h3 className="font-display font-black text-[30px] leading-tight uppercase text-ink">
                  DISPATCH RECEIVED, {fullName.toUpperCase()}!
                </h3>

                <p className="text-[15px] leading-[22px] text-ink-soft">
                  Your brief under <strong className="text-ink">{selectedTrack}</strong> has been
                  filed. Cendekia will reply directly to{' '}
                  <strong className="text-ink">{email}</strong> within 1–2 business days.
                </p>

                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-2 bg-ink text-surface py-2.5 px-5 font-mono text-[11px] font-bold uppercase shadow-[4px_4px_0px_#dd3124] hover:bg-primary transition-colors cursor-pointer"
                >
                  Send Another Slip
                </button>
              </div>
            ) : (
              <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-[11px] font-bold uppercase text-ink mb-1"
                  >
                    Your Full Name / Entity
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g., Sarah Jenkins (Google Edu)"
                    className="w-full p-2.5 bg-surface-container text-[15px] text-ink border border-ink/20 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-[11px] font-bold uppercase text-ink mb-1"
                  >
                    Electronic Mail Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@organization.com"
                    className="w-full p-2.5 bg-surface-container text-[15px] text-ink border border-ink/20 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-track"
                    className="block font-mono text-[11px] font-bold uppercase text-ink mb-1"
                  >
                    Inquiry Track
                  </label>
                  <select
                    id="contact-track"
                    value={selectedTrack}
                    onChange={(e) => onTrackChange(e.target.value)}
                    className="w-full p-2.5 bg-surface-container text-[15px] text-ink border border-ink/20 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                  >
                    {INQUIRY_TRACK_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-brief"
                    className="block font-mono text-[11px] font-bold uppercase text-ink mb-1"
                  >
                    Project Memo / Brief
                  </label>
                  <textarea
                    id="contact-brief"
                    rows={3}
                    required
                    value={brief}
                    onChange={(e) => setBrief(e.target.value)}
                    placeholder="Tell me about your audience, event dates, or project scope..."
                    className="w-full p-2.5 bg-surface-container text-[15px] text-ink border border-ink/20 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-ink text-surface py-3 px-4 font-mono text-[11px] font-bold tracking-[0.12em] uppercase shadow-[4px_4px_0px_#dd3124] hover:bg-primary hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  SEND TRANSMISSION SLIP ↗
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
