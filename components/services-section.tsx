import Reveal from "@/components/reveal";
import ServiceCard from "@/components/service-card";
import { services as servicesTr } from "@/lib/data";
import { servicesEn } from "@/lib/data.en";
import { getDictionary, type Locale } from "@/lib/i18n";

export default function ServicesSection({
  locale = "tr",
}: {
  locale?: Locale;
}) {
  const t = getDictionary(locale).services;
  const services = locale === "en" ? servicesEn : servicesTr;

  return (
    <section id="calismalar" className="bg-sand/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
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
        <Reveal delay={180}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-ink/65">
            {t.intro}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={Math.min(index * 60, 360)}>
              <ServiceCard service={service} locale={locale} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
