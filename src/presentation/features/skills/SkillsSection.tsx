import { SectionHeader } from "@/presentation/components/common/SectionHeader";
import { TerminalWindow } from "@/presentation/components/common/TerminalWindow";
import { SKILLS } from "@/domain/data/portfolio.data";

export function SkillsSection() {
  return (
    <section id="skills" className="px-4 md:px-12 py-20">
      <div className="max-w-4xl mx-auto">
        <SectionHeader command="cat skills.txt" />

        <TerminalWindow title="skills.txt">
          <div className="grid sm:grid-cols-2 gap-6">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div key={category}>
                <p className="text-[#00ff41] mb-2">┌── {category}</p>
                {items.map((item, i) => (
                  <p key={item} className="text-[#c9d1d9] pl-2">
                    <span className="text-[#6e7681]">{i === items.length - 1 ? "└" : "├"}── </span>
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
