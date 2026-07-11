import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/structured-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/mes-massages-toulouse", priority: 0.9 },
    { path: "/massage-californien-toulouse", priority: 0.9 },
    { path: "/massage-abhyanga-toulouse", priority: 0.9 },
    { path: "/massage-sportif-toulouse", priority: 0.9 },
    { path: "/massage-duo-toulouse", priority: 0.9 },
    { path: "/tarifs-massage-toulouse", priority: 0.9 },
    { path: "/carte-cadeau-massage-toulouse", priority: 0.8 },
    { path: "/massage-entreprise-toulouse", priority: 0.8 },
    { path: "/contact", priority: 0.8 },
    { path: "/mon-histoire", priority: 0.6 },
    { path: "/mentions-legales", priority: 0.2 },
    { path: "/politique-cookies", priority: 0.2 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
