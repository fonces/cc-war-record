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
      const indexPath = path.join(distPath, "index.html");
      const notFoundPath = path.join(distPath, "404.html");
      const nojekyllPath = path.join(distPath, ".nojekyll");

      // 404.html生成
      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, notFoundPath);
        console.log("✓ 404.html generated for GitHub Pages SPA routing");
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
