import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['2de0b62d06ad.ngrok-free.app', 'localhost'] // Add specific hostnames
  },
  resolve: {
    alias: {
      // Remap lottie-web vers la version "light" sans eval
      'lottie-web': 'lottie-web/build/player/lottie_light.js'
    }
  },
  optimizeDeps: {
    // Éviter le pré-bundling de lottie-web pour forcer l'utilisation de l'alias
    exclude: ['lottie-web']
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor';
          if (id.match(/\\.(png|jpg|jpeg|webp)$/)) return 'assets';
        }
      }
    }
  }
})
