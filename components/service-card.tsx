"use client";

import { useState } from "react";
import Link from "next/link";
import type { Service } from "@/lib/data";
import ServiceDetailModal from "@/components/service-detail-modal";
import { getDictionary, type Locale } from "@/lib/i18n";

export default function ServiceCard({
  service,
  locale = "tr",
}: {
  service: Service;
  locale?: Locale;
}) {
  const [open, setOpen] = useState(false);
  const t = getDictionary(locale).services;
  const homeBase = locale === "en" ? "/en" : "";

  return (
    <>
      <div className="group flex h-full flex-col justify-between rounded-2xl border border-ink/10 bg-white/70 p-8 shadow-[0_10px_30px_-22px_rgba(43,36,32,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_20px_40px_-20px_rgba(176,141,87,0.55)]">
        <div>
          <h3 className="font-serif text-xl font-semibold leading-snug text-ink">
            {service.name}
          </h3>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-gold">
            {service.duration} · {service.price}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            {service.description}
          </p>
        </div>

        <div className="mt-8 flex items-center justify-between gap-4 border-t border-ink/10 pt-6">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="text-sm font-medium text-ink/80 underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold"
          >
            {t.detailsButton}
          </button>
          <Link
            href={`${homeBase}/?service=${service.slug}#randevu`}
            className="whitespace-nowrap rounded-full border border-gold bg-gold/5 px-4 py-2 text-xs font-semibold tracking-wide text-gold transition-colors group-hover:bg-gold group-hover:text-cream"
          >
            {t.bookButton}
          </Link>
        </div>
      </div>

      <ServiceDetailModal
        service={service}
        open={open}
        onClose={() => setOpen(false)}
        locale={locale}
      />
    </>
  );
}
