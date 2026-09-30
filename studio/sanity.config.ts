import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { apiVersion, dataset, projectId } from './env';
import { schemaTypes } from './schemaTypes';
import { structure } from './structure';

export default defineConfig({
  name: 'murivest-lettings',
  title: 'Murivest Lettings',
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [
    structureTool({ structure }),
  ],
  schema: {
    types: schemaTypes,
  },
  document: {
    productionUrl: async (prev, { document }) => {
      const slug = (document as { slug?: { current?: string } }).slug?.current;
      if (document._type === 'propertylet' && slug) {
        return `https://lettings.murivest.com/properties/${slug}`;
      }
      return prev;
    },
  },
});
