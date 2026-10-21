import Image from "next/image";
import Link from "next/link";
import { servicesEn } from "@/lib/data.en";
import { services } from "@/lib/data";
import {
  blogBasePath,
  blogCopy,
  blogPostPath,
  formatBlogDate,
  getAdjacentPosts,
  type BlogBlock,
  type LocalizedBlogPost,
} from "@/lib/blog";
import { articleJsonLd } from "@/lib/blog-seo";
import type { Locale } from "@/lib/i18n";
import MedicalDisclaimer from "@/components/medical-disclaimer";

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
        <blockquote className="my-10 border-l-2 border-gold/60 pl-6 font-serif text-xl italic leading-relaxed text-ink/85 sm:text-2xl">
          {block.text}
          {block.cite && (
            <footer className="mt-3 font-sans text-xs not-italic uppercase tracking-[0.2em] text-ink/50">
              {block.cite}
            </footer>
          )}
        </blockquote>
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
          <p className="mt-5 text-sm text-ink/50">
            <time dateTime={post.publishedAt}>
              {formatBlogDate(post.publishedAt, locale)}
            </time>{" "}
            · {post.readingMinutes} {t.minutes}
          </p>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
            {post.excerpt}
          </p>
        </header>

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

        <section className="mt-16 rounded-2xl bg-gradient-to-b from-powder/60 to-sand/60 px-6 py-12 text-center sm:px-12">
          <h2 className="font-serif text-2xl leading-snug text-ink sm:text-3xl">
            {t.ctaHeading}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink/70">
            {t.ctaText}
          </p>
          <a
            href={`${homeBase}/#randevu`}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-ink px-8 py-3 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-ink/85"
          >
            {t.ctaButton}
          </a>
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

        <div className="mt-14">
          <MedicalDisclaimer locale={locale} />
        </div>
      </div>
    </article>
  );
}
