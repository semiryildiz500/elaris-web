import Reveal from "@/components/reveal";

const whatsappMessage = encodeURIComponent(
  "Merhaba, ELARIS hakkında bilgi almak istiyorum."
);
const whatsappHref = `https://wa.me/905348843774?text=${whatsappMessage}`;
const instagramHref = "https://www.instagram.com/kalpten.uyanis/";

export default function ContactSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
            İletişim
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 font-serif text-2xl leading-snug text-ink sm:text-3xl">
            Size ulaşmanın en kolay yolu
          </h2>
        </Reveal>

        <Reveal delay={180}>
          <div className="mx-auto mt-10 flex max-w-md flex-col items-center gap-4 sm:max-w-none sm:flex-row sm:justify-center">
            <a
              href={whatsappHref}
              className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-gold/50 px-8 py-3.5 text-sm font-medium tracking-wide text-ink transition-colors hover:border-gold hover:bg-gold hover:text-cream sm:w-auto"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
            <a
              href={instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-gold/50 px-8 py-3.5 text-sm font-medium tracking-wide text-ink transition-colors hover:border-gold hover:bg-gold hover:text-cream sm:w-auto"
            >
              <InstagramIcon />
              Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.5 20.5l1.4-4.1a8 8 0 1 1 3.1 3.1z" />
      <path d="M8.5 9.3c0 3 2.7 5.7 5.7 5.7.7 0 1-.5.9-1.1l-.2-1a.7.7 0 0 0-.7-.5l-1.3.2a4.6 4.6 0 0 1-2.9-2.9l.2-1.3a.7.7 0 0 0-.5-.7l-1-.2c-.6-.1-1.1.2-1.1.9Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
