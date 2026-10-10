/**
 * Site architecture registry for lettings.murivest.com.
 *
 * Every page under the information architecture (lease, markets, sectors,
 * occupiers, advisory, ...) is described here as data and rendered by
 * <ArchitecturePage />. Copy is deliberately general: it describes the
 * services Murivest Lettings offers (as set out on /services, /landlords and
 * /tenants) and contains no statistics, track record, market facts,
 * neighbourhood facts, awards, licences or partnerships.
 *
 * Pages flagged `factNeeded` need input from Murivest before they can say more.
 */

export interface Section {
  heading: string;
  paragraphs?: string[];
  items?: string[];
}

export interface ListingSpec {
  heading: string;
  /** Property `subtype` values to include (commercial). Empty = all commercial. */
  subtypes?: string[];
  /** Case-insensitive tokens matched against the free-text location. */
  tokens?: string[];
  listingType?: 'lease' | 'sale';
}

export interface PageDef {
  path: string;
  /** Short breadcrumb / link label. */
  crumb: string;
  /** Full <title> (kept ~50-60 chars including the brand suffix). */
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  sections: Section[];
  listing?: ListingSpec;
  related: string[];
  noindex?: boolean;
  /** What Mark needs to supply before this page can say more. */
  factNeeded?: string;
  ctaTitle?: string;
  ctaText?: string;
}


const ENGAGEMENT: Section = {
  heading: 'How an engagement runs',
  items: [
    'Brief: we record your requirement, timing and budget.',
    'Search: a shortlist matched to the brief, with viewings arranged at your convenience.',
    'Negotiate: rent and lease terms reviewed and negotiated on your behalf.',
    'Settle in: move-in coordination and tenancy support.',
  ],
};

const LANDLORD_PATH: Section = {
  heading: 'How we work with landlords',
  items: [
    'Valuation: an assessment of the property and a rental recommendation.',
    'Marketing: professional photography and listing creation.',
    'Vetting: viewings and applicant screening.',
    'Placement: lease negotiation, signing and move-in coordination.',
  ],
};

const MANAGEMENT_ITEMS = [
  'Tenant management, lease administration and renewals',
  'Rent collection and arrears tracking',
  'Maintenance coordination and periodic inspections',
  'Compliance reminders and monthly reporting',
];

const ENQUIRY_NOTE =
  'Tell us about your requirement through the contact page and we will respond with how we can help. Terms, scope and availability are confirmed directly with our team.';
const ENQUIRY_SECTION: Section = { heading: 'Start the conversation', paragraphs: [ENQUIRY_NOTE] };
const MARKET_NOTE =
  'Murivest Lettings is based in Nairobi. Where this page covers a market we do not currently publish listings for, treat it as an invitation to discuss a requirement rather than a statement of coverage.';

const pages: PageDef[] = [];

const TITLE_TAILS = ['Murivest Lettings', 'Murivest Lettings, Nairobi', 'Murivest Lettings | Nairobi, Kenya'];
const DESC_PADS = ['Brief us.', 'Enquire today.', 'Speak to our Nairobi team.', 'Contact our Nairobi team to discuss it.', 'Contact our Nairobi team to discuss your requirement.'];

/** Title: base + the longest brand tail that keeps the title within 60 characters. */
function buildTitle(raw: string): string {
  const base = raw.split(' | ')[0].trim();
  let best = `${base} | ${TITLE_TAILS[0]}`;
  for (const tail of TITLE_TAILS) {
    const t = `${base} | ${tail}`;
    if (t.length <= 60) best = t;
  }
  return best;
}

/** Description: pad short copy towards 150-160 characters without inventing facts. */
function buildDescription(d: string): string {
  if (d.length >= 150) return d;
  for (const pad of DESC_PADS) {
    const t = `${d} ${pad}`;
    if (t.length >= 150 && t.length <= 160) return t;
  }
  return d;
}

function add(p: PageDef): void {
  pages.push({ ...p, title: buildTitle(p.title), description: buildDescription(p.description) });
}

const OFFICE_SUB = ['Office', 'Office Floor', 'Serviced Office', 'Business Park'];
const RETAIL_SUB = ['Retail', 'Shop', 'Stall', 'Mall Space', 'Showroom'];
const WH_SUB = ['Warehouse', 'Godown', 'Storage'];
const IND_SUB = ['Industrial', 'Warehouse', 'Godown', 'Storage'];

/* ============================ LEASE ============================ */

add({
  path: '/lease',
  crumb: 'Lease',
  title: 'Commercial Property for Lease',
  description:
    'Browse commercial property for lease with Murivest Lettings: offices, retail, warehouses and industrial space, with enquiries handled directly by our team.',
  eyebrow: 'Lease',
  h1: 'Commercial property for lease',
  lead:
    'Offices, retail, warehouse and industrial premises that Murivest Lettings is currently marketing for lease, together with the leasing service behind them.',
  sections: [
    {
      heading: 'Choose a property type',
      paragraphs: [
        'Each category lists the current availability published on this site for that type of space. If nothing matches your requirement, tell us what you need and we will search on your behalf.',
      ],
    },
    LANDLORD_PATH,
  ],
  listing: { heading: 'Current availability for lease', listingType: 'lease' },
  related: [
    '/lease/offices-to-let',
    '/lease/retail-space-to-let',
    '/lease/warehouses-to-let',
    '/lease/industrial-property-to-let',
    '/lease/corporate-office-space',
    '/lease/commercial-property-to-let',
  ],
});

const leaseDef = (
  slug: string, crumb: string, h1: string, title: string, description: string, lead: string,
  subtypes: string[] | undefined, considerations: string[], related: string[],
): void =>
  add({
    path: `/lease/${slug}`,
    crumb,
    title,
    description,
    eyebrow: 'Lease',
    h1,
    lead,
    sections: [
      {
        heading: 'What to weigh up before you lease',
        paragraphs: ['The right premises depend on how your organisation operates. These are the questions we work through with you at the brief stage.'],
        items: considerations,
      },
      ENGAGEMENT,
    ],
    listing: { heading: `Current availability: ${crumb.toLowerCase()}`, subtypes, listingType: 'lease' },
    related,
  });

leaseDef('commercial-property-to-let', 'Commercial property to let', 'Commercial property to let', 'Commercial Property to Let',
  'Commercial property to let through Murivest Lettings. See current availability, understand how we run a search and brief our team on your requirement.',
  'A starting point for organisations looking to lease commercial premises of any type: offices, retail, warehouse, industrial or mixed use.',
  undefined,
  ['The use class and operational needs of the premises', 'Size, layout and any fit-out you expect to carry out', 'Location, access and proximity to staff, customers or suppliers', 'Lease length, break options and renewal expectations', 'Service charge, operating costs and who is responsible for what'],
  ['/lease/offices-to-let', '/lease/retail-space-to-let', '/lease/warehouses-to-let', '/find/commercial-property', '/advisory/tenant-representation']);
leaseDef('offices-to-let', 'Offices to let', 'Offices to let', 'Offices to Let',
  'Offices to let through Murivest Lettings. View current office availability, see how we support occupiers through search and lease negotiation, and enquire.',
  'Office floors and suites currently published for lease, and a leasing process designed around corporate occupiers.',
  OFFICE_SUB,
  ['Headcount, space planning and room for growth or consolidation', 'Whether you need fitted space or a floor you will fit out yourself', 'Building access, parking and visitor arrangements', 'Lease length, break options and renewal terms', 'Service charge and building operating arrangements'],
  ['/lease/corporate-office-space', '/find/office', '/sectors/office', '/advisory/lease-negotiation', '/occupiers/corporate']);
leaseDef('retail-space-to-let', 'Retail space to let', 'Retail space to let', 'Retail Space to Let',
  'Retail space to let through Murivest Lettings. See current retail availability and how we support retailers with search, negotiation and lease terms.',
  'Shops, showrooms and mall space currently published for lease, with support from search through to lease signing.',
  RETAIL_SUB,
  ['Visibility, frontage and access for your customers', 'Unit size, layout and servicing or delivery needs', 'Trading restrictions or permitted-use terms in the lease', 'Rent structure, service charge and lease length', 'Fit-out responsibilities at the start and end of the lease'],
  ['/find/retail', '/sectors/retail', '/lease/commercial-property-to-let', '/advisory/lease-negotiation', '/occupiers/corporate']);
leaseDef('warehouses-to-let', 'Warehouses to let', 'Warehouses to let', 'Warehouses to Let',
  'Warehouses to let through Murivest Lettings. View current storage and warehouse availability and brief our team on your operational requirements.',
  'Warehouse, godown and storage premises currently published for lease, and guidance on matching space to your operation.',
  WH_SUB,
  ['Floor area, clear height and loading or dispatch arrangements', 'Vehicle access and yard or turning space', 'Security, power and utilities for your operation', 'Lease length and flexibility if volumes change', 'Permitted use and any restrictions on activities'],
  ['/find/warehouse', '/lease/industrial-property-to-let', '/sectors/industrial-logistics', '/markets/africa/kenya/nairobi/mombasa-road', '/markets/africa/kenya/nairobi/industrial-area']);
leaseDef('industrial-property-to-let', 'Industrial property to let', 'Industrial property to let', 'Industrial Property to Let',
  'Industrial property to let through Murivest Lettings. View current industrial availability and brief our team on production or logistics requirements.',
  'Industrial and production premises currently published for lease, and a leasing process built around your operational brief.',
  IND_SUB,
  ['Production, processing or storage requirements', 'Power, water, drainage and other utility needs', 'Access for heavy vehicles and site circulation', 'Permitted use, and any approvals your operation requires', 'Lease length, repair obligations and exit terms'],
  ['/find/industrial', '/lease/warehouses-to-let', '/sectors/manufacturing', '/sectors/industrial-logistics', '/markets/africa/kenya/nairobi/industrial-area']);
