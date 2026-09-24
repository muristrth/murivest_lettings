import { useEffect } from 'react';
import {
  SITE_CONFIG,
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateWebPageSchema,
  generateBreadcrumbSchema,
  generateServiceSchema,
  buildGraph,
  setDocumentMetadata,
  injectJsonLd,
} from '@/lib/seo';

interface SeoProps {
  title: string;
  description: string;
  path: string;
  pageType?: string;
  ogType?: string;
  noindex?: boolean;
  breadcrumbs?: { name: string; path: string }[];
  serviceSchema?: {
    name: string;
    description: string;
    path: string;
    serviceType: string;
  };
}

export function Seo({
  title,
  description,
  path,
  pageType,
  ogType,
  noindex,
  breadcrumbs,
  serviceSchema,
}: SeoProps) {
  useEffect(() => {
    setDocumentMetadata({ title, description, path, ogType, noindex });

    const nodes = [
      generateOrganizationSchema(),
      generateWebsiteSchema(),
      generateWebPageSchema({ path, name: title, description, type: pageType }),
    ];

    if (breadcrumbs) {
      nodes.push(generateBreadcrumbSchema(breadcrumbs));
    }

    if (serviceSchema) {
      nodes.push(
        generateServiceSchema({
          name: serviceSchema.name,
          description: serviceSchema.description,
          path: serviceSchema.path,
          serviceType: serviceSchema.serviceType,
        })
      );
    }

    injectJsonLd(buildGraph(nodes));
  }, [title, description, path, pageType, ogType, noindex, breadcrumbs, serviceSchema]);

  return null;
}

export { SITE_CONFIG };
