import type { Metadata } from "next";
import {
  blogCopy,
  blogBasePath,
  blogPostPath,
  getBlogPosts,
  type LocalizedBlogPost,
} from "@/lib/blog";
import { siteUrl, type Locale } from "@/lib/i18n";

const abs = (path: string) => `${siteUrl}${path}`;

export function blogIndexMetadata(locale: Locale): Metadata {
  const t = blogCopy[locale];
  const path = blogBasePath(locale);
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: {
      canonical: path,
      languages: {
        tr: blogBasePath("tr"),
        en: blogBasePath("en"),
        "x-default": blogBasePath("tr"),
      },
    },
    openGraph: {
      type: "website",
      siteName: "ELARIS",
      title: t.metaTitle,
      description: t.metaDescription,
      url: abs(path),
      locale: locale === "en" ? "en_US" : "tr_TR",
    },
  };
}

export function blogPostMetadata(
  locale: Locale,
  post: LocalizedBlogPost
): Metadata {
  const title = `${post.seoTitle ?? post.title} | ELARIS`;
  const description = post.seoDescription ?? post.excerpt;
  const path = blogPostPath(locale, post.slug);
  const other: Locale = locale === "en" ? "tr" : "en";
  const hasOther = getBlogPosts(other).some((p) => p.slug === post.slug);
  const languages: Record<string, string> = {
    [locale]: path,
    ...(hasOther ? { [other]: blogPostPath(other, post.slug) } : {}),
  };
  languages["x-default"] = languages.tr ?? path;

  return {
    title,
    description,
    alternates: { canonical: path, languages },
    openGraph: {
      type: "article",
      siteName: "ELARIS",
      title,
      description,
      url: abs(path),
      locale: locale === "en" ? "en_US" : "tr_TR",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      section: post.categoryLabel,
      authors: ["Fethiye Karseri"],
      images: [{ url: abs(post.coverImage), alt: post.coverAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [abs(post.coverImage)],
    },
  };
}

export function articleJsonLd(locale: Locale, post: LocalizedBlogPost) {
  const url = abs(blogPostPath(locale, post.slug));
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.seoDescription ?? post.excerpt,
    image: [abs(post.coverImage)],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    articleSection: post.categoryLabel,
    inLanguage: locale,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    author: { "@type": "Person", name: "Fethiye Karseri" },
    publisher: {
      "@type": "Organization",
      name: "ELARIS",
      url: siteUrl,
    },
  };
}

export function blogIndexJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: blogCopy[locale].schemaBlogName,
    description: blogCopy[locale].subtitle,
    url: abs(blogBasePath(locale)),
    inLanguage: locale,
    publisher: { "@type": "Organization", name: "ELARIS", url: siteUrl },
  };
}
