const items = [
  {
    question: "What is CookKin?",
    answer:
      "CookKin is a private family recipe app where you can preserve voice, video, and stories behind each dish.",
  },
  {
    question: "Is CookKin free?",
    answer:
      "Yes. You can create a space, add family members, and start preserving memories for free.",
  },
  {
    question: "Who can access my recipes?",
    answer:
      "Only invited members of your family space. Recipes are private by default.",
  },
  {
    question: "Can we cook along step-by-step?",
    answer:
      "Yes. You can add chapters and guided playback so family can follow each step with confidence.",
  },
  {
    question: "Can I add recipes without recording video?",
    answer:
      "Absolutely. You can add ingredients, notes, and stories even without video.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="landing-section border-t border-[var(--landing-border)] bg-[var(--background)]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-center font-serif text-[2rem] tracking-tight text-slate-900 sm:text-4xl lg:text-[3rem]">
          Frequently asked questions
        </h2>
        <div className="mt-10 space-y-3">
          {items.map((item) => (
            <details
              key={item.question}
              className="group overflow-hidden rounded-2xl border border-[var(--landing-border)] bg-[var(--landing-surface)]"
            >
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-base font-medium text-slate-900 transition-colors hover:bg-[var(--background)] sm:text-lg">
                <span>{item.question}</span>
                <svg
                  className="h-5 w-5 text-slate-400 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-5 pb-5 text-sm leading-7 text-slate-600 sm:text-base">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
