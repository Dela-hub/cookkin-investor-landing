const items = [
  {
    question: "What is Cookkin?",
    answer:
      "Cookkin is a family memory product built around recipes, voice, story, and the emotional context of food.",
  },
  {
    question: "Why does this matter beyond recipes?",
    answer:
      "The product preserves tacit knowledge and family history that are usually lost when a recipe is reduced to ingredients and timings alone.",
  },
  {
    question: "Is it designed as a public social product?",
    answer:
      "No. The concept is framed around private family spaces and controlled sharing, not public audience growth.",
  },
  {
    question: "What does this investor page represent?",
    answer:
      "This is a standalone landing-page preview prepared for review without exposing the broader application codebase.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="landing-section border-t border-[var(--landing-border)] bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-center font-serif text-[2rem] tracking-tight text-slate-900 sm:text-4xl lg:text-[3rem]">
          Frequently asked questions
        </h2>
        <div className="mt-10 space-y-3">
          {items.map((item) => (
            <details
              key={item.question}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-base font-medium text-slate-900 transition-colors hover:bg-slate-50 sm:text-lg">
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
