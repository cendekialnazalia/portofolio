import { useState } from 'react';

interface HeaderProps {
  activeSection: string;
}

const NAV_ITEMS = [
  { id: 'hello', label: 'About', href: '#hello' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'achievements', label: 'Achievements', href: '#achievements' },
  { id: 'journey', label: 'Journey', href: '#journey' },
];

export function Header({ activeSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/92 backdrop-blur-md shadow-[0_4px_16px_rgba(17,17,17,0.06)] border-b border-ink/10">
      <div className="h-20 max-w-[1320px] mx-auto px-4 md:px-6 lg:px-10 flex items-center justify-between gap-4">
        {/* Brand Lockup */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <span className="bg-ink text-surface px-2.5 py-1 font-display font-black text-[18px] leading-[22px] uppercase tracking-wider transform -rotate-1 group-hover:rotate-0 transition-transform shadow-[2px_2px_0px_#dd3124] whitespace-nowrap">
            CENDEKIA
          </span>
          <span className="hidden sm:inline-block font-mono text-[11px] font-bold tracking-[0.12em] text-secondary uppercase bg-tape-strip px-1.5 py-0.5 whitespace-nowrap">
            DOC.REF_2025
          </span>
        </a>

        {/* Desktop Nav */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.12em] uppercase"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`px-2.5 py-1.5 transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  isActive
                    ? 'bg-primary text-on-primary shadow-[2px_2px_0px_#111111]'
                    : 'text-ink hover:bg-surface-container hover:shadow-[2px_2px_0px_#111111]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 bg-primary text-on-primary font-mono text-[11px] font-bold tracking-[0.12em] uppercase px-3.5 py-2 shadow-[4px_4px_0px_#111111] hover:shadow-[6px_6px_0px_#111111] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Say hello
          </a>

          <a
            href="#hello"
            aria-label="Jump to profile bio"
            className="hidden sm:flex w-8 h-8 rounded-full bg-primary items-center justify-center shrink-0 shadow-[2px_2px_0px_#111111] hover:-translate-y-0.5 transition-transform focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </a>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden w-10 h-10 bg-pure-white text-ink border border-ink/20 shadow-[3px_3px_0px_#111111] flex items-center justify-center shrink-0 hover:bg-sticky-yellow transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface border-t-2 border-ink px-4 py-4 shadow-[0_10px_24px_rgba(17,17,17,0.12)]">
          <nav className="grid grid-cols-2 gap-2 font-mono text-[11px] font-bold tracking-[0.12em] uppercase">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 text-center transition-all ${
                    isActive
                      ? 'bg-primary text-on-primary shadow-[2px_2px_0px_#111111]'
                      : 'bg-pure-white text-ink border border-ink/15 shadow-[2px_2px_0px_#111111]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
