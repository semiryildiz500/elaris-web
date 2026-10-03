import type { Metadata } from "next";
import LegalPage, { LegalSection, LegalList, FillIn } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Mesafeli Hizmet Sözleşmesi | ELARIS",
};

/**
 * ÖNEMLİ: Bu sayfa taslak niteliğindedir. Gerçek ödeme entegrasyonu
 * (ör. PayTR) devreye alınmadan önce, bu sözleşmenin tamamı bir hukuk
 * danışmanı tarafından incelenmeli ve [DOLDURULACAK] alanları
 * tamamlanmalıdır. Hizmet/tarih/saat/süre/fiyat bilgileri, randevu
 * akışındaki "Randevu Özeti" adımından dinamik olarak bu sözleşmeye
 * yansıtılacak şekilde tasarlanmıştır (bkz. components/appointment-form.tsx
 * içindeki SummaryStep).
 */
export default function DistanceServiceAgreementPage() {
  return (
    <LegalPage title="Mesafeli Hizmet Sözleşmesi">
      <LegalSection heading="1. Taraflar">
        <p>
          İşbu sözleşme; bir tarafta <strong>Fethiye Karseri</strong>{" "}
          (&quot;ELARIS&quot; markası altında, elarisdanismanlik.com
          üzerinden hizmet veren &quot;Hizmet Sağlayıcı&quot;) ile diğer
          tarafta randevu talebinde bulunan kişi (&quot;Danışan&quot;)
          arasında, randevu onayı sırasında elektronik ortamda kurulur.
        </p>
        <LegalList
          items={[
            <>Adres: <FillIn /></>,
            <>E-posta: <FillIn /></>,
            <>
              WhatsApp:{" "}
              <a
                href="https://wa.me/905540140509"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline underline-offset-2"
              >
                +90 554 014 05 09
              </a>
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection heading="2. Sözleşmenin Konusu">
        <p>
          6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli
          Sözleşmeler Yönetmeliği hükümleri uyarınca, ELARIS internet
          sitesi üzerinden elektronik ortamda talep edilen hizmetin
          satışı ve ifasına ilişkin tarafların hak ve yükümlülüklerinin
          belirlenmesidir.
        </p>
      </LegalSection>

      <LegalSection heading="3. Hizmetin Temel Nitelikleri ve Ücreti">
        <p>
          Seçilen çalışmanın adı, açıklaması, süresi ve toplam ücreti,
          randevu akışındaki &quot;Randevu Özeti&quot; adımında Danışan&apos;a
          gösterilir ve Danışan&apos;ın onayına sunulur. Ücretler, ELARIS
          Çalışmaları bölümünde ilan edilen güncel fiyatlardır. Danışan,
          ödeme adımındaki ilgili butona tıklayarak bu tutarı ödeme
          yükümlülüğü altına girdiğini kabul eder.
        </p>
        <p className="text-sm text-ink/60">
          Not: Online ödeme entegrasyonu henüz tamamlanmamıştır; bu
          aşama tamamlanana kadar randevu talebi ödeme alınmadan kayda
          geçirilir.
        </p>
      </LegalSection>

      <LegalSection heading="4. İfa Şekli">
        <p>
          Hizmet, randevu onayında belirtilen tarih ve saatte, seçilen
          yönteme göre (online görüşme veya yüz yüze seans) ifa edilir.
          İfa yeri ve bağlantı bilgileri, randevu onayı sonrasında
          danışana iletilir.
        </p>
      </LegalSection>

      <LegalSection heading="5. Cayma Hakkı">
        <p>
          Danışanın cayma hakkına ilişkin koşullar, süre ve istisnalar{" "}
          <a
            href="/yasal/iptal-degisiklik-cayma-iade-politikasi"
            className="text-gold underline underline-offset-2"
          >
            İptal, Değişiklik, Cayma ve İade Politikası
          </a>{" "}
          sayfasında ayrıca düzenlenmiştir ve işbu sözleşmenin ayrılmaz
          parçasıdır. Bu politikadaki süre ve koşullar henüz kesinleşmemiş
          olup, yayın öncesi tamamlanacaktır.
        </p>
      </LegalSection>

      <LegalSection heading="6. Mücbir Sebep">
        <p>
          Tarafların kontrolü dışında gelişen, önceden öngörülemeyen ve
          önlenemeyen hâllerin (mücbir sebep) hizmetin ifasını engellemesi
          durumunda, etkilenen taraf diğerini durumdan derhal haberdar eder
          ve tarafların edimleri mücbir sebebin etkisi oranında askıya
          alınır.
        </p>
      </LegalSection>

      <LegalSection heading="7. Uyuşmazlıkların Çözümü">
        <LegalList
          items={[
            "Tüketici işlemleri bakımından, Ticaret Bakanlığı'nca ilan edilen değere göre tüketicinin yerleşim yerindeki Tüketici Hakem Heyeti veya Tüketici Mahkemeleri yetkilidir.",
          ]}
        />
      </LegalSection>
    </LegalPage>
  );
}
