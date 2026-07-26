import { useState } from "react";
import type { Project } from "@/shared/types";

export function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  const statusColor = project.status === "complete"
    ? "text-[#56d364]"
    : project.status === "in-progress"
    ? "text-[#ffa657]"
    : "text-[#da8fff]";

  const statusLabel = project.status === "complete"
    ? "[done]"
    : project.status === "in-progress"
    ? "[in-progress]"
    : "[fyp]";

  return (
    <div
      className={`border rounded-lg overflow-hidden transition-all duration-300 cursor-pointer group
        ${expanded
          ? "border-[#00ff41] shadow-[0_0_20px_rgba(0,255,65,0.15)]"
          : "border-[rgba(0,255,65,0.2)] hover:border-[rgba(0,255,65,0.5)]"
        }`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-center gap-3 px-4 py-3 bg-[#161b22] border-b border-[rgba(0,255,65,0.15)]">
        <span className="text-[#00ff41] text-lg">{expanded ? "📂" : "📁"}</span>
        <span className="text-[#c9d1d9] flex-1 font-semibold text-sm">{project.name}/</span>
        <span className={`text-xs ${statusColor}`}>{statusLabel}</span>
      </div>

      <div className="p-4 bg-[#0d1117] font-['JetBrains_Mono',monospace] text-sm">
        <p className="text-[#8b949e] text-xs mb-3">{project.desc}</p>

        <div className="flex flex-wrap gap-1.5 mb-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 text-xs border border-[rgba(0,255,65,0.25)] text-[#00ff41] rounded">
              {tag}
            </span>
          ))}
        </div>

        {expanded && (
          <div
            className="mt-4 pt-4 border-t border-[rgba(0,255,65,0.15)] space-y-1"
            style={{ animation: "fadeIn 0.3s ease" }}
          >
            {project.details.map((d, i) => (
              <p key={i} className="text-[#c9d1d9] text-xs flex gap-2">
                <span className="text-[#00ff41] shrink-0">→</span>
                <span>{d}</span>
              </p>
            ))}
            {project.github && (
              <p className="mt-3 text-xs">
                <span className="text-[#6e7681]">GitHub: </span>
                <a
                  href={`https://${project.github}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#58a6ff] hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  {project.github}
                </a>
              </p>
            )}
            {!project.github && (
              <p className="mt-3 text-xs text-[#6e7681]">GitHub: — (repo not yet public)</p>
            )}
          </div>
        )}

        <p className="mt-3 text-xs text-[#6e7681]">
          {expanded ? "▲ collapse" : "▼ expand"}
        </p>
      </div>
    </div>
  );
}
