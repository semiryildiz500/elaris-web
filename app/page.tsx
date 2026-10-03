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

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <WelcomeSection />
        <WorkshopsSection />
        <CertificatesSection />
        <ContactSection />
        <AppointmentCta />
      </main>
      <SiteFooter />
    </>
  );
}
