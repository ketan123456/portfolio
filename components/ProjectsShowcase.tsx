"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../Data/projects";
import { revealTransition, revealViewport } from "./motionConfig";

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="section section-projects">
      <div className="section-shell">
        <div className="eyebrow">03 / Selected work</div>
        <div className="projects-heading-row">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={revealTransition}
          >
            Projects that
            <br />
            <span className="gradient-text">earned their place.</span>
          </motion.h2>
          <p className="section-intro">
            Selected from shipped products across commerce, education,
            healthcare, operations, and local services.
          </p>
        </div>

        <div className="project-stack">
          {projects.slice(0, 4).map((project, index) => (
            <motion.article
              key={project.slug}
              className="featured-project"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={revealViewport}
              transition={{ duration: 0.85, ease: revealTransition.ease }}
            >
              <div className="featured-project-image">
                <Image
                  src={project.images[0]}
                  alt={`${project.title} interface`}
                  fill
                  sizes="(max-width: 900px) 100vw, 58vw"
                  className="object-cover"
                />
                <div className="image-scanlines" />
              </div>

              <div className="featured-project-info">
                <div className="project-index">
                  {String(index + 1).padStart(2, "0")} / 04
                </div>
                <div className="tag-list">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p className="project-tagline">{project.tagline}</p>
                <div className="project-proof">
                  <span>ROLE</span>
                  <p>{project.role}</p>
                  <span>SYSTEM</span>
                  <p>{project.features[0]}</p>
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-link"
                >
                  View case study <span>↗</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <Link href="/projects" className="archive-link">
          <span>Explore complete project archive</span>
          <strong>07 PROJECTS ↗</strong>
        </Link>
      </div>
    </section>
  );
}
