import { useState, useEffect, useRef, useCallback } from "react";
import { SectionHeader } from "@/presentation/components/common/SectionHeader";
import { PromptLine } from "@/presentation/components/common/PromptLine";
import { BlinkingCursor } from "@/presentation/components/common/BlinkingCursor";
import { handleCommand } from "./handleCommand";
import type { Section } from "@/shared/types";

interface TermEntry {
  type: "input" | "output";
  text?: string;
  lines?: string[];
}

export function InteractiveTerminal({ onNavigate }: { onNavigate: (s: Section) => void }) {
  const [history, setHistory] = useState<TermEntry[]>([
    {
      type: "output",
      lines: [
        "Waleed's Portfolio Terminal v1.0.0",
        "Type 'help' for available commands.",
        "",
      ],
    },
  ]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollBottom = useCallback(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => { scrollBottom(); }, [history, scrollBottom]);

  const submit = () => {
    const cmd = input.trim();
    setInput("");
    setHistIdx(-1);

    if (cmd) setCmdHistory((h) => [cmd, ...h]);

    if (cmd.toLowerCase() === "clear") {
      setHistory([]);
      return;
    }

    const result = handleCommand(cmd);
    setHistory((h) => [
      ...h,
      { type: "input", text: cmd },
      { type: "output", lines: result.lines },
    ]);

    if (result.scrollTo) {
      setTimeout(() => onNavigate(result.scrollTo!), 400);
    }
  };

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") { submit(); return; }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(histIdx + 1, cmdHistory.length - 1);
      setHistIdx(next);
      setInput(cmdHistory[next] ?? "");
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.max(histIdx - 1, -1);
      setHistIdx(next);
      setInput(next === -1 ? "" : cmdHistory[next] ?? "");
    }
  };

  return (
    <section id="terminal" className="px-4 md:px-12 py-20">
      <div className="max-w-4xl mx-auto">
        <SectionHeader command="bash -i" />

        <div className="rounded-lg border border-[rgba(0,255,65,0.2)] overflow-hidden shadow-[0_0_60px_rgba(0,255,65,0.08)]">
          <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-[rgba(0,255,65,0.15)]">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="ml-3 text-xs text-[#6e7681] font-['JetBrains_Mono',monospace]">
              waleed@portfolio: ~ — bash
            </span>
            <span className="ml-auto text-xs text-[#6e7681]">interactive</span>
          </div>

          <div
            className="bg-[#0d1117] p-4 font-['JetBrains_Mono',monospace] text-sm h-80 overflow-y-auto"
            onClick={() => inputRef.current?.focus()}
            style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(0,255,65,0.2) transparent" }}
          >
            {history.map((entry, i) => (
              <div key={i} className="mb-1">
                {entry.type === "input" && (
                  <PromptLine>
                    <span className="text-[#c9d1d9]">{entry.text}</span>
                  </PromptLine>
                )}
                {entry.type === "output" && entry.lines && entry.lines.map((line, j) => (
                  <p key={j} className={`${line.startsWith("bash:") ? "text-[#ff7b72]" : "text-[#c9d1d9]"} whitespace-pre`}>
                    {line}
                  </p>
                ))}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <div className="flex items-center gap-2 px-4 py-3 bg-[#0d1117] border-t border-[rgba(0,255,65,0.15)]">
            <PromptLine />
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKey}
              className="flex-1 bg-transparent border-none outline-none text-[#c9d1d9] text-sm font-['JetBrains_Mono',monospace] caret-[#00ff41]"
              placeholder="type a command..."
              autoFocus
              spellCheck={false}
            />
            <BlinkingCursor />
          </div>
        </div>

        <p className="mt-3 text-xs text-[#6e7681] text-center font-['JetBrains_Mono',monospace]">
          try: help · whoami · neofetch · ls projects/ · date · clear
        </p>
      </div>
    </section>
  );
}
