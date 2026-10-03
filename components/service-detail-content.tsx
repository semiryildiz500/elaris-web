import Link from "next/link";
import type { Service } from "@/lib/data";
import MedicalDisclaimer from "@/components/medical-disclaimer";

export default function ServiceDetailContent({
  service,
  headingLevel = "h1",
}: {
  service: Service;
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;

  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
        Detaylar &amp; Ön Bilgilendirme
      </p>
      <Heading className="mt-4 font-serif text-2xl leading-snug text-ink sm:text-3xl">
        {service.name}
      </Heading>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <InfoCard label="Süre" value={service.duration} />
        <InfoCard label="Ücret" value={service.price} />
      </div>

      <div className="mt-8 space-y-8">
        <DetailSection heading="Açıklama">
          <p>{service.purpose}</p>
        </DetailSection>

        <DetailSection heading="Uygulama Şekli">
          <p>{service.method}</p>
        </DetailSection>

        <DetailSection heading="İptal / Değişiklik Bilgisi">
          <p>
            {service.cancellationInfo}{" "}
            <Link
              href="/yasal/iptal-degisiklik-cayma-iade-politikasi"
              className="text-gold underline underline-offset-2"
            >
              Politikayı görüntüle
            </Link>
            .
          </p>
        </DetailSection>

        <MedicalDisclaimer />

        <Link
          href={`/?service=${service.slug}#randevu`}
          className="inline-flex w-full items-center justify-center rounded-full bg-ink px-9 py-4 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-gold sm:w-auto"
        >
          Randevu Al
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
