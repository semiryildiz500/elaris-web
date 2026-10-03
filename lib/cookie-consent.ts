export type ConsentCategory = "necessary" | "analytics" | "marketing";

export type ConsentState = Record<ConsentCategory, boolean>;

const STORAGE_KEY = "elaris-cookie-consent";

export const defaultConsent: ConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export function getConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return { ...defaultConsent, ...parsed, necessary: true };
  } catch {
    return null;
  }
}

export function setConsent(consent: Partial<ConsentState>) {
  if (typeof window === "undefined") return;
  const next: ConsentState = {
    ...defaultConsent,
    ...getConsent(),
    ...consent,
    necessary: true,
  };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  window.dispatchEvent(new CustomEvent("elaris-consent-change", { detail: next }));
}

/**
 * Analitik/pazarlama betikleri eklenmeden önce burada kontrol edilmelidir:
 * örn. `if (hasConsent("analytics")) { loadAnalyticsScript() }`
 */
export function hasConsent(category: ConsentCategory): boolean {
  const consent = getConsent();
  if (!consent) return false;
  return consent[category];
}
