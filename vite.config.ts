import fs from "fs";
import path from "path";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

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
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["img/**/*"],
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,jpeg,gif,webp}"],
        runtimeCaching: [
          {
            urlPattern: /^https?:\/\/.*\/img\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30日間
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      manifest: false,
      devOptions: {
        enabled: false,
      },
    }),
    generateGitHubPagesFilesPlugin(),
    visualizer({
      filename: "./analyze/stats.html",
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
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
