import Reveal from "@/components/reveal";
import { getDictionary, type Locale } from "@/lib/i18n";

export default function WelcomeSection({ locale = "tr" }: { locale?: Locale }) {
  const t = getDictionary(locale).welcome;

  return (
    <section
      id="ogretiler"
      className="mx-auto max-w-4xl px-6 py-20 sm:px-10 sm:py-28"
    >
      <Reveal>
        <p className="text-center text-xs font-medium uppercase tracking-[0.35em] text-gold">
          {t.eyebrow}
        </p>
      </Reveal>

      <Reveal delay={100}>
        <h2 className="mt-6 text-center font-serif text-3xl leading-snug text-ink sm:text-4xl">
          {t.heading}
        </h2>
      </Reveal>

      <div className="mt-8 space-y-5 text-center text-base leading-relaxed text-ink/80 sm:text-lg">
        <Reveal delay={160}>
          <p>{t.paragraph1}</p>
        </Reveal>
        <Reveal delay={240}>
          <p>{t.paragraph2}</p>
        </Reveal>
      </div>
    </section>
  );
}
