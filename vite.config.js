import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        pricing: "pricing/index.html",
        faq: "faq/index.html",
        contact: "contact/index.html",
        startProject: "start-a-project/index.html",
      },
    },
  },
});
