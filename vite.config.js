import { defineConfig } from "vite";

// vite.config.js
// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  server: {
    watch: {
      ignored: ['**/.direnv/**']
    }
  },
  build: {
    lib: {
      entry: 'src/bitcoin-logo.ts',
      name: 'BitcoinLogo',
      fileName: 'index',
      formats: ['es'],
    },
  },
})
