import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { PAGES, htmlFileFor } from "./src/routes.js";

const input = {};
for (const page of Object.keys(PAGES)) {
  for (const lang of Object.keys(PAGES[page])) {
    input[`${page}-${lang}`] = htmlFileFor(page, lang);
  }
}

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: { input },
  },
});
