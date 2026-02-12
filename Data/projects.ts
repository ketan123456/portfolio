



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
    techStack: ["Html", "Css", "Bootstrap", "jQuery"],
    features: [
      "Customers can browse restaurants, view menus, place food orders, make secure payments, and track their deliveries in real time.",
      "Delivery agents can accept or reject orders, view optimized routes, update status in real-time, and receive payment summaries through their dedicated app.",
      "The admin can manage users, restaurants, orders, commissions, and payment settlements, ensuring smooth operations and service efficiency.",
      "Customers can enjoy discounts, loyalty points, and promo codes, enhancing engagement and retention.",
    ],
    images: [
      "/mporeo/mporeo1.jpeg",
      "/mporeo/mporeo2.jpeg",
      "/mporeo/mporeo3.jpeg",
      "/mporeo/mporeo4.jpeg",
      "/mporeo/mporeo5.png",
    ],
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
      "Smart suggestions powered by user interaction data.",
    ],
    images: ["/clymb/clymb.png", "/projects/mporeo-2.png"],
    liveUrl: "",
  },
];
