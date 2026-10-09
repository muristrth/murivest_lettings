/**
 * "Explore" navigation group (header mega-menu, mobile accordion and footer).
 * Only routes that exist. Insights, Research and People are intentionally
 * omitted until they carry published content.
 */
export interface NavGroup {
  heading: string;
  links: { label: string; path: string }[];
}

export const EXPLORE_GROUPS: NavGroup[] = [
  {
    heading: 'Find & lease',
    links: [
      { label: 'Properties for lease and sale', path: '/properties' },
      { label: 'Commercial property to let', path: '/lease' },
      { label: 'Find a property', path: '/find' },
      { label: 'Submit a requirement', path: '/tenants/submit-requirement' },
    ],
  },
  {
    heading: 'Markets',
    links: [
      { label: 'Markets overview', path: '/markets' },
      { label: 'Kenya', path: '/markets/africa/kenya' },
      { label: 'Nairobi', path: '/markets/africa/kenya/nairobi' },
      { label: 'International', path: '/international' },
    ],
  },
  {
    heading: 'Who we serve',
    links: [
      { label: 'Occupiers', path: '/occupiers' },
      { label: 'Sectors', path: '/sectors' },
      { label: 'Landlords: submit a property', path: '/landlords/submit-property' },
    ],
  },
  {
    heading: 'Advisory & management',
    links: [
      { label: 'Property advisory', path: '/advisory' },
      { label: 'Property management', path: '/property-management' },
      { label: 'Client portals', path: '/portals' },
      { label: 'About Murivest Lettings', path: '/about/murivest-lettings' },
    ],
  },
];
