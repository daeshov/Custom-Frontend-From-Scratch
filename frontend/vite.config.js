import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  root: '.', // Set the project root to the current directory
  
  server: {
    publicDir: './public', // Adjust the public directory path
    proxy: {
      '/api': 'http://localhost:5000' // Proxy the /api endpoint to the backend server
    }
  },
  
  resolve: {
    alias: {
      '@': './src'
    }
  }
});
