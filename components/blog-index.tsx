import Image from "next/image";
import Link from "next/link";
import {
  blogCopy,
  blogPostPath,
  formatBlogDate,
  getBlogPosts,
} from "@/lib/blog";
import { blogIndexJsonLd } from "@/lib/blog-seo";
import type { Locale } from "@/lib/i18n";

export default function BlogIndex({ locale = "tr" }: { locale?: Locale }) {
  const t = blogCopy[locale];
  const posts = getBlogPosts(locale);

  return (
    <div className="bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogIndexJsonLd(locale)).replace(/</g, "\\u003c"),
        }}
      />
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24">
        <header className="mx-auto max-w-2xl text-center">
          <h1 className="font-serif text-4xl tracking-[0.18em] text-ink sm:text-5xl">
            {t.title}
          </h1>
          <div className="mx-auto mt-6 h-px w-16 bg-gold/60" />
          <p className="mt-6 text-base leading-relaxed text-ink/70 sm:text-lg">
            {t.subtitle}
          </p>
        </header>

        {posts.length === 0 ? (
          <div className="mx-auto mt-16 max-w-xl rounded-2xl border border-ink/10 bg-white/70 px-6 py-14 text-center shadow-[0_10px_30px_-22px_rgba(43,36,32,0.3)] sm:mt-20 sm:px-12 sm:py-20">
            <h2 className="font-serif text-2xl leading-snug text-ink sm:text-3xl">
              {t.emptyTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/70">
              {t.emptyText}
            </p>
          </div>
        ) : (
          <div className="mt-14 grid gap-8 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white/70 shadow-[0_10px_30px_-22px_rgba(43,36,32,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_20px_40px_-20px_rgba(176,141,87,0.55)]"
              >
                <Link
                  href={blogPostPath(locale, post.slug)}
                  className="relative block aspect-[16/10] overflow-hidden bg-sand"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <Image
                    src={post.coverImage}
                    alt={post.coverAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                    {post.categoryLabel}
                  </p>
                  <h2 className="mt-3 font-serif text-xl font-semibold leading-snug text-ink sm:text-2xl">
                    <Link
                      href={blogPostPath(locale, post.slug)}
                      className="transition-colors hover:text-gold"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink/75">
                    {post.excerpt}
                  </p>
                  <p className="mt-5 text-xs text-ink/50">
                    {formatBlogDate(post.publishedAt, locale)} ·{" "}
                    {post.readingMinutes} {t.minutes}
                  </p>
                  <div className="mt-auto border-t border-ink/10 pt-5">
                    <Link
                      href={blogPostPath(locale, post.slug)}
                      className="text-sm font-medium text-ink/80 underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold"
                    >
                      {t.readPost}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
