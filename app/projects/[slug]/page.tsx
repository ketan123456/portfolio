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
          <strong>URL: </strong>
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

      <div className="mt-16 grid grid-flow- grid-rows-4 gap-10">
        {project.images.map((img, i) => (
          <div
            key={i}
            className="
              group
              overflow-hidden
              rounded-3xl
              border border-white/10
              bg-white/5
              backdrop-blur-2xl
            ">
            <Image
              src={img}
              alt={project.title}
              width={300}
              height={200}
              className="
                aspect-[4/3]
                transition duration-700
                group-hover:scale-105
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
}
