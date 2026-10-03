"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";
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
  const scrollBodyRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!open) return;
    const scrollBody = scrollBodyRef.current;
    if (!scrollBody) return;
    scrollBody.scrollTop = 0;
  }, [open, service.slug]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousBodyOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={service.name}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/70 p-3 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        className="flex max-h-[calc(100dvh-48px)] w-full max-w-xl flex-col overflow-hidden rounded-2xl border border-gold/20 bg-cream shadow-[0_30px_70px_-30px_rgba(43,36,32,0.5)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex shrink-0 items-start justify-between gap-4 border-b border-beige bg-cream px-6 py-5 sm:px-10 sm:py-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
              {t.eyebrow}
            </p>
            <h2 className="mt-2 font-serif text-xl leading-snug text-ink sm:text-2xl">
              {service.name}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.closeAria}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink/60 transition-colors hover:border-gold hover:text-gold"
          >
            ✕
          </button>
        </div>

        <div
          ref={scrollBodyRef}
          className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 py-6 sm:px-10 sm:py-8"
        >
          <ServiceDetailContent
            service={service}
            headingLevel="h2"
            locale={locale}
            showHeader={false}
          />
        </div>
      </div>
    </div>,
    document.body
  );
}
