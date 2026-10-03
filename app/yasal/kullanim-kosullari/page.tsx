import type { Metadata } from "next";
import LegalPage, { LegalSection, LegalList, FillIn } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Kullanım Koşulları | ELARIS",
};

export default function TermsOfUsePage() {
  return (
    <LegalPage title="Kullanım Koşulları">
      <LegalSection heading="1. Kabul">
        <p>
          elarisdanismanlik.com internet sitesini (&quot;Site&quot;),
          Fethiye Karseri tarafından ELARIS markası altında işletilmektedir.
          Site&apos;yi kullanarak işbu Kullanım Koşulları&apos;nı kabul etmiş
          sayılırsınız. Koşulları kabul etmiyorsanız lütfen Site&apos;yi
          kullanmayınız.
        </p>
      </LegalSection>

      <LegalSection heading="2. Sitenin Kullanımı">
        <LegalList
          items={[
            "Site içeriği yalnızca bilgilendirme ve randevu talebi amacıyla kullanılabilir.",
            "Site'de yer alan bilgiler, izinsiz çoğaltılamaz, dağıtılamaz veya ticari amaçla kullanılamaz.",
            "Doğru ve güncel iletişim bilgileri paylaşmak, randevu talebinde bulunan kullanıcının sorumluluğundadır.",
          ]}
        />
      </LegalSection>

      <LegalSection heading="3. Fikri Mülkiyet">
        <p>
          Site üzerindeki tüm metin, görsel, logo ve tasarım unsurları
          ELARIS&apos;e aittir veya ELARIS tarafından lisanslı olarak
          kullanılmaktadır; önceden yazılı izin olmaksızın kopyalanamaz.
        </p>
      </LegalSection>

      <LegalSection heading="4. Sorumluluğun Sınırlandırılması">
        <p>
          Site&apos;de yer alan bilgiler özenle hazırlanmış olmakla
          birlikte, ELARIS; Site&apos;nin kesintisiz, hatasız olacağını
          veya belirli bir sonucu garanti etmez. Çalışmaların kapsamına ve
          sınırlarına ilişkin detaylı bilgi için{" "}
          <a
            href="/yasal/calismalarin-kapsami-ve-onemli-bilgilendirme"
            className="text-gold underline underline-offset-2"
          >
            Çalışmaların Kapsamı ve Önemli Bilgilendirme
          </a>{" "}
          sayfasını inceleyiniz.
        </p>
      </LegalSection>

      <LegalSection heading="5. Değişiklikler">
        <p>
          ELARIS, işbu Kullanım Koşulları&apos;nı dilediği zaman güncelleme
          hakkını saklı tutar. Güncel metin her zaman bu sayfada yer alır.
        </p>
      </LegalSection>

      {/* TODO: Yetkili mahkeme ili, işletmenin kayıtlı/yerleşim yeri bilgisi netleşince doldurulmalı. */}
      <LegalSection heading="6. Uygulanacak Hukuk">
        <p>
          İşbu Kullanım Koşulları Türkiye Cumhuriyeti hukukuna tabidir.
          Uyuşmazlıklarda <FillIn /> mahkemeleri ve icra daireleri
          yetkilidir.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
