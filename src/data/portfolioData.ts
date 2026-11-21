export interface HeroSlide {
  id: string;
  slideIndex: string;
  trackCode: string;
  category: string;
  categoryColor: string;
  title: string;
  shortDesc: string;
  description: string;
  footerLabel: string;
  progressPercent: number;
  cardBg: string;
  shadowColor: string;
  tiltClass: string;
  stickyHeadline: string;
  stickyNote: string;
  stickerStamp: string;
}

export interface ProjectPolaroid {
  src: string;
  alt: string;
  captionLeft: string;
  captionRight: string;
  tiltClass: string;
  shadowClass: string;
  tapePosition: string;
}

export interface ProjectDossier {
  id: string;
  tabLabel: string;
  dotColor: string;
  folderBg: string;
  category: 'edutech' | 'pmo' | 'speaking';
  badges: Array<{ label: string; className: string }>;
  title: string;
  summary: string;
  bulletColor: string;
  bullets: Array<{ bold: string; text: string }>;
  ctaLabel: string;
  ctaStyle: 'dark-red' | 'dark' | 'red';
  ctaAction: 'modal' | 'contact';
  contactTrack?: string;
  statusText?: string;
  layoutReversed?: boolean;
  polaroids: ProjectPolaroid[];
  caseFileDetails: {
    role: string;
    timeline: string;
    impactMetrics: Array<{ value: string; label: string }>;
    deliverables: string[];
    highlightQuote: string;
  };
}

export interface ServiceTrack {
  id: string;
  trackNumber: string;
  icon: string;
  title: string;
  description: string;
  metric: string;
  tiltClass: string;
  inquiryOption: string;
}

export interface TestimonialMemo {
  id: string;
  memoNumber: string;
  noteTag: string;
  quote: string;
  author: string;
  role: string;
  stamp: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  tag: string;
  tagColor: string;
  tiltClass: string;
  tapeClass: string;
  bars: Array<{
    name: string;
    percent: number;
    barColor: string;
  }>;
  crewTitle: string;
  crewItems: Array<{ label: string; highlight?: boolean }>;
}

export interface HonorItem {
  year: string;
  title: string;
  description: string;
}

export interface JourneyVolume {
  id: string;
  vol: string;
  status: string;
  year: string;
  headline: string;
  summary: string;
  chaptersCount: number;
  tiltClass: string;
  tapeClass: string;
  chapters: Array<{
    month: string;
    title: string;
    detail: string;
  }>;
}

export interface QuickStackTool {
  name: string;
  icon: string;
  usage: string;
}

