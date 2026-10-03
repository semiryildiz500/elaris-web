import type { Metadata } from "next";
import LegalPage, { LegalSection, LegalList, FillIn } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "İptal, Değişiklik, Cayma ve İade Politikası | ELARIS",
};

/**
 * TODO (ödeme entegrasyonu öncesi tamamlanmalı):
 * Fethiye Karseri tarafından henüz kesin bir iptal/değişiklik süresi ve
 * iade koşulu belirlenmemiştir. Aşağıdaki [DOLDURULACAK] alanları,
 * gerçek ödeme sağlayıcısı (ör. PayTR) bağlanmadan önce iş sahibiyle
 * birlikte netleştirilip doldurulmalı ve bir hukuk danışmanı tarafından
 * incelenmelidir. Rastgele bir süre (ör. "24 saat") varsayılmamalıdır.
 */
export default function CancellationPolicyPage() {
  return (
    <LegalPage title="İptal, Değişiklik, Cayma ve İade Politikası">
      <LegalSection heading="1. Randevu İptali ve Değişikliği">
        <p>
          Randevunuzu iptal etmek veya ertelemek için, planlanan seans
          saatinden en az{" "}
          <FillIn /> önce bildirimde bulunmanız gerekmektedir. Bildirim
          için randevu onayında belirtilen iletişim kanalı üzerinden bize
          ulaşabilirsiniz.
        </p>
      </LegalSection>

      <LegalSection heading="2. Geç İptal ve Katılım Sağlanmaması">
        <p>
          Belirtilen süreden daha geç yapılan iptallerde veya randevuya
          katılım sağlanmaması durumunda uygulanacak koşullar:{" "}
          <FillIn />.
        </p>
      </LegalSection>

      <LegalSection heading="3. Cayma Hakkı">
        <p>
          Mesafeli Sözleşmeler Yönetmeliği uyarınca, hizmetin ifasına
          henüz başlanmamış olması kaydıyla, sözleşmenin kurulduğu tarihten
          itibaren 14 (on dört) gün içinde herhangi bir gerekçe
          göstermeksizin ve cezai şart ödemeksizin cayma hakkınızı
          kullanabilirsiniz.
        </p>
        <p>
          Danışanın açık talebi üzerine, cayma hakkı süresi dolmadan önce
          hizmetin ifasına başlanmışsa veya hizmet tamamen ifa edilmişse,
          Mesafeli Sözleşmeler Yönetmeliği&apos;nin ilgili istisna
          hükümleri uyarınca cayma hakkı kullanılamayabilir.
        </p>
      </LegalSection>

      <LegalSection heading="4. Cayma Hakkının Kullanımı">
        <p>
          Cayma hakkınızı kullanmak için randevu onayında belirtilen
          iletişim kanalı üzerinden veya <FillIn /> adresine yazılı
          bildirimde bulunmanız yeterlidir.
        </p>
      </LegalSection>

      <LegalSection heading="5. İade Koşulu">
        <p>
          Cayma hakkının süresi içinde ve usulüne uygun kullanılması
          hâlinde uygulanacak iade koşulu ve süresi: <FillIn />.
        </p>
      </LegalSection>

      <LegalSection heading="6. İstisnalar">
        <LegalList
          items={[
            "Danışanın onayı ile cayma süresi dolmadan tamamen ifa edilen hizmetler",
            "Niteliği itibarıyla iade edilemeyecek, kişiye özel sunulmuş hizmetler",
            "Mevzuatta sayılan diğer istisnai hâller",
          ]}
        />
      </LegalSection>
    </LegalPage>
  );
}
