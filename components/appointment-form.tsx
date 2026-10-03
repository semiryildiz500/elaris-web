"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { services, type Service } from "@/lib/data";
import {
  addBookedSlot,
  getAvailableSlots,
  getBookedSlots,
  getIstanbulTodayDateString,
  type BookedSlot,
} from "@/lib/bookings";

const inputClasses =
  "w-full rounded-xl border border-ink/15 bg-white/70 px-4 py-3 text-sm text-ink placeholder:text-ink/35 outline-none transition-colors focus:border-gold";

type Step =
  | "service"
  | "date"
  | "time"
  | "contact"
  | "summary"
  | "payment"
  | "success";

export default function AppointmentForm() {
  const searchParams = useSearchParams();
  const preselectedSlug = services.find(
    (s) => s.slug === searchParams.get("service")
  )?.slug;

  const [serviceSlug, setServiceSlug] = useState<string | undefined>(
    preselectedSlug
  );
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [fullName, setFullName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [step, setStep] = useState<Step>(preselectedSlug ? "date" : "service");
  const [bookedSlots, setBookedSlots] = useState<BookedSlot[]>([]);

  useEffect(() => {
    // localStorage yalnızca istemcide erişilebilir; ilk render'dan sonra
    // mevcut rezervasyonları yüklüyoruz.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBookedSlots(getBookedSlots());
  }, []);

  const service = services.find((s) => s.slug === serviceSlug);
  const today = useMemo(() => getIstanbulTodayDateString(), []);

  const reset = () => {
    setServiceSlug(preselectedSlug);
    setDate("");
    setTime("");
    setFullName("");
    setWhatsapp("");
    setBookedSlots(getBookedSlots());
    setStep(preselectedSlug ? "date" : "service");
  };

  if (step === "success") {
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
          onClick={reset}
          className="mt-8 inline-flex items-center justify-center rounded-full border border-gold px-6 py-2.5 text-xs font-semibold uppercase tracking-wide text-gold transition-colors hover:bg-gold hover:text-cream"
        >
          Başka bir randevu talebi oluştur
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-gold/20 bg-white/70 p-6 text-left shadow-[0_18px_45px_-28px_rgba(43,36,32,0.3)] sm:p-10">
      <StepIndicator step={step} />

      {service && step !== "service" && (
        <div className="mt-6 flex items-center justify-between gap-4 rounded-xl border border-gold/30 bg-gold/5 px-4 py-3">
          <div>
            <p className="text-sm font-medium text-ink">{service.name}</p>
            <p className="mt-0.5 text-xs text-ink/60">
              {service.duration} · {service.price}
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setServiceSlug(undefined);
              setDate("");
              setTime("");
              setStep("service");
            }}
            className="shrink-0 text-xs font-medium text-gold underline underline-offset-2 transition-colors hover:text-ink"
          >
            Değiştir
          </button>
        </div>
      )}

      <div className="mt-6">
        {step === "service" && (
          <ServiceStep
            value={serviceSlug}
            onSelect={(slug) => {
              setServiceSlug(slug);
              setStep("date");
            }}
          />
        )}

        {step === "date" && service && (
          <DateStep
            date={date}
            today={today}
            onBack={() => setStep("service")}
            onContinue={(d) => {
              setDate(d);
              setTime("");
              setStep("time");
            }}
          />
        )}

        {step === "time" && service && (
          <TimeStep
            date={date}
            service={service}
            bookedSlots={bookedSlots}
            onBack={() => setStep("date")}
            onContinue={(t) => {
              setTime(t);
              setStep("contact");
            }}
          />
        )}

        {step === "contact" && (
          <ContactStep
            fullName={fullName}
            whatsapp={whatsapp}
            onBack={() => setStep("time")}
            onContinue={(values) => {
              setFullName(values.fullName);
              setWhatsapp(values.whatsapp);
              setStep("summary");
            }}
          />
        )}

        {step === "summary" && service && (
          <SummaryStep
            service={service}
            date={date}
            time={time}
            onBack={() => setStep("contact")}
            onContinue={() => setStep("payment")}
          />
        )}

        {step === "payment" && service && (
          <PaymentStep
            onBack={() => setStep("summary")}
            onConfirm={() => {
              addBookedSlot({
                date,
                time,
                durationMinutes: parseInt(service.duration, 10),
              });
              setStep("success");
            }}
          />
        )}
      </div>
    </div>
  );
}

