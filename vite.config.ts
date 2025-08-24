import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  // For a user/organization page (repository named username.github.io) the site is served at
  // https://<username>.github.io so base should be root '/'. Using an incorrect base causes
  // built asset URLs to point to /manjulsolanke.github.io/... which breaks when served at the root.
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
