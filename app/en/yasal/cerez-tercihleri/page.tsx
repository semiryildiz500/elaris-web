import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/legal-page";
import CookiePreferencesForm from "@/app/yasal/cerez-tercihleri/preferences-form";

export const metadata: Metadata = {
  title: "Cookie Preferences | ELARIS",
  alternates: {
    canonical: "/en/yasal/cerez-tercihleri",
    languages: {
      tr: "/yasal/cerez-tercihleri",
      en: "/en/yasal/cerez-tercihleri",
    },
  },
};

export default function CookiePreferencesPageEn() {
  return (
    <LegalPage title="Cookie Preferences" locale="en">
      <LegalSection heading="Manage Your Preferences">
        <p>
          Necessary cookies are always active for the site to function.
          Analytics and marketing cookies are only enabled when you
          explicitly consent below. You can change your preferences at
          any time.
        </p>
      </LegalSection>

      <CookiePreferencesForm locale="en" />
    </LegalPage>
  );
}
