import type { Metadata } from "next";
import BlogIndex from "@/components/blog-index";
import { blogIndexMetadata } from "@/lib/blog-seo";

export const metadata: Metadata = blogIndexMetadata("en");

export default function JournalPage() {
  return <BlogIndex locale="en" />;
}
