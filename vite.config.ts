import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// ambra.ong is served from "/". Set VITE_BASE=/Ambra/ only for the github.io project URL.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE ?? '/',
});
