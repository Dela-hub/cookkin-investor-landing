import Image from "next/image";

type FeatureBandProps = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
};

export default function FeatureBand({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
  imageSrc,
  imageAlt,
  reverse = false,
}: FeatureBandProps) {
  return (
    <section className="landing-section border-t border-[var(--landing-border)]">
      <div
        className={`mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="animate-fade-up">
          <p className="section-kicker">{eyebrow}</p>
          <h2 className="max-w-xl font-serif text-[2rem] leading-[1.08] tracking-tight text-slate-900 sm:text-4xl lg:text-[3rem]">
            {title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            {description}
          </p>
          <a
            href={ctaHref}
            className="mt-6 inline-flex items-center rounded-xl bg-[var(--accent)] px-5 py-2.5 font-semibold text-white transition-colors hover:bg-[var(--accent-strong)]"
          >
            {ctaLabel}
          </a>
        </div>

        <div className="animate-fade-up-delay-1">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
            <div className="overflow-hidden rounded-[1.4rem] bg-slate-100">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={900}
                height={560}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
