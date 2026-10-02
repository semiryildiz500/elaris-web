import Reveal from "@/components/reveal";

export default function InstagramSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
            Instagram
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 font-serif text-2xl leading-snug text-ink sm:text-3xl">
            Günlük ilhamlar için bize eşlik edin
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <a
            href="https://www.instagram.com/kapten.uyanis"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-gold/50 px-7 py-3 text-sm font-medium tracking-wide text-ink transition-colors hover:border-gold hover:bg-gold hover:text-cream"
          >
            <span aria-hidden>@</span>
            kapten.uyanis
          </a>
        </Reveal>
      </div>
    </section>
  );
}
