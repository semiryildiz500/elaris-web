import Image from "next/image";
import Reveal from "@/components/reveal";
import { getDictionary, type Locale } from "@/lib/i18n";

export default function CertificatesSection({
  locale = "tr",
}: {
  locale?: Locale;
}) {
  const t = getDictionary(locale).certificates;
  const alt =
    locale === "en"
      ? "Certificates & Trainings Gallery — ELARIS certificate collection"
      : "Sertifikalar ve Eğitimler Galerisi — ELARIS sertifika koleksiyonu";

  return (
    <section id="sertifikalar" className="bg-sand/40 py-24 sm:py-32">
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

        <Reveal delay={200} className="mt-14">
          <div className="relative mx-auto aspect-[1536/906] w-full max-w-5xl">
            <Image
              src="/certificates/sertifikalar-egitimler-galerisi.png"
              alt={alt}
              fill
              sizes="(min-width: 1024px) 80vw, 95vw"
              className="object-contain"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
