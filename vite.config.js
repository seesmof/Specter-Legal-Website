import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/specter-ross-legal-company-landing/",
  server: {
    port: 3000,
  },
});
