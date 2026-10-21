import type { MetadataRoute } from "next";
import { services } from "@/lib/data";
import { legalPages } from "@/lib/legal-pages";
import { getBlogPosts, blogBasePath, blogPostPath } from "@/lib/blog";
import { siteUrl } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const u = (p: string) => `${siteUrl}${p}`;
  const staticPaths = [
    "/",
    "/en",
    blogBasePath("tr"),
    blogBasePath("en"),
    ...services.flatMap((s) => [
      `/calismalar/${s.slug}`,
      `/en/calismalar/${s.slug}`,
    ]),
    ...legalPages.flatMap((p) => [`/yasal/${p.slug}`, `/en/yasal/${p.slug}`]),
  ];

  const posts = (["tr", "en"] as const).flatMap((locale) =>
    getBlogPosts(locale).map((p) => ({
      url: u(blogPostPath(locale, p.slug)),
      lastModified: p.updatedAt ?? p.publishedAt,
    }))
  );

  return [...staticPaths.map((p) => ({ url: u(p) })), ...posts];
}
