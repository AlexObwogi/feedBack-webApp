import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

// This configures how our app gets built
export default defineConfig({
  plugins: [react()], // Uses React magic
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)) // Shortcuts for imports
    }
  },
  build: {
    outDir: 'dist', // Where to put the built app
    emptyOutDir: true // Cleans the folder first
  }
});
