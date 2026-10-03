import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { servicesEn } from "@/lib/data.en";
import ServiceDetailContent from "@/components/service-detail-content";
import { getDictionary } from "@/lib/i18n";

export function generateStaticParams() {
  return servicesEn.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata(
  props: PageProps<"/en/calismalar/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = servicesEn.find((s) => s.slug === slug);
  return {
    title: service ? `${service.name} | ELARIS` : "Session | ELARIS",
    alternates: {
      canonical: `/en/calismalar/${slug}`,
      languages: { tr: `/calismalar/${slug}`, en: `/en/calismalar/${slug}` },
    },
  };
}

export default async function ServiceDetailPageEn(
  props: PageProps<"/en/calismalar/[slug]">
) {
  const { slug } = await props.params;
  const service = servicesEn.find((s) => s.slug === slug);

  if (!service) notFound();

  const t = getDictionary("en").serviceDetail;

  return (
    <div className="bg-cream">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
        <Link
          href="/en/#calismalar"
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-ink/50 transition-colors hover:text-gold"
        >
          {t.backToSessions}
        </Link>

        <div className="mt-10">
          <ServiceDetailContent service={service} locale="en" />
        </div>
      </div>
    </div>
  );
}