export const HERO_PORTRAIT_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCyQ-Qq4T5ISflFwLpXG1f-0FJVjnfP_u0DcZfQYtRniZ-CuVp8DCEVeAf3TaHEVEfSI6uu-t2VOdWx10JwbGvmEHlGO3MvBkpYd86uO1ZuHXqg8Abk0vzjcywfXSRaTTvt1FuhE3CCezBiDcRq0hazBXylSA_UUSKEx9p5xMd1c8YpSLGl2-geYLnTNDG-H2D-loMHuZVlFhuNpqwsBfpASScNuD0N6nkaVaXnyxqZSqLN1VtSl9gYkQ';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'edutech',
    slideIndex: 'SLIDE 01/04',
    trackCode: '01 // CREATIVE DEV',
    category: 'CREATIVE DEV',
    categoryColor: 'text-primary',
    title: 'EDU TECH CREATOR',
    shortDesc: 'Kids coding curriculum, STEM labs',
    description:
      'Designing scalable learning roadmaps, interactive coding curricula for kids, and mentoring future software engineers.',
    footerLabel: '01 KIDILENT EDUTECH',
    progressPercent: 25,
    cardBg: 'bg-pure-white',
    shadowColor: 'shadow-[4px_4px_0px_#111111]',
    tiltClass: '-rotate-1',
    stickyHeadline: '✦ CERTIFIED SCRUM PMO',
    stickyNote:
      'Leading 12+ cross-functional edutech sprint teams with 98% on-time release index.',
    stickerStamp: '★ 100% HANDCRAFTED',
  },
  {
    id: 'pmo',
    slideIndex: 'SLIDE 02/04',
    trackCode: '02 // OPERATIONS',
    category: 'OPERATIONS',
    categoryColor: 'text-tertiary',
    title: 'PROJECT MANAGER',
    shortDesc: 'Agile execution, Scrum sprints',
    description:
      'Orchestrating enterprise LMS rollouts, sprint velocity systems, and Jira/Notion delivery workflows for high-growth teams.',
    footerLabel: '02 AGILE PMO ENGINE',
    progressPercent: 50,
    cardBg: 'bg-surface-container',
    shadowColor: 'shadow-[4px_4px_0px_#111111]',
    tiltClass: 'rotate-1',
    stickyHeadline: '✦ 32% FASTER VELOCITY',
    stickyNote:
      'Reduced release cycle friction across 14 consecutive two-week product sprints.',
    stickerStamp: '★ CSM® CERTIFIED',
  },
  {
    id: 'founder',
    slideIndex: 'SLIDE 03/04',
    trackCode: '03 // VENTURE',
    category: 'VENTURE',
    categoryColor: 'text-primary',
    title: 'FOUNDER KIDILENT',
    shortDesc: 'Empowering next-gen creators',
    description:
      'Building Kidilent from a weekend coding lab into an edutech studio reaching 5,000+ young builders across 20+ partner schools.',
    footerLabel: '03 KIDILENT STUDIO',
    progressPercent: 75,
    cardBg: 'bg-pure-white',
    shadowColor: 'shadow-[4px_4px_0px_#dd3124]',
    tiltClass: '-rotate-2',
    stickyHeadline: '✦ 5,000+ YOUNG CODERS',
    stickyNote:
      '94% cohort retention across Scratch, Roblox Lua, and micro:bit creative labs.',
    stickerStamp: '★ FOUNDER ARCHIVE',
  },
  {
    id: 'speaker',
    slideIndex: 'SLIDE 04/04',
    trackCode: '04 // BROADCAST',
    category: 'BROADCAST',
    categoryColor: 'text-ink font-bold',
    title: 'MC & KEYNOTE SPEAKER',
    shortDesc: '50+ national tech summits',
    description:
      'Commanding national tech stages, startup demo days, and education forums in bilingual English & Bahasa Indonesia.',
    footerLabel: '04 STAGE & KEYNOTES',
    progressPercent: 100,
    cardBg: 'bg-sticky-yellow',
    shadowColor: 'shadow-[4px_4px_0px_#111111]',
    tiltClass: 'rotate-2',
    stickyHeadline: '✦ 50+ NATIONAL STAGES',
    stickyNote:
      'Featured at Tech in Asia Stage, Google I/O Extended Jakarta, and National Startup Gala.',
    stickerStamp: '★ BILINGUAL HOST',
  },
];

export const QUICK_STACK_TOOLS: QuickStackTool[] = [
  { name: 'Jira', icon: 'developer_board', usage: 'Agile sprint planning, backlog triage & release velocity dashboards.' },
  { name: 'Trello', icon: 'view_kanban', usage: 'Visual Kanban workflows for curriculum squads and event production.' },
  { name: 'Figma', icon: 'draw', usage: 'Interactive learning prototypes, wireframes & workshop decks.' },
  { name: 'Scratch', icon: 'terminal', usage: 'Block-based game logic & storytelling modules for ages 7–14.' },
  { name: 'Notion', icon: 'table_chart', usage: 'Centralized PMO knowledge hubs, SOP playbooks & cohort trackers.' },
  { name: 'CapCut', icon: 'movie', usage: 'Short-form educational reels, keynote recaps & student demos.' },
  { name: 'Gemini', icon: 'smart_toy', usage: 'AI-assisted curriculum scaffolding and educator prompt labs.' },
  { name: 'Zoom', icon: 'video_call', usage: 'Interactive hybrid classrooms and nationwide virtual summits.' },
];

