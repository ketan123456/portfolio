"use client";

import { useRouter } from "next/navigation";

interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  tech: string[];
}

export default function ProjectCard({ project }: { project: Project }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/projects/${project.slug}`);
  };

  return (
    <div
      onClick={handleClick}
      className="
        group relative overflow-hidden
        cursor-pointer
        bg-white/5
        backdrop-blur-2xl
        border border-white/10
        rounded-3xl
        p-6
        transition-all duration-500
        hover:bg-white/10
        hover:border-white/20
        hover:backdrop-blur-3xl
        hover:-translate-y-2
      ">
      <h3 className="text-xl font-semibold text-white">{project.title}</h3>

      <p className="mt-2 text-white/70 text-sm">{project.shortDescription}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((t, i) => (
          <span
            key={i}
            className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
