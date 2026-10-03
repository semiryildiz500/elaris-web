import Link from "next/link";
import type { ReactNode } from "react";
import { legalPages } from "@/lib/legal-pages";
import { getDictionary, type Locale } from "@/lib/i18n";

export default function LegalPage({
  title,
  updated,
  locale = "tr",
  children,
}: {
  title: string;
  updated?: string;
  locale?: Locale;
  children: ReactNode;
}) {
  const t = getDictionary(locale).legalPage;
  const homeBase = locale === "en" ? "/en" : "/";
  const isEn = locale === "en";

  return (
    <div className="bg-cream">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-24">
        <Link
          href={homeBase}
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-ink/50 transition-colors hover:text-gold"
        >
          {t.backHome}
        </Link>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr]">
          <article className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
              {t.eyebrow}
            </p>
            <h1 className="mt-4 font-serif text-3xl leading-snug text-ink sm:text-4xl">
              {title}
            </h1>
            {updated && (
              <p className="mt-3 text-xs text-ink/40">
                {t.updated} {updated}
              </p>
            )}

            <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink/75 sm:text-base">
              {children}
            </div>

            <p className="mt-16 border-t border-beige pt-6 text-xs leading-relaxed text-ink/40">
              {t.draftNotice}
            </p>
          </article>

          <nav className="h-fit rounded-2xl border border-beige bg-white/60 p-6 lg:sticky lg:top-28">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-ink/40">
              {t.otherDocs}
            </p>
            <ul className="mt-4 space-y-3">
              {legalPages.map((page) => (
                <li key={page.slug}>
                  <Link
                    href={`${locale === "en" ? "/en" : ""}/yasal/${page.slug}`}
                    className="text-sm text-ink/70 transition-colors hover:text-gold"
                  >
                    {isEn ? page.shortTitleEn : page.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-serif text-xl text-ink sm:text-2xl">{heading}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-gold">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export function FillIn({ locale = "tr" }: { locale?: Locale }) {
  const t = getDictionary(locale).legalPage;
  return (
    <span className="rounded bg-gold/10 px-1.5 py-0.5 text-xs font-medium text-gold">
      {t.fillIn}
    </span>
  );
}
