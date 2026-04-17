export default function LandingNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--landing-border)] bg-[color:rgba(252,252,253,0.9)] backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent)] font-semibold text-white">
            C
          </span>
          <span className="text-lg font-semibold tracking-tight text-slate-900">Cookkin</span>
        </a>

        <div className="hidden items-center gap-7 text-sm text-slate-600 md:flex">
          <a href="#features" className="transition-colors hover:text-slate-900">
            Features
          </a>
          <a href="#how" className="transition-colors hover:text-slate-900">
            How it works
          </a>
          <a href="#faq" className="transition-colors hover:text-slate-900">
            FAQ
          </a>
        </div>

        <a
          href="#preview"
          className="inline-flex items-center rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-strong)]"
        >
          Investor preview
        </a>
      </nav>
    </header>
  );
}
