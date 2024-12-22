import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // base is necessary for deployment to gh pages.
  base: "/se_project_react/",
  plugins: [react()],
  server: {
    port: 3000,
  },
});
