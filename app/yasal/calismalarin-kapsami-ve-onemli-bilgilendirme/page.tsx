import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { LegalSection, LegalList } from "@/components/legal-page";
import MedicalDisclaimer from "@/components/medical-disclaimer";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Çalışmaların Kapsamı ve Önemli Bilgilendirme | ELARIS",
};

export default function ScopeOfWorkPage() {
  return (
    <LegalPage title="Çalışmaların Kapsamı ve Önemli Bilgilendirme">
      <LegalSection heading="Genel Nitelik">
        <p>
          ELARIS bünyesinde sunulan tüm çalışmalar; farkındalık, enerji
          dengesi ve kişisel gelişim odaklı, danışana eşlik eden
          uygulamalardır. Çalışmalar bireysel deneyime dayanır; sonuçlar
          kişiden kişiye farklılık gösterebilir ve herhangi bir sonuç garanti
          edilmez.
        </p>
      </LegalSection>

      <LegalSection heading="Uygulama Şekli">
        <p>
          Çalışmaların tamamı hem online hem yüz yüze olarak
          gerçekleştirilebilir. Bireysel seanslar seçilen çalışmaya göre
          30, 45 veya 60 dakika olarak planlanmaktadır; süre ve ücret
          bilgisi ilgili çalışmanın detay sayfasında yer alır.
        </p>
      </LegalSection>

      <LegalSection heading="Kimler İçin Uygun Olmayabilir">
        <p>
          Aşağıdaki durumlardan birini taşıyan kişilerin, çalışmalara
          katılmadan önce bir sağlık profesyoneline danışması ve ELARIS
          ile durumunu önceden paylaşması önemle tavsiye edilir:
        </p>
        <LegalList
          items={[
            "Ağır psikiyatrik rahatsızlık tanısı veya akut kriz dönemi",
            "Epilepsi veya nöbet geçmişi",
            "Hamilelik, yüksek riskli sağlık durumları",
            "Doktoru tarafından dinlenme/istirahat önerilen akut sağlık durumları",
          ]}
        />
        <p>
          Bu liste kapsayıcı değildir; şüpheniz varsa lütfen önce bir sağlık
          profesyoneline danışınız.
        </p>
      </LegalSection>

      <LegalSection heading="Mevcut Çalışmalar">
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/calismalar/${service.slug}`}
                className="text-sm text-ink/75 underline decoration-gold/40 underline-offset-2 transition-colors hover:text-gold"
              >
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection heading="Sonuç Garantisi ve Sağlık Profesyoneline Başvuru">
        <LegalList
          items={[
            "ELARIS çalışmaları herhangi bir belirli sonucu garanti etmez.",
            "Çalışmalar, doktor, psikiyatrist, psikolog veya diğer yetkili sağlık profesyonellerinin önerisinin veya tedavisinin yerine geçmez.",
            "Ciddi bir sağlık veya psikolojik sorununuz varsa, lütfen önce uygun bir sağlık profesyoneline başvurunuz.",
          ]}
        />
      </LegalSection>

      <MedicalDisclaimer />
    </LegalPage>
  );
}
