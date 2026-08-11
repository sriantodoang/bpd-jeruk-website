import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base: '/bpd-jeruk-website/' untuk GitHub Pages
// Ganti dengan '/' jika menggunakan custom domain
export default defineConfig({
  plugins: [react()],
  base: '/bpd-jeruk-website/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
