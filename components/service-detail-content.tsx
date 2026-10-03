import Link from "next/link";
import type { Service } from "@/lib/data";
import MedicalDisclaimer from "@/components/medical-disclaimer";
import { getDictionary, type Locale } from "@/lib/i18n";

export default function ServiceDetailContent({
  service,
  headingLevel = "h1",
  locale = "tr",
}: {
  service: Service;
  headingLevel?: "h1" | "h2";
  locale?: Locale;
}) {
  const Heading = headingLevel;
  const t = getDictionary(locale).serviceDetail;
  const homeBase = locale === "en" ? "/en" : "";

  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
        {t.eyebrow}
      </p>
      <Heading className="mt-4 font-serif text-2xl leading-snug text-ink sm:text-3xl">
        {service.name}
      </Heading>
      <p className="mt-4 text-base leading-relaxed text-ink/70">
        {service.description}
      </p>

      <div className="mt-8 space-y-8">
        <DetailSection heading={t.whatHeading} paragraphs={service.details.what} />
        <DetailSection heading={t.topicsHeading} paragraphs={service.details.topics} />
        <DetailSection heading={t.processHeading} paragraphs={service.details.process} />
        <DetailSection heading={t.audienceHeading} paragraphs={service.details.audience} />
        <DetailSection heading={t.afterHeading} paragraphs={service.details.after} />

        <div className="grid grid-cols-2 gap-4">
          <InfoCard label={t.durationLabel} value={service.duration} />
          <InfoCard label={t.priceLabel} value={service.price} />
        </div>

        <MedicalDisclaimer locale={locale} />

        <Link
          href={`${homeBase}/?service=${service.slug}#randevu`}
          className="inline-flex w-full items-center justify-center rounded-full bg-ink px-9 py-4 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-gold sm:w-auto"
        >
          {t.bookButton}
        </Link>
      </div>
    </div>
  );
}

function DetailSection({
  heading,
  paragraphs,
}: {
  heading: string;
  paragraphs: string[];
}) {
  return (
    <section>
      <h3 className="font-serif text-lg text-ink sm:text-xl">{heading}</h3>
      <div className="mt-2 space-y-3 text-sm leading-relaxed text-ink/75 sm:text-base">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-beige bg-white/60 p-4">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink/50">
        {label}
      </p>
      <p className="mt-1 text-base font-medium text-ink">{value}</p>
    </div>
  );
}
