import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogPostView from "@/components/blog-post-view";
import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { blogPostMetadata } from "@/lib/blog-seo";

export function generateStaticParams() {
  return getBlogPosts("tr").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getBlogPost("tr", slug);
  return post ? blogPostMetadata("tr", post) : { title: "Blog | ELARIS" };
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getBlogPost("tr", slug);
  if (!post) notFound();
  return <BlogPostView locale="tr" post={post} />;
}
