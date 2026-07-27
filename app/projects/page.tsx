import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../../Data/projects";
import { Navbar } from "../../components/Navbar";

export const metadata: Metadata = {
  title: "Project Archive",
  description:
    "Selected frontend, e-commerce, education, healthcare, and operations projects by Ketan Kritesh.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="archive-page grid-surface">
        <header className="archive-hero">
          <div className="archive-kicker">Project archive / 2021 — 2026</div>
          <h1>
            SHIPPED
            <br />
            <span className="gradient-text">SYSTEMS.</span>
          </h1>
          <p>
            A complete collection of products spanning commerce, education,
            healthcare, restaurant operations, payments, and local services.
          </p>
        </header>

        <div className="archive-grid">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="archive-card"
            >
              <div className="archive-card-image">
                <Image
                  src={project.images[0]}
                  alt={`${project.title} interface`}
                  fill
                  priority={index < 2}
                  sizes="(max-width: 820px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="image-scanlines" />
              </div>
              <div className="archive-card-content">
                <div className="archive-card-number">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(projects.length).padStart(2, "0")}
                </div>
                <h2>{project.title}</h2>
                <p>{project.tagline}</p>
                <div className="tag-list">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="archive-card-action">
                  <span>{project.role}</span>
                  <span>View case study ↗</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
