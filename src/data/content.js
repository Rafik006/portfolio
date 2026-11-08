// Single source of truth for everything the page says.
// Rules: never name the employer or its products; one idea per line; numbers first.
import Rbk_website from "../assets/Images/Rbk_website.webp";
import ecommerce from "../assets/Images/E-commerce.webp";
import travelMind from "../assets/Images/TravelMind.webp";
import shoes_Store from "../assets/Images/shoesStore.webp";
import doctorapp from "../assets/Images/doctor_app.webp";
import rfpofficeSite from "../assets/Images/rfpoffice-site.webp";
import tunigooSite from "../assets/Images/tunigoo-site.webp";

const BASE = import.meta.env.BASE_URL;

export const profile = {
  name: "Rafik Mhadhbi",
  roles: ["Full-Stack Engineer", "AI/LLM Application Engineer", "Voice & Conversational AI Engineer", "Node.js · Python · Go · Laravel"],
  positioning: "Full-stack engineer building AI chat and voice agents, real-time telephony and the platforms behind them — TypeScript, Python, Go and Laravel.",
  location: "Sousse, Tunisia · remote-ready (CET)",
  email: "rafikmhadhbi01@gmail.com",
  openTo: "Open to full-stack, backend and AI-application roles — remote or hybrid.",
  links: {
    linkedin: "https://www.linkedin.com/in/mhadhbi-rafik/",
    github: "https://github.com/Rafik006",
    whatsapp: "https://wa.me/21620742030",
    cv: `${BASE}cv/Rafik-Mhadhbi-CV.pdf`,
    cvInternational: `${BASE}cv/Rafik-Mhadhbi-CV-international.pdf`,
  },
  pillars: [
    {
      id: "agents",
      title: "AI agents & LLM apps",
      proof: "Prompt and tool design, guardrails in code, evaluation and replay harnesses, tracing and cost control, MCP integrations.",
      stat: "Python · TypeScript · Gemini & Claude · MCP",
    },
    {
      id: "voice",
      title: "Real-time voice & telephony",
      proof: "WebRTC and SIP media handling in Go, phone and switchboard connectivity, WhatsApp calls, speech-to-speech runtimes.",
      stat: "Go · Pion WebRTC · SIP · Twilio · WhatsApp Business",
    },
    {
      id: "platforms",
      title: "Backend platforms & data",
      proof: "Multi-tenant APIs, data migrations at fleet scale, scraping and summarisation pipelines, Kubernetes and gitops releases.",
      stat: "NestJS · Laravel · MongoDB · PostgreSQL · Kubernetes",
    },
  ],
};

export const about = {
  intro:
    "Full-stack developer with 2+ years in production on AI chat and voice agents and the platforms behind them. Node.js / NestJS, Laravel, Python and Go on the backend; React and Next.js on the front; MongoDB, PostgreSQL and Kubernetes underneath.",
  rows: [
    {
      label: "Now",
      title: "Full-Stack Engineer · Quicktext",
      period: "Jun 2024 – present",
      line: "AI chat and voice agents, telephony integrations (phone, SIP, WhatsApp calls), website widget and booking-engine connectors, scraping and summary pipelines, an MCP write layer for configuration, a multi-tenant platform on Kubernetes.",
    },
    {
      label: "Before",
      title: "JavaScript Instructor · ReBootKamp (RBK)",
      period: "Oct 2023 – May 2024",
      line: "Taught full-stack JavaScript and mentored student teams through planning, delivery and code reviews.",
    },
    {
      label: "Earlier",
      title: "Full-Stack Web & Mobile Developer · E-Tafakna",
      period: "2023",
      line: "Mobile app for digital contract signing: React Native with an Express and SQL backend, JWT authentication, e-mail and phone verification.",
    },
    {
      label: "On the side",
      title: "Two ventures",
      period: "2026 – present",
      line: "RFPOffice (co-founder, technical lead) and Tunigoo (founder).",
    },
  ],
};

/** Employer named for the position only; never its products. Tenure is computed from `start` at render time. */
export const employer = {
  role: "Full-Stack Engineer",
  company: "Quicktext",
  start: "2024-06-01",
  period: "Jun 2024 – present",
  note: "CDD, then CDI · team of ~50 · reporting to the CTO",
  link: "https://www.quinta.im/",
  highlights: [
    {
      title: "AI agents",
      bullets: [
        "Chat and voice agent runtime in Python / FastAPI: prompts, tools, guardrails in code",
        "300+ agent bugs closed; 219-case replay suite run before each release",
        "Elasticsearch conversation tracer tuned from 21 s to 2 s per query",
      ],
    },
    {
      title: "Voice & telephony",
      bullets: [
        "Media gateway in Go (Pion WebRTC, SIP, Opus), designed from zero: ~12 → hundreds of concurrent calls per instance",
        "Phone numbers, SIP switchboards and WhatsApp calls connected end to end",
        "Call transfer to departments, SMS links during calls, barge-in",
      ],
    },
    {
      title: "Platform & integrations",
      bullets: [
        "Multi-tenant NestJS / MongoDB configuration platform with an MCP read / write layer",
        "Website scraping and summary pipelines that feed the agent",
        "Website widget script, booking-engine connectors, lead and task creation",
        "Laravel backend features and integrations",
      ],
    },
    {
      title: "Delivery",
      bullets: [
        "Releases across a dozen services on Kubernetes, gitops as the source of truth",
        "Fleet-wide data migrations with dry runs and snapshots",
        "Chat and voice runtimes merged into one shared core with parity tests",
      ],
    },
  ],
  stack: ["TypeScript", "NestJS", "Laravel", "Python", "FastAPI", "Go", "MongoDB", "Redis", "Elasticsearch", "Kubernetes", "Gemini", "Next.js"],
};

