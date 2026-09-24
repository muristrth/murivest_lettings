export interface ServiceItem {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  icon: string;
  features: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  outcomes: string[];
  faqs: { q: string; a: string }[];
}

export const SERVICES: ServiceItem[] = [
  {
    slug: 'property-management',
    shortTitle: 'Management',
    title: 'Property Management',
    tagline: 'Full-service operational stewardship of your real estate assets.',
    description:
      'End-to-end management of residential and commercial property — tenant relations, rent collection, maintenance coordination, inspections, compliance and reporting.',
    icon: 'Building2',
    features: [
      { title: 'Tenant Management', description: 'Onboarding, lease administration, renewals and day-to-day tenant relations handled by a dedicated property manager.' },
      { title: 'Rent Collection', description: 'Systematic rent collection with automated reminders, arrears tracking and same-month remittance to your account.' },
      { title: 'Maintenance Coordination', description: 'Pre-vetted contractor network, job tracking, cost approvals and photographic completion records.' },
      { title: 'Periodic Inspections', description: 'Scheduled property inspections with detailed condition reports and photographic evidence.' },
      { title: 'Compliance & Statutory', description: 'Landlord licences, safety certificates, KRA compliance and statutory filing reminders managed on your behalf.' },
      { title: 'Monthly Reporting', description: 'Detailed monthly statements covering rent collected, expenses, arrears and property condition.' },
    ],
    process: [
      { step: '01', title: 'Onboarding & Audit', description: 'Property audit, document collection, compliance review and tenant transition planning.' },
      { step: '02', title: 'Systems Setup', description: 'Property registered on our platform, tenant profiles created, financial accounts configured.' },
      { step: '03', title: 'Active Management', description: 'Ongoing rent collection, maintenance, inspections and tenant communication.' },
      { step: '04', title: 'Reporting & Review', description: 'Monthly statements, quarterly performance reviews and annual strategy consultation.' },
    ],
    outcomes: [
      'Consistent rent collection above 98%',
      'Reduced void periods through proactive tenant retention',
      'Documented maintenance with cost control',
      'Full compliance with Kenyan property regulations',
    ],
    faqs: [
      { q: 'What are your management fees?', a: 'Our management fee is a percentage of collected rent, typically 8–12% depending on portfolio size and service scope. We only earn when you earn.' },
      { q: 'How quickly is rent remitted?', a: 'Rent is remitted to your account within 5 working days of collection, accompanied by a detailed monthly statement.' },
      { q: 'Do you handle both residential and commercial?', a: 'Yes. We manage residential apartments, townhouses, commercial offices and retail units across Nairobi and key Kenyan markets.' },
    ],
  },
  {
    slug: 'leasing',
    shortTitle: 'Leasing',
    title: 'Leasing & Tenant Placement',
    tagline: 'Precise tenant placement and lease structuring for optimal yield.',
    description:
      'Strategic marketing, qualified viewings, rigorous tenant vetting and lease negotiation designed to minimise void periods and secure quality tenants.',
    icon: 'KeySquare',
    features: [
      { title: 'Market-Responsive Pricing', description: 'Rental valuation grounded in comparable data and current market absorption rates.' },
      { title: 'Professional Marketing', description: 'Photography, listing copy and syndication across major portals plus our own investor network.' },
      { title: 'Tenant Vetting', description: 'Credit checks, employment verification, landlord references and affordability assessment.' },
      { title: 'Lease Structuring', description: 'Lease terms negotiated to protect your interests with clear renewal and exit provisions.' },
      { title: 'Move-In Coordination', description: 'Inventory schedule, handover inspection, utility transfers and key management.' },
    ],
    process: [
      { step: '01', title: 'Valuation', description: 'Property assessment and rental recommendation based on market comparables.' },
      { step: '02', title: 'Marketing', description: 'Professional photography, listing creation and multi-channel syndication.' },
      { step: '03', title: 'Vetting', description: 'Viewings, applicant screening, credit and reference checks.' },
      { step: '04', title: 'Placement', description: 'Lease negotiation, signing, deposit collection and move-in coordination.' },
    ],
    outcomes: [
      'Average void period under 21 days',
      'Thoroughly vetted tenants with documented affordability',
      'Leases structured for landlord protection',
      'Professional marketing that positions your property correctly',
    ],
    faqs: [
      { q: 'What is your leasing fee?', a: 'Leasing fees are typically equivalent to one month\'s rent, with reduced rates for multi-unit portfolios and repeat instructions.' },
      { q: 'How long does tenant placement take?', a: 'From instruction to signed lease typically takes 14–30 days, depending on property type, location and market conditions.' },
      { q: 'What vetting do you perform?', a: 'We conduct credit checks, employment verification, previous landlord references, affordability analysis and ID verification.' },
    ],
  },
  {
    slug: 'landlord-advisory',
    shortTitle: 'Advisory',
    title: 'Landlord Advisory',
    tagline: 'Strategic counsel for property owners navigating the Kenyan market.',
    description:
      'Portfolio-level advisory covering rental strategy, capital improvement planning, market positioning and regulatory compliance — designed to maximise long-term property performance.',
    icon: 'Lightbulb',
    features: [
      { title: 'Rental Strategy', description: 'Data-driven rental optimisation, renewal pricing and market timing advice.' },
      { title: 'Capital Improvement Planning', description: 'Cost-benefit analysis of renovations and upgrades with projected yield impact.' },
      { title: 'Portfolio Review', description: 'Holistic review of your property holdings with performance benchmarking and recommendations.' },
      { title: 'Regulatory Guidance', description: 'Compliance with Kenyan landlord-tenant law, tax obligations and statutory requirements.' },
      { title: 'Exit & Reinvestment', description: 'Sale timing advice, 1031-equivalent reinvestment planning and capital recycling strategies.' },
    ],
    process: [
      { step: '01', title: 'Discovery', description: 'Understanding your portfolio, objectives, risk tolerance and time horizon.' },
      { step: '02', title: 'Analysis', description: 'Market analysis, comparable benchmarking and financial modelling.' },
      { step: '03', title: 'Recommendations', description: 'Prioritised action plan with projected outcomes and implementation timeline.' },
      { step: '04', title: 'Implementation', description: 'Ongoing support to execute recommendations and track results.' },
    ],
    outcomes: [
      'Informed pricing and timing decisions',
      'Capital deployed where it produces the highest return',
      'Regulatory risk minimised',
      'Clear roadmap for portfolio growth and exit',
    ],
    faqs: [
      { q: 'Is advisory separate from management?', a: 'Advisory can be engaged standalone or alongside our management service. Many clients begin with management and add advisory as their portfolio grows.' },
      { q: 'Do you advise on property acquisition?', a: 'Yes. As part of Murivest Group, we can connect you to our acquisitions team for purchase advisory and due diligence.' },
    ],
  },
  {
    slug: 'tenant-advisory',
    shortTitle: 'Tenant Advisory',
    title: 'Tenant Advisory',
    tagline: 'Helping tenants find, secure and manage the right space.',
    description:
      'Representation for tenants seeking residential or commercial space — search, negotiation, lease review and ongoing tenancy support.',
    icon: 'Users',
    features: [
      { title: 'Property Search', description: 'Curated property shortlist matched to your requirements, budget and timeline.' },
      { title: 'Lease Negotiation', description: 'Rental negotiation, lease term review and concession structuring on your behalf.' },
      { title: 'Tenant Rights Guidance', description: 'Understanding your rights and obligations under Kenyan tenancy law.' },
      { title: 'Relocation Support', description: 'Utility setup, area orientation and move coordination for a smooth transition.' },
    ],
    process: [
      { step: '01', title: 'Brief', description: 'Understanding your space requirements, budget and preferences.' },
      { step: '02', title: 'Search', description: 'Curated shortlist with viewings arranged at your convenience.' },
      { step: '03', title: 'Negotiate', description: 'Rental and lease terms negotiated to protect your interests.' },
      { step: '04', title: 'Settle In', description: 'Move-in coordination, utility setup and tenancy support.' },
    ],
    outcomes: [
      'Right property at the right price',
      'Lease terms that protect you',
      'Smooth move-in with minimal disruption',
      'Ongoing support throughout your tenancy',
    ],
    faqs: [
      { q: 'Do tenants pay for this service?', a: 'Standard tenant placement is typically paid by the landlord. Specialised tenant representation for commercial space may involve a fee arrangement.' },
      { q: 'Can you help with commercial leases?', a: 'Yes. We represent tenants seeking office, retail and light industrial space, including lease review and negotiation.' },
    ],
  },
  {
    slug: 'property-performance',
    shortTitle: 'Performance',
    title: 'Property Performance & Reporting',
    tagline: 'Institutional-grade reporting that makes property performance transparent.',
    description:
      'Comprehensive financial and operational reporting that gives landlords full visibility into yield, occupancy, expenses and asset condition.',
    icon: 'TrendingUp',
    features: [
      { title: 'Monthly Statements', description: 'Rent collected, expenses incurred, arrears status and net remittance — delivered every month.' },
      { title: 'Quarterly Reviews', description: 'Performance benchmarking, market commentary and strategic recommendations each quarter.' },
      { title: 'Annual Portfolio Review', description: 'Year-end summary with total return, appreciation analysis and forward strategy.' },
      { title: 'Live Dashboard', description: 'Real-time access to your portfolio through our landlord portal — anytime, anywhere.' },
    ],
    process: [
      { step: '01', title: 'Data Collection', description: 'All transactions, maintenance and tenant activity logged systematically.' },
      { step: '02', title: 'Reconciliation', description: 'Monthly reconciliation of rent, expenses and remittances.' },
      { step: '03', title: 'Reporting', description: 'Statements and reviews delivered through the portal and via email.' },
      { step: '04', title: 'Review', description: 'Performance discussion and strategy adjustment as needed.' },
    ],
    outcomes: [
      'Complete financial transparency',
      'Performance measured against market benchmarks',
      'Data-driven decision making',
      'Audit-ready records',
    ],
    faqs: [
      { q: 'Can I access reports online?', a: 'Yes. All statements and reports are available through the landlord portal, with downloadable PDFs and exportable data.' },
      { q: 'Do you provide tax documentation?', a: 'We provide annual income and expense summaries suitable for tax filing. We can also work with your accountant directly.' },
    ],
  },
  {
    slug: 'international-client-services',
    shortTitle: 'International',
    title: 'International Client Services',
    tagline: 'Diaspora and overseas investor property management without borders.',
    description:
      'Specialised service for Kenyan diaspora and international investors who own property in Kenya — providing full management with remote access, transparent reporting and trusted local representation.',
    icon: 'Globe',
    features: [
      { title: 'Remote Onboarding', description: 'Fully digital onboarding with electronic document signing and remote property audit.' },
      { title: 'Diaspora-Friendly Reporting', description: 'Multi-currency reporting, time-zone-friendly communication and digital access to all documents.' },
      { title: 'Local Representation', description: 'We act as your eyes and ears on the ground — attending to matters that require physical presence.' },
      { title: 'Power of Attorney Support', description: 'Guidance on POA arrangements for legal and transactional matters.' },
      { title: 'Repatriation Guidance', description: 'Rental income repatriation guidance and documentation support.' },
    ],
    process: [
      { step: '01', title: 'Remote Onboarding', description: 'Digital document signing, property audit and tenant transition.' },
      { step: '02', title: 'Active Management', description: 'Full property management with remote oversight and reporting.' },
      { step: '03', title: 'Quarterly Reviews', description: 'Video consultations and detailed performance reports.' },
      { step: '04', title: 'Annual Planning', description: 'Strategy review and planning for portfolio growth or exit.' },
    ],
    outcomes: [
      'Peace of mind for overseas property owners',
      'No need to travel for routine matters',
      'Transparent income and expense tracking',
      'Trusted local representation',
    ],
    faqs: [
      { q: 'Can I manage my property from abroad?', a: 'Absolutely. Our international service is designed for diaspora owners. You receive full management with remote access to all information.' },
      { q: 'How do I receive rental income overseas?', a: 'We remit to your Kenyan account and provide guidance on repatriation. We can also work with your international bank.' },
    ],
  },
  {
    slug: 'takeover-management',
    shortTitle: 'Takeover',
    title: 'Takeover Management',
    tagline: 'Seamless transition from your current agent to Murivest Lettings.',
    description:
      'A structured transition service for landlords dissatisfied with their current managing agent — comprehensive audit, tenant communication and operational handover with zero disruption to rental income.',
    icon: 'ArrowRightCircle',
    features: [
      { title: 'Portfolio Audit', description: 'Full audit of existing management arrangements, tenant records and property condition.' },
      { title: 'Tenant Communication', description: 'Professional communication with tenants to ensure a smooth transition.' },
      { title: 'Document Transfer', description: 'Organised collection and verification of leases, deposits, statements and compliance records.' },
      { title: 'Financial Reconciliation', description: 'Reconciliation of outstanding rent, deposits and expenses at handover.' },
      { title: 'Zero-Downtime Transition', description: 'Planned transition that maintains rent collection and tenant continuity throughout.' },
    ],
    process: [
      { step: '01', title: 'Assessment', description: 'Review of current arrangements, pain points and transition requirements.' },
      { step: '02', title: 'Planning', description: 'Detailed transition plan with timeline, tenant communication and document checklist.' },
      { step: '03', title: 'Execution', description: 'Document transfer, tenant notification and systems setup.' },
      { step: '04', title: 'Normalisation', description: 'Full operational management begins with first-month reconciliation.' },
    ],
    outcomes: [
      'Smooth transition with no rental disruption',
      'Organised and verified documentation',
      'Fresh start with improved service standards',
      'Immediate visibility through our portal',
    ],
    faqs: [
      { q: 'How long does a takeover take?', a: 'A typical transition takes 14–30 days from instruction, depending on portfolio size and cooperation from the outgoing agent.' },
      { q: 'Will my tenants be affected?', a: 'Minimal impact. We communicate professionally with tenants and maintain all existing arrangements during transition.' },
    ],
  },
  {
    slug: 'audit-valuation',
    shortTitle: 'Audit',
    title: 'Audit & Valuation',
    tagline: 'Independent property audit and valuation for informed decisions.',
    description:
      'Professional property audit and rental valuation service — condition assessment, compliance review and market-value analysis for owners, buyers and lenders.',
    icon: 'ClipboardCheck',
    features: [
      { title: 'Condition Audit', description: 'Comprehensive physical inspection with photographic record and condition rating.' },
      { title: 'Compliance Review', description: 'Verification of landlord licences, safety certificates and statutory compliance.' },
      { title: 'Rental Valuation', description: 'Market rental assessment based on comparables, location and property attributes.' },
      { title: 'Investment Analysis', description: 'Yield calculation, return projection and investment-grade summary report.' },
    ],
    process: [
      { step: '01', title: 'Instruction', description: 'Scope agreed — condition audit, valuation or comprehensive assessment.' },
      { step: '02', title: 'Inspection', description: 'On-site inspection, photographic record and data collection.' },
      { step: '03', title: 'Analysis', description: 'Comparable analysis, compliance review and financial modelling.' },
      { step: '04', title: 'Report', description: 'Detailed report delivered with findings, valuation and recommendations.' },
    ],
    outcomes: [
      'Clear understanding of property condition',
      'Compliance gaps identified and addressed',
      'Accurate rental valuation',
      'Investment-grade documentation',
    ],
    faqs: [
      { q: 'Is this a RICS valuation?', a: 'We provide rental valuations and condition audits. For formal capital valuations required by lenders, we can refer you to a registered valuer.' },
      { q: 'How quickly is the report delivered?', a: 'Reports are typically delivered within 5–10 working days of inspection.' },
    ],
  },
];

