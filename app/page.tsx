import LandingNav from "@/components/landing/LandingNav";
import Hero from "@/components/landing/Hero";
import FeatureBand from "@/components/landing/FeatureBand";
import Faq from "@/components/landing/Faq";
import Image from "next/image";
import StoreBadges from "@/components/landing/StoreBadges";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--landing-bg)] text-gray-900">
      <LandingNav />
      <main>
        <Hero />

        <section id="features" className="border-t border-[var(--landing-border)] bg-[var(--landing-surface)]">
          <FeatureBand
            eyebrow="Capture"
            title="Record their voice, hands, and little details"
            description="From ingredient swaps to family sayings, preserve the parts that make a recipe feel like home."
            ctaLabel="Download on the App Store"
            ctaHref="https://apps.apple.com/my/app/cookkin/id6759157109"
            imageSrc="/images/cookking_hero.png"
            imageAlt="Family cooking memory in Cookkin"
          />
          <FeatureBand
            eyebrow="Cook together"
            title="Guide every step with chapters and story context"
            description="Mark key moments, add notes, and help family cook with confidence even when you are not in the kitchen."
            ctaLabel="Get it on Google Play"
            ctaHref="https://play.google.com/store/apps/details?id=com.cookkin.app&hl=en_GB"
            imageSrc="/images/signup_signin.png"
            imageAlt="Cookkin guided flow on mobile"
            reverse
          />
          <FeatureBand
            eyebrow="Share gently"
            title="Keep memories close with private family spaces"
            description="Invite only the people who matter. No algorithm, no noise, just your family’s living food archive."
            ctaLabel="Download on the App Store"
            ctaHref="https://apps.apple.com/my/app/cookkin/id6759157109"
            imageSrc="/images/cookking_hero.png"
            imageAlt="Private family recipe space"
          />
        </section>

        <section id="how" className="landing-section border-t border-[var(--landing-border)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-gray-400 font-light mb-4">
                How it works
              </p>
              <h2 className="font-serif text-[2rem] sm:text-4xl lg:text-[3rem] font-medium tracking-tight text-gray-900">
                A simple flow your whole family can use
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {[
                {
                  step: '1',
                  title: 'Create your family space',
                  desc: 'Start a private home for your recipes and invite the people who should be there.',
                },
                {
                  step: '2',
                  title: 'Capture a memory',
                  desc: 'Record, add ingredients, and keep the voice and story behind every dish.',
                },
                {
                  step: '3',
                  title: 'Cook and pass it down',
                  desc: 'Use guided playback, comments, and sharing so each memory keeps living.',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl bg-[var(--landing-surface)] border border-[var(--landing-border)] p-6"
                >
                  <div className="w-9 h-9 rounded-xl border border-[var(--landing-border)] text-[#B04123] text-lg font-semibold flex items-center justify-center">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mt-4">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="landing-section border-t border-[var(--landing-border)] bg-[var(--landing-surface)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-gray-400 font-light mb-4">
                Built for families
              </p>
              <h2 className="font-serif text-[2rem] sm:text-4xl lg:text-[3rem] font-medium tracking-tight text-gray-900">
                Trust and privacy first
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed">
                Cookkin is designed for family memory keeping, not public feeds.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-5 mt-10">
              {[
                {
                  title: 'Private by default',
                  desc: 'Every family space starts private and stays under your control.',
                },
                {
                  title: 'Invite-only access',
                  desc: 'Only invited family members can join and view your kitchen memories.',
                },
                {
                  title: 'Ownership stays with you',
                  desc: 'Your recipes, stories, and recordings belong to your family.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-[var(--background)] border border-[var(--landing-border)] p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Faq />

        <section id="download" className="landing-section border-t border-[var(--landing-border)] bg-[var(--background)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-serif text-[2rem] sm:text-4xl lg:text-[3rem] font-medium tracking-tight text-gray-900">
              Keep your family’s recipes alive
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Start your private kitchen archive today and preserve the meals that shaped your home.
            </p>
            <div className="mt-8">
              <StoreBadges />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--landing-border)] py-8 bg-[var(--background)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center overflow-hidden">
              <Image
                src="/images/potlogo.png"
                alt="CookKin logo"
                width={28}
                height={28}
                className="w-full h-full object-contain"
              />
            </span>
            <span className="font-semibold text-sm text-[#381C08]">CookKin</span>
            <span className="hidden sm:inline text-sm text-gray-400 ml-1">Sharing memories, one recipe at a time.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
