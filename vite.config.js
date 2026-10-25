import { resolve } from 'node:path';
export default {
  base: './',
  publicDir: false,
  build: { rollupOptions: { input: { main: resolve('index.html'), foldDemo: resolve('fold-demo.html') } } }
};
