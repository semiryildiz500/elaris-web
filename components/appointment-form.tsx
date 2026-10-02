"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/data";

const timeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
];

const inputClasses =
  "w-full rounded-xl border border-ink/15 bg-white/70 px-4 py-3 text-sm text-ink placeholder:text-ink/35 outline-none transition-colors focus:border-gold";

export default function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-gold/20 bg-white/70 px-8 py-12 text-center shadow-[0_18px_45px_-28px_rgba(43,36,32,0.3)]">
        <p className="font-serif text-xl leading-relaxed text-ink sm:text-2xl">
          Randevu talebiniz alınmıştır.
        </p>
        <p className="mt-3 text-base leading-relaxed text-ink/70">
          En kısa sürede sizinle iletişime geçilecektir.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 inline-flex items-center justify-center rounded-full border border-gold px-6 py-2.5 text-xs font-semibold uppercase tracking-wide text-gold transition-colors hover:bg-gold hover:text-cream"
        >
          Başka bir randevu talebi oluştur
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-gold/20 bg-white/70 p-6 text-left shadow-[0_18px_45px_-28px_rgba(43,36,32,0.3)] sm:p-10"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 sm:col-span-2">
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-ink/60">
            Hizmet Seçimi
          </span>
          <select required className={inputClasses} defaultValue="">
            <option value="" disabled>
              Bir çalışma seçin
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.name}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-ink/60">
            Tarih
          </span>
          <input
            type="date"
            required
            className={inputClasses}
            min={new Date().toISOString().split("T")[0]}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-ink/60">
            Uygun Saat
          </span>
          <select required className={inputClasses} defaultValue="">
            <option value="" disabled>
              Saat seçin
            </option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-ink/60">
            Ad Soyad
          </span>
          <input
            type="text"
            required
            autoComplete="name"
            placeholder="Adınız ve soyadınız"
            className={inputClasses}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-ink/60">
            Telefon
          </span>
          <input
            type="tel"
            required
            autoComplete="tel"
            placeholder="05xx xxx xx xx"
            className={inputClasses}
          />
        </label>

        <label className="flex flex-col gap-2 sm:col-span-2">
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-ink/60">
            E-posta <span className="normal-case text-ink/40">(opsiyonel)</span>
          </span>
          <input
            type="email"
            autoComplete="email"
            placeholder="ornek@eposta.com"
            className={inputClasses}
          />
        </label>

        <label className="flex flex-col gap-2 sm:col-span-2">
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-ink/60">
            Kısa Not <span className="normal-case text-ink/40">(opsiyonel)</span>
          </span>
          <textarea
            rows={3}
            placeholder="Eklemek istediğiniz bir not var mı?"
            className={`${inputClasses} resize-none`}
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-ink px-10 py-4 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-gold sm:w-auto"
      >
        Randevu Talebi Gönder
      </button>
    </form>
  );
}
