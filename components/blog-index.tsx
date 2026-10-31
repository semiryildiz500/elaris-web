import Image from "next/image";
import Link from "next/link";
import { blogCopy, blogPostPath, getBlogPosts } from "@/lib/blog";
import { blogIndexJsonLd } from "@/lib/blog-seo";
import type { Locale } from "@/lib/i18n";

export default function BlogIndex({ locale = "tr" }: { locale?: Locale }) {
  const t = blogCopy[locale];
  const posts = getBlogPosts(locale);

  if (locale === "tr") {
    const [featured, ...recentPosts] = posts;

    return (
      <div className="overflow-hidden bg-cream">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(blogIndexJsonLd(locale)).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        <div className="mx-auto max-w-6xl px-6 pb-20 pt-14 sm:px-10 sm:pb-28 sm:pt-20">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.34em] text-gold">
              ELARIS Editorial
            </p>
            <h1 className="mt-5 font-serif text-4xl tracking-[0.2em] text-ink sm:text-6xl">
              BLOG
            </h1>
            <div className="mx-auto mt-6 h-px w-16 bg-gold/60" />
            <p className="mt-6 font-serif text-xl leading-relaxed text-ink/85 sm:text-2xl">
              Farkındalık, enerji ve insanın kendine dönüş yolculuğu üzerine
              düşünceler.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-ink/60 sm:text-base">
              Kadim öğretilerden günümüz farkındalık çalışmalarına; kendimize,
              ilişkilerimize ve içsel dünyamıza başka bir yerden bakmak için.
            </p>
          </header>

          {featured ? (
            <article className="group mt-12 overflow-hidden rounded-[1.25rem] border border-ink/10 bg-white/65 shadow-[0_20px_55px_-42px_rgba(43,36,32,0.55)] transition duration-500 hover:-translate-y-0.5 hover:border-gold/35 hover:shadow-[0_26px_65px_-42px_rgba(43,36,32,0.65)] sm:mt-16 md:grid md:min-h-[31rem] md:grid-cols-[45fr_55fr]">
              <div
                aria-hidden="true"
                className="relative order-first min-h-64 overflow-hidden border-b border-ink/5 bg-[#f4eee4] md:order-last md:min-h-full md:border-b-0 md:border-l"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(255,255,255,0.9),transparent_32%),radial-gradient(circle_at_30%_80%,rgba(205,171,116,0.13),transparent_38%),linear-gradient(145deg,rgba(251,248,243,0.75),rgba(232,220,200,0.38))]" />
                <div className="absolute -right-20 top-10 h-72 w-72 rounded-full border border-gold/15 shadow-[0_25px_70px_rgba(150,114,60,0.08)] sm:h-96 sm:w-96" />
                <div className="absolute -bottom-32 left-10 h-72 w-72 rounded-full border border-white/75 bg-white/15 shadow-[0_-24px_70px_rgba(255,255,255,0.5)] sm:h-96 sm:w-96" />
                <div className="absolute left-[18%] top-[18%] h-px w-[42%] origin-left rotate-[28deg] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
                <div className="absolute bottom-[20%] right-[14%] h-px w-[38%] origin-right -rotate-[24deg] bg-gradient-to-r from-transparent via-ink/10 to-transparent" />
                <span className="absolute bottom-6 right-7 text-[0.6rem] uppercase tracking-[0.28em] text-ink/30">
                  ELARIS
                </span>
              </div>

              <div className="flex flex-col justify-center px-7 py-10 sm:px-12 sm:py-14 md:px-12 lg:px-16">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-gold">
                  {featured.categoryLabel}
                </p>
                <h2 className="mt-5 font-serif text-3xl leading-[1.12] text-ink sm:text-4xl lg:text-[2.8rem]">
                  <Link
                    href={blogPostPath(locale, featured.slug)}
                    className="transition-colors duration-300 hover:text-bronze"
                  >
                    {featured.title}
                  </Link>
                </h2>
                <p className="mt-5 font-serif text-lg leading-relaxed text-ink/70 sm:text-xl">
                  {featured.excerpt}
                </p>
                <div className="my-6 h-px w-12 bg-gold/45" />
                <p className="text-sm leading-7 text-ink/65 sm:text-[0.95rem]">
                  Çakralar gerçekten açılıp kapanır mı? Her hissettiğimiz şey
                  enerjetik bir mesaj mıdır? Enerji çalışmalarına daha sade,
                  tarihsel ve farkındalık odaklı bir yerden bakalım.
                </p>
                <div className="mt-8">
                  <Link
                    href={blogPostPath(locale, featured.slug)}
                    className="inline-flex items-center border-b border-gold/50 pb-1 text-sm font-medium text-ink transition-all duration-300 hover:border-gold hover:text-bronze"
                  >
                    Yazıyı Oku →
                  </Link>
                </div>
              </div>
            </article>
          ) : (
            <div className="mx-auto mt-14 max-w-xl border-y border-ink/10 py-14 text-center sm:mt-16">
              <h2 className="font-serif text-2xl text-ink">{t.emptyTitle}</h2>
              <p className="mt-4 text-sm leading-7 text-ink/60">{t.emptyText}</p>
            </div>
          )}

          {featured && (
            <section className="mt-20 border-t border-ink/10 pt-10 sm:mt-24 sm:pt-12">
              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-gold">
                    ELARIS Blog
                  </p>
                  <h2 className="mt-3 font-serif text-2xl text-ink sm:text-3xl">
                    Son Yazılar
                  </h2>
                </div>
                <div className="hidden h-px flex-1 bg-ink/10 sm:block" />
              </div>

              {recentPosts.length > 0 ? (
                <div className="mt-9 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                  {recentPosts.map((post) => (
                    <article
                      key={post.slug}
                      className="border-t border-ink/10 pt-6"
                    >
                      <p className="text-[0.65rem] uppercase tracking-[0.24em] text-gold">
                        {post.categoryLabel}
                      </p>
                      <h3 className="mt-3 font-serif text-2xl leading-snug text-ink">
                        <Link href={blogPostPath(locale, post.slug)}>
                          {post.title}
                        </Link>
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-ink/60">
                        {post.excerpt}
                      </p>
                    </article>
                  ))}
                </div>
              ) : (
                <p className="mt-8 font-serif text-lg italic text-ink/50">
                  Yeni yazılar yakında burada.
                </p>
              )}
            </section>
          )}
        </div>
      </div>
    );
  }

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
          <div
            className={`mt-14 grid gap-8 sm:mt-20 ${
              posts.length === 1
                ? "mx-auto max-w-2xl"
                : "md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white/70 shadow-[0_10px_30px_-22px_rgba(43,36,32,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_20px_40px_-20px_rgba(176,141,87,0.55)]"
              >
                {post.coverImage && (
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
                )}
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
                  <div className="mt-auto border-t border-ink/10 pt-5">
                    <Link
                      href={blogPostPath(locale, post.slug)}
                      className="text-sm font-medium text-ink/80 underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold"
                    >
                      {t.readPost} →
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
