import type { Metadata } from "next";
import LegalPage, { LegalSection, LegalList, FillIn } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Personal Data Protection Notice | ELARIS",
  alternates: {
    canonical: "/en/yasal/kvkk-aydinlatma-metni",
    languages: {
      tr: "/yasal/kvkk-aydinlatma-metni",
      en: "/en/yasal/kvkk-aydinlatma-metni",
    },
  },
};

// TODO: Fields not yet known and not fillable from information on hand —
// complete before publishing: full address, email, tax no. / national ID
// no., and the name of the hosting/technical service provider.
export default function KvkkPageEn() {
  return (
    <LegalPage title="Personal Data Protection Notice" locale="en">
      <LegalSection heading="1. Data Controller">
        <p>
          Under Turkish Law No. 6698 on the Protection of Personal Data
          (&quot;KVKK&quot;), your personal data may be processed as
          described below by <strong>Fethiye Karseri</strong>, as data
          controller (operating under the &quot;ELARIS&quot; brand, via
          elarisdanismanlik.com).
        </p>
        <LegalList
          items={[
            <>Address: <FillIn locale="en" /></>,
            <>Email: <FillIn locale="en" /></>,
            <>
              Phone / WhatsApp:{" "}
              <a
                href="https://wa.me/905348843774"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline underline-offset-2"
              >
                +90 534 884 37 74
              </a>
            </>,
            <>Tax No. / National ID No.: <FillIn locale="en" /></>,
          ]}
        />
      </LegalSection>

      <LegalSection heading="2. Personal Data Processed">
        <p>
          In the course of your booking requests and your use of ELARIS
          sessions, the following personal data may be processed:
        </p>
        <LegalList
          items={[
            "Full name",
            "Phone / WhatsApp number",
            "Booking date and time",
            "Selected session",
            "Records relating to transaction and payment status (once payment integration is active)",
            "Other contact information you provide through relevant forms or communication channels",
            "Technical records necessary for the secure and proper functioning of the website (e.g. cookie preference, device/browser information)",
          ]}
        />
      </LegalSection>

      <LegalSection heading="3. Method of Collection">
        <p>
          Your personal data is collected electronically, directly from
          you, when you complete the booking form on the ELARIS website,
          when you contact us via WhatsApp or Instagram, and as you use
          the website.
        </p>
      </LegalSection>

      <LegalSection heading="4. Purposes of Processing">
        <LegalList
          items={[
            "Receiving, planning, and following up on booking requests",
            "Delivering the session you have selected and managing the booking process",
            "Once payment integration is active, processing and recording your payment",
            "Providing information about our sessions, upon your request",
            "Managing requests and complaints",
            "Ensuring the security and proper functioning of the website",
            "Complying with legal obligations",
          ]}
        />
      </LegalSection>

      <LegalSection heading="5. Legal Basis">
        <p>
          Your personal data is processed on the basis that it is
          directly related to the establishment or performance of a
          contract (the booking/service relationship), the fulfilment of
          a legal obligation, the data controller&apos;s legitimate
          interest (provided this does not harm your fundamental rights
          and freedoms), and, where applicable, your explicit consent.
        </p>
      </LegalSection>

      <LegalSection heading="6. Transfer of Personal Data">
        <p>
          Except where legally required, your personal data is not
          shared with third parties without your explicit consent.
          Accordingly:
        </p>
        <LegalList
          items={[
            "Once online payment integration is active, information necessary to process payment will be processed by the payment service provider handling the transaction.",
            <>
              Technical service providers used to host and operate the
              website: <FillIn locale="en" />.
            </>,
            "Authorised public institutions and organisations, where legally required.",
          ]}
        />
        <p className="text-sm text-ink/60">
          Other than as listed above, no data is currently transferred to
          third-party services that are not actively in use.
        </p>
      </LegalSection>

      <LegalSection heading="7. Retention Period">
        <p>
          Your personal data is retained for as long as required by the
          purpose of processing and the statutory limitation periods set
          out in applicable law; it is deleted, destroyed, or anonymised
          at the end of these periods.
        </p>
      </LegalSection>

      <LegalSection heading="8. Your Rights Under KVKK">
        <p>
          Under Article 11 of the KVKK, you have the right to: learn
          whether your personal data is being processed; request
          information if it has been processed; learn the purpose of
          processing and whether it is used in accordance with that
          purpose; know the third parties to whom it is transferred,
          domestically or abroad; request correction if it is incomplete
          or incorrectly processed; request its deletion or destruction
          within the framework set out by applicable law; request that
          these operations be notified to third parties to whom the data
          has been transferred; object to a result that is to your
          detriment arising solely from automated analysis; and claim
          compensation for damages arising from unlawful processing.
        </p>
      </LegalSection>

      <LegalSection heading="9. How to Apply">
        <p>
          To exercise the rights listed above, you may submit a written
          request to <FillIn locale="en" /> or via{" "}
          <a
            href="https://wa.me/905348843774"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline underline-offset-2"
          >
            WhatsApp (+90 534 884 37 74)
          </a>
          .
        </p>
      </LegalSection>

      <div className="rounded-xl border border-gold/20 bg-gold/5 p-4 text-sm text-ink/70">
        This notice is provided solely to inform you about how your
        personal data is processed; it does not itself constitute a
        declaration of explicit consent. Where a data processing
        activity requires explicit consent, this is presented as a
        separate and independent consent step.
      </div>
    </LegalPage>
  );
}
