import Link from "next/link";
import { projects } from "../../Data/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-20">
      <Link
        href="/"
        className="text-white/60  hover:text-white transition">
        ← Back to Home
      </Link>
      <h1 className="text-4xl md:text-5xl mt-3 font-bold mb-14">Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <div
              className="
                group relative overflow-hidden
                bg-white/5
                backdrop-blur-2xl
                border border-white/10
                rounded-3xl
                p-6
                transition-all duration-500
                hover:bg-white/10
                hover:border-white/20
                hover:-translate-y-3
                hover:shadow-2xl
              ">
              <h3 className="text-xl font-semibold">{project.title}</h3>

              <p className="mt-2 text-white/70 text-sm">{project.tagline}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80">
                    {tech}
                  </span>
                ))}
              </div>

              <div
                className="
                absolute inset-0
                opacity-0
                group-hover:opacity-100
                transition duration-700
                bg-gradient-to-br from-white/10 via-transparent to-transparent
              "
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
