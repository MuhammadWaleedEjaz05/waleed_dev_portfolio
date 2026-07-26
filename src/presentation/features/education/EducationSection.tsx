import { SectionHeader } from "@/presentation/components/common/SectionHeader";
import { TerminalWindow } from "@/presentation/components/common/TerminalWindow";
import { PromptLine } from "@/presentation/components/common/PromptLine";
import { EDUCATION } from "@/domain/data/portfolio.data";

export function EducationSection() {
  return (
    <section id="education" className="px-4 md:px-12 py-20">
      <div className="max-w-4xl mx-auto">
        <SectionHeader command="cat education.log" />

        <TerminalWindow title="education.log">
          <div className="space-y-6">
            {EDUCATION.map((edu, i) => (
              <div key={i} className="border-l-2 border-[rgba(88,166,255,0.4)] pl-4 hover:border-[#58a6ff] transition-colors duration-300">
                <p className="text-[#6e7681] text-xs mb-1">{edu.period}</p>
                <p className="text-[#58a6ff] font-semibold">{edu.degree}</p>
                <p className="text-[#c9d1d9]">{edu.institution}</p>
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-[rgba(0,255,65,0.1)]">
              <PromptLine>
                <span className="text-[#6e7681]">3 entries found · BSCS ongoing (expected 2026-09)</span>
              </PromptLine>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
