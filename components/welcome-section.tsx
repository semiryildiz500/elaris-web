import Reveal from "@/components/reveal";

export default function WelcomeSection() {
  return (
    <section
      id="ogretiler"
      className="mx-auto max-w-4xl px-6 py-20 sm:px-10 sm:py-28"
    >
      <Reveal>
        <p className="text-center text-xs font-medium uppercase tracking-[0.35em] text-gold">
          Elaris&apos;e Hoş Geldiniz
        </p>
      </Reveal>

      <Reveal delay={100}>
        <h2 className="mt-6 text-center font-serif text-3xl leading-snug text-ink sm:text-4xl">
          Farkındalığa alan açan bir yaklaşım
        </h2>
      </Reveal>

      <div className="mt-8 space-y-5 text-center text-base leading-relaxed text-ink/80 sm:text-lg">
        <Reveal delay={160}>
          <p>
            ELARIS, kendinizle kurduğunuz ilişkiyi derinleştirmek isteyenler
            için tasarlanmış bir enerji çalışmaları alanıdır. Her seans,
            bireysel ritminize saygı duyan, yargılamayan bir yaklaşımla
            yürütülür; tıbbi ya da psikolojik bir tedavi, teşhis veya kesin
            sonuç iddiası taşımaz.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <p>
            İster ilk kez adım atıyor olun, ister yolculuğunuza devam ediyor
            olun; ELARIS sizi olduğunuz gibi karşılar ve kendi iç
            bilgeliğinizle temas kurmanız için sakin bir alan açar.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
