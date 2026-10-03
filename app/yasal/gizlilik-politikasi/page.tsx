import type { Metadata } from "next";
import LegalPage, { LegalSection, LegalList, FillIn } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | ELARIS",
};

// TODO: Henüz bilinmeyen alanlar — yayın öncesi tamamlanmalı: e-posta,
// barındırma/teknik hizmet sağlayıcısının adı.
export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Gizlilik Politikası">
      <LegalSection heading="1. Giriş">
        <p>
          Bu Gizlilik Politikası, Fethiye Karseri tarafından ELARIS markası
          altında yürütülen elarisdanismanlik.com internet sitesini
          ziyaretiniz ve çalışmalarımızdan faydalanmanız sırasında
          bilgilerinizin genel yaklaşımımız çerçevesinde nasıl ele
          alındığını açıklar. Kişisel verilerinizin KVKK kapsamında işlenme
          şartlarına ilişkin resmî bilgilendirme için ayrı olarak{" "}
          <a
            href="/yasal/kvkk-aydinlatma-metni"
            className="text-gold underline underline-offset-2"
          >
            KVKK Aydınlatma Metni
          </a>{" "}
          sayfasını inceleyiniz.
        </p>
      </LegalSection>

      <LegalSection heading="2. Toplanan Bilgiler">
        <LegalList
          items={[
            "Randevu formu aracılığıyla paylaştığınız ad-soyad ve WhatsApp numarası",
            "Seçtiğiniz çalışma, randevu tarihi ve saati",
            "Site kullanımına ilişkin, tercihinize bağlı olarak toplanabilecek teknik veriler (bkz. Çerez Politikası)",
          ]}
        />
      </LegalSection>

      <LegalSection heading="3. Bilgilerin Neden Kullanıldığı">
        <p>
          Topladığımız bilgiler yalnızca randevu süreçlerinizin yürütülmesi,
          sizinle iletişime geçilmesi ve site deneyiminin iyileştirilmesi
          amacıyla kullanılır. Açık rızanız olmadan pazarlama amaçlı
          iletişim kurulmaz.
        </p>
      </LegalSection>

      <LegalSection heading="4. Güvenlik Yaklaşımı">
        <p>
          Bilgilerinizin hukuka aykırı işlenmesini ve yetkisiz erişimi
          önlemek amacıyla makul teknik ve idari tedbirler alınır. Buna
          rağmen internet üzerinden hiçbir veri iletiminin veya saklama
          yönteminin %100 güvenli olduğu garanti edilemez.
        </p>
      </LegalSection>

      <LegalSection heading="5. Üçüncü Taraf Hizmet Sağlayıcıları">
        <p>
          Şu anda web sitesi, aktif bir ödeme sağlayıcısı veya analitik/
          reklam hizmeti kullanmamaktadır. Bu hizmetler ileride devreye
          alındığında, kullanılan sağlayıcılar ve veri paylaşım kapsamı bu
          sayfada güncellenecektir. Sitenin barındırılması için kullanılan
          teknik altyapı sağlayıcısı: <FillIn />.
        </p>
      </LegalSection>

      <LegalSection heading="6. Saklama Yaklaşımı">
        <p>
          Bilgileriniz, toplanma amacının gerektirdiği süre boyunca ve
          ilgili mevzuatta öngörülen süreler saklanır; bu sürelerin
          sonunda silinir veya anonim hâle getirilir.
        </p>
      </LegalSection>

      <LegalSection heading="7. Kullanıcı Hakları">
        <p>
          Kişisel verilerinize ilişkin haklarınızın tam listesi için{" "}
          <a
            href="/yasal/kvkk-aydinlatma-metni"
            className="text-gold underline underline-offset-2"
          >
            KVKK Aydınlatma Metni
          </a>{" "}
          sayfasını inceleyebilirsiniz.
        </p>
      </LegalSection>

      <LegalSection heading="8. İletişim">
        <p>
          Gizlilik uygulamalarımıza ilişkin sorularınız için{" "}
          <a
            href="https://wa.me/905540140509"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline underline-offset-2"
          >
            WhatsApp (+90 554 014 05 09)
          </a>{" "}
          üzerinden veya <FillIn /> adresinden bize ulaşabilirsiniz.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
