import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { LegalSection, LegalList } from "@/components/legal-page";
import MedicalDisclaimer from "@/components/medical-disclaimer";
import { servicesEn } from "@/lib/data.en";

export const metadata: Metadata = {
  title: "Scope of Sessions & Important Information | ELARIS",
  alternates: {
    canonical: "/en/yasal/calismalarin-kapsami-ve-onemli-bilgilendirme",
    languages: {
      tr: "/yasal/calismalarin-kapsami-ve-onemli-bilgilendirme",
      en: "/en/yasal/calismalarin-kapsami-ve-onemli-bilgilendirme",
    },
  },
};

export default function ScopeOfWorkPageEn() {
  return (
    <LegalPage title="Scope of Sessions & Important Information" locale="en">
      <LegalSection heading="General Nature">
        <p>
          All sessions offered within ELARIS are practices focused on
          awareness, energy balance, and personal growth, accompanying
          the person throughout. Sessions are based on individual
          experience; outcomes may vary from person to person, and no
          specific outcome is guaranteed.
        </p>
      </LegalSection>

      <LegalSection heading="Format">
        <p>
          All sessions can be held both online and in person. Individual
          sessions are currently scheduled for 30, 45, or 60 minutes
          depending on the session selected; duration and price are
          shown on the relevant session&apos;s detail page.
        </p>
      </LegalSection>

      <LegalSection heading="Who May Not Be Suitable">
        <p>
          It is strongly recommended that anyone in the following
          situations consult a healthcare professional before taking
          part in a session, and inform ELARIS of their situation in
          advance:
        </p>
        <LegalList
          items={[
            "A diagnosis of severe psychiatric illness, or being in an acute crisis period",
            "A history of epilepsy or seizures",
            "A high-risk pregnancy or other high-risk health condition",
            "An acute health condition for which a doctor has advised rest",
          ]}
        />
        <p>
          This list is not exhaustive; if in doubt, please consult a
          healthcare professional first.
        </p>
      </LegalSection>

      <LegalSection heading="No Guarantee of Outcome & Referral to Healthcare Professionals">
        <LegalList
          items={[
            "ELARIS sessions do not guarantee any specific outcome.",
            "Sessions do not replace the advice or treatment of a doctor, psychiatrist, psychologist, or other qualified healthcare professional.",
            "If you have a serious health or psychological concern, please consult an appropriately qualified healthcare professional first.",
          ]}
        />
      </LegalSection>

      <LegalSection heading="Current Sessions">
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {servicesEn.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/en/calismalar/${service.slug}`}
                className="text-sm text-ink/75 underline decoration-gold/40 underline-offset-2 transition-colors hover:text-gold"
              >
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
      </LegalSection>

      <MedicalDisclaimer locale="en" />
    </LegalPage>
  );
}
