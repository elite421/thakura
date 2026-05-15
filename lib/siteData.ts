import {
  BadgeCheck,
  Building2,
  Factory,
  Globe2,
  Hammer,
  HardHat,
  Home,
  Landmark,
  MapPin,
  PackageCheck,
  Phone,
  ShieldCheck,
  Truck,
} from 'lucide-react';

export const company = {
  name: 'Thakura Infratech',
  legalName: 'Thakura INFRATECH PRIVATE LIMITED',
  tagline: 'Villa Society | Plotting | Construction | Manufacturing | Import Export',
  established: '2016',
  phone: ['+91 9415717164', '05180 359647'],
  email: 'Thakurainfratechprivatelimited@gmail.com',
  website: 'www.Thakurainfratech.com',
  address:
    'Village Sahbajpur, Post Jonihan, Fatehpur-Jahanabad Road, near Bajarangbali Temple, District Fatehpur, Uttar Pradesh, India',
  city: 'Fatehpur',
  state: 'Uttar Pradesh',
  country: 'India',
  coordinates: {
    latitude: 25.937332,
    longitude: 80.613472,
    label: '25°56\'14.4"N 80°36\'48.5"E',
  },
};

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Contact Us', href: '/contact' },
];

export const highlights = [
  { value: '2016', label: 'Established' },
  { value: '5+', label: 'Business Verticals' },
  { value: 'UP', label: 'Regional Operations' },
  { value: 'End-to-End', label: 'Project Support' },
];

export const services = [
  {
    title: 'Villa Society Development',
    description:
      'Planning and execution support for villa society projects with plotting, site coordination, construction supervision and handover assistance.',
    icon: Home,
  },
  {
    title: 'Plotting & Land Development',
    description:
      'Structured plotting support including site preparation, layout planning, access roads, utility coordination and development readiness.',
    icon: Landmark,
  },
  {
    title: 'Civil Construction Contracting',
    description:
      'Contractor services for residential, commercial and infrastructure works with practical site management and vendor coordination.',
    icon: HardHat,
  },
  {
    title: 'Manufacturing Support',
    description:
      'Manufacturing and supply-side coordination for construction-linked materials, project requirements and business operations.',
    icon: Factory,
  },
  {
    title: 'Import Export & Trading',
    description:
      'Trading, import-export and procurement services for selected goods, construction inputs and business supply requirements.',
    icon: Globe2,
  },
  {
    title: 'Project Material Supply',
    description:
      'Procurement and trader support for project materials with dependable sourcing, dispatch coordination and documentation.',
    icon: Truck,
  },
];

export const products = [
  {
    title: 'Residential Plots',
    description: 'Plotted land options for villa societies and residential development projects.',
    icon: MapPin,
  },
  {
    title: 'Villa & Building Construction',
    description: 'Construction execution and contractor support for homes, villas and local projects.',
    icon: Building2,
  },
  {
    title: 'Construction Materials',
    description: 'Trading and supply coordination for materials used in civil and development work.',
    icon: PackageCheck,
  },
  {
    title: 'Manufactured Goods',
    description: 'Manufacturing-linked business supplies and goods based on project or trading needs.',
    icon: Hammer,
  },
];

export const values = [
  { title: 'Quality Work', description: 'We focus on durable execution, practical planning and dependable delivery.', icon: BadgeCheck },
  { title: 'Transparent Dealings', description: 'Clear communication, documented processes and fair business conduct.', icon: ShieldCheck },
  { title: 'Local Commitment', description: 'Rooted in Fatehpur with a strong understanding of regional development needs.', icon: Phone },
];

export const directors = [
  {
    name: 'Shivam Kumar Gupta',
    role: 'Board of Director',
    image: "/shivam.jpg",
    description: 'Guiding the strategic vision, project planning, and operations for regional development.'
  },
  {
    name: 'Ashutosh Gupta',
    role: 'CEO',
    image: '/Ashutosh.jpg',
    description: 'Leading business development, client relations, and practical site execution.'
  }
];

export const heroImage =
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80';

export const projectImage =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80';

export const constructionImage =
  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80';
