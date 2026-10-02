import Image from "next/image";
import Reveal from "@/components/reveal";

export default function Hero() {
  return (
    <section className="relative flex aspect-video min-h-[460px] w-full items-center overflow-hidden bg-cream sm:min-h-[560px] lg:min-h-0 xl:max-h-[880px]">
      {/* tam kompozisyon, kırpılmadan (görsel oranı ~16:9, container ile eşleşiyor) */}
      <Image
        src="/elaris-hero.png"
        alt="Deniz ve dağ manzarasına açılan, keten perdeli taş teras — gün batımında sakin bir an"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* hafif sinematik derinlik */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/12 via-transparent to-transparent"
      />

      {/* metnin okunabilirliği için güçlü fakat yumuşak, merkeze doğru tamamen kaybolan krem geçiş */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-full"
        style={{
          background:
            "linear-gradient(to right, rgba(251,248,243,0.94), rgba(251,248,243,0.78) 18%, rgba(251,248,243,0.4) 32%, rgba(251,248,243,0.12) 42%, transparent 50%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute right-[-6%] top-[-10%] z-10 hidden h-[22rem] w-[22rem] rounded-full border border-gold/25 lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-16 z-10 hidden h-px w-24 bg-gold/50 lg:block"
      />

      {/* Text content */}
      <div className="relative z-10 w-full px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-0 xl:pl-20 xl:pr-10">
        <div className="w-full max-w-md xl:max-w-lg">
          <Reveal>
            <div className="mb-8 flex items-center gap-4 lg:mb-12">
              <span className="font-serif text-lg italic tracking-[0.08em] text-bronze">
                Elaris
              </span>
              <span className="h-px max-w-16 flex-1 bg-gold/40" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-ink">
                Fethiye Karseri
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="font-serif text-[2.5rem] leading-[1.08] sm:text-6xl md:text-[4.2rem] lg:leading-[1.05]">
              <span className="block font-semibold text-ink">
                Kendine dönüş,
              </span>
              <span className="mt-1 block font-normal italic text-bronze sm:mt-2">
                bazen sadece hatırlamaktır.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={260}>
            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-x-4 -inset-y-3 -z-10"
                style={{
                  background:
                    "linear-gradient(to right, rgba(251,248,243,0.4), rgba(251,248,243,0.16) 60%, transparent 88%)",
                }}
              />
              <p className="mt-7 max-w-md text-balance text-base leading-relaxed text-ink/90 sm:mt-9 sm:text-lg">
                ELARIS, kendi iç dünyanızla yeniden temas kurmanız için sakin,
                saygılı ve özenle tasarlanmış bir alan sunar. Her çalışma,
                size ait olan farkındalığı yeniden hatırlamanıza eşlik eder.
              </p>
            </div>
          </Reveal>

          <Reveal delay={380} className="mt-10 sm:mt-12">
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <a
                href="#randevu"
                className="inline-flex w-full items-center justify-center rounded-full bg-ink px-9 py-4 text-sm font-medium tracking-wide text-cream transition-colors duration-300 hover:bg-gold sm:w-auto"
              >
                Randevu Al
              </a>
              <a
                href="#calismalar"
                className="group inline-flex w-full items-center justify-center gap-2 border-b border-transparent pb-1 text-sm font-medium tracking-wide text-ink transition-colors duration-300 hover:border-gold hover:text-gold sm:w-auto"
              >
                Çalışmaları Keşfet
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
