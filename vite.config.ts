import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter  } from '@tanstack/router-plugin/vite'
import path from 'path'
import fs from 'fs'

// GitHub Pages 404.html生成プラグイン
const generateSpa404Plugin = () => {
  return {
    name: 'generate-spa-404',
    writeBundle() {
      const distPath = path.resolve(__dirname, 'dist')
      const indexPath = path.join(distPath, 'index.html')
      const notFoundPath = path.join(distPath, '404.html')
      
      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, notFoundPath)
        console.log('✓ 404.html generated for GitHub Pages SPA routing')
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: '/cc-war-record',
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    generateSpa404Plugin(),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
})
