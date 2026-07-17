// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://sgargis810-os.github.io",
  base: "/personalwebsite/",
  vite: {
    plugins: [tailwindcss()],
  },
});
