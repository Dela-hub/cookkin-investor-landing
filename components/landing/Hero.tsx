import StoreBadges from './StoreBadges'

export default function Hero() {
  return (
    <section className="landing-section pb-14 sm:pb-20 landing-mist overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-12 items-center">
        <div className="animate-fade-up">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-gray-400 font-light mb-5">
            Preserve what matters
          </p>
          <h1 className="font-serif text-[2.2rem] sm:text-5xl lg:text-[4rem] font-medium leading-[1.08] tracking-tight text-gray-900">
            Where family recipes
            <br />
            become forever memories
          </h1>
          <p className="text-base sm:text-xl text-gray-600 mt-5 max-w-xl leading-relaxed">
            Capture the stories behind your favorite meals and keep them safe for the next generation.
          </p>
          <div className="mt-8">
            <StoreBadges />
          </div>
          <a
            href="#how"
            className="mt-6 inline-flex px-6 py-3 rounded-xl border border-[var(--landing-border)] bg-[var(--landing-surface)] text-gray-700 font-medium hover:bg-[var(--background)] transition-colors min-h-[48px] items-center"
          >
            See how it works
          </a>
        </div>

        <div className="relative animate-fade-up-delay-2">
          <div className="relative mx-auto max-w-[480px] rounded-[2rem] border border-[var(--landing-border)] bg-[#F3E9DE] p-4 shadow-sm">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-[1.4rem]"
              poster="/images/cookking_hero.png"
            >
              <source src="/images/cookkin-landing.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
