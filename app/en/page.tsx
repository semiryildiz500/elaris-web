import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import Hero from "@/components/hero";
import WelcomeSection from "@/components/welcome-section";
import ServicesSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import WorkshopsSection from "@/components/workshops-section";
import CertificatesSection from "@/components/certificates-section";
import ContactSection from "@/components/contact-section";
import AppointmentCta from "@/components/appointment-cta";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title: "ELARIS | Fethiye Karseri",
  description:
    "ELARIS offers a calm, sophisticated space for awareness and energy work, led by Fethiye Karseri.",
  alternates: {
    canonical: "/en",
    languages: { tr: "/", en: "/en" },
  },
};

export default function HomeEn() {
  return (
    <>
      <SiteHeader locale="en" />
      <main className="flex-1">
        <Hero locale="en" />
        <AboutSection locale="en" />
        <ServicesSection locale="en" />
        <WelcomeSection locale="en" />
        <WorkshopsSection locale="en" />
        <CertificatesSection locale="en" />
        <ContactSection locale="en" />
        <AppointmentCta locale="en" />
      </main>
      <SiteFooter locale="en" />
    </>
  );
}
