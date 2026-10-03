"use client";

import { useEffect } from "react";
import type { Service } from "@/lib/data";
import ServiceDetailContent from "@/components/service-detail-content";
import { getDictionary, type Locale } from "@/lib/i18n";

export default function ServiceDetailModal({
  service,
  open,
  onClose,
  locale = "tr",
}: {
  service: Service;
  open: boolean;
  onClose: () => void;
  locale?: Locale;
}) {
  const t = getDictionary(locale).serviceDetail;

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={service.name}
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-ink/70 p-4 backdrop-blur-sm sm:items-center sm:p-8"
      onClick={onClose}
    >
      <div
        className="relative my-8 w-full max-w-xl rounded-2xl border border-gold/20 bg-cream p-6 shadow-[0_30px_70px_-30px_rgba(43,36,32,0.5)] sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t.closeAria}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink/60 transition-colors hover:border-gold hover:text-gold"
        >
          ✕
        </button>

        <ServiceDetailContent service={service} headingLevel="h2" locale={locale} />
      </div>
    </div>
  );
}