export const PARTNER_ROW_1 = [
  { label: 'GOOGLE FOR EDUCATION', className: 'bg-surface text-ink shadow-[3px_3px_0px_#dd3124] -rotate-1' },
  { label: 'KEMENDIKBUDRISTEK RI', className: 'bg-primary text-on-primary shadow-[3px_3px_0px_#ffffff] rotate-2' },
  { label: 'KAMPUS MERDEKA', className: 'bg-surface text-ink shadow-[3px_3px_0px_#dd3124] -rotate-2' },
  { label: 'STARTUP CAMPUS', className: 'bg-sticky-yellow text-ink shadow-[3px_3px_0px_#111111] rotate-1' },
  { label: 'DICODING INDONESIA', className: 'bg-surface text-ink shadow-[3px_3px_0px_#dd3124] -rotate-1' },
  { label: 'KIDILENT LABS', className: 'bg-tertiary text-on-tertiary shadow-[3px_3px_0px_#ffffff] rotate-2' },
  { label: 'TECH IN ASIA ID', className: 'bg-surface text-ink shadow-[3px_3px_0px_#dd3124] -rotate-1' },
  { label: 'UNIVERSITAS INDONESIA', className: 'bg-primary text-on-primary shadow-[3px_3px_0px_#ffffff] rotate-1' },
];

export const PARTNER_ROW_2 = [
  { label: 'INDONESIAN AI SUMMIT', className: 'bg-sticky-yellow text-ink shadow-[3px_3px_0px_#111111] rotate-1' },
  { label: 'GIRLS IN TECH INDONESIA', className: 'bg-surface text-ink shadow-[3px_3px_0px_#dd3124] -rotate-2' },
  { label: 'SCRATCH FOUNDATION', className: 'bg-tertiary text-on-tertiary shadow-[3px_3px_0px_#ffffff] rotate-1' },
  { label: 'BINUS UNIVERSITY', className: 'bg-surface text-ink shadow-[3px_3px_0px_#dd3124] -rotate-1' },
  { label: 'KUMPUL.ID ECOSYSTEM', className: 'bg-primary text-on-primary shadow-[3px_3px_0px_#ffffff] rotate-2' },
  { label: 'SHELOVES TECH JAKARTA', className: 'bg-surface text-ink shadow-[3px_3px_0px_#dd3124] -rotate-1' },
];

