import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/types";
import { formatDate } from "@/lib/utils";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group h-full flex flex-col rounded-2xl border border-line bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
    >
      <div className="p-3 pb-0">
        <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          />
        </div>
      </div>

      <div className="flex flex-col flex-1 px-5 pb-6 pt-4">
        <span className="relative z-10 -mt-8 mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-[11px] font-semibold text-goldDeep shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
          {post.category}
        </span>

        <h2 className="font-display text-lg md:text-xl text-ink font-semibold leading-snug line-clamp-2">
          {post.title}
        </h2>
        <p className="font-sans text-sm text-slate mt-2 leading-relaxed line-clamp-2 flex-1">
          {post.excerpt}
        </p>
        <p className="font-sans text-xs text-slate/70 mt-4">
          By {post.author} · {formatDate(post.date)} · {post.readTime}
        </p>
      </div>
    </Link>
  );
}
