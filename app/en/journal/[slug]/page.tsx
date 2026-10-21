import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogPostView from "@/components/blog-post-view";
import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { blogPostMetadata } from "@/lib/blog-seo";

export function generateStaticParams() {
  return getBlogPosts("en").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/en/journal/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getBlogPost("en", slug);
  return post ? blogPostMetadata("en", post) : { title: "Journal | ELARIS" };
}

export default async function JournalPostPage(
  props: PageProps<"/en/journal/[slug]">
) {
  const { slug } = await props.params;
  const post = getBlogPost("en", slug);
  if (!post) notFound();
  return <BlogPostView locale="en" post={post} />;
}
