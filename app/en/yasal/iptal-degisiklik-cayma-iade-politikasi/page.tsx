import type { Metadata } from "next";
import LegalPage, { LegalSection, LegalList, FillIn } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Cancellation, Rescheduling, Withdrawal & Refund Policy | ELARIS",
  alternates: {
    canonical: "/en/yasal/iptal-degisiklik-cayma-iade-politikasi",
    languages: {
      tr: "/yasal/iptal-degisiklik-cayma-iade-politikasi",
      en: "/en/yasal/iptal-degisiklik-cayma-iade-politikasi",
    },
  },
};

// TODO: Refund timeframe/method (e.g. "within X business days, to the
// original payment method") to be finalised once a real payment provider
// is connected.
export default function CancellationPolicyPageEn() {
  return (
    <LegalPage title="Cancellation, Rescheduling, Withdrawal & Refund Policy" locale="en">
      <LegalSection heading="1. Cancellation & Refund Rule">
        <p>
          Cancellations made <strong>at least 24 hours</strong> before the
          scheduled session are eligible for a refund of the session fee.
        </p>
        <p>
          Cancellations made <strong>less than 24 hours</strong> before
          the scheduled session are non-refundable.
        </p>
        <p className="text-sm text-ink/60">
          This commercial cancellation/refund rule does not remove or
          limit any rights you have under applicable law that cannot be
          excluded by contract, including your statutory right of
          withdrawal set out in Section 3 below.
        </p>
      </LegalSection>

      <LegalSection heading="2. Rescheduling a Session">
        <p>
          Requests to reschedule a session can be submitted via WhatsApp:{" "}
          <a
            href="https://wa.me/905540140509"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline underline-offset-2"
          >
            +90 554 014 05 09
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="3. Right of Withdrawal">
        <p>
          Under the Distance Contracts Regulation, provided that
          performance of the service has not yet begun, you may exercise
          your right of withdrawal within 14 (fourteen) days from the
          date the contract is formed, without giving any reason and
          without paying any penalty.
        </p>
        <p>
          Where, at the Client&apos;s explicit request, performance of
          the service has begun before the withdrawal period expires, or
          the service has been fully performed, the right of withdrawal
          may not be exercised, in accordance with the relevant exception
          provisions of the Distance Contracts Regulation.
        </p>
      </LegalSection>

      <LegalSection heading="4. Exercising the Right of Withdrawal">
        <p>
          To exercise your right of withdrawal, it is sufficient to
          notify us via the contact channel stated in your booking
          confirmation, or via{" "}
          <a
            href="https://wa.me/905540140509"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline underline-offset-2"
          >
            WhatsApp (+90 554 014 05 09)
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="5. Refund Condition">
        <p>
          Where the right of withdrawal is exercised within the period
          and in accordance with the correct procedure, the full session
          fee is refunded, regardless of the 24-hour rule in Section 1.
          Details on the refund timeframe and method: <FillIn locale="en" />.
        </p>
      </LegalSection>

      <LegalSection heading="6. Exceptions">
        <LegalList
          items={[
            "Services fully performed, with the Client's consent, before the withdrawal period expires",
            "Services that, by their nature, cannot be returned, having been provided specifically for the individual",
            "Other exceptional cases set out in applicable law",
          ]}
        />
      </LegalSection>
    </LegalPage>
  );
}
