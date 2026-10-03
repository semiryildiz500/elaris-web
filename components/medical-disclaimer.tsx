import type { Locale } from "@/lib/i18n";

const COPY = {
  tr: {
    heading: "Önemli Bilgilendirme",
    body: "ELARIS kapsamında sunulan çalışmalar kişisel deneyim, spiritüel çalışma ve farkındalık amaçlıdır. Tıbbi veya psikolojik teşhis, tedavi, psikoterapi ya da sağlık hizmeti değildir. Herhangi bir hastalığın önlenmesi, iyileştirilmesi veya tedavi edilmesi konusunda garanti verilmez. Sağlıkla ilgili değerlendirme veya tedavi ihtiyacında yetkili sağlık profesyoneline başvurulmalıdır.",
  },
  en: {
    heading: "Important Information",
    body: "Sessions offered within ELARIS are intended for personal experience, spiritual practice and awareness purposes. They do not constitute medical or psychological diagnosis, treatment, psychotherapy or healthcare services. No guarantee is made regarding the prevention, improvement or treatment of any illness or medical condition. If you require assessment or treatment regarding your physical or mental health, please consult an appropriately qualified healthcare professional.",
  },
} as const;

export default function MedicalDisclaimer({
  locale = "tr",
}: {
  locale?: Locale;
}) {
  const t = COPY[locale];
  return (
    <div className="rounded-2xl border border-gold/25 bg-gold/5 p-6 text-sm leading-relaxed text-ink/80">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
        {t.heading}
      </p>
      <p className="mt-3">{t.body}</p>
    </div>
  );
}
