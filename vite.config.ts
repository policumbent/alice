/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from 'vite-preset-react';
import envCompatible from 'vite-plugin-env-compatible';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  build: {
    outDir: 'build',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests.ts',
  },
  plugins: [
    svgr(),
    VitePWA(),
    envCompatible({ prefix: 'REACT_APP' }),
    react({
      removeDevtoolsInProd: true,
      injectReact: true,
      reactPluginOptions: { babel: { babelrc: true } },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: { quietDeps: true },
    },
  },
});
