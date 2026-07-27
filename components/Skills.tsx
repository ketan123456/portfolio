"use client";

import { motion } from "framer-motion";
import TechIcon3D from "./TechIcon3D";
import { revealTransition, revealViewport } from "./motionConfig";

const skillGroups = [
  {
    title: "Technical Skills",
    code: "CORE_STACK",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "SCSS",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "Redux",
      "Context API",
      "jQuery",
    ],
  },
  {
    title: "Tools & Software",
    code: "DEV_TOOLKIT",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "REST APIs",
      "Chrome DevTools",
      "npm",
      "Responsive Web Design",
      "Cross-Browser Testing",
    ],
  },
  {
    title: "Frontend Development",
    code: "UI_SYSTEMS",
    skills: ["Dashboard UI", "E-commerce UI", "POS"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section section-skills grid-surface">
      <div className="ambient ambient-three" />
      <div className="section-shell">
        <div className="eyebrow">02 / Tech arsenal</div>
        <motion.h2
          className="section-title skills-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={revealTransition}
        >
          A constellation of
          <br />
          <span className="gradient-text">production-ready tools.</span>
        </motion.h2>
        <p className="section-intro">
          Technical foundations, development tools, and interface systems
          proven across real products.
        </p>

        <div className="skill-groups">
          {skillGroups.map((group, groupIndex) => {
            const offset = skillGroups
              .slice(0, groupIndex)
              .reduce((total, item) => total + item.skills.length, 0);

            return (
              <div className="skill-group" key={group.title}>
                <div className="skill-group-header">
                  <span>{group.code}</span>
                  <h3>{group.title}</h3>
                  <strong>{String(group.skills.length).padStart(2, "0")} ITEMS</strong>
                </div>
                <div className="skill-constellation">
                  {group.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="skill-node"
                      initial={{ opacity: 0, y: 30, scale: 0.96 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={revealViewport}
                      transition={{
                        duration: 0.65,
                        ease: revealTransition.ease,
                        delay: (index % 4) * 0.07,
                      }}
                      whileHover={{ y: -6, scale: 1.03 }}
                    >
                      <span className="skill-index">
                        {String(offset + index + 1).padStart(2, "0")}
                      </span>
                      <TechIcon3D name={skill} />
                      <strong>{skill}</strong>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
