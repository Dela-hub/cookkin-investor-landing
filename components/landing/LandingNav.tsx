export default function LandingNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--landing-border)] bg-[var(--landing-bg)]/90 backdrop-blur">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF2E7A] text-white text-sm">🍳</span>
          <span className="font-semibold text-lg tracking-tight">Cookkin</span>
        </div>

        <div className="hidden md:flex items-center gap-7 text-sm text-gray-600">
          <button type="button" className="hover:text-gray-900 transition-colors">Features</button>
          <button type="button" className="hover:text-gray-900 transition-colors">How it works</button>
          <button type="button" className="hover:text-gray-900 transition-colors">FAQ</button>
        </div>

        <div className="flex items-center gap-2">
          <button type="button" className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
            Sign in
          </button>
          <button
            type="button"
            className="px-4 py-2 rounded-lg bg-[#FF2E7A] text-white text-sm font-semibold hover:bg-[#e3266d] transition-colors"
          >
            Start preserving
          </button>
        </div>
      </nav>
    </header>
  )
}
