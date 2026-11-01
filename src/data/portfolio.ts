// ============================================================
// PORTFOLIO DATA — Sarthak Sharma-inspired Luxury Editorial Structure
// ============================================================

export const siteConfig = {
  name: 'Manish Yadav',
  brandSymbol: 'MY.',
  title: 'Product Builder & Tech Entrepreneur',
  role: 'Developer · Builder · Tech Entrepreneur',
  siteUrl: 'https://justyadav.github.io/portfolio/',
  ogImage: '/images/og-image.jpg',
  description:
    'Manish Yadav — Product builder, developer, and tech entrepreneur crafting hosting infrastructure, Discord bot ecosystems, and scalable web experiences.',
  availability: 'Available for select projects',
};

export const navigation = [
  { label: 'About', href: '#about', index: '01' },
  { label: 'Work', href: '#work', index: '02' },
  { label: 'Expertise', href: '#expertise', index: '03' },
  { label: 'Impact', href: '#impact', index: '04' },
  { label: 'Journey', href: '#journey', index: '05' },
  { label: 'Contact', href: '#contact', index: '06' },
];

export const hero = {
  topline: 'ENGINEER · BUILDER · ENTREPRENEUR',
  kicker: 'BASED IN INDIA · BUILDING AT SCALE',
  displayHeadline: 'A HUMAN PERSPECTIVE ON TECHNOLOGY.',
  leadText:
    'I turn ideas into digital products — from scalable hosting infrastructure and automation to web applications, Discord ecosystems, and emerging mobile experiences.',
  portrait: '/images/portrait.png',
  ctaPrimary: { label: 'Explore Selected Work', href: '#work' },
  ctaSecondary: { label: "Let's Connect", href: '#contact' },
  availability: 'Available for select projects',
  coordinates: '28.6139° N, 77.2090° E',
};

export const proofStrip = [
  {
    metric: '5+',
    suffix: 'Years',
    label: 'Building & shipping digital products',
  },
  {
    metric: '100+',
    suffix: 'Nodes',
    label: 'Servers & cloud environments managed',
  },
  {
    metric: '50K+',
    suffix: 'Users',
    label: 'Impacted across bots & web applications',
  },
  {
    metric: '99.9%',
    suffix: 'Uptime',
    label: 'Infrastructure stability & SLA delivered',
  },
];

