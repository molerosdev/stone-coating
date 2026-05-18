export const site = {
  name: 'Stone Coating & Resinous',
  shortName: 'Stone Coating',
  tagline: 'Premium Flooring Renovation Across Oklahoma',
  description:
    'Stone Coating & Resinous provides professional flooring systems for residential, commercial, and industrial spaces, including epoxy coatings, resinous flooring, polished concrete, concrete sealing, stone finishes, garage floors, patios, driveways, and concrete repair.',
  serviceArea: 'Oklahoma',
  url: 'https://stonecoatingresinous.com',
  contact: {
    phone: '405-200-3145',
    email: 'Pedro@stonecoatingresinous.com',
    hours: 'Mon–Fri, 8am–5pm (CT)',
  },
  yearsExperience: 21,
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
// Homepage hero — the original stock flooring shot the client preferred.
export const heroImage: string | undefined = '/images/hero.avif';

// Customer photos used on the homepage (services preview + projects gallery).
// Picks deliberately avoid every file already shown on the /services page,
// so the home page surfaces fresh work. Folder names with spaces are
// URL-encoded so they resolve on Cloudflare Pages.
const homepageMedia = {
  polishedWarehouse:     '/images/Polished%20concrete/7.jpeg',
  polishedWarehouseAlt:  '/images/Polished%20concrete/8.jpeg',
  polishedTanReflective: '/images/Polished%20concrete/10.jpeg',
  polishedAggregate:     '/images/Polished%20concrete/12.jpeg',
  polishedPatio:         '/images/Polished%20concrete/14.jpeg',
  metallicFlow:          '/images/metalicos/3.jpeg',
  metallicShop:          '/images/metalicos/4.jpeg',
  metallicGarageBlue:    '/images/metalicos/9.jpeg',
  metallicShowroom:      '/images/metalicos/16.jpeg',
  stoneCoatingKitchen:   '/images/Stone%20coating/IMG_6941.jpeg',
  stoneCoatingInlay:     '/images/Stone%20coating/IMG_9370.jpeg',
  garageEpoxyBlue:       '/images/Stone/IMG_7208.jpeg',
  hardwoodEntry:         '/images/Stone/IMG_7209.jpeg',
  commercialCorridor:    '/images/Stone/IMG_7211.jpeg',
  quartzHallway:         '/images/Epoxy%20flake%20and%20Quartz/5.jpeg',
  brandedCommercial:     '/images/Epoxy%20flake%20and%20Quartz/14.jpeg',
};

export const services: Service[] = [
  {
    slug: 'epoxy-flooring',
    title: 'Epoxy Flooring',
    short: 'High-performance epoxy systems engineered for durability, easy maintenance, and a clean professional finish.',
    useCases: ['Garages', 'Warehouses', 'Commercial spaces', 'Retail spaces', 'Industrial floors'],
    benefits: ['Durable', 'Easy to clean', 'Professional finish', 'Stain resistant', 'High-performance surface'],
    image: homepageMedia.metallicGarageBlue,
  },
  {
    slug: 'stone-coating',
    title: 'Stone Coating',
    short: 'Decorative stone-textured finishes that transform patios, walkways, and entrances with premium appearance.',
    useCases: ['Patios', 'Decorative concrete', 'Walkways', 'Outdoor living spaces', 'Commercial entrances'],
    benefits: ['Decorative finish', 'Premium stone appearance', 'Durable surface', 'Improved curb appeal'],
    image: homepageMedia.stoneCoatingKitchen,
  },
  {
    slug: 'resinous-flooring',
    title: 'Resinous Flooring',
    short: 'Seamless resinous systems built for chemical resistance, longevity, and easy maintenance in demanding environments.',
    useCases: ['Commercial buildings', 'Industrial spaces', 'Medical offices', 'Kitchens', 'High-traffic areas'],
    benefits: ['Seamless finish', 'Strong surface protection', 'Chemical resistance depending on system', 'Easy maintenance'],
    image: homepageMedia.quartzHallway,
  },
  {
    slug: 'polished-concrete',
    title: 'Polished Concrete',
    short: 'Refined polished concrete for a modern, low-maintenance surface that reads corporate and clean.',
    useCases: ['Retail stores', 'Offices', 'Warehouses', 'Showrooms', 'Modern residential interiors'],
    benefits: ['Modern appearance', 'Long-lasting', 'Low maintenance', 'Clean corporate look'],
    image: homepageMedia.polishedWarehouse,
  },
  {
    slug: 'concrete-sealing',
    title: 'Concrete Sealing',
    short: 'Protective sealing that shields concrete from staining, weather, and wear while enhancing appearance.',
    useCases: ['Driveways', 'Patios', 'Walkways', 'Commercial concrete', 'Exterior concrete surfaces'],
    benefits: ['Surface protection', 'Helps reduce staining', 'Helps extend surface life', 'Enhances appearance'],
    image: homepageMedia.polishedWarehouseAlt,
  },
  {
    slug: 'garage-floor-coating',
    title: 'Garage Floor Coating',
    short: 'Garage floor coatings that resist stains, hold up to daily use, and deliver a clean professional finish.',
    useCases: ['Residential garages', 'Workshop spaces', 'Storage areas'],
    benefits: ['Cleaner look', 'Easier maintenance', 'Better resistance to stains', 'Professional finish'],
    image: homepageMedia.garageEpoxyBlue,
  },
  {
    slug: 'commercial-flooring',
    title: 'Commercial Flooring',
    short: 'Flooring systems specified for business environments — built for traffic, appearance, and longevity.',
    useCases: ['Offices', 'Retail', 'Restaurants', 'Salons', 'Medical spaces', 'Warehouses'],
    benefits: ['Durable', 'Professional appearance', 'Designed for traffic', 'Custom system options'],
    image: homepageMedia.brandedCommercial,
  },
  {
    slug: 'patio-pool-deck-coating',
    title: 'Patio & Pool Deck Coating',
    short: 'Decorative outdoor coatings that protect concrete and elevate the appearance of patios and pool decks.',
    useCases: ['Outdoor patios', 'Pool decks', 'Entertainment areas', 'Walkways'],
    benefits: ['Decorative finish', 'Surface protection', 'Outdoor durability', 'Improved appearance'],
    image: homepageMedia.polishedPatio,
  },
  {
    slug: 'driveway-coating',
    title: 'Driveway Coating',
    short: 'Driveway coatings engineered for curb appeal and long-term protection of exterior concrete surfaces.',
    useCases: ['Residential driveways', 'Commercial entrances', 'Exterior concrete'],
    benefits: ['Improved curb appeal', 'Added surface protection', 'Cleaner finish', 'Longer-lasting appearance'],
    image: homepageMedia.polishedTanReflective,
  },
  {
    slug: 'concrete-repair',
    title: 'Concrete Repair',
    short: 'Concrete repair that restores damaged surfaces and prepares them for a coating, sealing, or finishing system.',
    useCases: ['Cracks', 'Surface damage', 'Spalling', 'Uneven or worn concrete'],
    benefits: ['Prepares surface for coating', 'Improves safety', 'Restores appearance', 'Helps extend flooring system life'],
    image: homepageMedia.metallicShowroom,
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
  { title: 'Decorative Garage Floor', category: 'Garage Floors', service: 'Epoxy Flooring', location: 'Oklahoma', type: 'Residential', image: homepageMedia.metallicFlow },
  { title: 'Commercial Corridor Renovation', category: 'Industrial', service: 'Carpet Tile', location: 'Oklahoma', type: 'Commercial', image: homepageMedia.commercialCorridor },
  { title: 'Showroom Polished Concrete', category: 'Polished Concrete', service: 'Polished Concrete', location: 'Oklahoma', type: 'Commercial', image: homepageMedia.polishedAggregate },
  { title: 'Decorative Stone Inlay Floor', category: 'Stone Coating', service: 'Stone Coating', location: 'Oklahoma', type: 'Commercial', image: homepageMedia.stoneCoatingInlay },
  { title: 'Hardwood Residential Entry', category: 'Residential', service: 'Hardwood', location: 'Oklahoma', type: 'Residential', image: homepageMedia.hardwoodEntry },
  { title: 'Tattoo Studio Metallic Epoxy', category: 'Commercial', service: 'Metallic Epoxy', location: 'Oklahoma', type: 'Commercial', image: homepageMedia.metallicShop },
  { title: 'Branded Commercial Floor', category: 'Commercial', service: 'Epoxy Coating', location: 'Oklahoma', type: 'Commercial', image: homepageMedia.brandedCommercial },
  { title: 'Premium Polished Patio', category: 'Patio / Pool Deck', service: 'Polished Concrete', location: 'Oklahoma', type: 'Residential', image: homepageMedia.polishedPatio },
  { title: 'Premium Showroom Lobby', category: 'Commercial', service: 'Polished Concrete', location: 'Oklahoma', type: 'Commercial', image: homepageMedia.polishedWarehouseAlt },
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

// Full capabilities list shown on the About page. Sourced from the
// project_update.md "About Us" section provided by the client.
export const capabilities = [
  'Polished concrete finishes with multiple sheen levels and aggregate exposure classes',
  'Sealed and stained concrete systems',
  'Decorative and restorative concrete overlays',
  'Epoxy flake flooring systems with integrated cove base',
  'Epoxy quartz flooring systems with integrated cove base',
  'Urethane cement and heavy-duty resinous flooring systems',
  'Single-color epoxy coatings',
  'Terrazzo restoration and refinishing',
  'Ceramic tile installation',
  'Solid hardwood and engineered hardwood flooring',
  'Luxury Vinyl Tile (LVT)',
  'Vinyl Composition Tile (VCT)',
  'Sheet vinyl flooring systems',
  'Carpet tile and walk-off carpet systems',
  'Rubber stair tread and landing systems',
  'Rubber gym and athletic flooring',
  'Self-leveling underlayments',
  'Moisture mitigation and concrete remediation systems',
];

// Industries we serve, used in the About narrative.
export const industriesServed = [
  'Healthcare facilities',
  'Manufacturing plants',
  'Retail environments',
  'Schools',
  'Warehouses',
  'Fitness centers',
  'Corporate spaces',
];

export type TeamMember = {
  name: string;
  role: string;
  phone: string;
  email: string;
};

export const team: TeamMember[] = [
  {
    name: 'Pedro Carrillo',
    role: 'Owner',
    phone: '405-200-3145',
    email: 'Pedro@stonecoatingresinous.com',
  },
  {
    name: 'Angel Gonzalez',
    role: 'Estimator',
    phone: '405-596-0739',
    email: 'Agonzalez@stonecoatingresinous.com',
  },
  {
    name: 'Pedro Arturo Carrillo',
    role: 'Estimator',
    phone: '572-235-3717',
    email: 'arturo@stonecoatingresinous.com',
  },
  {
    name: 'Victor Carrillo',
    role: 'Estimator',
    phone: '405-394-4540',
    email: 'Victor@stonecoatingresinous.com',
  },
];

// Detailed services for the /services page. Each entry maps a folder under
// /public/images to a service from project_update.md, with 5–7 hand-picked
// images. Filenames are encoded at render time so spaces in folder paths
// resolve correctly on Cloudflare Pages.
export type FlooringService = {
  slug: string;
  title: string;
  blurb: string;
  details?: string;
  folder: string;
  images: string[];
  applications?: string[];
  highlights?: string[];
};

export const flooringServices: FlooringService[] = [
  {
    slug: 'polished-concrete',
    title: 'Polished Concrete',
    blurb:
      'Mechanically refined concrete polished with progressively finer diamond abrasives and densifiers — a durable, low-maintenance floor with excellent light reflectivity and a clean, modern appearance.',
    details:
      'Available in Level 1 matte, Level 2 satin, and Level 3 high-gloss finishes, with Class A cream, Class B salt-and-pepper, or Class C full aggregate exposure depending on the desired look.',
    folder: 'Polished concrete',
    images: ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg'],
    applications: ['Warehouses', 'Retail & showrooms', 'Offices', 'Institutional facilities'],
    highlights: [
      'Reduces dusting and ongoing maintenance',
      'Improves ambient lighting through reflectivity',
      'Long service life on existing slabs',
    ],
  },
  {
    slug: 'class-c-level-2-antislip',
    title: 'Class C – Level 2 Polished Concrete with Anti-Slip',
    blurb:
      'Level 2 satin polish over a Class C full aggregate exposure with an anti-slip additive — a balanced semi-gloss appearance engineered for safer commercial environments.',
    folder: 'Class C Level 2 polished concrete with antislip',
    images: ['1.jpeg', '2.jpeg', '3.jpeg'],
    applications: ['Schools', 'Healthcare corridors', 'Retail floors', 'Hospitality'],
    highlights: [
      'Decorative terrazzo-like aggregate finish',
      'Anti-slip additive for traction in traffic areas',
      'Moderate sheen that hides surface variation',
    ],
  },
  {
    slug: 'class-c-level-3',
    title: 'Class C – Level 3 Polished Concrete',
    blurb:
      'A Level 3 high-gloss "wet look" with full Class C aggregate exposure — a premium reflective surface that showcases stone variation for showrooms, lobbies, and high-end retail.',
    folder: 'Class C Level 3 polished concrete',
    images: ['1.jpeg', '2.jpeg', '3.jpeg'],
    applications: ['Showrooms', 'Lobbies', 'High-end retail', 'Hospitality'],
    highlights: [
      'Maximum reflectivity and depth of finish',
      'Strong decorative aggregate variation',
      'Resists wear in heavy foot-traffic zones',
    ],
  },
  {
    slug: 'flake-epoxy',
    title: 'Epoxy Flake System Floor',
    blurb:
      'Decorative vinyl flakes broadcast into an epoxy base coat and sealed with a protective topcoat — a seamless, slip-resistant, chemical-resistant resinous floor with texture and color variation.',
    details:
      'Available with an integrated cove base that extends 4–6 inches up the wall to eliminate seams and protect against moisture, dirt, and bacteria.',
    folder: 'Flake epoxy',
    images: ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg'],
    applications: ['Commercial garages', 'Locker rooms', 'Healthcare', 'Kitchens', 'Veterinary clinics'],
    highlights: [
      'Slip-resistant decorative finish',
      'Chemical and abrasion resistance',
      'Easy to clean and sanitize',
    ],
  },
  {
    slug: 'double-broadcast-epoxy',
    title: 'Double Broadcast Epoxy',
    blurb:
      'A heavy-duty double-broadcast flake build delivering extra thickness and texture for impact-prone commercial and industrial environments.',
    folder: 'Doubleb broadcast epoxy',
    images: ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg'],
    applications: ['Manufacturing floors', 'Service bays', 'Workshops', 'Industrial garages'],
    highlights: [
      'Maximum build for impact resistance',
      'Aggressive texture for slip safety',
      'Long service life under heavy use',
    ],
  },
  {
    slug: 'flake-and-quartz',
    title: 'Epoxy Flake & Quartz',
    blurb:
      'Colored quartz aggregate combined with epoxy flake systems in multiple resin layers — a highly durable, textured surface with decorative variation and excellent slip resistance.',
    details:
      'Pairs well with an integrated cove base for hygienic wall-to-floor transitions in sanitary environments.',
    folder: 'Epoxy flake and Quartz',
    images: ['1.jpeg', '4.jpeg', '8.jpeg', '13.jpeg', '17.jpeg', '21.jpeg'],
    applications: ['Hospitals', 'Laboratories', 'Food processing', 'Restrooms', 'Pharma facilities'],
    highlights: [
      'Extreme durability under heavy traffic',
      'Chemical and impact resistance',
      'Decorative multi-color finish',
    ],
  },
  {
    slug: 'single-color-epoxy',
    title: 'Single-Color Epoxy',
    blurb:
      'Solid-color resin coatings over prepared concrete for a smooth, seamless, hygienic finish — available in gloss, satin, or matte sheen depending on operational needs.',
    folder: 'Single coating epoxy',
    images: ['1.jpeg', '2.jpeg', '3.jpeg'],
    applications: ['Warehouses', 'Mechanical rooms', 'Manufacturing', 'Storage areas'],
    highlights: [
      'Seamless and easy to clean',
      'Chemical-resistant surface',
      'Cost-effective industrial finish',
    ],
  },
  {
    slug: 'metallic-epoxy',
    title: 'Metallic Epoxy Finishes',
    blurb:
      'Decorative metallic-pigmented epoxy systems that create depth, movement, and a high-end reflective finish — a striking option for spaces that need a designer-grade floor.',
    folder: 'metalicos',
    images: ['1.jpeg', '2.jpeg', '6.jpeg', '10.jpeg', '15.jpeg', '20.jpeg'],
    applications: ['Showrooms', 'Retail', 'Restaurants', 'Residential interiors', 'Commercial lobbies'],
    highlights: [
      'Unique, fluid metallic patterning',
      'High-gloss reflective surface',
      'Seamless, easy-clean finish',
    ],
  },
  {
    slug: 'terrazzo-restoration',
    title: 'Terrazzo Restoration',
    blurb:
      'Repair, refinish, and polish existing terrazzo floors — diamond grinding, crack and chip repair, honing, and sealing to restore the original appearance and extend service life.',
    folder: 'Terrazo restoration',
    images: ['1.jpeg', '2.jpeg', '3.jpeg'],
    applications: ['Schools', 'Historic buildings', 'Civic facilities', 'Commercial lobbies'],
    highlights: [
      'Restores original character of the floor',
      'Lower cost than replacement',
      'Sustainable renovation approach',
    ],
  },
  {
    slug: 'stone-coating',
    title: 'Stone Coating',
    blurb:
      'Decorative stone-textured finishes for patios, walkways, and commercial entrances — premium stone appearance combined with a durable, weather-resistant coating system.',
    folder: 'Stone coating',
    images: [
      'IMG_1287.jpeg',
      'IMG_1315.jpeg',
      'IMG_1322.jpeg',
      'IMG_1434.jpeg',
      'IMG_1502.jpeg',
      'IMG_6922.jpeg',
    ],
    applications: ['Patios', 'Walkways', 'Pool decks', 'Commercial entrances'],
    highlights: [
      'Premium decorative stone appearance',
      'Outdoor-durable surface protection',
      'Improves curb appeal on existing concrete',
    ],
  },
  {
    slug: 'decorative-stone',
    title: 'Decorative Stone Surfaces',
    blurb:
      'Natural and engineered stone surface installations for premium architectural applications — a refined finish that complements high-end residential and commercial spaces.',
    folder: 'Stone',
    images: [
      'IMG_7195.jpeg',
      'IMG_7202.jpeg',
      'IMG_7203.jpeg',
      'IMG_7205.jpeg',
      'IMG_7207.jpeg',
      'IMG_7510.jpeg',
    ],
    applications: ['Architectural feature walls', 'Entryways', 'Hospitality spaces', 'Custom installations'],
    highlights: [
      'Natural stone character',
      'Durable, long-life surface',
      'Pairs with polished concrete and resinous systems',
    ],
  },
  {
    slug: 'carpet-tile-wood',
    title: 'Carpet, Tile & Wood',
    blurb:
      'Modular carpet tile, ceramic and porcelain tile, and hardwood / engineered hardwood systems for offices, retail, hospitality, multifamily, and institutional environments.',
    details:
      'Includes carpet tile and walk-off systems, ceramic and porcelain tile, solid and engineered hardwood, LVT, VCT, and sheet vinyl — matched to traffic, hygiene, and design requirements.',
    folder: 'Carpet, Tile and wood',
    images: [
      'WhatsApp Image 2026-05-13 at 3.39.49 PM (13).jpeg',
      'WhatsApp Image 2026-05-13 at 3.39.50 PM (1).jpeg',
      'WhatsApp Image 2026-05-13 at 3.39.49 PM (5).jpeg',
      'WhatsApp Image 2026-05-13 at 3.39.49 PM (4).jpeg',
      'WhatsApp Image 2026-05-13 at 3.39.47 PM.jpeg',
      'WhatsApp Image 2026-05-13 at 3.39.49 PM.jpeg',
      'WhatsApp Image 2026-05-13 at 3.39.50 PM (9).jpeg',
    ],
    applications: ['Offices', 'Retail', 'Hospitality', 'Multifamily', 'Healthcare'],
    highlights: [
      'Full range of soft and hard surface options',
      'Acoustic and sanitary specifications met',
      'Design-flexible commercial selections',
    ],
  },
];

