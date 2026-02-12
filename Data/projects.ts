



export interface ProjectType {
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  role: string;
  techStack: string[];
  features: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: ProjectType[] = [
  {
    slug: "mporeo-ecosystem",
    title: "Mporeo Ecosystem",
    tagline: "Web + MPOS Payment Platform",
    overview:
      "Developed a scalable payment ecosystem integrating Web dashboard and MPOS system with transaction management and analytics.",
    role: "Frontend Developer",
    techStack: ["Next.js", "MUI", "TypeScript", "REST APIs"],
    features: [
      "Transaction Management",
      "Analytics Dashboard",
      "Role-based Access",
      "MPOS Integration",
    ],
    images: ["/projects/mporeo-1.png", "/projects/mporeo-2.png"],
    liveUrl: "https://mporeo.one",
  },
  {
    slug: "clymb",
    title: "clymb",
    tagline: "student performance management system",
    overview:
      "Developed a scalable payment ecosystem integrating Web dashboard and MPOS system with transaction management and analytics.",
    role: "UI Developer",
    techStack: ["Angular", "ng-Bootstrap", "Material", "SCSS"],
    features: [
      "Students express their emotional state and receive tailored content.",
      "Interactive feed for sharing achievements, thoughts, and media.",
      "A digital hub of videos and articles promoting well-being.",
        "A reflective diary for students to track emotions and growth.",
        "Motivational gamified elements that reward participation.",
        "Collects feedback and user insights to improve experiences.",
        "Evaluates socio-emotional learning through monthly surveys.",
        "Tracks learning activities and milestones.",
        "Smart suggestions powered by user interaction data."

    ],
    images: ["/clymb/clymb.png", "/projects/mporeo-2.png"],
    liveUrl: "",
  },
];
