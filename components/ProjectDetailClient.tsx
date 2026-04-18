"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import TechTooltip from "./TechTooltip";

export default function ProjectDetailClient({ project }: any) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Lock scroll
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

      if (e.key === "Escape") setSelectedIndex(null);

      if (e.key === "ArrowRight") {
        setSelectedIndex((selectedIndex + 1) % project.images.length);
      }

      if (e.key === "ArrowLeft") {
        setSelectedIndex(
          (selectedIndex - 1 + project.images.length) % project.images.length,
        );
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, project]);

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
      <p className="mt-8 max-w-3xl text-white/80 leading-relaxed">
        {project.overview}
      </p>

      {/* Tech Stack */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
        <div className="flex flex-wrap gap-3">
          {project.techStack.map((tech: string, i: number) => (
            <TechTooltip key={i} tech={tech}>
              <span className="px-4 py-2 rounded-full text-sm bg-white/10 border border-white/20 hover:bg-white/20 transition">
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
          {project.features.map((feature: string, i: number) => (
            <li
              key={i}
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Image Grid */}
      <div className="mt-16  grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {project.images.map((img: string, i: number) => (
          <div
            key={i}
            className="relative aspect-video group overflow-hidden rounded-2xl border border-white/10 cursor-pointer">
            <Image
              src={img}
              alt={project.title}
              width={400}
              height={280}
              className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <button
                onClick={() => setSelectedIndex(i)}
                className="px-4 py-2 bg-white/20 rounded-full">
                VIEW
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed overflow-auto inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}>
          <Image
            src={project.images[selectedIndex]}
            alt="Preview"
            width={900}
            height={600}
            className="object-top"
          />
        </div>
      )}
    </div>
  );
}
