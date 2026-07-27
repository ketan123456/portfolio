"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { ProjectType } from "../Data/projects";

export default function ProjectDetailClient({
  project,
}: {
  project: ProjectType;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedIndex === null ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowRight") {
        setSelectedIndex((selectedIndex + 1) % project.images.length);
      }
      if (event.key === "ArrowLeft") {
        setSelectedIndex(
          (selectedIndex - 1 + project.images.length) % project.images.length,
        );
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [project.images.length, selectedIndex]);

  const liveUrl = project.liveUrl?.trim();

  return (
    <main className="case-page">
      <section className="case-hero grid-surface">
        <div className="case-hero-bg">
          <Image
            src={project.images[0]}
            alt=""
            fill
            priority
            sizes="100vw"
          />
          <div className="case-hero-overlay" />
        </div>

        <div className="case-hero-content">
          <Link href="/projects" className="case-back">
            ← Back to archive
          </Link>
          <div className="case-label">Case study / Product interface</div>
          <h1>{project.title}</h1>
          <div className="case-hero-bottom">
            <p className="case-tagline">{project.tagline}</p>
            <div className="case-meta">
              <div>
                <span>ROLE</span>
                <strong>{project.role}</strong>
              </div>
              <div>
                <span>LIVE PRODUCT</span>
                {liveUrl ? (
                  <Link href={liveUrl} target="_blank" rel="noreferrer">
                    Visit website ↗
                  </Link>
                ) : (
                  <strong>Private deployment</strong>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="case-body">
        <section className="case-overview">
          <div>
            <div className="case-section-label">01 / Overview</div>
            <h2>
              The product
              <br />
              <span className="gradient-text">in context.</span>
            </h2>
          </div>
          <div className="case-overview-copy">
            <p>{project.overview}</p>
            <div className="case-tech">
              {project.techStack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="case-features">
          <div className="case-section-label">02 / System capabilities</div>
          <h2>
            Built around
            <br />
            <span className="gradient-text">real workflows.</span>
          </h2>
          <ol className="feature-list">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ol>
        </section>

        <section>
          <div className="case-gallery-heading">
            <div>
              <div className="case-section-label">03 / Interface gallery</div>
              <h2>
                Product
                <br />
                <span className="gradient-text">in motion.</span>
              </h2>
            </div>
            <p>Click any frame to inspect</p>
          </div>

          <div className="case-gallery">
            {project.images.map((image, index) => (
              <button
                key={image}
                type="button"
                className="case-gallery-button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`Open ${project.title} screenshot ${index + 1}`}
              >
                <Image
                  src={image}
                  alt={`${project.title} interface ${index + 1}`}
                  fill
                  sizes="(max-width: 600px) 100vw, 50vw"
                />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </button>
            ))}
          </div>
        </section>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} image viewer`}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close image viewer"
            >
              ×
            </button>
            <button
              type="button"
              className="lightbox-nav prev"
              onClick={(event) => {
                event.stopPropagation();
                setSelectedIndex(
                  (selectedIndex - 1 + project.images.length) %
                    project.images.length,
                );
              }}
              aria-label="Previous image"
            >
              ←
            </button>
            <div
              className="lightbox-image"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={project.images[selectedIndex]}
                alt={`${project.title} enlarged interface`}
                fill
                sizes="90vw"
                priority
              />
            </div>
            <button
              type="button"
              className="lightbox-nav next"
              onClick={(event) => {
                event.stopPropagation();
                setSelectedIndex((selectedIndex + 1) % project.images.length);
              }}
              aria-label="Next image"
            >
              →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
