import { createRequire } from 'node:module';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const require = createRequire(import.meta.url);
const { name } = require('./package.json');

export default defineConfig(({ command }) => ({
  build: {
    emptyOutDir: true,
    minify: 'terser',
    outDir: 'dist',
    rollupOptions: {
      input: { index: './index.html' },
      output: {
        entryFileNames: `js/${name}.min.js`,
        chunkFileNames: `js/${name}.[name].js`,
        assetFileNames: assetInfo => {
          if (assetInfo.name?.endsWith('.css')) return `css/${name}.min.css`;
          return `assets/[name][extname]`;
        }
      }
    },
    sourcemap: true,
    terserOptions: {
      compress: { drop_console: command === 'build' }
    }
  },
  define: { __PROJECT_NAME__: JSON.stringify(name) },
  plugins: [react()],
  server: { hot: true, open: true, port: 8080, strictPort: false }
}));
