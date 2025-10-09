import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import path from "path";
import fs from "fs";

// GitHub Pages用ファイル生成プラグイン
const generateGitHubPagesFilesPlugin = () => {
  return {
    name: "generate-github-pages-files",
    writeBundle() {
      const distPath = path.resolve(__dirname, "dist");
      const notFoundPath = path.join(distPath, "404.html");
      const nojekyllPath = path.join(distPath, ".nojekyll");

      // 404.html生成
      const publicNotFoundPath = path.join(__dirname, "public", "404.html");
      if (fs.existsSync(publicNotFoundPath)) {
        fs.copyFileSync(publicNotFoundPath, notFoundPath);
        console.log("✓ 404.html copied from public directory for GitHub Pages SPA routing");
      } else {
        console.warn("⚠ public/404.html not found, skipping 404.html generation");
      }

      // .nojekyll生成
      fs.writeFileSync(nojekyllPath, "");
      console.log("✓ .nojekyll generated for GitHub Pages");
    },
  };
};

// https://vite.dev/config/
export default defineConfig({
  base: "/cc-war-record/",
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
    generateGitHubPagesFilesPlugin(),
  ],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
