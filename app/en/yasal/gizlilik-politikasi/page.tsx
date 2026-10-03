import type { Metadata } from "next";
import LegalPage, { LegalSection, LegalList, FillIn } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy | ELARIS",
  alternates: {
    canonical: "/en/yasal/gizlilik-politikasi",
    languages: {
      tr: "/yasal/gizlilik-politikasi",
      en: "/en/yasal/gizlilik-politikasi",
    },
  },
};

// TODO: Fields not yet known — complete before publishing: email address,
// name of the hosting/technical service provider.
export default function PrivacyPolicyPageEn() {
  return (
    <LegalPage title="Privacy Policy" locale="en">
      <LegalSection heading="1. Introduction">
        <p>
          This Privacy Policy explains our general approach to how your
          information is handled when you visit elarisdanismanlik.com,
          operated by Fethiye Karseri under the ELARIS brand, and when
          you make use of our sessions. For formal information on how
          your personal data is processed under KVKK, please see our
          separate{" "}
          <a
            href="/en/yasal/kvkk-aydinlatma-metni"
            className="text-gold underline underline-offset-2"
          >
            Personal Data Protection Notice
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="2. Information Collected">
        <LegalList
          items={[
            "The full name and WhatsApp number you provide via the booking form",
            "The session you select, and your booking date and time",
            "Technical data that may be collected depending on your cookie preferences (see our Cookie Policy)",
          ]}
        />
      </LegalSection>

      <LegalSection heading="3. Why the Information Is Used">
        <p>
          The information we collect is used solely to carry out your
          booking process, to contact you, and to improve your
          experience on the site. We do not contact you for marketing
          purposes without your explicit consent.
        </p>
      </LegalSection>

      <LegalSection heading="4. Our Approach to Security">
        <p>
          We take reasonable technical and administrative measures to
          prevent unlawful processing of, and unauthorised access to,
          your information. However, no method of transmission or
          storage over the internet can be guaranteed to be 100% secure.
        </p>
      </LegalSection>

      <LegalSection heading="5. Third-Party Service Providers">
        <p>
          The website does not currently use an active payment provider
          or any analytics/advertising service. Once these services are
          introduced, the providers used and the scope of data sharing
          will be updated on this page. The technical infrastructure
          provider used to host the website: <FillIn locale="en" />.
        </p>
      </LegalSection>

      <LegalSection heading="6. Our Approach to Retention">
        <p>
          Your information is retained for as long as required by the
          purpose for which it was collected and any applicable statutory
          periods, after which it is deleted or anonymised.
        </p>
      </LegalSection>

      <LegalSection heading="7. Your Rights">
        <p>
          For the full list of rights relating to your personal data,
          please see our{" "}
          <a
            href="/en/yasal/kvkk-aydinlatma-metni"
            className="text-gold underline underline-offset-2"
          >
            Personal Data Protection Notice
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="8. Contact">
        <p>
          For questions about our privacy practices, you can reach us via{" "}
          <a
            href="https://wa.me/905540140509"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline underline-offset-2"
          >
            WhatsApp (+90 554 014 05 09)
          </a>{" "}
          or at <FillIn locale="en" />.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
