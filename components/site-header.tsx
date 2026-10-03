"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getDictionary, type Locale } from "@/lib/i18n";
import LanguageSwitcher from "@/components/language-switcher";
import SetHtmlLang from "@/components/set-html-lang";
import CookieBanner from "@/components/cookie-banner";

export default function SiteHeader({ locale = "tr" }: { locale?: Locale }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = getDictionary(locale).nav;
  const homeBase = locale === "en" ? "/en" : "";

  const navLinks = [
    { href: `${homeBase}/`, label: t.home },
    { href: `${homeBase}/#fethiye-karseri`, label: t.fethiyeKarseri },
    { href: `${homeBase}/#calismalar`, label: t.sessions },
    { href: `${homeBase}/#ogretiler`, label: t.teachings },
    { href: `${homeBase}/#workshoplar`, label: t.workshops },
    { href: `${homeBase}/#sertifikalar`, label: t.certificates },
    { href: `${homeBase}/#iletisim`, label: t.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <SetHtmlLang locale={locale} />
      <CookieBanner locale={locale} />
      <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-beige"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-6 sm:px-10 lg:px-10 xl:px-16">
        <Link
          href={locale === "en" ? "/en" : "/"}
          className="shrink-0 font-serif text-2xl tracking-[0.22em] text-ink"
          onClick={() => setOpen(false)}
        >
          ELARIS
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-[12.5px] font-medium uppercase tracking-[0.1em] text-ink/65 transition-colors hover:text-gold xl:text-[13px] xl:tracking-[0.12em]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-5 lg:flex">
          <LanguageSwitcher locale={locale} />
          <a
            href={`${homeBase}/#randevu`}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-ink/15 px-6 py-2.5 text-[13px] font-medium uppercase tracking-[0.1em] text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-cream xl:px-7 xl:tracking-[0.12em]"
          >
            {t.bookSession}
          </a>
        </div>

        <button
          type="button"
          aria-label="Menüyü aç/kapat"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-ink transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out lg:hidden ${
          open ? "max-h-[36rem]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 border-t border-beige bg-cream px-6 py-6 sm:px-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base tracking-wide text-ink/80 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`${homeBase}/#randevu`}
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium tracking-wide text-cream"
          >
            {t.bookSession}
          </a>
          <div className="mt-6 flex items-center justify-center border-t border-beige pt-5">
            <LanguageSwitcher locale={locale} />
          </div>
        </nav>
      </div>
      </header>
    </>
  );
}
