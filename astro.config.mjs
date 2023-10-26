import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-moon-landing.netlify.app/",
  integrations: [tailwind(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), astroImageTools, react()],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});