// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['lucide-react'],
//   },
// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true, // allow external access (for ngrok, LAN, etc.)
    port: 4173, // make sure it matches the port you use
    allowedHosts: [
      '.ngrok-free.dev', // allow all ngrok subdomains
      'localhost',        // local development
    ],
  },
  preview: {
    allowedHosts: [
      '.ngrok-free.dev', // allow ngrok when running preview or build
      'localhost',
    ],
  },
});