export const ventures = [
  {
    id: "rfpoffice",
    name: "RFPOffice",
    role: "Co-founder · technical lead (part-time)",
    period: "2026 – present",
    line: "AI SaaS that turns RFP documents into proposals. I own the architecture and the code; partners run sales and account management.",
    stack: ["NestJS", "BullMQ", "Supabase", "pgvector", "Claude", "TanStack Start", "Cloudflare"],
    link: "https://rfpoffice.com/",
  },
  {
    id: "tunigoo",
    name: "Tunigoo",
    role: "Founder (part-time)",
    period: "2026 – present",
    line: "Airport-transfer and car-rental platform for the Tunisian market, built end to end from data model to prerendered multilingual pages.",
    stack: ["React", "Vite SSR", "Prisma", "PostgreSQL", "i18n"],
    link: "https://tunigoo.tn",
  },
];

export const earlier = [
  {
    id: "rbk",
    company: "ReBootKamp (RBK)",
    role: "JavaScript Instructor",
    period: "Oct 2023 – May 2024",
    line: "Taught full-stack JavaScript and mentored student teams through planning, delivery and code reviews.",
    link: "https://www.rbktunisia.com/",
  },
  {
    id: "etafakna",
    company: "E-Tafakna",
    role: "Full-Stack Web & Mobile Developer",
    period: "Sep 2023",
    line: "Mobile app for digital contract signing: React Native with an Express and SQL backend, JWT authentication, e-mail and phone verification, contract search and navigation.",
    link: "https://www.e-tafakna.com/",
  },
];

/** Grouped by what I do with it. Never percentages. `icon` keys map to src/data/icons.js. */
export const skillGroups = [
  {
    id: "agent",
    title: "AI agents",
    lead: "LLM agents that hold up in production.",
    icon: "bot",
    items: [
      { name: "Python", icon: "SiPython" },
      { name: "FastAPI", icon: "SiFastapi" },
      { name: "Gemini & Claude", icon: "SiGooglegemini" },
      { name: "MCP", icon: "SiModelcontextprotocol" },
      { name: "RAG / pgvector", icon: "LuDatabase" },
      { name: "Elasticsearch", icon: "SiElasticsearch" },
    ],
  },
  {
    id: "voice",
    title: "Voice & telephony",
    lead: "Real-time audio between callers and AI.",
    icon: "wave",
    items: [
      { name: "Go", icon: "SiGo" },
      { name: "WebRTC", icon: "SiWebrtc" },
      { name: "SIP", icon: "TbPhoneCall" },
      { name: "Twilio", icon: "FaPhone" },
      { name: "WhatsApp Calling", icon: "SiWhatsapp" },
    ],
  },
  {
    id: "platform",
    title: "Backend & platform",
    lead: "Multi-tenant APIs, data and deployments.",
    icon: "server",
    items: [
      { name: "Node.js / NestJS", icon: "SiNestjs" },
      { name: "Laravel / PHP", icon: "SiLaravel" },
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "Redis", icon: "SiRedis" },
      { name: "Kubernetes", icon: "SiKubernetes" },
      { name: "Docker", icon: "SiDocker" },
    ],
  },
  {
    id: "product",
    title: "Frontend",
    lead: "Fast, accessible, multilingual interfaces.",
    icon: "layers",
    items: [
      { name: "React", icon: "SiReact" },
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "Tailwind", icon: "SiTailwindcss" },
      { name: "i18n (36+ languages)", icon: "FaLanguage" },
    ],
  },
];

