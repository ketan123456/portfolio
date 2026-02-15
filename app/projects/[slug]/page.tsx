"use client";

import { useState, useEffect } from "react";
import { projects } from "../../../Data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import TechTooltip from "../../../components/TechTooltip";

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Lock body scroll when modal open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.setProperty("overflow-y", "hidden", "important");
    } else {
      document.body.style.removeProperty("overflow-y");
    }

    return () => {
      document.body.style.removeProperty("overflow-y");
    };
  }, [selectedIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") {
        setSelectedIndex(null);
      }

      if (e.key === "ArrowRight") {
        setSelectedIndex((selectedIndex + 1) % project!.images.length);
      }

      if (e.key === "ArrowLeft") {
        setSelectedIndex(
          (selectedIndex - 1 + project!.images.length) % project!.images.length,
        );
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, project]);

  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-20 py-20">
      <Link
        href="/projects"
        className="text-white/60 hover:text-white transition">
        ← Back to Projects
      </Link>

      {/* Title */}
      <div className="mt-10">
        <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
        <p className="mt-4 text-white/70 text-lg">{project.tagline}</p>
      </div>

      {/* Role + URL */}
      <div className="mt-8 flex flex-wrap gap-6 text-white/70">
        <span>
          <strong>Role:</strong> {project.role}
        </span>

        <span>
          <strong>URL:</strong>{" "}
          {project.liveUrl && project.liveUrl.trim() !== "" ? (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-400 transition text-white">
              {project.liveUrl}
            </Link>
          ) : (
            <span className="text-gray-500">Not Available</span>
          )}
        </span>
      </div>
      {/* Overview */}
      <p className="mt-8 max-w-3xl block text-white/80 leading-relaxed">
        {project.overview}
      </p>

      {/* Tech Stack */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
        <div className="flex flex-wrap gap-3">
          {project.techStack.map((tech, i) => (
            <TechTooltip key={i} tech={tech}>
              <span
                className="
                relative
        px-5 py-2
        block
        rounded-full
        text-sm text-white/90
        bg-white/5
        backdrop-blur-2xl
        border border-white/10
        shadow-[0_0_20px_rgba(255,255,255,0.05)]
        transition-all duration-300
        hover:bg-white/10
        hover:border-white/20
        hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]
        hover:-translate-y-1
        cursor-pointer
        before:absolute before:inset-0 before:rounded-full
before:bg-gradient-to-r before:from-white/20 before:to-transparent
before:opacity-0 hover:before:opacity-100
before:transition
              ">
                {tech}
              </span>
            </TechTooltip>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Key Features</h3>
        <ul className="grid sm:grid-cols-2 gap-4">
          {project.features.map((feature, i) => (
            <li
              key={i}
              className="
                p-4
        rounded-2xl
        text-sm text-white/90
        bg-white/5
        backdrop-blur-2xl
        border border-white/10
        shadow-[0_0_20px_rgba(255,255,255,0.05)]
        transition-all duration-300
        hover:bg-white/10
        hover:border-white/20
        hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]
        hover:-translate-y-1
        cursor-pointer
        before:absolute before:inset-0 before:rounded-2xl
        before:bg-gradient-to-r before:from-white/20 before:to-transparent
        before:opacity-0 hover:before:opacity-100
        before:transition
              ">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Image Grid */}
      <div className="mt-16 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {project.images.map((img, i) => (
          <div
            key={i}
            className="
              relative group overflow-hidden
              rounded-3xl border border-white/10
              bg-white/5 backdrop-blur-8xl
              aspect-video cursor-pointer
            ">
            <Image
              src={img}
              alt={project.title}
              width={400}
              height={280}
              className="
                h-full
                object-cover
                transition duration-700
                group-hover:scale-110
              "
            />

            <div
              className="
              absolute inset-0 bg-black/25
              opacity-0 group-hover:opacity-100
              transition duration-500
            "
            />

            <div
              className="
              absolute inset-0 flex items-center justify-center
              opacity-0 group-hover:opacity-100
              transition duration-500
            ">
              <button
                onClick={() => setSelectedIndex(i)}
                className="
                px-5 py-2 rounded-full
                text-lg font-semibold text-white
                bg-white/10 
                border border-white/20
                shadow-lg
                hover:bg-white/20
                transition-colors duration-300 ease-out
                ">
                VIEW
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div
          className="
            fixed inset-0 z-50
            bg-black/90 backdrop-blur-md
            flex items-center justify-center
            p-6
          "
          onClick={() => setSelectedIndex(null)}>
          {/* Close */}
          <button
            className="
              absolute top-6 right-6
              text-white text-3xl
              hover:text-blue-400 transition
            "
            onClick={() => setSelectedIndex(null)}>
            ✕
          </button>

          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(
                (selectedIndex - 1 + project.images.length) %
                  project.images.length,
              );
            }}
            className="
              absolute left-6 h-14 w-14
              rounded-full
              bg-white/10 backdrop-blur-3xl
              border border-white/30
              flex items-center justify-center
              text-white text-2xl
              hover:bg-white/20 transition
            ">
            ←
          </button>

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex((selectedIndex + 1) % project.images.length);
            }}
            className="
              absolute right-6 h-14 w-14
              rounded-full
              bg-white/10 backdrop-blur-3xl
              border border-white/30
              flex items-center justify-center
              text-white text-2xl
              hover:bg-white/20 transition
            ">
            →
          </button>

          {/* Image */}
          <div
            className="relative max-w-6xl w-full aspect-video"
            onClick={(e) => e.stopPropagation()}>
            <Image
              src={project.images[selectedIndex]}
              alt="Preview"
              fill
              className="object-contain rounded-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
