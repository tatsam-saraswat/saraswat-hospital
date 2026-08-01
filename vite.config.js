import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' keeps asset paths relative so the built site works
// whether it's hosted at a domain root or inside a sub-folder.
// outDir: 'docs' lets GitHub Pages publish straight from the main
// branch's /docs folder — no CI/CD workflow needed.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'docs',
  },
})
