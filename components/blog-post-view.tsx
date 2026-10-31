import Image from "next/image";
import Link from "next/link";
import { servicesEn } from "@/lib/data.en";
import { services } from "@/lib/data";
import {
  blogBasePath,
  blogCopy,
  blogPostPath,
  getAdjacentPosts,
  type BlogBlock,
  type LocalizedBlogPost,
} from "@/lib/blog";
import { articleJsonLd } from "@/lib/blog-seo";
import type { Locale } from "@/lib/i18n";

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-12 font-serif text-2xl leading-snug text-ink sm:text-3xl">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="mt-8 font-serif text-xl leading-snug text-ink sm:text-2xl">
          {block.text}
        </h3>
      );
    case "quote":
      return (
        <blockquote className="relative my-12 border-y border-gold/30 bg-white/35 px-6 py-9 text-center font-serif text-xl leading-relaxed text-ink sm:my-16 sm:px-10 sm:py-11 sm:text-2xl">
          <span className="mx-auto block h-px w-10 bg-gold/70" />
          <span className="mt-6 block">{block.text}</span>
          {block.cite && (
            <footer className="mt-3 font-sans text-xs uppercase tracking-[0.2em] text-ink/50">
              {block.cite}
            </footer>
          )}
        </blockquote>
      );
    case "contrast":
      return (
        <div className="my-14 border-y border-ink/10 py-10 text-center sm:my-16 sm:py-12">
          <p className="font-serif text-xl text-ink/55 line-through decoration-gold/60 sm:text-2xl">
            “{block.from}”
          </p>
          <p className="my-4 text-xs font-medium uppercase tracking-[0.28em] text-gold">
            yerine
          </p>
          <p className="font-serif text-2xl leading-snug text-ink sm:text-3xl">
            “{block.to}”
          </p>
        </div>
      );
    case "notice":
      return (
        <aside className="my-12 rounded-2xl border border-gold/25 bg-gold/5 px-6 py-7 text-sm leading-relaxed text-ink/75 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {block.heading}
          </p>
          <p className="mt-3">{block.text}</p>
        </aside>
      );
    case "signature":
      return (
        <div className="my-14 text-center">
          <div className="mx-auto mb-7 h-px w-14 bg-gold/50" />
          <p className="font-serif text-2xl tracking-[0.24em] text-ink">
            {block.name}
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.24em] text-gold">
            {block.motto}
          </p>
        </div>
      );
    case "list":
      return (
        <ul className="mt-5 list-disc space-y-2 pl-6 marker:text-gold">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "image":
      return (
        <figure className="my-10">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-sand">
            <Image
              src={block.src}
              alt={block.alt}
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-3 text-center text-xs text-ink/50">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    default:
      return <p className="mt-5">{block.text}</p>;
  }
}

export default function BlogPostView({
  locale = "tr",
  post,
}: {
  locale?: Locale;
  post: LocalizedBlogPost;
}) {
  const t = blogCopy[locale];
  const homeBase = locale === "en" ? "/en" : "";
  const serviceList = locale === "en" ? servicesEn : services;
  const related = post.relatedServices
    .map((slug) => serviceList.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const { previous, next } = getAdjacentPosts(locale, post.slug);

  return (
    <article className="bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd(locale, post)).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />
      <div className="mx-auto max-w-3xl px-6 pb-16 pt-12 sm:px-10 sm:pb-24 sm:pt-20">
        <Link
          href={blogBasePath(locale)}
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-ink/50 transition-colors hover:text-gold"
        >
          {t.backToList}
        </Link>

        <header className="mt-10 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
            {post.categoryLabel}
          </p>
          <h1 className="mt-5 font-serif text-3xl leading-tight text-ink sm:text-5xl">
            {post.title}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
            {post.excerpt}
          </p>
        </header>

        {post.coverImage && (
          <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-2xl bg-sand sm:mt-14">
            <Image
              src={post.coverImage}
              alt={post.coverAlt}
              fill
              priority
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </div>
        )}

        <div className="mt-12 text-base leading-[1.9] text-ink/80 sm:text-lg [&>*:first-child]:mt-0">
          {post.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>

        {related.length > 0 && (
          <section className="mt-16 border-t border-ink/10 pt-10">
            <h2 className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
              {t.relatedHeading}
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {related.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`${homeBase}/calismalar/${s.slug}`}
                    className="block rounded-xl border border-ink/10 bg-white/70 px-5 py-4 font-serif text-lg text-ink transition-colors hover:border-gold/50 hover:text-gold"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-16 rounded-2xl border border-gold/20 bg-gradient-to-b from-powder/50 to-sand/50 px-6 py-12 text-center sm:px-12">
          <h2 className="font-serif text-2xl leading-snug text-ink sm:text-3xl">
            {locale === "tr" ? "Elaris’te Enerji Çalışmaları" : t.ctaHeading}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink/70">
            {locale === "tr"
              ? "Elaris’in yaklaşımını daha yakından tanıyın; online ve yüz yüze bireysel çalışma seçeneklerini inceleyin."
              : t.ctaText}
          </p>
          <Link
            href={`${homeBase}/#calismalar`}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-ink px-8 py-3 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-ink/85"
          >
            {locale === "tr" ? "Çalışmaları İncele" : t.ctaButton}
          </Link>
        </section>

        {(previous || next) && (
          <nav className="mt-14 grid gap-4 sm:grid-cols-2">
            {previous ? (
              <Link
                href={blogPostPath(locale, previous.slug)}
                className="rounded-xl border border-ink/10 bg-white/70 p-5 transition-colors hover:border-gold/50"
              >
                <span className="text-xs uppercase tracking-[0.2em] text-gold">
                  ← {t.previous}
                </span>
                <span className="mt-2 block font-serif text-lg leading-snug text-ink">
                  {previous.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link
                href={blogPostPath(locale, next.slug)}
                className="rounded-xl border border-ink/10 bg-white/70 p-5 text-left transition-colors hover:border-gold/50 sm:text-right"
              >
                <span className="text-xs uppercase tracking-[0.2em] text-gold">
                  {t.next} →
                </span>
                <span className="mt-2 block font-serif text-lg leading-snug text-ink">
                  {next.title}
                </span>
              </Link>
            )}
          </nav>
        )}

      </div>
    </article>
  );
}
