// index.js
export const servicesData = [
  {
    title: "FullStack Development",
    description:
      "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
    items: [
      {
        title: "Backend Engineering",
        description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, Vue, TypeScript, Interactive UI/UX)",
      },
      {
        title: "Database Design",
        description: "(SQL/NoSQL Optimization, Scalable Structures)",
      },
    ],
  },
  {
    title: "DevOps & Cloud Solutions",
    description:
      "Deploying software shouldn't be a gamble. I automate infrastructure, enforce security, and leverage cloud platforms (AWS/Azure) to keep your app running smoothly—24/7, at any scale.",
    items: [
      {
        title: "CI/CD Pipelines",
        description: "(GitHub Actions, Docker, Kubernetes)",
      },
      {
        title: "Server Management ",
        description: "(Linux, Nginx, Load Balancing)",
      },
      {
        title: "Performance Tuning",
        description: "(Caching, Compression, Lighthouse 90+ Scores)",
      },
    ],
  },
  {
    title: "Security & Optimization",
    description:
      "Slow or hacked apps destroy trust. I harden security (XSS/SQLI protection, OAuth) and optimize bottlenecks so your app stays fast, safe, and scalable as you grow.",
    items: [
      {
        title: "Code Audits",
        description: "(Refactoring, Tech Debt Cleanup)",
      },
      {
        title: "Pen Testing",
        description: "(Vulnerability Assessments)",
      },
      {
        title: "SEO Tech Stack",
        description: "(SSR, Metadata, Structured Data)",
      },
    ],
  },
  {
    title: "Web & Mobile Apps",
    description:
      "A clunky interface can sink even the best ideas. I craft responsive, pixel perfect web and mobile apps (React Native/Flutter) that users love—bridging design and functionality seamlessly.",
    items: [
      {
        title: "Cross-Platform Apps",
        description: "(Single codebase for iOS/Android/Web)",
      },
      {
        title: "PWAs",
        description: "(Offline mode, Push Notifications)",
      },
      {
        title: "E-Commerce",
        description: "(Checkout flows, Payment Gateways, Inventory APIs)",
      },
    ],
  },
];
export const projects = [
  {
    id: 1,
    name: "EmpathAI Feedback Platform",
    description:
      "Voice-based client feedback service powered by FastAPI microservices and an NVIDIA L40 GPU inference pipeline, delivering real-time transcripts, sentiment insights, and recordings inside a Next.js dashboard.",
    href: "https://aiservices-theta.vercel.app/",
    image: "/assets/projects/EmpathAi-Video-Analyzer.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "FastAPI" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Python" },
      { id: 4, name: "Prisma" },
      { id: 5, name: "AWS" },
    ],
  },
  {
    id: 2,
    name: "Filament Freaks E-commerce",
    description:
      "Full-stack marketplace for 3D-printing supplies with inventory controls, order management, and analytics backed by a custom dashboard.",
    href: "https://filamentfreaks.com/",
    image: "/assets/projects/filament-3d-store.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "React" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "Yen Yoga Retreat",
    description:
      "Bilingual (Vietnamese/English) wellness site with a CMS-driven content workflow and immersive storytelling to highlight retreat experiences.",
    href: "https://yenyogaretreat.org/",
    image: "/assets/projects/YenYoga-retreat.png",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "React" },
      { id: 3, name: "Sanity CMS" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 4,
    name: "The Gurukul Classes LMS",
    description:
      "Learning management platform for a coaching institute featuring course sales, student progress tracking, and role-based admin controls.",
    href: "https://thegurukulclasses.com/",
    image: "/assets/projects/Gurukul-Classes.png",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "Express" },
      { id: 4, name: "MongoDB" },
    ],
  },
];
export const socials = [
  { name: "GitHub", href: "https://github.com/newcomer119" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/mitarth-pandey/" },
];
