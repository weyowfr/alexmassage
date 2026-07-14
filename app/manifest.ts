import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Alex Massage — massage bien-être à domicile à Toulouse",
    short_name: "Alex Massage",
    description:
      "Massage bien-être à domicile à Toulouse : relaxant, ayurvédique ou sportif, en solo ou duo.",
    start_url: "/",
    display: "browser",
    background_color: "#f4efe7",
    theme_color: "#17120e",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