export const PROJECTS: ProjectDossier[] = [
  {
    id: 'kidilent',
    tabLabel: '✦ PROJECT 01: KIDILENT EDUTECH',
    dotColor: 'bg-primary',
    folderBg: 'bg-pure-white',
    category: 'edutech',
    badges: [
      { label: 'FOUNDED 2023', className: 'bg-surface-container text-ink' },
      { label: 'EDUTECH / STEM', className: 'bg-sticky-yellow text-ink' },
      { label: '5,000+ STUDENTS', className: 'bg-primary text-on-primary' },
    ],
    title: 'KIDILENT: NEXT-GEN CREATIVE CODING FOR KIDS',
    summary:
      'Kidilent is an interactive gamified coding school designed to teach children ages 7–14 logical computational thinking, game mechanics, and digital problem solving without dry technical jargon. Built modular curricula used by 20+ primary schools across Indonesia.',
    bulletColor: 'text-primary',
    bullets: [
      {
        bold: 'Hands-on Project Tracks:',
        text: 'Scratch interactive stories, Roblox Lua fundamentals, micro:bit hardware robotics.',
      },
      {
        bold: 'Teacher Training Program:',
        text: 'Mentored 120+ primary school educators in STEAM pedagogy.',
      },
      {
        bold: 'Impact Matrix:',
        text: '94% retention rate across 8 cohorts with parent satisfaction rating 4.9/5.0.',
      },
    ],
    ctaLabel: 'VIEW FULL CASE FILE ↗',
    ctaStyle: 'dark-red',
    ctaAction: 'modal',
    statusText: 'STATUS: ACTIVE VENTURE',
    polaroids: [
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFbpkZ04vVuitVhI4-wwXH3Vcw0gPP1XtSBzzSrC1dhto2EC27EQPEZpD6gbYE5FkRZjCAA_8TsKo5ELp4fABuc83eoLKOZM2Kr9bNW7BCX6sy-sf6xImai39FZ5t2LrcxCcggZ2nVAbUdQBCE1BGIQyZcli2xWebRPvwQB7O68Hvb1wM1w5vn1hkZ5vmVf2F-So2KzCOvhHWlAjj9GlDQx6oKLWOjNHIIGfidYhSN',
        alt: 'Children coding animations on laptops guided by mentor Cendekia Luthfieta Nazalia during Kidilent workshop',
        captionLeft: 'CLASS_SESSION #08',
        captionRight: 'JAKARTA',
        tiltClass: '-rotate-3',
        shadowClass: 'shadow-[6px_6px_0px_#111111]',
        tapePosition: 'left-1/3 -rotate-6',
      },
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqdOq2tuEbW2OLSVXy5ecftqx0lK_Y6chQG-sv9D2fpb575LWNnlfNFwHWbA63CFnR7H7fY4ctpTdpdRukByvDUQSpM5JPsZQC1Jh2YueY_XoCz3jMUJM-uUmGpkOlpA3udIalTlSkBswUT0MPZ5baayF8IlQl3j65nPFIDp1d6hH-7m4o35b9WC56PdmCamBltzJjfQp0rgDgs-q1lChoGQoNY2n94dPaWlWRQSLZ',
        alt: 'Student project showcase pinboard featuring kid-drawn game characters and pixel art stickers',
        captionLeft: "STUDENT EXPO '24",
        captionRight: 'BANDUNG',
        tiltClass: 'rotate-3 -mt-2 sm:mt-10',
        shadowClass: 'shadow-[6px_6px_0px_#dd3124]',
        tapePosition: 'right-6 rotate-3',
      },
    ],
    caseFileDetails: {
      role: 'Founder & Chief Curriculum Architect',
      timeline: '2023 — Present',
      impactMetrics: [
        { value: '5,000+', label: 'Young Builders' },
        { value: '20+', label: 'Partner Schools' },
        { value: '94%', label: 'Cohort Retention' },
        { value: '4.9/5', label: 'Parent Rating' },
      ],
      deliverables: [
        '4-tier progressive coding syllabus (Scratch 3.0 → Roblox Lua → micro:bit IoT → Creative AI).',
        'Educator enablement playbook & live observation rubric adopted by 120+ Indonesian school teachers.',
        'Quarterly Kidilent Demo Day showcase where kids pitch playable prototypes to parents and mentors.',
      ],
      highlightQuote:
        'We turn passive screen time into fearless maker time—every student leaves Cohort 1 with a playable game they architected from scratch.',
    },
  },
  {
    id: 'pmo-lms',
    tabLabel: '✦ PROJECT 02: AGILE PMO SCALEUP ENGINE',
    dotColor: 'bg-tertiary',
    folderBg: 'bg-surface-container-high',
    category: 'pmo',
    layoutReversed: true,
    badges: [
      { label: '2022 — 2024', className: 'bg-surface text-ink' },
      { label: 'AGILE PMO LEAD', className: 'bg-tertiary-fixed-dim text-ink' },
      { label: 'SCRUM / JIRA', className: 'bg-ink text-surface' },
    ],
    title: 'ENTERPRISE LMS & MENTORSHIP ECOSYSTEM',
    summary:
      'Directed cross-functional sprints (UI/UX designers, backend developers, curriculum writers, and QA engineers) to launch an enterprise-grade learning management platform serving 40,000+ registered vocational learners.',
    bulletColor: 'text-tertiary',
    bullets: [
      {
        bold: 'Sprint Velocity Optimization:',
        text: 'Reduced feature delivery cycle time by 32% across 14 consecutive two-week sprints.',
      },
      {
        bold: 'Stakeholder Synchronization:',
        text: 'Bridged government ministry requirements with engineering roadmaps without scope creep.',
      },
    ],
    ctaLabel: 'VIEW AUDIT DOSSIER ↗',
    ctaStyle: 'dark',
    ctaAction: 'modal',
    polaroids: [
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEdqQOpMwYfksX6LvTTxU1pR-ler4LeHDX_boBIr9Z1YKvnveyYQsC0O6vc-t9cNB7d8hQcgiuTpu2V3aMMFFnezRbg7o4YsD-Aw2m_Tv0Ina97q4bUKW-mXwQyyjMJU3dubUBWEXpolTg-BB4f3PHHD4Aa6WyRZ6jBo3mjL6Xs66GrC7Rl-D1TKbP4IOGBMg4Ka7E1zD_maqEQzATC44lKAVcqyO-Zf76aiXcdMjk',
        alt: 'Sprint planning war room whiteboard covered with Kanban sticky notes and release burndown diagrams',
        captionLeft: 'WAR_ROOM_SPRINT_42',
        captionRight: 'Q3 ARCHIVE',
        tiltClass: 'rotate-2',
        shadowClass: 'shadow-[6px_6px_0px_#111111]',
        tapePosition: 'left-6 -rotate-3',
      },
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2gbreK63EcZ36xpgHa7sXAJpxdLv32uQj7567HeG8Du9vRCKGMXVxeBTaOazM_3ioG7SqqlxJ0Vyi9Re5o--x2fhda4PMNhfeZcZMjlICXcEaqEORDGXHgL9BgVGI1x8FX34zHKHLnhgCJYJx39bFvaixaGIJMZHygOF2MMOVNKRJZbrgq7BKEH45YkIFF3E0S96faejR9K7pVXSfQkx4MuoOBWWBNWdIXMfggpZa',
        alt: 'Engineering sprint squad team huddle reviewing digital dashboard metrics in modern office',
        captionLeft: 'SQUAD ALIGNMENT',
        captionRight: 'RETROSPECTIVE',
        tiltClass: '-rotate-3 -mt-2 sm:mt-8',
        shadowClass: 'shadow-[6px_6px_0px_#111111]',
        tapePosition: 'right-6 rotate-6',
      },
    ],
    caseFileDetails: {
      role: 'Project Management Officer (Agile Delivery Lead)',
      timeline: '2022 — 2024',
      impactMetrics: [
        { value: '40,000+', label: 'Active Learners' },
        { value: '-32%', label: 'Cycle Time' },
        { value: '98%', label: 'On-Time Release' },
        { value: '14', label: 'Zero-Delay Sprints' },
      ],
      deliverables: [
        'End-to-end Jira & Notion governance framework aligning 4 parallel engineering and pedagogy squads.',
        'Automated burndown, risk register, and ministry compliance reporting rituals.',
        'Cross-functional QA sign-off gates reducing post-release hotfixes by 41%.',
      ],
      highlightQuote:
        'Great PMO work is invisible when sprints glide and unmistakable when high-stakes national launches ship ahead of schedule.',
    },
  },
  {
    id: 'speaking',
    tabLabel: '✦ PROJECT 03: SUMMIT KEYNOTES & STAGE MC',
    dotColor: 'bg-sticky-yellow',
    folderBg: 'bg-pure-white',
    category: 'speaking',
    badges: [
      { label: '50+ STAGES', className: 'bg-sticky-yellow text-ink' },
      { label: 'NATIONAL TECH EXPOS', className: 'bg-surface-container text-ink' },
      { label: 'BILINGUAL (EN/ID)', className: 'bg-primary text-on-primary' },
    ],
    title: 'PUBLIC ADVOCACY: TECH EQUITY & EARLY STEM',
    summary:
      'Trusted master of ceremonies and motivational keynote speaker for leading tech conferences, university graduations, and governmental startup demo days. Known for high energy, immaculate timing, and articulate crowd engagement.',
    bulletColor: 'text-primary',
    bullets: [
      {
        bold: 'Signature Keynote:',
        text: '"Why Every 8-Year-Old Must Learn Computational Logic Before AI Takes Over".',
      },
      {
        bold: 'High-Profile Events:',
        text: 'Tech in Asia Stage, Google I/O Extended Jakarta, National Startup Championship.',
      },
    ],
    ctaLabel: 'BOOK FOR YOUR STAGE ↗',
    ctaStyle: 'red',
    ctaAction: 'contact',
    contactTrack: 'Keynote Speaking & MC Moderation',
    polaroids: [
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7l2MBuLTn1pi3wXv52Bua1Eohkdb5fLEHB7Khq3bUW0EH1hx45e1I3VXc3FrdvkjyQg1Do1pxgBIJy2Z0N5CeY734Z8swExZhUcbGf7p-KjSbNXiMoVMBBTHc0-hZ1NdaYOyAUFgpY3EIe-rFYqBUub6eKeU4sQEKCDLK0vlXL9Kf0VittV0l7vZI7ptvoZy1SveVGFlniXy5QHgeYdGFBDFy7uC8KXEHynCA4oTe',
        alt: 'Cendekia Luthfieta Nazalia speaking on an auditorium stage with LED backdrop holding a microphone',
        captionLeft: 'KEYNOTE SPEAKER // JAKARTA TECH EXPO',
        captionRight: 'AUDIENCE: 1,200+',
        tiltClass: '-rotate-2',
        shadowClass: 'shadow-[8px_8px_0px_#111111]',
        tapePosition: 'left-1/3 -rotate-3',
      },
    ],
    caseFileDetails: {
      role: 'Keynote Speaker, Panel Moderator & Bilingual MC',
      timeline: '2021 — Present',
      impactMetrics: [
        { value: '50+', label: 'Live Stages' },
        { value: '1,200+', label: 'Peak Auditorium' },
        { value: 'EN / ID', label: 'Bilingual Fluency' },
        { value: '14', label: 'Investor Pitch Days' },
      ],
      deliverables: [
        'Bespoke keynote decks on AI literacy, youth STEM equity, and agile team leadership.',
        'Precision rundown orchestration for multi-track tech summits and ministerial openings.',
        'Interactive fireside chats with founders, educators, and engineering VPs.',
      ],
      highlightQuote:
        'A stage is a classroom at scale—every keynote should leave the audience with one clear mental shift and one immediate action.',
    },
  },
];

