export default function Hero() {
  return (
    <section className="landing-section landing-mist overflow-hidden pb-14 sm:pb-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="animate-fade-up">
          <p className="section-kicker">Preserve what matters</p>
          <h1 className="font-serif text-[2.35rem] leading-[1.04] tracking-tight text-slate-900 sm:text-5xl lg:text-[4.2rem]">
            Where family recipes become lasting memories
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-xl">
            Cookkin captures the story behind a meal so knowledge, voice, and family context can
            live beyond the kitchen.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#features"
              className="inline-flex min-h-12 items-center rounded-2xl bg-[var(--accent)] px-6 py-3 font-semibold text-white transition-colors hover:bg-[var(--accent-strong)]"
            >
              Explore the story
            </a>
            <a
              href="#how"
              className="inline-flex min-h-12 items-center rounded-2xl border border-slate-200 bg-white px-6 py-3 font-medium text-slate-700 transition-colors hover:bg-slate-50"
            >
              See how it works
            </a>
          </div>
        </div>

        <div className="relative animate-fade-up-delay-2">
          <div className="relative mx-auto max-w-[480px] rounded-[2rem] border border-white/60 bg-white/70 p-3 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded-[1.4rem]"
              poster="/images/cookking_hero.png"
            >
              <source src="/images/cookkin-landing.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
