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
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-gray-400 font-light mb-4">
            {eyebrow}
          </p>
          <h2 className="font-serif text-[2rem] sm:text-4xl lg:text-[3rem] font-medium leading-[1.1] tracking-tight text-gray-900 max-w-xl">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-xl leading-relaxed">
            {description}
          </p>
          <button
            type="button"
            data-cta={ctaHref}
            className="inline-flex items-center mt-6 px-5 py-2.5 rounded-lg bg-[#FF2E7A] text-white font-semibold hover:bg-[#e3266d] transition-colors"
          >
            {ctaLabel}
          </button>
        </div>

        <div className="animate-fade-up-delay-1">
          <div className="rounded-[2rem] border border-gray-200 bg-white p-4 shadow-sm">
            <div className="rounded-[1.4rem] overflow-hidden bg-gray-100">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={900}
                height={560}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
