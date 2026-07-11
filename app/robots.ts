import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/structured-data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      /* Commerce local : les crawlers IA sont explicitement bienvenus —
         être cité par ChatGPT, Claude ou Perplexity est un canal de visibilité. */
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-Web",
          "PerplexityBot",
          "Google-Extended",
        ],
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
