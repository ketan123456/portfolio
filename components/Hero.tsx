"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import TechBackground from "./TechBackground";
import { usePageReady } from "./usePageReady";

const roles = [
  "Frontend Developer",
  "UI Engineer",
  "Next.js Builder",
  "Product Thinker",
];

export default function Hero() {
  const ready = usePageReady();

  return (
    <section id="top" className="hero-section grid-surface">
      <TechBackground />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <div className="hero-content">
        <motion.div
          className="availability"
          initial={false}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <span />
          Available for select projects — 2026
        </motion.div>

        <motion.h1
          initial={false}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>KETAN</span>
          <span className="gradient-text">KRITESH.</span>
        </motion.h1>

        <motion.div
          className="role-cycler"
          initial={false}
          animate={ready ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.65, delay: 0.48 }}
        >
          <span className="role-line" />
          <div className="role-window">
            <div className="role-track">
              {roles.map((role) => (
                <span key={role}>{role}</span>
              ))}
              <span>{roles[0]}</span>
            </div>
          </div>
        </motion.div>

        <motion.p
          className="hero-copy"
          initial={false}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
        >
          I build scalable interfaces where clean engineering meets sharp
          visual craft — from enterprise dashboards to conversion-ready digital
          products.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={false}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link href="#projects" className="button button-primary">
            Explore work <span>→</span>
          </Link>
          <Link href="#contact" className="button button-ghost">
            Let&apos;s talk
          </Link>
        </motion.div>

        <motion.div
          className="scroll-cue"
          initial={false}
          animate={ready ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.65, delay: 0.88 }}
        >
          <span />
          Scroll to explore
        </motion.div>
      </div>

      <div className="hero-telemetry">
        <p>LOCATION: INDIA / REMOTE</p>
        <p>FOCUS: FRONTEND SYSTEMS</p>
        <p className="cyan">STATUS: OPERATIONAL</p>
      </div>
    </section>
  );
}
