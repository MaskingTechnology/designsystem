
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      bundleTypes: true
    }),
  ],

  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'mtds'
    },

    rollupOptions: {
      external: ['react', 'react/jsx-runtime']
    }
  }
});
