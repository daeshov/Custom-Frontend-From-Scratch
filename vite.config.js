import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  root: './frontend', // Set the project root to the frontend directory
  
  server: {
    publicDir: './frontend/public' // Adjust the public directory path
  },
  
  resolve: {
    alias: {
      '@': './frontend/src'
    }
  }
});