import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, User, Calendar, Clock } from "lucide-react";
import LedgerRule from "@/components/ui/LedgerRule";
import ReadingProgressBar from "@/components/blog/ReadingProgressBar";
import BackToTop from "@/components/blog/BackToTop";
import ShareLinks from "@/components/blog/ShareLinks";
import { posts, getPostBySlug } from "@/content/blog";
import { formatDate } from "@/lib/utils";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const currentIndex = posts.findIndex((p) => p.slug === post.slug);
  const recent = posts.filter((p) => p.slug !== post.slug);
  const prevPost = posts[(currentIndex - 1 + posts.length) % posts.length];
  const nextPost = posts[(currentIndex + 1) % posts.length];

  return (
    <div className="bg-cream">
      <ReadingProgressBar />
      <BackToTop />

      {/* Full-bleed hero — image as background, text overlaid on top */}
      <div className="relative h-[60vh] min-h-[460px] max-h-[620px] w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/60" />

        <Link
          href="/blog"
          className="absolute left-6 top-6 md:left-10 md:top-8 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink hover:border-gold hover:text-goldDeep transition-colors"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          All insights
        </Link>

        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-gold px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-ink">
            {post.category}
          </span>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mt-5 max-w-3xl leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-white/80 mt-6 border-y border-gold/50 py-3">
            <span className="inline-flex items-center gap-1.5">
              <User className="size-3.5" aria-hidden="true" />
              By {post.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="size-3.5" aria-hidden="true" />
              {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5" aria-hidden="true" />
              {post.readTime}
            </span>
          </div>
        </div>
      </div>

      <article className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid lg:grid-cols-[1fr_320px] gap-14">
          {/* Main column */}
          <div className="min-w-0">
            <LedgerRule />
            <div className="mt-10 space-y-6">
              {post.content.map((para, i) => (
                <p key={i} className="font-sans text-slate leading-relaxed text-base md:text-lg">
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-line">
              <p className="font-sans text-xs uppercase tracking-widest text-gold mb-4">
                Share this
              </p>
              <ShareLinks title={post.title} path={`/blog/${post.slug}`} />
            </div>

            {/* Previous / Next */}
            <div className="mt-12 pt-8 border-t border-line flex items-center justify-between gap-6">
              <Link
                href={`/blog/${prevPost.slug}`}
                className="group flex items-center gap-3 min-w-0"
              >
                <ArrowLeft className="size-4 shrink-0 text-gold transition-transform group-hover:-translate-x-1" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block font-sans text-xs text-slate">Previous</span>
                  <span className="block font-display text-sm text-ink truncate group-hover:text-goldDeep transition-colors">
                    {prevPost.title}
                  </span>
                </span>
              </Link>

              <Link
                href={`/blog/${nextPost.slug}`}
                className="group flex items-center gap-3 min-w-0 text-right"
              >
                <span className="min-w-0">
                  <span className="block font-sans text-xs text-slate">Next</span>
                  <span className="block font-display text-sm text-ink truncate group-hover:text-goldDeep transition-colors">
                    {nextPost.title}
                  </span>
                </span>
                <ArrowRight className="size-4 shrink-0 text-gold transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Recent Post sidebar */}
          <aside>
            <div className="lg:sticky lg:top-32 rounded-2xl border border-line bg-creamSoft p-6">
              <p className="font-display text-lg text-ink mb-5">Recent Post</p>
              <div className="space-y-5">
                {recent.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group flex items-start gap-3"
                  >
                    <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-display text-sm text-ink leading-snug line-clamp-2 group-hover:text-goldDeep transition-colors">
                        {p.title}
                      </p>
                      <p className="font-sans text-xs text-gold font-medium mt-1.5">
                        Read More →
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </article>
    </div>
  );
}
