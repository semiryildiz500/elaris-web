import Reveal from "@/components/reveal";

export default function AboutSection() {
  return (
    <section
      id="fethiye-karseri"
      className="relative overflow-hidden bg-ink py-24 text-cream sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/60 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-gold/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full border border-gold/10"
      />

      <div className="relative mx-auto grid max-w-5xl gap-12 px-6 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <div className="flex flex-col gap-6">
            <span className="text-xs font-medium uppercase tracking-[0.35em] text-gold-light">
              Kurucu
            </span>
            <h2 className="font-serif text-3xl leading-snug sm:text-4xl">
              Fethiye Karseri
            </h2>
            <div className="h-px w-16 bg-gold/60" />
          </div>
        </Reveal>

        <div className="space-y-6 text-base leading-relaxed text-cream/75 sm:text-lg sm:leading-[1.9]">
          <Reveal delay={120}>
            <p>
              Fethiye Karseri, yıllardır sürdürdüğü kişisel ve profesyonel
              yolculuğunu; enerji çalışmaları, farkındalık ve kendi dönüşüm
              deneyimleriyle harmanlayan bir yol arkadaşıdır.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p>
              ELARIS&apos;te her çalışma; kişinin kendisiyle yeniden temas
              kurabileceği, yargılanmadan dinlenebileceği ve kendi
              farkındalığını keşfedebileceği sakin bir alan sunar.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <p>
              Burada hazır cevaplar ya da kesin sonuç vaatleri yoktur. Amaç;
              size ne yapmanız gerektiğini söylemek değil, kendi
              cevaplarınıza yaklaşabileceğiniz alanı açmaktır.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
