// ============================================================
// PORTFOLIO DATA — Modern Dark Glassmorphism Developer System
// Manish Yadav (PC_GAMER_28)
// ============================================================

export const siteConfig = {
  name: 'Manish Yadav',
  handle: 'PC_GAMER_28',
  brandLogo: 'PC_GAMER_28',
  brandSymbol: 'MY',
  title: 'Full-Stack Developer & Systems Architect | CTO at ArixByte',
  role: 'Full-Stack Developer & Systems Architect',
  company: 'ArixByte',
  companyRole: 'CTO',
  siteUrl: 'https://justyadav.github.io/portfolio/',
  ogImage: '/images/og-image.jpg',
  description:
    'Specializing in high-performance cloud infrastructure, high-concurrency Discord automation, and modern web applications. Turning complex backend systems into seamless, production-ready experiences.',
  availability: 'Available for hire',
};

export const navigation = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Stack', href: '#stack', id: 'stack' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Journey', href: '#journey', id: 'journey' },
  { label: 'Reviews', href: '#reviews', id: 'reviews' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const hero = {
  statusBadge: 'Available for hire',
  topline: 'Full-Stack Developer & Systems Architect',
  subtitle: 'CTO at ArixByte',
  name: 'Manish Yadav',
  handle: 'PC_GAMER_28',
  bio: 'Specializing in high-performance cloud infrastructure, high-concurrency Discord automation, and modern web applications. Turning complex backend systems into seamless, production-ready experiences.',
  portrait: '/images/portrait.webp',
  ctaPrimary: { label: 'Hire Me', href: '#contact' },
  ctaSecondary: { label: 'View Projects', href: '#projects' },
  socials: {
    github: 'https://github.com/justyadav',
    discordHandle: 'codebreakerx06',
    discordServer: 'https://discord.gg/62pjaFxEW6',
    linkedin: 'https://linkedin.com',
    email: 'manishyadav.business@gmail.com',
  },
};

export const statsStrip = [
  {
    metric: '2+',
    label: 'Years Experience',
    description: 'Active Engineering Experience',
  },
  {
    metric: '10+',
    label: 'Clients Served',
    description: 'Enterprise & Freelance Clients',
  },
  {
    metric: '9+',
    label: 'Nodes Managed',
    description: 'Active Production Servers & Nodes',
  },
  {
    metric: '99.9%',
    label: 'Cloud Uptime',
    description: 'Infrastructure Stability & SLA',
  },
];

export const about = {
  eyebrow: 'ABOUT ME',
  heading: 'Bridging high-availability infrastructure with fluid frontend design.',
  bioParagraphs: [
    "I'm Manish Yadav (known across developer communities as PC_GAMER_28). As CTO and technical lead at ArixByte, I architect distributed cloud hosting nodes, high-throughput Discord bots, and modern web applications that stay responsive under peak traffic.",
    'My background combines competitive athletics (National Rugby player) with relentless self-taught software engineering. This foundation gave me extreme discipline, calm execution in high-stress production environments, and a relentless commitment to building things that simply do not break.',
  ],
  highlights: [
    { title: 'Cloud Infrastructure', desc: 'Docker virtualization, Linux server orchestration & Pterodactyl daemon clustering.' },
    { title: 'High-Concurrency Bots', desc: 'discord.py 2.x ecosystems processing real-time websocket events & tournament automation.' },
    { title: 'Full-Stack Web', desc: 'Lightning-fast React, Vite & Tailwind CSS web apps with resilient FastAPI/Node backends.' },
    { title: 'Systems Resilience', desc: 'Automated health checks, Redis caching & proactive DDoS mitigation with Cloudflare.' },
  ],
};

export interface TechCategory {
  category: string;
  badge: string;
  iconName: string;
  items: {
    name: string;
    level: string;
    description: string;
  }[];
}

export const techStackData: TechCategory[] = [
  {
    category: 'Languages',
    badge: 'CORE CODE',
    iconName: 'Code2',
    items: [
      { name: 'Python', level: 'Advanced', description: 'Asyncio, discord.py, FastAPI backend engines' },
      { name: 'TypeScript', level: 'Proficient', description: 'Type-safe full-stack web applications' },
      { name: 'JavaScript', level: 'Advanced', description: 'ESNext, Node.js runtimes & dynamic UIs' },
      { name: 'HTML5 / CSS3', level: 'Advanced', description: 'Semantic, accessible & responsive layouts' },
    ],
  },
  {
    category: 'Frameworks & Runtimes',
    badge: 'RUNTIMES & APIS',
    iconName: 'Cpu',
    items: [
      { name: 'FastAPI', level: 'Advanced', description: 'High-speed async REST APIs & WebSockets' },
      { name: 'Node.js', level: 'Proficient', description: 'Microservices & event-driven background tasks' },
      { name: 'React', level: 'Advanced', description: 'Single-page apps, hooks & custom state flows' },
      { name: 'Vite', level: 'Advanced', description: 'Sub-second HMR & modern ESM bundler pipelines' },
      { name: 'discord.py 2.x', level: 'Specialist', description: 'High-concurrency bot sharding & slash commands' },
    ],
  },
  {
    category: 'Database & Caching',
    badge: 'DATA SYSTEMS',
    iconName: 'Database',
    items: [
      { name: 'MongoDB', level: 'Advanced', description: 'Aggregations, indexes & high-write bot storage' },
      { name: 'PostgreSQL', level: 'Proficient', description: 'Relational schemas, ACID transactions & foreign keys' },
      { name: 'Redis', level: 'Proficient', description: 'In-memory caching, rate-limiting & message queues' },
    ],
  },
  {
    category: 'DevOps & Cloud',
    badge: 'INFRASTRUCTURE',
    iconName: 'Server',
    items: [
      { name: 'Docker', level: 'Advanced', description: 'Multi-stage container builds & isolation' },
      { name: 'Linux', level: 'Advanced', description: 'Kernel tuning, systemd, SSH & Debian/Ubuntu server admin' },
      { name: 'Cloudflare', level: 'Proficient', description: 'DNS proxying, SSL certificates & DDoS protection' },
      { name: 'Pterodactyl Panel', level: 'Specialist', description: 'Custom Wings daemon orchestration & game node clusters' },
      { name: 'AWS India', level: 'Proficient', description: 'EC2 provisioning, VPC security & high-availability routes' },
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  category: 'Bot' | 'Cloud' | 'SaaS' | 'Mobile';
  problem: string;
  solution: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  statusText: string;
}

export const projectsData: Project[] = [
  {
    id: 'arixbyte',
    title: 'ArixByte Core Hosting Platform',
    category: 'Cloud',
    problem:
      'Developers and gaming communities face expensive cloud hosting with complicated setups and frequent downtime.',
    solution:
      'Engineered a scalable hosting infrastructure utilizing Pterodactyl nodes, automated Docker container sandboxing, low-latency node routing, and seamless client billing.',
    tags: ['Docker', 'Linux', 'Pterodactyl', 'Python', 'Cloudflare', 'MongoDB'],
    liveUrl: 'https://arixbyte.com',
    githubUrl: 'https://github.com/justyadav',
    featured: true,
    statusText: 'In Production',
  },
  {
    id: 'ender-bot',
    title: 'Ender Bot — Concurrency Ecosystem',
    category: 'Bot',
    problem:
      'Growing Discord servers struggle with spam attacks, raid coordination, disjointed verification, and slow bot response times during peak hours.',
    solution:
      'Built a production multipurpose Discord ecosystem using discord.py 2.x with async command dispatching, granular auto-moderation, custom logging, and interactive web dashboard integration.',
    tags: ['Python', 'discord.py 2.x', 'MongoDB', 'FastAPI', 'Docker'],
    liveUrl: 'https://discord.gg/62pjaFxEW6',
    githubUrl: 'https://github.com/justyadav/ender-bot',
    featured: true,
    statusText: 'Public Verified Bot',
  },
  {
    id: 'cloud-infrastructure',
    title: 'Pterodactyl Game & Tournament Cloud',
    category: 'SaaS',
    problem:
      'Esports tournaments require instant server spin-ups with strict hardware resource limits and zero packet loss under heavy spectator load.',
    solution:
      'Architected dedicated Linux bare-metal node clusters with customized Pterodactyl Wings daemons, automated CPU pinning, automated backups, and tournament orchestration hooks.',
    tags: ['Linux', 'Docker', 'Bash', 'Pterodactyl', 'Networking', 'Redis'],
    liveUrl: 'https://arixbyte.com',
    githubUrl: 'https://github.com/justyadav',
    featured: true,
    statusText: '99.9% Uptime Verified',
  },
  {
    id: 'aegra-safety',
    title: 'AEGRA — Android Personal Safety Engine',
    category: 'Mobile',
    problem:
      'Standard safety apps depend entirely on active cellular internet and cloud servers, failing during network outages or battery-constrained crises.',
    solution:
      'Developed a native Android emergency SOS engine with multi-tier fail-safe GPS retrieval, automated SMS broadcast fallback, and local encrypted audit trails.',
    tags: ['Android', 'Kotlin', 'Jetpack Compose', 'Location Services', 'Room DB'],
    githubUrl: 'https://github.com/justyadav',
    featured: false,
    statusText: 'Native Android',
  },
];

export const journeyMilestones = [
  {
    period: 'Present',
    badge: 'LEADERSHIP & ARCHITECTURE',
    title: 'CTO & Tech Lead at ArixByte',
    role: 'Chief Technology Officer',
    description:
      'Leading overall platform engineering, client cloud node deployments, high-availability architecture, and automated hosting operations across India and global regions.',
    points: [
      'Architected high-density Pterodactyl server nodes running hundreds of game/bot containers.',
      'Designed end-to-end client provisioning with automated database isolation.',
      'Maintained 99.9% uptime SLA across all production hosting clusters.',
    ],
  },
  {
    period: '2026',
    badge: 'INFRASTRUCTURE & AUTOMATION',
    title: 'Cloud Server & Bot Systems Architect',
    role: 'Systems Engineer & Bot Specialist',
    description:
      'Focused on high-concurrency bot infrastructure, automated tournament systems, and scalable container virtualization.',
    points: [
      'Developed and deployed Ender Bot, powering multi-guild moderation and community management.',
      'Automated game node deployment pipelines using Docker, Linux bash automation, and reverse proxies.',
      'Integrated live countdown offers, interactive Discord embeds, and real-time status telemetry.',
    ],
  },
  {
    period: 'Foundation',
    badge: 'DISCIPLINE & RESILIENCE',
    title: 'National Rugby Athlete & Self-Taught Engineer',
    role: 'Athlete & Continuous Builder',
    description:
      'Competed as a national-level rugby player in India while teaching myself programming and computer systems from the ground up.',
    points: [
      'Developed deep physical and mental endurance, translating athletic discipline into relentless problem-solving.',
      'Mastered Linux server management, asynchronous programming, and distributed systems via hands-on builds.',
      'Built a reputation for staying calm under high-pressure system outages and rapid turnaround requirements.',
    ],
  },
];

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  community: string;
  rating: number;
  badge: string;
}

export const reviewsData: Testimonial[] = [
  {
    quote:
      'Manish architected our entire tournament bot automation and game servers. During our 1,000+ player championship, the infrastructure handled continuous load without a single hiccup or lag spike. Fast turnaround and bulletproof code.',
    author: 'Alex R.',
    role: 'Esports Director & Tournament Lead',
    community: 'Apex Arena Gaming',
    rating: 5,
    badge: 'Tournament Verified',
  },
  {
    quote:
      'The Pterodactyl node cluster Manish configured for our server hosting business is rock-solid. 99.9% uptime, automated resource balancing, and whenever we have a technical scaling question, his response time is immediate.',
    author: 'Devraj K.',
    role: 'Hosting Enterprise Owner',
    community: 'ArixByte Cloud Client',
    rating: 5,
    badge: 'Enterprise Infrastructure',
  },
  {
    quote:
      'Custom Discord automation was delivered days ahead of our launch deadline. The slash command latency is near zero and the moderation filters caught raids instantly. Truly exceptional systems engineering.',
    author: 'Jordan M.',
    role: 'Community Operations Lead',
    community: 'Creator Guild Network',
    rating: 5,
    badge: 'Custom Bot Suite',
  },
];

export const contactData = {
  heading: "Let's Build Something Exceptional",
  subheading:
    'Have a high-concurrency bot to build, a cloud infrastructure cluster to deploy, or a full-stack platform to ship? Reach out directly.',
  email: 'manishyadav.business@gmail.com',
  discordHandle: 'codebreakerx06',
  discordServerUrl: 'https://discord.gg/62pjaFxEW6',
  githubUrl: 'https://github.com/justyadav',
  linkedinUrl: 'https://linkedin.com',
  web3formsKey: '104a3afe-fcc0-42e9-a5b5-d930902292e4',
  footerText: `© ${new Date().getFullYear()} Manish Yadav (PC_GAMER_28). Built for performance, uptime, and scale.`,
};
