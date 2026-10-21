import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// github.io/Ambra → set VITE_BASE=/Ambra/
// custom domain (ambra.example) → leave unset so this is "/"
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE ?? '/',
});
