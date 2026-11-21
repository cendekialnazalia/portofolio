export function Footer() {
  return (
    <footer className="w-full bg-surface-container-high py-14 text-on-surface relative border-t border-ink/15">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-ink/15">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="bg-ink text-surface px-2.5 py-1 font-display font-black text-[18px] uppercase tracking-wider">
                CENDEKIA L. NAZALIA
              </div>
              <span className="font-mono text-[10px] font-bold bg-sticky-yellow text-ink px-2 py-0.5 transform rotate-2 shadow-[1px_1px_0px_#111111]">
                AUTHENTIC PORTFOLIO
              </span>
            </div>
            <p className="text-[14px] leading-[20px] text-on-surface-variant max-w-md">
              PMO • IT Edu Tech Creator • Founder of Kidilent • Keynote Speaker &amp; Professional
              MC. Engineered with physical scrap craft, tape, and neo-brutalist grids.
            </p>
          </div>

          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap items-center gap-5 font-mono text-[11px] font-bold tracking-[0.1em] uppercase"
          >
            <a
              href="#hello"
              className="text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap"
            >
              Dossier
            </a>
            <a
              href="#services"
              className="text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap"
            >
              Dispatch
            </a>
          </nav>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono text-[11px] font-bold text-secondary">
          <p>© 2025 Cendekia Luthfieta Nazalia. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-tertiary" />
            <span>SCRAPBOOK DISPATCH ARCHIVE NO. 042</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
