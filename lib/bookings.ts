export type BusinessHours = { open: string; close: string };

/** Hafta içi (Pzt-Cum) ve hafta sonu (Cmt-Paz) çalışma saatleri — Europe/Istanbul. */
export const BUSINESS_HOURS: Record<"weekday" | "weekend", BusinessHours> = {
  weekday: { open: "19:00", close: "22:30" },
  weekend: { open: "10:00", close: "22:30" },
};

export type BookedSlot = {
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  durationMinutes: number;
};

function toMinutes(hhmm: string): number {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

function toHHMM(minutes: number): string {
  const h = Math.floor(minutes / 60)
    .toString()
    .padStart(2, "0");
  const m = (minutes % 60).toString().padStart(2, "0");
  return `${h}:${m}`;
}

/** Europe/Istanbul saat diliminde "şu an" bilgisini döner. */
export function getIstanbulNow(): {
  date: string;
  minutes: number;
} {
  const fmt = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Istanbul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const parts = fmt.formatToParts(new Date());
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "00";
  const date = `${get("year")}-${get("month")}-${get("day")}`;
  const minutes = Number(get("hour")) * 60 + Number(get("minute"));
  return { date, minutes };
}

/** Europe/Istanbul'da bugünün tarihini YYYY-MM-DD olarak döner (date input min değeri için). */
export function getIstanbulTodayDateString(): string {
  return getIstanbulNow().date;
}

export function isWeekend(dateStr: string): boolean {
  const day = new Date(`${dateStr}T12:00:00`).getDay();
  return day === 0 || day === 6;
}

/**
 * Seçilen tarih ve çalışma süresine göre uygun randevu saatlerini döner.
 * - Hafta içi 19:00-22:30, hafta sonu 10:00-22:30 aralığında çalışır.
 * - Bitiş saati asla 22:30'u geçmez.
 * - Bugünün tarihi seçiliyse geçmiş saatler elenir.
 * - Mevcut rezervasyonlarla çakışan saatler elenir.
 * - Seanslar arasında ekstra mola eklenmez (slotlar art arda dizilir).
 */
export function getAvailableSlots(
  dateStr: string,
  durationMinutes: number,
  bookedSlots: BookedSlot[]
): string[] {
  const { open, close } = isWeekend(dateStr)
    ? BUSINESS_HOURS.weekend
    : BUSINESS_HOURS.weekday;
  const openMin = toMinutes(open);
  const closeMin = toMinutes(close);

  const slots: string[] = [];
  for (
    let start = openMin;
    start + durationMinutes <= closeMin;
    start += durationMinutes
  ) {
    slots.push(toHHMM(start));
  }

  const now = getIstanbulNow();
  const isToday = dateStr === now.date;

  return slots.filter((slot) => {
    const slotStart = toMinutes(slot);
    if (isToday && slotStart <= now.minutes) return false;

    const slotEnd = slotStart + durationMinutes;
    const overlaps = bookedSlots.some((b) => {
      if (b.date !== dateStr) return false;
      const bStart = toMinutes(b.time);
      const bEnd = bStart + b.durationMinutes;
      return slotStart < bEnd && bStart < slotEnd;
    });
    return !overlaps;
  });
}

const STORAGE_KEY = "elaris-booked-slots";

/**
 * Not: Henüz bir rezervasyon backend'i bağlı değil. Çakışan randevu
 * oluşturulmasını engellemek için bu tarayıcıda localStorage kullanılır.
 * Gerçek/çok kullanıcılı çakışma kontrolü için ileride bir backend gerekir.
 */
export function getBookedSlots(): BookedSlot[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as BookedSlot[]) : [];
  } catch {
    return [];
  }
}

export function addBookedSlot(slot: BookedSlot) {
  if (typeof window === "undefined") return;
  const current = getBookedSlots();
  window.localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([...current, slot])
  );
}