leaseDef('corporate-office-space', 'Corporate office space', 'Corporate office space', 'Corporate Office Space',
  'Corporate office space through Murivest Lettings: support for multinationals, NGOs, financial institutions and regional headquarters seeking offices.',
  'Office premises for organisations that need a considered brief, structured negotiation and a single point of contact.',
  OFFICE_SUB,
  ['Internal approval requirements and decision timelines', 'Security, access control and visitor management expectations', 'Whether the premises will serve as a headquarters or a satellite office', 'Lease structure, break options and expansion rights', 'Relocation, fit-out and move-in coordination'],
  ['/lease/offices-to-let', '/occupiers/corporate', '/occupiers/regional-headquarters', '/advisory/corporate-relocation', '/advisory/tenant-representation']);

/* ============================ FIND ============================ */

add({
  path: '/find',
  crumb: 'Find a property',
  title: 'Find Commercial Property',
  description:
    'Find commercial property with Murivest Lettings: search offices, retail, warehouse and industrial premises, or brief our team and we will search for you.',
  eyebrow: 'Find',
  h1: 'Find commercial property',
  lead: 'Search current availability by property type, or give us a brief and we will run the search for you.',
  sections: [
    { heading: 'Two ways to start', items: ['Browse the categories to see what is currently published.', 'Submit a requirement and our team will search and shortlist on your behalf.'] },
    ENGAGEMENT,
  ],
  listing: { heading: 'Current availability' },
  related: ['/find/office', '/find/retail', '/find/warehouse', '/find/industrial', '/find/commercial-property', '/tenants/submit-requirement'],
});

const findDef = (slug: string, crumb: string, title: string, description: string, lead: string, subtypes: string[] | undefined, related: string[]): void =>
  add({
    path: `/find/${slug}`,
    crumb,
    title,
    description,
    eyebrow: 'Find',
    h1: `Find ${crumb.toLowerCase()}`,
    lead,
    sections: [
      {
        heading: 'Searching for this type of property',
        paragraphs: [
          'The properties below are those currently published on this site. Availability changes, so confirm the position with our team before you plan around any listing.',
          'If you do not see what you need, submit a requirement and we will search on your behalf.',
        ],
      },
      ENGAGEMENT,
    ],
    listing: { heading: `Current availability: ${crumb.toLowerCase()}`, subtypes },
    related,
  });

findDef('commercial-property', 'commercial property', 'Find Commercial Property to Lease or Buy',
  'Find commercial property to lease or buy with Murivest Lettings. See all current commercial listings or submit a requirement for our team to search.',
  'All commercial property currently published by Murivest Lettings, across lease and sale.', undefined,
  ['/find/office', '/find/retail', '/find/warehouse', '/find/industrial', '/tenants/submit-requirement']);
findDef('office', 'office space', 'Find Office Space',
  'Find office space with Murivest Lettings. View current office listings for lease or sale and brief our team to search on your behalf.',
  'Office floors, suites and buildings currently published, for lease or for sale.', [...OFFICE_SUB, 'Office to Buy'],
  ['/lease/offices-to-let', '/lease/corporate-office-space', '/sectors/office', '/tenants/submit-requirement']);
findDef('retail', 'retail space', 'Find Retail Space',
  'Find retail space with Murivest Lettings. View current shops, showrooms and mall space and brief our team to search on your behalf.',
  'Shops, showrooms and mall space currently published, for lease or for sale.', RETAIL_SUB,
  ['/lease/retail-space-to-let', '/sectors/retail', '/tenants/submit-requirement']);
findDef('warehouse', 'warehouse space', 'Find Warehouse Space',
  'Find warehouse space with Murivest Lettings. View current warehouse and storage listings and brief our team on your logistics requirements.',
  'Warehouse, godown and storage premises currently published, for lease or for sale.', WH_SUB,
  ['/lease/warehouses-to-let', '/sectors/industrial-logistics', '/find/industrial', '/tenants/submit-requirement']);
findDef('industrial', 'industrial property', 'Find Industrial Property',
  'Find industrial property with Murivest Lettings. View current industrial listings and brief our team on your production or operational needs.',
  'Industrial premises currently published, for lease or for sale.', IND_SUB,
  ['/lease/industrial-property-to-let', '/sectors/manufacturing', '/find/warehouse', '/tenants/submit-requirement']);

/* ============================ MARKETS ============================ */

const NAIROBI_TOKENS = ['nairobi', 'westlands', 'upper hill', 'upperhill', 'kilimani', 'lavington', 'kileleshwa', 'riverside', 'industrial area', 'mombasa road', 'cbd'];
const KENYA_TOKENS = ['kenya', 'nairobi', 'mombasa', 'naivasha', 'kisumu', 'westlands', 'kilimani', 'karen', 'upper hill', 'upperhill'];
const EA_TOKENS = ['kenya', 'nairobi', 'mombasa', 'naivasha', 'uganda', 'kampala', 'tanzania', 'dar es salaam', 'rwanda', 'kigali'];

add({
  path: '/markets',
  crumb: 'Markets',
  title: 'Markets and Locations',
  description:
    'Explore the markets Murivest Lettings supports: Nairobi and wider Kenya, East Africa, and international requirements routed through our advisory team.',
  eyebrow: 'Markets',
  h1: 'Markets and locations',
  lead: 'Murivest Lettings is based in Nairobi. Start with Kenya, or talk to us about a requirement elsewhere in Africa or further afield.',
  sections: [
    { heading: 'About this section', paragraphs: [MARKET_NOTE, 'Each market page links to current availability where we publish it, and to the advisory services we can bring to a requirement.'] },
  ],
  related: ['/markets/africa', '/markets/africa/kenya', '/markets/africa/kenya/nairobi', '/markets/europe', '/markets/middle-east', '/markets/north-america'],
  factNeeded: 'Which markets Murivest actively covers or can support outside Kenya.',
});
add({
  path: '/markets/africa',
  crumb: 'Africa',
  title: 'Commercial Property in Africa',
  description:
    'Commercial property support across Africa from Murivest Lettings, a Nairobi-based team: start with Kenya or discuss East African and wider requirements.',
  eyebrow: 'Markets',
  h1: 'Africa',
  lead: 'Our base is Nairobi, Kenya. This page is the entry point for requirements in Kenya and neighbouring East African markets.',
  sections: [
    { heading: 'Where to begin', paragraphs: [MARKET_NOTE], items: ['Kenya: Nairobi, Mombasa and Naivasha', 'Uganda, Tanzania and Rwanda: discuss a requirement with our team'] },
    ENGAGEMENT,
  ],
  listing: { heading: 'Current availability in Kenya and East Africa', tokens: EA_TOKENS },
  related: ['/markets/africa/kenya', '/markets/africa/uganda', '/markets/africa/tanzania', '/markets/africa/rwanda', '/international/east-africa'],
  factNeeded: 'Confirmation of which African markets beyond Kenya Murivest can support, and in what capacity.',
});
add({
  path: '/markets/africa/kenya',
  crumb: 'Kenya',
  title: 'Commercial Property in Kenya',
  description:
    'Commercial property in Kenya with Murivest Lettings: listings, tenant advisory, leasing and property management from our Nairobi base. Brief our team today.',
  eyebrow: 'Markets / Africa',
  h1: 'Kenya',
  lead: 'Murivest Lettings is a division of Murivest Group Ltd, based in Nairobi. We lease, manage and advise on property in Kenya.',
  sections: [
    {
      heading: 'What we do in Kenya',
      items: [
        'Leasing and tenant placement for landlords',
        'Tenant advisory: search, negotiation and lease review for occupiers',
        'Property management, reporting and landlord advisory',
        'International client services for owners who live overseas',
      ],
    },
    { heading: 'Locations', paragraphs: ['Explore the Nairobi business districts, or speak to us about Mombasa and Naivasha.'] },
  ],
  listing: { heading: 'Current availability in Kenya', tokens: KENYA_TOKENS },
  related: ['/markets/africa/kenya/nairobi', '/markets/africa/kenya/mombasa', '/markets/africa/kenya/naivasha', '/services', '/lease'],
});
add({
  path: '/markets/africa/kenya/nairobi',
  crumb: 'Nairobi',
  title: 'Commercial Property in Nairobi',
  description:
    'Commercial property in Nairobi with Murivest Lettings: offices, retail and industrial space across key business districts, with leasing and advisory support.',
  eyebrow: 'Markets / Kenya',
  h1: 'Nairobi',
  lead: 'Nairobi is where Murivest Lettings is based. Browse the districts below, or brief us and we will search across them on your behalf.',
  sections: [
    { heading: 'Districts', paragraphs: ['Each district page shows any current availability whose published location refers to it. We do not publish district statistics on this site.'] },
    ENGAGEMENT,
  ],
  listing: { heading: 'Current availability in Nairobi', tokens: NAIROBI_TOKENS },
  related: [
    '/markets/africa/kenya/nairobi/westlands', '/markets/africa/kenya/nairobi/upper-hill', '/markets/africa/kenya/nairobi/nairobi-cbd',
    '/markets/africa/kenya/nairobi/kilimani', '/markets/africa/kenya/nairobi/lavington', '/markets/africa/kenya/nairobi/kileleshwa',
    '/markets/africa/kenya/nairobi/riverside', '/markets/africa/kenya/nairobi/industrial-area', '/markets/africa/kenya/nairobi/mombasa-road',
  ],
});

