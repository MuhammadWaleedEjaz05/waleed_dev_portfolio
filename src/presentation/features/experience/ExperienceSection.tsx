import { SectionHeader } from "@/presentation/components/common/SectionHeader";
import { TerminalWindow } from "@/presentation/components/common/TerminalWindow";
import { PromptLine } from "@/presentation/components/common/PromptLine";
import { EXPERIENCE } from "@/domain/data/portfolio.data";

export function ExperienceSection() {
  return (
    <section id="experience" className="px-4 md:px-12 py-20">
      <div className="max-w-4xl mx-auto">
        <SectionHeader command="cat experience.log" />

        <TerminalWindow title="experience.log">
          <div className="space-y-6">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="border-l-2 border-[rgba(0,255,65,0.3)] pl-4 hover:border-[#00ff41] transition-colors duration-300">
                <p className="text-[#6e7681] text-xs mb-1">{exp.period}</p>
                <p className="text-[#00ff41] font-semibold">{exp.role}</p>
                <p className="text-[#58a6ff]">@ {exp.company}</p>
                <p className="text-[#8b949e] text-xs">{exp.location}</p>
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-[rgba(0,255,65,0.1)]">
              <PromptLine>
                <span className="text-[#6e7681]">2 entries found · sorted by date desc</span>
              </PromptLine>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
