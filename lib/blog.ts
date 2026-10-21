import type { Locale } from "@/lib/i18n";
import { blogPosts } from "@/lib/blog-posts";

/* ---------- Kategoriler ---------- */

export type BlogCategoryId =
  | "farkindalik"
  | "icsel-denge"
  | "iliskiler"
  | "ozdeger"
  | "enerji-calismalari"
  | "kendine-donus";

export const blogCategories: Record<
  BlogCategoryId,
  { tr: string; en: string }
> = {
  farkindalik: { tr: "Farkındalık", en: "Awareness" },
  "icsel-denge": { tr: "İçsel Denge", en: "Inner Balance" },
  iliskiler: { tr: "İlişkiler", en: "Relationships" },
  ozdeger: { tr: "Özdeğer", en: "Self-Worth" },
  "enerji-calismalari": { tr: "Enerji Çalışmaları", en: "Energy Work" },
  "kendine-donus": { tr: "Kendine Dönüş", en: "Returning to Self" },
};

/* ---------- Yazı veri modeli ---------- */

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string };

export type BlogPostLocaleContent = {
  title: string;
  excerpt: string;
  coverAlt: string;
  content: BlogBlock[];
  /** Boşsa title kullanılır. */
  seoTitle?: string;
  /** Boşsa excerpt kullanılır. */
  seoDescription?: string;
};

export type BlogPost = {
  /** TR ve EN için ortak slug. */
  slug: string;
  category: BlogCategoryId;
  /** ISO tarih: "2026-11-05". Gelecek tarihli yazılar yayınlanmaz. */
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  /** /public altındaki görsel yolu, örn. "/blog/ornek-kapak.jpg" */
  coverImage: string;
  /** Taslak için false. Varsayılan: true. */
  published?: boolean;
  /** lib/data.ts içindeki çalışma slug'ları. */
  relatedServices?: string[];
  tr?: BlogPostLocaleContent;
  en?: BlogPostLocaleContent;
};

export type LocalizedBlogPost = {
  slug: string;
  category: BlogCategoryId;
  categoryLabel: string;
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  coverImage: string;
  relatedServices: string[];
  locale: Locale;
} & BlogPostLocaleContent;

/* ---------- Yol yardımcıları ---------- */

export const blogBasePath = (locale: Locale) =>
  locale === "en" ? "/en/journal" : "/blog";

export const blogPostPath = (locale: Locale, slug: string) =>
  `${blogBasePath(locale)}/${slug}`;

/* ---------- Sorgular ---------- */

function isLive(post: BlogPost): boolean {
  if (post.published === false) return false;
  return new Date(post.publishedAt).getTime() <= Date.now();
}

function localize(post: BlogPost, locale: Locale): LocalizedBlogPost | null {
  const c = post[locale];
  if (!c) return null;
  return {
    slug: post.slug,
    category: post.category,
    categoryLabel: blogCategories[post.category][locale],
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    readingMinutes: post.readingMinutes,
    coverImage: post.coverImage,
    relatedServices: post.relatedServices ?? [],
    locale,
    ...c,
  };
}

/** Yayınlanmış yazılar, yeniden eskiye. */
export function getBlogPosts(locale: Locale): LocalizedBlogPost[] {
  return blogPosts
    .filter(isLive)
    .map((p) => localize(p, locale))
    .filter((p): p is LocalizedBlogPost => p !== null)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getBlogPost(
  locale: Locale,
  slug: string
): LocalizedBlogPost | undefined {
  return getBlogPosts(locale).find((p) => p.slug === slug);
}

/** previous = bir önceki (daha eski) yazı, next = daha yeni yazı. */
export function getAdjacentPosts(locale: Locale, slug: string) {
  const list = getBlogPosts(locale);
  const i = list.findIndex((p) => p.slug === slug);
  return {
    previous: i >= 0 ? list[i + 1] : undefined,
    next: i > 0 ? list[i - 1] : undefined,
  };
}

export function formatBlogDate(iso: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === "en" ? "en-GB" : "tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));
}

/* ---------- Arayüz metinleri ---------- */

export const blogCopy = {
  tr: {
    navLabel: "BLOG",
    title: "BLOG",
    subtitle: "Farkındalık, içsel denge ve kendine dönüş üzerine notlar.",
    emptyTitle: "ELARIS Blog yakında burada.",
    emptyText:
      "Farkındalık, içsel denge ve kendine dönüş üzerine yeni yazılar hazırlanıyor.",
    readPost: "Yazıyı Oku",
    minutes: "dk okuma",
    backToList: "← Tüm Yazılar",
    relatedHeading: "İlgili ELARIS Çalışmaları",
    ctaHeading: "Kendinize alan açmak ister misiniz?",
    ctaText:
      "Size uygun çalışmayı birlikte belirlemek için randevu oluşturabilirsiniz.",
    ctaButton: "Randevu Al",
    previous: "Önceki Yazı",
    next: "Sonraki Yazı",
    metaTitle: "Blog | ELARIS",
    metaDescription:
      "ELARIS Blog: farkındalık, içsel denge ve kendine dönüş üzerine notlar.",
    schemaBlogName: "ELARIS Blog",
  },
  en: {
    navLabel: "JOURNAL",
    title: "JOURNAL",
    subtitle: "Notes on awareness, inner balance and returning to yourself.",
    emptyTitle: "The ELARIS Journal is coming soon.",
    emptyText:
      "New writings on awareness, inner balance and returning to yourself are being prepared.",
    readPost: "Read the Article",
    minutes: "min read",
    backToList: "← All Articles",
    relatedHeading: "Related ELARIS Sessions",
    ctaHeading: "Would you like to make space for yourself?",
    ctaText:
      "You can book a session and we will find the work that suits you together.",
    ctaButton: "Book a Session",
    previous: "Previous Article",
    next: "Next Article",
    metaTitle: "Journal | ELARIS",
    metaDescription:
      "The ELARIS Journal: notes on awareness, inner balance and returning to yourself.",
    schemaBlogName: "ELARIS Journal",
  },
} as const;