export const SERVICE_TRACKS: ServiceTrack[] = [
  {
    id: 'workshops',
    trackNumber: 'TRACK 01',
    icon: 'school',
    title: 'IT EDU TECH WORKSHOPS',
    description:
      'Custom STEM & coding bootcamps tailored for schools, CSR foundations, or corporate family days.',
    metric: 'METRIC: 10K+ MINDS',
    tiltClass: '-rotate-1',
    inquiryOption: 'Kidilent Coding Workshop & Curriculum',
  },
  {
    id: 'pmo',
    trackNumber: 'TRACK 02',
    icon: 'checklist',
    title: 'PROJECT MANAGEMENT',
    description:
      'Sprint planning, Agile PMO setups, process audits, and Jira/Trello workflow architecture for scaleups.',
    metric: 'METRIC: 98% ON-TIME',
    tiltClass: 'rotate-1',
    inquiryOption: 'Project Management & Agile Advisory',
  },
  {
    id: 'speaking',
    trackNumber: 'TRACK 03',
    icon: 'mic',
    title: 'MC & KEYNOTE SPEAKING',
    description:
      'Professional stage moderation, panel facilitation, and keynote presentations on tech education.',
    metric: 'METRIC: 50+ EVENTS',
    tiltClass: '-rotate-2',
    inquiryOption: 'Keynote Speaking & MC Moderation',
  },
  {
    id: 'incubator',
    trackNumber: 'TRACK 04',
    icon: 'rocket_launch',
    title: 'KIDILENT INCUBATOR',
    description:
      'Partnering with institutions to set up internal Kidilent coding labs, curriculum licensing, and coaching.',
    metric: 'METRIC: 20+ HUBS',
    tiltClass: 'rotate-2',
    inquiryOption: 'Kidilent Coding Workshop & Curriculum',
  },
];

