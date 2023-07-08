import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { optimizeLodashImports } from '@optimize-lodash/rollup-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://quylk2906.github.io/english-study',
  plugins: [react(), optimizeLodashImports()],

  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.')[1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
});
