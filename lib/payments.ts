export type SessionDuration = 30 | 45 | 60;

/** Shopier ürün bağlantıları (herkese açık, gizli bilgi içermez). */
export const SHOPIER_PRODUCT_URLS: Record<SessionDuration, string> = {
  30: "https://www.shopier.com/KalptenElaRs/51918497",
  45: "https://www.shopier.com/KalptenElaRs/51918678",
  60: "https://www.shopier.com/KalptenElaRs/51918633",
};

/** Hizmet süresi metninden ("30 dk" / "30 min") 30/45/60 değerini çıkarır; tanınmazsa null. */
export function parseSessionDuration(label: string): SessionDuration | null {
  const minutes = parseInt(label, 10);
  return minutes === 30 || minutes === 45 || minutes === 60 ? minutes : null;
}

export function getShopierUrl(durationLabel: string): string | null {
  const duration = parseSessionDuration(durationLabel);
  return duration ? SHOPIER_PRODUCT_URLS[duration] : null;
}

/**
 * Ödeme doğrulaması henüz yok: yönlendirme veya geri dönüş ödeme kanıtı
 * değildir. Webhook/API eklendiğinde yalnızca sunucu tarafı doğrulama
 * "confirmed" üretmelidir.
 */
export type PaymentStatus = "unverified" | "confirmed";

export function getPaymentStatus(): PaymentStatus {
  return "unverified";
}
