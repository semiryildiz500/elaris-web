"use client";

import { useEffect, useState } from "react";
import {
  defaultConsent,
  getConsent,
  setConsent,
  type ConsentState,
} from "@/lib/cookie-consent";

export default function CookiePreferencesForm() {
  const [consent, setLocalConsent] = useState<ConsentState>(defaultConsent);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    // localStorage yalnızca istemcide erişilebilir; sunucu ile uyumlu ilk
    // render'dan sonra mevcut tercihleri yüklüyoruz.
    const existing = getConsent();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (existing) setLocalConsent(existing);
  }, []);

  const handleSave = () => {
    setConsent(consent);
    setSaved(true);
  };

  return (
    <div className="space-y-6">
      <PreferenceRow
        title="Gerekli Çerezler"
        description="Sitenin temel işlevleri ve çerez tercihinizin hatırlanması için zorunludur."
        checked
        disabled
      />
      <PreferenceRow
        title="Analitik Çerezler"
        description="Site kullanımını anlamamıza yardımcı olur. Onayınız olmadan çalıştırılmaz."
        checked={consent.analytics}
        onChange={(v) => {
          setLocalConsent((c) => ({ ...c, analytics: v }));
          setSaved(false);
        }}
      />
      <PreferenceRow
        title="Pazarlama Çerezleri"
        description="İlgi alanlarınıza yönelik içerik/iletişim için kullanılabilir. Onayınız olmadan çalıştırılmaz."
        checked={consent.marketing}
        onChange={(v) => {
          setLocalConsent((c) => ({ ...c, marketing: v }));
          setSaved(false);
        }}
      />

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="button"
          onClick={handleSave}
          className="inline-flex items-center justify-center rounded-full bg-ink px-8 py-3 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-gold"
        >
          Tercihleri Kaydet
        </button>
        {saved && (
          <span className="text-sm text-ink/60">
            Tercihleriniz kaydedildi.
          </span>
        )}
      </div>
    </div>
  );
}

function PreferenceRow({
  title,
  description,
  checked,
  disabled,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
}) {
  return (
    <label className="flex items-start justify-between gap-6 rounded-2xl border border-beige bg-white/60 p-5">
      <span>
        <span className="block text-sm font-medium text-ink">{title}</span>
        <span className="mt-1 block text-xs leading-relaxed text-ink/60">
          {description}
        </span>
      </span>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="mt-1 h-5 w-5 shrink-0 accent-gold disabled:opacity-50"
      />
    </label>
  );
}
