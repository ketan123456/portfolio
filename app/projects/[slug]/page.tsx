import { projects } from "../../../Data/projects";
import { notFound } from "next/navigation";
import ProjectDetailClient from "../../../components/ProjectDetailClient";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return <ProjectDetailClient project={project} />;
}
