// ============================================================
// PORTFOLIO DATA — Edit this file to update all content
// ============================================================

export const siteConfig = {
  name: 'Manish Yadav',
  monogram: 'MY',
  title: 'CTO × CMO | Developer | Tech Entrepreneur',
  company: 'ArixByte Ltd',
  siteUrl: 'https://manishyadav.dev', // TODO: Update with actual domain
  ogImage: '/images/og-image.jpg',
  description:
    'Manish Yadav — CTO × CMO at ArixByte. Developer, builder, and tech entrepreneur crafting digital products, infrastructure, and brands.',
};

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  topline: 'Building Digital Experiences',
  greeting: "Hey, I'm",
  name: 'MANISH YADAV',
  headline: ['CTO × CMO', 'Developer. Builder. Entrepreneur.'],
  description:
    'I turn ideas into digital products — from scalable infrastructure and automation to web applications, Discord ecosystems, and emerging mobile experiences.',
  cta: {
    primary: { label: 'Explore My Work', href: '#projects' },
    secondary: { label: "Let's Connect", href: '#contact' },
  },
  sideText: ['TECHNOLOGY', 'MEETS', 'CREATIVITY'],
  rotatingDescriptors: [
    'Founder Mindset',
    'Engineering Precision',
    'Creative Vision',
  ],
  portrait: '/images/portrait.jpg',
  availability: 'Available for projects', // Edit or set to '' to hide
  linkedIn: '', // TODO: Add your LinkedIn URL
};

export const about = {
  sectionLabel: 'A LITTLE ABOUT ME',
  heading: 'Building at the\nintersection of\ntechnology & vision',
  bio: [
    "I'm Manish Yadav — CTO and CMO at ArixByte, where I lead both the technical architecture and the brand direction of a growing technology platform. My work spans across software development, infrastructure engineering, product building, branding, and business strategy.",
    'From Discord bot ecosystems and hosting infrastructure to full-stack web applications and Android development, I operate across the full spectrum of modern digital product creation. I believe in building systems that are robust, experiences that are thoughtful, and brands that leave a lasting impression.',
  ],
  highlight:
    "I don't just build software. I build the systems, experiences, and brands behind it.",
  capabilities: [
    'CTO × CMO at ArixByte',
    'Discord bot development & automation',
    'Hosting infrastructure & server management',
    'Full-stack web development',
    'Android application development',
    'Product strategy & digital branding',
  ],
};

export const expertise = {
  sectionLabel: 'EXPERTISE & SKILLS',
  heading: 'Technical\nCapabilities',
  categories: [
    {
      title: 'Development',
      icon: 'Code2',
      skills: [
        'Python',
        'JavaScript / TypeScript',
        'Node.js',
        'HTML / CSS',
        'Full-stack Web Development',
        'Android Development',
      ],
    },
    {
      title: 'Infrastructure & Systems',
      icon: 'Server',
      skills: [
        'Linux Server Administration',
        'Docker',
        'Pterodactyl',
        'Hosting Infrastructure',
        'MongoDB',
        'Deployment & Troubleshooting',
      ],
    },
    {
      title: 'Discord Ecosystem',
      icon: 'Bot',
      skills: [
        'Discord Bot Development',
        'Moderation & Automation',
        'Interactive Dashboards',
        'API Integrations',
        'Server Management Systems',
      ],
    },
    {
      title: 'Business & Creative',
      icon: 'Lightbulb',
      skills: [
        'Technical Leadership',
        'Product Planning',
        'Branding & Marketing',
        'UI/UX Design',
        'Digital Product Strategy',
      ],
    },
  ],
};

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  filterCategory: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    id: 'arixbyte',
    number: '01',
    title: 'ArixByte',
    category: 'Hosting Infrastructure & Technology Business',
    filterCategory: 'Infrastructure',
    description:
      'A hosting and technology platform focused on game servers, web hosting, bot hosting, databases, and developer infrastructure.',
    tags: ['Hosting', 'Infrastructure', 'Pterodactyl', 'Databases'],
    image: '/images/projects/arixbyte.jpg', // TODO: Add screenshot
    liveUrl: '', // TODO: Add ArixByte URL
  },
  {
    id: 'ender-bot',
    number: '02',
    title: 'Ender Bot',
    category: 'Discord Automation & Dashboard',
    filterCategory: 'Automation',
    description:
      'A multipurpose Discord bot ecosystem featuring moderation, server configuration, automation, support features, and a companion dashboard.',
    tags: ['Python', 'Discord API', 'MongoDB', 'Dashboard'],
    image: '/images/projects/enderbot.jpg', // TODO: Add screenshot
  },
  {
    id: 'aegra',
    number: '03',
    title: 'AEGRA',
    category: 'Android Safety Application',
    filterCategory: 'Mobile',
    description:
      'An Android safety application focused on emergency assistance, trusted contacts, location sharing, and personal safety features.',
    tags: ['Android', 'Kotlin', 'Location Services', 'APIs'],
    image: '/images/projects/aegra.jpg', // TODO: Add screenshot
  },
  {
    id: 'web-experiences',
    number: '04',
    title: 'Personal Web Experiences',
    category: 'Web Development',
    filterCategory: 'Development',
    description:
      'Responsive websites and dashboards designed to combine functionality, usability, and distinctive visual identity.',
    tags: ['Web Development', 'UI/UX', 'APIs'],
    image: '/images/projects/web.jpg', // TODO: Add screenshot
  },
  {
    id: 'hosting-automation',
    number: '05',
    title: 'Hosting Automation',
    category: 'Infrastructure & Automation',
    filterCategory: 'Automation',
    description:
      'Custom server environments, deployment workflows, hosting configurations, and management tools.',
    tags: ['Docker', 'Linux', 'Automation', 'Server Management'],
    image: '/images/projects/automation.jpg', // TODO: Add screenshot
  },
];