export const about = {
  chapterNumber: '01',
  chapterLabel: 'THE PERSON BEHIND THE WORK',
  chapterSubtitle: 'A CONNECTED PERSPECTIVE',
  displayHeadline: 'Technology is the starting point. Systems are the backbone.',
  bio: [
    "I'm Manish Yadav — a developer, infrastructure engineer, and technology builder. I lead technical architecture and product execution at ArixByte, bridging the gap between scalable server backends and intuitive user-facing platforms.",
    'My work spans high-performance hosting clusters, Linux server orchestration, Docker virtualization, full-stack web applications, and Discord bot ecosystems. I believe engineering is at its best when complex systems disappear into effortless, reliable experiences.',
  ],
  pullQuote:
    '“I don\'t just write code. I engineer the systems, experiences, and infrastructure behind it.”',
  disciplines: [
    'Cloud & Hosting Infrastructure',
    'Discord Automation & Bot Ecosystems',
    'Full-Stack Web Applications',
    'Linux System Administration & Docker',
    'Android Engineering (AEGRA)',
    'Technical Strategy & Architecture',
  ],
  identityNotes: 'Manish Yadav · Developer & Tech Entrepreneur',
};

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  filterCategory: string;
  statusBadge: string;
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
    statusBadge: 'IN PRODUCTION',
    description:
      'A scalable hosting and infrastructure platform engineered for game servers, high-availability web hosting, Discord bot runtimes, and developer databases with Pterodactyl integration.',
    tags: ['Hosting', 'Pterodactyl', 'Docker', 'Linux', 'Databases'],
    image: '/images/projects/arixbyte.jpg',
    liveUrl: 'https://arixbyte.com',
  },
  {
    id: 'ender-bot',
    number: '02',
    title: 'Ender Bot',
    category: 'Discord Automation & Management Suite',
    filterCategory: 'Automation',
    statusBadge: 'PUBLIC BOT',
    description:
      'A multipurpose Discord automation ecosystem featuring granular moderation, automated guild configuration, custom logging, and a web companion dashboard.',
    tags: ['Python', 'Discord API', 'MongoDB', 'FastAPI', 'Automation'],
    image: '/images/projects/enderbot.jpg',
  },
  {
    id: 'aegra',
    number: '03',
    title: 'AEGRA',
    category: 'Android Safety Application Concept',
    filterCategory: 'Mobile',
    statusBadge: 'NATIVE ANDROID',
    description:
      'An emergency personal safety application built for rapid SOS response, featuring multi-tier fail-safe GPS retrieval, automated 112 calling fallback, and time-limited live location sharing.',
    tags: ['Android', 'Kotlin', 'Jetpack Compose', 'Location Services', 'Room DB'],
    image: '/images/projects/aegra.jpg',
  },
  {
    id: 'web-experiences',
    number: '04',
    title: 'Modern Web Experiences',
    category: 'Full-Stack Web Development',
    filterCategory: 'Development',
    statusBadge: 'LIVE APPS',
    description:
      'Responsive, high-speed web applications and dashboards engineered to blend performance, accessibility, and luxury editorial design aesthetics.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    image: '/images/projects/web.jpg',
  },
  {
    id: 'hosting-automation',
    number: '05',
    title: 'Infrastructure & DevOps Automation',
    category: 'Cloud & System Administration',
    filterCategory: 'Infrastructure',
    statusBadge: 'DEVOPS',
    description:
      'Automated server deployment workflows, container orchestration recipes, reverse proxy setups, and proactive resource monitoring scripts for cloud nodes.',
    tags: ['Docker', 'Linux', 'Bash', 'GitHub Actions', 'AWS'],
    image: '/images/projects/automation.jpg',
  },
];

export const projectFilters = [
  'All',
  'Infrastructure',
  'Automation',
  'Development',
  'Mobile',
];

export const expertise = {
  chapterNumber: '03',
  chapterLabel: 'HOW I THINK & WORK',
  chapterSubtitle: 'DEPTH MEETS PERSPECTIVE',
  displayHeadline: 'How I work. From architecture to impact.',
  tiers: [
    {
      title: 'Languages',
      context: 'Crafting high-concurrency bot systems, scalable APIs, and interactive full-stack web applications.',
      skills: [
        'Python',
        'JavaScript',
        'TypeScript',
        'HTML5 / CSS3 / Tailwind CSS',
        'FastAPI & Flask',
        'Discord.py',
        'Node.js / React',
      ],
    },
    {
      title: 'Databases',
      context: 'Designing structured relational and document schemas with optimized queries and resilient storage.',
      skills: [
        'MongoDB',
        'PostgreSQL',
        'SQLite & JSON',
        'Redis Caching',
        'Schema Migrations',
      ],
    },
    {
      title: 'DevOps, Cloud & Infrastructure',
      context: 'Provisioning secure environments, automating CI/CD pipelines, and managing game/application nodes.',
      skills: [
        'Docker & Container Images',
        'Pterodactyl Panel & Wings',
        'Linux & WSL / VirtualBox',
        'AWS & Render',
        'Git & GitHub Actions',
      ],
    },
    {
      title: 'Architecture & Delivery',
      context: 'Engineering lightning-fast responsive digital experiences with clean architecture and production-grade reliability.',
      skills: [
        'Fast Load Times',
        'Responsive Design',
        'Direct Contact & Socials',
        'Clean Architecture',
        'REST APIs',
      ],
    },
  ],
  processSteps: [
    {
      number: '01',
      title: 'Understand the Architecture',
      description: 'Break down system bottlenecks, latency targets, throughput requirements, and developer experience before touching code.',
    },
    {
      number: '02',
      title: 'Shape the System',
      description: 'Design modular services, fault-tolerant database schemas, and clean interfaces that scale smoothly without rework.',
    },
    {
      number: '03',
      title: 'Deploy & Monitor',
      description: 'Automate build and deployment pipelines, implement health checks, and maintain 99.9% uptime across production environments.',
    },
  ],
};

