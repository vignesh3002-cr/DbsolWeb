import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const supabaseEnv = loadEnv(mode, resolve(process.cwd(), 'Backend'), '')

  return {
    plugins: [react()],
    define: {
      'import.meta.env.VITE_SUPABASE_URL': JSON.stringify(supabaseEnv.NEXT_PUBLIC_SUPABASE_URL),
      'import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY': JSON.stringify(
        supabaseEnv.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
      ),
    },
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
  }
})
