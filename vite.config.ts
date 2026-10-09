import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Allow-list of client-exposed env vars. VITE_SANITY_API_TOKEN is deliberately excluded:
  // the Sanity Studio dependency inlines the whole import.meta.env object into the bundle.
  envPrefix: ['VITE_SUPABASE_', 'VITE_SANITY_PROJECT_ID', 'VITE_SANITY_DATASET', 'VITE_SANITY_API_VERSION'],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
