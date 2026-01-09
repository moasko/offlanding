import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['2de0b62d06ad.ngrok-free.app', 'localhost'] // Add specific hostnames
  },
})
