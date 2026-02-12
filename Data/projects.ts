



export interface ProjectType {
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  role: string;
  duration: string;
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
    duration: "6 Months",
    techStack: ["Next.js", "MUI", "TypeScript", "REST APIs"],
    features: [
      "Transaction Management",
      "Analytics Dashboard",
      "Role-based Access",
      "MPOS Integration",
    ],
    images: ["/projects/mporeo-1.png", "/projects/mporeo-2.png"],
    liveUrl: "https://example.com",
  },
];
