"use client";

import { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { motion } from "framer-motion";

import {
  ReactIcon,
  NextIcon,
  JSIcon,
  TSIcon,
  HtmlIcon,
  CssIcon,
  ReduxIcon,
  ApiIcon,
  TailwindIcon,
  BootstrapIcon,
  MaterialIcon,
} from "./icons";

const skills = [
  { name: "React.js", icon: <ReactIcon /> },
  { name: "Next.js", icon: <NextIcon /> },
  { name: "JavaScript (ES6+)", icon: <JSIcon /> },
  { name: "TypeScript", icon: <TSIcon /> },
  { name: "HTML", icon: <HtmlIcon /> },
  { name: "CSS", icon: <CssIcon /> },
  { name: "Redux", icon: <ReduxIcon /> },
  { name: "Context API", icon: <ReduxIcon /> },
  { name: "Material UI (MUI)", icon: <MaterialIcon /> },
  { name: "Bootstrap", icon: <BootstrapIcon /> },
  { name: "Tailwind CSS", icon: <TailwindIcon /> },
  { name: "REST APIs", icon: <ApiIcon /> },
];

export default function Skills() {
  const splideRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!splideRef.current) return;

    const splide = new Splide(splideRef.current, {
      type: "loop",
      drag: "free",
      focus: "center",
      perPage: 4,
      arrows: false,
      pagination: false,
      gap: "2rem",
      autoScroll: {
        speed: 1,
        pauseOnHover: true,
        pauseOnFocus: false,
      },
      breakpoints: {
        1024: { perPage: 3 },
        768: { perPage: 2 },
        480: { perPage: 1 },
      },
    });

    splide.mount({ AutoScroll });

    return () => {
      splide.destroy();
    };
  }, []);

  return (
    <section
      id="skills"
      className="md:py-24 py-16 overflow-x-hidden bg-black text-white">
      <h2 className="text-3xl font-bold mb-14 text-center">Skills</h2>

      <div ref={splideRef} className="splide">
        <div className="splide__track">
          <ul className="splide__list flex">
            {skills.map((skill, i) => (
              <li key={i} className="splide__slide">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="
                    flex gap-3 items-center justify-center
                    relative overflow-hidden
                bg-white/5
                backdrop-blur-2xl
                border border-white/10
                rounded-3xl
                p-6
                transition-all duration-500
                hover:bg-white/10
                hover:border-white/20
                hover:-translate-y-3
                hover:shadow-2xl
                  ">
                  {skill.icon}
                  <p className="text-sm whitespace-nowrap text-white/70 group-hover:text-white">
                    {skill.name}
                  </p>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
