import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // your repo is tareqnidal.github.io
  build: {
    outDir: 'docs', // 👈 this is key
  },
  plugins: [react()],
});


