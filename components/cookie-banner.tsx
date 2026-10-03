"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getConsent, setConsent } from "@/lib/cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // localStorage yalnızca istemcide erişilebilir; sunucu ile uyumlu ilk
    // render'dan sonra mevcut onay durumunu kontrol ediyoruz.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(!getConsent());
  }, []);

  if (!visible) return null;

  const acceptNecessaryOnly = () => {
    setConsent({ analytics: false, marketing: false });
    setVisible(false);
  };

  const acceptAll = () => {
    setConsent({ analytics: true, marketing: true });
    setVisible(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[90] p-4 sm:p-6">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-gold/20 bg-cream/95 p-5 shadow-[0_20px_50px_-20px_rgba(43,36,32,0.4)] backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <p className="text-sm leading-relaxed text-ink/75">
          Size daha iyi bir deneyim sunmak için çerezler kullanıyoruz.
          Zorunlu olmayan çerezler yalnızca onayınızla çalışır. Detaylar
          için{" "}
          <Link
            href="/yasal/cerez-politikasi"
            className="text-gold underline underline-offset-2"
          >
            Çerez Politikası
          </Link>
          .
        </p>

        <div className="flex shrink-0 flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={acceptNecessaryOnly}
            className="inline-flex items-center justify-center rounded-full border border-ink/15 px-5 py-2.5 text-xs font-medium tracking-wide text-ink transition-colors hover:border-ink"
          >
            Yalnızca Gerekli
          </button>
          <Link
            href="/yasal/cerez-tercihleri"
            className="inline-flex items-center justify-center rounded-full border border-ink/15 px-5 py-2.5 text-xs font-medium tracking-wide text-ink transition-colors hover:border-ink"
          >
            Tercihleri Yönet
          </Link>
          <button
            type="button"
            onClick={acceptAll}
            className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-xs font-medium tracking-wide text-cream transition-colors hover:bg-gold"
          >
            Tümünü Kabul Et
          </button>
        </div>
      </div>
    </div>
  );
}
