



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
      slug: "mporeo",
      title: "Mporeo",
      tagline: "Resturant management and food delivery system",
      overview: " Mporeo is an end-to-end online restaurant service platform designed to simplify food ordering and delivery for both customers and restaurant owners. The system provides real-time order updates, secure payments, and GPS-enabled delivery tracking. Restaurants can onboard easily, upload menus, manage inventory, and receive live order notifications, while customers can browse, filter, and order from a variety of cuisines. The platform includes three core applications — Customer App, Restaurant Dashboard, and Delivery Partner App — all connected through a powerful Admin Panel that ensures smooth coordination and performance monitoring.",
      techStack: [ "Html", "Css", "Bootstrap", "jQuery" ],
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
      role: "Frontend developer",
  },
  {
    slug: "clymb",
    title: "clymb",
    tagline: "student performance management system",
    overview:
      "Clymb is an EdTech solution that provides personalized learning paths based on CASEL's socio-emotional competencies. The platform integrates Clever for onboarding, offers mental wellness resources, and includes corporate well-being modules. Its mission is to enhance youth’s socio-emotional intelligence through technology-driven education. ",
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
      images: Array.from({ length: 24 }, (_, i) => `/clymb/clymb${i + 1}.png`),
      liveUrl: "",
  },
];
