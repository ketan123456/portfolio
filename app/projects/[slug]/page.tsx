"use client";

import { useState, useEffect } from "react";
import { projects } from "../../../Data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
useEffect(() => {
  if (selectedImage) {
    document.body.style.overflowY = "hidden";
    document.body.style.setProperty("overflow-y", "hidden", "important");
  } else {
    document.body.style.overflowY = "";
    document.body.style.removeProperty("overflow-y");
  }

  return () => {
    document.body.style.overflowY = "";
    document.body.style.removeProperty("overflow-y");
  };
}, [selectedImage]);
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-20 py-20">
      <Link
        href="/projects"
        className="text-white/60 hover:text-white transition">
        ← Back to Projects
      </Link>

      <div className="mt-10">
        <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
        <p className="mt-4 text-white/70 text-lg">{project.tagline}</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-6 text-white/70">
        <span>
          <strong>Role:</strong> {project.role}
        </span>

        <span>
          <strong>URL:</strong>{" "}
          {project.liveUrl ? (
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

      <p className="mt-8 max-w-3xl text-white/80 leading-relaxed">
        {project.overview}
      </p>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
        <div className="flex flex-wrap gap-3">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="
                px-4 py-2 rounded-full
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                text-sm
              ">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Key Features</h3>
        <ul className="grid sm:grid-cols-2 gap-4">
          {project.features.map((feature, i) => (
            <li
              key={i}
              className="
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                rounded-2xl
                p-4
                hover:bg-white/10
                transition
              ">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {project.images.map((img, i) => (
          <div
            key={i}
            className="
        relative
        group
        overflow-hidden
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-2xl
        aspect-video
        cursor-pointer
      ">
            <Image
              src={img}
              alt={project.title}
              fill
              className="
          object-cover
          transition duration-700
          group-hover:scale-110
        "
            />

            <div
              className="
          absolute inset-0
          bg-black/25
          opacity-0
          group-hover:opacity-100
          transition duration-500
        "
            />

            <div
              className="
          absolute inset-0
          flex items-center justify-center
          opacity-0
          group-hover:opacity-100
          transition duration-500
        ">
              <button
                className="
            relative
            px-12 py-4
            rounded-full
            text-lg font-semibold
            text-white
            bg-white/10
            backdrop-blur-3xl
            border border-white/30
            shadow-[0_0_30px_rgba(255,255,255,0.15)]
            hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]
            hover:bg-white/20
            transition duration-300
          "
                onClick={() => setSelectedImage(img)}>
                VIEW
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="
            fixed inset-0 z-50
            bg-black/90 backdrop-blur-md
            flex items-center justify-center
            p-6
          "
          onClick={() => setSelectedImage(null)}>
          <button
            className="
              absolute top-6 right-6
              text-white text-3xl
              hover:text-blue-400
              transition
            "
            onClick={() => setSelectedImage(null)}>
            ✕
          </button>

          <div
            className="relative max-w-6xl w-full aspect-video"
            onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
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
