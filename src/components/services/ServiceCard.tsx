import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/types";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group h-full flex flex-col rounded-2xl border border-line bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
    >
      <div className="p-3 pb-0">
        <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden">
          <Image
            src={service.image2}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          />
        </div>
      </div>

      <div className="flex flex-col flex-1 px-5 pb-6 pt-4">
        <span className="relative z-10 -mt-8 mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-gold to-goldDeep text-white shadow-sm">
          <Icon className="size-4" aria-hidden="true" />
        </span>

        <h2 className="font-display text-lg md:text-xl text-ink font-semibold leading-snug line-clamp-2">
          {service.title}
        </h2>
        <p className="font-sans text-sm text-slate mt-2 leading-relaxed line-clamp-2 flex-1">
          {service.summary}
        </p>
        <p className="font-sans text-xs text-goldDeep font-medium mt-4 group-hover:translate-x-1 transition-transform">
          View service →
        </p>
      </div>
    </Link>
  );
}
