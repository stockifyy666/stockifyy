import type { Metadata } from "next";
import BlogFilterGrid from "@/components/blog/BlogFilterGrid";
import { posts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspective on M&A, capital strategy, and restructuring from active advisory mandates.",
};

export default function BlogIndexPage() {
  return (
    <div className="bg-cream">
      <section className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-goldDeep">
            Our Blogs
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-ink font-semibold mt-5">
            Blogs, News &amp; Articles
          </h1>
          <p className="font-sans text-slate mt-4 leading-relaxed">
            Notes from current engagements — written for boards and
            management teams, not for other advisors.
          </p>
        </div>

        <BlogFilterGrid posts={posts} />
      </section>
    </div>
  );
}
