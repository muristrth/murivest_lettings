// Must point at the same project/dataset as murivest.com/studio so both Studios share the listings.
export const projectId: string = import.meta.env.VITE_SANITY_PROJECT_ID || '';
export const dataset: string = import.meta.env.VITE_SANITY_DATASET || 'production';
export const apiVersion: string = import.meta.env.VITE_SANITY_API_VERSION || '2024-01-01';
