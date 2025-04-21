import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',     // allows access from other devices (iPhone, etc.)
    port: 5173,          // same port you're using
    strictPort: true     // fail fast if port is taken
  },
  build: {
    outDir: 'dist'
  }
});
