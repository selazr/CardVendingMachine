import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Use Vite's default port (5173) to match the backend CORS configuration
    port: 5173,
  },
});
