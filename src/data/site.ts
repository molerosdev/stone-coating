export const site = {
  name: 'Stone Coating & Resinous',
  shortName: 'Stone Coating',
  tagline: 'Premium Flooring Renovation Across Oklahoma',
  description:
    'Stone Coating & Resinous provides professional flooring systems for residential, commercial, and industrial spaces, including epoxy coatings, resinous flooring, polished concrete, concrete sealing, stone finishes, garage floors, patios, driveways, and concrete repair.',
  serviceArea: 'Oklahoma',
  url: 'https://stonecoatingresinous.com',
  contact: {
    phone: 'To be provided',
    email: 'To be provided',
    hours: 'To be provided',
  },
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export const heroTrustPoints = [
  'Residential & Commercial Flooring',
  'Durable Surface Systems',
  'Oklahoma Service Area',
  'Professional Finish & Installation',
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  useCases: string[];
  benefits: string[];
  image?: string;
};

// Hero background image (full-bleed). Replace with a real Stone Coating photo when available.
export const heroImage: string | undefined = '/images/hero.avif';

// Pool of stock flooring photos (currently temporary stand-ins until real Stone Coating photos arrive).
// To rearrange which photo appears under which service or project, reorder the entries below
// or change the index used in the `services` / `projectPlaceholders` arrays.
const stock = [
  '/images/photo-1559252092-7a9cc9ef1933.avif',
  '/images/photo-1603143996993-8168264f15b8.avif',
  '/images/photo-1646618697079-3de96be2af49.avif',
  '/images/photo-1724477271249-6bf04c50c74c.avif',
  '/images/photo-1754073169000-7669259b9b52.avif',
  '/images/photo-1771678040129-477a44bd37ea.avif',
  '/images/photo-1772305336606-989a457ffbae.avif',
  '/images/photo-1772306814076-ff65f53ac438.avif',
  '/images/premium_photo-1678447713711-b21041bc4447.avif',
];

export const services: Service[] = [
  {
    slug: 'epoxy-flooring',
    title: 'Epoxy Flooring',
    short: 'High-performance epoxy systems engineered for durability, easy maintenance, and a clean professional finish.',
    useCases: ['Garages', 'Warehouses', 'Commercial spaces', 'Retail spaces', 'Industrial floors'],
    benefits: ['Durable', 'Easy to clean', 'Professional finish', 'Stain resistant', 'High-performance surface'],
    image: stock[0],
  },
  {
    slug: 'stone-coating',
    title: 'Stone Coating',
    short: 'Decorative stone-textured finishes that transform patios, walkways, and entrances with premium appearance.',
    useCases: ['Patios', 'Decorative concrete', 'Walkways', 'Outdoor living spaces', 'Commercial entrances'],
    benefits: ['Decorative finish', 'Premium stone appearance', 'Durable surface', 'Improved curb appeal'],
    image: stock[1],
  },
  {
    slug: 'resinous-flooring',
    title: 'Resinous Flooring',
    short: 'Seamless resinous systems built for chemical resistance, longevity, and easy maintenance in demanding environments.',
    useCases: ['Commercial buildings', 'Industrial spaces', 'Medical offices', 'Kitchens', 'High-traffic areas'],
    benefits: ['Seamless finish', 'Strong surface protection', 'Chemical resistance depending on system', 'Easy maintenance'],
    image: stock[2],
  },
  {
    slug: 'polished-concrete',
    title: 'Polished Concrete',
    short: 'Refined polished concrete for a modern, low-maintenance surface that reads corporate and clean.',
    useCases: ['Retail stores', 'Offices', 'Warehouses', 'Showrooms', 'Modern residential interiors'],
    benefits: ['Modern appearance', 'Long-lasting', 'Low maintenance', 'Clean corporate look'],
    image: stock[3],
  },
  {
    slug: 'concrete-sealing',
    title: 'Concrete Sealing',
    short: 'Protective sealing that shields concrete from staining, weather, and wear while enhancing appearance.',
    useCases: ['Driveways', 'Patios', 'Walkways', 'Commercial concrete', 'Exterior concrete surfaces'],
    benefits: ['Surface protection', 'Helps reduce staining', 'Helps extend surface life', 'Enhances appearance'],
    image: stock[4],
  },
  {
    slug: 'garage-floor-coating',
    title: 'Garage Floor Coating',
    short: 'Garage floor coatings that resist stains, hold up to daily use, and deliver a clean professional finish.',
    useCases: ['Residential garages', 'Workshop spaces', 'Storage areas'],
    benefits: ['Cleaner look', 'Easier maintenance', 'Better resistance to stains', 'Professional finish'],
    image: stock[5],
  },
  {
    slug: 'commercial-flooring',
    title: 'Commercial Flooring',
    short: 'Flooring systems specified for business environments — built for traffic, appearance, and longevity.',
    useCases: ['Offices', 'Retail', 'Restaurants', 'Salons', 'Medical spaces', 'Warehouses'],
    benefits: ['Durable', 'Professional appearance', 'Designed for traffic', 'Custom system options'],
    image: stock[6],
  },
  {
    slug: 'patio-pool-deck-coating',
    title: 'Patio & Pool Deck Coating',
    short: 'Decorative outdoor coatings that protect concrete and elevate the appearance of patios and pool decks.',
    useCases: ['Outdoor patios', 'Pool decks', 'Entertainment areas', 'Walkways'],
    benefits: ['Decorative finish', 'Surface protection', 'Outdoor durability', 'Improved appearance'],
    image: stock[7],
  },
  {
    slug: 'driveway-coating',
    title: 'Driveway Coating',
    short: 'Driveway coatings engineered for curb appeal and long-term protection of exterior concrete surfaces.',
    useCases: ['Residential driveways', 'Commercial entrances', 'Exterior concrete'],
    benefits: ['Improved curb appeal', 'Added surface protection', 'Cleaner finish', 'Longer-lasting appearance'],
    image: stock[8],
  },
  {
    slug: 'concrete-repair',
    title: 'Concrete Repair',
    short: 'Concrete repair that restores damaged surfaces and prepares them for a coating, sealing, or finishing system.',
    useCases: ['Cracks', 'Surface damage', 'Spalling', 'Uneven or worn concrete'],
    benefits: ['Prepares surface for coating', 'Improves safety', 'Restores appearance', 'Helps extend flooring system life'],
    image: stock[0],
  },
];

export const differentiators = [
  {
    title: 'Surface Preparation First',
    description: 'Proper preparation helps the final flooring system bond correctly and last longer.',
  },
  {
    title: 'Residential & Commercial Experience',
    description: 'Solutions for garages, patios, warehouses, offices, retail spaces, and industrial environments.',
  },
  {
    title: 'Durable Finish Options',
    description: 'Systems designed for strength, appearance, chemical resistance, and easy maintenance.',
  },
  {
    title: 'Professional Project Communication',
    description: 'Clear expectations, organized scheduling, and a clean project workflow.',
  },
];

export const customers = [
  { title: 'Homeowners', description: 'Garages, patios, driveways, and interior concrete surfaces upgraded with durable, attractive flooring systems.' },
  { title: 'Commercial Property Owners', description: 'Coatings and finishes that hold up to daily traffic while presenting a clean, professional appearance.' },
  { title: 'Contractors', description: 'A reliable flooring partner for projects that require professional preparation and finish work.' },
  { title: 'Property Managers', description: 'Renovation systems for multi-unit properties, common areas, and tenant-facing spaces.' },
  { title: 'Warehouses & Industrial Spaces', description: 'Heavy-duty resinous and epoxy systems built for forklift traffic, equipment, and chemical exposure.' },
  { title: 'Restaurants & Retail', description: 'Seamless, easy-to-clean floors that meet the appearance and durability needs of customer-facing spaces.' },
  { title: 'Medical Offices & Salons', description: 'Hygienic, low-maintenance flooring with a refined finish for professional environments.' },
  { title: 'Garages, Patios & Driveways', description: 'Decorative and protective coatings for the surfaces homeowners care about most.' },
];

export const processSteps = [
  { num: '01', title: 'Project Consultation', description: 'We review your space, goals, service type, and expected use.' },
  { num: '02', title: 'Surface Evaluation', description: 'We inspect the existing concrete or flooring condition to identify preparation needs.' },
  { num: '03', title: 'System Recommendation', description: 'We recommend the right coating, resinous system, polished concrete, sealing, or repair option.' },
  { num: '04', title: 'Preparation & Installation', description: 'The surface is prepared and the selected flooring system is professionally installed.' },
  { num: '05', title: 'Final Review', description: 'We review the completed project and provide maintenance recommendations.' },
];

export const faqs = [
  {
    question: 'What types of flooring systems do you install?',
    answer:
      'We install epoxy flooring, stone coating, resinous flooring, polished concrete, concrete sealing, garage floor coating, commercial flooring, patio and pool deck coating, driveway coating, and concrete repair.',
  },
  {
    question: 'Do you work with both residential and commercial clients?',
    answer:
      'Yes. We serve homeowners, commercial property owners, contractors, property managers, and industrial facilities across Oklahoma.',
  },
  {
    question: 'How long does a flooring renovation project take?',
    answer:
      'Project length depends on the size of the space, the system selected, and the condition of the existing surface. We provide a project timeline as part of every quote.',
  },
  {
    question: 'Can you repair damaged concrete before coating it?',
    answer:
      'Yes. Concrete repair is part of our process when needed. Cracks, spalling, and surface damage are addressed during preparation so the finished system bonds correctly.',
  },
  {
    question: 'Do you offer garage floor coating?',
    answer:
      'Yes. Garage floor coatings are one of our most requested services for both residential garages and workshop spaces.',
  },
  {
    question: 'Can I submit pictures of my existing floor before scheduling?',
    answer:
      'Yes. The contact form accepts up to three photos so we can review the surface condition before responding to your quote request.',
  },
  {
    question: 'What areas in Oklahoma do you serve?',
    answer:
      'We provide flooring renovation services across Oklahoma. Reach out through the contact form with your project location and we will confirm availability.',
  },
];

export const whyChooseUs = [
  { title: 'Residential and Commercial Capabilities', description: 'Solutions sized for a single-car garage or a multi-thousand-square-foot facility.' },
  { title: 'Professional Surface Preparation', description: 'Preparation drives durability. Every project starts with the right prep for the system selected.' },
  { title: 'Multiple Flooring System Options', description: 'Epoxy, resinous, polished concrete, sealing, and decorative finishes for any environment.' },
  { title: 'Premium Finish Selection', description: 'Color, texture, and finish options chosen for appearance and long-term performance.' },
  { title: 'Oklahoma-Based Service Focus', description: 'Local team serving residential, commercial, and industrial clients across the state.' },
  { title: 'Quote-Driven Project Planning', description: 'Clear project scope, timeline, and expectations established before work begins.' },
];

export const values = [
  'Professional workmanship',
  'Clear communication',
  'Durable results',
  'Clean project execution',
  'Long-term value',
  'Premium appearance',
];

export const projectCategories = [
  'All',
  'Residential',
  'Commercial',
  'Industrial',
  'Garage Floors',
  'Polished Concrete',
  'Stone Coating',
  'Patio / Pool Deck',
  'Driveway',
  'Concrete Repair',
];

export type ProjectCategory = (typeof projectCategories)[number];

export type Project = {
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  service: string;
  location: string;
  type: 'Residential' | 'Commercial' | 'Industrial';
  image?: string;
};

export const projectPlaceholders: Project[] = [
  { title: 'Garage Floor Renovation', category: 'Garage Floors', service: 'Epoxy Flooring', location: 'Oklahoma', type: 'Residential', image: stock[5] },
  { title: 'Warehouse Flooring System', category: 'Industrial', service: 'Resinous Flooring', location: 'Oklahoma', type: 'Industrial', image: stock[2] },
  { title: 'Showroom Polished Concrete', category: 'Polished Concrete', service: 'Polished Concrete', location: 'Oklahoma', type: 'Commercial', image: stock[3] },
  { title: 'Backyard Patio Finish', category: 'Patio / Pool Deck', service: 'Stone Coating', location: 'Oklahoma', type: 'Residential', image: stock[1] },
  { title: 'Pool Deck Resurfacing', category: 'Patio / Pool Deck', service: 'Patio & Pool Deck Coating', location: 'Oklahoma', type: 'Residential', image: stock[7] },
  { title: 'Retail Floor Refinish', category: 'Commercial', service: 'Commercial Flooring', location: 'Oklahoma', type: 'Commercial', image: stock[6] },
  { title: 'Driveway Coating Project', category: 'Driveway', service: 'Driveway Coating', location: 'Oklahoma', type: 'Residential', image: stock[8] },
  { title: 'Concrete Crack Repair', category: 'Concrete Repair', service: 'Concrete Repair', location: 'Oklahoma', type: 'Commercial', image: stock[0] },
  { title: 'Commercial Entrance Stone Coating', category: 'Stone Coating', service: 'Stone Coating', location: 'Oklahoma', type: 'Commercial', image: stock[4] },
];

export const serviceWantedOptions = [
  'Epoxy Flooring',
  'Stone Coating',
  'Resinous Flooring',
  'Polished Concrete',
  'Concrete Sealing',
  'Garage Floor Coating',
  'Commercial Flooring',
  'Patio / Pool Deck Coating',
  'Driveway Coating',
  'Concrete Repair',
  'Not Sure / Need Recommendation',
];

export const propertyTypeOptions = [
  'Residential',
  'Commercial',
  'Industrial',
  'Property Management',
  'Contractor / Builder',
  'Other',
];

export const contactMethodOptions = ['Phone Call', 'Text Message', 'Email'];
