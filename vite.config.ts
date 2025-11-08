import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const APPS_SCRIPT_ID = 'AKfycbzWhMlTbfhsiON-MvkwmjaZk7LX-tCx5M_pRTVuvs7s52pq8o4hrSlyPHd0McpgxqM';

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      // Forward any request starting with /api/contact -> to the Apps Script exec URL
      // Browser will only talk to localhost:8080 so CORS preflight is avoided in dev.
      '/api/contact': {
        target: 'https://script.google.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) =>
          path.replace(/^\/api\/contact/, `/macros/s/${APPS_SCRIPT_ID}/exec`)
      },
      // Optional: general /api proxy that maps to the same script
      '/api': {
        target: 'https://script.google.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) =>
          path.replace(/^\/api/, `/macros/s/${APPS_SCRIPT_ID}/exec`)
      }
    }
  },
  plugins: [react()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
}));
