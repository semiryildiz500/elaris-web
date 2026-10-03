import Link from "next/link";
import { legalPages } from "@/lib/legal-pages";

export default function SiteFooter() {
  return (
    <footer id="iletisim" className="border-t border-beige bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:px-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <span className="font-serif text-xl tracking-[0.2em]">ELARIS</span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
            Fethiye Karseri&apos;nin yönettiği, farkındalık ve enerji
            çalışmaları için özenle tasarlanmış bir alan.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-gold-light">
            Keşfet
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            <li>
              <a href="#fethiye-karseri" className="transition-colors hover:text-gold">
                Fethiye Karseri
              </a>
            </li>
            <li>
              <a href="#calismalar" className="transition-colors hover:text-gold">
                ELARIS Çalışmaları
              </a>
            </li>
            <li>
              <a href="#randevu" className="transition-colors hover:text-gold">
                Randevu
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-gold-light">
            İletişim
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            <li>
              <a
                href="https://www.instagram.com/kapten.uyanis"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
              >
                Instagram · @kapten.uyanis
              </a>
            </li>
            <li>
              <a href="#randevu" className="transition-colors hover:text-gold">
                Randevu Al
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 px-6 py-8 sm:px-10">
        <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-gold-light">
          Yasal
        </h3>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          {legalPages.map((page) => (
            <li key={page.slug}>
              <Link
                href={`/yasal/${page.slug}`}
                className="text-xs text-cream/60 transition-colors hover:text-gold"
              >
                {page.shortTitle}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-cream/10 py-6">
        <p className="text-center text-xs tracking-wide text-cream/40">
          © {new Date().getFullYear()} ELARIS. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
