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
  description: string;
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
    "I build production web apps with the MERN stack, Next.js, and TypeScript — with a niche in real-time (WebRTC) and Web3 (Solidity).",
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
    description:
      "Full-stack MERN stock-trading simulation with buy/sell operations and portfolio tracking for 50+ simulated stocks. Fortified with input validation and secure API handling to prevent SQL injection and XSS attacks, reducing vulnerability risks by 40%.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Chart.js"],
    github: "https://github.com/RachitGandhi13/trading-platform",
    demo: null,
  },
  {
    title: "Video Conferencing Platform",
    description:
      "Real-time video conferencing application supporting up to 10 concurrent users with WebRTC peer-to-peer media streaming and Socket.io signaling, achieving low-latency communication across 5–10 participants.",
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
