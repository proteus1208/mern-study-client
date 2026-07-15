import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Or vue, svelte, etc.

export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1', // Forces Vite to completely avoid 'localhost' DNS lookups
    port: 5173,
    hmr: {
      host: '127.0.0.1', // Forces the internal WebSocket driver to stay local
      protocol: 'ws'     // Keeps the connection unencrypted so Astrill doesn't intercept it
    }
  }
})