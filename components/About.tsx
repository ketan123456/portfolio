"use client";

import { motion } from "framer-motion";
import CountUp from "./CountUp";
import { revealTransition, revealViewport } from "./motionConfig";

const stats = [
  { value: 7, suffix: "+", label: "Products shipped" },
  { value: 3, suffix: "+", label: "Years in craft" },
  { value: 2, pad: 2, label: "Core frameworks" },
];

export default function About() {
  return (
    <section id="about" className="section section-about">
      <div className="section-shell">
        <div className="eyebrow">01 / About</div>
        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={revealTransition}
          >
            <h2 className="section-title">
              I engineer
              <br />
              interfaces that
              <br />
              <span className="gradient-text">work beautifully.</span>
            </h2>
            <div className="about-copy">
              <p>
                I&apos;m a frontend developer building scalable, high-performance
                products with React and Next.js. My work lives at the
                intersection of reusable systems, responsive UI, and practical
                business outcomes.
              </p>
              <p>
                I&apos;ve shipped enterprise dashboards, affiliate platforms,
                e-commerce experiences, and operational tools alongside
                cross-functional product teams.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="identity-card grid-surface"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={revealViewport}
            transition={{ ...revealTransition, delay: 0.1 }}
          >
            <div className="identity-scan" />
            <span className="identity-code">SUBJECT_ID // 00_KK</span>
            <strong>KK</strong>
            <div className="identity-meta">
              <span>Ketan Kritesh</span>
              <span>India / Remote</span>
            </div>
          </motion.div>
        </div>

        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-cell">
              <CountUp
                value={stat.value}
                suffix={stat.suffix}
                pad={stat.pad}
              />
              <span>{stat.label}</span>
            </div>
          ))}
          <div className="stat-cell">
            <strong>∞</strong>
            <span>Curiosity level</span>
          </div>
        </div>
      </div>
    </section>
  );
}
