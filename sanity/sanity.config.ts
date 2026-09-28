import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas';

const env = (globalThis as typeof globalThis & {
  process?: { env?: Record<string, string | undefined> };
}).process?.env ?? {};

export default defineConfig({
  name: 'murivest-lettings',
  title: 'Murivest Lettings',
  projectId: env.SANITY_STUDIO_PROJECT_ID || 'your_project_id',
  dataset: env.SANITY_STUDIO_DATASET || 'production',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