export const projectFilters = [
  'All',
  'Development',
  'Infrastructure',
  'Automation',
  'Mobile',
];

export type TimelineEntry = {
  date: string;
  role: string;
  organization: string;
  description: string;
  skills: string[];
  current?: boolean;
};

export const timeline: TimelineEntry[] = [
  {
    date: '2024 — Present', // TODO: Update with actual start date
    role: 'CTO × CMO',
    organization: 'ArixByte Ltd',
    description:
      'Leading technology architecture, product development, infrastructure operations, and brand strategy for a growing hosting and technology platform.',
    skills: [
      'Technical Leadership',
      'Product Development',
      'Infrastructure',
      'Branding',
    ],
    current: true,
  },
  // TODO: Add more verified experience entries below
  // {
  //   date: 'YYYY — YYYY',
  //   role: 'Role Title',
  //   organization: 'Organization',
  //   description: 'Description of responsibilities and achievements.',
  //   skills: ['Skill 1', 'Skill 2'],
  // },
];

export const whatIDo = [
  {
    title: 'Technical Leadership',
    description:
      'Guiding technology decisions, architecture planning, and engineering teams toward building robust digital products.',
  },
  {
    title: 'Product Development',
    description:
      'Transforming ideas into working software — from concept and architecture through development and launch.',
  },
  {
    title: 'Infrastructure Planning',
    description:
      'Designing and managing hosting environments, deployment pipelines, and server infrastructure at scale.',
  },
  {
    title: 'Business & Brand Growth',
    description:
      'Building brand identity, marketing strategy, and business operations alongside the technical foundations.',
  },
];

export const process = [
  {
    step: '01',
    title: 'Discover',
    description: 'Understand the idea, objectives, and users.',
  },
  {
    step: '02',
    title: 'Plan',
    description: 'Define the architecture, features, and roadmap.',
  },
  {
    step: '03',
    title: 'Build',
    description:
      'Develop the product with maintainable, practical engineering.',
  },
  {
    step: '04',
    title: 'Test',
    description: 'Validate functionality, fix issues, and improve performance.',
  },
  {
    step: '05',
    title: 'Launch & Improve',
    description: 'Deploy, monitor, and iterate based on feedback.',
  },
];

export const achievements = [
  {
    title: 'ArixByte Platform',
    description:
      'Built and launched a hosting infrastructure business serving game servers, web hosting, and developer tools.',
  },
  {
    title: 'Ender Bot Ecosystem',
    description:
      'Developed a multipurpose Discord bot with moderation, automation, and an integrated dashboard.',
  },
  {
    title: 'AEGRA Safety App',
    description:
      'Designed and developed an Android safety application with emergency SOS, location sharing, and trusted contact features.',
  },
  // TODO: Add more verified achievements
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  organization: string;
  verified: boolean;
};

// NOTE: Set verified to true only for real testimonials.
// The section will be hidden when no verified testimonials exist.
export const testimonials: Testimonial[] = [
  // {
  //   quote: 'Sample testimonial text here.',
  //   name: 'Person Name',
  //   role: 'Role',
  //   organization: 'Organization',
  //   verified: true,
  // },
];

export const contact = {
  heading: ["LET'S BUILD", "WHAT'S NEXT."],
  description:
    "Have an idea, a project, or an interesting technical challenge? Let's turn it into something real.",
  email: '', // TODO: Add your email
  links: {
    linkedIn: '', // TODO: Add LinkedIn URL
    github: '', // TODO: Add GitHub URL
    arixbyte: '', // TODO: Add ArixByte URL
    discord: '', // TODO: Add Discord invite URL
  },
  footer: {
    tagline: 'Designed with intent. Built with purpose.',
    copyright: `© ${new Date().getFullYear()} Manish Yadav. All rights reserved.`,
  },
};
