import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/v1": {
        target: "http://89.165.10.238/hax/",
        changeOrigin: true,
        secure: false,
        // ws: true,
      },
    },
  },
});
