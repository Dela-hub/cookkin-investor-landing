import Image from 'next/image'
import StoreBadges from './StoreBadges'

export default function LandingNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--landing-border)] bg-[var(--landing-bg)]/90 backdrop-blur">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center overflow-hidden">
            <Image
              src="/images/potlogo.png"
              alt="CookKin logo"
              width={32}
              height={32}
              className="w-full h-full object-contain"
            />
          </span>
          <span className="font-semibold text-lg tracking-tight text-[#381C08]">CookKin</span>
        </div>

        <div className="hidden md:flex items-center gap-7 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#how" className="hover:text-gray-900 transition-colors">How it works</a>
          <a href="#faq" className="hover:text-gray-900 transition-colors">FAQ</a>
        </div>

        <div className="hidden md:flex items-center">
          <StoreBadges compact />
        </div>
      </nav>
    </header>
  )
}