export const marquee = [
  ["TypeScript", "SiTypescript"], ["Node.js", "SiNodedotjs"], ["NestJS", "SiNestjs"], ["Python", "SiPython"], ["FastAPI", "SiFastapi"],
  ["Go", "SiGo"], ["Laravel", "SiLaravel"], ["React", "SiReact"], ["Next.js", "SiNextdotjs"], ["MongoDB", "SiMongodb"], ["PostgreSQL", "SiPostgresql"],
  ["Redis", "SiRedis"], ["Kubernetes", "SiKubernetes"], ["Docker", "SiDocker"], ["Elasticsearch", "SiElasticsearch"], ["Tailwind", "SiTailwindcss"],
  ["Vite", "SiVite"], ["Git", "SiGit"], ["Linux", "SiLinux"], ["Prisma", "SiPrisma"], ["Supabase", "SiSupabase"],
  ["Cloudflare", "SiCloudflare"], ["GitHub Actions", "SiGithubactions"], ["WebRTC", "SiWebrtc"], ["WhatsApp", "SiWhatsapp"],
];

export const projects = [
  {
    id: "rfpoffice",
    title: "RFPOffice",
    role: "Co-founder · technical lead",
    period: "2026 – present",
    img: rfpofficeSite,
    url: "https://rfpoffice.com/",
    domain: "rfpoffice.com",
    summary: "AI SaaS that turns RFP documents into proposals: ingest, extract the structure, score the bid, draft grounded sections, price, assemble.",
    highlights: [
      "NestJS 11 API with twelve BullMQ queues, replacing a no-code backend",
      "One model-call service: routing, retries, token-cost ledger",
      "pgvector RAG with an evaluation harness (hit@K, MRR) as a CI gate",
      "OpenAPI-generated client for the TanStack Start front end",
    ],
    stack: ["NestJS 11", "BullMQ", "Supabase Postgres", "pgvector", "Claude", "TanStack Start", "Cloudflare"],
  },
  {
    id: "tunigoo",
    title: "Tunigoo",
    role: "Founder",
    period: "2026 – present",
    img: tunigooSite,
    url: "https://tunigoo.tn",
    domain: "tunigoo.tn",
    summary: "Airport-transfer and car-rental platform for the Tunisian market, built end to end.",
    highlights: [
      "Prisma / PostgreSQL API in a pnpm monorepo",
      "React client prerendered per language: French, English, Arabic",
      "Multi-currency pricing with a daily exchange-rate refresh",
      "Driving distances via OpenRouteService, resumable and quota-aware",
    ],
    stack: ["React", "Vite SSR", "Prisma", "PostgreSQL", "Render", "Cloudflare Pages"],
  },
];

/** Public teaching material on GitHub. */
export const teaching = {
  title: "Day-by-day curricula for first-time backend developers",
  role: "Instructor and author",
  period: "2023 – 2026",
  summary: "Public roadmaps that take a learner from a static to-do list to an Express + MongoDB API in ten days.",
  highlights: [
    "HTML / CSS / JS → React → Express + MongoDB, one idea per day",
    "Each step built twice: following along, then from memory",
    "The why before the how, at every step",
  ],
  stack: ["JavaScript", "React", "Express", "MongoDB", "Git"],
  links: [
    { label: "Express + MongoDB roadmap", url: "https://github.com/Rafik006/express-mongo-todolist-roadmap" },
    { label: "React roadmap", url: "https://github.com/Rafik006/React-todolist-roadmap" },
    { label: "HTML / CSS / JS roadmap", url: "https://github.com/Rafik006/todolist-roadmap" },
  ],
};

/** Earlier work (2023). Descriptions reflect each repository's actual stack. */
export const earlierWork = [
  {
    name: "RBK official website",
    img: Rbk_website,
    line: "Team project of three: Next.js client, admin dashboard, Express + MySQL (Sequelize) API with Firebase auth and real-time chat.",
    stack: ["Next.js", "Express", "MySQL", "Firebase"],
    source: "https://github.com/Thesis-Project01/RBK",
  },
  {
    name: "E-commerce (Next.js)",
    img: ecommerce,
    line: "Team project: TypeScript Next.js storefront and admin app over an Express + MySQL API with Cloudinary images and e-mail notifications.",
    stack: ["Next.js", "TypeScript", "Express", "MySQL"],
    source: "https://github.com/farachet/E-commerce-Next-js",
  },
  {
    name: "Travel Mind",
    img: travelMind,
    line: "Travel-planning web app: React front end, Express API with Mongoose and Sequelize models, Cloudinary media.",
    stack: ["React", "Express", "MongoDB", "MySQL"],
    source: "https://github.com/Rafik006/TravelMind",
  },
  {
    name: "Tanitown shoe store",
    img: shoes_Store,
    line: "First React project: a product catalogue with routing, carousels and transitions, built with Create React App.",
    stack: ["React", "React Router"],
    source: "https://github.com/Rafik006/tanitown-shoe-store",
  },
  {
    name: "The Doctor",
    img: doctorapp,
    line: "Doctor-appointment app: React client with routing over an Express + MySQL (Sequelize) API with hashed credentials.",
    stack: ["React", "Express", "MySQL"],
    source: "https://github.com/Rafik006/The-Doctor",
  },
];

export const navLinks = [
  { href: "#about_me", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#stories", label: "Stories" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
