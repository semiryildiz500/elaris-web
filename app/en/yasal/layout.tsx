import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export default function YasalLayoutEn({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader locale="en" />
      <main className="flex-1">{children}</main>
      <SiteFooter locale="en" />
    </>
  );
}
