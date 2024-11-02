import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const WEB_URL = `${env.VITE_WEB_URL ?? 'http://localhost:3000'}`;
  const WEB_PORT = `${env.VITE_WEB_PORT ?? '3000'}`;

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': '/src', // Creating a path alias "@" to represent the "/src" directory
      },
    },
    server: {
      proxy: {
        '/api': WEB_URL,
      },
      port: WEB_PORT,
    },
  }
});
