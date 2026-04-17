import LandingNav from "@/components/landing/LandingNav";
import Hero from "@/components/landing/Hero";
import FeatureBand from "@/components/landing/FeatureBand";
import Faq from "@/components/landing/Faq";

const steps = [
  {
    step: "1",
    title: "Create a private family space",
    description:
      "Start a shared home for recipes, memories, and the people who should have access.",
  },
  {
    step: "2",
    title: "Capture the story behind the dish",
    description:
      "Record voice, video, notes, and ingredients so the memory survives beyond the recipe card.",
  },
  {
    step: "3",
    title: "Cook it again with confidence",
    description:
      "Use guided playback and story context to help the next generation recreate the meal.",
  },
];

const trustItems = [
  {
    title: "Private by default",
    description:
      "Family spaces are designed as controlled memory archives rather than public feeds.",
  },
  {
    title: "Invite-only access",
    description:
      "The people who see the recipes and stories are the people the family chooses.",
  },
  {
    title: "Memory, not noise",
    description:
      "The experience centers preservation and closeness instead of algorithmic distribution.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--landing-bg)] text-slate-900">
      <LandingNav />
      <main>
        <Hero />

        <section
          id="features"
          className="border-t border-[var(--landing-border)] bg-[var(--landing-surface)]"
        >
          <FeatureBand
            eyebrow="Capture"
            title="Record voice, hands, context, and the tiny details that recipes lose"
            description="Cookkin preserves the parts of cooking knowledge that never fit on an index card: ingredient swaps, family sayings, pacing, and intuition."
            ctaLabel="See the flow"
            ctaHref="#how"
            imageSrc="/images/cookking_hero.png"
            imageAlt="Cookkin family cooking preview"
          />
          <FeatureBand
            eyebrow="Guide"
            title="Turn memory into step-by-step confidence for the next generation"
            description="Moments can be organized into guided playback so family members can learn from the story and not just the ingredients."
            ctaLabel="Why it matters"
            ctaHref="#preview"
            imageSrc="/images/signup_signin.png"
            imageAlt="Cookkin product flow preview"
            reverse
          />
          <FeatureBand
            eyebrow="Share gently"
            title="Keep treasured recipes in a private space instead of a public social feed"
            description="The product is designed around family trust, continuity, and ownership rather than broad public exposure."
            ctaLabel="Read the FAQ"
            ctaHref="#faq"
            imageSrc="/images/cookking_hero.png"
            imageAlt="Private family recipe archive preview"
          />
        </section>

        <section id="how" className="landing-section border-t border-[var(--landing-border)]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="section-kicker">How it works</p>
              <h2 className="section-title">
                A simple flow that turns family cooking knowledge into something durable
              </h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {steps.map((item) => (
                <article
                  key={item.step}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 text-lg font-semibold text-[var(--accent)]">
                    {item.step}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="preview"
          className="landing-section border-t border-[var(--landing-border)] bg-[var(--landing-surface)]"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-kicker">Investor preview</p>
              <h2 className="section-title">
                Positioned as a memory-preservation product for families, not another recipe app
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                The landing experience communicates emotional preservation, guided cooking, and
                privacy as the core product story.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {trustItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
                >
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Faq />

        <section className="landing-section border-t border-[var(--landing-border)] bg-white">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <p className="section-kicker">Closing note</p>
            <h2 className="section-title">Cookkin turns recipes into living family memory</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              This standalone page is packaged specifically for investor review, without access to
              the broader product codebase or unfinished application flows.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#features"
                className="inline-flex min-h-12 items-center rounded-2xl bg-[var(--accent)] px-6 py-3 font-semibold text-white transition-colors hover:bg-[var(--accent-strong)]"
              >
                Revisit the product story
              </a>
              <a
                href="#faq"
                className="inline-flex min-h-12 items-center rounded-2xl border border-slate-200 bg-white px-6 py-3 font-medium text-slate-700 transition-colors hover:bg-slate-50"
              >
                Review the FAQ
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--landing-border)] bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-slate-500 sm:flex-row sm:px-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--accent)] font-semibold text-white">
              C
            </span>
            <div>
              <p className="font-semibold text-slate-900">Cookkin</p>
              <p>Investor landing preview</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="transition-colors hover:text-slate-800">
              Features
            </a>
            <a href="#how" className="transition-colors hover:text-slate-800">
              How it works
            </a>
            <a href="#faq" className="transition-colors hover:text-slate-800">
              FAQ
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
