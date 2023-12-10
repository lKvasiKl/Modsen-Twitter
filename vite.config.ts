import { defineConfig } from "vite";
import babel from "vite-plugin-babel";

import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), babel()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      assets: "/src/assets",
      components: "/src/components",
      constants: "/src/constants",
      firebase: "/src/firebase",
      pages: "/src/pages",
      store: "/src/store",
      types: "/src/types",
      utils: "/src/utils",
    },
  },
});
