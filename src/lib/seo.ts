export const SITE_CONFIG = {
  name: 'Murivest Lettings',
  legalName: 'Murivest Group Ltd',
  url: 'https://lettings.murivest.com',
  parentUrl: 'https://murivest.com',
  description:
    'Murivest Lettings provides professional property management, leasing and landlord advisory services for commercial and residential property owners in Nairobi and Kenya.',
  tagline: 'Property Management. Leasing. Advisory. Performance.',
  phone: '0115 277 610',
  email: 'capital@murivest.com',
  address: {
    locality: 'Nairobi',
    country: 'Kenya',
    region: 'Nairobi County',
  },
  areaServed: ['Nairobi', 'Kenya', 'East Africa'],
  sameAs: [] as string[],
};

type GraphNode = Record<string, unknown>;

export function generateOrganizationSchema(): GraphNode {
  return {
    '@type': 'Organization',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.legalName,
    alternateName: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/favicon.svg`,
    description: SITE_CONFIG.description,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE_CONFIG.address.locality,
      addressCountry: SITE_CONFIG.address.country,
      addressRegion: SITE_CONFIG.address.region,
    },
    areaServed: SITE_CONFIG.areaServed.map((a) => ({ '@type': 'Place', name: a })),
    parentOrganization: {
      '@type': 'Organization',
      name: SITE_CONFIG.legalName,
      url: SITE_CONFIG.parentUrl,
    },
    department: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
  };
}

export function generateWebsiteSchema(): GraphNode {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    publisher: { '@id': `${SITE_CONFIG.url}/#organization` },
    inLanguage: 'en',
  };
}

export function generateWebPageSchema(opts: {
  path: string;
  name: string;
  description: string;
  type?: string;
}): GraphNode {
  const url = `${SITE_CONFIG.url}${opts.path}`;
  return {
    '@type': opts.type || 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: opts.name,
    description: opts.description,
    isPartOf: { '@id': `${SITE_CONFIG.url}/#website` },
    about: { '@id': `${SITE_CONFIG.url}/#organization` },
    inLanguage: 'en',
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; path: string }[]
): GraphNode {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.path}`,
    })),
  };
}

export function generateServiceSchema(opts: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}): GraphNode {
  return {
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: `${SITE_CONFIG.url}${opts.path}`,
    serviceType: opts.serviceType,
    provider: { '@id': `${SITE_CONFIG.url}/#organization` },
    areaServed: SITE_CONFIG.areaServed.map((a) => ({ '@type': 'Place', name: a })),
  };
}

export function generatePropertySchema(opts: {
  name: string;
  path: string;
  description: string;
  location: string;
  propertyType: string;
  rent?: string;
  price?: string;
  availability: string;
}): GraphNode {
  const node: GraphNode = {
    '@type': 'Place',
    name: opts.name,
    url: `${SITE_CONFIG.url}${opts.path}`,
    description: opts.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: opts.location,
      addressCountry: 'Kenya',
    },
    hasMap: `${SITE_CONFIG.url}${opts.path}#map`,
  };
  return node;
}

export function buildGraph(nodes: GraphNode[]): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': nodes,
  });
}

export function setDocumentMetadata(opts: {
  title: string;
  description: string;
  path: string;
  ogType?: string;
  ogImage?: string;
  noindex?: boolean;
}): void {
  const fullTitle = opts.title.includes('Murivest')
    ? opts.title
    : `${opts.title} | Murivest Lettings`;
  document.title = fullTitle;

  const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
    let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  setMeta('description', opts.description);
  setMeta('og:title', fullTitle, 'property');
  setMeta('og:description', opts.description, 'property');
  setMeta('og:url', `${SITE_CONFIG.url}${opts.path}`, 'property');
  setMeta('og:type', opts.ogType || 'website', 'property');
  setMeta('og:site_name', SITE_CONFIG.name, 'property');
  setMeta('twitter:card', 'summary_large_image');
  setMeta('twitter:title', fullTitle);
  setMeta('twitter:description', opts.description);

  if (opts.ogImage) {
    setMeta('og:image', opts.ogImage, 'property');
    setMeta('twitter:image', opts.ogImage);
  }

  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = `${SITE_CONFIG.url}${opts.path}`;

  let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
  if (!robots) {
    robots = document.createElement('meta');
    robots.name = 'robots';
    document.head.appendChild(robots);
  }
  robots.content = opts.noindex ? 'noindex, nofollow' : 'index, follow';

  const existingScript = document.getElementById('jsonld-graph');
  if (existingScript) existingScript.remove();
}

export function injectJsonLd(json: string): void {
  const existing = document.getElementById('jsonld-graph');
  if (existing) existing.remove();
  const script = document.createElement('script');
  script.id = 'jsonld-graph';
  script.type = 'application/ld+json';
  script.textContent = json;
  document.head.appendChild(script);
}
