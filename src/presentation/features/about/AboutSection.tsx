import { SectionHeader } from "@/presentation/components/common/SectionHeader";
import { TerminalWindow } from "@/presentation/components/common/TerminalWindow";

export function AboutSection() {
  return (
    <section id="about" className="px-4 md:px-12 py-20">
      <div className="max-w-4xl mx-auto">
        <SectionHeader command="whoami" />

        <TerminalWindow title="neofetch">
          <div className="flex flex-col md:flex-row gap-8">
            <pre className="text-[#00ff41] text-xs leading-tight shrink-0 hidden sm:block">
{`  ██╗    ██╗
  ██║    ██║
  ██║ █╗ ██║
  ██║███╗██║
  ╚███╔███╔╝
   ╚══╝╚══╝

  waleed@portfolio
  ────────────────`}
            </pre>

            <div className="flex-1 space-y-1 text-sm">
              {[
                ["Name", "Waleed Ejaz"],
                ["Role", "Junior Flutter Developer"],
                ["Company", "ZainClouds, Multan"],
                ["Degree", "BS Computer Science (2022–2026)"],
                ["OS", "Pop!_OS (Linux) — daily driver"],
                ["Shell", "Dart / Zsh"],
                ["Editor", "VS Code"],
                ["Uptime", "Since 2022"],
                ["Packages", "Flutter  Firebase  Node.js  MongoDB"],
                ["Languages", "Dart  JS  HTML/CSS"],
                ["Focus", "Cross-platform mobile apps"],
                ["Status", "Open to opportunities"],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-2">
                  <span className="text-[#00ff41] w-24 shrink-0">{k}:</span>
                  <span className="text-[#c9d1d9]">{v}</span>
                </div>
              ))}

              <div className="mt-4 flex gap-1">
                {["#0d1117", "#00ff41", "#58a6ff", "#da8fff", "#ffa657", "#ff7b72", "#79c0ff", "#56d364"].map((c) => (
                  <div key={c} className="w-5 h-5 rounded-sm border border-[rgba(255,255,255,0.1)]" style={{ background: c }} />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[rgba(0,255,65,0.15)] text-[#8b949e] text-sm leading-relaxed">
            Dedicated Computer Science student and Junior Flutter Developer with a strong focus on
            cross-platform mobile app development. Experienced in building responsive, scalable, and
            performance-oriented apps with modern UI/UX standards. Also comfortable across web
            development, backend basics, and systems work.
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
