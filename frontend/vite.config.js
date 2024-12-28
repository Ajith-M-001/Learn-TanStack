import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Exposes Vite server to all devices on the network
    port: 5173, // Ensure the port is the same as in the URL
  },
});
