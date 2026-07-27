"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import TechBackground from "./TechBackground";
import { revealEase, revealViewport } from "./motionConfig";

const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ketan-kritesh-7b662b136/",
  },
  { label: "Email", href: "mailto:kriteshketan@gmail.com" },
  { label: "Call", href: "tel:+9188882138411" },
  { label: "Work", href: "/projects" },
];

export default function Contact() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: revealEase },
    },
  };

  return (
    <section id="contact" className="contact-section grid-surface">
      <TechBackground />
      <div className="ambient ambient-contact" />
      <motion.div
        className="contact-content"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
      >
        <motion.div className="eyebrow" variants={item}>
          07 / Get in touch
        </motion.div>
        <motion.h2 variants={item}>
          LET&apos;S BUILD
          <br />
          <span className="gradient-text">SOMETHING</span>
          <br />
          <span className="gradient-text gradient-purple">EXTRAORDINARY.</span>
        </motion.h2>
        <motion.p variants={item}>
          Have a product to ship, a frontend to sharpen, or a digital experience
          that needs a stronger point of view? Let&apos;s talk.
        </motion.p>

        <motion.div className="contact-links" variants={item}>
          {contactLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link.label} <span>↗</span>
            </Link>
          ))}
        </motion.div>

        <motion.div className="direct-email" variants={item}>
          <span>Or just say hi —</span>
          <Link href="mailto:kriteshketan@gmail.com">
            kriteshketan@gmail.com
          </Link>
        </motion.div>
      </motion.div>

      <footer>
        <span>© 2026 Ketan Kritesh — Crafted with intent.</span>
        <span>Built with Next.js · Framer Motion · TypeScript</span>
      </footer>
    </section>
  );
}
