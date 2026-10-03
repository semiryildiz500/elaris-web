import { Suspense } from "react";
import Reveal from "@/components/reveal";
import AppointmentForm from "@/components/appointment-form";
import { getDictionary, type Locale } from "@/lib/i18n";

export default function AppointmentCta({
  locale = "tr",
}: {
  locale?: Locale;
}) {
  const t = getDictionary(locale).appointmentCta;

  return (
    <section
      id="randevu"
      className="relative overflow-hidden bg-gradient-to-b from-cream via-powder/50 to-sand/60 py-24 sm:py-32"
    >
      <div className="relative mx-auto max-w-2xl px-6 text-center sm:px-10">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
            {t.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 font-serif text-3xl leading-snug text-ink sm:text-4xl">
            {t.heading}
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
            {t.intro}
          </p>
        </Reveal>

        <Reveal delay={220}>
          <a
            href="https://wa.me/905348843774"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold underline underline-offset-2 transition-colors hover:text-ink"
          >
            {t.whatsappHelp}
          </a>
        </Reveal>

        <Reveal delay={260} className="mt-12">
          <Suspense fallback={null}>
            <AppointmentForm locale={locale} />
          </Suspense>
        </Reveal>
      </div>
    </section>
  );
}