const areaDef = (slug: string, name: string, tokens: string[], industrial = false): void =>
  add({
    path: `/markets/africa/kenya/nairobi/${slug}`,
    crumb: name,
    title: `Commercial Property in ${name}`,
    description: `Commercial property in ${name}, Nairobi: see current availability from Murivest Lettings and brief our team on offices, retail or industrial space.`,
    eyebrow: 'Markets / Nairobi',
    h1: `Commercial property in ${name}`,
    lead: `Current Murivest Lettings availability in ${name}, Nairobi, and the leasing and advisory support available for a requirement there.`,
    sections: [
      {
        heading: `Looking at ${name}`,
        paragraphs: [
          `If you are weighing ${name} against other Nairobi locations${industrial ? ' for warehouse or industrial use' : ''}, our ${industrial ? 'site selection' : 'location strategy'} support helps you compare them against your own criteria. We do not publish district statistics, rents or travel times on this site; ask us about ${name} and we will confirm what we can for your requirement.`,
        ],
      },
      ENGAGEMENT,
    ],
    listing: { heading: `Current availability in ${name}`, tokens },
    related: ['/markets/africa/kenya/nairobi', '/find/commercial-property', '/lease', '/advisory/location-strategy', '/tenants/submit-requirement'],
    factNeeded: `Neighbourhood-level information for ${name} (character, typical occupiers, stock) if Murivest wants to publish it.`,
  });
areaDef('westlands', 'Westlands', ['westlands']);
areaDef('upper-hill', 'Upper Hill', ['upper hill', 'upperhill']);
areaDef('nairobi-cbd', 'Nairobi CBD', ['nairobi cbd', 'cbd', 'central business district']);
areaDef('kilimani', 'Kilimani', ['kilimani']);
areaDef('lavington', 'Lavington', ['lavington']);
areaDef('kileleshwa', 'Kileleshwa', ['kileleshwa']);
areaDef('riverside', 'Riverside', ['riverside']);
areaDef('industrial-area', 'Industrial Area', ['industrial area'], true);
areaDef('mombasa-road', 'Mombasa Road', ['mombasa road'], true);

const cityDef = (slug: string, name: string, tokens: string[]): void =>
  add({
    path: `/markets/africa/kenya/${slug}`,
    crumb: name,
    title: `Commercial Property in ${name}`,
    description: `Commercial property in ${name}, Kenya: see any availability published by Murivest Lettings and brief our Nairobi team on a requirement there.`,
    eyebrow: 'Markets / Kenya',
    h1: `Commercial property in ${name}`,
    lead: `Any current Murivest Lettings availability in ${name}, and how to brief our Nairobi-based team on a requirement there.`,
    sections: [
      { heading: `A requirement in ${name}`, paragraphs: [`Our team is based in Nairobi. If your requirement is in ${name}, tell us what you need and we will confirm how we can support it.`, ENQUIRY_NOTE] },
      ENGAGEMENT,
    ],
    listing: { heading: `Current availability in ${name}`, tokens },
    related: ['/markets/africa/kenya', '/markets/africa/kenya/nairobi', '/find/commercial-property', '/advisory/site-selection', '/tenants/submit-requirement'],
    factNeeded: `Whether and how Murivest supports ${name} requirements, and any local market information worth publishing.`,
  });
cityDef('mombasa', 'Mombasa', ['mombasa']);
cityDef('naivasha', 'Naivasha', ['naivasha']);

const eaDef = (slug: string, name: string, tokens: string[]): void =>
  add({
    path: `/markets/africa/${slug}`,
    crumb: name,
    title: `Property Requirements in ${name}`,
    description: `Property requirements in ${name}: speak to Murivest Lettings, a Nairobi-based team, about market entry, site search and lease advisory for East Africa.`,
    eyebrow: 'Markets / Africa',
    h1: `Property requirements in ${name}`,
    lead: `Murivest Lettings is based in Nairobi. If you are planning a commercial presence in ${name}, speak to us about your requirement.`,
    sections: [
      {
        heading: 'How we can help',
        paragraphs: [`We do not currently publish market data for ${name} on this site. The route to an answer is a conversation about what you need.`],
        items: ['Clarifying your brief, timing and budget', 'Advisory on how to approach a market-entry or relocation decision', 'Coordination with our Nairobi team on regional requirements'],
      },
      ENQUIRY_SECTION,
    ],
    listing: { heading: `Current availability in ${name}`, tokens },
    related: ['/markets/africa', '/international/east-africa', '/advisory/market-entry', '/advisory/international-property-advisory', '/markets/africa/kenya'],
    factNeeded: `Whether Murivest has a presence, partners or published listings in ${name}, and what it can offer there.`,
  });
eaDef('uganda', 'Uganda', ['uganda', 'kampala']);
eaDef('tanzania', 'Tanzania', ['tanzania', 'dar es salaam']);
eaDef('rwanda', 'Rwanda', ['rwanda', 'kigali']);

const intlMarket = (path: string, crumb: string, h1: string, eyebrow: string, tokens: string[], extra: string | undefined, related: string[], factNeeded: string): void =>
  add({
    path,
    crumb,
    title: `Property Requirements: ${crumb}`,
    description: `Property requirements linked to ${crumb}: how Murivest Lettings, based in Nairobi, can advise organisations with an international footprint. Enquire today.`,
    eyebrow,
    h1,
    lead: `Murivest Lettings is a Nairobi-based team. This page is for organisations whose property requirements connect ${crumb} with East Africa.`,
    sections: [
      {
        heading: 'What this page is and is not',
        paragraphs: [
          `We do not publish ${crumb} market data or claim a local operating presence on this site. If your organisation coordinates property across regions, we can talk through the East African part of the brief.`,
          ...(extra ? [extra] : []),
        ],
      },
      { heading: 'Support available', items: ['International property advisory for cross-border requirements', 'Market entry and location strategy for East Africa', 'Corporate relocation coordination'] },
      ENQUIRY_SECTION,
    ],
    listing: { heading: `Current availability linked to ${crumb}`, tokens },
    related,
    factNeeded,
  });
const INTL_REL = ['/markets', '/international/global-network', '/advisory/international-property-advisory', '/advisory/market-entry', '/markets/africa/kenya'];
intlMarket('/markets/europe', 'Europe', 'Europe', 'Markets', ['united kingdom', 'london', 'england', 'germany', 'france'],
  'For the United Kingdom specifically, see the dedicated page.', ['/markets/europe/united-kingdom', ...INTL_REL],
  'Whether Murivest has operations, partners or listings in Europe; until confirmed, this page only routes to enquiry.');
intlMarket('/markets/europe/united-kingdom', 'United Kingdom', 'United Kingdom', 'Markets / Europe', ['united kingdom', 'uk,', ', uk', 'london', 'england', 'scotland'],
  undefined, ['/markets/europe', ...INTL_REL],
  'Whether Murivest has UK operations, partners or listings. This page previously carried invented statistics, which were removed.');
intlMarket('/markets/middle-east', 'Middle East', 'Middle East', 'Markets', ['uae', 'united arab emirates', 'dubai', 'abu dhabi', 'saudi', 'qatar'],
  undefined, INTL_REL, 'Whether Murivest has operations, partners or listings in the Middle East; until confirmed, this page only routes to enquiry.');
intlMarket('/markets/north-america', 'North America', 'North America', 'Markets', ['united states', 'usa', 'new york', 'canada'],
  undefined, INTL_REL, 'Whether Murivest has operations, partners or listings in North America; until confirmed, this page only routes to enquiry.');

/* ============================ SECTORS ============================ */

add({
  path: '/sectors',
  crumb: 'Sectors',
  title: 'Property Advisory by Sector',
  description:
    'Murivest Lettings supports occupiers across office, retail, industrial, hospitality, healthcare, technology, finance, manufacturing, NGO and diplomatic sectors.',
  eyebrow: 'Sectors',
  h1: 'Sectors we support',
  lead: 'Different sectors need different premises. Choose a sector to see how our leasing and advisory process applies to it.',
  sections: [{ heading: 'About these pages', paragraphs: ['Sector pages describe how we approach a requirement. They do not make claims about sector performance or demand.'] }],
  related: [
    '/sectors/office', '/sectors/retail', '/sectors/industrial-logistics', '/sectors/hospitality', '/sectors/healthcare',
    '/sectors/technology', '/sectors/financial-services', '/sectors/manufacturing', '/sectors/ngos-development', '/sectors/diplomatic',
  ],
});

const sectorDef = (
  slug: string, crumb: string, h1: string, lead: string, title: string, description: string, considerations: string[],
  listing: ListingSpec | undefined, related: string[], factNeeded?: string,
): void =>
  add({
    path: `/sectors/${slug}`,
    crumb,
    title,
    description,
    eyebrow: 'Sectors',
    h1,
    lead,
    sections: [
      { heading: 'What to settle in the brief', paragraphs: ['Every organisation is different, so treat these as prompts for the brief rather than a description of the sector.'], items: considerations },
      ENGAGEMENT,
    ],
    listing,
    related,
    factNeeded,
  });

sectorDef('office', 'Office', 'Office property', 'Office premises for organisations of any size, from search and negotiation through to move-in.',
  'Office Sector Property Advisory', 'Office property advisory from Murivest Lettings: help with search, lease negotiation and move-in for organisations seeking office space. Enquire today.',
  ['Space planning for current headcount and future change', 'Fitted versus shell space and fit-out responsibilities', 'Building services, access and parking', 'Lease length, break options and renewal terms'],
  { heading: 'Current office availability', subtypes: [...OFFICE_SUB, 'Office to Buy'] },
  ['/lease/offices-to-let', '/find/office', '/occupiers/corporate', '/advisory/tenant-representation']);
sectorDef('retail', 'Retail', 'Retail property', 'Shops, showrooms and mall space, with support for retailers from search through to lease signing.',
  'Retail Sector Property Advisory', 'Retail property advisory from Murivest Lettings: support for retailers with site search, lease negotiation and handover. Brief our team on your requirement.',
  ['Frontage, visibility and customer access', 'Unit size, layout and servicing needs', 'Permitted use and trading terms', 'Rent, service charge and fit-out obligations'],
  { heading: 'Current retail availability', subtypes: RETAIL_SUB },
  ['/lease/retail-space-to-let', '/find/retail', '/advisory/site-selection', '/advisory/lease-negotiation']);
