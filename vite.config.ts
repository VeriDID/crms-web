import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Creating a path alias "@" to represent the "/src" directory
    },
  },
  server: {
    // Add any server configuration here
  },
});
