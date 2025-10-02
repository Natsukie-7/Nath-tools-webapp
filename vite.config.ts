import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import devtools from "solid-devtools/vite";
import path from "path";

export default defineConfig({
  plugins: [devtools(), solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
  resolve: {
    alias: {
      "@routes": path.resolve(__dirname, "src/routes"),
      "@templates": path.resolve(__dirname, "src/templates"),
      "@tools": path.resolve(__dirname, "src/tools"),
    },
  },
});
