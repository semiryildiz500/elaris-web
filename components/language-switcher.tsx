"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { togglePathLocale } from "@/lib/i18n";

export default function LanguageSwitcher({
  locale,
  className = "",
}: {
  locale: Locale;
  className?: string;
}) {
  const pathname = usePathname();
  const otherHref = togglePathLocale(pathname);

  return (
    <div
      className={`flex items-center gap-1.5 text-xs font-medium tracking-[0.1em] ${className}`}
    >
      <LangLink
        label="TR"
        href={locale === "tr" ? pathname : otherHref}
        active={locale === "tr"}
      />
      <span className="text-ink/25">|</span>
      <LangLink
        label="EN"
        href={locale === "en" ? pathname : otherHref}
        active={locale === "en"}
      />
    </div>
  );
}

function LangLink({
  label,
  href,
  active,
}: {
  label: string;
  href: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "true" : undefined}
      className={`rounded-full px-2 py-1 transition-colors ${
        active ? "text-gold" : "text-ink/50 hover:text-ink"
      }`}
    >
      {label}
    </Link>
  );
}
