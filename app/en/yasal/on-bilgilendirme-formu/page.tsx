import type { Metadata } from "next";
import LegalPage, { LegalSection, LegalList, FillIn } from "@/components/legal-page";
import MedicalDisclaimer from "@/components/medical-disclaimer";

export const metadata: Metadata = {
  title: "Pre-Contract Information | ELARIS",
  alternates: {
    canonical: "/en/yasal/on-bilgilendirme-formu",
    languages: {
      tr: "/yasal/on-bilgilendirme-formu",
      en: "/en/yasal/on-bilgilendirme-formu",
    },
  },
};

// TODO: Fields not yet known — complete before publishing: full address,
// email, whether prices include VAT.
export default function PreInformationPageEn() {
  return (
    <LegalPage title="Pre-Contract Information" locale="en">
      <LegalSection heading="1. Service Provider">
        <LegalList
          items={[
            <>Name / Brand: Fethiye Karseri / ELARIS</>,
            <>Website: elarisdanismanlik.com</>,
            <>Address: <FillIn locale="en" /></>,
            <>
              Phone / WhatsApp:{" "}
              <a
                href="https://wa.me/905540140509"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline underline-offset-2"
              >
                +90 554 014 05 09
              </a>
            </>,
            <>Email: <FillIn locale="en" /></>,
          ]}
        />
      </LegalSection>

      <LegalSection heading="2. Main Characteristics of the Service">
        <p>
          The name, content, approximate duration, and format (online or
          in person) of the session you select are clearly shown on
          screen before you confirm your booking. For the scope of our
          sessions, please see{" "}
          <a
            href="/en/yasal/calismalarin-kapsami-ve-onemli-bilgilendirme"
            className="text-gold underline underline-offset-2"
          >
            Scope of Sessions & Important Information
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="3. Total Price and Payment">
        <p>
          The total price of the session you select, based on the
          current pricing published in the ELARIS Sessions section, is
          shown on the booking summary screen before the payment step.
          Information on whether prices include tax: <FillIn locale="en" />.
          Clicking the button that creates a payment obligation means you
          agree to pay this amount.
        </p>
      </LegalSection>

      <LegalSection heading="4. Cancellation, Rescheduling & Right of Withdrawal">
        <p>
          Cancellations made at least 24 hours before the scheduled
          session are eligible for a refund of the session fee.
          Cancellations made less than 24 hours before the scheduled
          session are non-refundable. Requests to reschedule a session
          can be submitted via WhatsApp. For all conditions, timeframes,
          and exceptions, including your statutory right of withdrawal,
          please see{" "}
          <a
            href="/en/yasal/iptal-degisiklik-cayma-iade-politikasi"
            className="text-gold underline underline-offset-2"
          >
            Cancellation, Rescheduling, Withdrawal & Refund Policy
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="5. Complaints and Objections">
        <p>
          You may submit complaints and objections regarding the service
          via{" "}
          <a
            href="https://wa.me/905540140509"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline underline-offset-2"
          >
            WhatsApp (+90 554 014 05 09)
          </a>
          ; where applicable under the law, you may also apply to the
          Consumer Arbitration Committees or Consumer Courts.
        </p>
      </LegalSection>

      <MedicalDisclaimer locale="en" />
    </LegalPage>
  );
}
