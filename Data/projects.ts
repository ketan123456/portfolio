



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
    overview:
      " Mporeo is an end-to-end online restaurant service platform designed to simplify food ordering and delivery for both customers and restaurant owners. The system provides real-time order updates, secure payments, and GPS-enabled delivery tracking. Restaurants can onboard easily, upload menus, manage inventory, and receive live order notifications, while customers can browse, filter, and order from a variety of cuisines. The platform includes three core applications — Customer App, Restaurant Dashboard, and Delivery Partner App — all connected through a powerful Admin Panel that ensures smooth coordination and performance monitoring.",
    techStack: ["HTML", "CSS", "Bootstrap", "jQuery"],
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
    techStack: ["Angular", "Bootstrap", "Material", "SCSS"],
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
    images: Array.from({ length: 25 }, (_, i) => `/clymb/clymb${i + 1}.png`),
    liveUrl: "https://clymbadmin.evdpl.com",
  },
  {
    slug: "Consciousroot",
    title: "Consciousroot",
    tagline: "student performance management system",
    overview:
      "Consciousroot is a unified e-commerce ecosystem offering convenience, scalability, and cross-platform accessibility. It bridges the gap between customers, vendors, and admins with real-time operations, analytics, and sleek UI.",
    role: "Ecommerce plateform",
    techStack: ["Next.js", "Redux", "Material"],
    features: [
      "Consumers can easily order and return their products. They can add products to a wishlist to purchase later, choose their preferred payment mode, and view personalized recommendations based on previous purchases.",
      "Admins can manage products, categories, orders, and users, and view detailed sales reports. They can also create offers and discounts to boost sales.",
      "Affiliates can promote products and earn commissions for each sale generated through their unique referral links.",
      "Vendors can manage product listings, track orders, and monitor sales performance through a dedicated vendor dashboard.",
      "Shopkeepers can manage stock, process orders, and access real-time sales insights through a specialized portal.",
    ],
    images: Array.from(
      { length: 13 },
      (_, i) => `/Consciousroot/Consciousroot${i + 1}.png`,
    ),
    liveUrl: "https://consciousroots.life/home",
  },
  {
    slug: "inceptionfertility",
    title: "Inception Fertility",
    tagline:
      "A technology-driven fertility company delivering science-based solutions through an integrated ecosystem of fertility brands.",
    overview:
      "The Inception Fertility platform was designed to provide an informative, seamless digital experience for users seeking fertility support. It focuses on SEO performance, API-driven content delivery, and clear presentation of scientific data while maintaining compliance with healthcare standards.",
    role: "Frontend Developer",
    techStack: ["veu.js", "Nuxt.js", "Bootstrap", "SCSS"],
    features: [
      "Offers categorized fertility and medical data with intelligent search for easy access to relevant information.",
      "Empowers marketing teams to update pages via ButterCMS without developer involvement.",
      "Securely connects with fertility clinics for real-time data synchronization.",
      "Dynamic meta handling and schema structures for improved search visibility.",
      "Delivers consistent, user-friendly experiences across all devices.",
    ],
    images: Array.from(
      { length: 5 },
      (_, i) => `/inceptionfertility/inceptionfertility${i + 1}.png`,
    ),
    liveUrl: "https://inceptionfertility.com",
  },
  {
    slug: "Mporeopos",
    title: "Mporeo pos",
    tagline:
      "A scalable web-based Point of Sale (POS) platform for seamless order, billing, and transaction management.",

    overview:
      "Mporeo POS is a modern web-based Point of Sale system designed to streamline restaurant and retail operations. The platform enables real-time order management, billing, inventory tracking, and analytics through a highly responsive and intuitive interface. Built with performance and scalability in mind, it supports multi-user roles, dynamic menu management, and secure payment processing.",
    role: "Frontend Developer",
    techStack: ["php", "HTML", "Bootstrap", "SCSS", "jQuery"],
    features: [
      "Real-time order management dashboard",
      "Dynamic category & product configuration",
      "Multi-user role-based access control",
      "Secure payment and billing system",
      "Inventory and stock tracking",
      "Search & filter system for fast checkout",
      "Responsive UI optimized for POS terminals",
    ],
    images: Array.from({ length: 6 }, (_, i) => `/mpos/mpos${i + 1}.png`),
    liveUrl: "https://www.mporeopos.com",
  },
  {
    slug: "GOTU",
    title: "GOTU",
    tagline:
      "GOTU is an on-demand service platform connecting customers with verified local professionals for household and personal services through real-time booking and secure payments.",

    overview:
      "GOTU is an on-demand service marketplace designed to connect customers with verified local professionals for household and personal services. The platform allows users to seamlessly book services such as kitchen cleaning, babysitting, pet care, and home maintenance through a user-friendly interface.It focuses on convenience, trust, and transparency by offering real-time booking, service availability tracking, verified vendor profiles, and secure payment integration. The system ensures smooth communication between customers and service providers while maintaining quality standards and reliability. Built with scalability in mind, GOTU supports dynamic service listings, location-based vendor discovery, and streamlined order management, creating a modern digital ecosystem for local service fulfillment.",
    role: "Frontend Developer",
    techStack: ["React.js", "Tailwind CSS", "TypeScript"],
    features: [
      "Vendors can configure their time slots, manage availability, and receive bookings in real-time.",
      "Customers can search, view vendor profiles, and book services instantly based on live availability.",
      "Payments are authorized during booking and captured only after completion for secure transactions.",
      "Ensures consistency, scalability, and maintainability.",
      "Full control over vendors, bookings, and transactions for platform transparency.",
    ],
    images: Array.from({ length: 7 }, (_, i) => `/gotu/gotu${i + 1}.png`),
    liveUrl: "",
  },
];
