import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000,
    rolldownOptions: {
      output: {
        manualChunks: (id) => {
          const marker = 'node_modules/';
          const i = id.lastIndexOf(marker);
          if (i === -1) return;

          const pkgPath = id.slice(i + marker.length);
          const pkgName = pkgPath.startsWith('@')
            ? pkgPath.split('/').slice(0, 2).join('/')
            : pkgPath.split('/')[0];

          if (pkgName === 'react' || pkgName === 'react-dom' || pkgName === 'scheduler') {
            return 'react-vendor';
          }
          if (pkgName === 'react-router' || pkgName === 'react-router-dom') {
            return 'router';
          }
          if (pkgName === 'framer-motion') {
            return 'framer';
          }
          if (pkgName === 'react-icons') {
            return 'icons';
          }
          if (pkgName === 'three' || pkgName === 'react-globe.gl') {
            return 'globe';
          }
        },
      },
      checks: {
        pluginTimings: false,
      },
    },
  },
})
