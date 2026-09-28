// Used by the Sanity CLI (dataset import/export, cors) — run commands from this studio/ folder.
import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: process.env.VITE_SANITY_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.VITE_SANITY_DATASET || process.env.SANITY_STUDIO_DATASET || 'production',
  },
});
