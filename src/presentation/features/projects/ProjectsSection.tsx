import { SectionHeader } from "@/presentation/components/common/SectionHeader";
import { TerminalWindow } from "@/presentation/components/common/TerminalWindow";
import { PromptLine } from "@/presentation/components/common/PromptLine";
import { ProjectCard } from "./components/ProjectCard";
import { PROJECTS } from "@/domain/data/portfolio.data";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-4 md:px-12 py-20">
      <div className="max-w-4xl mx-auto">
        <SectionHeader command="ls projects/" />

        <div className="grid sm:grid-cols-2 gap-4">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        <div className="mt-4">
          <TerminalWindow>
            <PromptLine>
              <span className="text-[#6e7681]">4 directories · click any folder to expand</span>
            </PromptLine>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
}
