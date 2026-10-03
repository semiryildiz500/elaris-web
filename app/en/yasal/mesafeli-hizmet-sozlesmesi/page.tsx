import type { Metadata } from "next";
import LegalPage, { LegalSection, LegalList, FillIn } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Distance Service Agreement | ELARIS",
  alternates: {
    canonical: "/en/yasal/mesafeli-hizmet-sozlesmesi",
    languages: {
      tr: "/yasal/mesafeli-hizmet-sozlesmesi",
      en: "/en/yasal/mesafeli-hizmet-sozlesmesi",
    },
  },
};

/**
 * IMPORTANT: This page is a draft. Before a real payment integration
 * (e.g. PayTR) is activated, this entire agreement must be reviewed by
 * legal counsel and the [TO BE COMPLETED] fields must be filled in.
 * Service/date/time/duration/price details are designed to be reflected
 * dynamically from the "Booking Summary" step of the booking flow (see
 * SummaryStep in components/appointment-form.tsx).
 */
export default function DistanceServiceAgreementPageEn() {
  return (
    <LegalPage title="Distance Service Agreement" locale="en">
      <LegalSection heading="1. Parties">
        <p>
          This agreement is formed electronically, at the time of
          booking confirmation, between <strong>Fethiye Karseri</strong>{" "}
          (the &quot;Service Provider&quot;, operating under the
          &quot;ELARIS&quot; brand via elarisdanismanlik.com) and the
          person requesting the booking (the &quot;Client&quot;).
        </p>
        <LegalList
          items={[
            <>Address: <FillIn locale="en" /></>,
            <>Email: <FillIn locale="en" /></>,
            <>
              WhatsApp:{" "}
              <a
                href="https://wa.me/905348843774"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline underline-offset-2"
              >
                +90 534 884 37 74
              </a>
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection heading="2. Subject of the Agreement">
        <p>
          In accordance with Turkish Law No. 6502 on the Protection of
          Consumers and the Distance Contracts Regulation, this
          agreement sets out the rights and obligations of the parties
          relating to the sale and performance of the service requested
          electronically via the ELARIS website.
        </p>
      </LegalSection>

      <LegalSection heading="3. Main Characteristics and Price of the Service">
        <p>
          The name, description, duration, and total price of the
          session selected are shown to the Client at the
          &quot;Booking Summary&quot; step of the booking flow and are
          submitted for the Client&apos;s confirmation. Prices are the
          current rates published in the ELARIS Sessions section. By
          clicking the relevant button at the payment step, the Client
          agrees to be bound by a payment obligation for this amount.
        </p>
        <p className="text-sm text-ink/60">
          Note: Online payment integration has not yet been completed;
          until this stage is complete, booking requests are recorded
          without payment.
        </p>
      </LegalSection>

      <LegalSection heading="4. Performance">
        <p>
          The service is performed at the date and time stated in the
          booking confirmation, using the selected format (online
          session or in-person session). The place of performance and
          connection details are sent to the Client after the booking is
          confirmed.
        </p>
      </LegalSection>

      <LegalSection heading="5. Right of Withdrawal">
        <p>
          The Client&apos;s right of withdrawal, including its
          conditions, duration, and exceptions, is further regulated on
          the{" "}
          <a
            href="/en/yasal/iptal-degisiklik-cayma-iade-politikasi"
            className="text-gold underline underline-offset-2"
          >
            Cancellation, Rescheduling, Withdrawal & Refund Policy
          </a>{" "}
          page and forms an integral part of this agreement. The period
          and conditions set out in that policy have not yet been
          finalised and will be completed prior to publication.
        </p>
      </LegalSection>

      <LegalSection heading="6. Force Majeure">
        <p>
          Where performance of the service is prevented by circumstances
          beyond the parties&apos; control that were unforeseeable and
          unavoidable (force majeure), the affected party shall promptly
          notify the other, and the parties&apos; obligations shall be
          suspended to the extent of the effect of the force majeure
          event.
        </p>
      </LegalSection>

      <LegalSection heading="7. Dispute Resolution">
        <LegalList
          items={[
            "For consumer transactions, the Consumer Arbitration Committee or Consumer Courts at the consumer's place of residence are authorised, according to the value announced by the Ministry of Trade.",
          ]}
        />
      </LegalSection>
    </LegalPage>
  );
}
