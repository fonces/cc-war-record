import fs from "fs";
import path from "path";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { qrcode } from "vite-plugin-qrcode";

// GitHub Pages用ファイル生成プラグイン
const generateGitHubPagesFilesPlugin = () => {
  return {
    name: "generate-github-pages-files",
    writeBundle() {
      const distPath = path.resolve(__dirname, "dist");
      const indexPath = path.join(distPath, "index.html");
      const notFoundPath = path.join(distPath, "404.html");
      const nojekyllPath = path.join(distPath, ".nojekyll");
      const buildInfoPath = path.join(distPath, "build-info.json");

      // 404.html生成
      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, notFoundPath);
        console.log("✓ 404.html generated for GitHub Pages SPA routing");
      }

      // .nojekyll生成
      fs.writeFileSync(nojekyllPath, "");
      console.log("✓ .nojekyll generated for GitHub Pages");

      // ビルド情報JSON生成
      const date = new Date();
      const buildInfo = {
        buildTime: date.toISOString(),
        timestamp: date.getTime(),
      };
      fs.writeFileSync(buildInfoPath, JSON.stringify(buildInfo, null, 2));
      console.log("✓ build-info.json generated with timestamp:", buildInfo.buildTime);
    },
  };
};

// https://vite.dev/config/
export default defineConfig({
  base: "/cc-war-record/",
  server: {
    host: true, // ローカルネットワーク内の別端末からアクセス可能に
    port: 5173,
  },
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
    qrcode(), // ローカルネットワークアドレスのQRコード表示
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
        manualChunks: (id) => {
          // recharts関連を別チャンクに
          if (id.includes("recharts")) {
            return "recharts";
          }
          // React関連のコアライブラリ
          if (id.includes("react") || id.includes("react-dom")) {
            return "react-vendor";
          }
          // styled-components
          if (id.includes("styled-components")) {
            return "styled";
          }
          // i18next関連
          if (id.includes("i18next")) {
            return "i18n";
          }
          // jszip（バックアップ機能）
          if (id.includes("jszip")) {
            return "jszip";
          }
          // その他のnode_modules
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});
