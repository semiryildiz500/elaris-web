"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { services as servicesTr, type Service } from "@/lib/data";
import { servicesEn } from "@/lib/data.en";
import { getDictionary, type Locale } from "@/lib/i18n";
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

export default function AppointmentForm({
  locale = "tr",
}: {
  locale?: Locale;
}) {
  const dict = getDictionary(locale).booking;
  const services = locale === "en" ? servicesEn : servicesTr;

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
          {dict.success.title}
        </p>
        <p className="mt-3 text-base leading-relaxed text-ink/70">
          {dict.success.subtitle}
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 inline-flex items-center justify-center rounded-full border border-gold px-6 py-2.5 text-xs font-semibold uppercase tracking-wide text-gold transition-colors hover:bg-gold hover:text-cream"
        >
          {dict.success.resetButton}
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-gold/20 bg-white/70 p-6 text-left shadow-[0_18px_45px_-28px_rgba(43,36,32,0.3)] sm:p-10">
      <StepIndicator step={step} locale={locale} />

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
            {dict.change}
          </button>
        </div>
      )}

      <div className="mt-6">
        {step === "service" && (
          <ServiceStep
            services={services}
            value={serviceSlug}
            locale={locale}
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
            locale={locale}
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
            locale={locale}
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
            locale={locale}
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
            locale={locale}
            onBack={() => setStep("contact")}
            onContinue={() => setStep("payment")}
          />
        )}

        {step === "payment" && service && (
          <PaymentStep
            locale={locale}
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

function StepIndicator({ step, locale }: { step: Step; locale: Locale }) {
  const dict = getDictionary(locale).booking;
  const stepLabels: { key: Step; label: string }[] = [
    { key: "service", label: dict.steps.service },
    { key: "date", label: dict.steps.date },
    { key: "time", label: dict.steps.time },
    { key: "contact", label: dict.steps.contact },
    { key: "summary", label: dict.steps.summary },
    { key: "payment", label: dict.steps.payment },
  ];
  const activeIndex = stepLabels.findIndex((s) => s.key === step);
  return (
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-2 text-[11px] font-medium uppercase tracking-[0.12em] text-ink/40">
      {stepLabels.map((s, i) => (
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
          {i < stepLabels.length - 1 && <span className="text-ink/20">—</span>}
        </li>
      ))}
    </ol>
  );
}

function ServiceStep({
  services,
  value,
  locale,
  onSelect,
}: {
  services: Service[];
  value: string | undefined;
  locale: Locale;
  onSelect: (slug: string) => void;
}) {
  const dict = getDictionary(locale).booking;
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs font-medium uppercase tracking-[0.15em] text-ink/60">
        {dict.sessionPrompt}
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
  locale,
  onBack,
  onContinue,
}: {
  date: string;
  today: string;
  locale: Locale;
  onBack: () => void;
  onContinue: (date: string) => void;
}) {
  const dict = getDictionary(locale).booking;
  const [value, setValue] = useState(date);

  return (
    <div className="flex flex-col gap-4">
      <label className="flex flex-col gap-2">
        <span className="text-xs font-medium uppercase tracking-[0.15em] text-ink/60">
          {dict.dateLabel}
        </span>
        <input
          type="date"
          required
          min={today}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={inputClasses}
        />
        <span className="text-xs text-ink/45">{dict.hoursNote}</span>
      </label>

      <StepNav
        locale={locale}
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
  locale,
  onBack,
  onContinue,
}: {
  date: string;
  service: Service;
  bookedSlots: BookedSlot[];
  locale: Locale;
  onBack: () => void;
  onContinue: (time: string) => void;
}) {
  const dict = getDictionary(locale).booking;
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
        {dict.timeLabelPrefix} ({service.duration})
      </span>

      {slots.length === 0 ? (
        <p className="rounded-xl border border-beige bg-cream/60 p-4 text-sm text-ink/60">
          {dict.noSlots}
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
        locale={locale}
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
  locale,
  onBack,
  onContinue,
}: {
  fullName: string;
  whatsapp: string;
  locale: Locale;
  onBack: () => void;
  onContinue: (values: { fullName: string; whatsapp: string }) => void;
}) {
  const dict = getDictionary(locale).booking;
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
          {dict.nameLabel}
        </span>
        <input
          type="text"
          required
          autoComplete="name"
          placeholder={dict.namePlaceholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClasses}
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-xs font-medium uppercase tracking-[0.15em] text-ink/60">
          {dict.whatsappLabel}
        </span>
        <input
          type="tel"
          required
          autoComplete="tel"
          placeholder={dict.whatsappPlaceholder}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={inputClasses}
        />
      </label>

      <StepNav
        locale={locale}
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
  locale,
  onBack,
  onContinue,
}: {
  service: Service;
  date: string;
  time: string;
  locale: Locale;
  onBack: () => void;
  onContinue: () => void;
}) {
  const dict = getDictionary(locale).booking.summary;
  const homeBase = locale === "en" ? "/en" : "";
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
        <SummaryRow label={dict.serviceLabel} value={service.name} />
        <SummaryRow label={dict.descriptionLabel} value={service.description} />
        <SummaryRow label={dict.dateLabel} value={date} />
        <SummaryRow label={dict.timeLabel} value={time} />
        <SummaryRow label={dict.durationLabel} value={service.duration} />
        <SummaryRow label={dict.priceLabel} value={service.price} />
        <SummaryRow label={dict.providerLabel} value={dict.providerValue} />
      </dl>

      <p className="text-xs leading-relaxed text-ink/50">
        {dict.scopeNotePrefix}{" "}
        <Link
          href={`${homeBase}/yasal/calismalarin-kapsami-ve-onemli-bilgilendirme`}
          target="_blank"
          className="text-gold underline underline-offset-2"
        >
          {dict.scopeNoteLink}
        </Link>{" "}
        {dict.scopeNoteSuffix}
      </p>

      <p className="rounded-xl border border-gold/20 bg-gold/5 p-4 text-xs leading-relaxed text-ink/70">
        {dict.cancellationNotice}
      </p>

      <div className="space-y-3">
        <LegalCheckbox
          checked={legalChecked.onBilgilendirme}
          onChange={(v) =>
            setLegalChecked((c) => ({ ...c, onBilgilendirme: v }))
          }
        >
          <Link
            href={`${homeBase}/yasal/on-bilgilendirme-formu`}
            target="_blank"
            className="text-gold underline underline-offset-2"
          >
            {dict.preInfoLink}
          </Link>
          {dict.preInfoSuffix}
        </LegalCheckbox>

        <LegalCheckbox
          checked={legalChecked.mesafeliSozlesme}
          onChange={(v) =>
            setLegalChecked((c) => ({ ...c, mesafeliSozlesme: v }))
          }
        >
          <Link
            href={`${homeBase}/yasal/mesafeli-hizmet-sozlesmesi`}
            target="_blank"
            className="text-gold underline underline-offset-2"
          >
            {dict.agreementLink}
          </Link>
          {dict.agreementSuffix}
        </LegalCheckbox>

        <LegalCheckbox
          checked={legalChecked.iptalCaymaIade}
          onChange={(v) =>
            setLegalChecked((c) => ({ ...c, iptalCaymaIade: v }))
          }
        >
          <Link
            href={`${homeBase}/yasal/iptal-degisiklik-cayma-iade-politikasi`}
            target="_blank"
            className="text-gold underline underline-offset-2"
          >
            {dict.cancellationLink}
          </Link>
          {dict.cancellationSuffix}
        </LegalCheckbox>

        <LegalCheckbox
          checked={legalChecked.kvkk}
          onChange={(v) => setLegalChecked((c) => ({ ...c, kvkk: v }))}
        >
          <Link
            href={`${homeBase}/yasal/kvkk-aydinlatma-metni`}
            target="_blank"
            className="text-gold underline underline-offset-2"
          >
            {dict.kvkkLink}
          </Link>
          {dict.kvkkSuffix}
        </LegalCheckbox>

        <div className="my-2 border-t border-beige" />

        <LegalCheckbox checked={marketingOptIn} onChange={setMarketingOptIn}>
          {dict.marketingText}{" "}
          <span className="text-ink/40">{dict.marketingNote}</span>
        </LegalCheckbox>
      </div>

      <StepNav
        locale={locale}
        onBack={onBack}
        onContinue={onContinue}
        continueDisabled={!allRequiredChecked}
        continueLabel={dict.continueLabel}
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
  locale,
  onBack,
  onConfirm,
}: {
  locale: Locale;
  onBack: () => void;
  onConfirm: () => void;
}) {
  const dict = getDictionary(locale).booking.payment;
  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-xl border border-beige bg-cream/60 p-5">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink/50">
          {dict.heading}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink/60">
          {dict.note}
        </p>

        <div className="mt-5 space-y-3 opacity-50">
          <input
            disabled
            placeholder={dict.cardNumberPlaceholder}
            className={`${inputClasses} cursor-not-allowed`}
          />
          <div className="grid grid-cols-2 gap-3">
            <input
              disabled
              placeholder={dict.expiryPlaceholder}
              className={`${inputClasses} cursor-not-allowed`}
            />
            <input
              disabled
              placeholder={dict.cvcPlaceholder}
              className={`${inputClasses} cursor-not-allowed`}
            />
          </div>
        </div>
      </div>

      <StepNav
        locale={locale}
        onBack={onBack}
        onContinue={onConfirm}
        continueLabel={dict.submitLabel}
      />
    </div>
  );
}

function StepNav({
  locale,
  onBack,
  onContinue,
  continueType = "button",
  continueDisabled,
  continueLabel,
}: {
  locale: Locale;
  onBack: () => void;
  onContinue?: () => void;
  continueType?: "button" | "submit";
  continueDisabled?: boolean;
  continueLabel?: string;
}) {
  const dict = getDictionary(locale).booking;
  return (
    <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:items-center">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center justify-center rounded-full border border-ink/15 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
      >
        {dict.back}
      </button>
      <button
        type={continueType}
        onClick={continueType === "button" ? onContinue : undefined}
        disabled={continueDisabled}
        className="inline-flex flex-1 items-center justify-center rounded-full bg-ink px-8 py-4 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-gold disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-ink"
      >
        {continueLabel ?? dict.continue}
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
