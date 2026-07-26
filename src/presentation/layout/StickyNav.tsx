import { useState, useEffect } from "react";
import { NAV_COMMANDS } from "@/domain/data/portfolio.data";
import type { Section } from "@/shared/types";

export function StickyNav({ active, onNavigate }: { active: Section; onNavigate: (s: Section) => void }) {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="bg-[rgba(13,17,23,0.95)] backdrop-blur border-b border-[rgba(0,255,65,0.15)] px-4 md:px-8 py-3">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button
            onClick={() => onNavigate("hero" as Section)}
            className="text-[#00ff41] text-sm font-['JetBrains_Mono',monospace] hover:text-white transition-colors cursor-pointer"
          >
            waleed@portfolio:~$
          </button>

          <div className="hidden md:flex items-center gap-1">
            {NAV_COMMANDS.map(({ cmd, section }) => (
              <button
                key={section}
                onClick={() => onNavigate(section)}
                className={`px-3 py-1 text-xs font-['JetBrains_Mono',monospace] rounded transition-all duration-200 cursor-pointer ${
                  active === section
                    ? "text-[#0d1117] bg-[#00ff41]"
                    : "text-[#6e7681] hover:text-[#00ff41]"
                }`}
              >
                {cmd}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-[#00ff41] cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-2 pt-2 border-t border-[rgba(0,255,65,0.15)] flex flex-col gap-1">
            {NAV_COMMANDS.map(({ cmd, section }) => (
              <button
                key={section}
                onClick={() => { onNavigate(section); setMenuOpen(false); }}
                className="text-left px-2 py-1.5 text-xs text-[#6e7681] hover:text-[#00ff41] font-['JetBrains_Mono',monospace] cursor-pointer"
              >
                $ {cmd}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
