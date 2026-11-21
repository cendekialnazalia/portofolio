import { useEffect, useState } from 'react';
import { PROJECTS, type ProjectDossier, type ProjectPolaroid } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface ProjectsSectionProps {
  onEnquireTrack: (track: string) => void;
}

export function ProjectsSection({ onEnquireTrack }: ProjectsSectionProps) {
  const [activeCaseFile, setActiveCaseFile] = useState<ProjectDossier | null>(null);
  const [lightboxPolaroid, setLightboxPolaroid] = useState<ProjectPolaroid | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveCaseFile(null);
        setLightboxPolaroid(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getCtaClasses = (style: ProjectDossier['ctaStyle']) => {
    if (style === 'dark-red') {
      return 'bg-ink text-surface shadow-[4px_4px_0px_#dd3124] hover:shadow-[6px_6px_0px_#dd3124]';
    }
    if (style === 'red') {
      return 'bg-primary text-on-primary shadow-[4px_4px_0px_#111111] hover:shadow-[6px_6px_0px_#111111]';
    }
    return 'bg-ink text-surface shadow-[4px_4px_0px_#111111] hover:shadow-[6px_6px_0px_#111111]';
  };

  return (
    <section id="projects" className="w-full py-16 bg-surface paper-grid-bg relative">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 gap-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="bg-ink text-surface font-mono text-[11px] font-bold tracking-[0.12em] px-2 py-0.5 shadow-[2px_2px_0px_#dd3124]">
                ARCHIVE 03
              </span>
              <span className="font-mono text-[11px] font-bold text-secondary uppercase">
                DELIVERED INITIATIVES
              </span>
            </div>
            <h2 className="font-display font-black text-[52px] sm:text-[72px] leading-[0.95] tracking-[-0.015em] uppercase text-ink mt-2">
              PROJECTS
            </h2>
          </div>

          <div className="flex items-center gap-1.5 font-hand text-[26px] text-primary font-bold">
            <span>things I&apos;ve crafted &amp; scaled ✦</span>
            <span className="material-symbols-outlined text-[20px]">arrow_downward</span>
          </div>
        </div>

        {/* Stacked Manila Folders */}
        <div className="space-y-14">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className={`${project.folderBg} border-2 border-ink shadow-[8px_8px_0px_#111111] relative p-5 sm:p-8`}
            >
              {/* Manila Folder Tab Top */}
              <div
                className={`absolute -top-8 -left-[2px] ${project.folderBg} border-2 border-b-0 border-ink px-4 py-1.5 flex items-center gap-2`}
              >
                <span className={`w-2.5 h-2.5 rounded-full ${project.dotColor}`} />
                <span className="font-mono text-[11px] font-bold tracking-[0.1em] text-ink uppercase whitespace-nowrap">
                  {project.tabLabel}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-1">
                {/* Text Column */}
                <div
                  className={`lg:col-span-6 space-y-4 ${
                    project.layoutReversed ? 'order-1 lg:order-2' : ''
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    {project.badges.map((badge) => (
                      <span
                        key={badge.label}
                        className={`font-mono text-[10px] font-bold px-2 py-0.5 whitespace-nowrap ${badge.className}`}
                      >
                        {badge.label}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-display font-black text-[32px] sm:text-[42px] leading-[1.02] tracking-[-0.01em] uppercase text-ink">
                    {project.title}
                  </h3>

                  <p className="text-[15px] leading-[23px] text-ink-soft">{project.summary}</p>

                  {/* Feature Bullet Points */}
                  <div className="space-y-2 pt-1">
                    {project.bullets.map((bullet) => (
                      <div key={bullet.bold} className="flex items-start gap-2 text-[14px] text-ink">
                        <span className={`${project.bulletColor} font-bold mt-0.5`}>✸</span>
                        <span>
                          <strong className="font-bold">{bullet.bold}</strong> {bullet.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={() => {
                        if (project.ctaAction === 'contact' && project.contactTrack) {
                          onEnquireTrack(project.contactTrack);
                        } else {
                          setActiveCaseFile(project);
                        }
                      }}
                      className={`inline-flex items-center gap-1.5 font-mono text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-2.5 hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer whitespace-nowrap ${getCtaClasses(
                        project.ctaStyle
                      )}`}
                    >
                      {project.ctaLabel}
                    </button>

                    {project.ctaAction === 'contact' && (
                      <button
                        type="button"
                        onClick={() => setActiveCaseFile(project)}
                        className="font-mono text-[11px] font-bold uppercase text-ink underline underline-offset-4 hover:text-primary transition-colors cursor-pointer whitespace-nowrap"
                      >
                        Inspect Stage Dossier
                      </button>
                    )}

                    {project.statusText && (
                      <span className="font-mono text-[11px] font-bold text-secondary">
                        {project.statusText}
                      </span>
                    )}
                  </div>
                </div>

                {/* Polaroid Visuals Column */}
                <div
                  className={`lg:col-span-6 relative flex flex-col sm:flex-row items-center justify-center gap-5 ${
                    project.layoutReversed ? 'order-2 lg:order-1' : ''
                  }`}
                >
                  {project.polaroids.map((polaroid) => {
                    const isSingle = project.polaroids.length === 1;
                    return (
                      <button
                        key={polaroid.captionLeft}
                        type="button"
                        onClick={() => setLightboxPolaroid(polaroid)}
                        className={`bg-pure-white p-3 border border-ink/20 ${polaroid.shadowClass} ${
                          polaroid.tiltClass
                        } hover:rotate-0 hover:scale-[1.02] transition-all duration-200 relative text-left cursor-zoom-in group ${
                          isSingle ? 'w-full max-w-md' : 'w-full sm:w-64'
                        }`}
                      >
                        <div
                          aria-hidden="true"
                          className={`w-20 h-5 bg-tape-strip absolute -top-3 ${polaroid.tapePosition} z-10 shadow-sm pointer-events-none`}
                        />
                        <ResilientImage
                          src={polaroid.src}
                          alt={polaroid.alt}
                          fallbackLabel={polaroid.captionLeft}
                          className={`w-full ${
                            isSingle ? 'h-64 sm:h-72' : 'h-52'
                          } object-cover bg-surface-container block`}
                        />
                        <div className="pt-2.5 font-mono text-[10px] font-bold text-ink uppercase flex items-center justify-between gap-2">
                          <span className="truncate">{polaroid.captionLeft}</span>
                          <span className="shrink-0 text-secondary">{polaroid.captionRight}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case File Dossier Modal */}
      {activeCaseFile && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-file-title"
          className="fixed inset-0 z-50 bg-ink/75 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveCaseFile(null)}
        >
          <div
            className="bg-surface border-2 border-ink shadow-[10px_10px_0px_#dd3124] max-w-2xl w-full max-h-[88vh] overflow-y-auto p-6 sm:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-4 border-b-2 border-ink">
              <div>
                <span className="font-mono text-[10px] font-bold bg-primary text-on-primary px-2 py-0.5 uppercase">
                  {activeCaseFile.tabLabel}
                </span>
                <h3
                  id="case-file-title"
                  className="font-display font-black text-[28px] sm:text-[34px] leading-tight uppercase text-ink mt-2"
                >
                  {activeCaseFile.title}
                </h3>
                <p className="font-mono text-[11px] font-bold text-secondary mt-1">
                  {activeCaseFile.caseFileDetails.role} · {activeCaseFile.caseFileDetails.timeline}
                </p>
              </div>
              <button
                type="button"
                aria-label="Close case file"
                onClick={() => setActiveCaseFile(null)}
                className="w-9 h-9 bg-ink text-surface flex items-center justify-center shadow-[3px_3px_0px_#dd3124] hover:bg-primary transition-colors shrink-0 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Impact Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-5">
              {activeCaseFile.caseFileDetails.impactMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="bg-pure-white border border-ink/20 p-3 shadow-[3px_3px_0px_#111111]"
                >
                  <div className="font-display font-black text-[24px] leading-none text-primary tabular-nums">
                    {metric.value}
                  </div>
                  <div className="font-mono text-[10px] font-bold uppercase text-secondary mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Deliverables */}
            <div className="space-y-2.5">
              <div className="font-mono text-[11px] font-bold uppercase text-ink">
                KEY DELIVERABLES &amp; OUTCOMES
              </div>
              {activeCaseFile.caseFileDetails.deliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 text-[15px] leading-snug text-ink-soft"
                >
                  <span className="text-primary font-bold">✸</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Sticky Note Quote */}
            <div className="mt-5 bg-sticky-yellow border border-ink/20 p-4 shadow-[4px_4px_0px_#111111] -rotate-0.5">
              <p className="font-display font-bold text-[17px] leading-snug text-ink">
                &ldquo;{activeCaseFile.caseFileDetails.highlightQuote}&rdquo;
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setActiveCaseFile(null)}
                className="px-4 py-2 font-mono text-[11px] font-bold uppercase border-2 border-ink bg-pure-white text-ink shadow-[3px_3px_0px_#111111] hover:bg-surface-container cursor-pointer"
              >
                Close Dossier
              </button>
              <button
                type="button"
                onClick={() => {
                  const track =
                    activeCaseFile.category === 'pmo'
                      ? 'Project Management & Agile Advisory'
                      : activeCaseFile.category === 'speaking'
                        ? 'Keynote Speaking & MC Moderation'
                        : 'Kidilent Coding Workshop & Curriculum';
                  setActiveCaseFile(null);
                  onEnquireTrack(track);
                }}
                className="px-4 py-2 font-mono text-[11px] font-bold uppercase bg-primary text-on-primary shadow-[3px_3px_0px_#111111] hover:-translate-y-0.5 transition-transform cursor-pointer"
              >
                Discuss Similar Project ↗
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Polaroid Lightbox */}
      {lightboxPolaroid && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxPolaroid.captionLeft}
          className="fixed inset-0 z-50 bg-ink/85 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setLightboxPolaroid(null)}
        >
          <div
            className="bg-pure-white p-4 sm:p-5 border-2 border-ink shadow-[10px_10px_0px_#dd3124] max-w-2xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close photo preview"
              onClick={() => setLightboxPolaroid(null)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-ink text-surface flex items-center justify-center shadow-[3px_3px_0px_#dd3124] hover:bg-primary transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
            <ResilientImage
              src={lightboxPolaroid.src}
              alt={lightboxPolaroid.alt}
              fallbackLabel={lightboxPolaroid.captionLeft}
              className="w-full max-h-[68vh] object-cover bg-surface-container block"
            />
            <div className="pt-3 flex items-center justify-between font-mono text-[11px] font-bold text-ink uppercase">
              <span>{lightboxPolaroid.captionLeft}</span>
              <span className="text-secondary">{lightboxPolaroid.captionRight}</span>
            </div>
            <p className="text-[14px] text-ink-soft mt-1.5">{lightboxPolaroid.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}
