import { defineConfig } from 'vite'

export default defineConfig({
  base: '/multimodal-wiki-react/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
})
