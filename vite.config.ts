import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import react from 'vite-preset-react';
import envCompatible from 'vite-plugin-env-compatible';

export default defineConfig({
  build: {
    outDir: 'build',
  },
  plugins: [
    svgr(),
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
