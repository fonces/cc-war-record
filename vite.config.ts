import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter  } from '@tanstack/router-plugin/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/cc-war-record/',
  build: {
    outDir: 'docs',
  },
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
})
