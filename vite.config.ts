import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Vite 7 uses Sass's modern compiler API by default (via sass-embedded),
  // so no SCSS preprocessor options are needed — this is what eliminates the
  // legacy-js-api deprecation that Vite 4 produced.
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
