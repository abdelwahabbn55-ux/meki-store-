import { defineConfig } from 'vite'

export default defineConfig({
  base: './', // Standard for GitHub Pages and relative paths
  build: {
    outDir: 'dist',
  }
})
