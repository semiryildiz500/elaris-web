"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictionary, type Locale } from "@/lib/i18n";

export default function NotFound() {
  const pathname = usePathname();
  const locale: Locale = pathname?.startsWith("/en") ? "en" : "tr";
  const t = getDictionary(locale).notFound;

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-cream px-6 text-center">
      <p className="font-serif text-5xl text-gold">404</p>
      <h1 className="mt-4 font-serif text-2xl text-ink sm:text-3xl">
        {t.title}
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/60 sm:text-base">
        {t.description}
      </p>
      <Link
        href={locale === "en" ? "/en" : "/"}
        className="mt-8 inline-flex items-center justify-center rounded-full bg-ink px-8 py-3.5 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-gold"
      >
        {t.backHome}
      </Link>
    </div>
  );
}
