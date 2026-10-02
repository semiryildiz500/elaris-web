import Reveal from "@/components/reveal";
import ServiceCard from "@/components/service-card";
import { services } from "@/lib/data";

export default function ServicesSection() {
  return (
    <section id="calismalar" className="bg-sand/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <p className="text-center text-xs font-medium uppercase tracking-[0.35em] text-gold">
            Elaris Çalışmaları
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 text-center font-serif text-3xl leading-snug text-ink sm:text-4xl">
            Size eşlik eden çalışmalar
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-ink/65">
            Tüm çalışmalar hem online hem yüz yüze olarak
            gerçekleştirilebilir. Bireysel seanslar şimdilik 30 dakika olarak
            planlanmaktadır.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={Math.min(index * 60, 360)}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
