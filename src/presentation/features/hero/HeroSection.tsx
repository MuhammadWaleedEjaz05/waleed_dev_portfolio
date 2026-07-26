import { useTypewriter } from "@/presentation/hooks/useTypewriter";
import { BlinkingCursor } from "@/presentation/components/common/BlinkingCursor";
import { PromptLine } from "@/presentation/components/common/PromptLine";
import { TerminalWindow } from "@/presentation/components/common/TerminalWindow";
import { NAV_COMMANDS } from "@/domain/data/portfolio.data";
import type { Section } from "@/shared/types";

export function HeroSection({ onNavigate }: { onNavigate: (s: Section) => void }) {
  const line1 = useTypewriter("Initializing portfolio...", 40, 300);
  const line2 = useTypewriter("Loading Waleed Ejaz's profile...", 40, 1400);
  const line3 = useTypewriter("Done.", 60, 2800);
  const line4 = useTypewriter("$ whoami", 70, 3400);
  const name = useTypewriter("Waleed Ejaz", 80, 4600);
  const role = useTypewriter("Flutter · Mobile · Web Developer", 40, 5700);
  const bio = useTypewriter("Based in Multan, Pakistan · Building cross-platform apps since 2022", 30, 6800);

  return (
    <section className="min-h-screen flex flex-col justify-center px-4 md:px-12 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <TerminalWindow title="waleed@portfolio: ~">
          <div className="space-y-2 min-h-[320px]">
            <div className="text-[#6e7681]">
              {line1.displayed && <p>[  0.001] {line1.displayed}</p>}
              {line2.displayed && <p>[  0.042] {line2.displayed}</p>}
              {line3.displayed && <p className="text-[#00ff41]">[  0.087] {line3.displayed}</p>}
            </div>

            {line3.done && (
              <div className="mt-4 space-y-1">
                <PromptLine>
                  <span className="text-[#c9d1d9]">{line4.displayed}</span>
                  {!line4.done && <BlinkingCursor className="ml-1" />}
                </PromptLine>

                {line4.done && (
                  <div className="mt-4 space-y-1 pl-2 border-l-2 border-[rgba(0,255,65,0.3)]">
                    <p className="text-3xl md:text-5xl font-bold text-[#00ff41] tracking-tight leading-tight">
                      {name.displayed}
                      {!name.done && <BlinkingCursor />}
                    </p>
                    {name.done && (
                      <p className="text-lg text-[#58a6ff]">
                        {role.displayed}
                        {!role.done && <BlinkingCursor />}
                      </p>
                    )}
                    {role.done && (
                      <p className="text-[#8b949e] text-sm mt-1">
                        {bio.displayed}
                        {!bio.done && <BlinkingCursor />}
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}

            {bio.done && (
              <div className="mt-8 flex flex-wrap gap-3 animate-[fadeIn_0.5s_ease_forwards]">
                {NAV_COMMANDS.slice(0, 6).map(({ cmd, section }) => (
                  <button
                    key={section}
                    onClick={() => onNavigate(section)}
                    className="px-3 py-1.5 border border-[rgba(0,255,65,0.3)] text-[#00ff41] text-xs rounded hover:bg-[rgba(0,255,65,0.1)] hover:border-[#00ff41] transition-all duration-200 cursor-pointer"
                  >
                    $ {cmd}
                  </button>
                ))}
              </div>
            )}
          </div>
        </TerminalWindow>

        {bio.done && (
          <div
            className="mt-4 text-center text-[#6e7681] text-xs animate-[fadeIn_1s_ease_forwards]"
            style={{ animation: "fadeIn 1s ease 0.3s both" }}
          >
            scroll down to explore · or type commands in terminal →{" "}
            <button
              onClick={() => onNavigate("terminal")}
              className="text-[#00ff41] hover:underline cursor-pointer"
            >
              bash -i
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