export const LIFECYCLE_STAGES = [
  { id: 'management', label: 'Management', icon: 'Building2', description: 'Operational stewardship of your property' },
  { id: 'intelligence', label: 'Intelligence', icon: 'BarChart3', description: 'Data, reporting and market insight' },
  { id: 'leasing', label: 'Leasing', icon: 'KeySquare', description: 'Tenant placement and lease structuring' },
  { id: 'advisory', label: 'Advisory', icon: 'Lightbulb', description: 'Strategic counsel and portfolio planning' },
  { id: 'performance', label: 'Performance', icon: 'TrendingUp', description: 'Yield optimisation and benchmarking' },
  { id: 'capital', label: 'Capital', icon: 'Coins', description: 'Capital deployment and reinvestment' },
  { id: 'exit', label: 'Exit', icon: 'LogOut', description: 'Sale timing and execution' },
  { id: 'reinvestment', label: 'Reinvestment', icon: 'RefreshCw', description: 'Capital recycling into new opportunities' },
];

export type PropertyType = 'Residential' | 'Commercial';
export type ListingType = 'lease' | 'sale';
export type PropertyAvailability = 'Available' | 'Under Application' | 'Leased' | 'Sold';

export interface PropertyListing {
  id: string;
  slug: string;
  title: string;
  type: PropertyType;
  subtype: string;
  location: string;
  area: string | null;
  bedrooms?: number | null;
  bathrooms?: number | null;
  rent: number;
  rentPeriod?: string;
  price?: number | null;
  listingType: ListingType;
  availability: PropertyAvailability;
  featured: boolean;
  description: string;
  amenities: string[];
  images: { url: string; alt: string }[];
  createdAt: string;
}

