import type { Metadata } from "next";
import LegalPage, { LegalSection, LegalList, FillIn } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | ELARIS",
};

// TODO: Henüz bilinmeyen, elimizdeki bilgilerle doldurulamayan alanlar —
// yayın öncesi tamamlanmalı: açık adres, e-posta, vergi no / T.C. kimlik no,
// barındırma/teknik hizmet sağlayıcısının adı.
export default function KvkkPage() {
  return (
    <LegalPage title="KVKK Aydınlatma Metni">
      <LegalSection heading="1. Veri Sorumlusu">
        <p>
          6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;)
          uyarınca, kişisel verileriniz; veri sorumlusu sıfatıyla{" "}
          <strong>Fethiye Karseri</strong> (&quot;ELARIS&quot; markası
          altında, elarisdanismanlik.com internet sitesi üzerinden) tarafından
          aşağıda açıklanan kapsamda işlenebilecektir.
        </p>
        <LegalList
          items={[
            <>Adres: <FillIn /></>,
            <>E-posta: <FillIn /></>,
            <>
              Telefon / WhatsApp:{" "}
              <a
                href="https://wa.me/905348843774"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline underline-offset-2"
              >
                +90 534 884 37 74
              </a>
            </>,
            <>Vergi No / T.C. Kimlik No: <FillIn /></>,
          ]}
        />
      </LegalSection>

      <LegalSection heading="2. İşlenen Kişisel Veriler">
        <p>
          ELARIS web sitesi ve randevu sistemi üzerinden, randevu talebinde
          bulunmanız ve çalışmalarımızdan faydalanmanız sürecinde aşağıdaki
          kişisel verileriniz işlenebilir:
        </p>
        <LegalList
          items={[
            "Ad ve soyad",
            "Telefon / WhatsApp numarası",
            "Randevu tarihi ve saati",
            "Seçilen çalışma (hizmet)",
            "İşlem ve ödeme durumuna ilişkin gerekli kayıtlar (ödeme entegrasyonu etkinleştirildiğinde)",
            "Tarafınızca ilgili formlar veya iletişim kanalları aracılığıyla iletilen diğer iletişim bilgileri",
            "Web sitesinin güvenli ve düzgün çalışması için gerekli teknik kayıtlar (ör. çerez tercihi, cihaz/tarayıcı bilgileri)",
          ]}
        />
      </LegalSection>

      <LegalSection heading="3. Kişisel Verilerin Toplanma Yöntemi">
        <p>
          Kişisel verileriniz; ELARIS internet sitesindeki randevu formunu
          doldurmanız, WhatsApp veya Instagram üzerinden bizimle iletişime
          geçmeniz ve siteyi kullanmanız sırasında elektronik ortamda,
          doğrudan sizin tarafınızdan iletilmesi suretiyle toplanır.
        </p>
      </LegalSection>

      <LegalSection heading="4. İşleme Amaçları">
        <LegalList
          items={[
            "Randevu taleplerinin alınması, planlanması ve tarafınızla iletişime geçilmesi",
            "Seçtiğiniz çalışmanın ifa edilmesi ve randevu sürecinin yönetilmesi",
            "Ödeme entegrasyonu etkinleştirildiğinde, ödeme işleminin gerçekleştirilmesi ve kayıt altına alınması",
            "Sunulan çalışmalar hakkında, talebiniz halinde bilgilendirme yapılması",
            "Talep ve şikâyetlerin yönetilmesi",
            "Web sitesinin güvenliğinin ve işlerliğinin sağlanması",
            "Hukuki yükümlülüklerin yerine getirilmesi",
          ]}
        />
      </LegalSection>

      <LegalSection heading="5. Hukuki Sebep">
        <p>
          Kişisel verileriniz; bir sözleşmenin (randevu/hizmet ilişkisinin)
          kurulması veya ifasıyla doğrudan doğruya ilgili olması, hukuki
          yükümlülüğün yerine getirilmesi, ilgili kişinin temel hak ve
          özgürlüklerine zarar vermemek kaydıyla veri sorumlusunun meşru
          menfaati ve açık rızanızın bulunduğu hâllerde ilgili diğer hukuki
          sebepler kapsamında işlenmektedir.
        </p>
      </LegalSection>

      <LegalSection heading="6. Kişisel Verilerin Aktarılması">
        <p>
          Kişisel verileriniz, yasal zorunluluklar dışında, açık rızanız
          olmaksızın üçüncü kişilerle paylaşılmaz. Buna göre:
        </p>
        <LegalList
          items={[
            "Online ödeme entegrasyonu etkinleştirildiğinde, ödeme işleminin gerçekleştirilebilmesi için gerekli bilgiler, işlemi yürüten ödeme hizmeti sağlayıcısı tarafından işlenebilecektir.",
            <>
              Web sitesinin barındırılması ve teknik olarak çalıştırılması
              için kullanılan hizmet sağlayıcılar: <FillIn />.
            </>,
            "Yetkili kamu kurum ve kuruluşları, hukuken yetkili olunan hâllerde.",
          ]}
        />
        <p className="text-sm text-ink/60">
          Burada sayılanlar dışında, şu anda aktif olarak kullanılmayan
          üçüncü taraf hizmetlere veri aktarımı yapılmamaktadır.
        </p>
      </LegalSection>

      <LegalSection heading="7. Saklama Süresi">
        <p>
          Kişisel verileriniz, işleme amacının gerektirdiği süre ve ilgili
          mevzuatta öngörülen zamanaşımı süreleri boyunca saklanır; bu
          sürelerin sonunda silinir, yok edilir veya anonim hâle getirilir.
        </p>
      </LegalSection>

      <LegalSection heading="8. KVKK Kapsamındaki Haklarınız">
        <p>
          KVKK&apos;nın 11. maddesi uyarınca; kişisel verilerinizin işlenip
          işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme,
          işlenme amacını ve amacına uygun kullanılıp kullanılmadığını
          öğrenme, yurt içinde/yurt dışında aktarıldığı üçüncü kişileri
          bilme, eksik/yanlış işlenmişse düzeltilmesini isteme, ilgili
          mevzuatta öngörülen şartlar çerçevesinde silinmesini veya yok
          edilmesini isteme, bu işlemlerin aktarıldığı üçüncü kişilere
          bildirilmesini isteme, münhasıran otomatik sistemler ile analiz
          edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz
          etme ve kanuna aykırı işlenme sebebiyle zarara uğramanız hâlinde
          zararın giderilmesini talep etme haklarına sahipsiniz.
        </p>
      </LegalSection>

      <LegalSection heading="9. Başvuru Yöntemi">
        <p>
          Yukarıda sayılan haklarınızı kullanmak için talebinizi{" "}
          <FillIn /> adresine veya{" "}
          <a
            href="https://wa.me/905348843774"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline underline-offset-2"
          >
            WhatsApp (+90 534 884 37 74)
          </a>{" "}
          üzerinden yazılı olarak iletebilirsiniz.
        </p>
      </LegalSection>

      <div className="rounded-xl border border-gold/20 bg-gold/5 p-4 text-sm text-ink/70">
        Bu metin yalnızca kişisel verilerinizin nasıl işlendiğine dair
        bilgilendirme amacı taşır; herhangi bir açık rıza beyanı içermez.
        Açık rıza gerektiren bir veri işleme faaliyeti söz konusu olduğunda,
        bu ayrı ve bağımsız bir onay adımı olarak sunulur.
      </div>
    </LegalPage>
  );
}
