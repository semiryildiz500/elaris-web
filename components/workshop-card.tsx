import type { Workshop } from "@/lib/data";

export default function WorkshopCard({ workshop }: { workshop: Workshop }) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-white/70 p-8 shadow-[0_10px_30px_-22px_rgba(43,36,32,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_20px_40px_-20px_rgba(176,141,87,0.55)]">
      <div className="flex flex-1 flex-col gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          {workshop.date}
        </span>
        <h3 className="font-serif text-lg font-semibold leading-snug text-ink">
          {workshop.title}
        </h3>
        <p className="text-sm leading-relaxed text-ink/75">
          {workshop.description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-ink/10 pt-6">
          <a
            href={`#${workshop.slug}`}
            className="text-sm font-medium text-ink/80 underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold"
          >
            Detay
          </a>
          <a
            href="#randevu"
            className="whitespace-nowrap rounded-full border border-gold bg-gold/5 px-4 py-2 text-xs font-semibold tracking-wide text-gold transition-colors group-hover:bg-gold group-hover:text-cream"
          >
            Katılım / Rezervasyon
          </a>
        </div>
      </div>
    </div>
  );
}
