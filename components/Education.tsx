"use client";

import { motion } from "framer-motion";
import { revealTransition, revealViewport } from "./motionConfig";

const education = [
  {
    degree: "Master of Computer Applications",
    short: "M.C.A",
    school: "G.D. Goenka University",
    period: "2021 — 2023",
  },
  {
    degree: "Bachelor of Computer Applications",
    short: "B.C.A",
    school: "G.D. Goenka University",
    period: "2018 — 2021",
  },
];

export default function Education() {
  return (
    <section id="education" className="section section-education">
      <div className="section-shell">
        <div className="eyebrow">06 / Education</div>
        <div className="education-layout">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={revealTransition}
          >
            Formal roots.
            <br />
            <span className="gradient-text">Practical growth.</span>
          </motion.h2>

          <div className="education-list">
            {education.map((item, index) => (
              <motion.article
                key={item.short}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={revealViewport}
                transition={{ ...revealTransition, delay: index * 0.09 }}
              >
                <div className="education-short">{item.short}</div>
                <div>
                  <span>{item.period}</span>
                  <h3>{item.degree}</h3>
                  <p>{item.school}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
