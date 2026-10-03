import type { Metadata } from "next";
import LegalPage, { LegalSection, LegalList, FillIn } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Use | ELARIS",
  alternates: {
    canonical: "/en/yasal/kullanim-kosullari",
    languages: {
      tr: "/yasal/kullanim-kosullari",
      en: "/en/yasal/kullanim-kosullari",
    },
  },
};

export default function TermsOfUsePageEn() {
  return (
    <LegalPage title="Terms of Use" locale="en">
      <LegalSection heading="1. Acceptance">
        <p>
          The elarisdanismanlik.com website (the &quot;Site&quot;) is
          operated by Fethiye Karseri under the ELARIS brand. By using
          the Site, you are deemed to accept these Terms of Use. If you
          do not accept these terms, please do not use the Site.
        </p>
      </LegalSection>

      <LegalSection heading="2. Use of the Site">
        <LegalList
          items={[
            "Site content may only be used for informational purposes and to request a booking.",
            "Information on the Site may not be reproduced, distributed, or used commercially without permission.",
            "Providing accurate and current contact information is the responsibility of the user requesting a booking.",
          ]}
        />
      </LegalSection>

      <LegalSection heading="3. Intellectual Property">
        <p>
          All text, images, logos, and design elements on the Site
          belong to, or are used under licence by, ELARIS, and may not
          be copied without prior written permission.
        </p>
      </LegalSection>

      <LegalSection heading="4. Limitation of Liability">
        <p>
          While the information on the Site has been prepared with care,
          ELARIS does not guarantee that the Site will be uninterrupted
          or error-free, nor does it guarantee any particular outcome.
          For details on the scope and limits of our sessions, please
          see{" "}
          <a
            href="/en/yasal/calismalarin-kapsami-ve-onemli-bilgilendirme"
            className="text-gold underline underline-offset-2"
          >
            Scope of Sessions & Important Information
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="5. Changes">
        <p>
          ELARIS reserves the right to update these Terms of Use at any
          time. The current version will always be available on this
          page.
        </p>
      </LegalSection>

      {/* TODO: Jurisdiction (city) to be filled once the business's registered location is confirmed. */}
      <LegalSection heading="6. Governing Law">
        <p>
          These Terms of Use are governed by the laws of the Republic of
          Türkiye. The courts and enforcement offices of{" "}
          <FillIn locale="en" /> have jurisdiction over any disputes.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
