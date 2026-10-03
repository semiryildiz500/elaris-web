import type { Metadata } from "next";
import LegalPage, { LegalSection, LegalList, FillIn } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "İptal, Değişiklik, Cayma ve İade Politikası | ELARIS",
};

// TODO: İade süresi/yöntemi (ör. "X iş günü içinde aynı ödeme yöntemine")
// gerçek ödeme sağlayıcısı bağlandığında netleştirilip doldurulmalıdır.
export default function CancellationPolicyPage() {
  return (
    <LegalPage title="İptal, Değişiklik, Cayma ve İade Politikası">
      <LegalSection heading="1. Randevu İptali ve İade Kuralı">
        <p>
          Randevu saatinden <strong>en az 24 saat önce</strong> yapılan
          iptallerde, ödenen hizmet bedelinin tamamı iade edilir.
        </p>
        <p>
          Randevu saatine <strong>24 saatten az</strong> süre kala yapılan
          iptallerde ücret iadesi yapılmaz.
        </p>
        <p className="text-sm text-ink/60">
          Bu ticari iptal/iade kuralı, aşağıdaki 3. maddede düzenlenen
          yasal cayma hakkınız dahil, yürürlükteki mevzuattan doğan ve
          sözleşmeyle ortadan kaldırılamayacak haklarınızı ortadan
          kaldırmaz veya sınırlamaz.
        </p>
      </LegalSection>

      <LegalSection heading="2. Randevu Değişikliği">
        <p>
          Randevu değişikliği talepleri WhatsApp üzerinden iletilebilir:{" "}
          <a
            href="https://wa.me/905540140509"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline underline-offset-2"
          >
            +90 554 014 05 09
          </a>
          .
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
          iletişim kanalı üzerinden veya{" "}
          <a
            href="https://wa.me/905540140509"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline underline-offset-2"
          >
            WhatsApp (+90 554 014 05 09)
          </a>{" "}
          üzerinden yazılı bildirimde bulunmanız yeterlidir.
        </p>
      </LegalSection>

      <LegalSection heading="5. İade Koşulu">
        <p>
          Cayma hakkının süresi içinde ve usulüne uygun kullanılması
          hâlinde, 1. maddede belirtilen 24 saat kuralına bakılmaksızın,
          ödenen hizmet bedelinin tamamı iade edilir. İade süresi ve
          yöntemine ilişkin detaylar: <FillIn />.
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
