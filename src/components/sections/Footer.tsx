export const Footer = () => (
  <footer className="border-t border-[var(--gold)]/10 px-6 md:px-14 py-16 flex flex-col md:flex-row items-center justify-between gap-6 mt-16 text-center md:text-left">
    <div className="font-cinzel-dec text-xl text-[var(--gold)] tracking-[0.1em] flex items-center gap-2">
      ASTROLOGICAL
    </div>
    <p className="font-poppins text-sm text-[var(--cream-dim)]/40 italic">© 2026 Astrological Platform · Rooted in tradition, built for today</p>
    <div className="flex gap-5">
      {['සිංහල', 'தமிழ்', 'English'].map(lang => (
        <a key={lang} href="#" className="font-cinzel text-[0.6rem] tracking-[0.2em] uppercase text-[var(--cream-dim)]/50 no-underline transition-all hover:text-[var(--gold)] hover:opacity-100">{lang}</a>
      ))}
    </div>
  </footer>
);
