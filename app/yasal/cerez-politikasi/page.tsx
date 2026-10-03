import type { Metadata } from "next";
import LegalPage, { LegalSection, LegalList } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Çerez Politikası | ELARIS",
};

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Çerez Politikası">
      <LegalSection heading="1. Çerez ve Benzer Teknolojiler">
        <p>
          Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınıza
          yerleştirilen küçük veri parçalarıdır. ELARIS internet sitesi,
          çerezlere ek olarak, tarayıcınızın yerel depolama (localStorage)
          özelliğini de benzer amaçlarla (ör. tercihlerinizin
          hatırlanması) kullanır.
        </p>
      </LegalSection>

      <LegalSection heading="2. Şu Anda Kullanılan Kategori: Gerekli">
        <p>
          Bu site şu anda yalnızca <strong>Gerekli</strong> kategorisinde
          yer alan, sitenin temel işlevleri için zorunlu veri saklama
          işlemlerini gerçekleştirmektedir:
        </p>
        <LegalList
          items={[
            "Çerez tercihinizin (hangi kategorilere onay verdiğinizin) hatırlanması",
            "Aynı tarih/saat için çakışan randevu oluşturulmasını önlemek amacıyla, onayladığınız randevu bilgisinin bu tarayıcıda tutulması",
          ]}
        />
        <p>
          Bu kayıtlar devre dışı bırakılamaz; aksi hâlde site temel
          işlevlerini yerine getiremez.
        </p>
      </LegalSection>

      <LegalSection heading="3. Henüz Aktif Olmayan Kategoriler: Analitik ve Pazarlama">
        <p>
          Aşağıdaki iki Analitik ve Pazarlama kategorisi için tercih
          yönetimi altyapısı sitede hazır bulunur, ancak şu anda bu
          kategorilere ait hiçbir analitik veya reklam çerezi/betiği
          sitede çalıştırılmamaktadır. İleride bu tür bir hizmet devreye
          alınırsa:
        </p>
        <LegalList
          items={[
            <>
              <strong>Analitik:</strong> Site kullanımını anlamamıza
              yardımcı olacak, yalnızca açık onayınızla etkinleştirilecek.
            </>,
            <>
              <strong>Pazarlama:</strong> İlgi alanlarınıza yönelik içerik
              sunmak için kullanılabilecek, yalnızca açık onayınızla
              etkinleştirilecek.
            </>,
          ]}
        />
        <p>
          Gerekli olmayan hiçbir çerez/betik, tercihinizi belirtmeden önce
          çalıştırılmaz.
        </p>
      </LegalSection>

      <LegalSection heading="4. Tercih Paneli">
        <p>
          Site açıldığında karşınıza çıkan bilgilendirme çubuğundan veya{" "}
          <a
            href="/yasal/cerez-tercihleri"
            className="text-gold underline underline-offset-2"
          >
            Çerez Tercihleri
          </a>{" "}
          sayfasından &quot;Yalnızca Gerekli&quot;, &quot;Tümünü Kabul
          Et&quot; veya &quot;Tercihleri Yönet&quot; seçeneklerini
          kullanarak tercihinizi dilediğiniz zaman güncelleyebilirsiniz.
        </p>
      </LegalSection>

      <LegalSection heading="5. Tarayıcı Ayarları">
        <p>
          Çerezleri ve yerel depolamayı tarayıcı ayarlarınız üzerinden de
          yönetebilir veya tamamen engelleyebilirsiniz; bu durumda sitenin
          bazı bölümleri (ör. çakışan randevu kontrolü) beklendiği gibi
          çalışmayabilir.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
