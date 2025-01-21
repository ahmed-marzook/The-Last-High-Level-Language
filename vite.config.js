// vite.config.js
import react from "@vitejs/plugin-react-swc";

import { defineConfig } from "vite";

import { ghPages } from "vite-plugin-gh-pages";

import fs from "node:fs";
import path from "node:path";

export default defineConfig({
  plugins: [
    react(),
    ghPages({
      // Add hook to persist CNAME file during deployment
      onBeforePublish: ({ outDir }) => {
        const CNAME = path.join(outDir, "CNAME");
        fs.writeFileSync(CNAME, "lastlang.kaizenflow.dev"); // Replace with your domain
      },
    }),
  ],
  base: "/", // Base URL for custom domain
});