export const PROPERTIES: PropertyListing[] = [
  {
    id: 'prop-001',
    slug: 'nairobi-parkview-apartment',
    title: 'Nairobi Parkview Apartment',
    type: 'Residential',
    subtype: 'Apartment',
    location: 'Westlands, Nairobi',
    area: '1,250 sq ft',
    bedrooms: 2,
    bathrooms: 2,
    rent: 180000,
    rentPeriod: 'month',
    listingType: 'lease',
    availability: 'Available',
    featured: true,
    description: 'Bright two-bedroom apartment with secure parking, balcony views and access to a shared gym.',
    amenities: ['Parking', 'Gym', '24/7 Security', 'Balcony'],
    images: [{ url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80', alt: 'Apartment exterior' }],
    createdAt: '2026-01-01T00:00:00.000Z',
  },
  {
    id: 'prop-002',
    slug: 'kilimani-villa',
    title: 'Kilimani Family Villa',
    type: 'Residential',
    subtype: 'Villa',
    location: 'Kilimani, Nairobi',
    area: '2,800 sq ft',
    bedrooms: 4,
    bathrooms: 3,
    rent: 320000,
    rentPeriod: 'month',
    listingType: 'lease',
    availability: 'Available',
    featured: true,
    description: 'Spacious family villa with landscaped garden, staff quarters and a quiet residential setting.',
    amenities: ['Garden', 'Staff Quarters', 'Parking', 'Swimming Pool'],
    images: [{ url: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80', alt: 'Villa exterior' }],
    createdAt: '2026-02-01T00:00:00.000Z',
  },
  {
    id: 'prop-003',
    slug: 'upper-hill-office-floor',
    title: 'Upper Hill Office Floor',
    type: 'Commercial',
    subtype: 'Office Floor',
    location: 'Upper Hill, Nairobi',
    area: '1,600 sq ft',
    bedrooms: null,
    bathrooms: 2,
    rent: 540000,
    rentPeriod: 'month',
    listingType: 'lease',
    availability: 'Under Application',
    featured: true,
    description: 'Premium office floor in a business tower with lifts, reception and close access to transport links.',
    amenities: ['Lift Access', 'Reception', 'Parking', 'Backup Power'],
    images: [{ url: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80', alt: 'Office space interior' }],
    createdAt: '2026-03-01T00:00:00.000Z',
  },
];

export const RESIDENTIAL_SUBTYPES = [
  'Apartment',
  'Villa',
  'Townhouse',
  'Maisonette',
  'Bungalow',
  'Penthouse',
  'Studio',
  'DSQ',
] as const;

export const COMMERCIAL_SUBTYPES = [
  'Office',
  'Office Floor',
  'Office to Buy',
  'Retail',
  'Shop',
  'Stall',
  'Mall Space',
  'Warehouse',
  'Industrial',
  'Mixed Use',
] as const;

export const ALL_SUBTYPES = [...RESIDENTIAL_SUBTYPES, ...COMMERCIAL_SUBTYPES] as const;

export const SUBTYPE_GROUPS: { label: string; type: PropertyType; subtypes: readonly string[] }[] = [
  { label: 'Residential', type: 'Residential', subtypes: RESIDENTIAL_SUBTYPES },
  { label: 'Commercial — Office', type: 'Commercial', subtypes: ['Office', 'Office Floor', 'Office to Buy'] },
  { label: 'Commercial — Retail & Shops', type: 'Commercial', subtypes: ['Retail', 'Shop', 'Stall', 'Mall Space'] },
  { label: 'Commercial — Industrial & Other', type: 'Commercial', subtypes: ['Warehouse', 'Industrial', 'Mixed Use'] },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export const NAV_LINKS = [
  { label: 'Services', path: '/services', children: SERVICES.map((s) => ({ label: s.shortTitle, path: `/services/${s.slug}` })) },
  { label: 'Properties', path: '/properties' },
  { label: 'Landlords', path: '/landlords' },
  { label: 'Tenants', path: '/tenants' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const PORTAL_LINKS = {
  landlord: [
    { label: 'Dashboard', path: '/portal/landlord', icon: 'LayoutDashboard' },
    { label: 'Properties', path: '/portal/landlord/properties', icon: 'Building2' },
    { label: 'Financials', path: '/portal/landlord/financials', icon: 'Wallet' },
    { label: 'Documents', path: '/portal/landlord/documents', icon: 'FileText' },
    { label: 'Approvals', path: '/portal/landlord/approvals', icon: 'CheckSquare' },
  ],
  tenant: [
    { label: 'Dashboard', path: '/portal/tenant', icon: 'LayoutDashboard' },
    { label: 'Payments', path: '/portal/tenant/payments', icon: 'CreditCard' },
    { label: 'Maintenance', path: '/portal/tenant/maintenance', icon: 'Wrench' },
    { label: 'Documents', path: '/portal/tenant/documents', icon: 'FileText' },
  ],
};

export function formatKES(amount: number): string {
  return `KES ${amount.toLocaleString('en-KE')}`;
}
