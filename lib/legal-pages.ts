export type LegalPage = {
  slug: string;
  title: string;
  shortTitle: string;
};

export const legalPages: LegalPage[] = [
  {
    slug: "kvkk-aydinlatma-metni",
    title: "KVKK Aydınlatma Metni",
    shortTitle: "KVKK Aydınlatma Metni",
  },
  {
    slug: "gizlilik-politikasi",
    title: "Gizlilik Politikası",
    shortTitle: "Gizlilik Politikası",
  },
  {
    slug: "cerez-politikasi",
    title: "Çerez Politikası",
    shortTitle: "Çerez Politikası",
  },
  {
    slug: "on-bilgilendirme-formu",
    title: "Ön Bilgilendirme",
    shortTitle: "Ön Bilgilendirme",
  },
  {
    slug: "mesafeli-hizmet-sozlesmesi",
    title: "Mesafeli Hizmet Sözleşmesi",
    shortTitle: "Mesafeli Hizmet Sözleşmesi",
  },
  {
    slug: "iptal-degisiklik-cayma-iade-politikasi",
    title: "İptal, Değişiklik, Cayma ve İade Politikası",
    shortTitle: "İptal / Cayma / İade Politikası",
  },
  {
    slug: "kullanim-kosullari",
    title: "Kullanım Koşulları",
    shortTitle: "Kullanım Koşulları",
  },
  {
    slug: "calismalarin-kapsami-ve-onemli-bilgilendirme",
    title: "Çalışmaların Kapsamı ve Önemli Bilgilendirme",
    shortTitle: "Çalışmaların Kapsamı",
  },
];

/** Hukuken bilinmeyen; yayın öncesi doldurulması gereken alanlar için ortak yer tutucu. */
export const FILL_IN = "[DOLDURULACAK]";
