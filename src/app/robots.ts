import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/verify/"],
    },
    sitemap: "https://www.stockifyy.com/sitemap.xml",
  };
}
