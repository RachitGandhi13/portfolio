export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface ProjectItem {
  title: string;
  problem: string;
  solution: string;
  role: string;
  constraint: string;
  tradeoff: string;
  impact: string[];
  tech: string[];
  github: string;
  demo: string | null;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  gpa: string | null;
  coursework: string[];
}

export const personalInfo = {
  name: "Rachit Gandhi",
  role: "Full-Stack Developer",
  tagline:
    "I build production web apps with the MERN stack, Next.js, and TypeScript — with a niche in real-time (WebRTC), Web3 (Solidity), and DevOps (Docker, CI/CD).",
  email: "rachitgandhi7727@gmail.com",
  phone: "+91 7004363366",
  github: "https://github.com/RachitGandhi13",
  linkedin: "https://linkedin.com/in/rachitgandhi13",
  resumePath: "/resume.pdf",
} as const;

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C", "C++", "Solidity"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Flask"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    category: "Real-time",
    items: ["WebRTC", "Socket.io"],
  },
  {
    category: "DevOps",
    items: ["Docker", "GitHub Actions", "CI/CD", "Vercel", "Linux", "Nginx"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "API Testing"],
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: "The Language Salon",
    role: "Full Stack Developer (Freelance)",
    period: "Feb 2026 – Mar 2026",
    location: "Remote",
    bullets: [
      "Architected and deployed a production-ready Next.js + TypeScript website with SEO optimization, improving page load speed by 25%.",
      "Integrated Razorpay payment gateway with secure APIs and fraud-prevention measures, reducing fraudulent transactions by 20%.",
      "Developed and automated a lead-capture system with Excel data storage, capturing 30+ leads per month.",
    ],
  },
  {
    company: "Lions International",
    role: "Software Developer Intern",
    period: "May 2025 – Jul 2025",
    location: "India",
    bullets: [
      "Developed and debugged MERN stack applications, resolving API integration and frontend state-management issues, reducing debugging time by 25%.",
      "Designed and implemented RESTful APIs with optimized MongoDB queries, improving API response time by 25%.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Trading Platform",
    problem:
      "Most stock-trading learning tools are either too simplified to be realistic or too complex to learn from. There was no middle ground for students to simulate real portfolio decisions with actual market mechanics.",
    solution:
      "Built a full-stack MERN trading simulation where users can buy/sell across 50+ stocks with live portfolio tracking, P&L calculation, and Chart.js visualisations — close enough to real to teach intuition, safe enough to experiment.",
    role:
      "Solo project. Designed the schema, built all REST APIs, implemented the React frontend, and handled auth + security hardening end-to-end.",
    constraint:
      "Built solo in under 3 weeks as a self-learning exercise. No third-party trading API budget, so all stock price logic runs on simulated data.",
    tradeoff:
      "Chose simulated prices over a free API (like Yahoo Finance) because rate limits would've broken real-time updates for multiple concurrent sessions. Sacrificed live data for a more stable learning experience.",
    impact: [
      "Tracks 50+ simulated stocks with real buy/sell mechanics",
      "40% reduction in security vulnerabilities after hardening APIs against SQL injection and XSS",
      "Full P&L tracking and chart visualisation across sessions",
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Chart.js"],
    github: "https://github.com/RachitGandhi13/trading-platform",
    demo: null,
  },
  {
    title: "Video Conferencing",
    problem:
      "Zoom and Google Meet are black boxes — great to use, impossible to learn from. I wanted to understand how peer-to-peer video streaming actually works at the protocol level, not just call an SDK.",
    solution:
      "Built a WebRTC-based video conferencing app from scratch using native browser APIs for P2P media, Socket.io for signaling, and a Node/Express server for room management — no Twilio, no Agora, no shortcuts.",
    role:
      "Solo project. Implemented the full WebRTC handshake (offer/answer/ICE), Socket.io signaling server, and React room UI.",
    constraint:
      "No third-party video SDK allowed (self-imposed). Had to implement STUN/TURN config manually and handle browser compatibility edge cases across Chrome and Firefox.",
    tradeoff:
      "Kept the server stateless (rooms stored in memory, not DB) to simplify architecture. This means rooms don't survive server restarts — acceptable for a learning project, not production.",
    impact: [
      "Supports up to 10 concurrent users in a single room",
      "Achieves low-latency P2P streaming without any paid video SDK",
      "Full signaling flow implemented: offer → answer → ICE candidate exchange",
    ],
    tech: ["React", "Node.js", "Express.js", "WebRTC", "Socket.io", "MongoDB"],
    github: "https://github.com/RachitGandhi13/videoCalling",
    demo: null,
  },
];

export const education: EducationItem[] = [
  {
    institution: "SRM University",
    degree: "B.Tech in Computer Science and Engineering",
    period: "Aug 2023 – May 2027",
    location: "Chennai, India",
    gpa: "8.97 / 10",
    coursework: [
      "Data Structures & Algorithms",
      "DBMS",
      "Computer Networks",
      "Operating Systems",
      "Software Engineering",
    ],
  },
  {
    institution: "Saint Francis School, Deoghar",
    degree: "Class 12: 80%  ·  Class 10: 95.4%",
    period: "2021 – 2023",
    location: "Deoghar, India",
    gpa: null,
    coursework: [],
  },
];

export const achievements: string[] = [
  "External Affairs & Editorial Lead — techno-cultural fests",
  "Oracle Certified Foundations Associate",
  "NPTEL — Programming in Java",
  "DBMS Certification (Scaler)",
  "Guitarist & competitive swimmer",
];
