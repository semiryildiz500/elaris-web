import type { BlogPost } from "@/lib/blog";

/**
 * ELARIS Blog / Journal yazıları — tek veri kaynağı.
 *
 * Yeni yazı eklemek için aşağıdaki diziye bir nesne ekleyin; sayfa kodu gerekmez.
 * Kapak ve içerik görselleri /public/blog/ altına konur (örn. "/blog/kapak.jpg").
 * TR için `tr`, EN için `en` alanını doldurun; boş bırakılan dilde yazı listelenmez.
 * Yayın tarihi gelecekteyse veya `published: false` ise yazı yayınlanmaz.
 *
 * Örnek (kopyalayıp doldurun):
 *
 * {
 *   slug: "yazi-slug",
 *   category: "farkindalik",
 *   publishedAt: "2026-11-05",
 *   readingMinutes: 5,
 *   coverImage: "/blog/yazi-slug-kapak.jpg",
 *   relatedServices: ["ozdeger-ozsevgi"],
 *   tr: {
 *     title: "...",
 *     excerpt: "...",
 *     coverAlt: "...",
 *     content: [
 *       { type: "p", text: "..." },
 *       { type: "h2", text: "Ara başlık" },
 *       { type: "quote", text: "..." },
 *       { type: "image", src: "/blog/gorsel.jpg", alt: "...", caption: "..." },
 *       { type: "list", items: ["...", "..."] },
 *     ],
 *   },
 *   en: { ... },
 * },
 */
export const blogPosts: BlogPost[] = [];