sectorDef('industrial-logistics', 'Industrial and logistics', 'Industrial and logistics property', 'Warehouse, storage and industrial premises for distribution and operational occupiers.',
  'Industrial and Logistics Property', 'Industrial and logistics property with Murivest Lettings: support finding and leasing warehouse and industrial premises. Brief our team today.',
  ['Floor area, clear height and loading arrangements', 'Vehicle access and yard space', 'Security, power and utilities', 'Flexibility if volumes change'],
  { heading: 'Current industrial and logistics availability', subtypes: IND_SUB },
  ['/lease/warehouses-to-let', '/lease/industrial-property-to-let', '/find/warehouse', '/advisory/site-selection']);
sectorDef('hospitality', 'Hospitality', 'Hospitality property', 'Property support for hospitality operators and owners, handled as a bespoke brief.',
  'Hospitality Property Support', 'Hospitality property support from Murivest Lettings: brief our team on premises, lease structure and management for hospitality operators and owners.',
  ['Operating concept and the premises it needs', 'Lease or acquisition structure', 'Permits and approvals the operator must obtain', 'Management and reporting arrangements'],
  undefined, ['/advisory/tenant-representation', '/landlords/landlord-advisory', '/property-management/commercial'],
  'Whether Murivest has hospitality-specific experience or services to describe.');
sectorDef('healthcare', 'Healthcare', 'Healthcare property', 'Premises search and lease advisory for healthcare organisations, treated as a specific brief.',
  'Healthcare Property Advisory', 'Healthcare property advisory from Murivest Lettings: help with premises search, lease terms and move-in for healthcare organisations. Enquire with your brief.',
  ['Suitability of the premises for the intended use', 'Access for patients, staff and deliveries', 'Licensing and approvals, which the operator must confirm with the relevant authorities', 'Lease length and alteration rights'],
  undefined, ['/advisory/tenant-representation', '/advisory/lease-negotiation', '/occupiers/ngos'],
  'Whether Murivest has healthcare-specific experience or services to describe.');
sectorDef('technology', 'Technology', 'Technology sector property', 'Office and flexible premises for technology organisations, with help comparing options.',
  'Technology Sector Property', 'Property support for technology organisations from Murivest Lettings: office search, flexible lease terms and move-in coordination. Brief our team.',
  ['Space that can adapt as team size changes', 'Building services your operation depends on', 'Lease flexibility and break options', 'Location relative to your team and clients'],
  { heading: 'Current office availability', subtypes: OFFICE_SUB },
  ['/lease/offices-to-let', '/occupiers/technology', '/advisory/occupier-strategy']);
sectorDef('financial-services', 'Financial services', 'Financial services property', 'Office premises and lease advisory for banks, insurers, funds and other financial institutions.',
  'Financial Services Property', 'Property advisory for financial institutions from Murivest Lettings: office search, lease negotiation and relocation support. Brief our team on your needs.',
  ['Security, confidentiality and access control', 'Approval processes and decision timelines', 'Lease structure, break options and expansion rights', 'Fit-out and relocation coordination'],
  { heading: 'Current office availability', subtypes: OFFICE_SUB },
  ['/occupiers/financial-institutions', '/lease/corporate-office-space', '/advisory/tenant-representation', '/advisory/lease-negotiation']);
sectorDef('manufacturing', 'Manufacturing', 'Manufacturing property', 'Industrial premises and lease support for manufacturers and processors.',
  'Manufacturing Property Advisory', 'Manufacturing property advisory from Murivest Lettings: help finding and leasing industrial premises that fit your production brief. Enquire today.',
  ['Production layout and floor loading needs', 'Power, water and drainage', 'Access for raw materials and finished goods', 'Permitted use and the approvals your process requires'],
  { heading: 'Current industrial availability', subtypes: IND_SUB },
  ['/lease/industrial-property-to-let', '/find/industrial', '/markets/africa/kenya/nairobi/industrial-area', '/advisory/site-selection']);
sectorDef('ngos-development', 'NGOs and development', 'NGO and development sector property', 'Office premises and lease advisory for NGOs, development agencies and their partners.',
  'NGO and Development Property', 'Property advisory for NGOs and development organisations from Murivest Lettings: office search, lease terms and relocation support. Brief our team.',
  ['Programme and donor requirements that affect lease terms', 'Security and access arrangements', 'Flexibility if funding cycles change', 'Housing and office needs for staff, handled as separate briefs'],
  { heading: 'Current office availability', subtypes: OFFICE_SUB },
  ['/occupiers/ngos', '/lease/corporate-office-space', '/advisory/lease-negotiation', '/advisory/corporate-relocation']);
sectorDef('diplomatic', 'Diplomatic', 'Diplomatic property', 'Premises search and lease support for embassies, missions and international organisations.',
  'Diplomatic Property Advisory', 'Property advisory for embassies and diplomatic missions from Murivest Lettings: confidential premises search, lease support and relocation. Enquire today.',
  ['Security and access requirements set by the mission', 'Approval processes and who signs for the lease', 'Confidential handling of the brief', 'Lease terms suited to posting cycles'],
  undefined, ['/occupiers/diplomatic', '/advisory/tenant-representation', '/advisory/corporate-relocation'],
  'Whether Murivest has served diplomatic clients and can describe that service further.');

/* ============================ OCCUPIERS ============================ */

add({
  path: '/occupiers',
  crumb: 'Occupiers',
  title: 'Property Services for Occupiers',
  description:
    'Murivest Lettings supports corporate occupiers, multinationals, regional headquarters, NGOs, financial institutions and professional firms.',
  eyebrow: 'Occupiers',
  h1: 'Services for occupiers',
  lead: 'Organisations that occupy property have different priorities. Choose the description closest to yours.',
  sections: [{ heading: 'One brief, one point of contact', paragraphs: ['Our tenant advisory service covers search, negotiation, lease review and relocation support, whichever type of occupier you are.'] }],
  related: [
    '/occupiers/corporate', '/occupiers/multinational-companies', '/occupiers/regional-headquarters', '/occupiers/ngos',
    '/occupiers/financial-institutions', '/occupiers/professional-services', '/occupiers/technology', '/occupiers/diplomatic',
  ],
});

const occDef = (slug: string, crumb: string, h1: string, lead: string, title: string, description: string, needs: string[], related: string[], factNeeded?: string): void =>
  add({
    path: `/occupiers/${slug}`,
    crumb,
    title,
    description,
    eyebrow: 'Occupiers',
    h1,
    lead,
    sections: [
      { heading: 'Typical points to settle in the brief', items: needs },
      { heading: 'How we support occupiers', items: ['Property search and curated shortlist', 'Rent negotiation and lease term review', 'Guidance on tenant rights and obligations', 'Relocation support: utility setup, area orientation and move coordination'] },
      ENGAGEMENT,
    ],
    related,
    factNeeded,
  });

occDef('corporate', 'Corporate', 'Corporate occupiers', 'Property search, negotiation and move-in support for companies leasing premises.',
  'Corporate Occupier Services', 'Corporate occupier services from Murivest Lettings: office search, lease negotiation and relocation support for companies leasing premises in Kenya.',
  ['Space needed now and room for change', 'Budget and approval process', 'Preferred locations and access for staff and visitors', 'Lease length, break options and renewal terms'],
  ['/lease/corporate-office-space', '/advisory/tenant-representation', '/advisory/occupier-strategy', '/find/office']);
occDef('multinational-companies', 'Multinational companies', 'Multinational companies', 'Local support for international organisations placing people and operations in Kenya.',
  'Property for Multinational Companies', 'Property support for multinational companies from Murivest Lettings: local search, lease negotiation and relocation help for organisations entering Kenya.',
  ['Coordination between a head office abroad and a local team', 'Internal approval and procurement requirements', 'Timing relative to staff arrivals', 'Lease structures your group is comfortable with'],
  ['/advisory/market-entry', '/advisory/corporate-relocation', '/occupiers/regional-headquarters', '/international/market-entry']);
occDef('regional-headquarters', 'Regional headquarters', 'Regional headquarters', 'Office search and lease support for organisations establishing or moving a regional headquarters.',
  'Regional Headquarters Property', 'Regional headquarters property support from Murivest Lettings: office search, location strategy and lease negotiation for regional HQ requirements.',
  ['Size and layout for the headquarters team', 'Security, access and visitor arrangements', 'Location strategy across Nairobi districts', 'Lease structure and expansion options'],
  ['/advisory/location-strategy', '/advisory/site-selection', '/lease/corporate-office-space', '/advisory/corporate-relocation']);
occDef('ngos', 'NGOs', 'NGOs and international organisations', 'Premises support for NGOs, development partners and international organisations.',
  'Property Support for NGOs', 'Property support for NGOs and international organisations from Murivest Lettings: office search, lease advice and relocation help. Brief our team today.',
  ['Donor or programme conditions that affect lease terms', 'Security and access arrangements', 'Flexibility if funding or programmes change', 'Approval and procurement process'],
  ['/sectors/ngos-development', '/lease/corporate-office-space', '/advisory/lease-negotiation', '/advisory/corporate-relocation']);
occDef('financial-institutions', 'Financial institutions', 'Financial institutions', 'Premises search and lease support for banks, insurers, funds and other financial institutions.',
  'Property for Financial Institutions', 'Property support for financial institutions from Murivest Lettings: confidential office search, lease negotiation and relocation coordination.',
  ['Security and confidentiality expectations', 'Regulatory or compliance requirements the institution must confirm itself', 'Lease structure and expansion rights', 'Fit-out and relocation timeline'],
  ['/sectors/financial-services', '/lease/corporate-office-space', '/advisory/tenant-representation', '/advisory/lease-negotiation']);
