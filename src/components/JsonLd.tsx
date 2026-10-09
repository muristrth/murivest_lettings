import { useState, useMemo, useEffect } from 'react';

interface JsonLdProps {
  id: string;
  data: Record<string, unknown>;
}

export function JsonLd({ id, data }: JsonLdProps) {
  const payload = useMemo(() => JSON.stringify(data), [data]);
  useEffect(() => {
    const scriptId = `jsonld-${id}`;
    const existing = document.getElementById(scriptId);
    if (existing) existing.remove();
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = scriptId;
    script.textContent = payload;
    document.head.appendChild(script);
    return () => {
      const node = document.getElementById(scriptId);
      if (node) node.remove();
    };
  }, [id, payload]);
  return null;
}

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Murivest Lettings',
  url: 'https://lettings.murivest.com',
  description:
    'Commercial property lettings and acquisitions across the United Kingdom, UAE, Kenya, South Africa and the United States.',
} as const;
