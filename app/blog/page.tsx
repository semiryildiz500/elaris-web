import type { Metadata } from "next";
import BlogIndex from "@/components/blog-index";
import { blogIndexMetadata } from "@/lib/blog-seo";

export const metadata: Metadata = blogIndexMetadata("tr");

export default function BlogPage() {
  return <BlogIndex locale="tr" />;
}