occDef('professional-services', 'Professional services', 'Professional services firms', 'Office search and lease support for law, accounting, consulting and other professional firms.',
  'Property for Professional Services', 'Property support for professional services firms from Murivest Lettings: office search, lease negotiation and move-in coordination for growing practices.',
  ['Client-facing space and meeting rooms', 'Building address and access for clients', 'Space for growth in headcount', 'Lease flexibility and break options'],
  ['/lease/offices-to-let', '/find/office', '/advisory/tenant-representation', '/advisory/lease-negotiation']);
occDef('technology', 'Technology', 'Technology organisations', 'Office and flexible premises support for technology companies.',
  'Property for Technology Companies', 'Property support for technology companies from Murivest Lettings: flexible office search, lease terms and move-in help. Brief our team on your needs.',
  ['Adaptable space as the team changes size', 'Building services the business depends on', 'Lease flexibility and break options', 'Location relative to team and clients'],
  ['/sectors/technology', '/lease/offices-to-let', '/advisory/occupier-strategy', '/find/office']);
occDef('diplomatic', 'Diplomatic', 'Embassies and diplomatic missions', 'Confidential premises search and lease support for embassies, high commissions and international missions.',
  'Property for Diplomatic Missions', 'Property support for embassies and diplomatic missions from Murivest Lettings: confidential premises search, lease advice and relocation coordination.',
  ['Security and access requirements set by the mission', 'Approval chain and who signs the lease', 'Confidential handling of the brief', 'Lease terms suited to posting cycles'],
  ['/sectors/diplomatic', '/advisory/tenant-representation', '/advisory/corporate-relocation', '/lease/corporate-office-space'],
  'Whether Murivest has served diplomatic clients and can describe that service further.');

/* ============================ ADVISORY ============================ */

add({
  path: '/advisory',
  crumb: 'Advisory',
  title: 'Property Advisory for Occupiers',
  description:
    'Property advisory from Murivest Lettings: tenant representation, occupier and location strategy, site selection, market entry, relocation and lease negotiation.',
  eyebrow: 'Advisory',
  h1: 'Property advisory',
  lead: 'Advice for organisations deciding where to locate and on what terms, building on our tenant advisory and international client services.',
  sections: [{ heading: 'Advisory services', paragraphs: ['Each page describes the service and how an engagement would run. Scope and fees are agreed directly with our team.'] }],
  related: [
    '/advisory/tenant-representation', '/advisory/occupier-strategy', '/advisory/location-strategy', '/advisory/site-selection',
    '/advisory/market-entry', '/advisory/corporate-relocation', '/advisory/lease-negotiation', '/advisory/international-property-advisory',
  ],
});

const advDef = (slug: string, crumb: string, h1: string, lead: string, title: string, description: string, covers: string[], related: string[], factNeeded?: string): void =>
  add({
    path: `/advisory/${slug}`,
    crumb,
    title,
    description,
    eyebrow: 'Advisory',
    h1,
    lead,
    sections: [
      { heading: 'What this covers', items: covers },
      ENGAGEMENT,
      { heading: 'Scope and fees', paragraphs: ['Scope and any fee arrangement are agreed directly with our team before work begins.'] },
    ],
    related,
    factNeeded,
  });

advDef('tenant-representation', 'Tenant representation', 'Tenant representation', 'We act for the occupier: finding space, negotiating terms and supporting the move.',
  'Tenant Representation Services', 'Tenant representation from Murivest Lettings: search, negotiation and lease review for occupiers. Brief our team on your commercial property requirement.',
  ['Curated property shortlist matched to your requirements, budget and timeline', 'Rental negotiation and lease term review on your behalf', 'Guidance on tenant rights and obligations', 'Move-in coordination and tenancy support'],
  ['/tenants/tenant-representation', '/advisory/lease-negotiation', '/occupiers/corporate', '/tenants/submit-requirement']);
advDef('occupier-strategy', 'Occupier strategy', 'Occupier strategy', 'Help thinking through how much space you need, on what terms and in what arrangement.',
  'Occupier Strategy Advisory', 'Occupier strategy advice from Murivest Lettings: clarify space needs, lease structure and timing before you commit. Talk to our team about your plans.',
  ['Clarifying current and future space requirements', 'Comparing lease and purchase options where both are available', 'Considering lease length, flexibility and break options', 'Planning the sequence of search, approval and move'],
  ['/advisory/location-strategy', '/advisory/site-selection', '/occupiers/corporate', '/insights/occupier-strategy'],
  'The specific deliverables Murivest provides under occupier strategy (reports, workshops, benchmarks).');
advDef('location-strategy', 'Location strategy', 'Location strategy', 'Help comparing locations against the criteria that matter to your organisation.',
  'Location Strategy Advisory', 'Location strategy advice from Murivest Lettings: compare Nairobi districts and Kenyan locations against your own criteria. Brief our team on your requirement.',
  ['Agreeing criteria: access, staff, clients, security and cost', 'Comparing Nairobi districts and other Kenyan locations against those criteria', 'Viewing shortlisted areas and premises', 'Recording the reasoning for internal approval'],
  ['/markets/africa/kenya/nairobi', '/advisory/site-selection', '/occupiers/regional-headquarters', '/markets/africa/kenya'],
  'The specific deliverables and data sources Murivest uses in location strategy work.');
advDef('site-selection', 'Site selection', 'Site selection', 'A structured search for a specific site once the location criteria are set.',
  'Site Selection Support', 'Site selection support from Murivest Lettings: structured search, viewings and negotiation for offices, retail, warehouse and industrial premises.',
  ['Translating your operational needs into a site brief', 'Identifying and viewing candidate premises', 'Checking practical points such as access, services and permitted use with the right parties', 'Supporting negotiation on the chosen site'],
  ['/advisory/location-strategy', '/find/commercial-property', '/lease/commercial-property-to-let', '/tenants/submit-requirement']);
advDef('market-entry', 'Market entry', 'Market entry', 'Property support for organisations setting up in Kenya or East Africa for the first time.',
  'Market Entry Property Support', 'Market entry property support from Murivest Lettings: search, lease terms and local coordination for organisations setting up in Kenya and East Africa.',
  ['Defining the premises you need for the first phase', 'Options for interim and permanent premises and how lease terms differ', 'Coordination with your head office on approvals and timing', 'Onward property management for the occupied premises'],
  ['/international/market-entry', '/occupiers/multinational-companies', '/advisory/corporate-relocation', '/markets/africa/kenya'],
  'What Murivest offers beyond property (company set-up, legal, tax) and what it refers elsewhere.');
advDef('corporate-relocation', 'Corporate relocation', 'Corporate relocation', 'Coordination of the property side of moving an organisation or its staff.',
  'Corporate Relocation Support', 'Corporate relocation support from Murivest Lettings: premises search, lease agreement and move-in coordination for organisations relocating in Kenya.',
  ['Premises search and lease agreement', 'Move-in coordination: handover inspection, utility transfers and keys', 'Area orientation and utility setup for relocating teams', 'A single point of contact through the move'],
  ['/tenants/relocation', '/advisory/site-selection', '/occupiers/multinational-companies', '/advisory/lease-negotiation']);
advDef('lease-negotiation', 'Lease negotiation', 'Lease negotiation', 'Negotiation of rent and lease terms on behalf of the occupier.',
  'Lease Negotiation Support', 'Lease negotiation support from Murivest Lettings: rent negotiation, lease term review and renewal provisions for occupiers. Brief our team today.',
  ['Review of proposed lease terms and obligations', 'Negotiation of rent and concessions', 'Clear renewal and exit provisions', 'Coordination with your own legal advisers'],
  ['/advisory/tenant-representation', '/tenants/tenant-representation', '/lease', '/occupiers/corporate']);
advDef('international-property-advisory', 'International property advisory', 'International property advisory', 'For organisations and individuals whose property decisions span more than one country.',
  'International Property Advisory', 'International property advisory from Murivest Lettings: remote onboarding, reporting and local representation for owners and occupiers abroad.',
  ['Remote onboarding with electronic document signing and remote property audit', 'Time-zone-friendly communication and digital access to documents', 'Local representation for matters that need someone present', 'Coordination with our Nairobi leasing and management teams'],
  ['/international', '/international/global-network', '/landlords/property-management', '/advisory/market-entry']);

/* ============================ PROPERTY MANAGEMENT ============================ */

add({
  path: '/property-management',
  crumb: 'Property management',
  title: 'Commercial Property Management',
  description:
    'Commercial property management from Murivest Lettings: tenant management, lease administration, maintenance coordination and owner reporting in Kenya.',
  eyebrow: 'Property management',
  h1: 'Commercial property management',
  lead: 'Operational management of commercial property for owners, from tenant relations to reporting.',
  sections: [{ heading: 'What management includes', items: MANAGEMENT_ITEMS }],
  related: [
    '/property-management/commercial', '/property-management/office', '/property-management/retail', '/property-management/industrial',
    '/property-management/tenant-management', '/property-management/lease-administration', '/property-management/owner-reporting', '/services/property-management',
  ],
});

const pmDef = (slug: string, crumb: string, h1: string, lead: string, title: string, description: string, items: string[], related: string[]): void =>
  add({
    path: `/property-management/${slug}`,
    crumb,
    title,
    description,
    eyebrow: 'Property management',
    h1,
    lead,
    sections: [
      { heading: 'What this covers', items },
      { heading: 'Starting a management instruction', items: ['Onboarding and audit: property audit, document collection and compliance review', 'Systems setup: property registered, tenant profiles created, accounts configured', 'Active management: rent collection, maintenance, inspections and tenant communication', 'Reporting and review: monthly statements and periodic reviews'] },
      { heading: 'Fees', paragraphs: ['Fees are agreed with our team for each instruction. Please enquire for terms.'] },
    ],
    related,
  });
