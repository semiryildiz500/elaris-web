export type LegalPage = {
  slug: string;
  title: string;
  shortTitle: string;
  titleEn: string;
  shortTitleEn: string;
};

export const legalPages: LegalPage[] = [
  {
    slug: "kvkk-aydinlatma-metni",
    title: "KVKK Aydınlatma Metni",
    shortTitle: "KVKK Aydınlatma Metni",
    titleEn: "Personal Data Protection Notice",
    shortTitleEn: "Personal Data Protection Notice",
  },
  {
    slug: "gizlilik-politikasi",
    title: "Gizlilik Politikası",
    shortTitle: "Gizlilik Politikası",
    titleEn: "Privacy Policy",
    shortTitleEn: "Privacy Policy",
  },
  {
    slug: "cerez-politikasi",
    title: "Çerez Politikası",
    shortTitle: "Çerez Politikası",
    titleEn: "Cookie Policy",
    shortTitleEn: "Cookie Policy",
  },
  {
    slug: "on-bilgilendirme-formu",
    title: "Ön Bilgilendirme",
    shortTitle: "Ön Bilgilendirme",
    titleEn: "Pre-Contract Information",
    shortTitleEn: "Pre-Contract Information",
  },
  {
    slug: "mesafeli-hizmet-sozlesmesi",
    title: "Mesafeli Hizmet Sözleşmesi",
    shortTitle: "Mesafeli Hizmet Sözleşmesi",
    titleEn: "Distance Service Agreement",
    shortTitleEn: "Distance Service Agreement",
  },
  {
    slug: "iptal-degisiklik-cayma-iade-politikasi",
    title: "İptal, Değişiklik, Cayma ve İade Politikası",
    shortTitle: "İptal / Cayma / İade Politikası",
    titleEn: "Cancellation, Rescheduling, Withdrawal & Refund Policy",
    shortTitleEn: "Cancellation / Withdrawal / Refund Policy",
  },
  {
    slug: "kullanim-kosullari",
    title: "Kullanım Koşulları",
    shortTitle: "Kullanım Koşulları",
    titleEn: "Terms of Use",
    shortTitleEn: "Terms of Use",
  },
  {
    slug: "calismalarin-kapsami-ve-onemli-bilgilendirme",
    title: "Çalışmaların Kapsamı ve Önemli Bilgilendirme",
    shortTitle: "Çalışmaların Kapsamı",
    titleEn: "Scope of Sessions & Important Information",
    shortTitleEn: "Scope of Sessions",
  },
];

/** Hukuken bilinmeyen; yayın öncesi doldurulması gereken alanlar için ortak yer tutucu. */
export const FILL_IN = "[DOLDURULACAK]";
export const FILL_IN_EN = "[TO BE COMPLETED]";