export const impact = {
  chapterNumber: '04',
  chapterLabel: 'THE WORK, MULTIPLIED',
  chapterSubtitle: 'SYSTEMS. STABILITY. POSSIBILITY.',
  displayHeadline: 'Reach is a number. Reliability is personal.',
  introText:
    'Every container deployed, every Discord server automated, and every line of code shipped represents hours saved, communities connected, and critical systems running without downtime.',
  stats: [
    {
      number: '50,000+',
      metric: 'Users & Community',
      note: 'Active community members and bot end-users supported across production servers.',
    },
    {
      number: '100+',
      metric: 'Managed Instances',
      note: 'Game nodes, web containers, and database instances maintained with continuous monitoring.',
    },
    {
      number: '100%',
      metric: 'Privacy First',
      note: 'Zero cloud telemetry architecture implemented on AEGRA for local emergency persistence.',
    },
  ],
};

export const journey = {
  chapterNumber: '05',
  chapterLabel: 'STILL BECOMING',
  chapterSubtitle: 'A JOURNEY IN MOTION',
  displayHeadline: 'Started with code. Kept building deeper.',
  milestones: [
    {
      year: '2021',
      tag: 'THE SPARK',
      title: 'First Lines of Code & Discord Automation',
      description:
        'Wrote my first Python scripts and built Discord bots to automate community moderation, event management, and interactive commands.',
    },
    {
      year: '2022',
      tag: 'INFRASTRUCTURE',
      title: 'Linux Systems & Server Virtualization',
      description:
        'Transitioned into dedicated Linux server administration, Docker containerization, and hosting game servers with automated provisioning.',
    },
    {
      year: '2023',
      tag: 'ENTREPRENEURSHIP',
      title: 'Co-Founding ArixByte Platform',
      description:
        'Launched ArixByte, architecting server nodes, custom Pterodactyl panels, database clusters, and client support workflows for developer hosting.',
    },
    {
      year: '2024',
      tag: 'MOBILE & WEB',
      title: 'AEGRA Safety Engine & Modern Web Dashboards',
      description:
        'Engineered AEGRA native Android personal safety application with fail-safe location engines, while building high-performance modern web platforms.',
    },
    {
      year: 'Today',
      tag: 'WHAT COMES NEXT',
      title: 'Expanding Infrastructure & Building What Matters',
      description:
        'Scaling hosting nodes, developing developer tools, and collaborating on high-impact software products with a founder mindset.',
    },
  ],
};

export const contact = {
  chapterNumber: '06',
  chapterLabel: 'THE NEXT CHAPTER',
  chapterSubtitle: 'LET\'S MAKE IT MATTER',
  displayHeadline: "Open to meaningful conversations & building what's next.",
  description:
    "Something great starts with a hello. Whether it's cloud hosting, infrastructure consulting, Discord bot systems, or building a new digital product — I'd love to connect.",
  web3formsKey: '104a3afe-fcc0-42e9-a5b5-d930902292e4',
  email: 'manishyadav.business@gmail.com', // Editable fallback
  socials: [
    { label: 'LinkedIn', href: 'https://linkedin.com', id: 'linkedin' },
    { label: 'GitHub', href: 'https://github.com/justyadav', id: 'github' },
    { label: 'Discord', href: 'https://discord.gg', id: 'discord' },
    { label: 'Email', href: 'mailto:manishyadav.business@gmail.com', id: 'email' },
  ],
  footerText: `© ${new Date().getFullYear()} MANISH YADAV — CREATED WITH PASSION, ENGINEERING & VISION.`,
};
