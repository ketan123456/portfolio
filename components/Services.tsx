"use client";

import { motion } from "framer-motion";
import { revealTransition, revealViewport } from "./motionConfig";

const services = [
  {
    title: "Frontend development",
    copy: "React and Next.js applications engineered for scale, speed, and maintainability.",
  },
  {
    title: "Product dashboards",
    copy: "Clear, responsive interfaces for complex data, workflows, roles, and operations.",
  },
  {
    title: "UI implementation",
    copy: "High-fidelity translation of product designs into accessible production code.",
  },
  {
    title: "E-commerce systems",
    copy: "Conversion-focused storefronts, vendor portals, checkout flows, and admin tools.",
  },
  {
    title: "Performance work",
    copy: "Rendering, bundle, interaction, and responsive-layout improvements that users feel.",
  },
  {
    title: "Website redesign",
    copy: "Modern visual systems that preserve business logic while lifting the experience.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section section-services grid-surface">
      <div className="section-shell">
        <div className="eyebrow">05 / Services</div>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={revealTransition}
        >
          What I build
          <br />
          <span className="gradient-text">for product teams.</span>
        </motion.h2>

        <div className="service-grid">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={revealViewport}
              transition={{
                ...revealTransition,
                delay: (index % 3) * 0.09,
              }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <i>↗</i>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
