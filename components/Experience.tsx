"use client";

import { motion } from "framer-motion";
import { revealTransition, revealViewport } from "./motionConfig";

const roles = [
  {
    period: "2025(Mar) — present",
    role: "Frontend Developer",
    company: "Stranity India Private Limited",
    description:
      "Built production-facing frontend experiences and reusable UI systems for business-critical workflows on a long-term contract.",
  },
  {
    period: "2023(FEB) — 2024(OCT)",
    role: "Junior Software Engineer",
    company: "Evince Development Pvt. Ltd.",
    description:
      "Delivered responsive applications across React, Angular, Next.js, and Nuxt while collaborating with design, backend, and QA teams.",
  },
  
];

export default function Experience() {
  return (
    <section id="experience" className="section section-experience">
      <div className="section-shell">
        <div className="eyebrow">04 / Timeline</div>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={revealTransition}
        >
          A trajectory built
          <br />
          <span className="gradient-text">through shipping.</span>
        </motion.h2>

        <div className="timeline">
          {roles.map((item, index) => (
            <motion.article
              key={item.company}
              className="timeline-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={revealViewport}
              transition={{ ...revealTransition, delay: index * 0.09 }}
            >
              <span className="timeline-dot" />
              <div className="timeline-period">{item.period}</div>
              <div>
                <h3>{item.role}</h3>
                <strong>{item.company}</strong>
                <p>{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
