import { useState } from "react";
import { SectionHeader } from "@/presentation/components/common/SectionHeader";
import { TerminalWindow } from "@/presentation/components/common/TerminalWindow";
import { PromptLine } from "@/presentation/components/common/PromptLine";
import { CONTACT } from "@/domain/data/portfolio.data";

export function ContactSection() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" className="px-4 md:px-12 py-20">
      <div className="max-w-4xl mx-auto">
        <SectionHeader command="./contact.sh" />

        <TerminalWindow title="contact.sh — executable">
          <div className="space-y-3">
            <p className="text-[#6e7681] text-xs mb-4">#!/bin/bash</p>
            {CONTACT.map(({ key, value, href }) => (
              <div key={key} className="flex items-center gap-4 group">
                <span className="text-[#00ff41] w-20 shrink-0">{key}</span>
                <span className="text-[#6e7681]">:</span>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="text-[#58a6ff] hover:text-[#00ff41] hover:underline transition-colors duration-200 flex-1"
                  >
                    {value}
                  </a>
                ) : (
                  <span className="text-[#c9d1d9] flex-1">{value}</span>
                )}
                <button
                  onClick={() => copy(value, key)}
                  className="opacity-0 group-hover:opacity-100 text-xs text-[#6e7681] hover:text-[#00ff41] transition-all duration-200 px-2 py-0.5 border border-[rgba(0,255,65,0.2)] rounded cursor-pointer"
                >
                  {copied === key ? "copied!" : "copy"}
                </button>
              </div>
            ))}
            <div className="mt-6 pt-4 border-t border-[rgba(0,255,65,0.15)]">
              <PromptLine>
                <span className="text-[#00ff41]">script exited 0</span>
                <span className="text-[#6e7681] ml-2">· hover any row to copy</span>
              </PromptLine>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
