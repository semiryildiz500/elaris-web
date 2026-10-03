import Link from "next/link";
import { legalPages } from "@/lib/legal-pages";
import { getDictionary, type Locale } from "@/lib/i18n";

export default function SiteFooter({ locale = "tr" }: { locale?: Locale }) {
  const t = getDictionary(locale).footer;
  const homeBase = locale === "en" ? "/en" : "";
  const isEn = locale === "en";

  return (
    <footer id="iletisim" className="border-t border-beige bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:px-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <span className="font-serif text-xl tracking-[0.2em]">ELARIS</span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
            {t.tagline}
          </p>
        </div>

        <div>
          <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-gold-light">
            {t.exploreHeading}
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            <li>
              <a
                href={`${homeBase}/#fethiye-karseri`}
                className="transition-colors hover:text-gold"
              >
                {getDictionary(locale).nav.fethiyeKarseri}
              </a>
            </li>
            <li>
              <a
                href={`${homeBase}/#calismalar`}
                className="transition-colors hover:text-gold"
              >
                {getDictionary(locale).nav.sessions}
              </a>
            </li>
            <li>
              <a
                href={`${homeBase}/#randevu`}
                className="transition-colors hover:text-gold"
              >
                {t.bookButton}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-gold-light">
            {t.contactHeading}
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            <li>
              <a
                href={
                  isEn
                    ? "https://www.instagram.com/kalpten.uyanis/"
                    : "https://www.instagram.com/kapten.uyanis"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
              >
                {t.instagramLabel}
              </a>
            </li>
            <li>
              <a
                href={`${homeBase}/#randevu`}
                className="transition-colors hover:text-gold"
              >
                {t.bookButton}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 px-6 py-8 sm:px-10">
        <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-gold-light">
          {t.legalHeading}
        </h3>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          {legalPages.map((page) => (
            <li key={page.slug}>
              <Link
                href={`${homeBase}/yasal/${page.slug}`}
                className="text-xs text-cream/60 transition-colors hover:text-gold"
              >
                {isEn ? page.shortTitleEn : page.shortTitle}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-cream/10 py-6">
        <p className="text-center text-xs tracking-wide text-cream/40">
          © {new Date().getFullYear()} {t.copyright}
        </p>
      </div>
    </footer>
  );
}
