import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services } from "@/lib/data";
import ServiceDetailContent from "@/components/service-detail-content";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata(
  props: PageProps<"/calismalar/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  return { title: service ? `${service.name} | ELARIS` : "Çalışma | ELARIS" };
}

export default async function ServiceDetailPage(
  props: PageProps<"/calismalar/[slug]">
) {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <div className="bg-cream">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
        <Link
          href="/#calismalar"
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-ink/50 transition-colors hover:text-gold"
        >
          ← Çalışmalara Dön
        </Link>

        <div className="mt-10">
          <ServiceDetailContent service={service} />
        </div>
      </div>
    </div>
  );
}