const ROUTINE = ['Tenant onboarding and lease administration', 'Rent collection and arrears tracking', 'Maintenance coordination and inspections', 'Monthly reporting to the owner'];
pmDef('commercial', 'Commercial', 'Commercial property management', 'Management of commercial property across office, retail and industrial uses.',
  'Commercial Property Management Services', 'Commercial property management from Murivest Lettings: tenant relations, rent collection, maintenance and reporting for commercial owners.', MANAGEMENT_ITEMS,
  ['/property-management/office', '/property-management/retail', '/property-management/industrial', '/landlords/property-management']);
pmDef('office', 'Office', 'Office property management', 'Management of office buildings and floors, from tenant relations to reporting.',
  'Office Property Management', 'Office property management from Murivest Lettings: tenant relations, rent collection, maintenance coordination and reporting for office owners.', ROUTINE,
  ['/property-management/commercial', '/lease/offices-to-let', '/property-management/owner-reporting']);
pmDef('retail', 'Retail', 'Retail property management', 'Management of shops, showrooms and mall space for owners.',
  'Retail Property Management', 'Retail property management from Murivest Lettings: tenant relations, rent collection, maintenance coordination and reporting for retail owners.', ROUTINE,
  ['/property-management/commercial', '/lease/retail-space-to-let', '/property-management/owner-reporting']);
pmDef('industrial', 'Industrial', 'Industrial property management', 'Management of warehouse and industrial property for owners.',
  'Industrial Property Management', 'Industrial property management from Murivest Lettings: tenant relations, rent collection, maintenance and reporting for warehouse and industrial owners.', ROUTINE,
  ['/property-management/commercial', '/lease/industrial-property-to-let', '/property-management/owner-reporting']);
pmDef('tenant-management', 'Tenant management', 'Tenant management', 'Onboarding, lease administration, renewals and day-to-day tenant relations.',
  'Tenant Management Services', 'Tenant management from Murivest Lettings: onboarding, lease administration, renewals and day-to-day tenant relations for commercial owners.',
  ['Tenant onboarding and handover', 'Lease administration and renewals', 'Day-to-day tenant communication', 'Maintenance requests through the tenant portal'],
  ['/property-management/lease-administration', '/portals/tenant', '/landlords/tenant-acquisition']);
pmDef('lease-administration', 'Lease administration', 'Lease administration', 'Keeping lease terms, dates and obligations organised and acted on.',
  'Lease Administration Services', 'Lease administration from Murivest Lettings: recording terms, tracking renewals and keeping lease documents organised for commercial owners.',
  ['Recording lease terms, dates and obligations', 'Renewal and review preparation', 'Rent and charge administration', 'Document storage accessible through the portals'],
  ['/property-management/tenant-management', '/property-management/owner-reporting', '/portals/landlord']);
pmDef('owner-reporting', 'Owner reporting', 'Owner reporting', 'Reporting that gives owners visibility of rent, expenses, arrears and property condition.',
  'Owner Reporting for Landlords', 'Owner reporting from Murivest Lettings: monthly statements, periodic reviews and landlord portal access for commercial property owners.',
  ['Monthly statements covering rent collected, expenses, arrears and condition', 'Periodic performance reviews', 'Documents and approvals available through the landlord portal', 'Annual income and expense summaries for tax filing'],
  ['/portals/landlord', '/property-management/commercial', '/services/property-performance']);

/* ============================ LANDLORDS ============================ */

const landDef = (slug: string, crumb: string, h1: string, lead: string, title: string, description: string, items: string[], related: string[]): void =>
  add({
    path: `/landlords/${slug}`,
    crumb,
    title,
    description,
    eyebrow: 'Landlords',
    h1,
    lead,
    sections: [{ heading: 'What this covers', items }, LANDLORD_PATH],
    related,
  });
landDef('property-management', 'Property management', 'Property management for landlords', 'Full-service management of your property, from tenants to reporting.',
  'Property Management for Landlords', 'Property management for landlords from Murivest Lettings: tenant relations, rent collection, maintenance coordination and monthly reporting.', MANAGEMENT_ITEMS,
  ['/property-management', '/services/property-management', '/portals/landlord', '/landlords/submit-property']);
landDef('lease-up', 'Lease-up', 'Lease-up', 'Bringing vacant commercial space to a signed lease.',
  'Lease-Up for Commercial Landlords', 'Lease-up from Murivest Lettings: valuation, marketing, applicant screening and lease negotiation to place tenants in vacant commercial space.',
  ['Valuation and rental recommendation', 'Professional photography and listing creation', 'Viewings and applicant screening', 'Lease negotiation, signing and move-in coordination'],
  ['/landlords/tenant-acquisition', '/services/leasing', '/landlords/submit-property', '/lease']);
landDef('tenant-acquisition', 'Tenant acquisition', 'Tenant acquisition', 'Finding and vetting tenants for your property.',
  'Tenant Acquisition for Landlords', 'Tenant acquisition from Murivest Lettings: marketing, vetting and lease placement to bring quality tenants to your commercial property.',
  ['Marketing across channels and our own network', 'Credit checks, employment verification and landlord references', 'Affordability assessment', 'Deposit collection and move-in coordination'],
  ['/landlords/lease-up', '/services/leasing', '/landlords/submit-property', '/property-management/tenant-management']);
landDef('landlord-advisory', 'Landlord advisory', 'Landlord advisory', 'Counsel for owners on rental strategy, improvements and regulation.',
  'Landlord Advisory Services', 'Landlord advisory from Murivest Lettings: rental strategy, improvement planning, portfolio review and regulatory guidance for property owners.',
  ['Rental strategy and renewal pricing', 'Capital improvement planning', 'Portfolio review', 'Regulatory guidance for landlords'],
  ['/services/landlord-advisory', '/landlords/lease-up', '/property-management/owner-reporting', '/landlords/submit-property']);
add({
  path: '/landlords/submit-property',
  crumb: 'Submit a property',
  title: 'Submit a Property to Let or Sell',
  description:
    'Submit a commercial property to Murivest Lettings: tell us about your office, retail, warehouse or industrial asset and we will discuss leasing and management.',
  eyebrow: 'Landlords',
  h1: 'Submit a property',
  lead: 'Tell us about the property you want leased or managed and our team will come back to you.',
  sections: [
    { heading: 'What to include', items: ['The property type and its location', 'Size and any current tenancy', 'Whether you want it leased, sold or managed', 'Your contact details and preferred way to be reached'] },
    { heading: 'What happens next', items: ['We review the details and contact you', 'We discuss valuation, marketing and terms', 'If you instruct us, onboarding and audit follow'] },
    { heading: 'How to submit', paragraphs: ['Use the contact page to send the details. There is no separate submission form on this site.'] },
  ],
  related: ['/landlords', '/landlords/lease-up', '/landlords/tenant-acquisition', '/landlords/landlord-advisory', '/portals/landlord'],
  ctaTitle: 'Send us the details of your property',
  ctaText: 'Use the contact page to tell us about the property and what you would like us to do.',
});

/* ============================ TENANTS ============================ */

add({
  path: '/tenants/find-property',
  crumb: 'Find a property',
  title: 'Find Property to Lease | Tenants',
  description:
    'Find commercial property to lease with Murivest Lettings: browse current availability or let our tenant advisory team search against your requirement.',
  eyebrow: 'Tenants',
  h1: 'Find a property',
  lead: 'Browse what is currently available, or hand us the brief and we will search for you.',
  sections: [ENGAGEMENT],
  listing: { heading: 'Current availability for lease', listingType: 'lease' },
  related: ['/find', '/find/office', '/find/retail', '/find/warehouse', '/tenants/submit-requirement', '/properties'],
});
add({
  path: '/tenants/submit-requirement',
  crumb: 'Submit a requirement',
  title: 'Submit a Property Requirement',
  description:
    'Submit a commercial property requirement to Murivest Lettings: share space, location, budget and timing and our tenant advisory team will search for you.',
  eyebrow: 'Tenants',
  h1: 'Submit a requirement',
  lead: 'Give us the brief and our team will search for suitable premises and come back with options.',
  sections: [
    { heading: 'What to include', items: ['Type of property and the use it is for', 'Size and any layout needs', 'Preferred locations', 'Budget and lease length', 'Timing and who approves the decision'] },
    { heading: 'What happens next', items: ['We confirm the brief with you', 'We search and prepare a shortlist', 'We arrange viewings and negotiate terms'] },
    { heading: 'How to submit', paragraphs: ['Use the contact page to send the brief. There is no separate requirement form on this site.'] },
  ],
  related: ['/tenants', '/find', '/advisory/tenant-representation', '/tenants/relocation'],
  ctaTitle: 'Send us your requirement',
  ctaText: 'Use the contact page to share your brief and our team will respond.',
});
add({
  path: '/tenants/tenant-representation',
  crumb: 'Tenant representation',
  title: 'Tenant Representation for Occupiers',
  description:
    'Tenant representation from Murivest Lettings: we act for the occupier on search, negotiation and lease review. Brief our team on your requirement.',
  eyebrow: 'Tenants',
  h1: 'Tenant representation',
  lead: 'We act for you as the occupier: finding space, negotiating terms and supporting the move.',
  sections: [
    { heading: 'What we do', items: ['Curated shortlist matched to your brief', 'Rental negotiation and lease term review', 'Guidance on tenant rights and obligations', 'Move-in and tenancy support'] },
    { heading: 'Fees', paragraphs: ['Standard tenant placement is usually paid by the landlord. Specialised tenant representation for commercial space may involve a fee arrangement, which we agree with you in advance.'] },
    ENGAGEMENT,
  ],
  related: ['/advisory/tenant-representation', '/advisory/lease-negotiation', '/tenants/submit-requirement', '/services/tenant-advisory'],
});
add({
  path: '/tenants/relocation',
  crumb: 'Relocation',
  title: 'Relocation Support for Tenants',
  description:
    'Relocation support from Murivest Lettings for tenants moving premises: search, lease agreement, utility setup and move coordination for a smooth transition.',
  eyebrow: 'Tenants',
  h1: 'Relocation support',
  lead: 'Help with the practical side of moving premises, from signing the lease to settling in.',
  sections: [
    { heading: 'What we coordinate', items: ['Inventory schedule and handover inspection', 'Utility setup and transfers', 'Area orientation', 'Key management and move-in coordination'] },
    ENGAGEMENT,
  ],
  related: ['/advisory/corporate-relocation', '/tenants/find-property', '/tenants/submit-requirement', '/services/tenant-advisory'],
});