export const TESTIMONIALS: TestimonialMemo[] = [
  {
    id: 'memo-39',
    memoNumber: 'EVALUATION MEMO #39',
    noteTag: 'what they said ✨',
    quote:
      '"Cendekia is a rare hybrid who possesses both razor-sharp Agile delivery precision and a magnetic, infectious energy that commands any tech stage or classroom. Her Kidilent programs redefined how our kids view software creation."',
    author: 'Aditya Pratama',
    role: 'VP of Learning Innovation, Edutech Indonesia',
    stamp: '100%',
  },
  {
    id: 'memo-40',
    memoNumber: 'EVALUATION MEMO #40',
    noteTag: 'stage review ✨',
    quote:
      '"She held a packed 1,200-seat tech summit on schedule down to the minute while keeping founders, ministry guests, and students genuinely energized. Easily our most reliable bilingual MC."',
    author: 'Nadia Kusuma',
    role: 'Program Director, Jakarta Tech Expo',
    stamp: 'A+',
  },
  {
    id: 'memo-41',
    memoNumber: 'EVALUATION MEMO #41',
    noteTag: 'sprint audit ✨',
    quote:
      '"Within two sprints of bringing Cendekia in as PMO Lead, our cross-functional LMS bottlenecks disappeared and on-time releases climbed to 98%. Structured, empathetic, and relentless on clarity."',
    author: 'Raka Mahendra',
    role: 'Head of Engineering, National EduTech Scaleup',
    stamp: '98%',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'pmo-skills',
    title: '01 // PROJECT MANAGEMENT & AGILE',
    tag: 'FIELD_TESTED',
    tagColor: 'text-primary',
    tiltClass: '-rotate-1',
    tapeClass: 'left-8 -rotate-3',
    bars: [
      { name: 'SCRUM SPRINT FACILITATION', percent: 95, barColor: 'bg-primary' },
      { name: 'JIRA & WORKFLOW ARCHITECTURE', percent: 90, barColor: 'bg-ink' },
      { name: 'CROSS-FUNCTIONAL SQUAD LEADERSHIP', percent: 96, barColor: 'bg-tertiary' },
      { name: 'EDUTECH PRODUCT ROADMAPPING', percent: 92, barColor: 'bg-primary-container' },
    ],
    crewTitle: 'MY CREW ✦ SOFTWARE ENGINES',
    crewItems: [
      { label: 'Jira Software' },
      { label: 'Notion HQ' },
      { label: 'Trello Agile' },
      { label: 'Google Workspace' },
      { label: 'Miro Whiteboard' },
    ],
  },
  {
    id: 'edutech-skills',
    title: '02 // EDU TECH & BROADCAST',
    tag: 'STAGE_TESTED',
    tagColor: 'text-tertiary',
    tiltClass: 'rotate-1',
    tapeClass: 'right-8 rotate-3',
    bars: [
      { name: 'STEM & KIDS CODING CURRICULUM', percent: 98, barColor: 'bg-tertiary' },
      { name: 'KEYNOTE & AUDITORIUM MC HOSTING', percent: 96, barColor: 'bg-primary' },
      { name: 'AI IN EDUCATION INTEGRATION', percent: 88, barColor: 'bg-ink' },
      { name: 'WORKSHOP FACILITATION (BILINGUAL)', percent: 94, barColor: 'bg-primary-container' },
    ],
    crewTitle: 'CREATIVE TOOLS & HARDWARE',
    crewItems: [
      { label: 'Scratch 3.0', highlight: true },
      { label: 'micro:bit' },
      { label: 'Figma Design' },
      { label: 'CapCut Pro' },
      { label: 'ChatGPT / Gemini' },
    ],
  },
];

