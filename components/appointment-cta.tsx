import Reveal from "@/components/reveal";
import AppointmentForm from "@/components/appointment-form";

export default function AppointmentCta() {
  return (
    <section
      id="randevu"
      className="relative overflow-hidden bg-gradient-to-b from-cream via-powder/50 to-sand/60 py-24 sm:py-32"
    >
      <div className="relative mx-auto max-w-2xl px-6 text-center sm:px-10">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
            Randevu
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 font-serif text-3xl leading-snug text-ink sm:text-4xl">
            Kendinize zaman ayırın
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
            Size uygun çalışmayı, tarihi ve saati seçin; birkaç adımda
            randevu talebinizi iletelim.
          </p>
        </Reveal>

        <Reveal delay={260} className="mt-12">
          <AppointmentForm />
        </Reveal>
      </div>
    </section>
  );
}