/* ============================ INSIGHTS / RESEARCH (no published content yet) ============================ */

const NO_CONTENT: Section = {
  heading: 'Publication status',
  paragraphs: [
    'No articles or reports are published in this section yet. Rather than fill it with generic commentary, we have kept it brief.',
    'If you need market information for a specific requirement, tell us what you are looking at and we will confirm what we can share.',
  ],
};
const thinSection = (slug: string, crumb: string, h1: string, base: 'insights' | 'research', blurb: string, related: string[]): void =>
  add({
    path: `/${base}/${slug}`,
    crumb,
    title: `${h1}: ${base === 'insights' ? 'Insights' : 'Research'}`,
    description: `${h1} from Murivest Lettings: ${blurb.charAt(0).toLowerCase()}${blurb.slice(1)} No publications are live yet; contact our team.`,
    eyebrow: base === 'insights' ? 'Insights' : 'Research',
    h1,
    lead: blurb,
    sections: [NO_CONTENT],
    related,
    noindex: true,
    factNeeded: `Published content for /${base}/${slug}. The page is noindex and omitted from the sitemap until content exists.`,
  });

add({
  path: '/insights',
  crumb: 'Insights',
  title: 'Insights | Murivest Lettings',
  description:
    'Insights from Murivest Lettings: commentary on commercial real estate, leasing, occupier strategy and property management. Publications are not live yet; enquire.',
  eyebrow: 'Insights',
  h1: 'Insights',
  lead: 'A home for Murivest Lettings commentary on commercial property, leasing and occupier decisions.',
  sections: [NO_CONTENT],
  related: ['/insights/commercial-real-estate', '/insights/office-market', '/insights/retail-market', '/insights/industrial-logistics', '/insights/leasing', '/insights/occupier-strategy', '/insights/property-management', '/insights/cities'],
  noindex: true,
  factNeeded: 'Published articles. Section is noindex and omitted from the sitemap until content exists.',
});
const INS = ['/insights', '/lease', '/advisory', '/properties'];
thinSection('commercial-real-estate', 'Commercial real estate', 'Commercial real estate', 'insights', 'Commentary on commercial property topics.', INS);
thinSection('office-market', 'Office market', 'Office market', 'insights', 'Commentary on the office market.', INS);
thinSection('retail-market', 'Retail market', 'Retail market', 'insights', 'Commentary on the retail property market.', INS);
thinSection('industrial-logistics', 'Industrial and logistics', 'Industrial and logistics', 'insights', 'Commentary on industrial and logistics property.', INS);
thinSection('leasing', 'Leasing', 'Leasing', 'insights', 'Commentary on leasing decisions and lease terms.', INS);
thinSection('occupier-strategy', 'Occupier strategy', 'Occupier strategy', 'insights', 'Commentary on occupier decision-making.', INS);
thinSection('property-management', 'Property management', 'Property management', 'insights', 'Commentary on managing commercial property.', INS);
thinSection('cities', 'Cities', 'Cities', 'insights', 'Commentary on cities and districts.', INS);

add({
  path: '/research',
  crumb: 'Research',
  title: 'Research | Murivest Lettings',
  description:
    'Research from Murivest Lettings: market reports, outlooks and data for offices, retail and industrial property. No publications are live yet; enquire for details.',
  eyebrow: 'Research',
  h1: 'Research',
  lead: 'A home for Murivest Lettings market reports, outlooks and data.',
  sections: [NO_CONTENT],
  related: ['/research/market-reports', '/research/market-outlooks', '/research/market-data', '/research/office', '/research/industrial', '/research/retail'],
  noindex: true,
  factNeeded: 'Published reports and data. Section is noindex and omitted from the sitemap until content exists.',
});
const RES = ['/research', '/insights', '/advisory', '/properties'];
thinSection('market-reports', 'Market reports', 'Market reports', 'research', 'Periodic reports on property markets.', RES);
thinSection('market-outlooks', 'Market outlooks', 'Market outlooks', 'research', 'Forward-looking views on property markets.', RES);
thinSection('market-data', 'Market data', 'Market data', 'research', 'Data on property markets, to be published here once available.', RES);
thinSection('office', 'Office', 'Office research', 'research', 'Research on the office market.', RES);
thinSection('industrial', 'Industrial', 'Industrial research', 'research', 'Research on industrial property.', RES);
thinSection('retail', 'Retail', 'Retail research', 'research', 'Research on retail property.', RES);

/* ============================ PEOPLE ============================ */

const PEOPLE_NOTE: Section = {
  heading: 'Profiles',
  paragraphs: ['Individual profiles are not published on this site yet. To speak with someone about your requirement, use the contact page and your enquiry will be routed to the right person.'],
};
add({
  path: '/people',
  crumb: 'People',
  title: 'People | Murivest Lettings',
  description:
    'Meet the Murivest Lettings team: leadership and advisors. Profiles are not published yet, so contact us and we will connect you with the right person.',
  eyebrow: 'People',
  h1: 'People',
  lead: 'Murivest Lettings is a division of Murivest Group Ltd, based in Nairobi.',
  sections: [PEOPLE_NOTE],
  related: ['/people/leadership', '/people/advisors', '/about/murivest-lettings', '/about'],
  noindex: true,
  factNeeded: 'Names, roles and approved biographies for any people Murivest wants to publish.',
});
add({
  path: '/people/leadership',
  crumb: 'Leadership',
  title: 'Leadership | Murivest Lettings',
  description:
    'Leadership at Murivest Lettings, the property division of Murivest Group Ltd. Profiles are not published yet; contact the team to speak with the right person.',
  eyebrow: 'People',
  h1: 'Leadership',
  lead: 'Leadership of Murivest Lettings within Murivest Group Ltd.',
  sections: [PEOPLE_NOTE],
  related: ['/people', '/people/advisors', '/about/institutional', '/about'],
  noindex: true,
  factNeeded: 'Names, titles and approved biographies of leadership.',
});
add({
  path: '/people/advisors',
  crumb: 'Advisors',
  title: 'Advisors | Murivest Lettings',
  description:
    'Advisors at Murivest Lettings: leasing, tenant and landlord advisory. Individual profiles are not published yet; contact the team to be connected.',
  eyebrow: 'People',
  h1: 'Advisors',
  lead: 'The advisors who handle leasing, tenant and landlord enquiries.',
  sections: [PEOPLE_NOTE],
  related: ['/people', '/people/leadership', '/advisory', '/about'],
  noindex: true,
  factNeeded: 'Names, roles and approved biographies of advisors.',
});

/* ============================ INTERNATIONAL ============================ */

add({
  path: '/international',
  crumb: 'International',
  title: 'International Property Services',
  description:
    'International property services from Murivest Lettings: support for overseas owners and organisations with requirements in Kenya and East Africa.',
  eyebrow: 'International',
  h1: 'International',
  lead: 'Support for owners and organisations outside Kenya whose property interests are in Kenya and East Africa.',
  sections: [
    { heading: 'What we offer', items: ['Remote onboarding with electronic document signing', 'Multi-currency reporting and time-zone-friendly communication', 'Local representation for matters that require presence', 'Guidance on power of attorney arrangements and rental income repatriation'] },
  ],
  related: ['/international/africa', '/international/east-africa', '/international/market-entry', '/international/global-network', '/services/international-client-services'],
});
add({
  path: '/international/africa',
  crumb: 'Africa',
  title: 'International: Africa',
  description:
    'Africa-focused property support for international clients from Murivest Lettings, a Nairobi-based team: start with Kenya and discuss wider requirements.',
  eyebrow: 'International',
  h1: 'Africa',
  lead: 'Murivest Lettings is based in Nairobi. We start from Kenya and talk through wider African requirements case by case.',
  sections: [{ heading: 'How to approach it', paragraphs: [MARKET_NOTE] }, ENQUIRY_SECTION],
  listing: { heading: 'Current availability', tokens: ['kenya', 'nairobi', 'uganda', 'tanzania', 'rwanda'] },
  related: ['/markets/africa', '/international/east-africa', '/advisory/market-entry', '/markets/africa/kenya'],
  factNeeded: 'Which African markets beyond Kenya Murivest can support.',
});
add({
  path: '/international/east-africa',
  crumb: 'East Africa',
  title: 'International: East Africa',
  description:
    'East Africa property support for international clients from Murivest Lettings: Nairobi base, with Uganda, Tanzania and Rwanda requirements discussed case by case.',
  eyebrow: 'International',
  h1: 'East Africa',
  lead: 'A Nairobi base for organisations with property needs across East Africa.',
  sections: [{ heading: 'Markets', items: ['Kenya', 'Uganda', 'Tanzania', 'Rwanda'], paragraphs: [MARKET_NOTE] }, ENQUIRY_SECTION],
  related: ['/markets/africa/kenya', '/markets/africa/uganda', '/markets/africa/tanzania', '/markets/africa/rwanda'],
  factNeeded: 'Confirmation of what Murivest can do outside Kenya in East Africa.',
});
add({
  path: '/international/market-entry',
  crumb: 'Market entry',
  title: 'International Market Entry Support',
  description:
    'Market entry support for international organisations from Murivest Lettings: premises search, lease terms and local coordination when setting up in Kenya.',
  eyebrow: 'International',
  h1: 'Market entry',
  lead: 'Property support for organisations setting up in Kenya from abroad.',
  sections: [{ heading: 'What we can coordinate', items: ['Premises search and shortlist', 'Lease negotiation and review', 'Relocation and move-in coordination', 'Onward management of the premises'] }, ENGAGEMENT],
  related: ['/advisory/market-entry', '/occupiers/multinational-companies', '/advisory/corporate-relocation', '/international'],
});
add({
  path: '/international/global-network',
  crumb: 'Global network',
  title: 'Global Network | Murivest Lettings',
  description:
    'Murivest Lettings global network: this page will describe international partners once confirmed. For cross-border property requirements, contact our Nairobi team.',
  eyebrow: 'International',
  h1: 'Global network',
  lead: 'We have not published details of international partners or offices on this site.',
  sections: [{ heading: 'Cross-border requirements', paragraphs: ['If your organisation needs property support in more than one country, speak to our team about the East African part of the brief and how it can be coordinated with your other advisers.'] }],
  related: ['/international', '/advisory/international-property-advisory', '/markets', '/about'],
  noindex: true,
  factNeeded: 'Any partners, affiliates or offices Murivest is able to name publicly. No network is claimed until confirmed.',
});

