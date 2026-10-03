export type Locale = "tr" | "en";

export const locales: Locale[] = ["tr", "en"];

export const siteUrl = "https://elarisdanismanlik.com";

export function localeHref(locale: Locale, path: string): string {
  const clean = path === "/" ? "" : path;
  return locale === "en" ? `/en${clean || ""}` || "/en" : clean || "/";
}

/** Verilen TR tabanlı path'i diğer dile çevirir (ör. /calismalar/x <-> /en/calismalar/x). */
export function togglePathLocale(pathname: string): string {
  if (pathname.startsWith("/en")) {
    const rest = pathname.slice(3);
    return rest === "" ? "/" : rest;
  }
  return `/en${pathname === "/" ? "" : pathname}`;
}

export const dictionary = {
  tr: {
    nav: {
      home: "Ana Sayfa",
      fethiyeKarseri: "Fethiye Karseri",
      sessions: "ELARIS Çalışmaları",
      teachings: "Öğretiler",
      workshops: "Workshoplar",
      certificates: "Sertifikalar",
      contact: "İletişim",
      bookSession: "Randevu Al",
    },
    hero: {
      signature: "Elaris",
      founderLabel: "Fethiye Karseri",
      titleLine1: "Kendine dönüş,",
      titleLine2: "bazen sadece hatırlamaktır.",
      paragraph:
        "ELARIS, kendi iç dünyanızla yeniden temas kurmanız için sakin, saygılı ve özenle tasarlanmış bir alan sunar. Her çalışma, size ait olan farkındalığı yeniden hatırlamanıza eşlik eder.",
      bookButton: "Randevu Al",
      exploreButton: "Çalışmaları Keşfet",
    },
    welcome: {
      eyebrow: "Elaris'e Hoş Geldiniz",
      heading: "Farkındalığa alan açan bir yaklaşım",
      paragraph1:
        "ELARIS, kendinizle kurduğunuz ilişkiyi derinleştirmek isteyenler için tasarlanmış bir enerji çalışmaları alanıdır. Her seans, bireysel ritminize saygı duyan, yargılamayan bir yaklaşımla yürütülür; tıbbi ya da psikolojik bir tedavi, teşhis veya kesin sonuç iddiası taşımaz.",
      paragraph2:
        "İster ilk kez adım atıyor olun, ister yolculuğunuza devam ediyor olun; ELARIS sizi olduğunuz gibi karşılar ve kendi iç bilgeliğinizle temas kurmanız için sakin bir alan açar.",
    },
    about: {
      eyebrow: "Kurucu",
      heading: "Fethiye Karseri",
      paragraph1:
        "Fethiye Karseri, yıllardır sürdürdüğü kişisel ve profesyonel yolculuğunu; enerji çalışmaları, farkındalık ve kendi dönüşüm deneyimleriyle harmanlayan bir yol arkadaşıdır.",
      paragraph2:
        "ELARIS'te her çalışma; kişinin kendisiyle yeniden temas kurabileceği, yargılanmadan dinlenebileceği ve kendi farkındalığını keşfedebileceği sakin bir alan sunar.",
      paragraph3:
        "Burada hazır cevaplar ya da kesin sonuç vaatleri yoktur. Amaç; size ne yapmanız gerektiğini söylemek değil, kendi cevaplarınıza yaklaşabileceğiniz alanı açmaktır.",
    },
    services: {
      eyebrow: "Elaris Çalışmaları",
      heading: "Size eşlik eden çalışmalar",
      intro:
        "Tüm çalışmalar hem online hem yüz yüze olarak gerçekleştirilebilir. Her çalışmanın süresi ve ücreti ilgili kartta belirtilmiştir.",
      detailsButton: "Detaylar & Ön Bilgilendirme",
      bookButton: "Randevu Al",
      durationLabel: "Süre",
      priceLabel: "Ücret",
    },
    serviceDetail: {
      eyebrow: "Detaylar & Ön Bilgilendirme",
      durationLabel: "Süre",
      priceLabel: "Ücret",
      descriptionHeading: "Açıklama",
      methodHeading: "Uygulama Şekli",
      cancellationHeading: "İptal / Değişiklik Bilgisi",
      viewPolicy: "Politikayı görüntüle",
      bookButton: "Randevu Al",
      closeAria: "Kapat",
      backToSessions: "← Çalışmalara Dön",
    },
    workshops: {
      eyebrow: "Workshoplar & Buluşmalar",
      heading: "Birlikte deneyimlenen alanlar",
      intro:
        "Yaklaşan workshop ve buluşmalarımızın görselleri, tarihleri ve detayları çok yakında bu alanda paylaşılacak.",
      detailButton: "Detay",
      bookButton: "Katılım / Rezervasyon",
    },
    certificates: {
      eyebrow: "Sertifikalar & Eğitimler",
      heading: "Eğitim ve uzmanlık yolculuğu",
    },
    contact: {
      eyebrow: "İletişim",
      heading: "Size ulaşmanın en kolay yolu",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      whatsappMessage: "Merhaba, ELARIS hakkında bilgi almak istiyorum.",
    },
    appointmentCta: {
      eyebrow: "Randevu",
      heading: "Kendinize zaman ayırın",
      intro:
        "Size uygun çalışmayı, tarihi ve saati seçin; birkaç adımda randevu talebinizi iletelim.",
      whatsappHelp:
        "Randevunuzla ilgili yardıma mı ihtiyacınız var? WhatsApp üzerinden iletişime geçin.",
    },
    booking: {
      steps: {
        service: "Çalışma",
        date: "Tarih",
        time: "Saat",
        contact: "İletişim",
        summary: "Özet",
        payment: "Ödeme",
      },
      sessionPrompt: "Hangi çalışma için randevu almak istersiniz?",
      change: "Değiştir",
      dateLabel: "Tarih seçin",
      hoursNote:
        "Hafta içi 19:00–22:30, hafta sonu 10:00–22:30 arası randevu alınabilir.",
      timeLabelPrefix: "Uygun saat seçin",
      noSlots: "Bu tarihte uygun saat kalmamış. Lütfen başka bir tarih seçin.",
      nameLabel: "Ad Soyad",
      namePlaceholder: "Adınız ve soyadınız",
      whatsappLabel: "WhatsApp Numarası",
      whatsappPlaceholder: "05xx xxx xx xx",
      back: "Geri",
      continue: "Devam Et",
      summary: {
        serviceLabel: "Çalışma",
        descriptionLabel: "Açıklama",
        dateLabel: "Tarih",
        timeLabel: "Saat",
        durationLabel: "Süre",
        priceLabel: "Toplam Ücret",
        providerLabel: "Hizmeti Sunan",
        providerValue: "Fethiye Karseri / ELARIS",
        scopeNotePrefix: "Bu çalışmanın kapsamı ve önemli bilgilendirme için",
        scopeNoteLink: "Çalışmaların Kapsamı ve Önemli Bilgilendirme",
        scopeNoteSuffix: "sayfasını inceleyiniz.",
        cancellationNotice:
          "Randevu saatinden en az 24 saat önce yapılan iptallerde ödenen hizmet bedeli iade edilir. Randevu saatine 24 saatten az süre kala yapılan iptallerde ücret iadesi yapılmaz.",
        preInfoLink: "Ön Bilgilendirme Formu",
        preInfoSuffix: "'nu okudum ve onaylıyorum.",
        agreementLink: "Mesafeli Hizmet Sözleşmesi",
        agreementSuffix: "'ni okudum ve onaylıyorum.",
        cancellationLink: "İptal, Değişiklik, Cayma ve İade Politikası",
        cancellationSuffix: "'nı okudum ve onaylıyorum.",
        kvkkLink: "KVKK Aydınlatma Metni",
        kvkkSuffix: "'ni okudum ve bilgilendirildim.",
        marketingText:
          "Kampanya ve bilgilendirme mesajları almak istiyorum",
        marketingNote: "(opsiyonel, randevu için gerekli değildir).",
        continueLabel: "Ödemeye Geç",
      },
      payment: {
        heading: "Ödeme",
        note: "Online ödeme altyapımız yakında etkinleştirilecektir. Şu an için randevu talebiniz, ödeme olmadan alınır; onay ve ödeme detayları için sizinle iletişime geçilecektir.",
        cardNumberPlaceholder: "Kart Numarası",
        expiryPlaceholder: "AA/YY",
        cvcPlaceholder: "CVC",
        submitLabel: "Randevu Talebini Gönder",
      },
      success: {
        title: "Randevu talebiniz alınmıştır.",
        subtitle: "En kısa sürede sizinle iletişime geçilecektir.",
        resetButton: "Başka bir randevu talebi oluştur",
      },
    },
    cookieBanner: {
      text: "Size daha iyi bir deneyim sunmak için çerezler kullanıyoruz. Zorunlu olmayan çerezler yalnızca onayınızla çalışır. Detaylar için",
      cookiePolicyLink: "Çerez Politikası",
      necessaryOnly: "Yalnızca Gerekli",
      acceptAll: "Tümünü Kabul Et",
      managePreferences: "Tercihleri Yönet",
    },
    footer: {
      exploreHeading: "Keşfet",
      contactHeading: "İletişim",
      legalHeading: "Yasal",
      tagline:
        "Fethiye Karseri'nin yönettiği, farkındalık ve enerji çalışmaları için özenle tasarlanmış bir alan.",
      instagramLabel: "Instagram · @kapten.uyanis",
      bookButton: "Randevu Al",
      copyright: "ELARIS. Tüm hakları saklıdır.",
    },
    legalPage: {
      backHome: "← Ana Sayfaya Dön",
      eyebrow: "Yasal",
      otherDocs: "Diğer Belgeler",
      updated: "Son güncelleme:",
      draftNotice:
        "Bu sayfa taslak niteliğindedir; şirket/veri sorumlusu bilgileri ve hizmet koşullarına ilişkin [DOLDURULACAK] olarak işaretlenmiş alanlar doldurulmadan ve ilgili mevzuata uygunluğu bir hukuk danışmanı tarafından teyit edilmeden yayınlanmamalıdır.",
      fillIn: "[DOLDURULACAK]",
    },
    notFound: {
      title: "Sayfa bulunamadı",
      description: "Aradığınız sayfa taşınmış veya kaldırılmış olabilir.",
      backHome: "Ana Sayfaya Dön",
    },
  },
  en: {
    nav: {
      home: "HOME",
      fethiyeKarseri: "FETHİYE KARSERİ",
      sessions: "ELARIS SESSIONS",
      teachings: "TEACHINGS",
      workshops: "WORKSHOPS",
      certificates: "CERTIFICATES",
      contact: "CONTACT",
      bookSession: "BOOK A SESSION",
    },
    hero: {
      signature: "Elaris",
      founderLabel: "Fethiye Karseri",
      titleLine1: "Returning to yourself",
      titleLine2: "is sometimes simply remembering.",
      paragraph:
        "ELARIS offers a calm, respectful, and thoughtfully designed space to reconnect with your inner world. Each session accompanies you in rediscovering the awareness that has always been your own.",
      bookButton: "Book a Session",
      exploreButton: "Explore Sessions",
    },
    welcome: {
      eyebrow: "Welcome to Elaris",
      heading: "An approach that makes room for awareness",
      paragraph1:
        "ELARIS is a space for energy work designed for those who wish to deepen their relationship with themselves. Every session is conducted with an approach that respects your individual pace and holds no judgment; it does not constitute medical or psychological treatment, diagnosis, or any claim of a definite outcome.",
      paragraph2:
        "Whether you are taking your first step or continuing your journey from where you left off, ELARIS welcomes you as you are and opens a calm space for you to connect with your own inner wisdom.",
    },
    about: {
      eyebrow: "Founder",
      heading: "Fethiye Karseri",
      paragraph1:
        "Fethiye Karseri is a companion on this path, blending her years-long personal and professional journey with energy work, awareness, and her own experiences of transformation.",
      paragraph2:
        "At ELARIS, every session offers a calm space where a person can reconnect with themselves, be heard without judgment, and discover their own awareness.",
      paragraph3:
        "There are no ready-made answers or promises of a definite outcome here. The aim is not to tell you what to do, but to open a space in which you can move closer to your own answers.",
    },
    services: {
      eyebrow: "ELARIS Sessions",
      heading: "Sessions that accompany you",
      intro:
        "All sessions can be held both online and in person. Each session's duration and price are shown on its card.",
      detailsButton: "Details & Information",
      bookButton: "Book a Session",
      durationLabel: "Duration",
      priceLabel: "Price",
    },
    serviceDetail: {
      eyebrow: "Details & Information",
      durationLabel: "Duration",
      priceLabel: "Price",
      descriptionHeading: "Description",
      methodHeading: "Format",
      cancellationHeading: "Cancellation / Rescheduling",
      viewPolicy: "View policy",
      bookButton: "Book a Session",
      closeAria: "Close",
      backToSessions: "← Back to Sessions",
    },
    workshops: {
      eyebrow: "Workshops & Gatherings",
      heading: "Spaces experienced together",
      intro:
        "Images, dates, and details for our upcoming workshops and gatherings will be shared here very soon.",
      detailButton: "Details",
      bookButton: "Join / Reserve",
    },
    certificates: {
      eyebrow: "Certificates & Trainings",
      heading: "A journey of training and expertise",
    },
    contact: {
      eyebrow: "Contact",
      heading: "The easiest way to reach us",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      whatsappMessage: "Hello, I would like to get information about ELARIS.",
    },
    appointmentCta: {
      eyebrow: "Booking",
      heading: "Make time for yourself",
      intro:
        "Choose the session, date, and time that suit you; let's complete your booking request in a few steps.",
      whatsappHelp: "Need help with your booking? Contact us on WhatsApp.",
    },
    booking: {
      steps: {
        service: "Session",
        date: "Date",
        time: "Time",
        contact: "Contact",
        summary: "Summary",
        payment: "Payment",
      },
      sessionPrompt: "Which session would you like to book?",
      change: "Change",
      dateLabel: "Select a date",
      hoursNote:
        "Bookings are available Monday–Friday 19:00–22:30 and Saturday–Sunday 10:00–22:30 (Europe/Istanbul).",
      timeLabelPrefix: "Select an available time",
      noSlots: "No available times left on this date. Please choose another date.",
      nameLabel: "Name & Surname",
      namePlaceholder: "Your name and surname",
      whatsappLabel: "WhatsApp Number",
      whatsappPlaceholder: "e.g. +90 5xx xxx xx xx",
      back: "Back",
      continue: "Continue",
      summary: {
        serviceLabel: "Session",
        descriptionLabel: "Description",
        dateLabel: "Date",
        timeLabel: "Time",
        durationLabel: "Duration",
        priceLabel: "Total Price",
        providerLabel: "Provided By",
        providerValue: "Fethiye Karseri / ELARIS",
        scopeNotePrefix: "For the scope of this session and important information, please review the",
        scopeNoteLink: "Scope of Sessions & Important Information",
        scopeNoteSuffix: "page.",
        cancellationNotice:
          "Cancellations made at least 24 hours before the scheduled session are eligible for a refund of the session fee. Cancellations made less than 24 hours before the scheduled session are non-refundable.",
        preInfoLink: "Pre-Contract Information",
        preInfoSuffix: " — I have read and confirm this.",
        agreementLink: "Distance Service Agreement",
        agreementSuffix: " — I have read and confirm this.",
        cancellationLink: "Cancellation, Rescheduling, Withdrawal & Refund Policy",
        cancellationSuffix: " — I have read and confirm this.",
        kvkkLink: "Personal Data Protection Notice",
        kvkkSuffix: " — I have read and been informed.",
        marketingText: "I would like to receive promotional and informational messages",
        marketingNote: "(optional, not required for booking).",
        continueLabel: "Proceed to Payment",
      },
      payment: {
        heading: "Payment",
        note: "Our online payment system will be activated soon. For now, your booking request is received without payment; we will contact you with confirmation and payment details.",
        cardNumberPlaceholder: "Card Number",
        expiryPlaceholder: "MM/YY",
        cvcPlaceholder: "CVC",
        submitLabel: "Submit Booking Request",
      },
      success: {
        title: "Your booking request has been received.",
        subtitle: "We will contact you as soon as possible.",
        resetButton: "Create another booking request",
      },
    },
    cookieBanner: {
      text: "We use cookies to provide you with a better experience. Non-essential cookies only run with your consent. For details, see our",
      cookiePolicyLink: "Cookie Policy",
      necessaryOnly: "Necessary Only",
      acceptAll: "Accept All",
      managePreferences: "Manage Preferences",
    },
    footer: {
      exploreHeading: "Explore",
      contactHeading: "Contact",
      legalHeading: "Legal",
      tagline:
        "A space carefully designed by Fethiye Karseri for awareness and energy work.",
      instagramLabel: "Instagram · @kalpten.uyanis",
      bookButton: "Book a Session",
      copyright: "ELARIS. All rights reserved.",
    },
    legalPage: {
      backHome: "← Back to Home",
      eyebrow: "Legal",
      otherDocs: "Other Documents",
      updated: "Last updated:",
      draftNotice:
        "This page is a draft; fields marked [TO BE COMPLETED], relating to company/data controller information and service terms, should not be published before they are filled in and their compliance with applicable law is confirmed by legal counsel.",
      fillIn: "[TO BE COMPLETED]",
    },
    notFound: {
      title: "Page not found",
      description: "The page you are looking for may have been moved or removed.",
      backHome: "Back to Home",
    },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionary[locale];
}
