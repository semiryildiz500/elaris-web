import type { Metadata } from "next";
import LegalPage, { LegalSection, LegalList } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Cookie Policy | ELARIS",
  alternates: {
    canonical: "/en/yasal/cerez-politikasi",
    languages: {
      tr: "/yasal/cerez-politikasi",
      en: "/en/yasal/cerez-politikasi",
    },
  },
};

export default function CookiePolicyPageEn() {
  return (
    <LegalPage title="Cookie Policy" locale="en">
      <LegalSection heading="1. Cookies and Similar Technologies">
        <p>
          Cookies are small pieces of data placed on your browser by the
          websites you visit. In addition to cookies, the ELARIS website
          also uses your browser&apos;s local storage (localStorage) for
          similar purposes, such as remembering your preferences.
        </p>
      </LegalSection>

      <LegalSection heading="2. Category Currently in Use: Necessary">
        <p>
          This site currently performs only the <strong>Necessary</strong>{" "}
          data-storage operations required for its core functionality:
        </p>
        <LegalList
          items={[
            "Remembering your cookie preference (which categories you have consented to)",
            "Keeping, in this browser, the booking you have confirmed, in order to prevent a conflicting booking from being created for the same date/time",
          ]}
        />
        <p>
          These records cannot be disabled; otherwise the site cannot
          perform its core functions.
        </p>
      </LegalSection>

      <LegalSection heading="3. Categories Not Yet Active: Analytics and Marketing">
        <p>
          Preference-management infrastructure is in place on the site
          for the Analytics and Marketing categories below, but no
          analytics or advertising cookie/script from either category is
          currently run on the site. If such a service is introduced in
          the future:
        </p>
        <LegalList
          items={[
            <>
              <strong>Analytics:</strong> Would help us understand site
              usage, and would only be enabled with your explicit
              consent.
            </>,
            <>
              <strong>Marketing:</strong> Could be used to deliver content
              relevant to your interests, and would only be enabled with
              your explicit consent.
            </>,
          ]}
        />
        <p>
          No non-essential cookie or script is run before you state your
          preference.
        </p>
      </LegalSection>

      <LegalSection heading="4. Preference Panel">
        <p>
          You can update your preference at any time using the
          &quot;Necessary Only&quot;, &quot;Accept All&quot;, or
          &quot;Manage Preferences&quot; options on the information bar
          shown when the site loads, or on our{" "}
          <a
            href="/en/yasal/cerez-tercihleri"
            className="text-gold underline underline-offset-2"
          >
            Cookie Preferences
          </a>{" "}
          page.
        </p>
      </LegalSection>

      <LegalSection heading="5. Browser Settings">
        <p>
          You can also manage or fully block cookies and local storage
          through your browser settings; in that case some parts of the
          site (e.g. conflicting-booking prevention) may not work as
          expected.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
