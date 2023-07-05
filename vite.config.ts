import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { optimizeLodashImports } from '@optimize-lodash/rollup-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://quylk2906.github.io/english-study',
  plugins: [react(), optimizeLodashImports()],
});
