import type { Metadata } from "next";
import LegalPage, { LegalSection, LegalList, FillIn } from "@/components/legal-page";
import MedicalDisclaimer from "@/components/medical-disclaimer";

export const metadata: Metadata = {
  title: "Ön Bilgilendirme | ELARIS",
};

// TODO: Henüz bilinmeyen alanlar — yayın öncesi tamamlanmalı: açık adres,
// e-posta, fiyatlara vergi (KDV) dahil olup olmadığı bilgisi.
export default function PreInformationPage() {
  return (
    <LegalPage title="Ön Bilgilendirme">
      <LegalSection heading="1. Hizmet Sağlayıcı">
        <LegalList
          items={[
            <>Ad Soyad / Marka: Fethiye Karseri / ELARIS</>,
            <>Web sitesi: elarisdanismanlik.com</>,
            <>Adres: <FillIn /></>,
            <>
              Telefon / WhatsApp:{" "}
              <a
                href="https://wa.me/905540140509"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline underline-offset-2"
              >
                +90 554 014 05 09
              </a>
            </>,
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

      <LegalSection heading="4. İptal, Değişiklik ve Cayma Hakkı">
        <p>
          Randevu saatinden en az 24 saat önce yapılan iptallerde ödenen
          hizmet bedeli iade edilir; 24 saatten az süre kala yapılan
          iptallerde ücret iadesi yapılmaz. Randevu değişikliği talepleri
          WhatsApp üzerinden iletilebilir. Yasal cayma hakkınız dahil tüm
          koşullar, süre ve istisnalar için{" "}
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
          Hizmetle ilgili şikâyet ve itirazlarınızı{" "}
          <a
            href="https://wa.me/905540140509"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline underline-offset-2"
          >
            WhatsApp (+90 554 014 05 09)
          </a>{" "}
          üzerinden iletebilir; mevzuatın öngördüğü hâllerde Tüketici
          Hakem Heyetleri&apos;ne veya Tüketici Mahkemeleri&apos;ne
          başvurabilirsiniz.
        </p>
      </LegalSection>

      <MedicalDisclaimer />
    </LegalPage>
  );
}