const STEP_LABELS: { key: Step; label: string }[] = [
  { key: "service", label: "Çalışma" },
  { key: "date", label: "Tarih" },
  { key: "time", label: "Saat" },
  { key: "contact", label: "İletişim" },
  { key: "summary", label: "Özet" },
  { key: "payment", label: "Ödeme" },
];

function StepIndicator({ step }: { step: Step }) {
  const activeIndex = STEP_LABELS.findIndex((s) => s.key === step);
  return (
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-2 text-[11px] font-medium uppercase tracking-[0.12em] text-ink/40">
      {STEP_LABELS.map((s, i) => (
        <li key={s.key} className="flex items-center gap-2">
          <span
            className={
              i <= activeIndex
                ? "rounded-full bg-gold px-2.5 py-1 text-cream"
                : "rounded-full border border-ink/15 px-2.5 py-1"
            }
          >
            {i + 1}. {s.label}
          </span>
          {i < STEP_LABELS.length - 1 && (
            <span className="text-ink/20">—</span>
          )}
        </li>
      ))}
    </ol>
  );
}

function ServiceStep({
  value,
  onSelect,
}: {
  value: string | undefined;
  onSelect: (slug: string) => void;
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs font-medium uppercase tracking-[0.15em] text-ink/60">
        Hangi çalışma için randevu almak istersiniz?
      </span>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {services.map((s) => (
          <button
            key={s.slug}
            type="button"
            onClick={() => onSelect(s.slug)}
            className={`rounded-xl border px-4 py-3 text-left text-sm transition-colors ${
              value === s.slug
                ? "border-gold bg-gold/10 text-ink"
                : "border-ink/15 bg-white/60 text-ink/80 hover:border-gold/50"
            }`}
          >
            <span className="block font-medium">{s.name}</span>
            <span className="mt-0.5 block text-xs text-ink/50">
              {s.duration} · {s.price}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function DateStep({
  date,
  today,
  onBack,
  onContinue,
}: {
  date: string;
  today: string;
  onBack: () => void;
  onContinue: (date: string) => void;
}) {
  const [value, setValue] = useState(date);

  return (
    <div className="flex flex-col gap-4">
      <label className="flex flex-col gap-2">
        <span className="text-xs font-medium uppercase tracking-[0.15em] text-ink/60">
          Tarih seçin
        </span>
        <input
          type="date"
          required
          min={today}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={inputClasses}
        />
        <span className="text-xs text-ink/45">
          Hafta içi 19:00–22:30, hafta sonu 10:00–22:30 arası randevu
          alınabilir.
        </span>
      </label>

      <StepNav
        onBack={onBack}
        onContinue={() => value && onContinue(value)}
        continueDisabled={!value}
      />
    </div>
  );
}

function TimeStep({
  date,
  service,
  bookedSlots,
  onBack,
  onContinue,
}: {
  date: string;
  service: Service;
  bookedSlots: BookedSlot[];
  onBack: () => void;
  onContinue: (time: string) => void;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // "Şu an" (Europe/Istanbul) istemcide hesaplanır; sunucu ile uyumlu
    // ilk render'dan sonra saat dilimlerini hesaplamaya başlıyoruz.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const slots = useMemo(() => {
    if (!mounted) return [];
    return getAvailableSlots(date, parseInt(service.duration, 10), bookedSlots);
  }, [mounted, date, service.duration, bookedSlots]);

  const [selected, setSelected] = useState<string | null>(null);

  if (!mounted) return null;

  return (
    <div className="flex flex-col gap-4">
      <span className="text-xs font-medium uppercase tracking-[0.15em] text-ink/60">
        Uygun saat seçin ({service.duration})
      </span>

      {slots.length === 0 ? (
        <p className="rounded-xl border border-beige bg-cream/60 p-4 text-sm text-ink/60">
          Bu tarihte uygun saat kalmamış. Lütfen başka bir tarih seçin.
        </p>
      ) : (
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
          {slots.map((slot) => (
            <button
              key={slot}
              type="button"
              onClick={() => setSelected(slot)}
              className={`rounded-xl border px-3 py-2.5 text-sm font-medium transition-colors ${
                selected === slot
                  ? "border-gold bg-gold text-cream"
                  : "border-ink/15 bg-white/60 text-ink hover:border-gold/50"
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      )}

      <StepNav
        onBack={onBack}
        onContinue={() => selected && onContinue(selected)}
        continueDisabled={!selected}
      />
    </div>
  );
}

function ContactStep({
  fullName,
  whatsapp,
  onBack,
  onContinue,
}: {
  fullName: string;
  whatsapp: string;
  onBack: () => void;
  onContinue: (values: { fullName: string; whatsapp: string }) => void;
}) {
  const [name, setName] = useState(fullName);
  const [phone, setPhone] = useState(whatsapp);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    onContinue({ fullName: name, whatsapp: phone });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label className="flex flex-col gap-2">
        <span className="text-xs font-medium uppercase tracking-[0.15em] text-ink/60">
          Ad Soyad
        </span>
        <input
          type="text"
          required
          autoComplete="name"
          placeholder="Adınız ve soyadınız"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClasses}
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-xs font-medium uppercase tracking-[0.15em] text-ink/60">
          WhatsApp Numarası
        </span>
        <input
          type="tel"
          required
          autoComplete="tel"
          placeholder="05xx xxx xx xx"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={inputClasses}
        />
      </label>

      <StepNav
        onBack={onBack}
        continueType="submit"
        continueDisabled={!name || !phone}
      />
    </form>
  );
}

function SummaryStep({
  service,
  date,
  time,
  onBack,
  onContinue,
}: {
  service: Service;
  date: string;
  time: string;
  onBack: () => void;
  onContinue: () => void;
}) {
  const [legalChecked, setLegalChecked] = useState({
    onBilgilendirme: false,
    mesafeliSozlesme: false,
    iptalCaymaIade: false,
    kvkk: false,
  });
  const [marketingOptIn, setMarketingOptIn] = useState(false);
  const allRequiredChecked = Object.values(legalChecked).every(Boolean);

  return (
    <div className="flex flex-col gap-6">
      <dl className="space-y-3 rounded-xl border border-beige bg-cream/60 p-5">
        <SummaryRow label="Çalışma" value={service.name} />
        <SummaryRow label="Açıklama" value={service.description} />
        <SummaryRow label="Tarih" value={date} />
        <SummaryRow label="Saat" value={time} />
        <SummaryRow label="Süre" value={service.duration} />
        <SummaryRow label="Toplam Ücret" value={service.price} />
        <SummaryRow label="Hizmeti Sunan" value="Fethiye Karseri / ELARIS" />
      </dl>

      <p className="text-xs leading-relaxed text-ink/50">
        Bu çalışmanın kapsamı ve önemli bilgilendirme için{" "}
        <Link
          href="/yasal/calismalarin-kapsami-ve-onemli-bilgilendirme"
          target="_blank"
          className="text-gold underline underline-offset-2"
        >
          Çalışmaların Kapsamı ve Önemli Bilgilendirme
        </Link>{" "}
        sayfasını inceleyiniz.
      </p>

      <div className="space-y-3">
        <LegalCheckbox
          checked={legalChecked.onBilgilendirme}
          onChange={(v) =>
            setLegalChecked((c) => ({ ...c, onBilgilendirme: v }))
          }
        >
          <Link
            href="/yasal/on-bilgilendirme-formu"
            target="_blank"
            className="text-gold underline underline-offset-2"
          >
            Ön Bilgilendirme Formu
          </Link>
          &apos;nu okudum ve onaylıyorum.
        </LegalCheckbox>

        <LegalCheckbox
          checked={legalChecked.mesafeliSozlesme}
          onChange={(v) =>
            setLegalChecked((c) => ({ ...c, mesafeliSozlesme: v }))
          }
        >
          <Link
            href="/yasal/mesafeli-hizmet-sozlesmesi"
            target="_blank"
            className="text-gold underline underline-offset-2"
          >
            Mesafeli Hizmet Sözleşmesi
          </Link>
          &apos;ni okudum ve onaylıyorum.
        </LegalCheckbox>

        <LegalCheckbox
          checked={legalChecked.iptalCaymaIade}
          onChange={(v) =>
            setLegalChecked((c) => ({ ...c, iptalCaymaIade: v }))
          }
        >
          <Link
            href="/yasal/iptal-degisiklik-cayma-iade-politikasi"
            target="_blank"
            className="text-gold underline underline-offset-2"
          >
            İptal, Değişiklik, Cayma ve İade Politikası
          </Link>
          &apos;nı okudum ve onaylıyorum.
        </LegalCheckbox>

        <LegalCheckbox
          checked={legalChecked.kvkk}
          onChange={(v) => setLegalChecked((c) => ({ ...c, kvkk: v }))}
        >
          <Link
            href="/yasal/kvkk-aydinlatma-metni"
            target="_blank"
            className="text-gold underline underline-offset-2"
          >
            KVKK Aydınlatma Metni
          </Link>
          &apos;ni okudum ve bilgilendirildim.
        </LegalCheckbox>

        <div className="my-2 border-t border-beige" />

        <LegalCheckbox checked={marketingOptIn} onChange={setMarketingOptIn}>
          Kampanya ve bilgilendirme mesajları almak istiyorum{" "}
          <span className="text-ink/40">
            (opsiyonel, randevu için gerekli değildir)
          </span>
          .
        </LegalCheckbox>
      </div>

      <StepNav
        onBack={onBack}
        onContinue={onContinue}
        continueDisabled={!allRequiredChecked}
        continueLabel="Ödemeye Geç"
      />
    </div>
  );
}

/**
 * Ödeme adımı — yalnızca arayüz hazırlığıdır. Kart alanları devre dışıdır,
 * hiçbir kart bilgisi toplanmaz veya işlenmez. Gerçek bir ödeme sağlayıcısı
 * (ör. PayTR) bağlandığında, bu adım o sağlayıcının checkout/iframe akışıyla
 * değiştirilmeli ve randevu yalnızca sağlayıcıdan dönen GERÇEK ödeme
 * sonucuna göre kesinleştirilmelidir. Sahte "ödeme başarılı" durumu asla
 * üretilmemelidir — onConfirm burada yalnızca ödemesiz bir randevu talebini
 * kaydeder.
 */
function PaymentStep({
  onBack,
  onConfirm,
}: {
  onBack: () => void;
  onConfirm: () => void;
}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-xl border border-beige bg-cream/60 p-5">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink/50">
          Ödeme
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink/60">
          Online ödeme altyapımız yakında etkinleştirilecektir. Şu an için
          randevu talebiniz, ödeme olmadan alınır; onay ve ödeme detayları
          için sizinle iletişime geçilecektir.
        </p>

        <div className="mt-5 space-y-3 opacity-50">
          <input
            disabled
            placeholder="Kart Numarası"
            className={`${inputClasses} cursor-not-allowed`}
          />
          <div className="grid grid-cols-2 gap-3">
            <input
              disabled
              placeholder="AA/YY"
              className={`${inputClasses} cursor-not-allowed`}
            />
            <input
              disabled
              placeholder="CVC"
              className={`${inputClasses} cursor-not-allowed`}
            />
          </div>
        </div>
      </div>

      <StepNav
        onBack={onBack}
        onContinue={onConfirm}
        continueLabel="Randevu Talebini Gönder"
      />
    </div>
  );
}

function StepNav({
  onBack,
  onContinue,
  continueType = "button",
  continueDisabled,
  continueLabel = "Devam Et",
}: {
  onBack: () => void;
  onContinue?: () => void;
  continueType?: "button" | "submit";
  continueDisabled?: boolean;
  continueLabel?: string;
}) {
  return (
    <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:items-center">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center justify-center rounded-full border border-ink/15 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
      >
        Geri
      </button>
      <button
        type={continueType}
        onClick={continueType === "button" ? onContinue : undefined}
        disabled={continueDisabled}
        className="inline-flex flex-1 items-center justify-center rounded-full bg-ink px-8 py-4 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-gold disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-ink"
      >
        {continueLabel}
      </button>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 text-sm">
      <dt className="text-ink/50">{label}</dt>
      <dd className="font-medium text-ink">{value}</dd>
    </div>
  );
}

function LegalCheckbox({
  checked,
  onChange,
  children,
}: {
  checked: boolean;
  onChange: (value: boolean) => void;
  children: React.ReactNode;
}) {
  return (
    <label className="flex items-start gap-3 text-sm leading-relaxed text-ink/75">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 h-4 w-4 shrink-0 accent-gold"
      />
      <span>{children}</span>
    </label>
  );
}
