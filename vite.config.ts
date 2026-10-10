import { defineConfig } from 'vite';

export default defineConfig({
  base: '/BYBK-char/',

  build: {
    outDir: 'dist',
    target: 'esnext',
  },

  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
      generateScopedName: '[name]__[local]__[hash:base64:5]',
    },
  },

  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
