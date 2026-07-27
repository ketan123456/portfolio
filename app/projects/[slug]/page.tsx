import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "../../../Data/projects";
import { Navbar } from "../../../components/Navbar";
import ProjectDetailClient from "../../../components/ProjectDetailClient";

type ProjectPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.tagline,
  };
}

export default function ProjectDetail({ params }: ProjectPageProps) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <ProjectDetailClient project={project} />
    </>
  );
}
