import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Index Revelation",
    short_name: "Index Rev",
    description: "A dark western fantasy adventure game",
    start_url: "/",
    display: "standalone",
    background_color: "#0f0518", // Dark purple from the theme
    theme_color: "#d4af37", // Gold accent from the theme
    icons: [
    ],
  }
}
