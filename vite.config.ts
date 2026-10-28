import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

function siteBase() {
  const raw = process.env.VITE_BASE || "/";
  if (raw === "/") return "/";
  return raw.endsWith("/") ? raw : `${raw}/`;
}

export default defineConfig({
  base: siteBase(),
  plugins: [react(), tailwindcss()],
  server: {
    host: "127.0.0.1",
    port: 5176,
    strictPort: true,
  },
  preview: {
    host: "127.0.0.1",
    port: 4176,
  },
});
