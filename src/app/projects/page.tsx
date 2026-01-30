import { cleanContent } from "@/data/portfolio";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  const { projects } = cleanContent;

  return (
    <main className="min-h-screen pt-48 pb-16 px-6 max-w-6xl mx-auto">
      <h1 className="text-xl font-medium mb-12 transition-opacity duration-300 hover:opacity-50 cursor-default tracking-tight text-[#1a1a1a]">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </main>
  );
}
