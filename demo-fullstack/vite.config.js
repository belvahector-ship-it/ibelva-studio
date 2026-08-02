import { defineConfig } from 'vite';
import { resolve } from 'path';

// Multi-page app: storefront publik (index.html) + admin panel (admin.html)
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        admin: resolve(__dirname, 'admin.html'),
      },
    },
  },
});
