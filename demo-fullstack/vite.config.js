import { defineConfig } from 'vite';
import { resolve } from 'path';

// Multi-page app: storefront publik (index.html) + admin panel (admin.html)
// base: './' supaya asset path relatif — aman di-host di subpath manapun (mis. GitHub Pages
// project site di /<repo>/demo-fullstack/), bukan cuma di root domain.
export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        admin: resolve(__dirname, 'admin.html'),
      },
    },
  },
});
