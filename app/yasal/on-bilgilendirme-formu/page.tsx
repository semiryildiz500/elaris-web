import type { Metadata } from "next";
import LegalPage, { LegalSection, LegalList, FillIn } from "@/components/legal-page";
import MedicalDisclaimer from "@/components/medical-disclaimer";

export const metadata: Metadata = {
  title: "Ön Bilgilendirme | ELARIS",
};

export default function PreInformationPage() {
  return (
    <LegalPage title="Ön Bilgilendirme">
      <LegalSection heading="1. Hizmet Sağlayıcı">
        <LegalList
          items={[
            <>Ad Soyad / Marka: Fethiye Karseri / ELARIS</>,
            <>Web sitesi: elarisdanismanlik.com</>,
            <>Adres: <FillIn /></>,
            <>Telefon: <FillIn /></>,
            <>E-posta: <FillIn /></>,
          ]}
        />
      </LegalSection>

      <LegalSection heading="2. Hizmetin Temel Nitelikleri">
        <p>
          Randevu üzerinden seçtiğiniz çalışmanın adı, içeriği, yaklaşık
          süresi ve uygulama şekli (online veya yüz yüze), randevu onayı
          öncesinde ekranda açıkça gösterilir. Çalışmaların kapsamı için{" "}
          <a
            href="/yasal/calismalarin-kapsami-ve-onemli-bilgilendirme"
            className="text-gold underline underline-offset-2"
          >
            Çalışmaların Kapsamı ve Önemli Bilgilendirme
          </a>{" "}
          sayfasını inceleyiniz.
        </p>
      </LegalSection>

      <LegalSection heading="3. Toplam Ücret ve Ödeme">
        <p>
          Seçtiğiniz çalışmaya ait toplam ücret, ELARIS Çalışmaları
          bölümünde ilan edilen güncel fiyat üzerinden, randevu özeti
          ekranında ödeme adımından önce gösterilir. Fiyatlara vergi dahil
          olup olmadığına ilişkin bilgi: <FillIn />. Ödeme yükümlülüğü
          doğuran butona tıklamanız, bu tutarı ödemeyi kabul ettiğiniz
          anlamına gelir.
        </p>
      </LegalSection>

      <LegalSection heading="4. Cayma Hakkı">
        <p>
          Cayma hakkının kullanım koşulları, süresi ve istisnaları için{" "}
          <a
            href="/yasal/iptal-degisiklik-cayma-iade-politikasi"
            className="text-gold underline underline-offset-2"
          >
            İptal, Değişiklik, Cayma ve İade Politikası
          </a>{" "}
          sayfasını inceleyiniz.
        </p>
      </LegalSection>

      <LegalSection heading="5. Şikâyet ve İtirazlar">
        <p>
          Hizmetle ilgili şikâyet ve itirazlarınızı <FillIn /> adresine
          iletebilir; mevzuatın öngördüğü hâllerde Tüketici Hakem
          Heyetleri&apos;ne veya Tüketici Mahkemeleri&apos;ne
          başvurabilirsiniz.
        </p>
      </LegalSection>

      <MedicalDisclaimer />
    </LegalPage>
  );
}
