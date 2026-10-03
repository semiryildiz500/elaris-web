import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/legal-page";
import CookiePreferencesForm from "./preferences-form";

export const metadata: Metadata = {
  title: "Çerez Tercihleri | ELARIS",
};

export default function CookiePreferencesPage() {
  return (
    <LegalPage title="Çerez Tercihleri">
      <LegalSection heading="Tercihlerinizi Yönetin">
        <p>
          Zorunlu çerezler sitenin çalışması için her zaman etkindir.
          Analitik ve pazarlama çerezleri yalnızca aşağıdan açıkça onay
          verdiğinizde etkinleştirilir. Tercihlerinizi dilediğiniz zaman
          değiştirebilirsiniz.
        </p>
      </LegalSection>

      <CookiePreferencesForm />
    </LegalPage>
  );
}
