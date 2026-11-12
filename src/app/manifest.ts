import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nailangs Keyboards",
    short_name: "Nailangs",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f8f5ec",
    theme_color: "#14452a",
    icons: [{ src: "/images/nailangs-icon.png", sizes: "1024x1024", type: "image/png" }],
  };
}
