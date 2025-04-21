import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    host: '0.0.0.0', // This allows access from local devices like your iPhone
    port: 5173,
  },
})