export const HONORS: HonorItem[] = [
  {
    year: '2024',
    title: 'OUTSTANDING YOUTH STEM ADVOCATE',
    description:
      'Awarded by Kemendikbudristek for expanding rural kids coding access to 15+ sub-districts.',
  },
  {
    year: '2023',
    title: 'TOP 10 EDUTECH INNOVATOR',
    description:
      "National Startup Campus Acceleration cohort finalist for Kidilent's gamified Scratch curriculum.",
  },
  {
    year: '2023',
    title: 'UNIVERSITY SUMMA CUM LAUDE',
    description:
      'Graduated Top 3% in Information Technology, Universitas Indonesia with thesis on adaptive pedagogy.',
  },
  {
    year: '2022',
    title: 'BEST MASTER OF CEREMONY',
    description:
      'Recognized at the Regional Tech Incubator Gala for moderating 14 high-stakes investor pitch days.',
  },
];

export const JOURNEY_VOLUMES: JourneyVolume[] = [
  {
    id: 'vol-2025',
    vol: 'VOL. 04',
    status: 'PRESENT',
    year: '2025',
    headline: 'AI x Early Coding Integration',
    summary:
      'Launching Kidilent AI micro-modules, scaling cross-island training, and hosting national tech summits.',
    chaptersCount: 12,
    tiltClass: '-rotate-2',
    tapeClass: 'left-6 -rotate-6',
    chapters: [
      {
        month: 'Q1 2025',
        title: 'Kidilent Creative AI Micro-Modules',
        detail: 'Launched ethical AI literacy & prompt storytelling workshops for elementary & junior high cohorts.',
      },
      {
        month: 'Q2 2025',
        title: 'Cross-Island Teacher Fellowship',
        detail: 'Expanded remote mentor training to Sumatra, Kalimantan, and Sulawesi partner schools.',
      },
      {
        month: 'Q3 2025',
        title: 'National AI & Youth Summit Host',
        detail: 'Headlined bilingual moderation and keynote advocacy on computational logic in the AI era.',
      },
    ],
  },
  {
    id: 'vol-2024',
    vol: 'VOL. 03',
    status: 'ARCHIVED',
    year: '2024',
    headline: '5,000+ Young Coders',
    summary:
      'Official partnerships with 20+ private and public schools. Expansion of physical STEM labs in West Java.',
    chaptersCount: 24,
    tiltClass: 'rotate-1',
    tapeClass: 'right-6 rotate-3',
    chapters: [
      {
        month: 'FEB 2024',
        title: 'West Java Physical STEM Labs',
        detail: 'Opened hands-on micro:bit robotics and game design studios in Bandung and Depok.',
      },
      {
        month: 'JUL 2024',
        title: 'Kemendikbudristek Youth STEM Award',
        detail: 'Recognized nationally for bringing creative computing bootcamps to 15+ rural sub-districts.',
      },
      {
        month: 'NOV 2024',
        title: 'Kidilent Student Expo ’24',
        detail: 'Hosted 400+ young builders showcasing original Scratch & Roblox games to parents and industry judges.',
      },
    ],
  },
  {
    id: 'vol-2023',
    vol: 'VOL. 02',
    status: 'ARCHIVED',
    year: '2023',
    headline: 'Kidilent Founding & Degree',
    summary:
      'Completed Bachelor in Information Technology with Cum Laude honors. Incorporated Kidilent studio.',
    chaptersCount: 18,
    tiltClass: '-rotate-1',
    tapeClass: 'left-10 -rotate-2',
    chapters: [
      {
        month: 'MAR 2023',
        title: 'Kidilent Incorporated',
        detail: 'Transformed pilot weekend classes into a structured edutech studio with its first 6 mentor instructors.',
      },
      {
        month: 'AUG 2023',
        title: 'Universitas Indonesia Cum Laude (3.91)',
        detail: 'Defended honors thesis on adaptive gamified computational pedagogy for ages 8–12.',
      },
      {
        month: 'OCT 2023',
        title: 'Startup Campus Top 10 Finalist',
        detail: 'Selected among top national edutech innovators out of 250+ founding teams.',
      },
    ],
  },
  {
    id: 'vol-2022',
    vol: 'VOL. 01',
    status: 'ARCHIVED',
    year: '2022',
    headline: 'PMO Sprints & Public Voice',
    summary:
      'Stepped up as Scrum PMO for large-scale LMS. Hosted first series of tech conferences for 1,000+ attendees.',
    chaptersCount: 15,
    tiltClass: 'rotate-2',
    tapeClass: 'right-10 rotate-6',
    chapters: [
      {
        month: 'JAN 2022',
        title: 'Scrum Master & PMO Lead',
        detail: 'Architected Jira sprint rituals for a 40,000-learner vocational LMS engineering squad.',
      },
      {
        month: 'JUN 2022',
        title: 'First 1,000+ Seat Tech Summit',
        detail: 'Stepped onto the main auditorium stage as bilingual MC for Jakarta tech & startup festivals.',
      },
      {
        month: 'DEC 2022',
        title: 'Best Master of Ceremony Honor',
        detail: 'Awarded at the Regional Tech Incubator Gala after anchoring 14 investor pitch days.',
      },
    ],
  },
];

export const INQUIRY_TRACK_OPTIONS = [
  'Keynote Speaking & MC Moderation',
  'Kidilent Coding Workshop & Curriculum',
  'Project Management & Agile Advisory',
  'General Media & Partnership Inquiry',
];
