import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  server: {
    host: "127.0.0.1", // Avoid localhost DNS lookup (Astrill)
    port: 5173,

    hmr: {
      host: "127.0.0.1",
      protocol: "ws",
    },

    proxy: {
      "/api": {
        target: "http://127.0.0.1:3000", // Express backend
        changeOrigin: true,
      },
    },
  },
});