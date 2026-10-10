// The detail page lives in src/pages/PropertyPages.tsx (routed from App.tsx as /properties/:slug).
// This file re-exports it so the folder-based page tree stays consistent without duplicating code.
export { PropertyDetailPage, PropertyDetailPage as default } from '@/pages/PropertyPages';
