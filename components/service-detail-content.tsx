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

      <div className="mt-6 grid grid-cols-2 gap-4">
        <InfoCard label={t.durationLabel} value={service.duration} />
        <InfoCard label={t.priceLabel} value={service.price} />
      </div>

      <div className="mt-8 space-y-8">
        <DetailSection heading={t.descriptionHeading}>
          <p>{service.purpose}</p>
        </DetailSection>

        <DetailSection heading={t.methodHeading}>
          <p>{service.method}</p>
        </DetailSection>

        <DetailSection heading={t.cancellationHeading}>
          <p>
            {service.cancellationInfo}{" "}
            <Link
              href={`${homeBase}/yasal/iptal-degisiklik-cayma-iade-politikasi`}
              className="text-gold underline underline-offset-2"
            >
              {t.viewPolicy}
            </Link>
            .
          </p>
        </DetailSection>

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
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h3 className="font-serif text-lg text-ink sm:text-xl">{heading}</h3>
      <div className="mt-2 text-sm leading-relaxed text-ink/75 sm:text-base">
        {children}
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