/* ============================ SERVICES (new), ABOUT, PORTALS ============================ */

add({
  path: '/services/real-estate-advisory',
  crumb: 'Real estate advisory',
  title: 'Real Estate Advisory Services',
  description:
    'Real estate advisory from Murivest Lettings: tenant advisory, landlord advisory, location strategy and lease negotiation for commercial property decisions.',
  eyebrow: 'Services',
  h1: 'Real estate advisory',
  lead: 'Advice on commercial property decisions for occupiers and owners.',
  sections: [
    { heading: 'For occupiers', items: ['Tenant representation and lease negotiation', 'Occupier and location strategy', 'Site selection and market entry', 'Corporate relocation'] },
    { heading: 'For owners', items: ['Rental strategy and renewal pricing', 'Capital improvement planning', 'Portfolio review', 'Regulatory guidance'] },
  ],
  related: ['/advisory', '/services/tenant-advisory', '/services/landlord-advisory', '/services/leasing', '/services/property-management'],
});

const aboutDef = (slug: string, crumb: string, h1: string, lead: string, title: string, description: string, sections: Section[], related: string[], factNeeded?: string): void =>
  add({ path: `/about/${slug}`, crumb, title, description, eyebrow: 'About', h1, lead, sections, related, factNeeded });
aboutDef('murivest-lettings', 'Murivest Lettings', 'Murivest Lettings',
  'The property management, leasing and advisory division of Murivest Group Ltd, based in Nairobi.',
  'About Murivest Lettings', 'About Murivest Lettings, the property management, leasing and advisory division of Murivest Group Ltd, based in Nairobi. Learn what we do and get in touch.',
  [
    { heading: 'Who we are', paragraphs: ['Murivest Lettings is the operational arm of Murivest Group Ltd for property management, leasing and advisory. We work with landlords, tenants and international owners in Kenya.'] },
    { heading: 'What we offer', items: ['Property management', 'Leasing and tenant placement', 'Landlord advisory and tenant advisory', 'International client services'] },
  ],
  ['/about', '/about/approach', '/about/institutional', '/services']);
aboutDef('approach', 'Our approach', 'Our approach',
  'How we work with landlords and occupiers: clear process, documented decisions and regular reporting.',
  'Our Approach | Murivest Lettings', 'Our approach at Murivest Lettings: discretion, structured process and transparent reporting for landlords and occupiers. Learn how we work.',
  [
    { heading: 'Principles stated across this site', items: ['Discretion: client confidentiality and careful handling of transactions', 'Competence: structured systems, documentation and processes', 'Transparency: visibility of financials, operations and condition through our portals', 'Relationships: long-term working relationships'] },
    ENGAGEMENT,
  ],
  ['/about/murivest-lettings', '/about/institutional', '/services', '/about']);
aboutDef('institutional', 'Institutional clients', 'Institutional clients',
  'How Murivest Lettings supports organisations that need documentation, approvals and reporting they can rely on.',
  'Institutional Clients | Murivest Lettings', 'Murivest Lettings supports institutional occupiers and owners with documented process, single-point contact and reporting. Brief our team on your needs.',
  [
    { heading: 'What institutions usually ask for', items: ['A clear brief and a single point of contact', 'Documented negotiation and lease terms', 'Reporting that supports internal review', 'Confidential handling of the requirement'] },
    { heading: 'Clients we serve', paragraphs: ['Occupiers: multinationals, NGOs, financial institutions, professional-services firms and diplomatic missions. Owners: landlords with commercial property in Kenya, including those based overseas.'] },
  ],
  ['/occupiers', '/landlords', '/about/approach', '/about'],
  'Any institutional clients, mandates or references Murivest is willing to name.');
aboutDef('partnerships', 'Partnerships', 'Partnerships',
  'We have not published partner details on this site.',
  'Partnerships | Murivest Lettings', 'Partnerships at Murivest Lettings: part of Murivest Group Ltd. Partner details are not published yet; contact our team about working together.',
  [
    { heading: 'Working with others', paragraphs: ['Murivest Lettings is part of Murivest Group Ltd, and can connect clients to the group where relevant, for example to its acquisitions team for purchase advisory.', 'If you are a service provider or organisation interested in working with us, use the contact page.'] },
  ],
  ['/about/murivest-lettings', '/about/institutional', '/about'],
  'Any named partners, affiliations or accreditations that can be published. None are claimed here.');

add({
  path: '/portals',
  crumb: 'Portals',
  title: 'Client Portals | Murivest Lettings',
  description:
    'Murivest Lettings client portals: the landlord portal for properties, financials, documents and approvals, and the tenant portal for payments and maintenance.',
  eyebrow: 'Portals',
  h1: 'Client portals',
  lead: 'Secure areas for landlords and tenants managed by Murivest Lettings.',
  sections: [{ heading: 'Choose a portal', items: ['Landlord portal: properties, financials, documents and approvals', 'Tenant portal: payments, maintenance and documents'] }],
  related: ['/portals/landlord', '/portals/tenant', '/portal/landlord', '/portal/tenant'],
});
add({
  path: '/portals/landlord',
  crumb: 'Landlord portal',
  title: 'Landlord Portal | Murivest Lettings',
  description:
    'The Murivest Lettings landlord portal gives property owners access to properties, financials, documents and approvals in one place. Learn more and sign in.',
  eyebrow: 'Portals',
  h1: 'Landlord portal',
  lead: 'Where landlords instructing Murivest Lettings can follow their properties.',
  sections: [
    { heading: 'What the portal covers', items: ['Dashboard overview of your properties', 'Property details', 'Financials: statements and rent collected', 'Documents', 'Approvals'] },
    { heading: 'Signing in', paragraphs: ['Use the button below to open the landlord portal.'] },
  ],
  related: ['/portal/landlord', '/property-management/owner-reporting', '/landlords/submit-property', '/portals/tenant'],
  ctaTitle: 'Open the landlord portal',
  ctaText: 'Existing clients can go straight to the portal.',
});
add({
  path: '/portals/tenant',
  crumb: 'Tenant portal',
  title: 'Tenant Portal | Murivest Lettings',
  description:
    'The Murivest Lettings tenant portal lets tenants follow payments, raise maintenance requests and access documents in one place. Learn more and sign in.',
  eyebrow: 'Portals',
  h1: 'Tenant portal',
  lead: 'Where tenants of properties managed by Murivest Lettings can follow their tenancy.',
  sections: [
    { heading: 'What the portal covers', items: ['Dashboard overview', 'Payments', 'Maintenance requests', 'Documents'] },
    { heading: 'Signing in', paragraphs: ['Use the button below to open the tenant portal.'] },
  ],
  related: ['/portal/tenant', '/property-management/tenant-management', '/tenants', '/portals/landlord'],
  ctaTitle: 'Open the tenant portal',
  ctaText: 'Existing tenants can go straight to the portal.',
});

/* ============================================================ */

export const ARCH_PAGES: PageDef[] = pages;
export const ARCH_BY_PATH: Record<string, PageDef> = Object.fromEntries(pages.map((p) => [p.path, p]));

/** Routes that already exist in App.tsx and may be linked to. */
export const EXISTING_ROUTES = [
  '/services', '/services/property-management', '/services/leasing', '/services/landlord-advisory', '/services/tenant-advisory',
  '/services/property-performance', '/services/international-client-services', '/services/takeover-management', '/services/audit-valuation',
  '/properties', '/about', '/contact', '/landlords', '/tenants', '/portal/landlord', '/portal/tenant',
];

const EXISTING_LABELS: Record<string, string> = {
  '/': 'Home', '/about': 'About', '/landlords': 'Landlords', '/tenants': 'Tenants', '/services': 'Services', '/properties': 'Properties',
  '/contact': 'Contact', '/portal/landlord': 'Landlord portal (sign in)', '/portal/tenant': 'Tenant portal (sign in)',
  '/services/property-management': 'Property management service', '/services/leasing': 'Leasing service',
  '/services/landlord-advisory': 'Landlord advisory service', '/services/tenant-advisory': 'Tenant advisory service',
  '/services/property-performance': 'Property performance reporting', '/services/international-client-services': 'International client services',
  '/services/takeover-management': 'Takeover management', '/services/audit-valuation': 'Audit and valuation',
};

export function linkLabel(path: string): string {
  return ARCH_BY_PATH[path]?.crumb ?? EXISTING_LABELS[path] ?? path;
}

/** Breadcrumb trail built only from ancestors that exist as routes. */
export function breadcrumbsFor(path: string): { name: string; path: string }[] {
  const trail = [{ name: 'Home', path: '/' }];
  const segs = path.split('/').filter(Boolean);
  let acc = '';
  segs.forEach((s) => {
    acc += `/${s}`;
    const label = ARCH_BY_PATH[acc]?.crumb ?? EXISTING_LABELS[acc];
    if (label) trail.push({ name: label, path: acc });
  });
  return trail;
}
