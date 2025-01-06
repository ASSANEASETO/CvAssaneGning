import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://ASSANEASETO.github.io",
  base: "/CvAssaneGning",
  trailingSlash: "always",
  integrations: [tailwind()],
});
